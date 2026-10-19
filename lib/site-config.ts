// Central place to edit portfolio content. Replace placeholder values with your own.

export const siteConfig = {
  name: 'Dilip kumar',
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
  { label: 'Certifications', href: '#certifications' },
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

export type Certification = {
  shortName: string
  title: string
  provider: string
  status: 'training-completed' | 'in-progress' | 'certified'
  description?: string
  // ISO date (YYYY-MM-DD) shown on the card.
  dateAwarded?: string
  // Path to a file in /public, e.g. '/certificates/ejpt-certificate.png'. Replace the file to update it.
  certificateFile?: string
  // Only add once you have a real credential link.
  verificationUrl?: string
  }

// Only set status to "certified" after passing the official exam.
export const certifications: Certification[] = [
  {
    shortName: 'eJPT',
    title: 'Junior Penetration Tester',
    provider: 'INE Security',
    status: 'certified',
    description:
      'Earned the eJPT certification by demonstrating foundational knowledge of penetration testing and practical security assessment techniques.',
  dateAwarded: '2026-04-26',
  certificateFile: '/certificates/ejpt-certificate.png',
  // Paste your official INE credential verification URL here, e.g. 'https://certs.ine.com/...'
  verificationUrl: '',
  },
  {
    shortName: 'CPTS',
    title: 'Certified Penetration Testing Specialist',
    provider: 'Hack The Box',
    status: 'in-progress',
    description:
      'Currently pursuing the HTB Certified Penetration Testing Specialist learning path, developing practical skills in penetration testing, enumeration, exploitation, and privilege escalation.',
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
  category: string
  status: 'planned' | 'learning' | 'in-progress' | 'completed'
  icon: 'network' | 'linux' | 'windows' | 'web' | 'offensive' | 'tooling'
}

// Edit statuses as you progress. Only mark items "completed" once they genuinely are.
export const milestones: Milestone[] = [
  {
    title: 'Network Fundamentals',
    description: 'Studying networking concepts, TCP/IP, subnetting, ports, protocols, and network enumeration.',
    category: 'Foundations',
    status: 'in-progress',
    icon: 'network',
  },
  {
    title: 'Linux Fundamentals',
    description:
      'Practicing Linux commands, file permissions, file system navigation, processes, and shell scripting.',
    category: 'Operating Systems',
    status: 'in-progress',
    icon: 'linux',
  },
  {
    title: 'Windows Fundamentals',
    description: 'Learning Windows administration, PowerShell, permissions, and Windows internals.',
    category: 'Operating Systems',
    status: 'in-progress',
    icon: 'windows',
  },
  {
    title: 'Web Application Security',
    description: 'Studying web vulnerabilities, HTTP requests, SQL injection, and web application testing.',
    category: 'Web Security',
    status: 'in-progress',
    icon: 'web',
  },
  {
    title: 'Penetration Testing Methodology',
    description:
      'Developing a structured approach to reconnaissance, enumeration, exploitation, and reporting through authorized practical labs.',
    category: 'Offensive Security',
    status: 'in-progress',
    icon: 'offensive',
  },
  {
    title: 'Security Tooling & Scripting',
    description:
      'Developing practical experience with security tools and learning Bash and Python for automation.',
    category: 'Tooling',
    status: 'learning',
    icon: 'tooling',
  },
]
