/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  DS6Init,
  DS6InitInterface,
} from "../../../../contracts/test_helper/upgrade_initializers/DS6Init";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "x",
        type: "uint256",
      },
    ],
    name: "init",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6080604052348015600f57600080fd5b5060ac8061001e6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c8063b7b0422d14602d575b600080fd5b605c6038366004605e565b7fe44d9aca4747abb7268e5218fc7ac0390858570cb5a7d6dc5923e710e5a5ddcc55565b005b600060208284031215606f57600080fd5b503591905056fea2646970667358221220454d5684efda5334ebc565d09660a3abd2a1657d94926021ffb828b76ce268fa64736f6c634300080d0033";

type DS6InitConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DS6InitConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DS6Init__factory extends ContractFactory {
  constructor(...args: DS6InitConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<DS6Init> {
    return super.deploy(overrides || {}) as Promise<DS6Init>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): DS6Init {
    return super.attach(address) as DS6Init;
  }
  override connect(signer: Signer): DS6Init__factory {
    return super.connect(signer) as DS6Init__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DS6InitInterface {
    return new utils.Interface(_abi) as DS6InitInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DS6Init {
    return new Contract(address, _abi, signerOrProvider) as DS6Init;
  }
}
