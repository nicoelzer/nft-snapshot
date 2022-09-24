import * as ethers from 'ethers'
import { JsonRpcProvider } from '@ethersproject/providers'
import { config } from './snapshot.config'
import { ABI, contracts } from './contants'
import * as fs from 'fs'

const main = async () => {
  const provider = new JsonRpcProvider(config.provider)
  const { chainId } = await provider.getNetwork()
  const contractInstance = new ethers.Contract(contracts[chainId], ABI, provider)
  
  const result = await contractInstance.getOwners(config.contractAddress, config.startId, config.endId)
  
  const tokenList: any[] = []
  const holders: any[] = []

  result.forEach((item: any, index: any) => {
    tokenList.push({ tokenId: index, owner: item })
    upsert(holders, { tokenId: index, owner: item })
  })

  const stats = {
    total_nfts: tokenList.length,
    unique_owners: holders.length,
    unique_owners_percentage: ((holders.length / tokenList.length) * 100).toFixed(2),
  }

  const data = { stats: stats, holders: holders, tokenList: tokenList }
  console.log(`snapshot exported to ${config.outputFile}`)
  fs.writeFile(config.outputFile, JSON.stringify(data, null, 4), function (err) {
    if (err) {
      console.log(err)
    }
  })
}

function upsert(array: any, element: any) {
  const i = array.findIndex((_element: any) => _element.owner === element.owner)
  if (i > -1) {
    array[i].amount++
    array[i].tokens.push(element.tokenId)
  } else array.push({ owner: element.owner, amount: 1, tokens: [element.tokenId] })
}

;(async () => {
  try {
    await main()
  } catch (e) {
    console.error(e)
  }
})()
