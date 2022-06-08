const contractAddress = "0x945f935660683C4adb2ef6a9aAcDe98060fE269a"

const abi = [{
        inputs: [],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        inputs: [],
        name: "crowdFunding_NotOwner",
        type: "error",
    },
    {
        inputs: [],
        name: "amount",
        outputs: [{
            internalType: "uint256",
            name: "",
            type: "uint256",
        }, ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "fund",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [{
            internalType: "address",
            name: "",
            type: "address",
        }, ],
        name: "s_addressToAmountFunded",
        outputs: [{
            internalType: "uint256",
            name: "",
            type: "uint256",
        }, ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [{
            internalType: "uint256",
            name: "",
            type: "uint256",
        }, ],
        name: "s_funders",
        outputs: [{
            internalType: "address",
            name: "",
            type: "address",
        }, ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "withdraw",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
]

module.exports = { contractAddress, abi }