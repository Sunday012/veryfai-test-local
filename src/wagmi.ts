
import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { arbitrum, base, mainnet, optimism, polygon } from 'wagmi/chains';

export const config = getDefaultConfig({
  appName: 'Veryfai',
  projectId: '4e85b5d66032b0920d953d249c599b2e',
  chains: [mainnet, polygon, optimism, arbitrum, base],
});