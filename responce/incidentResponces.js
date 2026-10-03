const incidentResponces = [

/* 1. Ransomware Incident Response */
{
  id: "ir_ransomware",
  name: "Ransomware Incident Response",
  description: "A structured procedure to contain, analyze, and recover from ransomware attacks involving unauthorized encryption of files and systems.",
  category: "Malware / Encryption Event",
  triggers: [
    "Mass file encryption",
    "Unknown extension added to files",
    "Ransom note detected",
    "EDR triggers on encryption behavior"
  ],
  steps: [
    "1. Immediately isolate infected endpoints (remove network cable / WiFi).",
    "2. Disable SMB shares and block lateral movement.",
    "3. Stop all suspicious processes using EDR or Task Manager.",
    "4. Disconnect servers showing abnormal encryption.",
    "5. Capture volatile memory and forensic images.",
    "6. Identify ransomware strain using notes + samples.",
    "7. Verify backup integrity; DO NOT restore before containment.",
    "8. Remove persistence (scheduled tasks, run keys, services).",
    "9. Patch initial entry point (VPN/SQL/RDP exploit).",
    "10. Restore systems from clean backups."
  ],
  tools: ["Velociraptor", "KAPE", "FTK Imager", "CrowdStrike", "CyberChef"],
  pitfalls: [
    "Rebooting infected systems before imaging",
    "Paying ransom without consulting legal",
    "Restoring infected backups",
    "Leaving SMB open during investigation"
  ],
  notes: "Never negotiate with attackers directly. Involve legal, PR, and management."
},

/* 2. Phishing Attack Response */
{
  id: "ir_phishing",
  name: "Phishing Attack Response",
  description: "Procedure for identifying, containing, and mitigating phishing-based credential theft or malicious email activity.",
  category: "Email Threat",
  triggers: [
    "User reports suspicious email",
    "Credentials stolen",
    "Unusual login locations"
  ],
  steps: [
    "1. Block the phishing domain + sender at email gateway.",
    "2. Reset compromised user passwords immediately.",
    "3. Terminate active sessions linked to stolen credentials.",
    "4. Analyze email headers + URLs + attachments.",
    "5. Search email logs to find all recipients.",
    "6. Remove or quarantine all malicious emails.",
    "7. Check account activity (inbox rules, MFA changes).",
    "8. Enforce MFA if user didn’t have it enabled.",
    "9. Educate affected employees."
  ],
  tools: ["O365 Security Center", "Proofpoint", "VirusTotal", "MXT Toolbox"],
  pitfalls: ["Ignoring other users who received the same email", "Skipping login activity review"],
  notes: "Most breaches start from ignored phishing alerts."
},

/* 3. Data Breach / Exfiltration */
{
  id: "ir_data_breach",
  name: "Data Exfiltration Incident Response",
  description: "Process for investigating unauthorized access, copying, or transfer of sensitive data outside the organization.",
  category: "Data Loss / Privacy Violation",
  triggers: [
    "Large outbound traffic",
    "Unusual file transfers",
    "Sensitive folder accessed at odd hours"
  ],
  steps: [
    "1. Identify which data was accessed or exfiltrated.",
    "2. Block outbound connections to attacker servers.",
    "3. Disable compromised user accounts or tokens.",
    "4. Check logs: VPN, proxy, SIEM timelines.",
    "5. Locate initial access vector (phishing, RDP, malware).",
    "6. Notify legal + compliance if PII was involved.",
    "7. Patch vulnerabilities linked to the intrusion.",
    "8. Conduct scope analysis across all endpoints.",
    "9. Prepare mandatory regulatory notifications."
  ],
  tools: ["SIEM", "Zeek", "Wireshark", "CrowdStrike", "Azure Sentinel"],
  pitfalls: ["Not confirming what data was stolen", "Silently fixing systems without reporting"],
  notes: "Regulatory deadlines are strict: GDPR = 72 hours."
},

/* 4. DDoS Attack Response */
{
  id: "ir_ddos",
  name: "DDoS Attack Response",
  description: "Guidelines for identifying, mitigating, and recovering from Distributed Denial-of-Service attacks targeting network or web resources.",
  category: "Network Flooding",
  triggers: [
    "Traffic spike",
    "Website slow or unreachable",
    "Firewall CPU maxed out"
  ],
  steps: [
    "1. Identify traffic type (SYN flood / UDP flood / HTTP flood).",
    "2. Enable DDoS protection on CDN or WAF.",
    "3. Block attacking IP ranges using rate-limiting.",
    "4. Engage ISP to filter upstream traffic.",
    "5. Force traffic through scrubbing center.",
    "6. Scale infrastructure temporarily if needed.",
    "7. Patch exposed endpoints targeted during attack."
  ],
  tools: ["Cloudflare", "AWS Shield", "Arbor APS"],
  pitfalls: ["Blocking legitimate users", "Fixing servers instead of filtering attack"],
  notes: "DDoS attacks often hide real intrusions—check logs."
},

/* 5. SQL Injection Attack Response */
{
  id: "ir_sqli",
  name: "SQL Injection Incident Response",
  description: "Procedure to identify and mitigate SQL injection-based database attacks affecting web applications.",
  category: "Web App Attack",
  triggers: [
    "Database errors in logs",
    "Unexpected admin account creation",
    "Sudden data leaks"
  ],
  steps: [
    "1. Block the attacking IPs at WAF level.",
    "2. Disable vulnerable forms/APIs temporarily.",
    "3. Analyze web server + DB logs for executed payloads.",
    "4. Identify tables accessed or dumped.",
    "5. Patch the vulnerable parameter immediately.",
    "6. Rotate DB credentials + revoke unknown accounts.",
    "7. Conduct full web application review.",
    "8. Add parameterized queries + WAF rules."
  ],
  tools: ["Burp Suite", "WAF", "SQL forensic tools"],
  pitfalls: ["Leaving vulnerable endpoints online", "Not rotating DB credentials"],
  notes: "If attackers extracted credentials, treat as full compromise."
},

/* 6. Malware Infection Handling */
{
  id: "ir_malware",
  name: "Malware Infection Response",
  description: "Steps for containment, analysis, and removal of malware found on user endpoints or servers.",
  category: "Endpoint Compromise",
  triggers: ["Antivirus alerts", "Suspicious process", "Browser hijack"],
  steps: [
    "1. Isolate endpoint from network.",
    "2. Capture memory dump for analysis.",
    "3. Kill malicious processes.",
    "4. Identify malware strain using sandbox or VirusTotal.",
    "5. Remove persistence mechanisms.",
    "6. Patch exploited vulnerabilities.",
    "7. Run full scan and monitor for reinfection."
  ],
  tools: ["Defender ATP", "Malwarebytes", "Any.run"],
  pitfalls: ["Formatting PC before checking lateral movement"],
  notes: "Always check for rootkits if system behaves unusually."
},

/* 7. Insider Threat Response */
{
  id: "ir_insider",
  name: "Insider Threat Response",
  description: "Procedure for detecting and mitigating malicious or negligent insider activity involving misuse of access.",
  category: "Human Threat",
  triggers: [
    "User downloads large data",
    "User tries to bypass DLP",
    "Unauthorized resource access"
  ],
  steps: [
    "1. Immediately disable user's access.",
    "2. Preserve workstation and account logs.",
    "3. Review email + cloud activity.",
    "4. Check USB logs, print logs, clipboard history.",
    "5. Interview involved personnel.",
    "6. Notify HR + legal.",
    "7. Apply access control improvements."
  ],
  tools: ["SIEM", "DLP", "UEBA", "CASB"],
  pitfalls: ["Accusing without evidence", "Not involving HR"],
  notes: "Insider cases require strict legal procedure."
},

/* 8. Compromised Credentials */
{
  id: "ir_credentials",
  name: "Compromised Credentials Response",
  description: "Guidelines to contain and remediate unauthorized access caused by stolen or brute-forced credentials.",
  category: "Identity Attack",
  triggers: [
    "MFA bypass attempt",
    "Impossible travel login",
    "Unknown device login"
  ],
  steps: [
    "1. Reset passwords + revoke tokens immediately.",
    "2. Log out all active sessions.",
    "3. Check OAuth consent & remove malicious apps.",
    "4. Enable or enforce MFA.",
    "5. Review sign-in logs for lateral movement.",
    "6. Run scan on the user's device."
  ],
  tools: ["Azure AD", "Google Workspace Admin", "Okta"],
  pitfalls: ["Resetting password but not revoking sessions"],
  notes: "This is one of the fastest-acting attacks."
},

/* 9. Zero-Day / Exploit Attack */
{
  id: "ir_zero_day",
  name: "Zero-Day Exploit Response",
  description: "A structured process for handling exploitation of unknown vulnerabilities where no patches initially exist.",
  category: "Exploit Response",
  triggers: [
    "Unknown exploit signature",
    "System compromise with no patch available"
  ],
  steps: [
    "1. Isolate affected servers immediately.",
    "2. Capture logs + indicators of compromise.",
    "3. Apply temporary WAF rules to block exploit payloads.",
    "4. Disable vulnerable services/ports temporarily.",
    "5. Deploy vendor mitigation workarounds.",
    "6. Patch immediately when vendor releases fix.",
    "7. Analyze for further exploitation across network."
  ],
  tools: ["WAF", "EDR", "Sysmon"],
  pitfalls: ["Keeping vulnerable service online"],
  notes: "Zero-day exploitation = assume compromise."
},

/* 10. Cloud Account Compromise */
{
  id: "ir_cloud",
  name: "Cloud Account Compromise",
  description: "Response plan for addressing unauthorized access or misuse of cloud identities, roles, or resources.",
  category: "Cloud Security",
  triggers: [
    "IAM privilege escalation",
    "Unknown EC2/S3/API activity",
    "New admin-user created silently"
  ],
  steps: [
    "1. Disable compromised API keys + tokens.",
    "2. Review CloudTrail logs for attacker actions.",
    "3. Identify impacted buckets, VMs, roles.",
    "4. Rotate all access keys + secrets.",
    "5. Remove unauthorized roles/policies.",
    "6. Scan cloud resources for modifications.",
    "7. Apply IAM hardening and MFA everywhere."
  ],
  tools: ["AWS CloudTrail", "Azure Defender", "GCP SCC"],
  pitfalls: ["Not rotating access keys"],
  notes: "Cloud attacks spread fast due to automation."
}

];

module.exports = { incidentResponces };
