require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give clock other food pledge renew saddle around coral light army gesture'; 
let testAccounts = [
"0x72543765603b3a54495247caa83dc945f4bf6b2c7390074ae3b28ea92ea8815d",
"0x2d2830c10e3bafd001963bd677334bece147e6777aa4e99f88094342606097dd",
"0x33bbd45e87bb51eea10ff38b5aa9467a4f45c86aa40243c3f1adb5d59a6b272b",
"0x2c1f6444644dd1d35e57f184db8df4eea35d14e3abf934940d4ef9e72facfab4",
"0x26b1876debd484449c4975916db9e8cdd6c798a3f2a57572e6147914d91048bc",
"0x2e4f3a93d589867f5f6a3e971457d5093ea5aa72f30776abe910df5c0ca5a936",
"0xdfd3b1793332cd9542d0823d6624bc161b771fad68b995fc32d16dda8d3ca766",
"0xbdddf13c7c90a87891d8a74e9adbc353ef0a31414bc7c441f01098e0f80ad9c1",
"0x2b1e14640f219e54b329bf6b46500e6ee181937926ec971a2f5c017b164e09b2",
"0x686ca637a8d6accd03e87fb1f586a26e90daf86f6d9b647b20cdfb3508a8bc73"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

