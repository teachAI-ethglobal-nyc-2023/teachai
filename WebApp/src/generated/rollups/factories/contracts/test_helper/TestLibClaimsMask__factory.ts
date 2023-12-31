/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  TestLibClaimsMask,
  TestLibClaimsMaskInterface,
} from "../../../contracts/test_helper/TestLibClaimsMask";

const _abi = [
  {
    inputs: [
      {
        internalType: "ClaimsMask",
        name: "_claimsMask",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_validatorIndex",
        type: "uint256",
      },
    ],
    name: "alreadyClaimed",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "ClaimsMask",
        name: "_claimsMask",
        type: "uint256",
      },
    ],
    name: "clearAgreementMask",
    outputs: [
      {
        internalType: "ClaimsMask",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "ClaimsMask",
        name: "_claimsMask",
        type: "uint256",
      },
    ],
    name: "getAgreementMask",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "ClaimsMask",
        name: "_claimsMask",
        type: "uint256",
      },
    ],
    name: "getConsensusGoalMask",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "ClaimsMask",
        name: "_claimsMask",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_validatorIndex",
        type: "uint256",
      },
    ],
    name: "getNumClaims",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "ClaimsMask",
        name: "_claimsMask",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_validatorIndex",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "increaseNumClaims",
    outputs: [
      {
        internalType: "ClaimsMask",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "newClaimsMask",
    outputs: [
      {
        internalType: "ClaimsMask",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_numValidators",
        type: "uint256",
      },
    ],
    name: "newClaimsMaskWithConsensusGoalSet",
    outputs: [
      {
        internalType: "ClaimsMask",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "ClaimsMask",
        name: "_claimsMask",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_validatorIndex",
        type: "uint256",
      },
    ],
    name: "removeValidator",
    outputs: [
      {
        internalType: "ClaimsMask",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "ClaimsMask",
        name: "_claimsMask",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_validatorIndex",
        type: "uint256",
      },
    ],
    name: "setAgreementMask",
    outputs: [
      {
        internalType: "ClaimsMask",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "ClaimsMask",
        name: "_claimsMask",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_validatorIndex",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "setNumClaims",
    outputs: [
      {
        internalType: "ClaimsMask",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506105d7806100206000396000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c8063cb9f881311610071578063cb9f881314610120578063cd70835c14610143578063cf7b90a614610156578063d4056ffe14610169578063de7fb2801461017c578063fa95f4001461018f57600080fd5b806352f1d2b4146100ae578063574125c2146100d45780638336d005146100e7578063a8c5d8f4146100fa578063ac266b8c1461010d575b600080fd5b6100c16100bc3660046104aa565b6101a2565b6040519081526020015b60405180910390f35b6100c16100e23660046104d6565b6101b7565b6100c16100f53660046104d6565b6101c8565b6100c16101083660046104ef565b6101d0565b6100c161011b3660046104ef565b6101e3565b61013361012e3660046104ef565b6101ef565b60405190151581526020016100cb565b6100c16101513660046104ef565b610202565b6100c16101643660046104d6565b61020e565b6100c16101773660046104d6565b61021f565b6100c161018a3660046104aa565b61022e565b6100c161019d3660046104d6565b61023b565b60006101af848484610247565b949350505050565b60006101c2826102a3565b92915050565b6000816101c2565b60006101dc8383610304565b9392505050565b60006101dc8383610352565b6000600160f884901c831c1615156101dc565b60006101dc83836103b8565b60006001600160f81b0382166101c2565b600060f082901c60ff166101c2565b60006101af8484846103f6565b60006101c28260f81c90565b6000600883106102725760405162461bcd60e51b815260040161026990610511565b60405180910390fd5b600061027e8585610304565b9050600061028c8483610553565b90506102998686836103f6565b9695505050505050565b600060088211156102eb5760405162461bcd60e51b8152602060048201526012602482015271757020746f20382076616c696461746f727360701b6044820152606401610269565b60006102fa600180851b61056b565b60f01b9392505050565b6000600882106103265760405162461bcd60e51b815260040161026990610511565b60006103376001634000000061056b565b90508061034584601e610582565b85901c1691505092915050565b6000600882106103745760405162461bcd60e51b815260040161026990610511565b8260006103828460f8610553565b6001901b199182169190506103988460f0610553565b6001901b199182169190506103af828560006103f6565b95945050505050565b6000600882106103da5760405162461bcd60e51b815260040161026990610511565b60006103e78360f8610553565b6001901b841791505092915050565b6000600883106104185760405162461bcd60e51b815260040161026990610511565b6104276001634000000061056b565b82111561046c5760405162461bcd60e51b8152602060048201526013602482015272436c61696d734d61736b204f766572666c6f7760681b6044820152606401610269565b600061047984601e610582565b6104886001634000000061056b565b901b19905084811661049b85601e610582565b9390931b909217949350505050565b6000806000606084860312156104bf57600080fd5b505081359360208301359350604090920135919050565b6000602082840312156104e857600080fd5b5035919050565b6000806040838503121561050257600080fd5b50508035926020909101359150565b602080825260129082015271696e646578206f7574206f662072616e676560701b604082015260600190565b634e487b7160e01b600052601160045260246000fd5b600082198211156105665761056661053d565b500190565b60008282101561057d5761057d61053d565b500390565b600081600019048311821515161561059c5761059c61053d565b50029056fea26469706673582212206d8903852171502073917bac3bf63c71859aa217e89901e32cfedc555c58ee9064736f6c634300080d0033";

type TestLibClaimsMaskConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TestLibClaimsMaskConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TestLibClaimsMask__factory extends ContractFactory {
  constructor(...args: TestLibClaimsMaskConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TestLibClaimsMask> {
    return super.deploy(overrides || {}) as Promise<TestLibClaimsMask>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): TestLibClaimsMask {
    return super.attach(address) as TestLibClaimsMask;
  }
  override connect(signer: Signer): TestLibClaimsMask__factory {
    return super.connect(signer) as TestLibClaimsMask__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestLibClaimsMaskInterface {
    return new utils.Interface(_abi) as TestLibClaimsMaskInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestLibClaimsMask {
    return new Contract(address, _abi, signerOrProvider) as TestLibClaimsMask;
  }
}
