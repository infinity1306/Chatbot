const info = [
  /*
  ===========================================================
   3. WAF — Web Application Firewall
  ===========================================================
  */
  {
    id: "defense_waf",
    name: "Web Application Firewall",
    category: "Application Defense",

    definition:
      "A WAF protects web applications by filtering and monitoring HTTP/S traffic for malicious payloads and attacks.",

    purpose:
      "To block SQL injection, XSS, CSRF, RFI/LFI, bot attacks, and malicious patterns targeting web applications.",

    how_it_works: {
      signature_based:
        "Matches requests against known exploit signatures or malicious payload patterns.",
      behavior_based:
        "Identifies abnormal HTTP behavior such as high-frequency requests or malformed queries.",
      anomaly_detection:
        "Flags unusual traffic compared to baseline activity.",
      virtual_patching:
        "Blocks exploit attempts on vulnerable applications even before patching."
    },

    examples: [
      "Cloudflare WAF",
      "AWS WAF",
      "Akamai Kona",
      "F5 Advanced WAF",
      "Imperva WAF",
      "ModSecurity (open-source)"
    ],

    attacker_bypass_methods: [
      "Encoding or obfuscating payloads.",
      "Using low-and-slow attacks.",
      "Mimicking legitimate traffic patterns.",
      "Using SSL/TLS to hide payloads."
    ],

    detection: [
      "WAF logs showing blocked injection attempts.",
      "Spike in rule-triggered alerts.",
      "Repeated anomalies from same IP/customer."
    ],

    best_practices: [
      "Use a combination of rulesets (OWASP + vendor).",
      "Enable bot protection and rate limiting.",
      "Enable virtual patching for high-risk CVEs.",
      "Tune false positives regularly."
    ]
  },

  /*
  ===========================================================
   4. MFA — Multi-Factor Authentication
  ===========================================================
  */
  {
    id: "defense_mfa",
    name: "Multi-Factor Authentication",
    category: "Identity & Access Defense",

    definition:
      "MFA requires users to provide two or more authentication factors: something they know, have, or are.",

    purpose:
      "To prevent unauthorized access even if passwords are stolen, leaked, guessed, or brute-forced.",

    how_it_works: {
      knowledge_factor: "Passwords, PINs, security questions.",
      possession_factor: "OTP apps, hardware tokens, SMS codes, smart cards.",
      inherence_factor: "Biometrics like fingerprint or face recognition."
    },

    examples: ["Google Authenticator", "Authy", "Microsoft Authenticator", "YubiKey"],

    attacker_bypass_methods: [
      "SIM swapping for SMS codes.",
      "Phishing reverse proxy stealing session tokens.",
      "Malware capturing OTP codes in real time.",
      "Social engineering support teams."
    ],

    detection: [
      "Multiple MFA failures from same account.",
      "Impossible travel login alerts.",
      "Login succeeded but MFA failed repeatedly."
    ],

    best_practices: [
      "Use app-based or hardware MFA instead of SMS.",
      "Enable MFA for all admin accounts.",
      "Disable legacy authentication protocols.",
      "Use push-based approval with number matching."
    ]
  },

  /*
  ===========================================================
   5. Encryption
  ===========================================================
  */
  {
    id: "defense_encryption",
    name: "Encryption",
    category: "Data Security",

    definition:
      "Encryption secures data by converting it into unreadable ciphertext which only authorized parties can decrypt.",

    purpose:
      "To protect confidentiality of data at rest, in transit, and during processing.",

    how_it_works: {
      symmetric:
        "Same key used for encryption and decryption. Fast, used for bulk data (AES).",
      asymmetric:
        "Public key encrypts, private key decrypts. Used in TLS, emails, certificates (RSA, ECC).",
      hashing:
        "One-way transformation used for passwords and integrity checks (SHA-256, bcrypt)."
    },

    examples: ["AES-256", "RSA-2048", "ChaCha20", "Curve25519", "bcrypt", "PBKDF2"],

    attacker_bypass_methods: [
      "Accessing unencrypted copies of files.",
      "Memory extraction from running processes.",
      "Weak key management.",
      "Using outdated or broken algorithms."
    ],

    detection: [
      "Plaintext traffic in network logs.",
      "Failed TLS handshakes.",
      "Unauthorized access to encryption keys."
    ],

    best_practices: [
      "Use AES-256 for data at rest.",
      "Force TLS 1.2+ for all traffic.",
      "Store keys separately using KMS or HSM.",
      "Hash passwords using bcrypt or Argon2."
    ]
  },

  /*
  ===========================================================
   6. Endpoint Security
  ===========================================================
  */
  {
    id: "defense_endpoint",
    name: "Endpoint Security",
    category: "Device Defense",

    definition:
      "Endpoint security protects user devices (PCs, laptops, mobiles, servers) using antivirus, EDR, device control, and behavioral monitoring.",

    purpose:
      "To detect malware, block exploits, monitor behavior, and prevent unauthorized access.",

    how_it_works: {
      antivirus:
        "Signature-based detection of known malware files.",
      edr:
        "Monitors processes, memory, registry, and network behavior to detect advanced threats.",
      sandboxing:
        "Suspicious files executed in isolated environments.",
      device_control:
        "Blocks unauthorized USB devices and external drives."
    },

    examples: [
      "CrowdStrike Falcon",
      "Microsoft Defender for Endpoint",
      "SentinelOne",
      "Sophos Intercept X",
      "Kaspersky Endpoint Security"
    ],

    attacker_bypass_methods: [
      "Living-off-the-land (PowerShell, WMI).",
      "Fileless malware.",
      "Signed malware or stolen certificates.",
      "Disabling endpoint agents."
    ],

    detection: [
      "Tamper protection alerts.",
      "Unusual process tree behavior.",
      "Suspicious registry or startup changes.",
      "Unexpected outbound connections."
    ],

    best_practices: [
      "Enable EDR + real-time protection.",
      "Block unsigned or unknown executables.",
      "Update OS and endpoint agents regularly.",
      "Use device control to block USB attacks."
    ]
  },

  /*
  ===========================================================
   7. Zero Trust
  ===========================================================
  */
  {
    id: "defense_zero_trust",
    name: "Zero Trust Architecture",
    category: "Access Control",

    definition:
      "Zero Trust assumes no user or device is inherently trusted, even inside the network. Every access request must be verified, authenticated, and authorized.",

    purpose:
      "To eliminate implicit trust and reduce lateral movement in case of breach.",

    how_it_works: {
      continuous_auth:
        "User identity continuously evaluated with MFA, risk scoring, behavioral checks.",
      microsegmentation:
        "Breaking network into small isolated zones.",
      least_privilege:
        "Access granted strictly on what is needed.",
      device_validation:
        "Only compliant and trusted devices can access resources."
    },

    examples: ["Google BeyondCorp", "Microsoft Zero Trust Framework"],

    attacker_bypass_methods: [
      "Compromised privileged accounts.",
      "Session hijacking.",
      "Unpatched devices bypassing compliance.",
      "Insider threats."
    ],

    detection: [
      "Lateral movement attempts.",
      "Access attempts from non-compliant devices.",
      "Impossible travel patterns.",
      "Privilege escalation attempts."
    ],

    best_practices: [
      "Enforce MFA everywhere.",
      "Block access from unmanaged devices.",
      "Segment networks with micro-policies.",
      "Apply principle of least privilege."
    ]
  },

  /*
  ===========================================================
   8. Incident Response
  ===========================================================
  */
  {
    id: "defense_incident_response",
    name: "Incident Response",
    category: "Operations Defense",

    definition:
      "Incident response is the structured approach to detect, contain, eradicate, and recover from security incidents.",

    purpose:
      "To minimize damage, reduce downtime, and restore systems securely.",

    how_it_works: {
      preparation:
        "Policies, playbooks, communication plans, IR tools.",
      detection:
        "Identifying malicious events from SIEM, logs, or alerts.",
      containment:
        "Isolating affected systems to prevent spread.",
      eradication:
        "Removing malware, closing vulnerabilities.",
      recovery:
        "Restoring normal operations from clean backups.",
      lessons_learned:
        "Documenting incident details to improve future defenses."
    },

    examples: [
      "SOC playbooks",
      "NIST IR guidelines",
      "CIRT teams",
      "Digital forensics"
    ],

    attacker_bypass_methods: [
      "Deleting logs.",
      "Disabling security tools.",
      "Using stealthy malware.",
      "Living-off-the-land attacks."
    ],

    detection: [
      "Suspicious login patterns.",
      "Anomalous network traffic.",
      "New unknown processes.",
      "Unauthorized configuration changes."
    ],

    best_practices: [
      "Maintain updated IR playbooks.",
      "Run regular tabletop exercises.",
      "Enable centralized logging.",
      "Use EDR with rollback capabilities.",
      "Have clean offline backups."
    ]
  },

  /*
  ===========================================================
   9. Network Segmentation
  ===========================================================
  */
  {
    id: "defense_network_segmentation",
    name: "Network Segmentation",
    category: "Network Defense",

    definition:
      "Network segmentation divides networks into isolated zones to reduce attack surface and limit lateral movement.",

    purpose:
      "To prevent attackers from freely moving across internal systems if they compromise one asset.",

    how_it_works: {
      vlan_segmentation:
        "Grouping devices into isolated VLANs.",
      firewall_policies:
        "Strict access rules between different network segments.",
      microsegmentation:
        "Fine-grained per-application or per-service isolation.",
      zero_trust_controls:
        "Identity-based access between segments, not IP-based."
    },

    examples: [
      "DMZ networks",
      "Separate VLANs for users, servers, IoT",
      "Cloud security groups"
    ],

    attacker_bypass_methods: [
      "Compromised admin credentials.",
      "Misconfigured firewall rules.",
      "Pivoting through allowed protocols.",
      "Using internal DNS or SMB trust paths."
    ],

    detection: [
      "Devices accessing segments they shouldn't.",
      "Unexpected SMB or RDP connections.",
      "Traffic crossing segments without rules.",
      "Ping sweeps or internal port scans."
    ],

    best_practices: [
      "Separate user network, server network, and sensitive assets.",
      "Apply deny-by-default between segments.",
      "Restrict RDP/SSH between zones.",
      "Monitor internal traffic for anomaly detection."
    ]
  }
];

module.exports = {info};
