export const CONTACT_ADDRESS = '0xf5F4Ac09623118986f4037fa5B0E0e8f6Ff3712c';

export const CONTACT_ABI = [
    {
        "inputs": [],
        "name": "addDevice",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_spectator",
                "type": "address"
            }
        ],
        "name": "setSpectator",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_date",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "_longitude",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_latitude",
                "type": "string"
            }
        ],
        "name": "storeGeo",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "unsetSpectator",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "devices",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "deviceId",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "device",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "spectator",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getDevice",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getSpectator",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getTrack",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "uint256",
                        "name": "date",
                        "type": "uint256"
                    },
                    {
                        "internalType": "string",
                        "name": "longitude",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "latitude",
                        "type": "string"
                    }
                ],
                "internalType": "struct SecureMyKids.Geo[]",
                "name": "",
                "type": "tuple[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "isRegistered",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
];
