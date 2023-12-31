/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IRollups,
  IRollupsInterface,
} from "../../../contracts/interfaces/IRollups";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "epochNumber",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "claimer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "epochHash",
        type: "bytes32",
      },
    ],
    name: "Claim",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "epochNumber",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "epochHash",
        type: "bytes32",
      },
    ],
    name: "FinalizeEpoch",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "enum Phase",
        name: "newPhase",
        type: "uint8",
      },
    ],
    name: "PhaseChange",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "winner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "loser",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "winningClaim",
        type: "bytes32",
      },
    ],
    name: "ResolveDispute",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_epochHash",
        type: "bytes32",
      },
    ],
    name: "claim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "finalizeEpoch",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getCurrentEpoch",
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
] as const;

export class IRollups__factory {
  static readonly abi = _abi;
  static createInterface(): IRollupsInterface {
    return new utils.Interface(_abi) as IRollupsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IRollups {
    return new Contract(address, _abi, signerOrProvider) as IRollups;
  }
}
