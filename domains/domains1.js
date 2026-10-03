// domains/domains.js

const domains ={
  /*
  ===========================================================
    CORE SECURITY DOMAINS
  ===========================================================
  */
  network_security: {
    id: "domain_network_security",
    name: "Network Security",
    category: "Core Security Domain",
    description:
      "Network security focuses on protecting the confidentiality, integrity, and availability of data as it moves across or resides within networks. It includes securing routers, switches, firewalls, VPNs, and network architectures against internal and external threats.",
    responsibilities: [
      "Design and maintain secure network architecture (LAN, WAN, DMZ, VPN).",
      "Configure and manage firewalls, IDS/IPS, and network access control.",
      "Monitor network traffic for anomalies and signs of attacks.",
      "Implement segmentation and Zero Trust principles to limit lateral movement.",
      "Harden network devices and keep firmware updated."
    ],
    common_attacks: [
      "Port scanning and service enumeration.",
      "Man-in-the-middle attacks (ARP spoofing, DNS spoofing).",
      "DDoS and DoS attacks.",
      "Routing and BGP attacks.",
      "Unauthorized wireless access."
    ],
    tools: [
      "Nmap",
      "Wireshark",
      "Suricata / Snort",
      "pfSense / OPNsense",
      "Cisco ASA / Palo Alto",
      "tcpdump"
    ],
    detection_methods: [
      "Monitor NetFlow and traffic patterns for anomalies.",
      "Use IDS/IPS signatures to detect known attack patterns.",
      "Correlate firewall deny logs and port scan patterns in SIEM.",
      "Monitor ARP tables, DNS responses, and gateway changes.",
      "Alert on abnormal bandwidth spikes (possible DDoS or exfiltration)."
    ],
    defense_practices: [
      "Implement least privilege and segmentation (VLANs, subnets, ACLs).",
      "Use ‘default deny’ at perimeter firewalls with explicit allow rules.",
      "Secure management interfaces using VPN, SSH, and strong authentication.",
      "Regularly audit open ports and network paths.",
      "Deploy DDoS protection and rate limiting where appropriate."
    ],
    examples: [
      "A misconfigured firewall exposing RDP (port 3389) to the internet becomes an easy entry point for brute force attacks.",
      "Flat networks without segmentation allow ransomware to spread quickly to all systems once a single host is compromised."
    ]
  },

  web_application_security: {
    id: "domain_web_application_security",
    name: "Web Application Security",
    category: "Core Security Domain",
    description:
      "Web application security focuses on protecting web apps and APIs from vulnerabilities such as injection, XSS, authentication flaws, and misconfigurations. It involves secure coding, testing, and deployment practices.",
    responsibilities: [
      "Identify and remediate OWASP Top 10-style vulnerabilities.",
      "Implement strong authentication and session management.",
      "Validate and sanitize user input on the server side.",
      "Protect APIs, microservices, and web interfaces with WAF and access control.",
      "Conduct regular security testing (SAST, DAST, pentesting)."
    ],
    common_attacks: [
      "SQL injection and NoSQL injection.",
      "Cross-Site Scripting (XSS).",
      "Cross-Site Request Forgery (CSRF).",
      "Broken access control (IDOR, privilege escalation).",
      "Insecure direct object references and parameter tampering."
    ],
    tools: [
      "Burp Suite",
      "OWASP ZAP",
      "Postman / Insomnia",
      "sqlmap",
      "Nikto",
      "SAST tools (SonarQube, Semgrep)"
    ],
    detection_methods: [
      "Analyze HTTP logs for suspicious parameters and repeated error responses.",
      "Use WAF to detect and block common attack payloads.",
      "Monitor for abnormal request patterns, fuzzing, and enumeration.",
      "Enable detailed app logging for authentication, authorization, and errors.",
      "Use DAST tools to auto-scan for common web vulnerabilities."
    ],
    defense_practices: [
      "Use parameterized queries and ORMs to prevent SQL injection.",
      "Encourage secure coding practices and regular code reviews.",
      "Implement strong server-side validation and output encoding.",
      "Apply proper session management and CSRF protection.",
      "Deploy WAF with OWASP rulesets and custom tuning."
    ],
    examples: [
      "A search parameter that directly concatenates user input into a SQL query allows attackers to dump entire user tables.",
      "Reflected XSS in a search result page lets an attacker steal session cookies by tricking the user into clicking a crafted link."
    ]
  },

  cloud_security: {
    id: "domain_cloud_security",
    name: "Cloud Security",
    category: "Core Security Domain",
    description:
      "Cloud security focuses on protecting workloads, data, identities, and services hosted in cloud environments like AWS, Azure, and GCP. It blends shared responsibility, configuration management, and identity control.",
    responsibilities: [
      "Secure cloud identities, roles, and permissions (IAM).",
      "Manage network security groups, firewalls, and VPC configurations.",
      "Protect storage services (S3 buckets, blobs) against public exposure.",
      "Implement logging, monitoring, and alerts across cloud resources.",
      "Ensure compliance with organizational and regulatory requirements."
    ],
    common_attacks: [
      "Publicly exposed S3 buckets or storage blobs.",
      "Leaked API keys and access tokens.",
      "Privilege escalation via misconfigured IAM roles.",
      "SSRF and metadata service exploitation.",
      "Weakly secured cloud management consoles."
    ],
    tools: [
      "AWS Config / Security Hub",
      "Azure Defender / Security Center",
      "GCP Security Command Center",
      "CloudTrail / CloudWatch / Stackdriver",
      "ScoutSuite, Prowler, Cloud Custodian"
    ],
    detection_methods: [
      "Monitor configuration changes for risky settings (e.g., public access).",
      "Use CSPM tools to continuously check for misconfigurations.",
      "Analyze cloud audit logs for suspicious logins and API calls.",
      "Detect anomalous data transfer volumes and regions.",
      "Alert on unusual IAM permission grants or policy changes."
    ],
    defense_practices: [
      "Follow least-privilege for IAM roles and service accounts.",
      "Use security groups, NSGs, and private subnets extensively.",
      "Encrypt data at rest and in transit using cloud-native KMS.",
      "Apply guardrails via policies (SCPs, Azure Policies, Org Policies).",
      "Use multi-account or multi-subscription segmentation for isolation."
    ],
    examples: [
      "A misconfigured S3 bucket with public read access exposes customer data to anyone with the URL.",
      "An attacker steals an admin API key from a CI/CD log and uses it to spin up expensive crypto-mining workloads in the victim’s cloud account."
    ]
  },

  operating_system_security: {
    id: "domain_operating_system_security",
    name: "Operating System Security",
    category: "Core Security Domain",
    description:
      "Operating system security focuses on hardening, patching, and monitoring Windows, Linux, and other OS platforms against malware, privilege escalation, and unauthorized access.",
    responsibilities: [
      "Apply security baselines and hardening guidelines (CIS, vendor).",
      "Manage patches and updates for OS and core components.",
      "Configure and monitor OS-level logging and auditing.",
      "Control local accounts, privileges, and group memberships.",
      "Deploy and manage endpoint protection agents."
    ],
    common_attacks: [
      "Privilege escalation vulnerabilities.",
      "Unpatched OS exploits (e.g., EternalBlue).",
      "Weak local admin passwords and credential reuse.",
      "Abuse of built-in tools (PowerShell, WMI, bash).",
      "Persistence via services, registry, cron, or startup scripts."
    ],
    tools: [
      "Microsoft Defender / Linux AV",
      "CIS-CAT for benchmark checks",
      "PowerShell logging, Sysmon",
      "auditd (Linux)",
      "Configuration management (Ansible, Chef, Puppet)"
    ],
    detection_methods: [
      "Monitor for suspicious process trees (Office → cmd → powershell).",
      "Alert on changes to privileged groups or sudoers.",
      "Detect anomalous services, drivers, or startup entries.",
      "Use EDR telemetry to identify exploitation and persistence patterns.",
      "Analyze OS logs for repeated failed logins or brute force attempts."
    ],
    defense_practices: [
      "Apply least privilege and avoid local admin usage.",
      "Keep OS fully patched, including kernel and drivers.",
      "Harden OS according to CIS or vendor benchmarks.",
      "Enable full logging (Sysmon, auditd) and forward to SIEM.",
      "Use application control or whitelisting on critical servers."
    ],
    examples: [
      "A missing OS update allows a known RCE exploit to provide an attacker with SYSTEM-level access.",
      "A misconfigured sudoers file lets any user run a root-level command without password."
    ]
  },

  mobile_security: {
    id: "domain_mobile_security",
    name: "Mobile Security",
    category: "Core Security Domain",
    description:
      "Mobile security focuses on protecting smartphones and tablets, their apps, and data from malware, data leakage, and unauthorized access.",
    responsibilities: [
      "Secure mobile apps through secure development and testing.",
      "Enforce device management policies (MDM/UEM).",
      "Control application permissions and data access.",
      "Protect corporate data on BYOD and corporate devices.",
      "Monitor for mobile threats like malicious apps and phishing."
    ],
    common_attacks: [
      "Malicious or trojanized apps from unofficial stores.",
      "App-level data leakage via insecure storage.",
      "Phishing over SMS (smishing) and messaging apps.",
      "Weak device unlock PINs or biometrics.",
      "Unencrypted backups and misconfigured MDM profiles."
    ],
    tools: [
      "Mobile Device Management (Intune, MobileIron, Workspace ONE).",
      "Mobile app security testing tools (MobSF, drozer).",
      "OS-native security features (Android Enterprise, iOS MDM).",
      "App wrapping and containerization solutions."
    ],
    detection_methods: [
      "Monitor MDM for jailbroken/rooted devices.",
      "Track installation of unauthorized or blacklisted apps.",
      "Detect abnormal data transfers from mobile apps.",
      "Check for missing OS and app updates.",
      "Analyze mobile threat intelligence feeds."
    ],
    defense_practices: [
      "Enforce device encryption and strong screen lock policies.",
      "Restrict app installations to trusted app stores.",
      "Use MDM to enforce security posture and remote wipe.",
      "Segregate corporate data using secure containers.",
      "Educate users about mobile phishing and rogue app risks."
    ],
    examples: [
      "A user installs a fake banking app from a third-party store that steals credentials.",
      "An employee’s lost phone without encryption exposes email, documents, and VPN credentials."
    ]
  },

  api_security: {
    id: "domain_api_security",
    name: "API Security",
    category: "Core Security Domain",
    description:
      "API security focuses on securing machine-to-machine and client-to-server APIs from abuse, injection, data leaks, and broken authentication or authorization.",
    responsibilities: [
      "Enforce strong authentication and authorization on APIs.",
      "Validate and sanitize all input payloads.",
      "Control data exposure and avoid sending unnecessary fields.",
      "Rate-limit requests and prevent abusive patterns.",
      "Document and manage APIs with proper inventory and lifecycle."
    ],
    common_attacks: [
      "Broken object level authorization (BOLA/IDOR).",
      "Mass assignment vulnerabilities.",
      "Injection attacks via JSON/XML payloads.",
      "Abuse of unauthenticated or poorly authenticated endpoints.",
      "Excessive data exposure and pagination misuse."
    ],
    tools: [
      "API gateways (Kong, Apigee, AWS API Gateway).",
      "Burp Suite / Postman for testing.",
      "OWASP Amass / API security scanners.",
      "WAFs and dedicated API security platforms."
    ],
    detection_methods: [
      "Detect abnormal spikes in API calls per token/IP/user.",
      "Monitor error rates and unusual HTTP status code patterns.",
      "Analyze logs for unauthorized object access attempts.",
      "Correlate failed access attempts to sensitive endpoints in SIEM.",
      "Use API gateways to log, inspect, and enforce policies."
    ],
    defense_practices: [
      "Use OAuth2, JWT, or mTLS for strong auth.",
      "Implement fine-grained authorization checks for each resource.",
      "Limit data fields returned and avoid exposing internal IDs.",
      "Validate all inputs against strict schemas.",
      "Apply rate limiting, throttling, and abuse detection."
    ],
    examples: [
      "An API exposing user account IDs without proper authorization checks allows attackers to fetch other users’ data.",
      "A mass assignment flaw lets attackers overwrite fields like isAdmin by sending unexpected JSON properties."
    ]
  },

  email_security: {
    id: "domain_email_security",
    name: "Email Security",
    category: "Core Security Domain",
    description:
      "Email security focuses on protecting email infrastructure and users from phishing, malware, spoofing, and unauthorized access.",
    responsibilities: [
      "Implement spam and phishing filtering at the gateway.",
      "Configure SPF, DKIM, and DMARC to prevent spoofing.",
      "Scan email attachments and URLs for malware.",
      "Monitor for compromised email accounts and suspicious login activity.",
      "Educate users on phishing and business email compromise threats."
    ],
    common_attacks: [
      "Phishing and spear phishing.",
      "Business Email Compromise (BEC).",
      "Malicious attachments (macro malware, ransomware droppers).",
      "Link-based credential harvesting.",
      "Email spoofing and domain impersonation."
    ],
    tools: [
      "Secure Email Gateways (Proofpoint, Mimecast, Microsoft Defender for Office 365).",
      "Spam filters and anti-phishing engines.",
      "Sandboxing for attachments and URLs.",
      "DMARC analyzers and email authentication tools."
    ],
    detection_methods: [
      "Analyze email headers for spoofed sender domains.",
      "Monitor for unusual login locations and devices for mail accounts.",
      "Detect mass emailing from compromised accounts.",
      "Use machine learning-based phishing detection where available.",
      "Correlate reported phishing emails with threat intel feeds."
    ],
    defense_practices: [
      "Enforce MFA on email accounts, especially admins.",
      "Deploy SPF, DKIM, and DMARC with strict policies.",
      "Use sandboxing for links and attachments.",
      "Train users with simulated phishing campaigns.",
      "Implement strong password and lockout policies."
    ],
    examples: [
      "An attacker spoofs a CEO’s email and tricks finance staff into sending a large wire transfer.",
      "A phishing email leads to stolen O365 credentials and internal confidential data theft."
    ]
  },

  identity_access_management: {
    id: "domain_iam",
    name: "Identity & Access Management (IAM)",
    category: "Core Security Domain",
    description:
      "IAM focuses on managing digital identities and controlling access to systems and data, ensuring the right users have the right access at the right time.",
    responsibilities: [
      "Manage user lifecycle (provisioning, changes, de-provisioning).",
      "Define and enforce roles, groups, and access policies.",
      "Integrate SSO and MFA across applications.",
      "Review and certify access rights periodically.",
      "Detect and respond to suspicious identity activity."
    ],
    common_attacks: [
      "Credential stuffing and password spraying.",
      "Account takeover through phishing or weak MFA.",
      "Privilege escalation via misconfigured roles.",
      "Abuse of orphaned accounts or stale permissions.",
      "Session hijacking and token theft."
    ],
    tools: [
      "Azure AD / Entra ID, Okta, Ping Identity.",
      "On-premise AD/LDAP.",
      "IGA tools (SailPoint, Saviynt).",
      "Password managers and privileged access management (PAM)."
    ],
    detection_methods: [
      "Monitor for failed login patterns and account lockouts.",
      "Detect logins from unusual geographies or devices.",
      "Alert on changes to privileged groups or roles.",
      "Use UEBA to detect abnormal identity behavior.",
      "Analyze token misuse or anomalies via identity logs."
    ],
    defense_practices: [
      "Enforce strong MFA for all users, especially admins.",
      "Apply least privilege and role-based access control.",
      "Regularly review access entitlements and remove excess.",
      "Use conditional access and risk-based access policies.",
      "Implement SSO for centralized identity control and logging."
    ],
    examples: [
      "A contractor account that should have been disabled is used by an attacker to gain access to internal portals.",
      "Overly broad IAM roles in cloud allow a compromised user to read all storage buckets in the environment."
    ]
  },

  authentication_security: {
    id: "domain_authentication_security",
    name: "Authentication Security",
    category: "Core Security Domain",
    description:
      "Authentication security focuses on verifying user or service identities securely using passwords, MFA, certificates, or other mechanisms.",
    responsibilities: [
      "Design and enforce secure authentication mechanisms.",
      "Protect password storage, reset flows, and credential recovery.",
      "Integrate multi-factor authentication and modern auth protocols.",
      "Prevent credential-based attacks like brute force and phishing.",
      "Monitor for suspicious login behaviors."
    ],
    common_attacks: [
      "Brute force and credential stuffing.",
      "Password reuse and weak password policies.",
      "Interception of credentials over insecure channels.",
      "Session fixation and hijacking.",
      "Abuse of insecure password reset flows."
    ],
    tools: [
      "Identity providers (Azure AD, Okta, Auth0).",
      "FIDO2 / WebAuthn authenticators.",
      "Password managers.",
      "MFA apps and hardware tokens."
    ],
    detection_methods: [
      "Detect repeated failed login attempts from single or multiple IPs.",
      "Monitor for impossible travel and abnormal login patterns.",
      "Alert on repeated password reset attempts for the same account.",
      "Use risk-based authentication logs for anomalies."
    ],
    defense_practices: [
      "Use MFA and encourage passwordless auth where possible.",
      "Store passwords using strong hashing (bcrypt, Argon2).",
      "Enforce lockout and step-up authentication for brute force patterns.",
      "Use secure, token-based auth (OAuth2, OIDC) with TLS everywhere.",
      "Avoid sending one-time passwords via insecure channels where possible."
    ],
    examples: [
      "A user uses the same weak password on multiple sites, one breach exposes credentials reused on the corporate VPN.",
      "Attackers perform password spraying across many accounts using common passwords like 'Welcome123'."
    ]
  },

  authorization_privilege_management: {
    id: "domain_authorization",
    name: "Authorization & Privilege Management",
    category: "Core Security Domain",
    description:
      "Authorization and privilege management focus on controlling what authenticated users and services are allowed to do, ensuring least privilege and preventing abuse of access.",
    responsibilities: [
      "Define permission models and access control rules.",
      "Manage admin and privileged accounts carefully.",
      "Implement role-based access control (RBAC) and/or attribute-based (ABAC).",
      "Perform regular access reviews and recertifications.",
      "Monitor for privilege escalation and abuse."
    ],
    common_attacks: [
      "Privilege escalation after initial compromise.",
      "Misuse of over-privileged service accounts.",
      "Broken access control vulnerabilities in applications.",
      "Use of default or hardcoded credentials.",
      "Abuse of inherited or nested group permissions."
    ],
    tools: [
      "PAM solutions (CyberArk, BeyondTrust).",
      "IAM platforms (Azure AD, Okta, on-prem AD).",
      "Access review / IGA tools.",
      "Custom authorization middlewares in apps."
    ],
    detection_methods: [
      "Monitor for role or group changes that grant elevated rights.",
      "Alert on abnormal use of admin credentials or sudo.",
      "Use logs to detect access to resources outside normal patterns.",
      "Review privilege escalation events and failed attempts."
    ],
    defense_practices: [
      "Implement least privilege and strictly limit admin rights.",
      "Use just-in-time elevation for admin tasks instead of permanent rights.",
      "Isolate and monitor service accounts with strong credentials.",
      "Centralize authorization logic and avoid ad-hoc permission checks.",
      "Perform frequent entitlement reviews and revoke unused access."
    ],
    examples: [
      "A web app missing authorization checks on an admin endpoint allows any authenticated user to view sensitive data.",
      "A domain admin account reused for daily tasks is compromised via phishing, giving attackers domain-wide control."
    ]
  },

  /*
  ===========================================================
    SOC / BLUE TEAM / DEFENSE DOMAINS
  ===========================================================
  */
  threat_intelligence: {
    id: "domain_threat_intelligence",
    name: "Threat Intelligence",
    category: "Blue Team / SOC Domain",
    description:
      "Threat intelligence focuses on collecting, analyzing, and using information about adversaries, attack techniques, indicators of compromise, and emerging threats to improve defenses.",
    responsibilities: [
      "Gather IOCs (IPs, domains, hashes, signatures) from feeds and internal sources.",
      "Profile adversaries, campaigns, and TTPs based on frameworks like MITRE ATT&CK.",
      "Provide context to SOC alerts and investigations.",
      "Share intelligence with relevant teams and tools (SIEM, EDR, WAF).",
      "Continuously update detection rules and defenses based on new intel."
    ],
    common_attacks: [
      "APT campaigns targeting specific industries.",
      "Malware and ransomware families evolving over time.",
      "Phishing campaigns using new lure themes.",
      "Use of new C2 infrastructure and domains."
    ],
    tools: [
      "Threat intel platforms (MISP, Anomali, ThreatConnect).",
      "Open-source feeds (AbuseIPDB, PhishTank, MalwareBazaar).",
      "MITRE ATT&CK Navigator.",
      "Internal telemetry from SIEM, EDR, and firewalls."
    ],
    detection_methods: [
      "Enrich SIEM alerts with threat intel context.",
      "Match logs against known malicious IPs, domains, URLs, hashes.",
      "Identify patterns that match known adversary TTPs.",
      "Correlate multiple low-level alerts into a high-level campaign."
    ],
    defense_practices: [
      "Regularly ingest and curate high-quality threat feeds.",
      "Avoid blind blocking of all external IOCs; verify relevance.",
      "Feed intel into proactive hunting and detection engineering.",
      "Maintain playbooks for high-priority threats.",
      "Collaborate with external communities and ISACs."
    ],
    examples: [
      "TI reveals that an IP seen in your logs belongs to a ransomware affiliate group.",
      "A new phishing campaign using COVID-related lures is mapped to a known APT group; filters and rules are updated accordingly."
    ]
  },

  threat_hunting: {
    id: "domain_threat_hunting",
    name: "Threat Hunting",
    category: "Blue Team / SOC Domain",
    description:
      "Threat hunting is a proactive search for evidence of compromise or adversary activity in an environment, based on hypotheses, intel, and telemetry.",
    responsibilities: [
      "Formulate hypotheses about possible attacker behavior.",
      "Use logs, EDR telemetry, and network data to search for patterns.",
      "Identify stealthy threats missed by automated tools.",
      "Document findings and feed them into new detection rules.",
      "Collaborate with IR, SOC, and engineering teams."
    ],
    common_attacks: [
      "Lateral movement via remote administration tools.",
      "Persistence mechanisms not flagged by AV.",
      "Living-off-the-land attacks using built-in tools.",
      "Domain trust abuse and stealthy exfiltration."
    ],
    tools: [
      "SIEM search and dashboards.",
      "EDR hunting queries.",
      "PowerShell, Kusto, SQL-based log queries.",
      "Custom scripts and Jupyter notebooks for analysis."
    ],
    detection_methods: [
      "Search for uncommon process parents (e.g., Office spawning cmd).",
      "Look for abnormal service or scheduled task creation.",
      "Hunt for anomalous outbound traffic and DNS patterns.",
      "Correlate rare events across hosts and time windows."
    ],
    defense_practices: [
      "Maintain hunting playbooks and hypotheses regularly.",
      "Continuously refine telemetry collection and logging.",
      "Integrate hunting results into detection engineering pipeline.",
      "Track metrics (coverage, dwell time reduction, cases found).",
      "Train hunters on latest TTPs and adversary techniques."
    ],
    examples: [
      "A hunt for suspicious PowerShell usage finds obfuscated scripts connecting to a C2 server.",
      "A lateral movement hunting exercise discovers unauthorized use of PSExec across servers."
    ]
  },

  incident_response: {
    id: "domain_incident_response",
    name: "Incident Response",
    category: "Blue Team / SOC Domain",
    description:
      "Incident Response (IR) handles the identification, containment, eradication, and recovery from security incidents, minimizing impact and improving future resilience.",
    responsibilities: [
      "Detect and classify incidents based on severity and type.",
      "Contain the spread of attacks and preserve evidence.",
      "Eradicate malicious artifacts and close exploited gaps.",
      "Coordinate recovery efforts and restore operations safely.",
      "Conduct post-incident reviews and update processes."
    ],
    common_attacks: [
      "Ransomware outbreaks.",
      "Data breaches and credential theft.",
      "Business email compromise and insider threats.",
      "Web application intrusions.",
      "Cloud account compromises."
    ],
    tools: [
      "IR playbooks and runbooks.",
      "Ticketing and case management tools.",
      "Forensic tools (FTK, EnCase, Autopsy).",
      "SIEM, EDR, and network forensics platforms."
    ],
    detection_methods: [
      "Monitor SIEM and EDR alerts for suspicious activity.",
      "Use IR triage to confirm and categorize incidents.",
      "Leverage threat intel to determine scope and impact.",
      "Cross-check logs from servers, endpoints, and cloud services."
    ],
    defense_practices: [
      "Maintain a tested IR plan and communication strategy.",
      "Perform regular tabletop exercises and simulations.",
      "Ensure logs and evidence are preserved properly.",
      "Implement containment strategies that balance business impact.",
      "Feed lessons learned into architecture and policy changes."
    ],
    examples: [
      "A ransomware incident requires isolating affected servers, restoring from backups, and reviewing initial access vectors.",
      "A compromised admin account triggers an IR workflow, including password reset, token revocation, and scope analysis."
    ]
  },

  digital_forensics: {
    id: "domain_digital_forensics",
    name: "Digital Forensics",
    category: "Blue Team / SOC Domain",
    description:
      "Digital forensics involves collecting, preserving, analyzing, and presenting digital evidence related to cybersecurity incidents or legal investigations.",
    responsibilities: [
      "Acquire images and copies of disks, memory, and logs.",
      "Preserve chain of custody and evidence integrity.",
      "Analyze file systems, registry, logs, and artifacts.",
      "Identify timeline of attacker actions and tools used.",
      "Support law enforcement or legal processes if needed."
    ],
    common_attacks: [
      "Malware infections and persistence techniques.",
      "Insider data theft and data exfiltration.",
      "Unauthorized access to critical systems.",
      "Web server or database compromises."
    ],
    tools: [
      "Autopsy / Sleuth Kit.",
      "FTK, EnCase (commercial suites).",
      "Volatility for memory forensics.",
      "Log2Timeline, Plaso, Timeline Explorer."
    ],
    detection_methods: [
      "Correlate artifacts across systems and time.",
      "Recover deleted or modified files and logs.",
      "Analyze registry hives, prefetch files, shellbags, etc.",
      "Use timeline analysis to reconstruct attacker path."
    ],
    defense_practices: [
      "Prepare forensic-ready logging and storage.",
      "Control access to evidence and limit contamination.",
      "Use standardized imaging and acquisition procedures.",
      "Document all actions taken for legal defensibility.",
      "Integrate forensics capability into IR planning."
    ],
    examples: [
      "Forensic analysis of a compromised workstation reveals the phishing email and malicious attachment used.",
      "Disk and memory forensics on a server show how a webshell was uploaded and used to pivot to a database server."
    ]
  },

  malware_analysis: {
    id: "domain_malware_analysis",
    name: "Malware Analysis",
    category: "Blue Team / Specialist Domain",
    description:
      "Malware analysis focuses on understanding, dissecting, and classifying malicious software to determine capabilities, indicators, and mitigation strategies.",
    responsibilities: [
      "Analyze malware samples statically and dynamically.",
      "Extract IOCs (hashes, domains, IPs, file paths).",
      "Identify persistence, propagation, and payload behavior.",
      "Support IR, threat intel, and detection engineering.",
      "Develop signatures and behavior rules to detect malware."
    ],
    common_attacks: [
      "Ransomware, trojans, RATs, and worms.",
      "Infostealers and banking malware.",
      "Fileless malware and macro-based threats.",
      "Botnets and DDoS agents."
    ],
    tools: [
      "IDA Pro, Ghidra, x64dbg for reverse engineering.",
      "Cuckoo Sandbox, Any.Run for dynamic analysis.",
      "YARA for pattern-based detection.",
      "PEStudio, Detect It Easy (DIE), strings, hexdump."
    ],
    detection_methods: [
      "Use sandboxing to observe malware behavior.",
      "Compare hashes against VT and internal databases.",
      "Create YARA rules based on code or strings.",
      "Monitor for known C2 domains and protocols."
    ],
    defense_practices: [
      "Restrict execution of unknown binaries.",
      "Use strong EDR with behavior-based detection.",
      "Keep signatures and behavioral rules updated.",
      "Block known C2 infrastructure and IOCs.",
      "Educate users not to run unknown executables or macros."
    ],
    examples: [
      "Reverse engineering reveals a ransomware family deletes shadow copies and contacts a TOR-based payment server.",
      "Analysis identifies that a trojan steals browser credentials and exfiltrates them over HTTPS to a specific domain."
    ]
  },

  siem_operations: {
    id: "domain_siem_operations",
    name: "SIEM Operations",
    category: "Blue Team / SOC Domain",
    description:
      "SIEM operations focus on log collection, normalization, correlation, and alerting to support detection and investigation of security incidents.",
    responsibilities: [
      "Ingest logs from critical systems, apps, and infrastructure.",
      "Build and maintain correlation rules and detection content.",
      "Tune alerts to reduce false positives and noise.",
      "Create dashboards and reports for security visibility.",
      "Integrate threat intelligence feeds and context."
    ],
    common_attacks: [
      "Brute force login attempts across systems.",
      "Lateral movement using admin tools.",
      "Exfiltration via abnormal network channels.",
      "Multiple failed followed by successful login patterns.",
      "Privilege escalation and unusual account creation."
    ],
    tools: [
      "Splunk Enterprise Security.",
      "Elastic SIEM / ELK stack.",
      "IBM QRadar.",
      "Azure Sentinel / Microsoft Sentinel.",
      "LogRhythm, ArcSight."
    ],
    detection_methods: [
      "Use correlation rules for multi-step attack patterns.",
      "Create baselines and detect deviations in user behavior.",
      "Search and pivot through historical logs during investigations.",
      "Alert on known bad IOCs (IPs, hashes, domains)."
    ],
    defense_practices: [
      "Ensure complete and consistent log coverage from key assets.",
      "Regularly review and refine detection rules.",
      "Use role-based access control within SIEM.",
      "Maintain retention and backup policies for logs.",
      "Integrate with SOAR for automated response where appropriate."
    ],
    examples: [
      "A SIEM rule detects 50 failed logins from an external IP followed by a successful login to a privileged account.",
      "Correlation of DNS, proxy, and firewall logs reveals stealthy data exfiltration to an unfamiliar external server."
    ]
  },

  ids_ips_operations: {
    id: "domain_ids_ips_operations",
    name: "IDS/IPS Operations",
    category: "Blue Team / SOC Domain",
    description:
      "IDS/IPS operations focus on configuring, tuning, and monitoring intrusion detection and prevention systems to identify and stop malicious activity.",
    responsibilities: [
      "Deploy and configure IDS/IPS sensors at strategic points.",
      "Maintain and update signatures and rules.",
      "Tune alerts to reduce false positives.",
      "Integrate IDS/IPS alerts into SIEM and IR workflows.",
      "Monitor for evasion attempts and adjust detection accordingly."
    ],
    common_attacks: [
      "Exploit attempts on web servers and services.",
      "Port scanning and network reconnaissance.",
      "Malware command-and-control traffic.",
      "Brute force attacks and suspicious protocol usage."
    ],
    tools: [
      "Snort, Suricata.",
      "Zeek/Bro for network analysis.",
      "Palo Alto, Cisco Firepower NGFW IPS modules.",
      "Security Onion distributions."
    ],
    detection_methods: [
      "Signature-based detection of known exploits and malware.",
      "Protocol anomaly detection for malformed or unexpected traffic.",
      "Behavioral detection of scanning and brute forcing.",
      "Alerting on suspicious cross-segment communication."
    ],
    defense_practices: [
      "Place sensors where they see critical traffic (east-west, north-south).",
      "Regularly update rule sets from reputable sources.",
      "Work with app teams to whitelist legitimate but unusual traffic.",
      "Use IPS only where latency and risk tolerance allow.",
      "Correlate IDS/IPS alerts with endpoint and app telemetry."
    ],
    examples: [
      "An IPS blocks an HTTP request containing a known exploit for a vulnerable CMS plugin.",
      "An IDS detects horizontal scanning attempts across multiple subnets originating from a compromised internal host."
    ]
  },

  endpoint_security: {
    id: "domain_endpoint_security",
    name: "Endpoint Security (EDR/XDR)",
    category: "Blue Team / SOC Domain",
    description:
      "Endpoint security focuses on protecting workstations, servers, and laptops using antivirus, EDR/XDR, hardening, and monitoring capabilities.",
    responsibilities: [
      "Deploy and manage endpoint security agents.",
      "Monitor endpoint detections and respond to threats.",
      "Implement system hardening and application control.",
      "Contain compromised endpoints (isolation, network block).",
      "Collect forensic artifacts when necessary."
    ],
    common_attacks: [
      "Malware and ransomware infections.",
      "Phishing leading to endpoint compromise.",
      "Privilege escalation and credential theft.",
      "Fileless attacks using PowerShell or WMI."
    ],
    tools: [
      "Microsoft Defender for Endpoint.",
      "CrowdStrike Falcon.",
      "SentinelOne, Carbon Black.",
      "Sophos Intercept X."
    ],
    detection_methods: [
      "Behavior-based detection of suspicious process chains.",
      "Monitoring of persistence mechanisms and autoruns.",
      "Detection of credential dumping tools.",
      "Anomaly detection for file and registry changes."
    ],
    defense_practices: [
      "Regularly update endpoint agents and signatures.",
      "Implement least privilege on endpoints and limit local admin rights.",
      "Enable full telemetry and advanced logging.",
      "Use application whitelisting or allow-listing on high-value systems.",
      "Combine endpoint data with network and cloud signals (XDR)."
    ],
    examples: [
      "An EDR alert shows Office spawning PowerShell with an encoded command, indicating potential phishing-executed malware.",
      "Endpoint telemetry reveals a process dumping LSASS memory, prompting immediate containment of the host."
    ]
  },

  log_analysis: {
    id: "domain_log_analysis",
    name: "Log Analysis",
    category: "Blue Team / SOC Domain",
    description:
      "Log analysis focuses on extracting security-relevant information and patterns from logs generated by OS, apps, network devices, and cloud services.",
    responsibilities: [
      "Collect and centralize logs from all critical systems.",
      "Design parsers, field extraction, and log normalization rules.",
      "Identify suspicious patterns and anomalies in log data.",
      "Support threat hunting and IR investigations with log evidence.",
      "Create dashboards and reports to visualize security posture."
    ],
    common_attacks: [
      "Authentication abuse visible in login logs.",
      "Lateral movement seen in remote access and admin tool logs.",
      "Data exfiltration visible in proxy and firewall logs.",
      "Web app attacks visible in HTTP server logs."
    ],
    tools: [
      "SIEM platforms (Splunk, ELK, QRadar, Sentinel).",
      "Custom scripts for log parsing and analysis.",
      "Log forwarders and collectors (Winlogbeat, Filebeat, NXLog).",
      "OS-native event viewers and journal viewers."
    ],
    detection_methods: [
      "Search for abnormal error codes or repeated failures.",
      "Identify rare or previously unseen event sequences.",
      "Correlate events across multiple systems for the same user or host.",
      "Use visualizations and time-series analysis to detect spikes."
    ],
    defense_practices: [
      "Ensure proper time synchronization (NTP) across all systems.",
      "Retain logs long enough for full incident investigations.",
      "Avoid logging sensitive data in plaintext when unnecessary.",
      "Regularly review and tune log sources and parsing.",
      "Document log sources and what security value they provide."
    ],
    examples: [
      "A sudden spike in 401/403 HTTP responses from a specific IP indicates credential stuffing attempts.",
      "Windows security logs show EventID 4625 followed by 4624 and 4672 for the same account, indicating a successful brute-force and privileged login."
    ]
  },

  behavioral_anomaly_detection: {
    id: "domain_behavioral_anomaly",
    name: "Behavioral & Anomaly Detection",
    category: "Blue Team / SOC Domain",
    description:
      "Behavioral and anomaly detection focus on identifying unusual patterns of behavior that may indicate threats, instead of relying solely on known signatures.",
    responsibilities: [
      "Define baselines of normal user and system behavior.",
      "Detect deviations that may indicate insider threats or advanced attacks.",
      "Integrate UEBA or ML-based detection systems.",
      "Review and triage anomalies in collaboration with SOC and IR.",
      "Refine models based on feedback to reduce noise and false positives."
    ],
    common_attacks: [
      "Insider threats accessing unusual data.",
      "Compromised accounts performing abnormal actions.",
      "Data exfiltration using uncommon protocols or destinations.",
      "Off-hours or impossible travel logins."
    ],
    tools: [
      "UEBA platforms (Exabeam, Microsoft Defender for Identity).",
      "XDR suites with behavior analytics.",
      "Custom anomaly detection scripts using ML or stats.",
      "SIEM-based anomaly rules and baselines."
    ],
    detection_methods: [
      "Detect logins from unusual locations or devices.",
      "Spot large data transfers from accounts that normally don’t handle big datasets.",
      "Identify abnormal process executions on endpoints.",
      "Find new or rare privileges being used for the first time."
    ],
    defense_practices: [
      "Continuously refine baseline models using real-world data.",
      "Combine anomaly-based detection with signature-based detection.",
      "Integrate anomalies into IR for deeper analysis.",
      "Avoid over-automating response to noisy anomalies without human review.",
      "Use anomalies to inform and update access controls and policies."
    ],
    examples: [
      "An HR employee account suddenly downloads gigabytes of engineering repository data.",
      "A user who normally logs in from one country suddenly logs in from three different foreign IPs within an hour."
    ]
  },

  /*
  ===========================================================
    RED TEAM / ATTACK / OFFENSIVE DOMAINS
  ===========================================================
  */
  red_teaming: {
    id: "domain_red_teaming",
    name: "Red Teaming",
    category: "Offensive / Adversarial Simulation Domain",
    description:
      "Red teaming simulates realistic adversary behavior to test the effectiveness of defenses, processes, and people, often against agreed objectives and scope.",
    responsibilities: [
      "Plan attack scenarios aligned with realistic threat actors.",
      "Perform stealthy recon, exploitation, and lateral movement.",
      "Test detection and response processes without tipping off SOC (in some engagements).",
      "Document findings, impact, and attack paths clearly.",
      "Collaborate with blue team after engagement to improve defenses."
    ],
    common_attacks: [
      "Phishing and initial compromise via social engineering.",
      "Exploitation of web apps or exposed services.",
      "Privilege escalation and domain dominance.",
      "Lateral movement and data exfiltration.",
      "Abuse of misconfigurations and weak controls."
    ],
    tools: [
      "Cobalt Strike, Brute Ratel (where legally allowed).",
      "Metasploit Framework.",
      "BloodHound for AD attack paths.",
      "Custom scripts and implants.",
      "Common hacker tools (Nmap, Burp Suite, PowerShell tools)."
    ],
    detection_methods: [
      "Use same telemetry as real attackers: EDR, SIEM, network logs.",
      "Monitor for unusual authentications and admin tool usage.",
      "Detect beaconing and C2 traffic patterns.",
      "Identify suspicious recon and enumeration attempts."
    ],
    defense_practices: [
      "Ensure red team engagements are scoped, approved, and controlled.",
      "Use results to update detections, training, and playbooks.",
      "Avoid normalizing risky behavior during tests.",
      "Coordinate post-engagement debriefs with all stakeholders."
    ],
    examples: [
      "A red team uses phishing to gain initial access, moves laterally using credential reuse, and exfiltrates simulated crown jewels from a database.",
      "The engagement reveals that SOC missed lateral movement due to insufficient internal network visibility."
    ]
  },

  penetration_testing: {
    id: "domain_penetration_testing",
    name: "Penetration Testing",
    category: "Offensive / Assessment Domain",
    description:
      "Penetration testing systematically identifies and safely exploits vulnerabilities in systems and applications to evaluate security posture under controlled conditions.",
    responsibilities: [
      "Identify vulnerabilities through scanning and manual testing.",
      "Attempt exploitation to validate real-world impact.",
      "Document risks, affected assets, and remediation steps.",
      "Re-test after fixes are implemented.",
      "Align tests with standards like OWASP, PTES, or NIST."
    ],
    common_attacks: [
      "Exploiting outdated software and missing patches.",
      "Abusing misconfigurations and default credentials.",
      "SQL injection, XSS, and logic flaws in web apps.",
      "Network misconfigurations and exposed management interfaces."
    ],
    tools: [
      "Nmap, Nessus, OpenVAS for scanning.",
      "Burp Suite, sqlmap for web testing.",
      "Metasploit for exploit testing.",
      "Custom scripts and fuzzers."
    ],
    detection_methods: [
      "Monitor for pentest IPs and activity in logs.",
      "Correlate scanning and exploitation attempts.",
      "Use testing windows to validate detection effectiveness.",
      "Ensure SOC is aware of authorized tests to avoid confusion."
    ],
    defense_practices: [
      "Regularly scheduled pentests for critical systems and apps.",
      "Fix and verify remediation of findings promptly.",
      "Use pentest reports to inform risk management and prioritization.",
      "Integrate results into secure SDLC improvements."
    ],
    examples: [
      "A pentest discovers admin panels exposed to the internet with default passwords.",
      "Exploitation of a blind SQL injection vulnerability results in full database disclosure during testing."
    ]
  },

  reconnaissance_osint: {
    id: "domain_recon_osint",
    name: "Reconnaissance & OSINT",
    category: "Offensive / Information Gathering Domain",
    description:
      "Reconnaissance and OSINT (Open Source Intelligence) focus on collecting publicly available information about targets to aid in attacks or assessments.",
    responsibilities: [
      "Identify public IP ranges, domains, and subdomains.",
      "Gather data from social media, job postings, and documents.",
      "Map exposed services and technologies on the internet.",
      "Find leaked credentials or data in public or dark web sources.",
      "Support social engineering and technical attack planning."
    ],
    common_attacks: [
      "Targeting employees based on OSINT from LinkedIn.",
      "Finding exposed admin portals and forgotten subdomains.",
      "Harvesting leaked credentials from past breaches.",
      "Fingerprinting tech stack for known vulnerabilities."
    ],
    tools: [
      "theHarvester, Maltego.",
      "Shodan, Censys, FOFA.",
      "Amass, Sublist3r for subdomain enumeration.",
      "Search engines and advanced dorking.",
      "Have I Been Pwned, Breach directories (where legal)."
    ],
    detection_methods: [
      "Monitor for high-volume scanning on perimeter systems.",
      "Detect DNS enumeration attempts and weird lookup patterns.",
      "Track mentions of company assets in OSINT where possible.",
      "Monitor for leaked credentials in breach monitoring services."
    ],
    defense_practices: [
      "Minimize unnecessary public exposure of systems and data.",
      "Use security headers and minimize stack fingerprinting.",
      "Educate staff about oversharing sensitive details online.",
      "Monitor for and revoke leaked credentials quickly."
    ],
    examples: [
      "An attacker finds a staging environment domain with weaker security through public DNS enumeration.",
      "A social engineer crafts a realistic phishing email using detailed employee info from LinkedIn posts."
    ]
  },

  social_engineering: {
    id: "domain_social_engineering",
    name: "Social Engineering",
    category: "Offensive / Human Attack Domain",
    description:
      "Social engineering attacks exploit human psychology and trust rather than purely technical flaws, often via phishing, pretexting, and deception.",
    responsibilities: [
      "Design realistic scenarios that test human security awareness.",
      "Conduct phishing, vishing, or in-person tests where authorized.",
      "Assess susceptibility to social engineering in organizations.",
      "Provide detailed feedback and training recommendations.",
      "Avoid unethical or out-of-scope manipulations."
    ],
    common_attacks: [
      "Phishing emails with malicious attachments or links.",
      "Pretexting calls to extract data or reset passwords.",
      "Tailgating into secured facilities.",
      "Impersonating IT or support staff to gain access."
    ],
    tools: [
      "Phishing simulation platforms.",
      "Email spoofing frameworks for tests (properly scoped).",
      "OSINT tools to gather pretext information.",
      "Call scripts and training materials."
    ],
    detection_methods: [
      "Monitor reported phishing emails and suspicious communications.",
      "Log helpdesk requests related to password reset or access issues.",
      "Track unusual access gained after social engineering attempts.",
      "Correlate user reports with failed or blocked attempts."
    ],
    defense_practices: [
      "Conduct continuous security awareness training.",
      "Implement strong verification for password resets and support calls.",
      "Encourage a culture of questioning unusual requests.",
      "Use technical controls (MFA, filters) to supplement human defenses."
    ],
    examples: [
      "An attacker convinces an employee over the phone to reveal a one-time code, defeating MFA.",
      "A well-crafted phishing email mimicking the internal HR portal leads to credential theft from several users."
    ]
  },

  exploit_development: {
    id: "domain_exploit_development",
    name: "Exploit Development",
    category: "Offensive / Specialist Domain",
    description:
      "Exploit development involves creating reliable ways to trigger vulnerabilities and achieve code execution, often requiring deep understanding of systems, memory, and mitigations.",
    responsibilities: [
      "Analyze vulnerabilities and their root causes.",
      "Develop proof-of-concept exploits in controlled labs.",
      "Bypass modern mitigations like ASLR, DEP, CFG where needed.",
      "Assess exploitability and real-world risk of discovered bugs.",
      "Provide technical details to vendors or internal teams for fixes."
    ],
    common_attacks: [
      "Buffer overflows and memory corruption.",
      "Use-after-free and type confusion bugs.",
      "Logic bugs enabling privilege escalation.",
      "Remote code execution via network services."
    ],
    tools: [
      "GDB, WinDbg, LLDB.",
      "IDA Pro, Ghidra.",
      "Fuzzers (AFL, libFuzzer, custom harnesses).",
      "Metasploit, custom exploit frameworks."
    ],
    detection_methods: [
      "Detect exploitation artifacts via EDR and memory analysis.",
      "Monitor for crash patterns and abnormal service behavior.",
      "Use canary and instrumentation to detect overflow attempts.",
      "Correlate exploit-like behaviors with vulnerability telemetry."
    ],
    defense_practices: [
      "Deploy modern mitigations (ASLR, DEP, stack canaries, CFG).",
      "Perform thorough code review and fuzzing for critical components.",
      "Patch vulnerabilities quickly once discovered.",
      "Implement defensive coding, bounds checking, and safe APIs."
    ],
    examples: [
      "A vulnerability in a network daemon lets an attacker overflow a buffer and execute shellcode.",
      "An exploit for a browser bug chains multiple vulnerabilities to escape the sandbox and run arbitrary code."
    ]
  },

  reverse_engineering: {
    id: "domain_reverse_engineering",
    name: "Reverse Engineering",
    category: "Offensive / Specialist Domain",
    description:
      "Reverse engineering focuses on understanding binary code, protocols, and systems without source code, often used for malware analysis, exploit development, and compatibility work.",
    responsibilities: [
      "Disassemble and decompile binaries for analysis.",
      "Understand proprietary protocols and file formats.",
      "Identify vulnerabilities or hidden behaviors in compiled code.",
      "Support malware analysis and threat intel teams.",
      "Document findings and assist in detection rule creation."
    ],
    common_attacks: [
      "Analyzing and modifying software protections.",
      "Discovering hidden backdoors or logic bombs.",
      "Reusing knowledge from reverse engineering for exploit dev.",
      "Bypassing license or integrity checks (in illegal contexts, prohibited)."
    ],
    tools: [
      "IDA Pro, Ghidra, Radare2.",
      "x64dbg, OllyDbg.",
      "Binary Ninja.",
      "Hex editors and protocol analyzers."
    ],
    detection_methods: [
      "Detect tampering via code integrity checks.",
      "Monitor for debugging and instrumentation tools on endpoints.",
      "Use anti-debugging and anti-tampering where appropriate.",
      "Audit unexpected code paths and hidden features."
    ],
    defense_practices: [
      "Use code signing and integrity checks for binaries.",
      "Avoid embedding secrets in compiled code.",
      "Obfuscation where necessary while balancing maintainability.",
      "Monitor for unauthorized tools on production systems."
    ],
    examples: [
      "Reverse engineering a proprietary malware sample reveals its C2 protocol and encryption scheme.",
      "Analyzing a closed-source application uncovers unsafe deserialization leading to RCE."
    ]
  },

  wireless_security: {
    id: "domain_wireless_security",
    name: "Wireless Security",
    category: "Offensive & Defensive Domain",
    description:
      "Wireless security focuses on protecting Wi-Fi, Bluetooth, and other wireless technologies from unauthorized access, eavesdropping, and abuse.",
    responsibilities: [
      "Secure corporate Wi-Fi networks with strong encryption and auth.",
      "Assess wireless networks for rogue access points and weak configs.",
      "Protect Bluetooth and near-field communications from attack.",
      "Monitor wireless traffic for unauthorized devices.",
      "Enforce guest vs corporate network segmentation."
    ],
    common_attacks: [
      "Cracking weak Wi-Fi passwords (WEP, poor WPA/WPA2 PSKs).",
      "Evil twin access points and captive portal phishing.",
      "Deauthentication attacks (Wi-Fi kicking clients).",
      "Bluetooth-based exploitation and tracking."
    ],
    tools: [
      "Aircrack-ng suite.",
      "Kismet, Wireshark.",
      "Rogue AP detection tools.",
      "Wireless controllers and management platforms."
    ],
    detection_methods: [
      "Monitor for unknown SSIDs mimicking legitimate networks.",
      "Detect signal anomalies and rogue AP MACs.",
      "Alert on repeated deauth frames and Wi-Fi disruptions.",
      "Log and correlate wireless auth failures and successes."
    ],
    defense_practices: [
      "Use WPA2-Enterprise or WPA3 with strong authentication.",
      "Segment guest and internal wireless networks.",
      "Disable WPS and legacy insecure protocols.",
      "Monitor for rogue APs and unauthorized hotspots.",
      "Educate users about fake Wi-Fi networks in public areas."
    ],
    examples: [
      "An attacker sets up an evil twin AP named like the corporate SSID and captures user credentials via captive portal.",
      "A weak WPA2-PSK is cracked offline due to short, guessable password, giving full LAN access to the attacker."
    ]
  },

  iot_security: {
    id: "domain_iot_security",
    name: "IoT Security",
    category: "Emerging / Specialized Domain",
    description:
      "IoT security focuses on protecting internet-connected embedded devices, sensors, and controllers that often have limited resources and poor default security.",
    responsibilities: [
      "Inventory and track all IoT devices in the environment.",
      "Secure device configurations and firmware.",
      "Segment IoT networks away from critical systems.",
      "Monitor device traffic and behavior for anomalies.",
      "Manage vulnerabilities and updates in IoT ecosystems."
    ],
    common_attacks: [
      "Exploitation of default or hardcoded credentials.",
      "Botnet recruitment and DDoS participation.",
      "Weak or absent firmware update mechanisms.",
      "Insecure web interfaces and APIs on devices."
    ],
    tools: [
      "Network scanners and fingerprinting tools.",
      "IoT-specific security platforms and gateways.",
      "Firmware analysis tools.",
      "Traffic analyzers and IDS/IPS with IoT signatures."
    ],
    detection_methods: [
      "Identify devices contacting known botnet C2 servers.",
      "Detect unexpected inbound or outbound connections from IoT.",
      "Monitor for anomalous bandwidth usage.",
      "Use behavior baselines for device-specific traffic."
    ],
    defense_practices: [
      "Change default credentials and disable unnecessary services.",
      "Place IoT in isolated VLANs with strict firewall rules.",
      "Apply firmware updates from trusted vendors.",
      "Avoid exposing IoT management interfaces to the internet.",
      "Procure IoT devices with security features and support in mind."
    ],
    examples: [
      "A DVR and camera network infected with Mirai-like malware is used in a DDoS campaign.",
      "An HVAC IoT controller bridged to the corporate network becomes an entry point for attackers."
    ]
  },

  scada_ics_security: {
    id: "domain_scada_ics_security",
    name: "SCADA / ICS Security",
    category: "Industrial / Critical Infrastructure Domain",
    description:
      "SCADA/ICS security focuses on protecting industrial control systems, PLCs, and SCADA networks that manage critical infrastructure and industrial processes.",
    responsibilities: [
      "Segment and secure OT networks from IT networks.",
      "Protect PLCs, HMIs, and control servers from unauthorized access.",
      "Monitor ICS traffic and commands for anomalies.",
      "Ensure safe remote access mechanisms for vendors and engineers.",
      "Plan for safety-focused incident response and resilience."
    ],
    common_attacks: [
      "Malware targeting PLC logic and process control.",
      "Unauthorized remote access and command execution.",
      "Exploitation of legacy protocols with no encryption or auth.",
      "Physical and cyber hybrid attacks on industrial processes."
    ],
    tools: [
      "ICS-specific IDS (e.g., Nozomi, Claroty, Dragos).",
      "Passive network monitoring on OT segments.",
      "Secure remote access solutions tailored for OT.",
      "Engineering workstation monitoring tools."
    ],
    detection_methods: [
      "Detect unauthorized changes to PLC logic or configurations.",
      "Monitor for unusual commands on control protocols (Modbus, DNP3, etc.).",
      "Alert on non-engineering devices sending control traffic.",
      "Correlate IT-side compromises with OT network activity."
    ],
    defense_practices: [
      "Use strict segmentation between IT and OT networks.",
      "Harden and lock down engineering workstations.",
      "Limit and tightly control vendor remote access.",
      "Document and monitor all changes to ICS logic.",
      "Ensure safety systems and manual overrides are available."
    ],
    examples: [
      "Malware modifies PLC code to alter physical process parameters, causing unsafe conditions.",
      "An attacker pivots from IT to OT through a poorly segmented network and issues unauthorized commands to controllers."
    ]
  },

  cryptography_security: {
    id: "domain_cryptography_security",
    name: "Cryptographic Security",
    category: "Foundational Domain",
    description:
      "Cryptographic security focuses on proper use of cryptographic primitives to ensure confidentiality, integrity, and authenticity of data and communications.",
    responsibilities: [
      "Select appropriate crypto algorithms and modes of operation.",
      "Manage keys securely throughout their lifecycle.",
      "Implement TLS and other secure communications protocols.",
      "Ensure correct use of hashing for passwords and data integrity.",
      "Avoid custom or insecure cryptographic designs."
    ],
    common_attacks: [
      "Use of outdated algorithms (MD5, SHA1, RC4).",
      "Key theft via poor storage or leakage in code.",
      "Padding oracle and side-channel attacks.",
      "Misuse of nonces/IVs leading to compromise of encryption.",
      "Insecure random number generation."
    ],
    tools: [
      "OpenSSL, BouncyCastle.",
      "HSMs and KMS services (AWS KMS, Azure Key Vault).",
      "Crypto libraries in languages (libsodium, NaCl).",
      "TLS testing tools (testssl.sh, ssllabs)."
    ],
    detection_methods: [
      "Scan code and configs for weak algorithms and ciphers.",
      "Monitor for keys in logs, repos, and configs.",
      "Analyze TLS configurations for insecure settings.",
      "Look for suspicious access to key management systems."
    ],
    defense_practices: [
      "Use modern, well-reviewed cryptographic libraries.",
      "Store keys in HSMs or cloud KMS, not in code or config files.",
      "Enforce strong TLS configs (TLS 1.2+ with robust ciphers).",
      "Use key rotation and expiration policies.",
      "Hash passwords with bcrypt, scrypt, or Argon2, never plain hashing."
    ],
    examples: [
      "An API server embedded its JWT signing key in the client-side code, allowing anyone to forge tokens.",
      "A misconfigured TLS endpoint allowed downgrade to weak ciphers, enabling an attacker to eavesdrop."
    ]
  },

  devsecops: {
    id: "domain_devsecops",
    name: "DevSecOps",
    category: "Modern / Process Domain",
    description:
      "DevSecOps integrates security into DevOps practices, ensuring security is built into every phase of the software delivery lifecycle.",
    responsibilities: [
      "Automate security checks in CI/CD pipelines.",
      "Shift-left security with early code and dependency scanning.",
      "Embed security practices in build, test, and deploy stages.",
      "Collaborate with developers to fix security issues quickly.",
      "Monitor applications and infrastructure post-deployment."
    ],
    common_attacks: [
      "Use of vulnerable dependencies from package managers.",
      "Misconfigured infrastructure-as-code templates.",
      "Secrets committed to source control.",
      "Insecure default configs in containers and cloud resources."
    ],
    tools: [
      "SAST tools integrated into pipelines.",
      "Dependency scanners (npm audit, Snyk, Dependabot).",
      "Container scanning tools (Trivy, Anchore).",
      "IaC scanners (Checkov, tfsec)."
    ],
    detection_methods: [
      "Scan code and dependencies on every commit or build.",
      "Monitor pipeline logs for anomalies or tampering.",
      "Scan container images before deploying.",
      "Validate infrastructure configurations before applying."
    ],
    defense_practices: [
      "Adopt ‘security as code’ and codify policies.",
      "Use reusable secure templates for infrastructure.",
      "Train developers on secure coding and threat modeling.",
      "Implement gating rules: block deploys with critical vulns.",
      "Continuously monitor running services for new vulnerabilities."
    ],
    examples: [
      "A CI pipeline fails a build because a new dependency version contains a critical CVE.",
      "An IaC scan catches an S3 bucket set to public before deployment."
    ]
  },

  secure_sdlc: {
    id: "domain_secure_sdlc",
    name: "Secure SDLC",
    category: "Modern / Process Domain",
    description:
      "Secure SDLC (Software Development Life Cycle) integrates security activities and reviews into each phase of application development.",
    responsibilities: [
      "Conduct threat modeling during design.",
      "Include security requirements and acceptance criteria.",
      "Perform secure code reviews and static analysis.",
      "Test security in QA with DAST and penetration tests.",
      "Maintain security in maintenance and decommissioning."
    ],
    common_attacks: [
      "Introduction of vulnerabilities due to missing requirements.",
      "Inconsistent or no security testing.",
      "Libraries and frameworks never updated after release.",
      "Misconfigured deployment artifacts leading to exposure."
    ],
    tools: [
      "Threat modeling tools (Microsoft Threat Modeling Tool).",
      "SAST and code review platforms.",
      "DAST tools and test automation frameworks.",
      "Issue trackers integrated with security findings."
    ],
    detection_methods: [
      "Identify gaps using security checklists and reviews.",
      "Use metrics like vulnerability density and fix time.",
      "Check if security tests are in pipeline and executed.",
      "Analyze post-release incidents for SDLC process gaps."
    ],
    defense_practices: [
      "Standardize secure coding and design guidelines.",
      "Mandate security sign-off gates in SDLC phases.",
      "Provide developers with security training and support.",
      "Include security acceptance tests in QA and UAT.",
      "Continuously improve SDLC based on real incidents."
    ],
    examples: [
      "Threat modeling reveals a missing authorization requirement for an admin endpoint before coding begins.",
      "A DAST scan in pre-production catches an XSS issue that would otherwise go live."
    ]
  },

  container_security: {
    id: "domain_container_security",
    name: "Container Security",
    category: "Modern / Infrastructure Domain",
    description:
      "Container security focuses on securing containerized workloads (e.g., Docker) and orchestrators (e.g., Kubernetes) across build, deploy, and runtime.",
    responsibilities: [
      "Scan container images for vulnerabilities and misconfigurations.",
      "Secure container runtimes and orchestrator control planes.",
      "Apply least privilege to containers and pods.",
      "Control network policies and service communication.",
      "Monitor container runtime behavior for anomalies."
    ],
    common_attacks: [
      "Exploiting vulnerable base images.",
      "Breaking out of containers due to misconfigurations.",
      "Compromising Kubernetes API or etcd.",
      "Abusing overly permissive RBAC in clusters."
    ],
    tools: [
      "Trivy, Clair, Anchore for image scanning.",
      "Kube-bench, kube-hunter for cluster checks.",
      "Falco for runtime behavior monitoring.",
      "Policy engines (OPA/Gatekeeper, Kyverno)."
    ],
    detection_methods: [
      "Scan images in CI/CD before pushing to registries.",
      "Monitor Kubernetes audit logs and API use.",
      "Detect abnormal container processes and syscalls.",
      "Alert on creation of privileged or host-mounted containers."
    ],
    defense_practices: [
      "Use minimal, trusted base images.",
      "Drop capabilities and run containers as non-root.",
      "Apply network policies to control pod-to-pod traffic.",
      "Secure Kubernetes API with strong auth and RBAC.",
      "Use separate clusters or namespaces for environments and tenants."
    ],
    examples: [
      "A container image includes an outdated OpenSSL library with known RCE vulnerability.",
      "A misconfigured Kubernetes cluster allows anyone in the network to access the API without authentication."
    ]
  },

  microservices_security: {
    id: "domain_microservices_security",
    name: "Microservices Security",
    category: "Modern / Architecture Domain",
    description:
      "Microservices security focuses on securing distributed applications composed of many small services communicating over networks.",
    responsibilities: [
      "Secure service-to-service communication with TLS and auth.",
      "Apply least privilege for each microservice’s data access.",
      "Manage secrets and configuration securely.",
      "Validate and sanitize inputs across service boundaries.",
      "Monitor and trace requests for anomalies."
    ],
    common_attacks: [
      "Abuse of internal APIs not intended for external use.",
      "Unauthorized lateral access between microservices.",
      "Secrets in config files or container images.",
      "Data exposure via overly chatty or verbose APIs."
    ],
    tools: [
      "Service meshes (Istio, Linkerd).",
      "API gateways and sidecars.",
      "Distributed tracing (Jaeger, Zipkin).",
      "Secrets managers (Vault, AWS Secrets Manager)."
    ],
    detection_methods: [
      "Trace requests that deviate from normal service call graphs.",
      "Monitor for unusual internal API calls or destinations.",
      "Alert on access to secrets stores from unexpected services.",
      "Correlate logs and metrics for degraded service due to attacks."
    ],
    defense_practices: [
      "Enforce mTLS between microservices.",
      "Scope each service’s permissions strictly.",
      "Centralize secrets and remove them from code/images.",
      "Use input validation and consistent security patterns across services.",
      "Implement rate limiting and circuit breakers."
    ],
    examples: [
      "A microservice with broad DB privileges is compromised and used as a pivot to read all customer data.",
      "Secrets like API keys are found hard-coded in a microservice’s container image, extractable by attackers."
    ]
  },

  serverless_security: {
    id: "domain_serverless_security",
    name: "Serverless Security",
    category: "Modern / Architecture Domain",
    description:
      "Serverless security focuses on securing FaaS (Function-as-a-Service) and serverless applications where the cloud provider manages infrastructure.",
    responsibilities: [
      "Secure function code and dependencies.",
      "Manage permissions and roles assigned to functions.",
      "Validate event triggers and input sources.",
      "Monitor function executions and logs for anomalies.",
      "Control network egress and data access from functions."
    ],
    common_attacks: [
      "Abusing overly permissive IAM roles attached to functions.",
      "Injection and logic flaws within function handlers.",
      "Event injection via queues, APIs, or storage triggers.",
      "Data leakage due to misconfigured storage or outputs."
    ],
    tools: [
      "Cloud-native serverless monitoring tools.",
      "Static and dynamic analysis tuned for serverless code.",
      "IaC scanners for serverless configs.",
      "Custom logging and tracing frameworks."
    ],
    detection_methods: [
      "Monitor logs for unusual errors or unexpected invocations.",
      "Detect spikes in function execution or duration.",
      "Alert on network calls to unknown external endpoints.",
      "Track account and service usage anomalies."
    ],
    defense_practices: [
      "Apply least privilege IAM roles for each function.",
      "Validate and sanitize all event data rigorously.",
      "Avoid long-running or stateful logic in serverless.",
      "Use proper error handling and logging.",
      "Restrict outbound network access where possible."
    ],
    examples: [
      "A serverless function with full S3 access is exploited and used to copy all bucket data to an external destination.",
      "A flawed input validation allows user-controlled data to reach sensitive backend systems via serverless orchestration."
    ]
  },

  blockchain_security: {
    id: "domain_blockchain_security",
    name: "Blockchain & Smart Contract Security",
    category: "Emerging / Specialized Domain",
    description:
      "Blockchain and smart contract security focus on protecting decentralized applications, consensus mechanisms, and on-chain logic from vulnerabilities and abuse.",
    responsibilities: [
      "Review and audit smart contract code for vulnerabilities.",
      "Secure wallets, keys, and signing infrastructure.",
      "Monitor on-chain transactions for abnormal patterns.",
      "Assess consensus protocols and potential attack vectors.",
      "Educate users on secure usage of blockchain systems."
    ],
    common_attacks: [
      "Re-entrancy and logic flaws in smart contracts.",
      "Private key theft and wallet compromise.",
      "51% attacks on small blockchains.",
      "Phishing and scam tokens or contracts."
    ],
    tools: [
      "Smart contract analyzers (MythX, Slither).",
      "Blockchain explorers and analytics tools.",
      "Hardware wallets and secure key storage.",
      "Static analyzers for contract languages (Solidity, Vyper)."
    ],
    detection_methods: [
      "Monitor contract interactions for unexpected behavior.",
      "Analyze on-chain data for exploit patterns and drainage.",
      "Identify anomalous transactions from key addresses.",
      "Use chain analytics to trace stolen funds where possible."
    ],
    defense_practices: [
      "Conduct multiple audits and formal verification for critical contracts.",
      "Use upgradable patterns carefully with proper controls.",
      "Secure key management with HSMs or hardware wallets.",
      "Limit contract complexity and attack surface.",
      "Educate users to verify contract addresses and interactions."
    ],
    examples: [
      "A DeFi contract with a re-entrancy bug is exploited to drain liquidity pools.",
      "A compromised private key controlling a multisig wallet leads to unauthorized large transactions."
    ]
  },

  ai_ml_security: {
    id: "domain_ai_ml_security",
    name: "AI / ML Security",
    category: "Emerging / Specialized Domain",
    description:
      "AI/ML security focuses on protecting machine learning models, data, and pipelines from manipulation, theft, and abuse.",
    responsibilities: [
      "Protect training data from poisoning and tampering.",
      "Secure ML pipelines and infrastructure.",
      "Mitigate model extraction and inversion attacks.",
      "Control access to ML APIs and endpoints.",
      "Monitor outputs for abuse or adversarial use."
    ],
    common_attacks: [
      "Data poisoning attacks that corrupt training sets.",
      "Adversarial examples causing misclassification.",
      "Model extraction via API querying.",
      "Inference attacks extracting sensitive info from models."
    ],
    tools: [
      "ML pipeline security tools and frameworks.",
      "Adversarial testing libraries.",
      "Access control and rate limiting on inference APIs.",
      "Data lineage and integrity tracking."
    ],
    detection_methods: [
      "Monitor input distributions for anomalous patterns.",
      "Detect excessive or abnormal queries to ML endpoints.",
      "Analyze model behavior drift against expected outputs.",
      "Use canary or shadow models for comparison."
    ],
    defense_practices: [
      "Secure and validate data sources used for training.",
      "Control and monitor access to training and inference pipelines.",
      "Add noise or regularization to resist inference attacks.",
      "Limit model details exposed and implement API throttling.",
      "Continuously retrain with robust and cleaned data."
    ],
    examples: [
      "Adversarially manipulated images cause an ML-based vision system to misidentify traffic signs.",
      "An attacker uses repeated queries to approximate a proprietary ML model’s decision boundaries."
    ]
  },

  zero_trust_architecture: {
    id: "domain_zero_trust",
    name: "Zero Trust Architecture",
    category: "Architecture / Strategy Domain",
    description:
      "Zero Trust Architecture assumes no implicit trust based on network location or identity, requiring continuous verification and strict access control for every request.",
    responsibilities: [
      "Design user and device-centric access control.",
      "Implement continuous authentication and authorization.",
      "Enforce least privilege across networks and apps.",
      "Microsegment networks and services.",
      "Monitor and log all access requests and decisions."
    ],
    common_attacks: [
      "Insider threats leveraging internal trust assumptions.",
      "Lateral movement after perimeter compromise.",
      "Abuse of VPN or remote access as a trusted path.",
      "Use of compromised devices to access critical resources."
    ],
    tools: [
      "Zero Trust access platforms and identity providers.",
      "Software-defined perimeter (SDP) solutions.",
      "Microsegmentation tools.",
      "Policy engines and context-aware access control."
    ],
    detection_methods: [
      "Monitor denied access attempts and reasons.",
      "Correlate access decisions with risk signals.",
      "Detect unusual policy changes or overrides.",
      "Analyze session behavior for anomalies."
    ],
    defense_practices: [
      "Treat every network segment as untrusted.",
      "Evaluate device compliance and posture before granting access.",
      "Use strong authentication and contextual access policies.",
      "Continuously refine and audit Zero Trust policies.",
      "Integrate with logging, SIEM, and XDR for full visibility."
    ],
    examples: [
      "An attacker who compromises a user account still fails to access sensitive apps due to device risk checks.",
      "A compromised internal server cannot freely communicate with databases due to enforced microsegmentation policies."
    ]
  },

  data_security_dlp: {
    id: "domain_data_security_dlp",
    name: "Data Security & DLP",
    category: "Data Protection Domain",
    description:
      "Data security and DLP (Data Loss Prevention) focus on protecting sensitive data from unauthorized access, sharing, exfiltration, or accidental leakage.",
    responsibilities: [
      "Classify data based on sensitivity and impact.",
      "Control access to sensitive data using policies.",
      "Monitor data movement across endpoints, network, and cloud.",
      "Detect and block unauthorized transfers or uploads.",
      "Ensure encryption and secure storage of critical data."
    ],
    common_attacks: [
      "Exfiltration via email, cloud storage, or USB devices.",
      "Misconfigured storage buckets exposing sensitive data.",
      "Insider data theft or accidental sharing.",
      "Credential theft leading to unauthorized data access."
    ],
    tools: [
      "DLP suites for endpoints, network, and cloud (CASB).",
      "Database activity monitoring tools.",
      "Cloud storage access control and encryption.",
      "Rights management and classification tools."
    ],
    detection_methods: [
      "Detect large exports of sensitive data from internal systems.",
      "Monitor unusual file uploads to external domains.",
      "Alert on copying of files to removable media.",
      "Analyze cloud access logs for suspicious sharing events."
    ],
    defense_practices: [
      "Classify and label data according to sensitivity.",
      "Encrypt sensitive data at rest and in transit.",
      "Implement DLP policies for email, endpoints, and cloud apps.",
      "Limit access to data on a need-to-know basis.",
      "Train employees on safe data handling and sharing."
    ],
    examples: [
      "A DLP solution blocks a user from emailing a spreadsheet containing thousands of customer records to a personal email account.",
      "A misconfigured cloud storage container is flagged and corrected before external access occurs."
    ]
  },

  compliance_governance: {
    id: "domain_compliance_governance",
    name: "Compliance & Governance",
    category: "Governance / Management Domain",
    description:
      "Compliance and governance focus on aligning security practices with legal, regulatory, and organizational requirements, using frameworks, policies, and audits.",
    responsibilities: [
      "Map regulatory requirements to security controls.",
      "Implement frameworks like ISO 27001, NIST CSF, PCI-DSS, GDPR controls.",
      "Maintain policies, standards, and procedures.",
      "Conduct audits and assessments to verify compliance.",
      "Report on risk, posture, and control effectiveness to leadership."
    ],
    common_attacks: [
      "Data breaches that trigger legal and regulatory penalties.",
      "Non-compliance leading to fines, loss of certifications, or legal action.",
      "Audit findings that expose systemic gaps in security controls."
    ],
    tools: [
      "GRC platforms for risk and control management.",
      "Policy management and document control systems.",
      "Compliance scanners and checklists.",
      "Vendor risk management tools."
    ],
    detection_methods: [
      "Audit logs and control assessments for non-compliance.",
      "Gap analyses mapping controls to policy and regulation.",
      "Monitor for activities violating defined policies.",
      "Use automated compliance checks where possible."
    ],
    defense_practices: [
      "Regularly review and update policies to reflect current threats and regulations.",
      "Align technical controls with governance requirements.",
      "Conduct internal audits before external ones.",
      "Foster a culture of security and compliance ownership.",
      "Integrate compliance considerations into projects and procurement."
    ],
    examples: [
      "A PCI-DSS assessment finds that cardholder data is stored unencrypted in logs, requiring immediate remediation.",
      "A GDPR violation due to improper data retention results in regulatory investigation and fines."
    ]
  }
};

module.exports = {domains};

// Convert domain object into an array
const domainData = Object.values(domains);
