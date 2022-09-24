export const config = {
  provider: 'https://mainnet.infura.io/v3/<key>', //Infura or any other RPC provider.
  contractAddress: '0x369156da04b6f313b532f7ae08e661e402b1c2f2', // the address of the NFT Collection.
  startId: 1000, // the first tokenId of the collection. Usually 0 or sometimes 1.
  endId: 1010, // the last tokenId of the collection.
  outputFile: 'snapshot.json', // name of the export file. Must be .json
}
