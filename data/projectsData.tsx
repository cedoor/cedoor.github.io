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
    subtitle: 'PSE (Ethereum Foundation)',
    dateRange: 'Jan 2025 - Feb 2025',
    description:
      'Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat.',
    skills: [
      { label: 'Identity', color: 'emerald' },
      { label: 'Community', color: 'amber' },
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
    title: 'ZK-Kit',
    subtitle: 'PSE (Ethereum Foundation)',
    dateRange: 'Jan 2023 - Dec 2024',
    description: (
      <>
        ZK-Kit was a project I deeply invested myself in, born from the realization that while{' '}
        <b>zero-knowledge technologies</b> were maturing rapidly, there was still a lack of solid,
        well-built, secure, and documented <b>development tools</b>. The idea was to build a set of
        libraries that met high <b>production standards</b>, but also a digital meeting place for
        programmers interested in contributing. Implementations included various Merkle trees, Baby
        Jubjub, Poseidon, and utilities initially built in <b>JavaScript</b>, <b>Solidity</b>, and{' '}
        <b>Circom</b>, later extended to <b>Noir</b> and <b>Rust</b>.
      </>
    ),
    skills: [
      { label: 'Community', color: 'amber' },
      { label: 'Developer Experience', color: 'emerald' },
    ],
    repoUrl: 'https://github.com/zk-kit',
  },
  {
    title: 'Temporary Anonymous Zone',
    subtitle: 'PSE (Ethereum Foundation)',
    dateRange: 'Sep 2022 - Nov 2022',
    description: (
      <>
        TAZ was an experiment, a booth at <b>Devcon VI</b> where attendees could learn about{' '}
        <b>privacy, cryptography, and anonymity</b> by actually using anonymous applications built
        on{' '}
        <a href="https://semaphore.pse.dev/" target="_blank" rel="noopener noreferrer">
          Semaphore
        </a>
        : asking and answering questions, creating collaborative art, all without revealing their
        identity. The concept was inspired by{' '}
        <a
          href="https://en.wikipedia.org/wiki/Temporary_Autonomous_Zone"
          target="_blank"
          rel="noopener noreferrer"
        >
          T.A.Z.: The Temporary Autonomous Zone
        </a>
        , an essay by the writer and anarchist <b>Hakim Bey</b>, adapted for the event by PSE&apos;s
        comms team. It was a powerful experience that left a deep mark on me. I also gave a{' '}
        <a
          href="https://www.youtube.com/watch?v=dxAfL91Sbw4"
          target="_blank"
          rel="noopener noreferrer"
        >
          talk
        </a>{' '}
        at that Devcon that I had worked hard on, even though every cell in my body wished I
        wasn&apos;t on that stage at that moment.
      </>
    ),
    skills: [
      { label: 'Privacy', color: 'violet' },
      { label: 'Anonymity', color: 'primary' },
      { label: 'Community', color: 'amber' },
    ],
    repoUrl: 'https://github.com/privacy-ethereum/taz-apps',
  },
  {
    title: 'Semaphore',
    subtitle: 'PSE (Ethereum Foundation)',
    dateRange: 'Jan 2022 - Dec 2024',
    description: (
      <>
        Semaphore was one of the first <b>general-purpose zero-knowledge</b> protocols, allowing
        users to prove membership in a group, or <b>anonymity set</b>, without revealing their
        identity, with gatekeepers that could enforce any condition: token ownership, credentials,
        and more. It could power anything from anonymous voting apps to mixers like{' '}
        <a href="https://tornado.cash/" target="_blank" rel="noopener noreferrer">
          Tornado Cash
        </a>
        . When I started working on it, only a <b>proof of concept</b> existed. My role was to{' '}
        <b>re-engineer it from the ground up</b>: simplifying the circuit and libraries, improving
        developer experience and documentation, building a community, and ultimately shipping it to
        production, with the goal of making it the <b>simplest and most mature</b> zero-knowledge
        protocol of its time. This is without a doubt the project that taught me the most and helped
        me grow on every front, both technically and personally.
      </>
    ),
    skills: [
      { label: 'Blockchain', color: 'primary' },
      { label: 'Zero-Knowledge', color: 'violet' },
      { label: 'Protocol Design', color: 'amber' },
    ],
    repoUrl: 'https://github.com/semaphore-protocol/semaphore',
  },
  {
    title: 'Interep',
    subtitle: 'PSE (Ethereum Foundation)',
    dateRange: 'Aug 2021 - Apr 2023',
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
        called <b>AppliedZKP</b>, which later became{' '}
        <a href="https://pse.dev/" target="_blank" rel="noopener noreferrer">
          PSE
        </a>{' '}
        (Privacy and Scaling Explorations), a research and development lab supported by the Ethereum
        Foundation. The idea behind Interep was to build a bridge for transferring{' '}
        <b>&ldquo;reputation&rdquo;</b> from <b>web2 to web3</b> using <b>zero-knowledge</b>. This
        is where my professional journey began in a new world, that of the <b>Ethereum community</b>{' '}
        and more broadly the <b>cypherpunks</b>, that has profoundly changed me.
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
    description: (
      <>
        Elekton was an <b>anonymous voting</b> application built with <b>zero-knowledge proofs</b>,
        which I worked on for my <b>master&apos;s thesis</b>. The ability to prove you possess
        information without revealing it felt like such a powerful concept that I couldn&apos;t pass
        up the opportunity to study the technology and its development tools. This project was also
        my first real step into <b>cryptography</b> and a more mature awareness of the importance of{' '}
        <b>privacy</b> in society.
      </>
    ),
    skills: [
      { label: 'Blockchain', color: 'primary' },
      { label: 'Zero-Knowledge', color: 'violet' },
      { label: 'Research', color: 'violet' },
    ],
    repoUrl: 'https://github.com/cedoor/elekton-dapp',
  },
  {
    title: 'CAFCHA',
    subtitle: 'University of Cagliari',
    dateRange: 'Jan 2018 - Jan 2020',
    description: (
      <>
        CAFCHA was a research project I had the pleasure of contributing to during my master&apos;s
        degree. It was an application for certifying every step of the <b>agro-food supply chain</b>{' '}
        on the <b>Ethereum blockchain</b>. At the time, &ldquo;blockchain&rdquo; was on the verge of
        becoming an overused buzzword, but its fascinating technology had deeply captivated me,
        especially the idea of <b>decentralization</b> as opposed to how the web was evolving (and
        unfortunately has kept evolving). It was a great experience to deepen my knowledge of
        Solidity and software engineering patterns for shipping a{' '}
        <b>proof of concept to production</b>.
      </>
    ),
    skills: [
      { label: 'Blockchain', color: 'primary' },
      { label: 'Research', color: 'violet' },
      { label: 'Mobile', color: 'sky' },
    ],
  },
  {
    title: 'Mindmapp',
    subtitle: 'Personal Project',
    dateRange: 'Sep 2017 - Aug 2020',
    description: (
      <>
        My first personal <b>open-source</b> project, inspired by{' '}
        <a
          href="https://en.wikipedia.org/wiki/Tony_Buzan"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tony Buzan
        </a>
        &apos;s <b>mind maps</b>. Building it was a journey that deepened my understanding of{' '}
        <b>JavaScript and web technologies</b>, and opened the door to the <b>open-source world</b>{' '}
        and its philosophy. Along the way, I connected with people from around the globe who shared
        the same passion for effective memorization tools. The project was later forked by{' '}
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
        , a collaborative mind mapping tool now used for free by <b>public schools in Germany</b>.
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
