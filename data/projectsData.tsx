export interface ProjectSkill {
  label: string
  color: 'primary' | 'emerald' | 'amber' | 'violet' | 'rose' | 'sky' | 'slate'
}

import type { ReactNode } from 'react'

export interface ProjectData {
  title: string
  subtitle?: string
  dateRange: string
  description: ReactNode
  skills: ProjectSkill[]
  href?: string
  repoUrl?: string
}

/** Most recent first */
const projectsData: ProjectData[] = [
  {
    title: 'Enclave',
    subtitle: 'Gnosis Guild',
    dateRange: 'Jan 2024 - Present',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    skills: [
      { label: 'Zero-Knowledge', color: 'violet' },
      { label: 'Rust', color: 'slate' },
      { label: 'Cryptography', color: 'primary' },
    ],
  },
  {
    title: 'MPC Framework',
    subtitle: 'Ethereum Foundation (PSE)',
    dateRange: 'Jan 2025 - Feb 2025',
    description:
      'Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat.',
    skills: [
      { label: 'Identity', color: 'emerald' },
      { label: 'Community', color: 'amber' },
    ],
  },
  {
    title: 'Semaphore',
    subtitle: 'Ethereum Foundation (PSE)',
    dateRange: 'Jan 2023 - Dec 2024',
    description:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    skills: [
      { label: 'ZK-SNARKs', color: 'violet' },
      { label: 'TypeScript', color: 'sky' },
      { label: 'Protocol Design', color: 'amber' },
    ],
  },
  {
    title: 'ZK-Kit',
    subtitle: 'Ethereum Foundation (PSE)',
    dateRange: 'Jan 2023 - Dec 2024',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    skills: [
      { label: 'Library Design', color: 'amber' },
      { label: 'Developer Experience', color: 'emerald' },
      { label: 'TypeScript', color: 'sky' },
    ],
  },
  {
    title: 'Temporary Anonymity Zone (TAZ)',
    subtitle: 'Ethereum Foundation (PSE)',
    dateRange: 'Jan 2023 - Dec 2024',
    description:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    skills: [
      { label: 'Privacy', color: 'violet' },
      { label: 'Research', color: 'amber' },
    ],
  },
  {
    title: 'Zupass',
    subtitle: '0xPARC',
    dateRange: 'Jan 2022 - Dec 2023',
    description:
      'Curabitur pretium tincidunt lacus. Nulla facilisi. Ut fringilla suscipit mauris sit amet tempor.',
    skills: [
      { label: 'Programmable Crypto', color: 'primary' },
      { label: 'Proofs', color: 'violet' },
    ],
  },
  {
    title: 'Interep',
    subtitle: 'Ethereum Foundation (PSE)',
    dateRange: 'Jan 2021 - Dec 2022',
    description: (
      <>
        After implementing Iden3&apos;s{' '}
        <a
          href="https://github.com/cedoor/sparse-merkle-tree"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sparse Merkle Tree
        </a>{' '}
        in TypeScript, I unexpectedly found myself working on a project with a mysterious team then
        called AppliedZKP, which later became{' '}
        <a href="https://pse.dev/" target="_blank" rel="noopener noreferrer">
          PSE
        </a>{' '}
        (Privacy and Scaling Explorations), a research and development lab supported by the Ethereum
        Foundation. The idea behind Interep was to build a bridge for transferring
        &ldquo;reputation&rdquo; from web2 to web3 using zero-knowledge. This is where my
        professional journey began in a world, that of the Ethereum community and more broadly the
        cypherpunks, that has profoundly changed me.
        <br />
        <br />
        <b>Fun fact</b>: one of the first contributors to Interep was Jay Graber, now CEO of
        Bluesky.
      </>
    ),
    skills: [
      { label: 'Blockchain', color: 'primary' },
      { label: 'Zero-Knowledge', color: 'violet' },
      { label: 'Identity', color: 'emerald' },
      { label: 'Community', color: 'amber' },
    ],
    repoUrl: 'https://github.com/interep-project/reputation-service',
  },
  {
    title: 'Elekton',
    subtitle: 'University of Cagliari',
    dateRange: 'Nov 2020 - Jul 2021',
    description:
      'Elekton was an anonymous voting application built with zero-knowledge proofs, which I worked on for my master\u2019s thesis. The ability to prove you possess information without revealing it felt like such a powerful concept that I couldn\u2019t pass up the opportunity to study the technology and its development tools. This project was also my first real step into cryptography and a more mature awareness of the importance of privacy in society.',
    skills: [
      { label: 'Blockchain', color: 'primary' },
      { label: 'Zero-Knowledge', color: 'violet' },
      { label: 'Research', color: 'violet' },
      { label: 'Solidity', color: 'slate' },
    ],
    repoUrl: 'https://github.com/cedoor/elekton-dapp',
  },
  {
    title: 'CAFCHA',
    subtitle: 'University of Cagliari',
    dateRange: 'Jan 2018 - Jan 2020',
    description:
      'CAFCHA was a research project I had the pleasure of contributing to during my master\u2019s degree. It was an application for certifying every step of the agro-food supply chain on the Ethereum blockchain. At the time, \u201Cblockchain\u201D was on the verge of becoming an overused buzzword, but its fascinating technology had deeply captivated me, especially the idea of decentralization as opposed to how the web was evolving (and unfortunately has kept evolving). It was a great experience to deepen my knowledge of Solidity and software engineering patterns for shipping a proof of concept to production.',
    skills: [
      { label: 'Blockchain', color: 'primary' },
      { label: 'Software Engineering', color: 'amber' },
      { label: 'Research', color: 'violet' },
      { label: 'Solidity', color: 'slate' },
      { label: 'Mobile Development', color: 'sky' },
    ],
  },
  {
    title: 'Mindmapp',
    subtitle: 'Personal Project',
    dateRange: 'Sep 2017 - Aug 2020',
    description: (
      <>
        My first personal open-source project, inspired by{' '}
        <a
          href="https://en.wikipedia.org/wiki/Tony_Buzan"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tony Buzan
        </a>
        &apos;s mind maps. Building it was a journey that deepened my understanding of JavaScript
        and web technologies, and opened the door to the open-source world and its philosophy. Along
        the way, I connected with people from around the globe who shared the same passion for
        effective memorization tools. The project was later forked by{' '}
        <a href="https://b310.de" target="_blank" rel="noopener noreferrer">
          B310
        </a>{' '}
        into{' '}
        <a
          href="https://github.com/b310-digital/teammapper"
          target="_blank"
          rel="noopener noreferrer"
        >
          TeamMapper
        </a>
        , a collaborative mind mapping tool now used for free by public schools in Germany.
      </>
    ),
    skills: [
      { label: 'Open Source', color: 'rose' },
      { label: 'Frontend', color: 'sky' },
    ],
    repoUrl: 'https://github.com/cedoor/mindmapp',
  },
]

export default projectsData
