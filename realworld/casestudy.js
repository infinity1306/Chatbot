const caseStudies = [
  // ===========================
  // 1. NETWORK SECURITY CASES
  // ===========================

  {
    id: "cs_nw_portscan_001",
    title: "External Port Scanning Against Exposed SSH Service",
    category: "network",

    summary:
      "An attacker executed a TCP SYN scan to map open ports (SSH, HTTP, HTTPS) on a public server. The pattern of incomplete handshakes and firewall deny spikes revealed reconnaissance behavior.",

    timeline: [
      "Attacker finds public server via Shodan",
      "Runs rapid Nmap SYN scan on TCP ports 1–1024",
      "Server replies with SYN-ACK only for open services",
      "Firewall logs show spike in DENY entries",
      "SOC flags abnormal external probing and blocks source IP"
    ],

    attackVector:
      "Nmap/Masscan-based TCP SYN scanning to enumerate open services.",

    indicatorsOfCompromise: [
      "High-volume SYN packets",
      "Incomplete TCP handshakes",
      "External IP scanning > 100 ports rapidly"
    ],

    logsAndFindings: [
      "Firewall deny logs showed frequent hits",
      "NetFlow data displayed small SYN-ACK responses",
      "IDS triggered Nmap scan signature alerts"
    ],

    rootCause:
      "Public-facing server exposed unnecessary services and lacked rate-limiting rules.",

    mitreMapping: ["T1046"],

    impact:
      "Attacker confirmed open ports, giving them reconnaissance advantage for future exploitation stages.",

    defenseRecommendations: [
      "Enable port scan detection",
      "Block unused services",
      "Rate-limit external connections",
      "Implement IDS signatures for port scanning"
    ],
    references: ["MITRE ATT&CK T1046"]
  },

  {
    id: "cs_nw_arp_spoof_001",
    title: "ARP Spoofing Attack Inside Corporate LAN",
    category: "network",

    summary:
      "An attacker attempted ARP poisoning to impersonate the default gateway and reroute internal traffic.",

    timeline: [
      "Attacker sends forged ARP replies",
      "Gateway MAC suddenly 'flips' in ARP tables",
      "Switch logs show repeated ARP conflicts",
      "arpwatch alerts SOC",
      "Network team isolates attacking workstation"
    ],

    attackVector: "Forged ARP replies to poison ARP caches.",

    indicatorsOfCompromise: [
      "Gateway IP mapped to unknown MAC",
      "Frequent ARP table changes",
      "Unusual packet redirection"
    ],

    logsAndFindings: [
      "arpwatch flip-flop alerts",
      "Switch ARP logs showing conflicts",
      "PCAP showing unsolicited ARP replies"
    ],

    rootCause:
      "LAN lacked Dynamic ARP Inspection (DAI) and MAC binding configurations.",

    mitreMapping: ["T1557"],

    impact:
      "Temporary traffic redirection; attacker could have performed sniffing or MITM.",

    defenseRecommendations: [
      "Enable Dynamic ARP Inspection",
      "Bind MAC addresses for critical hosts",
      "Enforce VLAN segmentation"
    ],
    references: ["MITRE T1557"]
  },

  {
    id: "cs_nw_dns_spoof_001",
    title: "DNS Spoofing Redirecting Users to Phishing Sites",
    category: "network",

    summary:
      "A compromised DNS resolver returned malicious IPs for legitimate domains, redirecting users to phishing clones.",

    timeline: [
      "DNS server compromised",
      "Attacker inserts rogue A-records",
      "Users begin resolving trusted domains to attacker IP",
      "SOC observes spike in DNS TTL=0 responses",
      "Investigation reveals poisoned DNS entries"
    ],

    attackVector: "DNS manipulation to redirect legitimate traffic.",

    indicatorsOfCompromise: [
      "Domains returning unexpected IPs",
      "DNS responses with TTL=0",
      "Queries going to unauthorized DNS resolvers"
    ],

    logsAndFindings: [
      "DNS server logs showed modified records",
      "Endpoint DNS logs captured mismatched resolutions"
    ],

    rootCause:
      "DNS server lacked hardening, integrity checks, and DNSSEC.",

    mitreMapping: ["T1565"],

    impact:
      "Credential theft and traffic redirection to phishing infrastructure.",

    defenseRecommendations: [
      "Implement DNSSEC",
      "Restrict DNS resolvers",
      "Alert on unexpected DNS answers"
    ],
    references: ["MITRE T1565"]
  },

  // ===========================
  // 2. WEB SECURITY CASES
  // ===========================

  {
    id: "cs_web_sqli_001",
    title: "SQL Injection on Login Form",
    category: "web",

    summary:
      "Attacker exploited a vulnerable login form using UNION-based SQL injection to extract database credentials.",

    timeline: [
      "Attacker identifies vulnerable parameter",
      "Injects UNION SELECT payload",
      "Database dumps user table",
      "WAF logs multiple DB errors",
      "SOC blocks attacker IP and patches application"
    ],

    attackVector: "UNION SQL injection on an unparameterized login query.",

    indicatorsOfCompromise: [
      "SQL keywords appearing in URL",
      "500/501 errors on login endpoint",
      "Large, unexpected DB responses"
    ],

    logsAndFindings: [
      "Web server logs show suspicious queries",
      "DB audit logs show unauthorized reads"
    ],

    rootCause:
      "Application failed to use prepared statements and sanitized input.",

    mitreMapping: ["T1190"],

    impact: "Credential leakage and full DB enumeration risk.",

    defenseRecommendations: [
      "Use parameterized queries",
      "Enable WAF SQLi rules",
      "Suppress DB error output"
    ],
    references: ["OWASP Injection", "MITRE T1190"]
  },

  {
    id: "cs_web_xss_001",
    title: "Reflected XSS Leading to Session Theft",
    category: "web",

    summary:
      "A reflected XSS vulnerability allowed attackers to steal user sessions by injecting malicious script via the search parameter.",

    timeline: [
      "Attacker injects <script> payload in query",
      "Victim clicks attacker-controlled link",
      "Session cookie sent to attacker",
      "SOC detects CSP violations",
      "Exploit path patched with output encoding"
    ],

    attackVector: "Unencoded user input reflected back into page HTML.",

    indicatorsOfCompromise: [
      "<script> appearing in logs",
      "CSP reports of blocked code",
      "Users reporting sudden logout"
    ],

    logsAndFindings: [
      "Access logs contain suspicious queries",
      "CSP logs show blocked JS execution attempts"
    ],

    rootCause: "Missing output encoding and weak CSP.",

    mitreMapping: ["T1185"],

    impact: "Session hijack enabling full account takeover.",

    defenseRecommendations: [
      "Implement strict output encoding",
      "Use strong CSP",
      "Sanitize all inputs"
    ],
    references: ["OWASP XSS Prevention"]
  },

  {
    id: "cs_web_csrf_001",
    title: "Unauthorized Fund Transfer via CSRF",
    category: "web",

    summary:
      "Missing CSRF tokens allowed an attacker to trick users into performing unintended money transfers.",

    timeline: [
      "Attacker crafts auto-submitting form",
      "Victim visits malicious site",
      "Browser sends authenticated request",
      "Bank database logs unauthorized transaction",
      "SOC blocks request patterns and adds CSRF tokens"
    ],

    attackVector: "Cross-site request forgery leveraging user’s active session.",

    indicatorsOfCompromise: [
      "Requests missing CSRF tokens",
      "Referer header anomalies"
    ],

    logsAndFindings: [
      "Application logs show unwanted fund transfers",
      "Proxy logs show suspicious origins"
    ],

    rootCause:
      "Application failed to implement CSRF tokens and referer validation.",

    mitreMapping: ["T1539"],

    impact: "Unauthorized financial transaction.",

    defenseRecommendations: [
      "Add CSRF tokens",
      "Validate Referer/Origin headers",
      "Avoid GET for state changes"
    ],
    references: ["OWASP CSRF Guide"]
  },

  // ===========================
  // 3. ENDPOINT SECURITY CASES
  // ===========================

  {
    id: "cs_ep_ransomware_001",
    title: "Ransomware Infection via Malicious Email Attachment",
    category: "endpoint",

    summary:
      "A phishing email delivered a malicious attachment that executed macros and launched PowerShell to download ransomware.",

    timeline: [
      "User receives phishing email with attachment",
      "Macros execute hidden PowerShell",
      "Ransomware downloaded and executed",
      "Files rapidly encrypted",
      "Shadow copies deleted and ransom note dropped"
    ],

    attackVector: "Macro-enabled document delivering ransomware.",

    indicatorsOfCompromise: [
      "Office spawning PowerShell",
      "Rapid file renames",
      "Shadow copies deletion events"
    ],

    logsAndFindings: [
      "EDR logs flagged suspicious process chain",
      "Sysmon showed PowerShell invocation"
    ],

    rootCause: "Macros enabled + lack of behavior-based blocking.",

    mitreMapping: ["T1204", "T1486"],

    impact: "Full workstation encryption and data loss.",

    defenseRecommendations: [
      "Disable macros",
      "Use application allowlisting",
      "Maintain offline backups"
    ],
    references: ["MITRE T1486"]
  },

  {
    id: "cs_ep_keylogger_001",
    title: "Keylogger Installed on Shared Workstation",
    category: "endpoint",

    summary:
      "A keylogger captured keystrokes and sent them to attacker-controlled servers.",

    timeline: [
      "Attacker executes installer on shared PC",
      "Keylogger adds persistence via startup registry",
      "Application captures all keystrokes",
      "Tiny, frequent outbound traffic sent to attacker",
      "SOC detects suspicious startup entries"
    ],

    attackVector: "Keylogging malware installed manually or via dropped payload.",

    indicatorsOfCompromise: [
      "SetWindowsHookEx usage",
      "Unknown startup entries",
      "Periodic outbound traffic"
    ],

    logsAndFindings: [
      "Registry logs show new Run entry",
      "EDR flagged suspicious hooks",
      "Proxy logs showed odd beaconing"
    ],

    rootCause:
      "Weak privilege controls and lack of monitoring on shared devices.",

    mitreMapping: ["T1056"],

    impact: "Credential theft and privacy breach.",

    defenseRecommendations: [
      "Restrict admin privileges",
      "Monitor startup registry keys",
      "Use behavior-based EDR"
    ],
    references: ["MITRE T1056"]
  },

  // ===========================
  // 4. CLOUD SECURITY CASES
  // ===========================

  {
    id: "cs_cloud_s3_public_001",
    title: "Sensitive Data Exposed via Public S3 Bucket",
    category: "cloud",

    summary:
      "A misconfigured AWS S3 bucket allowed anonymous public access to sensitive internal data.",

    timeline: [
      "Developer creates S3 bucket",
      "Sets 'public-read' permission accidentally",
      "Sensitive data exposed",
      "External traffic begins downloading files",
      "Cloud team revokes public access after detection"
    ],

    attackVector: "Publicly exposed S3 bucket due to misconfiguration.",

    indicatorsOfCompromise: [
      "Public-read ACL",
      "Anonymous GET requests",
      "Spike in S3 access logs"
    ],

    logsAndFindings: [
      "S3 access logs showed unknown external IPs",
      "Audit logs confirmed misconfiguration"
    ],

    rootCause:
      "Lack of permission guardrails and misconfigured access policies.",

    mitreMapping: ["T1530"],

    impact: "Data leakage and compliance violations.",

    defenseRecommendations: [
      "Block public buckets using guardrails",
      "Enable automated scanning for public exposure"
    ],
    references: []
  },

  {
    id: "cs_cloud_iam_key_leak_001",
    title: "Leaked IAM Key Used for Cryptocurrency Mining",
    category: "cloud",

    summary:
      "A hard-coded AWS IAM access key leaked publicly and was abused to spin up compute instances for cryptomining.",

    timeline: [
      "Developer commits IAM key to GitHub",
      "Attacker finds key via automated scans",
      "Massive spike in EC2 instances and costs",
      "Billing alerts triggered",
      "Access key revoked and instances terminated"
    ],

    attackVector: "Leaked IAM access key via public Git repository.",

    indicatorsOfCompromise: [
      "Sudden increase in compute usage",
      "Billing cost explosion",
      "Unknown IP accessing IAM key"
    ],

    logsAndFindings: [
      "CloudTrail logs show unauthorized usage",
      "Billing logs reflect sudden cost spike"
    ],

    rootCause: "Hard-coded credentials and no secret scanning.",

    mitreMapping: ["T1528"],

    impact: "Financial loss and compute hijacking.",

    defenseRecommendations: [
      "Remove hard-coded keys immediately",
      "Enable secret scanning in repos",
      "Set up cost anomaly alerts"
    ],
    references: []
  },

  // ===========================
  // 5. SOCIAL ENGINEERING CASES
  // ===========================

  {
    id: "cs_se_bec_001",
    title: "Business Email Compromise (CEO Fraud)",
    category: "social_engineering",

    summary:
      "An attacker impersonated the company CEO and convinced finance staff to initiate a fraudulent wire transfer.",

    timeline: [
      "Attacker registers lookalike domain",
      "Spoofs email pretending to be CEO",
      "Requests urgent payment to 'vendor'",
      "Finance nearly approves transfer",
      "SOC identifies spoof and blocks domain"
    ],

    attackVector: "Email spoofing with lookalike domain.",

    indicatorsOfCompromise: [
      "Urgent payment request",
      "Lookalike email addresses",
      "Mailbox forwarding rules"
    ],

    logsAndFindings: [
      "Mail logs showed spoofed domain",
      "Audit logs flagged forwarding rule creation"
    ],

    rootCause:
      "Weak identity verification and no out-of-band confirmation process.",

    mitreMapping: ["T1566"],

    impact: "Near-financial loss; attacker attempted wire fraud.",

    defenseRecommendations: [
      "Enable MFA for executives",
      "Use verification steps for payments"
    ],
    references: []
  },

  {
    id: "cs_se_helpdesk_reset_001",
    title: "Helpdesk Social Engineering for Password Reset",
    category: "social_engineering",

    summary:
      "Attacker convinced helpdesk to reset an employee’s password, gaining unauthorized access to internal systems.",

    timeline: [
      "Attacker calls helpdesk pretending to be employee",
      "Claims urgent need for reset",
      "Weak verification allows reset",
      "Attacker logs in using new password",
      "Identity team discovers suspicious login"
    ],

    attackVector: "Phone-based impersonation to bypass authentication.",

    indicatorsOfCompromise: [
      "Password reset not requested by user",
      "Unusual helpdesk ticket activity",
      "Suspicious login locations"
    ],

    logsAndFindings: [
      "Helpdesk logs show reset request",
      "IdP logs show login from unknown IP"
    ],

    rootCause:
      "Weak identity verification process at helpdesk.",

    mitreMapping: ["T1078", "T1586"],

    impact: "Unauthorized access via compromised employee account.",

    defenseRecommendations: [
      "Mandatory identity-proofing for password resets",
      "Require MFA re-verification"
    ],
    references: []
  }
];

module.exports = { caseStudies };