/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IOutput,
  IOutputInterface,
} from "../../../contracts/interfaces/IOutput";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "voucherPosition",
        type: "uint256",
      },
    ],
    name: "VoucherExecuted",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_destination",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_payload",
        type: "bytes",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "epochIndex",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "inputIndex",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "outputIndex",
            type: "uint256",
          },
          {
            internalType: "bytes32",
            name: "outputHashesRootHash",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "vouchersEpochRootHash",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "noticesEpochRootHash",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "machineStateHash",
            type: "bytes32",
          },
          {
            internalType: "bytes32[]",
            name: "keccakInHashesSiblings",
            type: "bytes32[]",
          },
          {
            internalType: "bytes32[]",
            name: "outputHashesInEpochSiblings",
            type: "bytes32[]",
          },
        ],
        internalType: "struct OutputValidityProof",
        name: "_v",
        type: "tuple",
      },
    ],
    name: "executeVoucher",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getEpochNoticeLog2Size",
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
    inputs: [],
    name: "getEpochVoucherLog2Size",
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
    inputs: [],
    name: "getNoticeMetadataLog2Size",
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
    inputs: [],
    name: "getNumberOfFinalizedEpochs",
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
    inputs: [],
    name: "getVoucherMetadataLog2Size",
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
        internalType: "bytes",
        name: "_notice",
        type: "bytes",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "epochIndex",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "inputIndex",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "outputIndex",
            type: "uint256",
          },
          {
            internalType: "bytes32",
            name: "outputHashesRootHash",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "vouchersEpochRootHash",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "noticesEpochRootHash",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "machineStateHash",
            type: "bytes32",
          },
          {
            internalType: "bytes32[]",
            name: "keccakInHashesSiblings",
            type: "bytes32[]",
          },
          {
            internalType: "bytes32[]",
            name: "outputHashesInEpochSiblings",
            type: "bytes32[]",
          },
        ],
        internalType: "struct OutputValidityProof",
        name: "_v",
        type: "tuple",
      },
    ],
    name: "validateNotice",
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
] as const;

export class IOutput__factory {
  static readonly abi = _abi;
  static createInterface(): IOutputInterface {
    return new utils.Interface(_abi) as IOutputInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IOutput {
    return new Contract(address, _abi, signerOrProvider) as IOutput;
  }
}
