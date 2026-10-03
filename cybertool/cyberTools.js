const cyberTools = [
  {
    id: "port_scanner",
    name: "Port Scanner",
    category: "Reconnaissance",
    examples: ["Nmap", "Masscan", "Unicornscan"],
    what_it_is:
      "A tool that probes a target's IP or network to discover open ports and exposed services.",
    how_it_works:
      "Sends TCP/UDP packets to many ports, analyzes responses (SYN/ACK=open, RST=closed, timeout=filtered). Advanced tools also perform OS fingerprinting and service detection.",
    how_attackers_use:
      "Used as the first recon step to identify weak points, outdated services, open admin ports, and potential entry paths.",
    potential_impact:
      "Reveals the attack surface. Helps attackers identify vulnerabilities, exposed databases, old software versions, or misconfigured services.",
    detection: [
      "Firewall/IDS logs showing sequential or parallel probing of many ports.",
      "Repeated connections to blocked or unused ports.",
      "SIEM alerts for horizontal or vertical scanning patterns."
    ],
    protection: [
      "Block unused ports via firewall.",
      "Hide sensitive services behind VPN.",
      "Use IDS/IPS to detect scanning behavior.",
      "Perform your own routine scans to understand exposure."
    ]
  },

  {
    id: "vulnerability_scanner",
    name: "Vulnerability Scanner",
    category: "Vulnerability Management",
    examples: ["Nessus", "OpenVAS", "Qualys", "Nexpose"],
    what_it_is:
      "A tool that inspects systems, apps, and networks for known security weaknesses.",
    how_it_works:
      "Collects system info, compares it with CVE databases, performs safe tests, and generates risk reports.",
    how_attackers_use:
      "Attackers run these scanners to quickly identify unpatched vulnerabilities and easy exploit targets.",
    potential_impact:
      "Creates a roadmap of exploitable weaknesses if systems are not updated.",
    detection: [
      "Unusual HTTP requests and probing activity.",
      "Large volumes of structured requests from one IP.",
      "IDS alerts referencing known scanner signatures."
    ],
    protection: [
      "Run internal scans regularly.",
      "Patch critical vulnerabilities fast.",
      "Limit external exposure.",
      "Block or throttle suspicious scanning traffic."
    ]
  },

  {
    id: "network_sniffer",
    name: "Network Sniffer",
    category: "Network Analysis",
    examples: ["Wireshark", "tcpdump", "Tshark"],
    what_it_is:
      "A tool that captures and analyzes network packets to inspect protocol behavior and traffic content.",
    how_it_works:
      "Switches an interface to promiscuous mode, reads packets, decodes headers, and for unencrypted traffic shows full content.",
    how_attackers_use:
      "Used to steal unencrypted credentials, sensitive data, session cookies, or understand internal network layout.",
    potential_impact:
      "Can reveal login details, personal data, API calls, and internal system information.",
    detection: [
      "Interfaces unexpectedly in promiscuous mode.",
      "Unusual ARP/network behavior.",
      "Security tools detecting unauthorized sniffers."
    ],
    protection: [
      "Use HTTPS, SSH, VPN.",
      "Avoid logging into sensitive services over open Wi-Fi.",
      "Use secure switching and network segmentation.",
      "Monitor endpoints for sniffing tools."
    ]
  },

  {
    id: "web_proxy",
    name: "Web Proxy / Interception Tool",
    category: "Web Application Testing",
    examples: ["Burp Suite", "OWASP ZAP", "Fiddler"],
    what_it_is:
      "A tool that intercepts and modifies HTTP(S) traffic between client and server.",
    how_it_works:
      "Browser is configured to route traffic through the proxy, enabling full modification of requests and responses.",
    how_attackers_use:
      "Used to bypass client-side validation, change parameters, extract hidden fields, fuzz endpoints, and test for injections.",
    potential_impact:
      "Can expose authorization flaws, business logic bugs, and injection vulnerabilities.",
    detection: [
      "High number of request variations from one source.",
      "Presence of malicious patterns in HTTP parameters.",
      "Spikes in server errors."
    ],
    protection: [
      "Do strict server-side validation.",
      "Use prepared statements and proper encoding.",
      "Employ a WAF for common attacks.",
      "Monitor logs for anomalies."
    ]
  },

  {
    id: "sql_injection_tool",
    name: "SQL Injection Automation Tool",
    category: "Application Exploitation",
    examples: ["sqlmap", "jSQL Injection"],
    what_it_is:
      "A tool that automates detection and exploitation of SQL injection vulnerabilities.",
    how_it_works:
      "Sends crafted payloads to parameters, monitors server responses, dumps DB data if vulnerability exists.",
    how_attackers_use:
      "Used to automatically enumerate databases, extract sensitive info, and sometimes execute OS-level commands.",
    potential_impact:
      "Full database compromise, data theft, corruption, or RCE depending on privileges.",
    detection: [
      "SQL errors in logs.",
      "Requests containing classic injection patterns.",
      "Hundreds of similar requests from same IP."
    ],
    protection: [
      "Use parameterized queries.",
      "Least-privileged DB accounts.",
      "Apply WAF rules for SQLi.",
      "Validate and sanitize user input."
    ]
  },

  {
    id: "password_cracking_tool",
    name: "Password Cracking Tool",
    category: "Authentication Attacks",
    examples: ["Hashcat", "John the Ripper", "Hydra"],
    what_it_is:
      "Tools that recover passwords by cracking hashes or brute forcing authentication endpoints.",
    how_it_works:
      "Offline: compare hashed guesses with stolen hashes. Online: automate login attempts with wordlists.",
    how_attackers_use:
      "Used to crack weak passwords, reused creds, or brute force admin panels.",
    potential_impact:
      "Account takeover, lateral movement, full service compromise.",
    detection: [
      "Large bursts of failed logins.",
      "Rapid-fire authentication attempts.",
      "Strange login patterns from unusual IPs."
    ],
    protection: [
      "Use bcrypt/scrypt/Argon2 hashing.",
      "Force strong passwords.",
      "Enable MFA.",
      "Rate limit and lock accounts after failures."
    ]
  },

  {
    id: "rat",
    name: "Remote Access Trojan",
    category: "Malware / Remote Control",
    examples: ["DarkComet", "njRAT", "Quasar RAT"],
    what_it_is:
      "Malware that gives attackers remote control of a victim's device with admin-like capabilities.",
    how_it_works:
      "Installs itself persistently, hides process, communicates with C2 server, allows remote command execution.",
    how_attackers_use:
      "Used to spy, steal files, keylog, take screenshots, and deploy more malware.",
    potential_impact:
      "Complete loss of privacy and system control; potential organizational compromise.",
    detection: [
      "Unknown processes connecting to remote servers.",
      "Suspicious startup entries.",
      "AV/EDR alerts for RAT behavior."
    ],
    protection: [
      "Avoid cracked software.",
      "Use updated AV/EDR.",
      "Monitor outbound connections.",
      "Use least privilege."
    ]
  },

  {
    id: "keylogger",
    name: "Keylogger",
    category: "Malware / Surveillance",
    examples: ["Standalone keyloggers", "Keylogging modules in RATs"],
    what_it_is:
      "Malicious software that records keystrokes and sometimes clipboard or screenshots.",
    how_it_works:
      "Hooks into OS keyboard APIs; logs keys to file or sends them to attacker.",
    how_attackers_use:
      "Used to steal passwords, messages, and financial information.",
    potential_impact:
      "Complete credential theft and account compromise.",
    detection: [
      "Security tools flagging keylogging behavior.",
      "Unknown processes hooking keyboard.",
      "Unusual outbound traffic."
    ],
    protection: [
      "Use strong endpoint security.",
      "Avoid pirated software.",
      "Use MFA/hardware keys.",
      "Review startup entries."
    ]
  },

  {
    id: "botnet_ddos",
    name: "Botnet & DDoS Tools",
    category: "Distributed Attacks",
    examples: ["Mirai", "LOIC", "HOIC"],
    what_it_is:
      "Botnets are networks of compromised devices controlled remotely; DDoS tools overwhelm targets with traffic.",
    how_it_works:
      "Bots receive commands from C2 servers and flood targets with packets or heavy requests.",
    how_attackers_use:
      "Used to extort businesses, disrupt services, or cover other attacks.",
    potential_impact:
      "Outages, slow services, financial loss, equipment overload.",
    detection: [
      "Sudden massive traffic spikes.",
      "Many IPs hitting same endpoint simultaneously.",
      "Compromised host sending constant outbound traffic."
    ],
    protection: [
      "Update routers/IoT.",
      "Use DDoS protection/CDN.",
      "Rate limiting and filtering.",
      "Monitor for infected internal nodes."
    ]
  },

  {
    id: "phishing_kit",
    name: "Phishing Kit",
    category: "Social Engineering",
    examples: ["Phishing site templates", "Email spoofers"],
    what_it_is:
      "Kits that clone legitimate login pages and send fake emails to steal credentials.",
    how_it_works:
      "Attacker deploys cloned website and sends spoofed emails, collects credentials entered by victims.",
    how_attackers_use:
      "Used to steal login details, banking info, or trigger further attacks.",
    potential_impact:
      "Account compromise, financial theft, identity theft.",
    detection: [
      "Sender email mismatch.",
      "Suspicious domain names.",
      "Urgent-threat language in email."
    ],
    protection: [
      "Do not log in via links.",
      "Enable MFA.",
      "Use email filters.",
      "Verify suspicious messages with official sources."
    ]
  },

  {
    id: "exploit_framework",
    name: "Exploit Framework",
    category: "Exploitation",
    examples: ["Metasploit Framework"],
    what_it_is:
      "Framework containing numerous exploits and payloads for known vulnerabilities.",
    how_it_works:
      "User selects target, exploit module, and payload; framework handles exploitation and session management.",
    how_attackers_use:
      "Used to exploit unpatched systems, gain shells, escalate privileges.",
    potential_impact:
      "Full system compromise, post-exploitation movement.",
    detection: [
      "IDS signatures for exploits.",
      "Unexpected processes created.",
      "New accounts/services appearing."
    ],
    protection: [
      "Patch frequently.",
      "Disable unused services.",
      "Use EDR to detect exploit chains.",
      "Network segmentation."
    ]
  },

  {
    id: "arp_spoof_mitm",
    name: "ARP Spoofing / MITM",
    category: "Network Attack",
    examples: ["Ettercap", "BetterCAP", "Cain & Abel"],
    what_it_is:
      "Tools that manipulate ARP to redirect traffic through attacker for man-in-the-middle attacks.",
    how_it_works:
      "Sends forged ARP replies, tricks victims into routing through attacker.",
    how_attackers_use:
      "Used to sniff traffic, hijack sessions, or tamper with weakly protected data.",
    potential_impact:
      "Credential theft, session hijacking, private data exposure.",
    detection: [
      "Duplicate IP-MAC in ARP tables.",
      "IDS ARP poisoning alerts.",
      "HTTPS certificate warnings."
    ],
    protection: [
      "Use HTTPS/HSTS.",
      "Use VPN in untrusted networks.",
      "Enable ARP inspection on switches.",
      "Monitor ARP tables."
    ]
  },

  {
    id: "ransomware",
    name: "Ransomware",
    category: "Malware",
    examples: ["WannaCry", "LockBit", "REvil"],
    what_it_is:
      "Malware that encrypts files and demands ransom for decryption key.",
    how_it_works:
      "Spreads via phishing, exploits, or RDP compromise; encrypts files; deletes backups; drops ransom note.",
    how_attackers_use:
      "Used to extort money from individuals and organizations.",
    potential_impact:
      "Loss of data, downtime, financial damage, data leaks.",
    detection: [
      "Mass file changes.",
      "New file extensions.",
      "High disk/CPU usage.",
      "Ransom notes appearing."
    ],
    protection: [
      "Use offline backups.",
      "Patch RDP/VPN vulnerabilities.",
      "Use MFA.",
      "Network segmentation.",
      "EDR ransomware protection."
    ]
  }
];

module.exports = {cyberTools};


