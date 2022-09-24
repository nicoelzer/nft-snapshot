export const config = {
  provider: 'https://mainnet.infura.io/v3/<key>', //Infura or any other RPC provider.
  contractAddress: '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d', // the address of the NFT Collection.
  startId: 0, // the first tokenId of the collection. Usually 0 or sometimes 1.
  endId: 9999, // the last tokenId of the collection.
  outputFile: 'snapshot.json', // name of the export file. Must be .json
}