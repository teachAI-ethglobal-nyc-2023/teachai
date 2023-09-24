/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  SimpleNFT,
  SimpleNFTInterface,
} from "../../../contracts/test_helper/SimpleNFT";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "tokenIds",
        type: "uint256[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200188e3803806200188e833981016040819052620000349162000502565b604080518082018252600981526814da5b5c1b1953919560ba1b60208083019182528351808501909452600384526253494d60e81b908401528151919291620000809160009162000446565b5080516200009690600190602084019062000446565b50505060005b8151811015620000e957620000d433838381518110620000c057620000c0620005cb565b6020026020010151620000f160201b60201c565b80620000e081620005f7565b9150506200009c565b505062000718565b620001138282604051806020016040528060008152506200011760201b60201c565b5050565b62000123838362000193565b620001326000848484620002db565b6200018e5760405162461bcd60e51b815260206004820152603260248201526000805160206200186e83398151915260448201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b60648201526084015b60405180910390fd5b505050565b6001600160a01b038216620001eb5760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f2061646472657373604482015260640162000185565b6000818152600260205260409020546001600160a01b031615620002525760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000604482015260640162000185565b6001600160a01b03821660009081526003602052604081208054600192906200027d90849062000613565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b03861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b6000620002fc846001600160a01b03166200043760201b620006491760201c565b156200042b57604051630a85bd0160e11b81526001600160a01b0385169063150b7a0290620003369033908990889088906004016200062e565b6020604051808303816000875af192505050801562000374575060408051601f3d908101601f191682019092526200037191810190620006a9565b60015b62000410573d808015620003a5576040519150601f19603f3d011682016040523d82523d6000602084013e620003aa565b606091505b508051600003620004085760405162461bcd60e51b815260206004820152603260248201526000805160206200186e83398151915260448201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606482015260840162000185565b805181602001fd5b6001600160e01b031916630a85bd0160e11b1490506200042f565b5060015b949350505050565b6001600160a01b03163b151590565b8280546200045490620006dc565b90600052602060002090601f016020900481019282620004785760008555620004c3565b82601f106200049357805160ff1916838001178555620004c3565b82800160010185558215620004c3579182015b82811115620004c3578251825591602001919060010190620004a6565b50620004d1929150620004d5565b5090565b5b80821115620004d15760008155600101620004d6565b634e487b7160e01b600052604160045260246000fd5b600060208083850312156200051657600080fd5b82516001600160401b03808211156200052e57600080fd5b818501915085601f8301126200054357600080fd5b815181811115620005585762000558620004ec565b8060051b604051601f19603f83011681018181108582111715620005805762000580620004ec565b6040529182528482019250838101850191888311156200059f57600080fd5b938501935b82851015620005bf57845184529385019392850192620005a4565b98975050505050505050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b6000600182016200060c576200060c620005e1565b5060010190565b60008219821115620006295762000629620005e1565b500190565b600060018060a01b038087168352602081871681850152856040850152608060608501528451915081608085015260005b828110156200067d5785810182015185820160a0015281016200065f565b828111156200069057600060a084870101525b5050601f01601f19169190910160a00195945050505050565b600060208284031215620006bc57600080fd5b81516001600160e01b031981168114620006d557600080fd5b9392505050565b600181811c90821680620006f157607f821691505b6020821081036200071257634e487b7160e01b600052602260045260246000fd5b50919050565b61114680620007286000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c80636352211e1161008c578063a22cb46511610066578063a22cb465146101b3578063b88d4fde146101c6578063c87b56dd146101d9578063e985e9c5146101ec57600080fd5b80636352211e1461017757806370a082311461018a57806395d89b41146101ab57600080fd5b806301ffc9a7146100d457806306fdde03146100fc578063081812fc14610111578063095ea7b31461013c57806323b872dd1461015157806342842e0e14610164575b600080fd5b6100e76100e2366004610c5c565b610228565b60405190151581526020015b60405180910390f35b61010461027a565b6040516100f39190610cd1565b61012461011f366004610ce4565b61030c565b6040516001600160a01b0390911681526020016100f3565b61014f61014a366004610d19565b610333565b005b61014f61015f366004610d43565b61044d565b61014f610172366004610d43565b61047e565b610124610185366004610ce4565b610499565b61019d610198366004610d7f565b6104f9565b6040519081526020016100f3565b61010461057f565b61014f6101c1366004610d9a565b61058e565b61014f6101d4366004610dec565b61059d565b6101046101e7366004610ce4565b6105d5565b6100e76101fa366004610ec8565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b60006001600160e01b031982166380ac58cd60e01b148061025957506001600160e01b03198216635b5e139f60e01b145b8061027457506301ffc9a760e01b6001600160e01b03198316145b92915050565b60606000805461028990610efb565b80601f01602080910402602001604051908101604052809291908181526020018280546102b590610efb565b80156103025780601f106102d757610100808354040283529160200191610302565b820191906000526020600020905b8154815290600101906020018083116102e557829003601f168201915b5050505050905090565b600061031782610658565b506000908152600460205260409020546001600160a01b031690565b600061033e82610499565b9050806001600160a01b0316836001600160a01b0316036103b05760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b60648201526084015b60405180910390fd5b336001600160a01b03821614806103cc57506103cc81336101fa565b61043e5760405162461bcd60e51b815260206004820152603e60248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60448201527f6b656e206f776e6572206e6f7220617070726f76656420666f7220616c6c000060648201526084016103a7565b61044883836106ba565b505050565b6104573382610728565b6104735760405162461bcd60e51b81526004016103a790610f35565b6104488383836107a7565b6104488383836040518060200160405280600081525061059d565b6000818152600260205260408120546001600160a01b0316806102745760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b60448201526064016103a7565b60006001600160a01b0382166105635760405162461bcd60e51b815260206004820152602960248201527f4552433732313a2061646472657373207a65726f206973206e6f7420612076616044820152683634b21037bbb732b960b91b60648201526084016103a7565b506001600160a01b031660009081526003602052604090205490565b60606001805461028990610efb565b610599338383610943565b5050565b6105a73383610728565b6105c35760405162461bcd60e51b81526004016103a790610f35565b6105cf84848484610a11565b50505050565b60606105e082610658565b60006105f760408051602081019091526000815290565b905060008151116106175760405180602001604052806000815250610642565b8061062184610a44565b604051602001610632929190610f83565b6040516020818303038152906040525b9392505050565b6001600160a01b03163b151590565b6000818152600260205260409020546001600160a01b03166106b75760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b60448201526064016103a7565b50565b600081815260046020526040902080546001600160a01b0319166001600160a01b03841690811790915581906106ef82610499565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b60008061073483610499565b9050806001600160a01b0316846001600160a01b0316148061077b57506001600160a01b0380821660009081526005602090815260408083209388168352929052205460ff165b8061079f5750836001600160a01b03166107948461030c565b6001600160a01b0316145b949350505050565b826001600160a01b03166107ba82610499565b6001600160a01b03161461081e5760405162461bcd60e51b815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201526437bbb732b960d91b60648201526084016103a7565b6001600160a01b0382166108805760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b60648201526084016103a7565b61088b6000826106ba565b6001600160a01b03831660009081526003602052604081208054600192906108b4908490610fc8565b90915550506001600160a01b03821660009081526003602052604081208054600192906108e2908490610fdf565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b816001600160a01b0316836001600160a01b0316036109a45760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c65720000000000000060448201526064016103a7565b6001600160a01b03838116600081815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b610a1c8484846107a7565b610a2884848484610b45565b6105cf5760405162461bcd60e51b81526004016103a790610ff7565b606081600003610a6b5750506040805180820190915260018152600360fc1b602082015290565b8160005b8115610a955780610a7f81611049565b9150610a8e9050600a83611078565b9150610a6f565b60008167ffffffffffffffff811115610ab057610ab0610dd6565b6040519080825280601f01601f191660200182016040528015610ada576020820181803683370190505b5090505b841561079f57610aef600183610fc8565b9150610afc600a8661108c565b610b07906030610fdf565b60f81b818381518110610b1c57610b1c6110a0565b60200101906001600160f81b031916908160001a905350610b3e600a86611078565b9450610ade565b60006001600160a01b0384163b15610c3b57604051630a85bd0160e11b81526001600160a01b0385169063150b7a0290610b899033908990889088906004016110b6565b6020604051808303816000875af1925050508015610bc4575060408051601f3d908101601f19168201909252610bc1918101906110f3565b60015b610c21573d808015610bf2576040519150601f19603f3d011682016040523d82523d6000602084013e610bf7565b606091505b508051600003610c195760405162461bcd60e51b81526004016103a790610ff7565b805181602001fd5b6001600160e01b031916630a85bd0160e11b14905061079f565b506001949350505050565b6001600160e01b0319811681146106b757600080fd5b600060208284031215610c6e57600080fd5b813561064281610c46565b60005b83811015610c94578181015183820152602001610c7c565b838111156105cf5750506000910152565b60008151808452610cbd816020860160208601610c79565b601f01601f19169290920160200192915050565b6020815260006106426020830184610ca5565b600060208284031215610cf657600080fd5b5035919050565b80356001600160a01b0381168114610d1457600080fd5b919050565b60008060408385031215610d2c57600080fd5b610d3583610cfd565b946020939093013593505050565b600080600060608486031215610d5857600080fd5b610d6184610cfd565b9250610d6f60208501610cfd565b9150604084013590509250925092565b600060208284031215610d9157600080fd5b61064282610cfd565b60008060408385031215610dad57600080fd5b610db683610cfd565b915060208301358015158114610dcb57600080fd5b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b60008060008060808587031215610e0257600080fd5b610e0b85610cfd565b9350610e1960208601610cfd565b925060408501359150606085013567ffffffffffffffff80821115610e3d57600080fd5b818701915087601f830112610e5157600080fd5b813581811115610e6357610e63610dd6565b604051601f8201601f19908116603f01168101908382118183101715610e8b57610e8b610dd6565b816040528281528a6020848701011115610ea457600080fd5b82602086016020830137600060208483010152809550505050505092959194509250565b60008060408385031215610edb57600080fd5b610ee483610cfd565b9150610ef260208401610cfd565b90509250929050565b600181811c90821680610f0f57607f821691505b602082108103610f2f57634e487b7160e01b600052602260045260246000fd5b50919050565b6020808252602e908201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560408201526d1c881b9bdc88185c1c1c9bdd995960921b606082015260800190565b60008351610f95818460208801610c79565b835190830190610fa9818360208801610c79565b01949350505050565b634e487b7160e01b600052601160045260246000fd5b600082821015610fda57610fda610fb2565b500390565b60008219821115610ff257610ff2610fb2565b500190565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b60006001820161105b5761105b610fb2565b5060010190565b634e487b7160e01b600052601260045260246000fd5b60008261108757611087611062565b500490565b60008261109b5761109b611062565b500690565b634e487b7160e01b600052603260045260246000fd5b6001600160a01b03858116825284166020820152604081018390526080606082018190526000906110e990830184610ca5565b9695505050505050565b60006020828403121561110557600080fd5b815161064281610c4656fea2646970667358221220ea9a6e588bb9878162d1cbd0a26eaa505b5f2db9825b48d528da5c9d084c435264736f6c634300080d00334552433732313a207472616e7366657220746f206e6f6e204552433732315265";

type SimpleNFTConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SimpleNFTConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SimpleNFT__factory extends ContractFactory {
  constructor(...args: SimpleNFTConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    tokenIds: PromiseOrValue<BigNumberish>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<SimpleNFT> {
    return super.deploy(tokenIds, overrides || {}) as Promise<SimpleNFT>;
  }
  override getDeployTransaction(
    tokenIds: PromiseOrValue<BigNumberish>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(tokenIds, overrides || {});
  }
  override attach(address: string): SimpleNFT {
    return super.attach(address) as SimpleNFT;
  }
  override connect(signer: Signer): SimpleNFT__factory {
    return super.connect(signer) as SimpleNFT__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SimpleNFTInterface {
    return new utils.Interface(_abi) as SimpleNFTInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SimpleNFT {
    return new Contract(address, _abi, signerOrProvider) as SimpleNFT;
  }
}
