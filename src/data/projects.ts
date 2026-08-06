export type Project = {
  title: string
  summary: string
  tags: string[]
  href: string
  kind: string
}

export const projects: Project[] = [
  {
    title: 'Xaver',
    summary:
      'An ink! smart contract for node staking on Substrate chains — operators manage staked positions, distribute income, and process unstaking at cessation.',
    tags: ['ink!', 'Substrate', 'Rust'],
    href: 'https://github.com/ArneilPaulPolicanv2/xaver',
    kind: 'Smart contract',
  },
  {
    title: 'Chaindata',
    summary:
      'Community-controlled relay and parachain metadata for the Polkadot ecosystem — structured chain information that wallets and apps can trust.',
    tags: ['TypeScript', 'Polkadot'],
    href: 'https://github.com/ArneilPaulPolicanv2/chaindata',
    kind: 'Infrastructure',
  },
  {
    title: 'polkadot-js/apps',
    summary:
      'Open-source contributions to Polkadot.js Apps, including Xode RPC endpoints and parachain ID updates used across the network.',
    tags: ['TypeScript', 'Polkadot.js'],
    href: 'https://github.com/polkadot-js/apps',
    kind: 'Open source',
  },
  {
    title: 'Nova Utils',
    summary:
      'Metadata and configuration for client apps across Polkadot and Kusama — keeping ecosystem tooling aligned with live chain state.',
    tags: ['Python', 'Kusama'],
    href: 'https://github.com/ArneilPaulPolicanv2/nova-utils',
    kind: 'Tooling',
  },
  {
    title: 'SubWallet ChainList',
    summary:
      'Integrated project, chain, and asset information for SubWallet products — a single source of truth for multichain discovery.',
    tags: ['Web3', 'Wallets'],
    href: 'https://github.com/ArneilPaulPolicanv2/SubWallet-ChainList',
    kind: 'Ecosystem data',
  },
  {
    title: 'Cybersecurity Projects',
    summary:
      'A growing library of hands-on security projects — from beginner labs to advanced exercises for learning by building.',
    tags: ['Security', 'Learning'],
    href: 'https://github.com/ArneilPaulPolicanv2/Cybersecurity-Projects',
    kind: 'Education',
  },
]
