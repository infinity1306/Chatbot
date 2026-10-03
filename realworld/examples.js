// realworld/examples/allExamples.js

const allExamples = {
  network: [
    {
      id: "nw_portscan_001",
      title: "Port scanning against exposed SSH service",
      relatedDetectionId: "detect_port_scanning",
      killChainPhase: "reconnaissance",
      domain: "network_security",
      mitreTechniques: ["T1046"],
      summary:
        "An external attacker performed a TCP SYN scan against a public server to identify open SSH (22), HTTP (80), and HTTPS (443) services.",
      indicators: [
        "Single external IP scanning > 100 ports on one host",
        "SYN packets without completing TCP handshake",
        "High number of firewall deny logs in short time"
      ],
      logsToCheck: [
        "Perimeter firewall logs",
        "NetFlow data for small outbound responses",
        "IDS/IPS alerts for Nmap/Masscan signatures"
      ],
      defensiveNotes: [
        "Implement rate-limiting",
        "Alert when new external IP scans many ports",
        "Close/Hide unnecessary services"
      ],
      references: ["MITRE ATT&CK T1046"]
    },
    {
      id: "nw_arp_spoof_001",
      title: "ARP spoofing attempt in internal LAN",
      relatedDetectionId: "detect_arp_spoof",
      killChainPhase: "lateral_movement",
      domain: "network_security",
      mitreTechniques: ["T1557"],
      summary:
        "Attacker tried to poison ARP tables and impersonate the default gateway.",
      indicators: [
        "ARP replies mapping gateway IP to new MAC",
        "arpwatch flip-flop alerts",
        "Traffic redirecting through workstation"
      ],
      logsToCheck: [
        "Switch ARP logs",
        "arpwatch alerts",
        "SPAN port captures"
      ],
      defensiveNotes: [
        "Enable DAI on switches",
        "Lock gateway MAC for critical hosts",
        "Segment user VLANs"
      ],
      references: ["MITRE T1557"]
    },
    {
      id: "nw_dns_spoof_001",
      title: "DNS spoofing towards phishing site",
      relatedDetectionId: "detect_dns_spoof",
      killChainPhase: "initial_access",
      domain: "network_security",
      mitreTechniques: ["T1565"],
      summary:
        "Compromised DNS server returned attacker IPs for important domains.",
      indicators: [
        "Domains resolving to unknown IPs",
        "DNS answers with TTL=0",
        "Queries going to rogue DNS server"
      ],
      logsToCheck: ["DNS server logs", "Endpoint DNS logs"],
      defensiveNotes: [
        "Use DNSSEC",
        "Restrict DNS resolvers",
        "Detect unexpected DNS response IPs"
      ],
      references: ["MITRE T1565"]
    }
  ],

  web: [
    {
      id: "web_sqli_001",
      title: "SQL injection on login form",
      relatedDetectionId: "detect_sql_injection",
      killChainPhase: "initial_access",
      domain: "web_application_security",
      mitreTechniques: ["T1190"],
      summary:
        "Attacker used UNION SQL queries to dump user credentials.",
      indicators: [
        "SQL keywords in URL",
        "Multiple 500 errors",
        "Large response sizes"
      ],
      logsToCheck: [
        "Web server logs",
        "WAF logs",
        "DB audit logs"
      ],
      defensiveNotes: [
        "Use parameterized queries",
        "Hide DB errors",
        "Enable WAF rules"
      ],
      references: ["OWASP Injection", "MITRE T1190"]
    },
    {
      id: "web_xss_001",
      title: "Reflected XSS session theft",
      relatedDetectionId: "detect_xss",
      killChainPhase: "credential_access",
      domain: "web_application_security",
      mitreTechniques: ["T1185"],
      summary:
        "Search parameter was reflected without encoding.",
      indicators: [
        "<script> in URLs",
        "CSP violations",
        "User complaints of forced logouts"
      ],
      logsToCheck: ["Access logs", "CSP logs"],
      defensiveNotes: [
        "Encode output",
        "Use CSP",
        "Sanitize input"
      ],
      references: ["OWASP XSS Prevention"]
    },
    {
      id: "web_csrf_001",
      title: "Unauthorized fund transfer via CSRF",
      relatedDetectionId: "detect_csrf",
      killChainPhase: "impact",
      domain: "web_application_security",
      mitreTechniques: ["T1539"],
      summary:
        "Attacker sent auto-submitting form exploiting missing CSRF tokens.",
      indicators: ["Requests without CSRF", "Referer mismatch"],
      logsToCheck: ["App logs", "Proxy logs"],
      defensiveNotes: [
        "Add CSRF tokens",
        "Validate Referer",
        "Avoid GET for state changes"
      ],
      references: ["OWASP CSRF Guide"]
    }
  ],

  endpoint: [
    {
      id: "ep_ransomware_001",
      title: "Ransomware via malicious attachment",
      relatedDetectionId: "detect_ransomware",
      killChainPhase: "impact",
      domain: "endpoint_security",
      mitreTechniques: ["T1204", "T1486"],
      summary:
        "Macros executed PowerShell which downloaded ransomware.",
      indicators: [
        "Office spawning PowerShell",
        "Rapid file renaming",
        "Shadow copies deletion"
      ],
      logsToCheck: ["EDR logs", "Sysmon", "File server logs"],
      defensiveNotes: [
        "Disable macros",
        "Application control",
        "Offline backups"
      ],
      references: ["MITRE T1486"]
    },
    {
      id: "ep_keylogger_001",
      title: "Keylogger on shared workstation",
      relatedDetectionId: "detect_keylogger",
      killChainPhase: "credential_access",
      domain: "endpoint_security",
      mitreTechniques: ["T1056"],
      summary:
        "Keylogger captured keystrokes and sent them to attacker servers.",
      indicators: [
        "SetWindowsHookEx usage",
        "Unknown startup entries",
        "Tiny frequent outbound traffic"
      ],
      logsToCheck: ["Registry logs", "EDR", "Proxy logs"],
      defensiveNotes: [
        "Restrict admin rights",
        "Monitor startup entries",
        "Behavior-based EDR"
      ],
      references: ["MITRE T1056"]
    }
  ],

  cloud: [
    {
      id: "cloud_s3_public_001",
      title: "Sensitive data exposed via public S3 bucket",
      killChainPhase: "collection",
      domain: "cloud_security",
      mitreTechniques: ["T1530"],
      summary:
        "Misconfigured bucket allowed anonymous downloads.",
      indicators: ["Public-read bucket", "Anonymous GETs"],
      logsToCheck: ["Cloud storage logs", "Audit logs"],
      defensiveNotes: [
        "Guardrails to block public buckets",
        "Scan for public exposure"
      ],
      references: []
    },
    {
      id: "cloud_iam_key_leak_001",
      title: "Leaked API key used for crypto-mining",
      killChainPhase: "resource_development",
      domain: "cloud_security",
      mitreTechniques: ["T1528"],
      summary:
        "Hard-coded IAM key leaked and attacker spun up compute for mining.",
      indicators: [
        "Spike in VMs",
        "Cost explosion",
        "Access from unknown IP"
      ],
      logsToCheck: ["Cloud audit logs", "Billing logs"],
      defensiveNotes: [
        "Remove hard-coded keys",
        "Enable repo key scanning",
        "Cost anomaly alerts"
      ],
      references: []
    }
  ],

  social_engineering: [
    {
      id: "se_bec_001",
      title: "Business Email Compromise (CEO Fraud)",
      killChainPhase: "impact",
      domain: "email_security",
      mitreTechniques: ["T1566"],
      summary:
        "Attacker impersonated CEO and tricked finance to send money.",
      indicators: [
        "Urgent payment requests",
        "Lookalike domains",
        "Mailbox forwarding rules"
      ],
      logsToCheck: ["Mail logs", "Audit logs"],
      defensiveNotes: [
        "MFA for executives",
        "Out-of-band verification"
      ],
      references: []
    },
    {
      id: "se_helpdesk_reset_001",
      title: "Social engineering the helpdesk for password reset",
      killChainPhase: "initial_access",
      domain: "social_engineering",
      mitreTechniques: ["T1078", "T1586"],
      summary:
        "Attacker convinced helpdesk to reset employee password.",
      indicators: [
        "Reset attempts not by user",
        "Weak verification",
        "Suspicious calls"
      ],
      logsToCheck: ["Helpdesk logs", "Identity provider logs"],
      defensiveNotes: [
        "Strong identity verification",
        "MFA for reset flows"
      ],
      references: []
    }
  ]
};

module.exports = { allExamples };
const examplesData = Object.values(allExamples);