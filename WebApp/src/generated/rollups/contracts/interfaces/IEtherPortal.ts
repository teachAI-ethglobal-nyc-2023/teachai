/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export interface IEtherPortalInterface extends utils.Interface {
  functions: {
    "etherDeposit(bytes)": FunctionFragment;
    "etherWithdrawal(bytes)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "etherDeposit" | "etherWithdrawal"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "etherDeposit",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "etherWithdrawal",
    values: [PromiseOrValue<BytesLike>]
  ): string;

  decodeFunctionResult(
    functionFragment: "etherDeposit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "etherWithdrawal",
    data: BytesLike
  ): Result;

  events: {
    "EtherDeposited(address,uint256,bytes)": EventFragment;
    "EtherWithdrawn(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "EtherDeposited"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "EtherWithdrawn"): EventFragment;
}

export interface EtherDepositedEventObject {
  sender: string;
  amount: BigNumber;
  data: string;
}
export type EtherDepositedEvent = TypedEvent<
  [string, BigNumber, string],
  EtherDepositedEventObject
>;

export type EtherDepositedEventFilter = TypedEventFilter<EtherDepositedEvent>;

export interface EtherWithdrawnEventObject {
  receiver: string;
  amount: BigNumber;
}
export type EtherWithdrawnEvent = TypedEvent<
  [string, BigNumber],
  EtherWithdrawnEventObject
>;

export type EtherWithdrawnEventFilter = TypedEventFilter<EtherWithdrawnEvent>;

export interface IEtherPortal extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IEtherPortalInterface;

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

  functions: {
    /**
     * deposit an amount of Ether in the portal and create Ether in L2
     * @param _data information to be interpreted by L2
     */
    etherDeposit(
      _data: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    /**
     * can only be called by the Rollups contract
     * withdraw an amount of Ether from the portal
     * @param _data data with withdrawal information
     */
    etherWithdrawal(
      _data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  /**
   * deposit an amount of Ether in the portal and create Ether in L2
   * @param _data information to be interpreted by L2
   */
  etherDeposit(
    _data: PromiseOrValue<BytesLike>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  /**
   * can only be called by the Rollups contract
   * withdraw an amount of Ether from the portal
   * @param _data data with withdrawal information
   */
  etherWithdrawal(
    _data: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    /**
     * deposit an amount of Ether in the portal and create Ether in L2
     * @param _data information to be interpreted by L2
     */
    etherDeposit(
      _data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    /**
     * can only be called by the Rollups contract
     * withdraw an amount of Ether from the portal
     * @param _data data with withdrawal information
     */
    etherWithdrawal(
      _data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    "EtherDeposited(address,uint256,bytes)"(
      sender?: null,
      amount?: null,
      data?: null
    ): EtherDepositedEventFilter;
    EtherDeposited(
      sender?: null,
      amount?: null,
      data?: null
    ): EtherDepositedEventFilter;

    "EtherWithdrawn(address,uint256)"(
      receiver?: null,
      amount?: null
    ): EtherWithdrawnEventFilter;
    EtherWithdrawn(receiver?: null, amount?: null): EtherWithdrawnEventFilter;
  };

  estimateGas: {
    /**
     * deposit an amount of Ether in the portal and create Ether in L2
     * @param _data information to be interpreted by L2
     */
    etherDeposit(
      _data: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    /**
     * can only be called by the Rollups contract
     * withdraw an amount of Ether from the portal
     * @param _data data with withdrawal information
     */
    etherWithdrawal(
      _data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    /**
     * deposit an amount of Ether in the portal and create Ether in L2
     * @param _data information to be interpreted by L2
     */
    etherDeposit(
      _data: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    /**
     * can only be called by the Rollups contract
     * withdraw an amount of Ether from the portal
     * @param _data data with withdrawal information
     */
    etherWithdrawal(
      _data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}