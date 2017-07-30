/*
  info from:
    https://github.com/ionomy/ion/blob/master/src/chainparams.cpp
*/

var assign = require('object-assign')

var common = {
	name: 'Ion',
	per1: 1e8,
	unit: 'ION'
}

// Updated genBlock, port, rpcport, dnsSeeds

var main = assign({}, {
	hashGenesisBlock: '0000004cf5ffbf2e31a9aa07c86298efb01a30b8911b80af7473d1114715084b',
	// nDefaultPort
	port: 12700,
	portRpc: 12705,
	protocol: {
		// pchMessageStart
		magic: 0xd9b4bef9 // careful, sent over wire as little endian
	},
	// vSeeds
	seedsDns: [
		'seeder.baseserv.com',
		'main.seeder.baseserv.com',
		'seeder.uksafedns.net',
		'main.seeder.uksafedns.net'
	],
	// base58Prefixes
	versions: {
		bip32: {
			private: 0x0488ade4,
			public: 0x0488b21e
		},
		// http://doc.satoshilabs.com/slips/slip-0044.html
		bip44: 0,
		private: 0x99,
		public: 0x67,
		scripthash: 0x58
	}
}, common);

module.exports = {
	main: main,
	test: null
};
