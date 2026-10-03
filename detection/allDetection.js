const detection = {
  /*
  ===========================================================
      NETWORK ATTACK DETECTION (Expanded)
  ===========================================================
  */
  network: [
    {
      id: "detect_port_scanning",
      name: "Port Scanning Detection",
      category: "Network",

      description:
        "Detects reconnaissance activity where attackers scan ports to identify open services. Includes fast scans, slow scans, stealth scans, and fragmented packet scans.",

      indicators: {
        high_frequency_scans:
          "Same source hits >50 ports within 5 seconds.",
        sequential_ports:
          "Requests on port ranges like 1–1024 or 80,443,8080.",
        syn_only:
          "Multiple SYN packets without ACK (incomplete handshake).",
        null_xmas_fin_scans:
          "TCP packets with unusual flags (NULL, XMAS, FIN).",
        fragmented_packets:
          "Packets intentionally broken to bypass IDS/IPS.",

        examples: [
          "Attacker uses `nmap -sS 192.168.1.10`.",
          "Masscan running on port 80 against entire subnet.",
          "ZMap scanning TCP/443 very rapidly."
        ]
      },

      detection_methods: {
        firewall_logs:
          "Repeated 'DROPPED SYN' events indicates stealth scanning.",
        IDS_signatures:
          "Snort SID: 469 - 'SYN scan detected'.",
        SIEM_correlation:
          "Rule: 'same source > 20 ports in < 10 sec'.",
        NetFlow_analysis:
          "Small packets + high connection count.",

        examples: [
          "Suricata alert: ET SCAN Nmap Scripting Engine User-Agent Detected",
          "Firewall log: DROP TCP src=5.10.20.30 ports=1,2,3,4,5…"
        ]
      },

      defenses: [
        "Enable rate-limiting on routers/firewalls.",
        "Block repeated offenders at perimeter IPS.",
        "Deploy tarpits to slow attackers.",
        "Hide unnecessary ports (Zero Exposure)."
      ]
    },

    {
      id: "detect_arp_spoof",
      name: "ARP Spoofing Detection",
      category: "Network",

      description:
        "Detects attackers attempting MITM by poisoning ARP tables on LAN networks.",

      indicators: {
        duplicate_mac:
          "Two MACs claim to be the same IP.",
        gateway_mac_change:
          "Sudden ARP change for default gateway.",
        arp_storms:
          "Unusual frequency of ARP replies.",

        examples: [
          "Attacker uses `arpspoof -t victim gateway`.",
          "MITMf poisoning ARP to intercept traffic."
        ]
      },

      detection_methods: {
        arpwatch:
          "Alerts on MAC-IP mapping changes.",
        Suricata_arp_rules:
          "Detects unsolicited ARP replies.",
        switch_security:
          "Enable Dynamic ARP Inspection (DAI).",

        examples: [
          "arpwatch: flip detected for 192.168.1.1",
          "Suricata: ET INFO ARP Duplicate IP Address"
        ]
      }
    },

    {
      id: "detect_dns_spoof",
      name: "DNS Spoofing Detection",
      category: "Network",

      indicators: {
        mismatched_ips:
          "Domain resolves to suspicious IP.",
        TTL_anomalies:
          "Extremely low TTL used in spoofed responses.",
        rogue_dns:
          "Clients contacting unknown DNS servers.",

        examples: [
          "google.com resolving to 185.52.1.22 (malicious).",
          "TTL = 0 — attacker forcing cache miss."
        ]
      },

      detection_methods: {
        passive_dns_logs:
          "Compare historical IPs against new ones.",
        SIEM_correlation:
          "Detect sudden increase in DNS NXDOMAIN.",
        DNSSEC_validation:
          "Detects unsigned forged responses.",

        examples: [
          "SIEM alert: 'DNS response mismatch – possible poisoning'.",
          "Query resolved by unauthorized internal DNS server."
        ]
      }
    }
  ],

  /*
  ===========================================================
      WEB ATTACK DETECTION (Expanded)
  ===========================================================
  */
  web: [
    /*
      ===================== SQL Injection =====================
    */
    {
      id: "detect_sql_injection",
      name: "SQL Injection Detection",
      category: "Web",

      description:
        "Detects malicious input targeting SQL databases using UNION queries, boolean injections, error-based payloads, or time-based delays.",

      indicators: {
        sql_keywords:
          "Payloads containing SELECT, UNION, INSERT, DROP, DELETE.",
        boolean_payloads:
          "' OR 1=1 -- , ' OR 'a'='a'.",
        stacked_queries:
          "Payloads containing '; DROP TABLE users;'.",
        time_delays:
          "Using SLEEP(), WAITFOR DELAY, BENCHMARK().",
        error_messages:
          "MySQL syntax error, ODBC error, ORA-00933 error.",

        examples: [
          "GET /login?user=admin'--",
          "GET /search?q=1 UNION SELECT username,password FROM users",
          "POST /auth: username=' OR SLEEP(5)--"
        ]
      },

      detection_methods: {
        waf_rules:
          "Block UNION-based, boolean-based, error-based SQLi signatures.",
        log_analysis:
          "Detect repeated 500 errors triggered by same IP.",
        anomaly_based_detection:
          "Long query strings, unusual special characters.",
        DB_monitoring:
          "Detect unauthorized SELECT * FROM queries.",

        examples: [
          "ModSecurity rule 942100 – SQL Injection Attempt Detected",
          "Nginx log: 500 error repeated 20 times for same URI"
        ]
      }
    },

    /*
      ===================== XSS =====================
    */
    {
      id: "detect_xss",
      name: "Cross-Site Scripting Detection",
      category: "Web",

      indicators: {
        script_tags:
          "Presence of <script>, <img src=x onerror=> payloads.",
        js_functions:
          "alert(1), document.cookie, eval(), atob() calls.",
        encoded_payloads:
          "%3Cscript%3Ealert(1)%3C/script%3E",
        reflected_payloads:
          "User input shows up directly in the response.",

        examples: [
          "GET /search?q=<script>alert(1)</script>",
          "img src=x onerror=alert(1)",
          "URL encoded XSS: %3Cscript%3Ealert()%3C/script%3E"
        ]
      },

      detection_methods: {
        CSP_reports:
          "CSP 'report-uri' shows blocked scripts.",
        WAF_XSS_filters:
          "Signature-based detection of malicious tags.",
        DOM_scanners:
          "Detect unsafe sinks (innerHTML, document.write).",
        behavior_detection:
          "Requests attempting to steal cookies or tokens.",

        examples: [
          "CSP Report: 'Refused to execute inline script'",
          "WAF Alert: Cross-site scripting attempt from IP 45.12.10.2"
        ]
      }
    },

    /*
      ===================== CSRF =====================
    */
    {
      id: "detect_csrf",
      name: "CSRF Detection",
      category: "Web",

      indicators: {
        missing_tokens:
          "Sensitive actions without CSRF tokens.",
        referer_mismatch:
          "Origin header mismatched with hosted domain.",

        examples: [
          "POST /money/transfer (no CSRF token)",
          "Origin: evil.com — illegal banking request"
        ]
      },

      detection_methods: {
        server_logs:
          "Requests with no CSRF header.",
        WAF_rules:
          "Detect forged form submissions.",
        API_gateways:
          "Check referer/origin validity."
      }
    }
  ],

  /*
  ===========================================================
      ENDPOINT & MALWARE DETECTION (Expanded)
  ===========================================================
  */
  endpoint: [
    /*
      ===================== RANSOMWARE =====================
    */
    {
      id: "detect_ransomware",
      name: "Ransomware Detection",
      category: "Endpoint",

      indicators: {
        rapid_file_modification:
          "Hundreds of files changed within seconds.",
        extension_changes:
          ".encrypted, .locked, .darkside file extensions.",
        shadow_copy_delete:
          "Execution of: vssadmin delete shadows /all /quiet",
        suspicious_parent_process:
          "Word → cmd → powershell → unknown.exe chain.",

        examples: [
          "Process: word.exe → powershell encoded command → encryption",
          "File renaming: abc.jpg → abc.jpg.locked"
        ]
      },

      detection_methods: {
        EDR_behavioral:
          "Detects excessive file writes.",
        honeypot_files:
          "Decoy files trigger immediate alert.",
        registry_monitoring:
          "Persistence mechanisms (Run keys).",

        examples: [
          "SentinelOne: 'Threaded encryption detected'",
          "CrowdStrike: 'Rapid file-modification behavior'"
        ]
      }
    },

    /*
      ===================== KEYLOGGERS =====================
    */
    {
      id: "detect_keylogger",
      name: "Keylogger Detection",
      category: "Endpoint",

      indicators: {
        suspicious_hooks:
          "SetWindowsHookEx or GetAsyncKeyState.",
        hidden_startup_entries:
          "Keylogger in HKCU/Run registry keys.",
        unauthorized_network_outbound:
          "Small packets to same IP every keystroke.",

        examples: [
          "Process uses SetWindowsHookEx to intercept keystrokes.",
          "Outbound connection: POST /keystrokes every second."
        ]
      },

      detection_methods: {
        EDR_memory_scan:
          "Find injected DLLs in browser processes.",
        startup_monitoring:
          "Alert on new autorun entries.",
        network_monitoring:
          "Detect small repetitive outbound packets."
      }
    },

    /*
      ===================== ROOTKITS =====================
    */
    {
      id: "detect_rootkit",
      name: "Rootkit Detection",
      category: "Endpoint",

      indicators: {
        hidden_processes:
          "Processes showing in memory but not task manager.",
        syscall_hooks:
          "Rootkit hooks system calls to hide activity.",
        tampered_logs:
          "Cleared Windows logs or overwritten Linux logs.",

        examples: [
          "Linux: chkrootkit reports 'suspicious ELF binary'.",
          "Windows: hidden driver loaded (unsigned)."
        ]
      }
    }
  ],

  /*
  ===========================================================
      LOG-BASED DETECTION (Expanded)
  ===========================================================
  */
  logs: [
    /*
      ===================== WINDOWS LOGS =====================
    */
    {
      id: "windows_event_monitoring",
      name: "Windows Security Log Detection",
      category: "Logs",

      indicators: {
        brute_force:
          "EventID 4625 repeated attempts.",
        successful_login_after_failures:
          "4625 followed by 4624.",
        privilege_escalation:
          "4672: Admin privileges assigned.",
        log_clearing:
          "1102: Someone cleared security logs.",

        examples: [
          "EventID 4625 — 150 failed attempts from IP 102.44.10.3",
          "EventID 1102 — Security log cleared suddenly"
        ]
      }
    },

    /*
      ===================== LINUX LOGS =====================
    */
    {
      id: "linux_event_monitoring",
      name: "Linux Log Detection",

      indicators: {
        ssh_attacks:
          "Hundreds of 'Failed password' entries.",
        sudo_misuse:
          "Unknown user using sudo.",
        unauthorized_cron:
          "New cronjob created without admin permission.",
        suspicious_binary_execution:
          "Execution from /tmp, /dev/shm, /run/",

        examples: [
          "/var/log/auth.log: Failed password for root from 101.22.12.33",
          "cron: added unknown script crypto.sh"
        ]
      }
    }
  ],

  /*
  ===========================================================
      SIEM CORRELATION RULES (Expanded)
  ===========================================================
  */
  siem: [
    {
      id: "multi_stage_attack",
      name: "Multi-Stage Attack Detection",

      description:
        "Correlation of multiple attack signals to detect advanced attackers using chaining.",

      rule:
        "Failed logins → successful login → privilege escalation → internal scan → outbound connection.",

      examples: [
        "Attacker brute forces credentials → logs in → runs nmap inside network",
        "User escalates privileges → pulls data → uploads to external server"
      ]
    },

    {
      id: "bruteforce_success",
      name: "Bruteforce Followed by Success",

      rule:
        "10+ failures (4625) from same IP → followed by successful login (4624).",

      examples: [
        "SIEM alert: 15 failed → 1 success → credential compromised"
      ]
    },

    {
      id: "data_exfiltration",
      name: "Data Exfiltration Detection",

      rule:
        "Large outbound data volume + connection to unknown IP + outside business hours.",

      examples: [
        "Upload of 4GB to 45.33.19.2 at 2AM",
        "AWS EC2 instance sending large traffic to China-based IP"
      ]
    }
  ],

  /*
  ===========================================================
      ANOMALY DETECTION (Expanded)
  ===========================================================
  */
  anomalies: [
    {
      id: "impossible_travel",
      name: "Impossible Travel Detection",

      indicators: {
        extreme_location_change:
          "Login from India → 3 minutes later login from USA.",
        unexpected_device:
          "New device fingerprint suddenly appearing.",

        examples: [
          "User logs in from Mumbai → 4 minutes later from New York",
          "User normally uses Windows → suddenly logs in from Linux machine"
        ]
      }
    },

    {
      id: "behavioral_anomaly",
      name: "Behavior Anomaly Detection",

      indicators: {
        time_of_day:
          "User logging in at times they never logged in before.",
        large_data_access:
          "User reading thousands of files unexpectedly.",
        new_process_behavior:
          "User runs PowerShell after never using it.",

        examples: [
          "Normal employee runs mimikatz.exe",
          "Marketing employee accesses finance folder"
        ]
      }
    }
  ]
};

module.exports = {detection};
