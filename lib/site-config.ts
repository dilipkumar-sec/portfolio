// Central place to edit portfolio content. Replace placeholder values with your own.

export const siteConfig = {
  name: 'DK',
  title: 'Cybersecurity Enthusiast | Aspiring Penetration Tester',
  intro:
    'I am learning offensive security from the ground up — building a strong foundation in networking, operating systems, and web technologies, and applying it through hands-on penetration testing labs.',
  links: {
    github: 'https://github.com/your-username',
    linkedin: 'https://www.linkedin.com/in/your-profile',
    email: 'your.email@example.com',
  },
} as const

export const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Journey', href: '#journey' },
  { label: 'Contact', href: '#contact' },
] as const

export type Skill = {
  name: string
  description: string
  topics: string[]
}

export const skills: Skill[] = [
  {
    name: 'Networking',
    description: 'How traffic moves, and where it can be observed or intercepted.',
    topics: ['TCP/IP', 'OSI model', 'Subnetting', 'DNS', 'Wireshark'],
  },
  {
    name: 'Linux',
    description: 'Daily driver for tooling, file system navigation, and privilege concepts.',
    topics: ['CLI', 'Permissions', 'Services', 'Package management'],
  },
  {
    name: 'Windows & PowerShell',
    description: 'Understanding Windows internals and automating tasks from the shell.',
    topics: ['PowerShell', 'Users & groups', 'Active Directory basics', 'Registry'],
  },
  {
    name: 'Web Application Security',
    description: 'Studying common vulnerability classes in deliberately vulnerable apps.',
    topics: ['OWASP Top 10', 'Burp Suite', 'HTTP', 'Injection', 'Auth flaws'],
  },
  {
    name: 'Enumeration',
    description: 'Methodical information gathering before any exploitation attempt.',
    topics: ['Nmap', 'Service discovery', 'Directory brute-forcing', 'SMB'],
  },
  {
    name: 'Bash Scripting',
    description: 'Writing small scripts to automate repetitive recon and lab tasks.',
    topics: ['Loops', 'Pipes', 'Text processing', 'Automation'],
  },
  {
    name: 'Python',
    description: 'Building simple security tools and scripts to understand how they work.',
    topics: ['Sockets', 'Requests', 'Parsing', 'Scripting'],
  },
]

export type Project = {
  title: string
  description: string
  technologies: string[]
  githubUrl: string
  status: 'placeholder' | 'in-progress' | 'completed'
}

export const projects: Project[] = [
  {
    title: 'Network Enumeration Script',
    description:
      'Planned: a Bash/Python wrapper that organizes Nmap scan output into readable summaries for lab environments.',
    technologies: ['Python', 'Bash', 'Nmap'],
    githubUrl: 'https://github.com/your-username',
    status: 'placeholder',
  },
  {
    title: 'Lab Write-ups Repository',
    description:
      'Planned: structured write-ups documenting methodology for retired or permitted practice machines.',
    technologies: ['Markdown', 'Linux', 'Windows'],
    githubUrl: 'https://github.com/your-username',
    status: 'placeholder',
  },
  {
    title: 'Web Vulnerability Notes',
    description:
      'Planned: notes and examples of OWASP Top 10 issues reproduced in intentionally vulnerable applications.',
    technologies: ['Burp Suite', 'HTTP', 'OWASP'],
    githubUrl: 'https://github.com/your-username',
    status: 'placeholder',
  },
  {
    title: 'PowerShell Utilities',
    description:
      'Planned: small PowerShell scripts for local Windows enumeration practice in a home lab.',
    technologies: ['PowerShell', 'Windows'],
    githubUrl: 'https://github.com/your-username',
    status: 'placeholder',
  },
]

export type Milestone = {
  title: string
  description: string
  category: 'Foundations' | 'Lab' | 'Study' | 'Tooling'
  status: 'planned' | 'in-progress' | 'completed'
  date?: string
}

// Add entries as you progress. Only mark items "completed" once they genuinely are.
export const milestones: Milestone[] = [
  {
    title: 'Networking fundamentals',
    description: 'Working through the OSI model, TCP/IP, subnetting, and packet analysis with Wireshark.',
    category: 'Foundations',
    status: 'in-progress',
  },
  {
    title: 'Linux command line proficiency',
    description: 'Practicing file system navigation, permissions, processes, and shell scripting.',
    category: 'Foundations',
    status: 'in-progress',
  },
  {
    title: 'Home lab setup',
    description: 'Building an isolated virtual lab with attacker and target machines for safe practice.',
    category: 'Lab',
    status: 'planned',
  },
  {
    title: 'Web application security practice',
    description: 'Exploring OWASP Top 10 vulnerabilities in deliberately vulnerable applications.',
    category: 'Study',
    status: 'planned',
  },
  {
    title: 'Python for security tooling',
    description: 'Writing small scripts to understand how common security tools work under the hood.',
    category: 'Tooling',
    status: 'planned',
  },
]
