// attacks/misc.js

const micsAttacks = [
  {
    id: "supply-chain-attack",
    name: "Supply Chain Attack",
    category: "misc",
    severity: "critical",
    description: "Attackers compromise a vendor, software provider, or third-party service to infiltrate downstream targets.",
    detection: [
      "Unexpected software updates",
      "Threat intel alerts on vendor compromise"
    ],
    impact: [
      "Massive multi-organization breach",
      "Malware deployment"
    ],
    propagation: [
      "Compromised dependencies",
      "Malicious software updates"
    ],
    mitigation: [
      "Verify software signatures",
      "Vendor security audits"
    ],
    keywords: ["supply chain", "dependency attack"]
  },

  {
    id: "zero-day-exploit",
    name: "Zero-Day Exploit",
    category: "misc",
    severity: "critical",
    description: "Exploitation of unknown vulnerabilities before developers or security teams are aware of them.",
    detection: [
      "Unusual system behavior",
      "Memory corruption crashes"
    ],
    impact: [
      "RCE",
      "Privilege escalation"
    ],
    propagation: [
      "Exploit kits",
      "Advanced attackers"
    ],
    mitigation: [
      "EDR monitoring",
      "Exploit protection tools"
    ],
    keywords: ["zero day", "0day", "unknown vulnerability"]
  },

  {
    id: "ddos-attack",
    name: "Distributed Denial of Service (DDoS)",
    category: "misc",
    severity: "high",
    description: "Attackers flood network or server with traffic to make services unavailable.",
    detection: [
      "Traffic spikes",
      "Server overload"
    ],
    impact: [
      "Service downtime",
      "Financial loss"
    ],
    propagation: ["Botnets"],
    mitigation: ["Rate limiting", "DDoS protection"],
    keywords: ["ddos", "traffic flood"]
  },

  {
    id: "dos-attack",
    name: "Denial of Service (DoS)",
    category: "misc",
    severity: "medium",
    description: "A single attacker floods a service with traffic to disrupt availability.",
    detection: [
      "Single IP with heavy requests"
    ],
    impact: [
      "Temporary downtime"
    ],
    propagation: [],
    mitigation: ["Firewall filtering"],
    keywords: ["dos", "service disruption"]
  },

  {
    id: "dns-poisoning",
    name: "DNS Poisoning",
    category: "misc",
    severity: "high",
    description: "Attackers corrupt DNS records to redirect users to malicious sites.",
    detection: [
      "DNS mismatches",
      "Unexpected IP resolutions"
    ],
    impact: [
      "Phishing",
      "Traffic hijack"
    ],
    propagation: [
      "Compromised DNS servers"
    ],
    mitigation: [
      "DNSSEC",
      "Secure DNS servers"
    ],
    keywords: ["dns spoof", "dns attack"]
  },

  {
    id: "man-in-the-middle-generic",
    name: "Man-in-the-Middle (Generic)",
    category: "misc",
    severity: "high",
    description: "Attackers intercept communication between two parties without their knowledge.",
    detection: [
      "Certificate warnings",
      "Strange network routes"
    ],
    impact: [
      "Data theft",
      "Session hijacking"
    ],
    propagation: [
      "Compromised networks"
    ],
    mitigation: [
      "Use HTTPS",
      "VPN"
    ],
    keywords: ["mitm", "communication interception"]
  },

  {
    id: "password-spraying",
    name: "Password Spraying",
    category: "misc",
    severity: "high",
    description: "Attackers try common passwords across many usernames to avoid account lockout.",
    detection: [
      "Multiple login failures across many users"
    ],
    impact: [
      "Account takeover"
    ],
    propagation: [
      "Automated scripts"
    ],
    mitigation: [
      "Strong MFA",
      "Login throttling"
    ],
    keywords: ["password spraying", "auth attack"]
  },

  {
    id: "credential-stuffing",
    name: "Credential Stuffing",
    category: "misc",
    severity: "high",
    description: "Attackers use leaked username-password combinations to login to other websites.",
    detection: [
      "Login attempts from breached lists"
    ],
    impact: [
      "Account takeover"
    ],
    propagation: [
      "Database leaks"
    ],
    mitigation: [
      "MFA",
      "Password uniqueness"
    ],
    keywords: ["credential reuse", "stuffing attack"]
  },

  {
    id: "bruteforce-attack",
    name: "Brute Force Attack",
    category: "misc",
    severity: "medium",
    description: "Attackers attempt all possible password combinations to gain access.",
    detection: ["Continuous login failures"],
    impact: ["Unauthorized access"],
    propagation: ["Automated tools"],
    mitigation: ["Rate limiting", "MFA"],
    keywords: ["brute force", "password attack"]
  },

  {
    id: "rainbow-table-attack",
    name: "Rainbow Table Attack",
    category: "misc",
    severity: "medium",
    description: "Attackers use precomputed hash tables to crack hashed passwords.",
    detection: [],
    impact: ["Password cracking"],
    propagation: ["Hash leaks"],
    mitigation: ["Salted hashing"],
    keywords: ["rainbow table", "hash attack"]
  },

  {
    id: "insider-threat",
    name: "Insider Threat",
    category: "misc",
    severity: "critical",
    description: "Malicious or careless insiders misuse access to steal data or sabotage systems.",
    detection: [
      "Unusual internal access"
    ],
    impact: [
      "Data theft",
      "System sabotage"
    ],
    propagation: [
      "Internal access rights"
    ],
    mitigation: [
      "Zero trust policies"
    ],
    keywords: ["insider attack", "internal threat"]
  },

  {
    id: "ransomware-generic",
    name: "Generic Ransomware",
    category: "misc",
    severity: "critical",
    description: "Malware encrypts files and demands ransom for decryption.",
    detection: [
      "Sudden file encryption",
      "Ransom notes"
    ],
    impact: [
      "Data loss",
      "Financial loss"
    ],
    propagation: [
      "Phishing",
      "Malicious downloads"
    ],
    mitigation: [
      "Backups",
      "Endpoint protection"
    ],
    keywords: ["ransomware", "file encryption"]
  },

  {
    id: "sql-injection-generic",
    name: "SQL Injection (Generic)",
    category: "misc",
    severity: "high",
    description: "Attackers manipulate SQL queries to access or modify databases without authorization.",
    detection: [
      "SQL errors",
      "Unexpected DB queries"
    ],
    impact: [
      "Data theft",
      "Database corruption"
    ],
    propagation: ["Web inputs"],
    mitigation: ["Parameterized queries"],
    keywords: ["sql injection", "db attack"]
  },

  {
    id: "api-abuse",
    name: "API Abuse Attack",
    category: "misc",
    severity: "medium",
    description: "Attackers exploit unsecured APIs to extract data or perform unauthorized operations.",
    detection: ["High API calls"],
    impact: ["Data leak"],
    propagation: ["Exposed APIs"],
    mitigation: ["API rate limiting"],
    keywords: ["api exploit", "api abuse"]
  },

  {
    id: "data-exfiltration",
    name: "Data Exfiltration Attack",
    category: "misc",
    severity: "critical",
    description: "Data is stolen or transferred from an organization without authorization.",
    detection: ["Unusual outbound traffic"],
    impact: ["Data loss"],
    propagation: ["Malware", "Insiders"],
    mitigation: ["DLP solutions"],
    keywords: ["data exfiltration", "data theft"]
  },

  {
    id: "fileless-malware",
    name: "Fileless Malware Attack",
    category: "misc",
    severity: "critical",
    description: "Malware runs only in memory, leaving no files on disk, making it difficult to detect.",
    detection: ["Unusual process activity"],
    impact: ["Stealth compromise"],
    propagation: ["PowerShell exploits"],
    mitigation: ["EDR detection"],
    keywords: ["fileless malware", "memory attack"]
  },

  {
    id: "social-engineering-generic",
    name: "Social Engineering (Generic)",
    category: "misc",
    severity: "medium",
    description: "General human manipulation techniques used to trick victims.",
    detection: ["Suspicious behavior"],
    impact: ["Unauthorized access"],
    propagation: ["Human weakness"],
    mitigation: ["Awareness training"],
    keywords: ["social attack", "generic social engineering"]
  },

  {
    id: "remote-code-execution",
    name: "Remote Code Execution (General)",
    category: "misc",
    severity: "critical",
    description: "Attackers gain ability to run arbitrary code on a target system.",
    detection: ["Unexpected exec calls"],
    impact: ["System takeover"],
    propagation: ["Software vulnerabilities"],
    mitigation: ["Patch systems"],
    keywords: ["rce", "remote code"]
  },

  {
    id: "path-traversal",
    name: "Path Traversal (Generic)",
    category: "misc",
    severity: "high",
    description: "Attackers access files outside allowed directories by manipulating file paths.",
    detection: ["../ patterns"],
    impact: ["Data theft"],
    propagation: ["Unvalidated inputs"],
    mitigation: ["Path sanitization"],
    keywords: ["path traversal", "directory traversal"]
  },

  {
    id: "malicious-macros",
    name: "Malicious Macros Attack",
    category: "misc",
    severity: "high",
    description: "Attackers embed malicious scripts into Office documents.",
    detection: ["Macro enable warnings"],
    impact: ["Malware infection"],
    propagation: ["Emails"],
    mitigation: ["Disable macros"],
    keywords: ["macro malware", "office attack"]
  },

  {
    id: "cryptojacking",
    name: "Cryptojacking",
    category: "misc",
    severity: "high",
    description: "Malware secretly mines cryptocurrency using victim’s resources.",
    detection: ["High CPU usage"],
    impact: ["Resource theft"],
    propagation: ["Infected websites"],
    mitigation: ["Block mining scripts"],
    keywords: ["crypto mining", "cryptojack"]
  },

  {
    id: "command-injection",
    name: "Command Injection (Generic)",
    category: "misc",
    severity: "high",
    description: "Attackers inject OS commands into vulnerable applications.",
    detection: ["Shell command traces"],
    impact: ["System compromise"],
    propagation: ["Input injection"],
    mitigation: ["Input sanitization"],
    keywords: ["command injection", "os injection"]
  },

  {
    id: "botnet-attack",
    name: "Botnet-Based Attack",
    category: "misc",
    severity: "high",
    description: "Large networks of infected devices controlled remotely perform attacks like DDoS.",
    detection: ["Massive traffic"],
    impact: ["Service disruption"],
    propagation: ["Malware infection"],
    mitigation: ["Botnet takedown"],
    keywords: ["botnet", "network attack"]
  },

  {
    id: "packet-sniffing",
    name: "Packet Sniffing",
    category: "misc",
    severity: "medium",
    description: "Attackers capture network packets to collect sensitive data.",
    detection: ["Promiscuous mode detection"],
    impact: ["Data interception"],
    propagation: ["Open networks"],
    mitigation: ["Encryption"],
    keywords: ["packet sniff", "network capture"]
  },

  {
    id: "insider-sabotage",
    name: "Insider Sabotage",
    category: "misc",
    severity: "critical",
    description: "An insider intentionally damages systems or data.",
    detection: ["Unauthorized deletions"],
    impact: ["System failure"],
    propagation: ["Internal access"],
    mitigation: ["Monitoring"],
    keywords: ["sabotage", "insider attack"]
  },

  {
    id: "malicious-browser-extension",
    name: "Malicious Browser Extension",
    category: "misc",
    severity: "medium",
    description: "Extensions steal browsing data, passwords, or inject ads.",
    detection: ["Unknown extensions"],
    impact: ["Data theft"],
    propagation: ["Fake extension stores"],
    mitigation: ["Review extensions"],
    keywords: ["browser malware", "extension attack"]
  },

  {
    id: "session-replay-attack",
    name: "Session Replay Attack",
    category: "misc",
    severity: "medium",
    description: "Attackers replay captured web sessions to impersonate users.",
    detection: ["Duplicate session IDs"],
    impact: ["Account takeover"],
    propagation: ["Session theft"],
    mitigation: ["Invalidate tokens"],
    keywords: ["session replay", "token reuse"]
  },

  {
    id: "ai-model-poisoning",
    name: "AI Model Poisoning",
    category: "misc",
    severity: "high",
    description: "Attackers poison training data to manipulate AI model outputs.",
    detection: ["Model behavior anomalies"],
    impact: ["Incorrect predictions"],
    propagation: ["Manipulated datasets"],
    mitigation: ["Dataset validation"],
    keywords: ["ml poison", "ai attack"]
  },

  {
    id: "log4j-exploit",
    name: "Log4j (Log4Shell) Exploit",
    category: "misc",
    severity: "critical",
    description: "A vulnerability in Log4j allowing remote code execution via JNDI lookups.",
    detection: ["Inbound JNDI requests"],
    impact: ["Complete system takeover"],
    propagation: ["Malicious log inputs"],
    mitigation: ["Patch Log4j"],
    keywords: ["log4shell", "log4j exploit"]
  },

  {
    id: "xml-external-entity",
    name: "XML External Entity (Generic XXE)",
    category: "misc",
    severity: "high",
    description: "Attackers exploit XML parsers to access sensitive files or perform SSRF.",
    detection: ["XML parsing errors"],
    impact: ["File theft"],
    propagation: ["Untrusted XML"],
    mitigation: ["Disable external entities"],
    keywords: ["xxe", "xml exploit"]
  },

  {
    id: "csrf-attack",
    name: "CSRF Attack (Generic)",
    category: "misc",
    severity: "medium",
    description: "Attackers trick users into performing unwanted actions on authenticated applications.",
    detection: ["Unexpected account actions"],
    impact: ["Unauthorized changes"],
    propagation: ["Malicious links"],
    mitigation: ["CSRF tokens"],
    keywords: ["csrf", "cross-site request forgery"]
  },

  {
    id: "cache-poisoning",
    name: "Cache Poisoning Attack",
    category: "misc",
    severity: "medium",
    description: "Attackers manipulate caching mechanisms to deliver malicious responses.",
    detection: ["Unexpected cached pages"],
    impact: ["Phishing", "Content injection"],
    propagation: ["Proxy exploitation"],
    mitigation: ["Cache validation"],
    keywords: ["cache poisoning", "proxy manipulation"]
  },

  {
    id: "cloud-misconfig-generic",
    name: "Generic Cloud Misconfiguration",
    category: "misc",
    severity: "high",
    description: "Misconfigured cloud permissions allow attackers unauthorized access.",
    detection: ["CSPM alerts"],
    impact: ["Data breaches"],
    propagation: ["Weak config"],
    mitigation: ["Harden cloud settings"],
    keywords: ["cloud misconfig", "cloud attack"]
  },

  {
    id: "malvertising",
    name: "Malvertising",
    category: "misc",
    severity: "medium",
    description: "Malicious ads serve malware through legitimate ad networks.",
    detection: ["Ad anomalies"],
    impact: ["Malware infection"],
    propagation: ["Ad networks"],
    mitigation: ["Ad blockers"],
    keywords: ["malvertising", "ad malware"]
  },

  {
    id: "typosquatting",
    name: "Typosquatting",
    category: "misc",
    severity: "medium",
    description: "Attackers register misspelled domain names to trick users.",
    detection: ["Domain mismatch"],
    impact: ["Credential theft"],
    propagation: ["Phishing"],
    mitigation: ["Bookmark correct sites"],
    keywords: ["typosquatting", "domain spoof"]
  },

  {
    id: "rogue-software-updates",
    name: "Rogue Software Update Attack",
    category: "misc",
    severity: "critical",
    description: "Fake software updates install malware instead of updates.",
    detection: ["Unexpected update prompts"],
    impact: ["Malware installation"],
    propagation: ["Fake popups"],
    mitigation: ["Verify update sources"],
    keywords: ["fake update", "rogue update"]
  },

  {
    id: "insider-password-sharing",
    name: "Insider Password Sharing",
    category: "misc",
    severity: "high",
    description: "Employees sharing passwords intentionally or unintentionally.",
    detection: ["Multiple logins from same credentials"],
    impact: ["Account abuse"],
    propagation: ["Human error"],
    mitigation: ["Enforce password policy"],
    keywords: ["password sharing", "internal threat"]
  }
];

module.exports = {micsAttacks};
