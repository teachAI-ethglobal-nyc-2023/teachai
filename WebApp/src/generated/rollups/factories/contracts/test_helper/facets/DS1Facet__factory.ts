/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  DS1Facet,
  DS1FacetInterface,
} from "../../../../contracts/test_helper/facets/DS1Facet";

const _abi = [
  {
    inputs: [],
    name: "getX",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getY",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "x",
        type: "uint32",
      },
    ],
    name: "setX",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "y",
        type: "uint32",
      },
    ],
    name: "setY",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506101a4806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80630b7f1665146100515780631468db5e146100895780635197c7aa146100cf578063eb421e2f146100ea575b600080fd5b60008051602061014f83398151915254640100000000900463ffffffff165b60405163ffffffff909116815260200160405180910390f35b6100cd610097366004610121565b60008051602061014f833981519152805467ffffffff00000000191664010000000063ffffffff90931692909202919091179055565b005b60008051602061014f8339815191525463ffffffff16610070565b6100cd6100f8366004610121565b60008051602061014f833981519152805463ffffffff191663ffffffff92909216919091179055565b60006020828403121561013357600080fd5b813563ffffffff8116811461014757600080fd5b939250505056fef85303be6bcde94f0463a6aa7a400c61c189a370c649530913625784ad517b1ca2646970667358221220fc523ed4437f84f54b90c1936c1d3f09e620d26e0689703ece3a789011ed2b9664736f6c634300080d0033";

type DS1FacetConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DS1FacetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DS1Facet__factory extends ContractFactory {
  constructor(...args: DS1FacetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<DS1Facet> {
    return super.deploy(overrides || {}) as Promise<DS1Facet>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): DS1Facet {
    return super.attach(address) as DS1Facet;
  }
  override connect(signer: Signer): DS1Facet__factory {
    return super.connect(signer) as DS1Facet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DS1FacetInterface {
    return new utils.Interface(_abi) as DS1FacetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DS1Facet {
    return new Contract(address, _abi, signerOrProvider) as DS1Facet;
  }
}