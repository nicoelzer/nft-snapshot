
# ⚡ Instant NFT / ERC721 Snapshot

This small command line tool let's you create a blazing fast snapshot of all the owners of a NFT collection. For a 10k NFT collection it usally takes 1-2 seconds.

Currently supported Networks:
 - Ethereum Mainnet
 - Polygon Mainnet 
 - Binance Smart Chain

## Getting Started

```
git clone https://github.com/nicoelzer/nft-snapshot
```

### 1. Install Dependencies

```
yarn
```

### 2. Modify snapshot.config.ts

Modify the configuration file to your needs
```json
{
  "provider": "https://mainnet.infura.io/v3/<key>",
  "contractAddress": "0x369156da04b6f313b532f7ae08e661e402b1c2f2",
  "startId": 1,
  "endId": 10000
}
```



### 3. Run Snapshot

Run the program:

```
npx ts-node src/index
```

## Sample Outout

```json
{
  stats: {
    total_nfts: 10,
    unique_owners: 4,
    unique_owners_percentage: '40.00'
  },
  holders: [
    {
      owner: '0xcBb70653e9FaD92CDC7B432d846Df251E78A8ebc',
      amount: 4,
      tokens: [1,2,3,4]
    },
    {
      owner: '0xe0609Fa28e5521919c2a19f773ef0AF44793406c',
      amount: 3,
      tokens: [5,6,7]
    },
    {
      owner: '0xad12F4535EA9ab41365eBD282f304dDE69c221CE',
      amount: 2,
      tokens: [8,9]
    },
    {
      owner: '0x20e10D173a7c8319C143c994a0b198b201312a24',
      amount: 1,
      tokens: [10]
    }
  ],
  tokenList: [
    { tokenId: 0, owner: '0xcBb70653e9FaD92CDC7B432d846Df251E78A8ebc' },
    { tokenId: 1, owner: '0xe0609Fa28e5521919c2a19f773ef0AF44793406c' },
    { tokenId: 2, owner: '0xad12F4535EA9ab41365eBD282f304dDE69c221CE' },
    { tokenId: 3, owner: '0x20e10D173a7c8319C143c994a0b198b201312a24' }
  ]
}
```