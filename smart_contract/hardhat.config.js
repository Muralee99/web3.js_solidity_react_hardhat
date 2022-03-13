// https://eth-ropsten.alchemyapi.io/v2/VLAdEQFD03BjEMJ3v5yoMUnTr774J7sJ
require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/VLAdEQFD03BjEMJ3v5yoMUnTr774J7sJ',
      accounts: [ '0a09c52bd37d0408cffaaf7a74067db50ce62f70a7ba5f53425e02740ceda831' ]
    }
  }
}