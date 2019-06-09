const   ABI = [
    [
        {
            "constant": false,
            "inputs": [
                {
                    "name": "paramEndereco",
                    "type": "address"
                },
                {
                    "name": "paramNomeProprietario",
                    "type": "string"
                },
                {
                    "name": "paramValorVenal",
                    "type": "uint256"
                }
            ],
            "name": "registraImovel",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "matricula",
                    "type": "uint256"
                }
            ],
            "name": "devolveNomeProprietario",
            "outputs": [
                {
                    "name": "",
                    "type": "string"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "livro1",
            "outputs": [
                {
                    "name": "endereco",
                    "type": "address"
                },
                {
                    "name": "nomeProprietario",
                    "type": "string"
                },
                {
                    "name": "valorVenal",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "livro2",
            "outputs": [
                {
                    "name": "endereco",
                    "type": "address"
                },
                {
                    "name": "nomeProprietario",
                    "type": "string"
                },
                {
                    "name": "valorVenal",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }
    ];
    
    if (network === "4") {
        contractAddress = "0x85cd134ee89b239ccb88864423c87b1edef310e9"; 
    } else {
        contractAddress = "0x72b78f896e15f3e4c12b4a93ec92c0aadc05f531"; 
    }
    
    contract = web3.eth.contract(contractABI).at(contractAddress);
