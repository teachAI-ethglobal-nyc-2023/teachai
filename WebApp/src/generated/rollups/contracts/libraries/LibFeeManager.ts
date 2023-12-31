/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type { BaseContract, BigNumber, Signer, utils } from "ethers";
import type { EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../../common";

export interface LibFeeManagerInterface extends utils.Interface {
  functions: {};

  events: {
    "FeePerClaimReset(uint256)": EventFragment;
    "FeeRedeemed(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "FeePerClaimReset"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "FeeRedeemed"): EventFragment;
}

export interface FeePerClaimResetEventObject {
  value: BigNumber;
}
export type FeePerClaimResetEvent = TypedEvent<
  [BigNumber],
  FeePerClaimResetEventObject
>;

export type FeePerClaimResetEventFilter =
  TypedEventFilter<FeePerClaimResetEvent>;

export interface FeeRedeemedEventObject {
  validator: string;
  claims: BigNumber;
}
export type FeeRedeemedEvent = TypedEvent<
  [string, BigNumber],
  FeeRedeemedEventObject
>;

export type FeeRedeemedEventFilter = TypedEventFilter<FeeRedeemedEvent>;

export interface LibFeeManager extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: LibFeeManagerInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {};

  callStatic: {};

  filters: {
    "FeePerClaimReset(uint256)"(value?: null): FeePerClaimResetEventFilter;
    FeePerClaimReset(value?: null): FeePerClaimResetEventFilter;

    "FeeRedeemed(address,uint256)"(
      validator?: null,
      claims?: null
    ): FeeRedeemedEventFilter;
    FeeRedeemed(validator?: null, claims?: null): FeeRedeemedEventFilter;
  };

  estimateGas: {};

  populateTransaction: {};
}
