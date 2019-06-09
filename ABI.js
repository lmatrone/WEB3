const contractABI = [
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
    ]
]
