export const contracts: { [chainId: number]: string } = {
  1: '0x8b1d00fdf6df6efeeecd29002d522371ffafb928',
  56: '0xaac1b7871e0c8cffdeb0cb905434effdfb1831c0',
  137: '0x41d93d10f4081f692a9f7471e91f6734b743e974',
}

export const ABI = [
  {
    inputs: [
      { internalType: 'address', name: 'collection', type: 'address' },
      { internalType: 'uint256', name: 'startId', type: 'uint256' },
      { internalType: 'uint256', name: 'endId', type: 'uint256' },
    ],
    name: 'getOwners',
    outputs: [{ internalType: 'address[]', name: 'addresses', type: 'address[]' }],
    stateMutability: 'view',
    type: 'function',
  },
]
