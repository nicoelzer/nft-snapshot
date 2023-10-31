import * as ethers from 'ethers'
import { JsonRpcProvider } from '@ethersproject/providers'
import { ABI, contracts } from './contants'
import * as fs from 'fs'

const main = async () => {
  const { RPC, CONTRACT, START, END, OUTPUT } = process.env

  if (!RPC || !CONTRACT || !START || !END) {
    throw "RPC, CONTRACT, START and END environment variables are required";
  }

  const provider = new JsonRpcProvider(RPC)
  const { chainId } = await provider.getNetwork()
  const contractInstance = new ethers.Contract(contracts[chainId], ABI, provider)

  const result = await contractInstance.getOwners(CONTRACT, START, END)

  const tokenList: any[] = []
  const holders: any[] = []

  result.forEach((owner: any, index: any) => {
    const tokenId = parseInt(index) + parseInt(START)
    console.log(index, START, tokenId)
    tokenList.push({ tokenId, owner })
    upsert(holders, { tokenId, owner })
  })

  const stats = {
    total_nfts: tokenList.length,
    unique_owners: holders.length,
    unique_owners_percentage: ((holders.length / tokenList.length) * 100).toFixed(2),
  }

  const data = { stats: stats, holders: holders, tokenList: tokenList }
  const output = OUTPUT || 'snapshot.json';
  console.log(`snapshot exported to ${output}`)
  fs.writeFile(`${output}`, JSON.stringify(data, null, 4), function (err) {
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

; (async () => {
  try {
    await main()
  } catch (e) {
    console.error(e)
  }
})()
