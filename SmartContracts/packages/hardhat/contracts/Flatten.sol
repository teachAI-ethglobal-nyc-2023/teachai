// Sources flattened with hardhat v2.17.3 https://hardhat.org

// SPDX-License-Identifier: MIT

// File @openzeppelin/contracts/utils/Context.sol@v4.9.3

// Original license: SPDX_License_Identifier: MIT
// OpenZeppelin Contracts v4.4.1 (utils/Context.sol)

pragma solidity ^0.8.0;

/**
 * @dev Provides information about the current execution context, including the
 * sender of the transaction and its data. While these are generally available
 * via msg.sender and msg.data, they should not be accessed in such a direct
 * manner, since when dealing with meta-transactions the account sending and
 * paying for execution may not be the actual sender (as far as an application
 * is concerned).
 *
 * This contract is only required for intermediate, library-like contracts.
 */
abstract contract Context {
    function _msgSender() internal view virtual returns (address) {
        return msg.sender;
    }

    function _msgData() internal view virtual returns (bytes calldata) {
        return msg.data;
    }
}


// File @openzeppelin/contracts/access/Ownable.sol@v4.9.3

// Original license: SPDX_License_Identifier: MIT
// OpenZeppelin Contracts (last updated v4.9.0) (access/Ownable.sol)

pragma solidity ^0.8.0;

/**
 * @dev Contract module which provides a basic access control mechanism, where
 * there is an account (an owner) that can be granted exclusive access to
 * specific functions.
 *
 * By default, the owner account will be the one that deploys the contract. This
 * can later be changed with {transferOwnership}.
 *
 * This module is used through inheritance. It will make available the modifier
 * `onlyOwner`, which can be applied to your functions to restrict their use to
 * the owner.
 */
abstract contract Ownable is Context {
    address private _owner;

    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);

    /**
     * @dev Initializes the contract setting the deployer as the initial owner.
     */
    constructor() {
        _transferOwnership(_msgSender());
    }

    /**
     * @dev Throws if called by any account other than the owner.
     */
    modifier onlyOwner() {
        _checkOwner();
        _;
    }

    /**
     * @dev Returns the address of the current owner.
     */
    function owner() public view virtual returns (address) {
        return _owner;
    }

    /**
     * @dev Throws if the sender is not the owner.
     */
    function _checkOwner() internal view virtual {
        require(owner() == _msgSender(), "Ownable: caller is not the owner");
    }

    /**
     * @dev Leaves the contract without owner. It will not be possible to call
     * `onlyOwner` functions. Can only be called by the current owner.
     *
     * NOTE: Renouncing ownership will leave the contract without an owner,
     * thereby disabling any functionality that is only available to the owner.
     */
    function renounceOwnership() public virtual onlyOwner {
        _transferOwnership(address(0));
    }

    /**
     * @dev Transfers ownership of the contract to a new account (`newOwner`).
     * Can only be called by the current owner.
     */
    function transferOwnership(address newOwner) public virtual onlyOwner {
        require(newOwner != address(0), "Ownable: new owner is the zero address");
        _transferOwnership(newOwner);
    }

    /**
     * @dev Transfers ownership of the contract to a new account (`newOwner`).
     * Internal function without access restriction.
     */
    function _transferOwnership(address newOwner) internal virtual {
        address oldOwner = _owner;
        _owner = newOwner;
        emit OwnershipTransferred(oldOwner, newOwner);
    }
}


// File @openzeppelin/contracts/token/ERC20/IERC20.sol@v4.9.3

// Original license: SPDX_License_Identifier: MIT
// OpenZeppelin Contracts (last updated v4.9.0) (token/ERC20/IERC20.sol)

pragma solidity ^0.8.0;

/**
 * @dev Interface of the ERC20 standard as defined in the EIP.
 */
interface IERC20 {
    /**
     * @dev Emitted when `value` tokens are moved from one account (`from`) to
     * another (`to`).
     *
     * Note that `value` may be zero.
     */
    event Transfer(address indexed from, address indexed to, uint256 value);

    /**
     * @dev Emitted when the allowance of a `spender` for an `owner` is set by
     * a call to {approve}. `value` is the new allowance.
     */
    event Approval(address indexed owner, address indexed spender, uint256 value);

    /**
     * @dev Returns the amount of tokens in existence.
     */
    function totalSupply() external view returns (uint256);

    /**
     * @dev Returns the amount of tokens owned by `account`.
     */
    function balanceOf(address account) external view returns (uint256);

    /**
     * @dev Moves `amount` tokens from the caller's account to `to`.
     *
     * Returns a boolean value indicating whether the operation succeeded.
     *
     * Emits a {Transfer} event.
     */
    function transfer(address to, uint256 amount) external returns (bool);

    /**
     * @dev Returns the remaining number of tokens that `spender` will be
     * allowed to spend on behalf of `owner` through {transferFrom}. This is
     * zero by default.
     *
     * This value changes when {approve} or {transferFrom} are called.
     */
    function allowance(address owner, address spender) external view returns (uint256);

    /**
     * @dev Sets `amount` as the allowance of `spender` over the caller's tokens.
     *
     * Returns a boolean value indicating whether the operation succeeded.
     *
     * IMPORTANT: Beware that changing an allowance with this method brings the risk
     * that someone may use both the old and the new allowance by unfortunate
     * transaction ordering. One possible solution to mitigate this race
     * condition is to first reduce the spender's allowance to 0 and set the
     * desired value afterwards:
     * https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729
     *
     * Emits an {Approval} event.
     */
    function approve(address spender, uint256 amount) external returns (bool);

    /**
     * @dev Moves `amount` tokens from `from` to `to` using the
     * allowance mechanism. `amount` is then deducted from the caller's
     * allowance.
     *
     * Returns a boolean value indicating whether the operation succeeded.
     *
     * Emits a {Transfer} event.
     */
    function transferFrom(address from, address to, uint256 amount) external returns (bool);
}


// File contracts/PromptContract.sol

// Original license: SPDX_License_Identifier: MIT
pragma solidity ^0.8.0;


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
        string indexed modelID,
        string indexed modelTitle,
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
        string indexed textOne,
        string indexed textTwo,
        uint256 modelNumber
    );

    event logFeedback (
        uint256 indexed promptNumber,
        bool isOneBetter,
        address feedbackProvider
    );

    event logBroadcast (
        string indexed cid, 
        address indexed broadcaster
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
        uint256 rewardAmount = 0.25 ether;
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
