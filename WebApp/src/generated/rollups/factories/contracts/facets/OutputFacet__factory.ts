/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  OutputFacet,
  OutputFacetInterface,
} from "../../../contracts/facets/OutputFacet";

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
    inputs: [
      {
        internalType: "uint256",
        name: "_voucher",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_input",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_epoch",
        type: "uint256",
      },
    ],
    name: "getBitMaskPosition",
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
    inputs: [
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_log2Size",
        type: "uint256",
      },
    ],
    name: "getIntraDrivePosition",
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
        name: "_encodedNotice",
        type: "bytes",
      },
      {
        internalType: "bytes32",
        name: "_epochHash",
        type: "bytes32",
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
    name: "isValidNoticeProof",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_encodedVoucher",
        type: "bytes",
      },
      {
        internalType: "bytes32",
        name: "_epochHash",
        type: "bytes32",
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
    name: "isValidVoucherProof",
    outputs: [],
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

const _bytecode =
  "0x608060405234801561001057600080fd5b50610d8e806100206000396000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c80636190d81e116100715780636190d81e146101405780638021be811461015357806383552b4d1461015a578063a238203614610181578063a981588a14610153578063f3af7efd1461018157600080fd5b806310517cfc146100ae5780633ad58a27146100d35780633c0d9958146100e85780634f8192c91461010a5780635e439a0c1461012d575b600080fd5b6100c06100bc366004610900565b1b90565b6040519081526020015b60405180910390f35b6100e66100e1366004610951565b610188565b005b6100c06100f6366004610a30565b608083901b604083901b1781179392505050565b61011d610118366004610aa5565b6101a1565b60405190151581526020016100ca565b6100e661013b366004610951565b610227565b61011d61014e366004610af7565b61023b565b60156100c0565b7f0635ad75fae4d4e8d896461a635d23700076a1c3fd8da26276f18cb1c09ea567546100c0565b60256100c0565b61019c83838360a001356025601586610600565b505050565b6000807f0635ad75fae4d4e8d896461a635d23700076a1c3fd8da26276f18cb1c09ea5669050600085856040516020016101dc929190610ba8565b604051602081830303815290604052905061021b818360010186600001358154811061020a5761020a610bc4565b906000526020600020015486610188565b50600195945050505050565b61019c838383608001356025601586610600565b7f0635ad75fae4d4e8d896461a635d23700076a1c3fd8da26276f18cb1c09ea568546000907f0635ad75fae4d4e8d896461a635d23700076a1c3fd8da26276f18cb1c09ea5669060ff16156102d05760405162461bcd60e51b81526020600482015260166024820152751c99595b9d1c985b98de481b9bdd08185b1b1bddd95960521b60448201526064015b60405180910390fd5b60028101805460ff1916600117905560006103087f0635ad75fae4d4e8d896461a635d23700076a1c3fd8da26276f18cb1c09ea56690565b7f844e22529543d6e722c6477171dd50ffe5b412198b92cd9aeea62bbfabe4cc75549091507f844e22529543d6e722c6477171dd50ffe5b412198b92cd9aeea62bbfabe4cc73906001600160a01b039081169089160361039c5760405162461bcd60e51b815260206004820152600f60248201526e3130b2103232b9ba34b730ba34b7b760891b60448201526064016102c7565b60008888886040516020016103b393929190610bda565b60405160208183030381529060405290506103f281846001018860000135815481106103e1576103e1610bc4565b906000526020600020015488610227565b60006020870135604090811b9088013560801b178735176040516303fbaf7360e01b8152600481018690526024810182905290915073__$f57eb21c11c6dae369da3ca36f4f48eb77$__906303fbaf7390604401602060405180830381865af4158015610463573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104879190610c08565b156104d45760405162461bcd60e51b815260206004820152601860248201527f72652d657865637574696f6e206e6f7420616c6c6f776564000000000000000060448201526064016102c7565b60008a6001600160a01b03168a8a6040516104f0929190610c31565b6000604051808303816000865af19150503d806000811461052d576040519150601f19603f3d011682016040523d82523d6000602084013e610532565b606091505b5050905080156105e7576040516306449da160e41b815260048101869052602481018390526001604482015273__$f57eb21c11c6dae369da3ca36f4f48eb77$__90636449da109060640160006040518083038186803b15801561059557600080fd5b505af41580156105a9573d6000803e3d6000fd5b505050507f0eb7ee080f865f1cadc4f54daf58cc3b8879e888832867d13351edcec0fbdc54826040516105de91815260200190565b60405180910390a15b955050505050600201805460ff19169055949350505050565b60408051608080840135602083015260a08401359282019290925260c0830135606082015286910160405160208183030381529060405280519060200120146106815760405162461bcd60e51b8152602060048201526013602482015272195c1bd8da12185cda081a5b98dbdc9c9958dd606a1b60448201526064016102c7565b8373__$2a7ef22e717e9afc55afc95d018bf1a85b$__6379de4601602084013560051b60058760608701356106ba610100890189610c41565b6040518763ffffffff1660e01b81526004016106db96959493929190610c8b565b602060405180830381865af41580156106f8573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061071c9190610ce2565b146107695760405162461bcd60e51b815260206004820152601e60248201527f6f75747075747345706f6368526f6f744861736820696e636f7272656374000060448201526064016102c7565b600073__$2a7ef22e717e9afc55afc95d018bf1a85b$__63c84583a1888051906020012060405160200161079f91815260200190565b60405160208183030381529060405260056040518363ffffffff1660e01b81526004016107cd929190610cfb565b602060405180830381865af41580156107ea573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061080e9190610ce2565b9050606082013573__$2a7ef22e717e9afc55afc95d018bf1a85b$__6379de4601604085013560051b6005878661084860e08a018a610c41565b6040518763ffffffff1660e01b815260040161086996959493929190610c8b565b602060405180830381865af4158015610886573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108aa9190610ce2565b146108f75760405162461bcd60e51b815260206004820152601e60248201527f6f7574707574486173686573526f6f744861736820696e636f7272656374000060448201526064016102c7565b50505050505050565b6000806040838503121561091357600080fd5b50508035926020909101359150565b634e487b7160e01b600052604160045260246000fd5b6000610120828403121561094b57600080fd5b50919050565b60008060006060848603121561096657600080fd5b833567ffffffffffffffff8082111561097e57600080fd5b818601915086601f83011261099257600080fd5b8135818111156109a4576109a4610922565b604051601f8201601f19908116603f011681019083821181831017156109cc576109cc610922565b816040528281528960208487010111156109e557600080fd5b82602086016020830137600060208483010152809750505050602086013593506040860135915080821115610a1957600080fd5b50610a2686828701610938565b9150509250925092565b600080600060608486031215610a4557600080fd5b505081359360208301359350604090920135919050565b60008083601f840112610a6e57600080fd5b50813567ffffffffffffffff811115610a8657600080fd5b602083019150836020828501011115610a9e57600080fd5b9250929050565b600080600060408486031215610aba57600080fd5b833567ffffffffffffffff80821115610ad257600080fd5b610ade87838801610a5c565b90955093506020860135915080821115610a1957600080fd5b60008060008060608587031215610b0d57600080fd5b84356001600160a01b0381168114610b2457600080fd5b9350602085013567ffffffffffffffff80821115610b4157600080fd5b610b4d88838901610a5c565b90955093506040870135915080821115610b6657600080fd5b50610b7387828801610938565b91505092959194509250565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b602081526000610bbc602083018486610b7f565b949350505050565b634e487b7160e01b600052603260045260246000fd5b6001600160a01b0384168152604060208201819052600090610bff9083018486610b7f565b95945050505050565b600060208284031215610c1a57600080fd5b81518015158114610c2a57600080fd5b9392505050565b8183823760009101908152919050565b6000808335601e19843603018112610c5857600080fd5b83018035915067ffffffffffffffff821115610c7357600080fd5b6020019150600581901b3603821315610a9e57600080fd5b86815285602082015284604082015283606082015260a060808201528160a0820152600060018060fb1b03831115610cc257600080fd5b8260051b808560c08501376000920160c001918252509695505050505050565b600060208284031215610cf457600080fd5b5051919050565b604081526000835180604084015260005b81811015610d295760208187018101516060868401015201610d0c565b81811115610d3b576000606083860101525b50602083019390935250601f91909101601f19160160600191905056fea2646970667358221220ad5c61aba771b46ff01db2fa849e0f8aa8bcee012d38053cb75c41a9f14b7cdf64736f6c634300080d0033";

type OutputFacetConstructorParams =
  | [linkLibraryAddresses: OutputFacetLibraryAddresses, signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: OutputFacetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => {
  return (
    typeof xs[0] === "string" ||
    (Array.isArray as (arg: any) => arg is readonly any[])(xs[0]) ||
    "_isInterface" in xs[0]
  );
};

export class OutputFacet__factory extends ContractFactory {
  constructor(...args: OutputFacetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      const [linkLibraryAddresses, signer] = args;
      super(
        _abi,
        OutputFacet__factory.linkBytecode(linkLibraryAddresses),
        signer
      );
    }
  }

  static linkBytecode(
    linkLibraryAddresses: OutputFacetLibraryAddresses
  ): string {
    let linkedBytecode = _bytecode;

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$f57eb21c11c6dae369da3ca36f4f48eb77\\$__", "g"),
      linkLibraryAddresses["@cartesi/util/contracts/Bitmask.sol:Bitmask"]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$2a7ef22e717e9afc55afc95d018bf1a85b\\$__", "g"),
      linkLibraryAddresses["@cartesi/util/contracts/MerkleV2.sol:MerkleV2"]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    return linkedBytecode;
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<OutputFacet> {
    return super.deploy(overrides || {}) as Promise<OutputFacet>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): OutputFacet {
    return super.attach(address) as OutputFacet;
  }
  override connect(signer: Signer): OutputFacet__factory {
    return super.connect(signer) as OutputFacet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): OutputFacetInterface {
    return new utils.Interface(_abi) as OutputFacetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): OutputFacet {
    return new Contract(address, _abi, signerOrProvider) as OutputFacet;
  }
}

export interface OutputFacetLibraryAddresses {
  ["@cartesi/util/contracts/Bitmask.sol:Bitmask"]: string;
  ["@cartesi/util/contracts/MerkleV2.sol:MerkleV2"]: string;
}
