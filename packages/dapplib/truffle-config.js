require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey entry off suggest name repeat magic method grid enroll slot gate'; 
let testAccounts = [
"0xdb46e9d7628514478d5b212aeb25cef74e3b5c71ebd0a671d48e7608a45e5fb7",
"0xd5034408b634a5ba48c6d76da1a926a57b304af9b5199058819430e20cc92e49",
"0xea2be1633ca31b15ad698f986cdb817d9e6e0669a1351699f2ae1db8cae3fc2e",
"0xe1be86a67162b3007db74d4e577af28e4eaa3895dc621dfb09a7674452ff6cd7",
"0x97a7e91bb5c3802e7e1417f30cb629b3ad47a3a17598cbbe45ffdc71f6486974",
"0xaa24a53f053821103194b79ce03c6b418675e9e24eebda24bfcb953943addcca",
"0xc2146488a3b088ba86ee827f4ad56da913f795ef6a8424bedffb2a46b15ffbe2",
"0xf3d37cd255eb8ee9f78c924c0a6d0a814e9fcc51ae490a86c7175b52054895b7",
"0x720f2dbcebb50d1a45e71da89e679b45e149a2a687be49028d3fbc9a9d4bf9f5",
"0xc8d4d485762d99e2f84d025a5926e5b648a6eb988f20646e3907851001848302"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

