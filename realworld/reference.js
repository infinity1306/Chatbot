const references = [

/* ===========================================
   MITRE ATT&CK – Offical Techniques & Links
   =========================================== */
{ id: "mitre_attack_home", title: "MITRE ATT&CK Homepage", url: "https://attack.mitre.org/", category: "mitre" },
{ id: "T1046", title: "T1046 — Network Service Scanning", url: "https://attack.mitre.org/techniques/T1046/", category: "mitre" },
{ id: "T1190", title: "T1190 — Exploit Public-Facing Application", url: "https://attack.mitre.org/techniques/T1190/", category: "mitre" },
{ id: "T1557", title: "T1557 — Adversary-in-the-Middle", url: "https://attack.mitre.org/techniques/T1557/", category: "mitre" },
{ id: "T1486", title: "T1486 — Data Encrypted for Impact", url: "https://attack.mitre.org/techniques/T1486/", category: "mitre" },
{ id: "T1059", title: "T1059 — Command and Scripting Interpreter", url: "https://attack.mitre.org/techniques/T1059/", category: "mitre" },
{ id: "T1087", title: "T1087 — Account Discovery", url: "https://attack.mitre.org/techniques/T1087/", category: "mitre" },
{ id: "T1071", title: "T1071 — Application Layer Protocol", url: "https://attack.mitre.org/techniques/T1071/", category: "mitre" },

/* ===========================================
   OWASP – Web Security References
   =========================================== */
{ id: "owasp_home", title: "OWASP Homepage", url: "https://owasp.org/", category: "owasp" },
{ id: "owasp_top10", title: "OWASP Top 10", url: "https://owasp.org/www-project-top-ten/", category: "owasp" },
{ id: "owasp_sqli", title: "SQL Injection", url: "https://owasp.org/www-community/attacks/SQL_Injection", category: "owasp" },
{ id: "owasp_xss", title: "Cross-Site Scripting (XSS)", url: "https://owasp.org/www-community/attacks/xss/", category: "owasp" },
{ id: "owasp_csrf", title: "Cross-Site Request Forgery (CSRF)", url: "https://owasp.org/www-community/attacks/csrf", category: "owasp" },
{ id: "owasp_broken_auth", title: "Broken Authentication", url: "https://owasp.org/www-project-top-ten/2017/A2_2017-Broken_Authentication", category: "owasp" },
{ id: "owasp_sensitive_data_exposure", title: "Sensitive Data Exposure", url: "https://owasp.org/www-project-top-ten/2017/A3_2017-Sensitive_Data_Exposure", category: "owasp" },

/* ===========================================
   NIST – Cybersecurity Standards
   =========================================== */
{ id: "nist_800_53", title: "NIST SP 800-53 — Security Controls", url: "https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final", category: "nist" },
{ id: "nist_cyber_framework", title: "NIST Cybersecurity Framework (CSF)", url: "https://www.nist.gov/cyberframework", category: "nist" },
{ id: "nist_800_61", title: "NIST SP 800-61 — Incident Handling Guide", url: "https://csrc.nist.gov/publications/detail/sp/800-61/rev-2/final", category: "nist" },
{ id: "nist_800_30", title: "NIST SP 800-30 — Risk Assessment", url: "https://csrc.nist.gov/publications/detail/sp/800-30/rev-1/final", category: "nist" },
{ id: "nist_800_115", title: "NIST SP 800-115 — Security Testing Guide", url: "https://csrc.nist.gov/publications/detail/sp/800-115/final", category: "nist" },

/* ===========================================
   CIS Benchmarks
   =========================================== */
{ id: "cis_benchmarks", title: "CIS Benchmarks", url: "https://www.cisecurity.org/cis-benchmarks", category: "cis" },
{ id: "cis_controls_v8", title: "CIS Critical Security Controls v8", url: "https://www.cisecurity.org/controls/v8", category: "cis" },

/* ===========================================
   Cloud Security – AWS, Azure, GCP
   =========================================== */
{ id: "aws_security", title: "AWS Security Best Practices", url: "https://aws.amazon.com/security/", category: "cloud" },
{ id: "aws_iam", title: "AWS IAM Documentation", url: "https://docs.aws.amazon.com/iam/", category: "cloud" },
{ id: "aws_s3_security", title: "AWS S3 Security", url: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/security.html", category: "cloud" },

{ id: "azure_security", title: "Azure Security Documentation", url: "https://learn.microsoft.com/en-us/security/", category: "cloud" },
{ id: "azure_ad", title: "Azure Active Directory Security", url: "https://learn.microsoft.com/en-us/azure/active-directory/", category: "cloud" },

{ id: "gcp_security", title: "Google Cloud Security", url: "https://cloud.google.com/security", category: "cloud" },
{ id: "gcp_iam", title: "GCP IAM", url: "https://cloud.google.com/iam/docs", category: "cloud" },

/* ===========================================
   Operating Systems Documentation
   =========================================== */
{ id: "linux_man_pages", title: "Linux Man Pages", url: "https://man7.org/linux/man-pages/", category: "os" },
{ id: "ubuntu_docs", title: "Ubuntu Documentation", url: "https://help.ubuntu.com/", category: "os" },
{ id: "arch_wiki", title: "Arch Linux Wiki", url: "https://wiki.archlinux.org/", category: "os" },

{ id: "windows_event_ids", title: "Windows Security Event Logs", url: "https://learn.microsoft.com/en-us/windows/security/threat-protection/auditing/event-logs", category: "os" },
{ id: "sysinternals_suite", title: "Sysinternals Tools", url: "https://learn.microsoft.com/en-us/sysinternals/", category: "os" },

/* ===========================================
   Networking RFCs (Core Internet Standards)
   =========================================== */
{ id: "rfc_791", title: "RFC 791 — IPv4", url: "https://www.rfc-editor.org/rfc/rfc791", category: "rfc" },
{ id: "rfc_2460", title: "RFC 2460 — IPv6", url: "https://www.rfc-editor.org/rfc/rfc2460", category: "rfc" },
{ id: "rfc_2616", title: "RFC 2616 — HTTP/1.1", url: "https://www.rfc-editor.org/rfc/rfc2616", category: "rfc" },
{ id: "rfc_7540", title: "RFC 7540 — HTTP/2", url: "https://www.rfc-editor.org/rfc/rfc7540", category: "rfc" },
{ id: "rfc_1034", title: "RFC 1034 — DNS Concepts", url: "https://www.rfc-editor.org/rfc/rfc1034", category: "rfc" },
{ id: "rfc_1035", title: "RFC 1035 — DNS Details", url: "https://www.rfc-editor.org/rfc/rfc1035", category: "rfc" },
{ id: "rfc_4253", title: "RFC 4253 — SSH Protocol", url: "https://www.rfc-editor.org/rfc/rfc4253", category: "rfc" },

/* ===========================================
   Security Tools Documentation
   =========================================== */
{ id: "nmap_docs", title: "Nmap Documentation", url: "https://nmap.org/book/man.html", category: "tools" },
{ id: "wireshark_docs", title: "Wireshark Docs", url: "https://www.wireshark.org/docs/", category: "tools" },
{ id: "metasploit_docs", title: "Metasploit Framework Docs", url: "https://docs.metasploit.com/", category: "tools" },
{ id: "burp_suite_docs", title: "Burp Suite Documentation", url: "https://portswigger.net/burp/documentation", category: "tools" },
{ id: "tcpdump_docs", title: "Tcpdump Reference", url: "https://www.tcpdump.org/manpages/tcpdump.1.html", category: "tools" },
{ id: "hashcat_docs", title: "Hashcat Wiki", url: "https://hashcat.net/wiki/", category: "tools" },
{ id: "john_ripper_docs", title: "John the Ripper Docs", url: "https://www.openwall.com/john/doc/", category: "tools" },

/* ===========================================
   Incident Response & Malware Analysis
   =========================================== */
{ id: "sans_incident_handling", title: "SANS Incident Handler's Handbook", url: "https://www.sans.org/white-papers/incident-handlers-handbook/", category: "incident" },
{ id: "cisa_advisories", title: "CISA Security Alerts & Advisories", url: "https://www.cisa.gov/news-events/cybersecurity-advisories", category: "incident" },
{ id: "cisa_malware_analysis", title: "CISA Malware Analysis Reports", url: "https://www.cisa.gov/uscert/ncas/alerts", category: "incident" },
{ id: "first_ir", title: "FIRST Incident Response Framework", url: "https://www.first.org/", category: "incident" },
{ id: "virustotal", title: "VirusTotal Malware Analysis", url: "https://www.virustotal.com/", category: "incident" },

];

module.exports = { references };
