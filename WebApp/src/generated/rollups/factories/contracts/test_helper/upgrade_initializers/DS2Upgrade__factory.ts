/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  DS2Upgrade,
  DS2UpgradeInterface,
} from "../../../../contracts/test_helper/upgrade_initializers/DS2Upgrade";

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
  "0x6080604052348015600f57600080fd5b5060e28061001e6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c8063d55ec69714602d575b600080fd5b7ff85303be6bcde94f0463a6aa7a400c61c189a370c649530913625784ad517b1c547fe4ee398a3d02354d9a3ac168ae8277dc2d94a1d705b084735cf8863231e2654f805463ffffffff8084166bffffffffffffffffffffffff199092169190911764010000000090930416680100000000000000000291909117905500fea26469706673582212208dd719787ec5df43b1331c2ea23f52a4ac31d45ba240309d73aabba752d8bb8164736f6c634300080d0033";

type DS2UpgradeConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DS2UpgradeConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DS2Upgrade__factory extends ContractFactory {
  constructor(...args: DS2UpgradeConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<DS2Upgrade> {
    return super.deploy(overrides || {}) as Promise<DS2Upgrade>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): DS2Upgrade {
    return super.attach(address) as DS2Upgrade;
  }
  override connect(signer: Signer): DS2Upgrade__factory {
    return super.connect(signer) as DS2Upgrade__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DS2UpgradeInterface {
    return new utils.Interface(_abi) as DS2UpgradeInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DS2Upgrade {
    return new Contract(address, _abi, signerOrProvider) as DS2Upgrade;
  }
}