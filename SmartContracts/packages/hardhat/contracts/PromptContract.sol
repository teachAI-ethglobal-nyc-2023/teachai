// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract PromptMarketContract is Ownable {

    /**
     * DEFINE THE PUBLIC VARIABLES
     */
    IERC20 public taiToken;
    uint256 public promptCount;
    uint256 public modelCount;
    
    /**
     * DEFINE THE STRUCTS
     */
    struct Prompt {
        string question;
        string option1;
        string option2;
        bool inference; // false if no inference has been made yet 
        address inferenceProvider; // address of the inference provider
        bool responded; // false if no feedback, true if feedback
        bool isOneBetter; // true if option1 is better
        address responder; // address of the feedback provider
    }

    struct Model {
        string modelID;
        address modelOwner;
        string modelTitle;
    }

    /**
     * DEFINE THE MAPPINGS
     */
    mapping(uint256 => Prompt) public prompts;
    mapping(uint256 => Model) public models;

    /**
     * DEFINE THE EVENTS
     */
    event logModel (
        uint256 indexed modelNumber,
        string modelID,
        string modelTitle,
        address modelOwner
    );

    event logPrompt(
        uint256 indexed promptNumber, 
        uint256 indexed modelNumber, 
        string question, 
        string option1, 
        string option2
    );
    
    /**
    event PromptResponse(
        uint256 indexed promptNumber, 
        uint256 responseIndex, 
        address responder
    );
     */

    event logInference (
        uint256 indexed promptNumber,
        string textOne,
        string textTwo,
        uint256 modelNumber
    );

    event logFeedback (
        uint256 indexed promptNumber,
        bool isOneBetter,
        address feedbackProvider
    );

    event logBroadcast (
        string cid, 
        address broadcaster
    );

    /**
     * DEFINE THE CONSTRUCTOR
     */
    constructor(address _taiToken) {
        taiToken = IERC20(_taiToken);
        promptCount = 0;
        modelCount = 0;
    }

    /**
     * DEFINE THE FUNCTIONS
     */
    function updateModel(
        string memory _modelID,
        address _modelOwner,
        string memory _modelTitle
    ) public onlyOwner {
       
        // Increment the model count
        modelCount++;

        // Add the model to the models mapping
        models[modelCount] = Model({
            modelID: _modelID,
            modelOwner: _modelOwner,
            modelTitle: _modelTitle
        });
       
        // Emit the logModel event
        emit logModel(
            modelCount, 
            _modelID, 
            _modelTitle, 
            _modelOwner
        );
    }

    function setPrompt(string memory question) external {
        require(bytes(question).length > 0, "Question must not be empty");

        // Transfer 0.5 TAI from the sender to this contract
        uint256 paymentAmount = 0.01 ether;
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
            inference: false,
            inferenceProvider: address(0),
            responded: false,
            isOneBetter: false,
            responder: address(0)
        });

        emit logPrompt(
            promptCount, 
            modelCount,
            question, 
            option1, 
            option2
        );
    }

    function createInference(
        uint256 promptNumber, 
        string memory textOne,
        string memory textTwo
    ) external {
        require(promptNumber > 0 && promptNumber <= promptCount, "Invalid prompt number");
        Prompt storage prompt = prompts[promptNumber];
        require(!prompt.inference, "Prompt already responded to");

        prompt.option1 = textOne;
        prompt.option2 = textTwo;
        prompt.inference = true;
        prompt.inferenceProvider = msg.sender;

        emit logInference(
            promptNumber, 
            textOne,
            textTwo, 
            modelCount
        );
    }

    function respondToPromptOptions(uint256 promptNumber, uint256 responseIndex) external {
        require(promptNumber > 0 && promptNumber <= promptCount, "Invalid prompt number");
        Prompt storage prompt = prompts[promptNumber];
        require(!prompt.responded, "Prompt already responded to");
        require(responseIndex == 1 || responseIndex == 2, "Invalid response index");

        prompt.responded = true;
        prompt.responder = msg.sender;

        if (responseIndex == 1) {
            prompt.isOneBetter = true;
        } else {
            prompt.isOneBetter = false;
        }

        // Transfer 0.25 TAI to the responder
        uint256 rewardAmount = 0.005 ether;
        taiToken.transfer(msg.sender, rewardAmount);

        // emit PromptResponse(promptNumber, responseIndex, msg.sender);
        emit logFeedback(
            promptNumber, 
            prompt.isOneBetter,
            msg.sender
        );
    }

    // can be called by a user to signal they have published a dataset to IPFS
    function broadcastUpload(string memory cid) external {
        emit logBroadcast(
            cid, 
            msg.sender
        );
    }

    function withdrawTokens(address to, uint256 amount) external onlyOwner {
        taiToken.transfer(to, amount);
    }
}
