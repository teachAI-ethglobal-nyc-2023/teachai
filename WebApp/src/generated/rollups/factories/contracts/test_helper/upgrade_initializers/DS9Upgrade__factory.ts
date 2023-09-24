/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  DS9Upgrade,
  DS9UpgradeInterface,
} from "../../../../contracts/test_helper/upgrade_initializers/DS9Upgrade";

const _abi = [
  {
    inputs: [],
    name: "upgrade",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6080604052348015600f57600080fd5b5060d88061001e6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c8063d55ec69714602d575b600080fd5b7ff85303be6bcde94f0463a6aa7a400c61c189a370c649530913625784ad517b1c80547f5ec71f1de84ac97dcb4fa9dee8ec0041b0b869b58ab1882dcca1632a34f94b7c805463ffffffff80841667ffffffffffffffff1992831617640100000000808604929092169091021790915516905500fea264697066735822122007c9fe122c239fe74c8485a64a8765cfe147577209ef2695989c2042e637a20764736f6c634300080d0033";

type DS9UpgradeConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DS9UpgradeConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DS9Upgrade__factory extends ContractFactory {
  constructor(...args: DS9UpgradeConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<DS9Upgrade> {
    return super.deploy(overrides || {}) as Promise<DS9Upgrade>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): DS9Upgrade {
    return super.attach(address) as DS9Upgrade;
  }
  override connect(signer: Signer): DS9Upgrade__factory {
    return super.connect(signer) as DS9Upgrade__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DS9UpgradeInterface {
    return new utils.Interface(_abi) as DS9UpgradeInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DS9Upgrade {
    return new Contract(address, _abi, signerOrProvider) as DS9Upgrade;
  }
}