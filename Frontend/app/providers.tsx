'use client';

import * as React from 'react';
import {
  RainbowKitProvider,
  getDefaultWallets,
  connectorsForWallets,
} from '@rainbow-me/rainbowkit';
// import {
//   argentWallet,
//   trustWallet,
//   ledgerWallet,
// } from '@rainbow-me/rainbowkit/wallets';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import {
  mainnet,
  goerli,
  polygon,
  polygonMumbai,
  filecoin,
  filecoinCalibration,
  arbitrum,
  arbitrumGoerli,
  arbitrumNova,
  base,
  baseGoerli,
} from 'wagmi/chains';

import {
  argentWallet,
  coinbaseWallet,
  imTokenWallet,
  injectedWallet,
  ledgerWallet,
  metaMaskWallet,
  omniWallet,
  rainbowWallet,
  trustWallet,
  walletConnectWallet,
} from '@rainbow-me/rainbowkit/wallets';

import { publicProvider } from 'wagmi/providers/public';
import { alchemyProvider } from 'wagmi/providers/alchemy'

import { ParticleNetwork } from '@particle-network/auth';
import { particleWallet } from '@particle-network/rainbowkit-ext';

new ParticleNetwork({
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID as string,
  clientKey: process.env.NEXT_PUBLIC_CLIENT_KEY as string,
  appId: process.env.NEXT_PUBLIC_APP_ID as string,
});

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [
    mainnet,
    goerli,
    polygon,
    polygonMumbai,
    arbitrum,
    arbitrumGoerli,
    arbitrumNova,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [goerli] : []),
  ],
  [ alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY || ''}),
    publicProvider()
  ]
);

const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || "";

const { wallets } = getDefaultWallets({
  appName: 'Teach AI',
  projectId,
  chains,
});

const demoAppInfo = {
  appName: 'Teach AI',
};

// const connectors = connectorsForWallets([
//   ...wallets,
//   {
//     groupName: 'Other',
//     wallets: [
//       argentWallet({ projectId, chains }),
//       trustWallet({ projectId, chains }),
//       ledgerWallet({ projectId, chains }),
//     ],
//   },
// ]);

// const wagmiConfig = createConfig({
//   autoConnect: true,
//   connectors,
//   publicClient,
//   webSocketPublicClient,
// });

const particleWallets = [
  particleWallet({ chains, authType: 'google' }),
  particleWallet({ chains, authType: 'facebook' }),
  particleWallet({ chains, authType: 'apple' }),
  particleWallet({ chains }),
];

const popularWallets = {
  groupName: 'Popular',
  wallets: [
      ...particleWallets,
      injectedWallet({ chains }),
      rainbowWallet({ chains, projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID as string }),
      coinbaseWallet({ appName: 'RainbowKit demo', chains }),
      metaMaskWallet({ chains, projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID as string }),
      walletConnectWallet({ chains, projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID as string }),
  ],
};

const connectors = connectorsForWallets([
  popularWallets,
  {
      groupName: 'Other',
      wallets: [
          argentWallet({ chains, projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID as string }),
          trustWallet({ chains, projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID as string }),
          omniWallet({ chains, projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID as string }),
          imTokenWallet({ chains, projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID as string }),
          ledgerWallet({ chains, projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID as string }),
      ],
  },
]);

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});

export function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains} appInfo={demoAppInfo}>
        {mounted && children}
      </RainbowKitProvider>
    </WagmiConfig>
  );
}