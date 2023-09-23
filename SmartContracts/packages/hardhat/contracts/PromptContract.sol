// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract PromptMarketContract is Ownable {
    IERC20 public taiToken;
    uint256 public promptCount;
    
    struct Prompt {
        string question;
        string option1;
        string option2;
        bool responded;
        address responder;
    }

    mapping(uint256 => Prompt) public prompts;

    event PromptSet(uint256 indexed promptNumber, string question, string option1, string option2);
    event PromptResponse(uint256 indexed promptNumber, uint256 responseIndex, address responder);

    constructor(address _taiToken) {
        taiToken = IERC20(_taiToken);
        promptCount = 0;
    }

    function setPrompt(string memory question) external {
        require(bytes(question).length > 0, "Question must not be empty");

        // Transfer 0.5 TAI from the sender to this contract
        uint256 paymentAmount = 0.5 ether;
        require(
            taiToken.transferFrom(msg.sender, address(this), paymentAmount),
            "Payment failed"
        );

        // Increment the prompt count
        promptCount++;
        
        // Generate options (for example, from an external source)
        string memory option1 = "Option A";
        string memory option2 = "Option B";

        prompts[promptCount] = Prompt({
            question: question,
            option1: option1,
            option2: option2,
            responded: false,
            responder: address(0)
        });

        emit PromptSet(promptCount, question, option1, option2);
    }

    function respondToPromptOptions(uint256 promptNumber, uint256 responseIndex) external {
        require(promptNumber > 0 && promptNumber <= promptCount, "Invalid prompt number");
        Prompt storage prompt = prompts[promptNumber];
        require(!prompt.responded, "Prompt already responded to");
        require(responseIndex == 1 || responseIndex == 2, "Invalid response index");

        prompt.responded = true;
        prompt.responder = msg.sender;

        // Transfer 0.25 TAI to the responder
        uint256 rewardAmount = 0.25 ether;
        taiToken.transfer(msg.sender, rewardAmount);

        emit PromptResponse(promptNumber, responseIndex, msg.sender);
    }

    function withdrawTokens(address to, uint256 amount) external onlyOwner {
        taiToken.transfer(to, amount);
    }
}
