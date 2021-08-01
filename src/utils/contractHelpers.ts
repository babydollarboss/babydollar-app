import { ethers } from 'ethers'
import { simpleRpcProvider } from './providers'

// Addresses
import {
  getCakeAddress,
} from './addressHelpers'

// ABI
import bep20Abi from '../config/abi/erc20.json'
import erc721Abi from '../config/abi/erc721.json'
import cakeAbi from '../config/abi/cake.json'

const getContract = (abi: any, address: string, signer?: ethers.Signer | ethers.providers.Provider) => {
  const signerOrProvider = signer ?? simpleRpcProvider
  return new ethers.Contract(address, abi, signerOrProvider)
}

export const getBep20Contract = (address: string, signer?: ethers.Signer | ethers.providers.Provider) => {
  return getContract(bep20Abi, address, signer)
}
export const getErc721Contract = (address: string, signer?: ethers.Signer | ethers.providers.Provider) => {
  return getContract(erc721Abi, address, signer)
}
export const getCakeContract = (signer?: ethers.Signer | ethers.providers.Provider) => {
  return getContract(cakeAbi, getCakeAddress(), signer)
}