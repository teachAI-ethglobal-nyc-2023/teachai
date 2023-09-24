export const wagmiAbi = [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_taiToken",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "string",
          "name": "cid",
          "type": "string"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "broadcaster",
          "type": "address"
        }
      ],
      "name": "logBroadcast",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "promptNumber",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "isOneBetter",
          "type": "bool"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "feedbackProvider",
          "type": "address"
        }
      ],
      "name": "logFeedback",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "promptNumber",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "string",
          "name": "textOne",
          "type": "string"
        },
        {
          "indexed": true,
          "internalType": "string",
          "name": "textTwo",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "modelNumber",
          "type": "uint256"
        }
      ],
      "name": "logInference",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "modelNumber",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "string",
          "name": "modelID",
          "type": "string"
        },
        {
          "indexed": true,
          "internalType": "string",
          "name": "modelTitle",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "modelOwner",
          "type": "address"
        }
      ],
      "name": "logModel",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "promptNumber",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "modelNumber",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "question",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "option1",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "option2",
          "type": "string"
        }
      ],
      "name": "logPrompt",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "cid",
          "type": "string"
        }
      ],
      "name": "broadcastUpload",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "promptNumber",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "textOne",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "textTwo",
          "type": "string"
        }
      ],
      "name": "createInference",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "modelCount",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "models",
      "outputs": [
        {
          "internalType": "string",
          "name": "modelID",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "modelOwner",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "modelTitle",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "promptCount",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "prompts",
      "outputs": [
        {
          "internalType": "string",
          "name": "question",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "option1",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "option2",
          "type": "string"
        },
        {
          "internalType": "bool",
          "name": "inference",
          "type": "bool"
        },
        {
          "internalType": "address",
          "name": "inferenceProvider",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "responded",
          "type": "bool"
        },
        {
          "internalType": "bool",
          "name": "isOneBetter",
          "type": "bool"
        },
        {
          "internalType": "address",
          "name": "responder",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "promptNumber",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "responseIndex",
          "type": "uint256"
        }
      ],
      "name": "respondToPromptOptions",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "question",
          "type": "string"
        }
      ],
      "name": "setPrompt",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "taiToken",
      "outputs": [
        {
          "internalType": "contract IERC20",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_modelID",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "_modelOwner",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "_modelTitle",
          "type": "string"
        }
      ],
      "name": "updateModel",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "withdrawTokens",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
] as const;    