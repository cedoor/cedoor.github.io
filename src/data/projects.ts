export interface Project {
  title: string
  company: string
  companyUrl: string
  dateRange: string
  description: string
  skills: string[]
  repoUrl?: string
  siteUrl?: string
  active?: boolean
}

const projects: Project[] = [
  {
    title: 'Nesso',
    company: 'Personal Project',
    companyUrl: 'https://github.com/cedoor',
    dateRange: 'May 2026 — Present',
    description: `<a href="https://nesso.how/">Nesso</a> is an app for active learning built around
      typed knowledge graphs, where nodes are ideas and edges are the typed semantic relations you
      draw between them. Instead of absorbing answers passively, you draw connections and choose what
      each link means: <b>causes</b> versus <b>enables</b>, <b>subtype-of</b> versus
      <b>instance-of</b>, across <b>52 relation types</b> in eight categories. Every concept carries
      <b>spaced-repetition</b> state via <b>FSRS</b>. Nesso runs as a <b>local-first</b> web app
      and a <b>Tauri</b> desktop app. An optional <b>Socratic AI</b> helps you work through ideas
      using local or cloud models. It revisits an interest I first explored with <b>Mindmapp</b>, my first
      open-source project: helping people organize what they learn. This time I'm focusing on
      active learning, research on memory, and giving people control over their data.`,
    skills: ['Knowledge Graph', 'AI', 'Open Source', 'Learning'],
    repoUrl: 'https://github.com/nesso-how/nesso',
    siteUrl: 'https://nesso.how/',
    active: true,
  },
  {
    title: 'Atlante',
    company: 'Personal Project',
    companyUrl: 'https://github.com/cedoor',
    dateRange: 'Jul 2026 — Sep 2026',
    description: `<a href="https://atlante.sh/">Atlante</a> has been an experimental project where I explored
      ways to manage agent prompts, skills, and workflows as <b>composable</b>, versioned artifacts.
      I built a small <b>TypeScript</b> tool to try out
      templates, validation, reusable packs, and early forms of evaluation.`,
    skills: ['AI', 'Developer Experience', 'Open Source', 'TypeScript'],
    repoUrl: 'https://github.com/atlante/atlante',
    siteUrl: 'https://atlante.sh/',
  },
  {
    title: 'Squid',
    company: 'Personal Project',
    companyUrl: 'https://github.com/cedoor',
    dateRange: 'Apr 2026 — Jun 2026',
    description: `<a href="https://squid.cedoor.dev/">Squid</a> grew out of my work on TheInterfold, where I spent a lot of time wrestling with
      <b>fully homomorphic encryption</b> and the rough edges of the tools available. It is an
      ergonomic <b>Rust</b> wrapper for <a href="https://github.com/poulpy-fhe/poulpy">Poulpy</a>,
      a high-performance FHE library built on <b>RLWE encryption over the Torus</b>, adopting the
      bivariate polynomial representation proposed in
      <a href="https://eprint.iacr.org/2023/771">Revisiting Key Decomposition Techniques for FHE</a>
      and drawing on <a href="https://eprint.iacr.org/2018/758">CHIMERA</a> for unifying different
      schemes under a common plaintext space. Squid handles scratch memory management
      and scheme lifecycle transitions. It also ships as <b>squid-js</b>, with <b>WebAssembly</b> and
      <b>Node.js</b> bindings for use from JavaScript.`,
    skills: ['Rust', 'Fully Homomorphic Encryption', 'Research'],
    repoUrl: 'https://github.com/cedoor/squid',
    siteUrl: 'https://squid.cedoor.dev/',
  },
  {
    title: 'TheInterfold',
    company: 'TheInterfold',
    companyUrl: 'https://www.theinterfold.com/',
    dateRange: 'Sep 2025 — Apr 2026',
    description: `After a roughly 5-month break, I resumed work on the most complex project I've worked on so far.
      I had a lot to learn from the cryptographers and engineers on the team.
      <a href="https://www.theinterfold.com/">TheInterfold</a> is a
      <b>distributed network for verifiable confidential computation</b> that combines <b>FHE</b>,
      <b>MPC</b>, <b>ZK</b>, <b>blockchain</b>, and <b>mechanism design</b>. The network is designed
      to run computations on <b>encrypted data</b> contributed by multiple users. My work focused on
      <b>Noir</b> circuits and recursive proofs for verifying the <b>threshold-BFV</b> protocol,
      from distributed key generation and input encryption to threshold decryption and on-chain
      verification. I also built <b>CRISP</b>'s proof system for coercion-resistant secret ballots,
      along with TypeScript SDKs, APIs, and tooling for generating and integrating proofs.`,
    skills: [
      'Zero-Knowledge',
      'Full Homomorphic Encryption',
      'Multi-Party Computation',
      'Research',
      'Rust',
    ],
    repoUrl: 'https://github.com/gnosisguild/enclave',
    siteUrl: 'https://www.theinterfold.com/',
  },
  {
    title: 'MPC Framework',
    company: 'PSE (Ethereum Foundation)',
    companyUrl: 'https://pse.dev/',
    dateRange: 'Jan 2025 — Feb 2025',
    description: `Although I only worked on it for a couple of months, this project gave me the chance to
      study <a href="https://mpc.pse.dev/">MPC</a> (Multi-Party Computation) and use <b>Rust</b>
      for the first time. MPC Framework makes building MPC circuits simpler, thanks to
      a DSL called <a href="https://github.com/privacy-ethereum/summon">Summon</a> for boolean
      circuits and a plug-in architecture for different backends. In my opinion one of the most
      well-executed projects at PSE, largely thanks to
      <a href="https://github.com/voltrevo">Andrew Morris</a>.`,
    skills: ['Multi-Party Computation', 'Rust'],
    repoUrl: 'https://github.com/privacy-ethereum/mpc-framework',
  },
  {
    title: 'ZK-ID',
    company: 'PSE (Ethereum Foundation)',
    companyUrl: 'https://pse.dev/',
    dateRange: 'Jul 2024 — Nov 2024',
    description: `<a href="https://pse.dev/projects/zk-id">ZK-ID</a> is a team working on
      <b>zero-knowledge proofs</b> for digital identity systems. I contributed from the team's
      inception, shortly before <b>Devcon SEA</b>. The goal was to coordinate efforts toward making
      ZK technologies interoperable and standardized. What struck me the most was realizing how many
      people, organizations, and institutions were already working on these problems.`,
    skills: ['Identity', 'Community', 'Zero-Knowledge'],
    repoUrl: 'https://github.com/privacy-ethereum/zkID',
  },
  {
    title: 'Zupass',
    company: '0xPARC',
    companyUrl: 'https://0xparc.org/',
    dateRange: 'Sep 2023 — Oct 2023',
    description: `Zupass, conceived before <b>Devconnect IST</b> and later used at that and many other events,
      is a platform built to store and manage <b>PCDs</b>, an abstraction similar to W3C's
      <a href="https://www.w3.org/TR/vc-data-model-2.0/">verifiable credentials</a> that allows
      anyone to verify a claim through a proof (ZK or any other cryptography). The PCD used for
      authentication was based on <a href="https://semaphore.pse.dev/">Semaphore</a>. It was a
      pleasure contributing to this project with the <a href="https://0xparc.org/">0xPARC</a> team,
      who have played a substantial role in promoting
      <a href="https://0xparc.org/writings/programmable-cryptography-1">Programmable Cryptography</a>,
      a second generation of cryptographic primitives that includes <b>ZK</b>, <b>MPC</b>,
      <b>FHE</b>, and <b>iO</b>.`,
    skills: ['Zero-Knowledge', 'Community'],
    repoUrl: 'https://github.com/proofcarryingdata/zupass',
  },
  {
    title: 'ZK-Kit',
    company: 'PSE (Ethereum Foundation)',
    companyUrl: 'https://pse.dev/',
    dateRange: 'Jan 2022 — Nov 2024',
    description: `I put a lot of work into ZK-Kit. We needed reusable, well-documented
      <b>development tools</b> for <b>zero-knowledge</b> projects, with libraries that could be used
      in <b>production</b>. I also wanted to bring together programmers interested in maintaining
      and improving them. Implementations included various Merkle trees, Baby Jubjub,
      Poseidon, and utilities initially built in <b>JavaScript</b>, <b>Solidity</b>, and
      <b>Circom</b>, later extended to <b>Noir</b> and <b>Rust</b>.`,
    skills: ['Community', 'Developer Experience'],
    repoUrl: 'https://github.com/zk-kit',
  },
  {
    title: 'Temporary Anonymous Zone',
    company: 'PSE (Ethereum Foundation)',
    companyUrl: 'https://pse.dev/',
    dateRange: 'Sep 2022 — Nov 2022',
    description: `TAZ was an experiment, a booth at <b>Devcon VI</b> where attendees could learn about
      <b>privacy, cryptography, and anonymity</b> by actually using anonymous applications built on
      <a href="https://semaphore.pse.dev/">Semaphore</a>: asking and answering questions, creating
      collaborative art, all without revealing their identity. The concept was inspired by
      <a href="https://en.wikipedia.org/wiki/Temporary_Autonomous_Zone">T.A.Z.: The Temporary
      Autonomous Zone</a>, an essay by the writer and anarchist <b>Hakim Bey</b>, adapted for the
      event by PSE's comms team. I also
      gave a <a href="https://www.youtube.com/watch?v=dxAfL91Sbw4">talk</a> at that Devcon that I
      had worked hard on, even though every cell in my body wished I wasn't on that stage at that
      moment.`,
    skills: ['Privacy', 'Anonymity', 'Community'],
    repoUrl: 'https://github.com/privacy-ethereum/taz-apps',
  },
  {
    title: 'Semaphore',
    company: 'PSE (Ethereum Foundation)',
    companyUrl: 'https://pse.dev/',
    dateRange: 'Jan 2022 — Dec 2024',
    description: `Semaphore was one of the first <b>general-purpose zero-knowledge</b> protocols, allowing
      users to prove membership in a group, or <b>anonymity set</b>, without revealing their
      identity, with gatekeepers that could enforce any condition: token ownership, credentials, and
      more. It could power anything from anonymous voting apps to mixers like
      <a href="https://tornado.cash/">Tornado Cash</a>. When I started working on it, only a
      <b>proof of concept</b> existed. I led development through the <b>audited v2–v4 releases</b>,
      redesigning the <b>Circom</b> circuits, <b>TypeScript</b> SDKs, and <b>Solidity</b> contracts.
      Alongside the protocol, I worked on documentation, release pipelines, and the tools and
      workflows contributors used to work on it. It is the project I learned the most from.`,
    skills: ['Blockchain', 'Zero-Knowledge', 'Protocol Design'],
    repoUrl: 'https://github.com/semaphore-protocol/semaphore',
  },
  {
    title: 'Interep',
    company: 'PSE (Ethereum Foundation)',
    companyUrl: 'https://pse.dev/',
    dateRange: 'Aug 2021 — Apr 2023',
    description: `After implementing Iden3's <a href="https://github.com/cedoor/sparse-merkle-tree">Sparse
      Merkle Tree</a> in TypeScript, I unexpectedly found myself working on a project with a
      mysterious team then called <b>AppliedZKP</b>, which later became
      <a href="https://pse.dev/">PSE</a> (Privacy and Scaling Explorations), a research and
      development lab supported by the Ethereum Foundation. The idea behind Interep was to build a
      bridge for transferring <b>"reputation"</b> from <b>web2 to web3</b> using
      <b>zero-knowledge</b>. Through Interep I got involved in the <b>Ethereum community</b> and
      became interested in <b>cypherpunk</b> ideas.<br><br><b>Fun fact</b>: one of the first
      contributors to Interep was Jay Graber, now CEO
      of Bluesky.`,
    skills: ['Blockchain', 'Zero-Knowledge', 'Identity', 'Community'],
    repoUrl: 'https://github.com/interep-project/reputation-service',
  },
  {
    title: 'Elekton',
    company: 'University of Cagliari',
    companyUrl: 'https://www.unica.it/',
    dateRange: 'Nov 2020 — Jul 2021',
    description: `Elekton was an <b>anonymous voting</b> application built with <b>zero-knowledge proofs</b>,
      which I worked on for my <b>master's thesis</b>. The ability to prove you possess information
      without revealing it felt like such a powerful concept that I couldn't pass up the opportunity
      to study the technology and its development tools. This project was also my first real step
      into <b>cryptography</b>, and got me thinking more seriously about <b>privacy</b>.`,
    skills: ['Blockchain', 'Zero-Knowledge', 'Research'],
    repoUrl: 'https://github.com/cedoor/elekton-dapp',
  },
  {
    title: 'CAFCHA',
    company: 'University of Cagliari',
    companyUrl: 'https://www.unica.it/',
    dateRange: 'Jan 2018 — Jan 2020',
    description: `CAFCHA was a research project I contributed to during my master's degree.
      It was an application for certifying every step of the <b>agro-food supply chain</b> on the
      <b>Ethereum blockchain</b>. At the time, "blockchain" was on the verge of becoming an overused
      buzzword, but I was interested in the technology, especially the idea of
      <b>decentralization</b> as opposed to how the web was evolving (and unfortunately has kept
      evolving). Working on it taught me more about Solidity and what it takes to move a
      <b>proof of concept to production</b>.`,
    skills: ['Blockchain', 'Research', 'Mobile'],
  },
  {
    title: 'Mindmapp',
    company: 'Personal Project',
    companyUrl: 'https://github.com/cedoor',
    dateRange: 'Sep 2017 — Aug 2020',
    description: `My first personal <b>open-source</b> project, inspired by
      <a href="https://en.wikipedia.org/wiki/Tony_Buzan">Tony Buzan</a>'s <b>mind maps</b>. Building
      it taught me a lot about <b>JavaScript and web technologies</b> and how <b>open-source</b>
      projects work. Through the project I met other people interested in memorization tools.
      The project was later forked by <a href="https://b310.de">B310</a> into
      <a href="https://github.com/b310-digital/teammapper">TeamMapper</a>, a collaborative mind
      mapping tool now used for free by <b>public schools in Germany</b>.`,
    skills: ['Open Source', 'Frontend', 'Learning'],
    repoUrl: 'https://github.com/cedoor/mindmapp',
  },
]

export default projects
