/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  ERC20PortalFacet,
  ERC20PortalFacetInterface,
} from "../../../contracts/facets/ERC20PortalFacet";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "ERC20",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "ERC20Deposited",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_ERC20",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "erc20Deposit",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506107b9806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063cb1061a614610030575b600080fd5b61004361003e36600461053b565b610055565b60405190815260200160405180910390f35b6000807f943d5d24442f02461445e15c5d7d4a4ef0acb0d32c5d6f6af37a6882249912ff6040516323b872dd60e01b81523360048201523060248201526044810187905290915086906001600160a01b038216906323b872dd906064016020604051808303816000875af11580156100d1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100f591906105d0565b6101465760405162461bcd60e51b815260206004820152601960248201527f4552433230207472616e7366657246726f6d206661696c65640000000000000060448201526064015b60405180910390fd5b60007f59da2a984e165ae4487c99e5d1dca7e04c8a99301be6bc092932cb5d7f03437833898989896040516020016101839695949392919061061b565b60405160208183030381529060405290507f29e6a9ed1b00933e0de5679ea9bc6ad323969a70b69b627425b46ac0431c7b0188338989896040516101cb959493929190610655565b60405180910390a16101dd83826101e9565b98975050505050505050565b60006101f68383306101fd565b9392505050565b600283015482516000917fd32d7f90491bee81172a406b65f3270d810392fe53bb0379dde8bdd4e624189c9111156102775760405162461bcd60e51b815260206004820152601860248201527f696e707574206c656e3a205b302c647269766553697a655d0000000000000000604482015260640161013d565b610280816103a2565b1561028e5761028e8561047a565b600085600301546000146102a557856001016102a7565b855b905060006102b483610499565b8254604080516001600160a01b03891660208083019190915243828401524260608301526080820185905260a08083018590528351808403909101815260c0830184528051908201208b518c83012060e0840182905261010080850182905285518086039091018152610120909401909452825192820192909220600180860189556000898152929092209094018490558654949550909391929161035991906106aa565b847fa15a0da5519c084484141aaa73e525cee96062f5decc97e070f0c4da27738bc78a428d60405161038d939291906106c1565b60405180910390a39998505050505050505050565b60018101546000908190600160801b900463ffffffff1660028111156103ca576103ca61072d565b600184015490915063ffffffff6801000000000000000082048116911660008360028111156103fb576103fb61072d565b148015610410575061040d8183610743565b42115b1561046f576001858101805463ffffffff60801b1916600160801b1790556040517fed606d544c2202d032d2626c390923e6f260ca5d89625bba0cfe70d2bdda4e8f9161045c9161075b565b60405180910390a1506001949350505050565b506000949350505050565b60038101541561048b57600061048e565b60015b60ff16600390910155565b7f0635ad75fae4d4e8d896461a635d23700076a1c3fd8da26276f18cb1c09ea5675460018201546000917f0635ad75fae4d4e8d896461a635d23700076a1c3fd8da26276f18cb1c09ea566918390600160801b900463ffffffff1660028111156105055761050561072d565b9050600081600281111561051b5761051b61072d565b146105305761052b826001610743565b610532565b815b95945050505050565b6000806000806060858703121561055157600080fd5b84356001600160a01b038116811461056857600080fd5b935060208501359250604085013567ffffffffffffffff8082111561058c57600080fd5b818701915087601f8301126105a057600080fd5b8135818111156105af57600080fd5b8860208285010111156105c157600080fd5b95989497505060200194505050565b6000602082840312156105e257600080fd5b815180151581146101f657600080fd5b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b8681526001600160a01b038681166020830152851660408201526060810184905260a0608082018190526000906101dd90830184866105f2565b6001600160a01b038681168252851660208201526040810184905260806060820181905260009061068990830184866105f2565b979650505050505050565b634e487b7160e01b600052601160045260246000fd5b6000828210156106bc576106bc610694565b500390565b60018060a01b038416815260006020848184015260606040840152835180606085015260005b81811015610703578581018301518582016080015282016106e7565b81811115610715576000608083870101525b50601f01601f19169290920160800195945050505050565b634e487b7160e01b600052602160045260246000fd5b6000821982111561075657610756610694565b500190565b602081016003831061077d57634e487b7160e01b600052602160045260246000fd5b9190529056fea26469706673582212205a6d7e95e471f4059b0981b363bccb6296e05bfe58ac6244f725c2fd38ee94ab64736f6c634300080d0033";

type ERC20PortalFacetConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC20PortalFacetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC20PortalFacet__factory extends ContractFactory {
  constructor(...args: ERC20PortalFacetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ERC20PortalFacet> {
    return super.deploy(overrides || {}) as Promise<ERC20PortalFacet>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ERC20PortalFacet {
    return super.attach(address) as ERC20PortalFacet;
  }
  override connect(signer: Signer): ERC20PortalFacet__factory {
    return super.connect(signer) as ERC20PortalFacet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC20PortalFacetInterface {
    return new utils.Interface(_abi) as ERC20PortalFacetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC20PortalFacet {
    return new Contract(address, _abi, signerOrProvider) as ERC20PortalFacet;
  }
}
