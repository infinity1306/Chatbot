// best-practices/bestPractices.js

const bestPractices = {
  /*
  ===========================================================
    PASSWORD & AUTHENTICATION BEST PRACTICES
  ===========================================================
  */
  password_security: [
    {
      id: "bp_password_strong_unique",
      name: "Use Strong, Unique Passwords Everywhere",
      description:
        "Each account should have a strong, unique password so that a single breach does not compromise all other accounts.",
      steps: [
        "Use at least 12–16 characters with a mix of letters, numbers, and symbols.",
        "Avoid dictionary words, names, dates, or keyboard patterns (qwerty, 123456).",
        "Use a password manager to generate and store unique passwords.",
        "Do not reuse passwords across different apps or sites.",
        "Rotate passwords only when there is evidence or suspicion of compromise."
      ],
      mistakes: [
        "Reusing one ‘strong’ password everywhere.",
        "Writing passwords in plaintext (notes, Excel, sticky notes).",
        "Using small variations of the same password across sites.",
        "Sharing passwords over email or chat.",
        "Using personal info (birthdays, pet names, phone numbers)."
      ],
      examples: [
        "A user reuses the same password on a gaming site and corporate email. When the gaming site is breached, attackers log into their email and pivot further.",
        "A leaked password list from one service is used for credential stuffing against banking and social media accounts."
      ]
    },
    {
      id: "bp_password_manager",
      name: "Use a Password Manager",
      description:
        "A password manager securely stores and auto-fills complex, unique passwords for all accounts.",
      steps: [
        "Choose a reputable password manager with strong encryption.",
        "Set a long, unique master password and enable MFA for the manager.",
        "Store all account credentials inside the manager instead of the browser or notes.",
        "Use built-in password generators for new accounts.",
        "Regularly review stored accounts and remove unused ones."
      ],
      mistakes: [
        "Using browser’s default password storage without encryption and sync controls.",
        "Storing the master password in the same device in plaintext.",
        "Sharing vaults with others without proper separation.",
        "Using the same master password as some other account."
      ],
      examples: [
        "A company-wide password manager deployment reduces password reuse drastically and helps enforce complex passwords.",
        "An employee loses their laptop, but full disk encryption and password manager with MFA prevent account compromise."
      ]
    },
    {
      id: "bp_password_reset_flows",
      name: "Secure Password Reset & Recovery",
      description:
        "Password reset and recovery flows must be treated like authentication, since they allow account takeover if misused.",
      steps: [
        "Require proof of identity for password reset (email + MFA or security checks).",
        "Send reset links that expire quickly and can be used once.",
        "Do not show whether an account exists in error messages when requesting reset.",
        "Log and alert on frequent reset requests for the same account.",
        "Notify users via separate channel when a reset occurs."
      ],
      mistakes: [
        "Allowing password reset with only easily guessable info (DOB, phone).",
        "Displaying ‘account not found’ messages that leak which emails are valid.",
        "Not expiring reset tokens or allowing multiple uses.",
        "Not recording or monitoring reset attempts."
      ],
      examples: [
        "An attacker uses an insecure reset form plus OSINT (DOB) to reset an executive’s account.",
        "A leaked reset link from an unsecured email inbox lets attackers change a critical admin password."
      ]
    }
  ],

  mfa_best_practices: [
    {
      id: "bp_mfa_enable_everywhere",
      name: "Enable MFA for All Important Accounts",
      description:
        "Multi-factor authentication drastically reduces the impact of stolen passwords by requiring a second factor.",
      steps: [
        "Enable MFA on email, cloud, VPN, admin accounts, banking, and critical apps.",
        "Prefer app-based MFA (TOTP) or hardware security keys over SMS.",
        "Enforce MFA on privileged accounts by policy.",
        "Regularly review accounts without MFA and close the gap.",
        "Educate users to NEVER approve unexpected MFA prompts."
      ],
      mistakes: [
        "Relying only on passwords for critical admin accounts.",
        "Using SMS-only MFA where SIM swapping is common.",
        "Blindly approving push-based MFA prompts without verifying.",
        "Not having backup MFA methods (backup codes, secondary device)."
      ],
      examples: [
        "Credential stuffing fails because all accounts require app-based MFA.",
        "An attacker who steals a password cannot access the VPN due to mandatory hardware token MFA."
      ]
    },
    {
      id: "bp_mfa_phishing_resistance",
      name: "Use Phishing-Resistant MFA Where Possible",
      description:
        "Some MFA methods (like FIDO2/WebAuthn security keys) resist common phishing methods and reverse-proxy attacks.",
      steps: [
        "Deploy FIDO2/WebAuthn security keys for admins and high-value users.",
        "Support platform authenticators (built-in device keys) where possible.",
        "Disable legacy authentication that bypasses modern MFA.",
        "Test login flows against phishing proxies to evaluate resilience.",
        "Require phishing-resistant MFA on remote access and critical workloads."
      ],
      mistakes: [
        "Assuming all MFA is equally safe, ignoring phishing-resistant options.",
        "Allowing legacy protocols (IMAP/POP3) that bypass MFA.",
        "Not enforcing these methods for service owners or domain admins."
      ],
      examples: [
        "A reverse-proxy phishing attack steals passwords and OTPs, but fails against users with FIDO2 keys.",
        "An attacker can’t reuse stolen session tokens because key-bound tokens are device scoped."
      ]
    }
  ],

  /*
  ===========================================================
    NETWORK HARDENING & REMOTE ACCESS
  ===========================================================
  */
  network_hardening: [
    {
      id: "bp_network_segmentation",
      name: "Segment Networks and Apply Least Access",
      description:
        "Segmenting networks into zones limits lateral movement and reduces blast radius if an attacker compromises one machine.",
      steps: [
        "Separate user devices, servers, databases, and management networks into distinct VLANs.",
        "Restrict access between segments using firewalls and ACLs (default deny, explicit allow).",
        "Isolate critical systems (AD, DB, SCADA, crown jewels) in highly restricted segments.",
        "Use jump hosts or bastion servers for administrative access.",
        "Regularly review and clean up firewall rules and ACLs."
      ],
      mistakes: [
        "Flat networks where every machine can talk to every other.",
        "Overly permissive ‘any-to-any’ firewall rules.",
        "Allowing direct RDP/SSH access from the internet into internal segments.",
        "Not separating production, staging, and development environments."
      ],
      examples: [
        "Ransomware spreads across a flat network, encrypting every machine in hours.",
        "In a segmented environment, an attacker who compromises a user PC cannot reach database servers due to ACLs."
      ]
    },
    {
      id: "bp_disable_unused_services",
      name: "Disable Unused Services and Close Unnecessary Ports",
      description:
        "Every open port is an attack surface. Removing unused services reduces exposure and simplifies monitoring.",
      steps: [
        "Inventory listening ports on critical servers and network devices.",
        "Disable or remove unused services (FTP, Telnet, SMBv1, legacy protocols).",
        "Apply firewall rules to limit who can reach necessary services.",
        "Automate scanning (Nmap, vulnerability scanners) to verify exposure.",
        "Document why each exposed port exists and who owns it."
      ],
      mistakes: [
        "Leaving legacy services enabled ‘just in case’.",
        "Exposing management ports (SSH, RDP, WinRM) directly to the internet.",
        "Not revisiting ports after application changes.",
        "Assuming NAT alone equals security."
      ],
      examples: [
        "An exposed RDP port with weak credentials is brute-forced and leads to complete domain compromise.",
        "A forgotten legacy FTP service becomes the easiest way in for attackers because nobody monitors it."
      ]
    },
    {
      id: "bp_dns_security",
      name: "Harden and Monitor DNS",
      description:
        "DNS is a critical component and frequent attack target for exfiltration, C2, and spoofing.",
      steps: [
        "Use internal DNS resolvers for internal clients rather than arbitrary public resolvers.",
        "Enable logging for DNS queries and responses.",
        "Block known malicious domains using threat feeds.",
        "Implement DNSSEC where possible to prevent spoofing.",
        "Monitor for suspicious patterns (high entropy domains, unusual query volume)."
      ],
      mistakes: [
        "Allowing devices to query any public DNS resolver directly.",
        "Not logging DNS traffic, losing a critical detection source.",
        "Ignoring DNS tunneling and exfiltration channels."
      ],
      examples: [
        "Malware uses DNS queries to communicate with C2 via encoded subdomains.",
        "A fake DNS server redirecting traffic to malicious IPs goes undetected due to lack of logging."
      ]
    }
  ],

  vpn_remote_access: [
    {
      id: "bp_vpn_hardening",
      name: "Harden VPN and Remote Access",
      description:
        "Remote access points like VPNs, RDP gateways, and SSH jump servers are high-value targets and must be tightly secured.",
      steps: [
        "Require MFA for all remote access methods.",
        "Restrict which users and devices can use VPN.",
        "Limit network access from VPN to only necessary internal resources.",
        "Keep VPN appliances patched and monitored.",
        "Log and alert on unusual VPN logins (location, time, device)."
      ],
      mistakes: [
        "Allowing all users full internal access once VPN is connected.",
        "Using only passwords for VPN authentication.",
        "Not monitoring failed VPN login attempts or brute forcing.",
        "Exposing RDP directly instead of via VPN or gateway."
      ],
      examples: [
        "Attackers steal a VPN password and move laterally because there are no access restrictions once connected.",
        "A vulnerable VPN concentrator with an unpatched RCE is exploited to dump credentials."
      ]
    }
  ],

  /*
  ===========================================================
    ENDPOINT & SYSTEM HARDENING
  ===========================================================
  */
  endpoint_hardening: [
    {
      id: "bp_least_privilege_endpoints",
      name: "Remove Local Admin Rights from Users",
      description:
        "Users rarely need local admin rights; removing them drastically reduces the risk of malware and persistence.",
      steps: [
        "Audit which users have local admin on their machines.",
        "Remove local admin from normal accounts; use separate admin accounts for IT.",
        "Use privilege management tools for temporary elevation where needed.",
        "Monitor for attempts to re-add admin privileges.",
        "Train users on why they cannot install arbitrary software."
      ],
      mistakes: [
        "Giving everyone local admin ‘for convenience’.",
        "Using the same admin account across multiple machines.",
        "Allowing users to disable antivirus or EDR.",
        "Not monitoring for new local admins being added."
      ],
      examples: [
        "Malware executes with full admin rights and disables AV before encrypting files.",
        "An attacker uses a compromised local admin account to pivot to domain admin via cached credentials."
      ]
    },
    {
      id: "bp_application_control",
      name: "Implement Application Control / Whitelisting",
      description:
        "Application control only allows approved software to run, blocking unknown and unauthorized executables, scripts, and macros.",
      steps: [
        "Identify critical systems that benefit most (domain controllers, servers, high-risk endpoints).",
        "Build an allow-list of trusted applications and signed binaries.",
        "Block unsigned or unknown executables by default on those systems.",
        "Log and review blocked execution attempts regularly.",
        "Combine with EDR to investigate suspicious blocked events."
      ],
      mistakes: [
        "Trying to roll out strict whitelisting everywhere at once without testing.",
        "Allowing broad rules like ‘allow everything in C:\\Users’.",
        "Not maintaining the allowed list, causing users to circumvent controls."
      ],
      examples: [
        "Ransomware payloads fail to execute on servers because only signed and approved binaries can run.",
        "A malicious portable EXE downloaded to the desktop is blocked from running due to application control."
      ]
    }
  ],

  server_hardening: [
    {
      id: "bp_minimize_server_roles",
      name: "Minimize Server Roles and Functions",
      description:
        "A server should do as few things as possible; fewer roles mean fewer attack surfaces and simpler security.",
      steps: [
        "Assign specific roles (web server, DB, AD, file server) instead of ‘all-in-one’ servers.",
        "Disable unused services, ports, and scheduled tasks.",
        "Ensure management interfaces are restricted to admin networks.",
        "Apply OS and application baselines (CIS, vendor benchmarks).",
        "Use configuration management to keep hardening consistent."
      ],
      mistakes: [
        "Running web server, database, and AD roles on the same host.",
        "Leaving default settings and sample apps installed.",
        "Using servers as user workstations (browsing, email)."
      ],
      examples: [
        "A compromised web server with local DB lets attackers pivot into AD because roles are combined.",
        "A minimal dedicated DB server resists escalation because it runs only necessary services."
      ]
    }
  ],

  /*
  ===========================================================
    WEB / API / SECURE CODING BEST PRACTICES
  ===========================================================
  */
  secure_coding: [
    {
      id: "bp_input_validation",
      name: "Validate and Sanitize All User Input",
      description:
        "All external input is untrusted and must be validated on the server side to prevent injection and logic bugs.",
      steps: [
        "Perform allow-list validation on input (expected type, length, format).",
        "Sanitize and encode outputs properly (HTML, JSON, SQL parameters).",
        "Never concatenate untrusted input into queries, commands, or HTML.",
        "Use standard libraries and frameworks for validation and encoding.",
        "Log and reject malformed or suspicious inputs."
      ],
      mistakes: [
        "Relying only on client-side validation.",
        "Using blacklist filters that often miss variants.",
        "Mixing encoding responsibilities between layers randomly."
      ],
      examples: [
        "Lack of validation allows SQL injection via crafted query parameters.",
        "A missing output encoding causes reflected XSS on search results pages."
      ]
    },
    {
      id: "bp_secure_dependencies",
      name: "Manage and Secure Dependencies",
      description:
        "Third-party libraries and frameworks are frequent sources of vulnerabilities; they must be managed and updated.",
      steps: [
        "Maintain an SBOM (software bill of materials) per app.",
        "Use dependency scanners in CI (npm audit, pip-audit, Snyk, etc.).",
        "Avoid unmaintained or unknown libraries from random sources.",
        "Pin dependency versions and review updates before applying.",
        "Remove unused dependencies regularly."
      ],
      mistakes: [
        "Blindly trusting any package from public registries.",
        "Never updating dependencies after initial deployment.",
        "Including whole frameworks for a minor feature."
      ],
      examples: [
        "An old version of a Spring or Struts library with an RCE bug leads to full server compromise.",
        "A malicious npm package injected into the supply chain exfiltrates secrets from build environments."
      ]
    }
  ],

  api_security_best_practices: [
    {
      id: "bp_api_authz",
      name: "Enforce Strong Authentication and Authorization on APIs",
      description:
        "APIs must enforce who is calling them and what each caller is allowed to do, especially for object-level access.",
      steps: [
        "Use OAuth2/OIDC or equivalent robust auth for public APIs.",
        "Perform authorization checks for every resource and object.",
        "Use a consistent identity model for users and services.",
        "Avoid relying only on hidden fields or client-side checks.",
        "Log denied access attempts and review them."
      ],
      mistakes: [
        "Exposing internal APIs without auth ‘because front-end calls them’.",
        "Checking access only at the entry point, not at the resource level.",
        "Returning extra fields or related objects that user should not see."
      ],
      examples: [
        "A missing object-level authorization check allows users to view others’ invoices by changing IDs.",
        "An API that trusts a ‘role’ field from the client enables privilege escalation when modified."
      ]
    }
  ],

  web_app_hardening: [
    {
      id: "bp_secure_cookies",
      name: "Secure Session and Cookies Properly",
      description:
        "Session cookies must be protected from theft and misuse, as they often act as bearer tokens.",
      steps: [
        "Mark cookies as HttpOnly to prevent JavaScript access.",
        "Use Secure flag so cookies are only sent over HTTPS.",
        "Use SameSite where appropriate to reduce CSRF risk.",
        "Generate random, unpredictable session IDs.",
        "Expire sessions on logout and after inactivity."
      ],
      mistakes: [
        "Storing sensitive data (passwords, tokens) directly in cookies.",
        "Allowing long-lived sessions without re-authentication.",
        "Not rotating sessions after privilege changes."
      ],
      examples: [
        "A missing HttpOnly flag allows XSS to steal session cookies.",
        "Session fixation issues occur when session IDs are not regenerated after login."
      ]
    }
  ],

  /*
  ===========================================================
    EMAIL / PHISHING / USER AWARENESS
  ===========================================================
  */
  email_phishing: [
    {
      id: "bp_email_filters",
      name: "Implement Strong Email Filtering and Authentication",
      description:
        "Email remains the top initial entry vector; strong filtering and domain protections reduce successful phishing.",
      steps: [
        "Deploy a secure email gateway (SEG) or advanced filtering.",
        "Configure SPF, DKIM, and DMARC for your domains.",
        "Block known malicious file types and macro-enabled docs by policy where possible.",
        "Rewrite and inspect URLs in emails if your tooling supports it.",
        "Log and analyze spam/phishing events for trends."
      ],
      mistakes: [
        "Running critical email infrastructure without SPF/DKIM/DMARC.",
        "Allowing all attachment types including executables and scripts.",
        "Not monitoring for lookalike domains targeting your brand."
      ],
      examples: [
        "A spoofed email from a lookalike domain tricks staff into wiring funds.",
        "A malicious Excel macro bypasses basic filters and delivers ransomware."
      ]
    },
    {
      id: "bp_user_training",
      name: "Continuous User Awareness Training",
      description:
        "Users need recurring, practical training to recognize and report phishing and social engineering attempts.",
      steps: [
        "Run regular phishing simulations with varied difficulty.",
        "Teach users to verify sender addresses and URLs carefully.",
        "Establish easy reporting channels for suspicious emails.",
        "Reward/report metrics to encourage safe behavior.",
        "Update training content based on real attacks seen."
      ],
      mistakes: [
        "Doing one-time training and assuming users will remember forever.",
        "Shaming users who fail simulations instead of coaching them.",
        "Ignoring targeted spear phishing in training scenarios."
      ],
      examples: [
        "A well-trained employee spots a fake invoice phishing email and reports it, allowing security to warn others.",
        "Simulations show improvement over time, with fewer users clicking suspicious links."
      ]
    }
  ],

  /*
  ===========================================================
    RANSOMWARE / BACKUPS / RECOVERY
  ===========================================================
  */
  ransomware_prevention: [
    {
      id: "bp_ransomware_layers",
      name: "Layered Ransomware Prevention",
      description:
        "Ransomware prevention must combine email filtering, endpoint protection, least privilege, backups, and monitoring.",
      steps: [
        "Harden endpoints with EDR and application control.",
        "Disable or restrict macros and script execution where possible.",
        "Segment networks to limit spread between segments.",
        "Regularly test backups and ensure offline or immutable copies exist.",
        "Monitor for mass file modification and shadow copy deletions."
      ],
      mistakes: [
        "Relying only on antivirus signatures.",
        "Keeping backups online and writable from production systems.",
        "Allowing widespread local admin rights.",
        "Not testing restoration until after an incident happens."
      ],
      examples: [
        "A ransomware attack is limited to a few machines due to segmentation and least privilege.",
        "An organization recovers from ransomware quickly because offline backups were intact and tested."
      ]
    }
  ],

  backup_recovery: [
    {
      id: "bp_backup_strategy",
      name: "Robust Backup and Recovery Strategy",
      description:
        "Backups are the last line of defense; they must be reliable, tested, and protected from attackers.",
      steps: [
        "Follow 3-2-1 rule: three copies, two media types, one offsite/offline.",
        "Back up critical systems and data regularly with defined RPO/RTO.",
        "Encrypt backups and restrict access to backup systems.",
        "Perform periodic restore tests to validate backup integrity.",
        "Document procedures so recovery does not depend on one person."
      ],
      mistakes: [
        "Assuming backups work without testing restores.",
        "Allowing production credentials to access and delete backups.",
        "Storing backups on the same logical environment as production."
      ],
      examples: [
        "A misconfigured backup system allows ransomware to encrypt both production and backups, forcing a ransom decision.",
        "A successful recovery test identifies a backup job that silently failed for months."
      ]
    }
  ],

  /*
  ===========================================================
    DATA PROTECTION / DLP / ENCRYPTION
  ===========================================================
  */
  data_protection: [
    {
      id: "bp_data_classification",
      name: "Classify Data and Apply Controls by Sensitivity",
      description:
        "You can’t protect what you haven’t classified. Different data types require different security levels.",
      steps: [
        "Define data categories (public, internal, confidential, highly confidential).",
        "Identify where each category lives (systems, databases, cloud).",
        "Apply stricter access controls and encryption for higher categories.",
        "Mark and label sensitive documents where possible.",
        "Align DLP and monitoring rules with classification levels."
      ],
      mistakes: [
        "Treating all data the same and over-protecting or under-protecting.",
        "Not updating classification as systems and usage change.",
        "Ignoring shadow data copies in reports, exports, and email."
      ],
      examples: [
        "A customer PII database receives stronger controls than generic log data.",
        "A lack of classification means sensitive data ends up on unsecured shared drives."
      ]
    },
    {
      id: "bp_encryption_use",
      name: "Proper Use of Encryption at Rest and in Transit",
      description:
        "Encryption prevents attackers and unauthorized users from easily reading data even if they gain access to storage or traffic.",
      steps: [
        "Use TLS (HTTPS) for all web traffic, including internal APIs.",
        "Encrypt disks or volumes for laptops, servers, and cloud storage.",
        "Use strong algorithms (AES-256, TLS 1.2+), avoid deprecated ones.",
        "Manage keys in dedicated systems (KMS, HSM), not in code.",
        "Rotate keys periodically and when compromise is suspected."
      ],
      mistakes: [
        "Storing encryption keys in source code or .env files in public repos.",
        "Using outdated ciphers or self-signed certs in production.",
        "Encrypting data but giving everyone full key access."
      ],
      examples: [
        "A stolen unencrypted laptop exposes all customer data stored locally.",
        "Database files are encrypted, but keys stored next to them negate most of the benefit."
      ]
    }
  ],

  /*
  ===========================================================
    LOGGING / MONITORING / SIEM / SOC
  ===========================================================
  */
  logging_monitoring: [
    {
      id: "bp_logging_basics",
      name: "Log the Right Things in the Right Places",
      description:
        "Logging is useless if you log nothing or log everything without structure. Focus on security-relevant events.",
      steps: [
        "Log authentication attempts, privilege changes, and access to sensitive resources.",
        "Log administrative actions, configuration changes, and system errors.",
        "Include timestamps, user IDs, IPs, hostnames, and event context.",
        "Ship logs centrally to a SIEM or log management solution.",
        "Protect logs from tampering and limit access."
      ],
      mistakes: [
        "Not logging failed logins, making brute-force detection impossible.",
        "Logging sensitive data like full passwords or secrets.",
        "Leaving logs scattered on endpoints with no central visibility."
      ],
      examples: [
        "A lack of logs prevents IR from determining how attackers got in.",
        "Centralized logs allow investigators to trace lateral movement across multiple hosts."
      ]
    }
  ],

  siem_best_practices: [
    {
      id: "bp_siem_tuning",
      name: "Tune SIEM Rules and Reduce Noise",
      description:
        "A noisy SIEM with constant false positives leads to alert fatigue and missed real incidents.",
      steps: [
        "Start with a core set of high-value alerts (auth failures, admin actions, malware, exfil).",
        "Suppress or refine rules that generate frequent false positives.",
        "Group similar alerts into single incidents.",
        "Review and adjust correlation rules regularly.",
        "Measure MTTR, false positive rates, and rule usefulness."
      ],
      mistakes: [
        "Enabling every rule without tuning.",
        "Ignoring rule maintenance; SIEM becomes useless noise.",
        "Not involving SOC analysts in tuning decisions."
      ],
      examples: [
        "Analysts ignore SIEM emails due to too many meaningless alerts.",
        "A tuned SIEM quickly detects a compromised account due to a combination of correlated events."
      ]
    }
  ],

  soc_best_practices: [
    {
      id: "bp_soc_runbooks",
      name: "Use Standardized SOC Playbooks and Runbooks",
      description:
        "SOC operations need repeatable, documented procedures to respond consistently and quickly.",
      steps: [
        "Create playbooks for common alerts (phishing, malware, brute force, data exfil).",
        "Define triage steps, escalation paths, and closure criteria.",
        "Keep runbooks version-controlled and updated with lessons learned.",
        "Automate repetitive low-risk steps via SOAR where possible.",
        "Train analysts on using the playbooks in real time."
      ],
      mistakes: [
        "Dependence on individual hero analysts without documentation.",
        "No clear handoff or escalation process across shifts.",
        "Playbooks exist on paper but are not used in practice."
      ],
      examples: [
        "With a phishing playbook, analysts can quickly isolate accounts, search for similar emails, and block malicious domains.",
        "Without playbooks, each incident is handled differently, causing delays and inconsistent outcomes."
      ]
    }
  ],

  /*
  ===========================================================
    CLOUD / DEVSECOPS / SECRETS MANAGEMENT
  ===========================================================
  */
  cloud_best_practices: [
    {
      id: "bp_cloud_least_privilege",
      name: "Cloud IAM Least Privilege and Guardrails",
      description:
        "Cloud permissions must be tightly controlled; overly broad roles cause massive blast radius.",
      steps: [
        "Avoid using built-in admin roles for everyday tasks.",
        "Create custom roles with minimal required permissions.",
        "Use resource-level and condition-level controls where possible.",
        "Regularly review IAM policies and remove unused permissions.",
        "Use SCPs / org policies to enforce global guardrails."
      ],
      mistakes: [
        "Assigning ‘owner’ or ‘admin’ roles by default to new accounts.",
        "Never reviewing or revoking temporary access.",
        "Hardcoding cloud keys in code or scripts."
      ],
      examples: [
        "A compromised service account with full admin rights leads to total cloud takeover.",
        "An over-privileged Lambda function is misused to read all secrets and data."
      ]
    }
  ],

  devsecops_best_practices: [
    {
      id: "bp_ci_cd_security",
      name: "Secure CI/CD Pipelines and Build Systems",
      description:
        "Compromised pipelines let attackers inject backdoors into every deployed app.",
      steps: [
        "Require MFA and strong auth for CI/CD and code repos.",
        "Isolate build agents and runners; avoid running untrusted code with high privileges.",
        "Scan code, dependencies, and images in the pipeline.",
        "Protect secrets used by pipelines using secure storage.",
        "Log and monitor pipeline actions, especially approvals and deploys."
      ],
      mistakes: [
        "Allowing anyone to modify pipeline configs without review.",
        "Storing repo or cloud credentials in plain text in build scripts.",
        "Using shared generic build agents for sensitive and non-sensitive workloads alike."
      ],
      examples: [
        "Attackers compromise a CI server and inject malicious code into all builds.",
        "A leaked CI token with broad rights lets attackers push backdoored images to production registry."
      ]
    }
  ],

  secrets_management: [
    {
      id: "bp_secrets_centralization",
      name: "Centralize and Protect Secrets",
      description:
        "Secrets (passwords, API keys, tokens) must be stored in dedicated secure systems, not scattered across code and configs.",
      steps: [
        "Use a secret manager (Vault, AWS Secrets Manager, Azure Key Vault, etc.).",
        "Remove secrets from source code, config files, and CI variables where possible.",
        "Implement strict access control and auditing on secret stores.",
        "Rotate secrets regularly and immediately after suspected leakage.",
        "Scan repos for accidental secret commits and remediate."
      ],
      mistakes: [
        "Committing secrets to git and trying to ‘hide’ them with later commits.",
        "Sharing secrets over email, chat, or ticket systems.",
        "Using same API key or password across multiple environments."
      ],
      examples: [
        "Public GitHub repo leaks cloud keys that are then used for crypto mining.",
        "A shared admin DB password reused across apps is stolen and used to dump multiple databases."
      ]
    }
  ],

  /*
  ===========================================================
    HUMAN / SOCIAL / PHYSICAL SECURITY
  ===========================================================
  */
  social_engineering_resistance: [
    {
      id: "bp_verify_requests",
      name: "Verify Unusual or Sensitive Requests",
      description:
        "Users should verify any request that involves money, credentials, or access changes using a trusted channel.",
      steps: [
        "Establish clear out-of-band verification processes (phone call, in-person).",
        "Train users to be skeptical of urgent, threatening, or secret requests.",
        "Document who can make approval decisions for critical actions.",
        "Encourage reporting of suspicious interactions without punishment.",
        "Include executives in training; they are high-value targets."
      ],
      mistakes: [
        "Assuming senior executives are too busy for security training.",
        "Relying only on email for high-risk approvals.",
        "Shaming people for asking ‘too many’ security questions."
      ],
      examples: [
        "A finance worker verifies a CEO payment request by phone and discovers it was a spoofed email.",
        "A helpdesk refuses to reset a password based solely on a caller’s claimed identity."
      ]
    }
  ],

  physical_security: [
    {
      id: "bp_physical_access_control",
      name: "Control Physical Access to Critical Systems",
      description:
        "Physical access can bypass many logical controls; servers and network gear must be physically secured.",
      steps: [
        "Place servers, switches, and critical devices in locked rooms or racks.",
        "Require badges/biometrics for entry with logging of access.",
        "Secure backup media and sensitive paperwork physically.",
        "Enforce clean desk policies for sensitive work areas.",
        "Educate staff about tailgating and badge sharing."
      ],
      mistakes: [
        "Keeping servers in unsecured closets or under desks.",
        "Allowing visitors to roam without escorts.",
        "Leaving whiteboards or printed docs with sensitive info visible."
      ],
      examples: [
        "An attacker walks into an open server room and plugs in a rogue device on the network.",
        "A stolen laptop without disk encryption leads to data exposure."
      ]
    }
  ],

  /*
  ===========================================================
    ATTACK SURFACE / PATCHING / SHADOW IT
  ===========================================================
  */
  patch_management: [
    {
      id: "bp_patch_management",
      name: "Consistent Patch and Vulnerability Management",
      description:
        "Unpatched vulnerabilities are a primary root cause of compromise; patching must be systematic and prioritized.",
      steps: [
        "Maintain inventory of all assets (servers, endpoints, apps, network gear).",
        "Use scanners and vendor advisories to identify vulnerabilities.",
        "Prioritize patches based on severity, exploitability, and exposure.",
        "Test patches in staging where possible and deploy regularly.",
        "Track KPIs (time-to-patch, coverage) and report to leadership."
      ],
      mistakes: [
        "Ignoring patches because ‘the system is too critical to reboot’.",
        "Applying ad-hoc patches only after breaches.",
        "Not patching network devices, hypervisors, or appliances."
      ],
      examples: [
        "An unpatched VPN gateway CVE leads to full network compromise.",
        "A wormable bug like EternalBlue spreads internally due to unpatched Windows servers."
      ]
    }
  ],

  attack_surface_management: [
    {
      id: "bp_external_attack_surface",
      name: "Continuous External Attack Surface Management",
      description:
        "Organizations must know what is exposed to the internet and keep it under continuous review.",
      steps: [
        "Maintain an up-to-date inventory of domains, IPs, and external services.",
        "Regularly scan for open ports, outdated software, and misconfigurations.",
        "Decommission or secure unused or forgotten assets.",
        "Monitor for new subdomains, cloud resources, and shadow IT.",
        "Integrate attack surface data with vulnerability and risk management."
      ],
      mistakes: [
        "Assuming IT knows all exposed assets without verification.",
        "Ignoring test or dev environments that are internet-facing.",
        "Not monitoring DNS and cloud DNS changes."
      ],
      examples: [
        "A forgotten test server with outdated software is exploited.",
        "A temporary S3 bucket created for a project remains public long after the project ends."
      ]
    }
  ]
};

module.exports = {bestPractices};