// attacks/os.js

const osAttacks = [
  {
    id: "privilege-escalation-local",
    name: "Local Privilege Escalation",
    category: "os",
    severity: "critical",
    description: "Local privilege escalation exploits weaknesses in the operating system, misconfigurations, or vulnerable drivers to elevate a low-privileged user (like a normal account or service) to higher privileges (often SYSTEM or root). It is typically used after an initial foothold to gain full control of the machine.",
    detection: [
      "Unexpected processes running with SYSTEM/root privileges",
      "New services, scheduled tasks or cron jobs appearing without change control",
      "EDR alerts on exploitation of known local privilege escalation CVEs"
    ],
    impact: [
      "Complete control of the operating system",
      "Ability to disable security tools and logs",
      "Lateral movement deeper into the environment"
    ],
    propagation: [
      "Abuse of vulnerable kernel drivers or OS components",
      "Exploitation of misconfigured permissions on services, files or registries"
    ],
    mitigation: [
      "Apply OS and driver security patches quickly",
      "Use least-privilege accounts and remove local admin where possible",
      "Harden file and service permissions and use EDR to monitor suspicious privilege changes"
    ],
    keywords: [
      "local privilege escalation",
      "lpe",
      "elevate to system",
      "gain admin on os"
    ]
  },
  {
    id: "privilege-escalation-remote",
    name: "Remote Privilege Escalation",
    category: "os",
    severity: "critical",
    description: "Remote privilege escalation occurs when an attacker gains higher-level privileges on a remote system, often after gaining some remote access (like a user shell) and then exploiting OS vulnerabilities to become an administrator or root.",
    detection: [
      "Normal user accounts suddenly performing admin-level actions",
      "New remote admin sessions from unexpected hosts",
      "Logs showing exploitation of remote services or RPC calls"
    ],
    impact: [
      "Remote full control of target OS",
      "Ability to deploy ransomware or backdoors at scale",
      "Compromise of sensitive data stored on servers"
    ],
    propagation: [
      "Exploitation of unpatched remote services like SMB, RDP or RPC",
      "Abuse of weak domain/AD configurations for privilege escalation"
    ],
    mitigation: [
      "Patch all remote services and disable old protocols",
      "Use network segmentation and restrict admin interfaces",
      "Monitor privilege changes and remote admin activity"
    ],
    keywords: [
      "remote privilege escalation",
      "remote admin exploit",
      "gain domain admin"
    ]
  },
  {
    id: "buffer-overflow",
    name: "Buffer Overflow Exploit",
    category: "os",
    severity: "critical",
    description: "A buffer overflow happens when a program writes more data into a buffer than it can hold, overwriting adjacent memory. Attackers craft input that overwrites control structures (like return addresses) to execute arbitrary code in the context of the vulnerable process.",
    detection: [
      "Application crashes with access violation or segmentation fault",
      "EDR alerts on exploitation of known overflow vulnerabilities",
      "Abnormal process behaviour shortly before termination"
    ],
    impact: [
      "Arbitrary code execution",
      "Privilege escalation if the process runs with high rights",
      "Installation of backdoors or malware"
    ],
    propagation: [
      "Exploitation via network-facing services with unsafe input handling",
      "Malicious files or inputs processed by vulnerable OS components"
    ],
    mitigation: [
      "Use modern mitigations like ASLR, DEP, stack canaries and safe functions",
      "Patch vulnerable software and OS components",
      "Apply secure coding practices that validate input lengths"
    ],
    keywords: [
      "buffer overflow",
      "stack overflow exploit",
      "heap overflow exploit"
    ]
  },
  {
    id: "race-condition",
    name: "Race Condition Exploit",
    category: "os",
    severity: "high",
    description: "Race condition attacks exploit timing windows where multiple operations access shared resources without proper synchronization. Attackers can manipulate the timing to overwrite files, escalate privileges or bypass checks.",
    detection: [
      "Inconsistent or unexpected results from the same OS calls",
      "Logs showing rapid create/delete/replace behaviour on critical files",
      "Exploit signatures for known race condition CVEs"
    ],
    impact: [
      "Privilege escalation by swapping files or pointers at the right moment",
      "Bypassing security checks that assume stable state",
      "Data corruption and integrity issues"
    ],
    propagation: [
      "Exploitation of poorly synchronized OS or service operations",
      "Abuse of temporary files or symlink handling in system processes"
    ],
    mitigation: [
      "Fix vulnerable code using proper synchronization primitives",
      "Avoid using predictable temp file paths for privileged operations",
      "Apply patches for known race-condition vulnerabilities"
    ],
    keywords: [
      "race condition exploit",
      "time of check time of use",
      "toc tou vulnerability"
    ]
  },
  {
    id: "dll-hijacking",
    name: "DLL Hijacking",
    category: "os",
    severity: "high",
    description: "DLL hijacking abuses how Windows searches for DLLs when a program loads them. If an attacker can place a malicious DLL with the same name in a directory searched first, the OS will load the attacker’s code instead of the legitimate library.",
    detection: [
      "Unusual DLLs loaded from user-writable directories",
      "New DLLs appearing alongside legitimate executables",
      "EDR alerts for known hijackable DLL patterns"
    ],
    impact: [
      "Execution of malicious code in context of trusted applications",
      "Privilege escalation if the app runs with higher rights",
      "Persistence through hijacked library loading"
    ],
    propagation: [
      "Placing malicious DLLs in application directories",
      "Abusing insecure search order for dynamic libraries"
    ],
    mitigation: [
      "Use absolute paths when loading DLLs",
      "Restrict write permissions on application directories",
      "Enable Safe DLL Search Mode and code signing checks"
    ],
    keywords: [
      "dll hijacking",
      "binary planting",
      "windows dll search order exploit"
    ]
  },
  {
    id: "service-misconfiguration",
    name: "OS Service Misconfiguration Exploit",
    category: "os",
    severity: "high",
    description: "Many OS-level services run with high privileges. Misconfigurations such as writable service binaries, insecure service paths or weak permissions allow attackers to replace or modify what the service runs, leading to privilege escalation.",
    detection: [
      "Services pointing to binaries in writable directories",
      "Spaces in unquoted service paths combined with writable locations",
      "Security scan findings of weak service permissions"
    ],
    impact: [
      "Execution of attacker-controlled code as SYSTEM/root",
      "Persistence through modified services",
      "Full OS compromise"
    ],
    propagation: [
      "Abuse of misconfigured services after initial local access",
      "Running scripts that swap legitimate binaries with malicious ones"
    ],
    mitigation: [
      "Audit and harden service configurations and file permissions",
      "Use security tools to flag unquoted service paths and writable bins",
      "Limit which accounts can install or modify services"
    ],
    keywords: [
      "service misconfiguration exploit",
      "unquoted service path",
      "insecure service permissions"
    ]
  },
  {
    id: "kernel-exploit",
    name: "Kernel Exploit",
    category: "os",
    severity: "critical",
    description: "Kernel exploits target vulnerabilities in the OS kernel or core drivers. Successful exploitation allows running code with the highest possible privileges, fully bypassing OS-level security and isolation.",
    detection: [
      "EDR alerts on exploitation of known kernel CVEs",
      "Unexpected kernel crashes or BSODs",
      "Unsigned or suspicious drivers being loaded"
    ],
    impact: [
      "Full system takeover with root/SYSTEM access",
      "Ability to hide processes, files and network connections",
      "Bypassing sandboxes and many security products"
    ],
    propagation: [
      "Exploiting unpatched kernel vulnerabilities locally or remotely",
      "Loading malicious kernel-mode drivers"
    ],
    mitigation: [
      "Apply kernel and driver patches promptly",
      "Use driver signing enforcement and secure boot",
      "Restrict installation of custom drivers"
    ],
    keywords: [
      "kernel exploit",
      "ring0 exploit",
      "os kernel vulnerability"
    ]
  },
  {
    id: "driver-exploit",
    name: "Vulnerable Driver Exploit",
    category: "os",
    severity: "critical",
    description: "Many third-party drivers expose powerful IOCTL interfaces or unsafe operations. Attackers abuse vulnerable drivers to read/write kernel memory, disable protections or install rootkits.",
    detection: [
      "Loading of outdated or untrusted drivers",
      "EDR warnings about known vulnerable driver hashes",
      "Tools like driver scanners flagging insecure drivers"
    ],
    impact: [
      "Bypass of OS security mechanisms",
      "Privilege escalation to kernel level",
      "Stealthy persistence and rootkit installation"
    ],
    propagation: [
      "Abuse of signed but vulnerable drivers already installed",
      "Loading own malicious driver if allowed"
    ],
    mitigation: [
      "Remove or update vulnerable drivers",
      "Use driver blocklists (e.g., Microsoft recommended blocklist)",
      "Limit driver installation to trusted administrators"
    ],
    keywords: [
      "driver exploit",
      "vulnerable driver",
      "ioctl privilege escalation"
    ]
  },
  {
    id: "registry-persistence",
    name: "Registry Persistence (Windows)",
    category: "os",
    severity: "high",
    description: "Attackers abuse Windows registry keys that control startup behaviour (Run, RunOnce, Services, Image File Execution Options, etc.) to ensure malware runs every time the OS or user logs in.",
    detection: [
      "New or modified Run/RunOnce entries",
      "Suspicious Image File Execution Options debugger keys",
      "Unusual values in service or shell-related registry keys"
    ],
    impact: [
      "Persistent malware that survives reboots",
      "Repeated execution of backdoors or droppers",
      "Difficult remediation if persistence locations are missed"
    ],
    propagation: [
      "Setting registry keys via scripts after initial compromise",
      "Malware modifying registry for auto-start"
    ],
    mitigation: [
      "Baseline and monitor critical registry keys",
      "Use EDR to detect suspicious registry modifications",
      "Harden permissions on sensitive registry locations"
    ],
    keywords: [
      "registry persistence",
      "windows run key",
      "startup registry malware"
    ]
  },
  {
    id: "scheduled-task-persistence",
    name: "Scheduled Task / Cron Persistence",
    category: "os",
    severity: "high",
    description: "Attackers create or modify scheduled tasks (Windows Task Scheduler) or cron jobs (Linux/Unix) to execute malicious payloads periodically or at startup.",
    detection: [
      "New scheduled tasks appearing unexpectedly",
      "Cron entries owned by unusual users or pointing to strange scripts",
      "EDR alerts about persistence techniques using tasks/cron"
    ],
    impact: [
      "Long-term persistence of malware",
      "Automated re-deployment of payloads after cleanup",
      "Repeated exfiltration or scanning tasks"
    ],
    propagation: [
      "Command execution with enough privileges to create tasks/cron jobs",
      "Malware adding persistence as part of installation"
    ],
    mitigation: [
      "Monitor scheduled tasks and cron for unauthorized changes",
      "Restrict who can create or edit system-wide tasks",
      "Use security baselines for task/cron configurations"
    ],
    keywords: [
      "scheduled task persistence",
      "cron persistence",
      "task scheduler attack"
    ]
  },
  {
    id: "bootkit",
    name: "Bootkit Attack",
    category: "os",
    severity: "critical",
    description: "Bootkits infect the boot process (MBR, VBR or bootloader) so they run before the operating system. This allows extremely stealthy persistence and the ability to tamper with OS components as they load.",
    detection: [
      "Changes in bootloader or MBR hashes",
      "Unexpected boot entries in firmware or boot manager",
      "Specialized tools reporting tampered boot sectors"
    ],
    impact: [
      "Stealthy malware that survives OS reinstall",
      "Full control over OS loading process",
      "Ability to hide other malware components"
    ],
    propagation: [
      "Malware with direct disk access modifying boot sectors",
      "Exploitation of insecure boot configurations"
    ],
    mitigation: [
      "Use UEFI with Secure Boot enabled",
      "Monitor boot components and firmware integrity",
      "Rebuild boot records from trusted media if compromised"
    ],
    keywords: [
      "bootkit",
      "boot sector malware",
      "mbr vbr infection"
    ]
  },
  {
    id: "uefi-firmware-attack",
    name: "UEFI / Firmware Attack",
    category: "os",
    severity: "critical",
    description: "UEFI and firmware attacks modify low-level firmware in motherboards or devices. These implants persist below the OS and can re-infect the system even after clean OS installation.",
    detection: [
      "Firmware integrity check failures",
      "Unrecognized firmware modules present",
      "Vendor tools reporting anomalies in UEFI images"
    ],
    impact: [
      "Stealthy, long-term persistence",
      "Bypass of OS-level and disk-level protections",
      "Hard-to-remove implants that require reflashing"
    ],
    propagation: [
      "Exploitation of firmware update mechanisms",
      "Physical access or high-privileged malware writing to firmware"
    ],
    mitigation: [
      "Keep firmware updated and use signed firmware updates",
      "Enable Secure Boot with trusted keys only",
      "Use tools that verify firmware integrity periodically"
    ],
    keywords: [
      "uefi attack",
      "firmware rootkit",
      "bios malware"
    ]
  },
  {
    id: "credential-dumping-os",
    name: "OS Credential Dumping",
    category: "os",
    severity: "critical",
    description: "Credential dumping targets OS components that store or handle passwords and hashes, such as LSASS on Windows or /etc/shadow on Linux, to extract credentials for further compromise.",
    detection: [
      "Tools like Mimikatz or pwdump being executed",
      "Unusual access to LSASS process memory",
      "Access to /etc/shadow or SAM database by non-root/non-admin users"
    ],
    impact: [
      "Theft of many user and admin credentials",
      "Rapid lateral movement across systems",
      "Full domain compromise if domain admin credentials are dumped"
    ],
    propagation: [
      "Running credential dumping tools after gaining local admin/root",
      "Abusing OS APIs or debug privileges to access sensitive memory"
    ],
    mitigation: [
      "Use credential guard / LSASS protection features",
      "Limit who can debug or access sensitive OS processes",
      "Rotate passwords and disable cached credentials where possible"
    ],
    keywords: [
      "credential dumping",
      "lsass dump",
      "mimikatz attack"
    ]
  },
  {
    id: "pass-the-hash",
    name: "Pass-the-Hash Attack",
    category: "os",
    severity: "critical",
    description: "Pass-the-Hash uses stolen password hashes instead of plain-text passwords to authenticate to other systems, especially in Windows/Active Directory environments.",
    detection: [
      "Logins from accounts without interactive password entry",
      "Kerberos or NTLM authentications from unusual hosts",
      "Lateral movement patterns using admin hashes"
    ],
    impact: [
      "Rapid compromise of many machines",
      "Domain-wide admin access",
      "Difficult-to-detect lateral movement"
    ],
    propagation: [
      "Reuse of the same local admin password across many systems",
      "Harvested hashes from one machine used on another"
    ],
    mitigation: [
      "Use unique local admin passwords (LAPS)",
      "Limit credential caching and admin logins on workstations",
      "Monitor for unusual NTLM traffic and lateral movement patterns"
    ],
    keywords: [
      "pass the hash",
      "pth attack",
      "hash reuse authentication"
    ]
  },
  {
    id: "pass-the-ticket",
    name: "Pass-the-Ticket Attack",
    category: "os",
    severity: "critical",
    description: "Pass-the-Ticket abuses stolen Kerberos tickets (TGT/TGS) to impersonate users or services in Active Directory environments without knowing their passwords.",
    detection: [
      "Kerberos tickets used from unexpected hosts",
      "Long-lived or forged golden tickets",
      "SIEM alerts for abnormal ticket usage"
    ],
    impact: [
      "Stealthy impersonation of users or services",
      "Full domain compromise with golden tickets",
      "Lateral movement and data theft without password use"
    ],
    propagation: [
      "Credential dumping of Kerberos tickets from memory",
      "Using Mimikatz or similar tools to forge tickets"
    ],
    mitigation: [
      "Harden domain controllers and protect KRBTGT account",
      "Rotate KRBTGT key after suspected compromise",
      "Monitor Kerberos behaviour and ticket lifetimes"
    ],
    keywords: [
      "pass the ticket",
      "kerberos ticket attack",
      "golden ticket"
    ]
  },
  {
    id: "ransomware-os-locker",
    name: "OS Locker Ransomware",
    category: "os",
    severity: "critical",
    description: "Locker ransomware blocks access to the operating system or login screen without necessarily encrypting files, demanding payment to regain access.",
    detection: [
      "Full-screen ransom notes on login",
      "Blocked task manager or system tools",
      "Unusual processes started at boot"
    ],
    impact: [
      "Loss of access to system until cleaned",
      "Potential loss of data if removal is not done carefully",
      "Operational downtime for users or businesses"
    ],
    propagation: [
      "Malicious installers and trojans",
      "Exploitation of OS vulnerabilities for initial drop"
    ],
    mitigation: [
      "Use safe mode or recovery tools to remove locker malware",
      "Maintain backups and reimage systems if necessary",
      "Harden endpoints and patch OS to prevent initial infection"
    ],
    keywords: [
      "locker ransomware",
      "screen locker",
      "os lock malware"
    ]
  },
  {
    id: "persistence-startup-folder",
    name: "Startup Folder Persistence",
    category: "os",
    severity: "medium",
    description: "On some operating systems, files placed in startup folders execute automatically when the user logs in. Attackers add malicious shortcuts or executables here to maintain persistence.",
    detection: [
      "Unknown files or shortcuts in user or common startup folders",
      "Security tools alerting to new startup entries"
    ],
    impact: [
      "Automatic malware execution at each login",
      "Potential re-infection after partial cleanup"
    ],
    propagation: [
      "Malware copying itself into startup paths",
      "Scripts dropping payloads in startup directories"
    ],
    mitigation: [
      "Monitor and restrict startup folder changes",
      "Educate users to report unknown startup items",
      "Use endpoint protection that inspects autorun locations"
    ],
    keywords: [
      "startup folder persistence",
      "os autorun attack",
      "auto start malware"
    ]
  },
  {
    id: "log-file-wiping",
    name: "Log File Wiping / Tampering",
    category: "os",
    severity: "high",
    description: "After compromising an OS, attackers often clear or modify system logs to hide their traces and delay detection and forensic analysis.",
    detection: [
      "Sudden gaps or missing entries in log files",
      "Log files truncated or reset unexpectedly",
      "Multiple log sources showing conflicting timelines"
    ],
    impact: [
      "Reduced ability to investigate incidents",
      "Difficulty in understanding the full scope of compromise",
      "Delayed detection of ongoing attacks"
    ],
    propagation: [
      "Manual log clearing by attackers with admin/root access",
      "Malware that automatically deletes or corrupts logs"
    ],
    mitigation: [
      "Forward logs to centralized, append-only log servers",
      "Restrict log deletion permissions to a few trusted admins",
      "Monitor for log clearing commands and anomalies"
    ],
    keywords: [
      "log wiping",
      "log tampering",
      "clear event logs attack"
    ]
  },
  {
    id: "named-pipe-abuse",
    name: "Named Pipe Abuse (Windows)",
    category: "os",
    severity: "high",
    description: "Attackers abuse named pipes for stealthy inter-process communication, privilege escalation or lateral movement by impersonating or injecting into trusted processes.",
    detection: [
      "Creation of unusual named pipes not used by normal apps",
      "Security tools flagging suspicious pipe names",
      "Abnormal communication patterns over named pipes"
    ],
    impact: [
      "Hidden C2 channels within the OS",
      "Privilege escalation via impersonation over pipes",
      "Difficult-to-detect malware communications"
    ],
    propagation: [
      "Malware leveraging Windows named pipes instead of network sockets",
      "Exploitation of poorly secured pipe ACLs"
    ],
    mitigation: [
      "Monitor named pipe creation patterns",
      "Restrict access to privileged pipes via proper ACLs",
      "Use EDR that inspects IPC channels"
    ],
    keywords: [
      "named pipe attack",
      "windows pipe abuse",
      "ipc privilege escalation"
    ]
  },
  {
    id: "symlink-attack",
    name: "Symlink Attack",
    category: "os",
    severity: "high",
    description: "Symlink attacks abuse symbolic links to trick privileged processes into acting on unintended files or directories, often leading to overwrites or privilege escalation.",
    detection: [
      "Symlinks in sensitive directories pointing to unexpected targets",
      "Rapid creation and deletion of symlinks in temp or system paths"
    ],
    impact: [
      "Overwriting of critical system files",
      "Privilege escalation if root/SYSTEM processes follow attacker symlinks",
      "Data corruption or configuration hijacking"
    ],
    propagation: [
      "Exploitation of scripts or daemons that operate on predictable paths",
      "Abuse of temporary file handling without secure checks"
    ],
    mitigation: [
      "Avoid following symlinks in privileged code, or verify owners/targets",
      "Use secure temp directories and file handling practices",
      "Apply patches for known symlink issues in OS utilities"
    ],
    keywords: [
      "symlink attack",
      "symbolic link exploit",
      "link privilege escalation"
    ]
  },
  {
    id: "file-permission-misconfig",
    name: "File Permission Misconfiguration Exploit",
    category: "os",
    severity: "high",
    description: "Weak file permissions on executables, scripts, or configuration files allow lower-privileged users to modify resources used by higher-privileged processes, leading to escalation or tampering.",
    detection: [
      "World-writable files in /etc, /usr, Program Files, or system paths",
      "Security scans reporting insecure file ACLs",
      "Unexpected changes in system binaries or configs"
    ],
    impact: [
      "Privilege escalation via modified binaries or configs",
      "Backdoors embedded in legitimate services",
      "System instability and integrity loss"
    ],
    propagation: [
      "Attackers searching for world-writable or group-writable sensitive files",
      "Automation scripts running modified files with elevated privileges"
    ],
    mitigation: [
      "Regularly audit file permissions on critical system paths",
      "Apply least-privilege access on files and directories",
      "Use configuration management tools to enforce correct permissions"
    ],
    keywords: [
      "file permission exploit",
      "world writable system file",
      "insecure acl os"
    ]
  },
  {
    id: "remote-desktop-bruteforce",
    name: "Remote Desktop Brute-Force",
    category: "os",
    severity: "high",
    description: "Attackers attempt many username/password combinations against remote desktop or remote login services (RDP, SSH, VNC) to gain OS access.",
    detection: [
      "Numerous failed login attempts from same or many IPs",
      "Authentication logs showing dictionary-style attempts",
      "Firewall/IDS alerts on brute-force patterns"
    ],
    impact: [
      "Full control of OS if credentials are guessed",
      "Installation of malware and backdoors",
      "Further lateral movement into internal network"
    ],
    propagation: [
      "Scanning internet for exposed RDP/SSH services",
      "Using credential stuffing with leaked passwords"
    ],
    mitigation: [
      "Disable or restrict remote access services",
      "Use MFA and strong passwords",
      "Rate-limit and monitor failed logins and block attackers"
    ],
    keywords: [
      "rdp bruteforce",
      "ssh password guessing",
      "remote login brute force"
    ]
  },
  {
    id: "remote-code-execution-os-service",
    name: "Remote Code Execution via OS Service",
    category: "os",
    severity: "critical",
    description: "RCE vulnerabilities in OS services (like SMB, RDP, RPC, print spooler) allow attackers to run arbitrary code remotely without authentication, as seen in attacks like EternalBlue.",
    detection: [
      "Exploit signatures in IDS/IPS for known RCE CVEs",
      "Unexpected crashes or restarts of OS services",
      "New processes spawned by system services without clear cause"
    ],
    impact: [
      "Immediate remote control of the OS",
      "Rapid worm-like propagation across networks",
      "Deployment of ransomware or botnets"
    ],
    propagation: [
      "Internet or internal scanning for vulnerable OS services",
      "Automated exploit frameworks targeting unpatched machines"
    ],
    mitigation: [
      "Apply security updates for OS services quickly",
      "Block or restrict unnecessary service ports",
      "Use network segmentation to limit blast radius"
    ],
    keywords: [
      "remote code execution service",
      "smb rce",
      "eternalblue style exploit"
    ]
  },
  {
    id: "shellshock",
    name: "Shellshock / Command Injection in Shell",
    category: "os",
    severity: "critical",
    description: "Shellshock-type attacks exploit vulnerabilities in shell interpreters (like Bash) to run arbitrary commands when environment variables or inputs are parsed.",
    detection: [
      "Unexpected shell spawns from network-facing services",
      "Logs showing strange command sequences in CGI or scripts"
    ],
    impact: [
      "Remote command execution on OS",
      "Launching of backdoors and malware",
      "Pivoting deeper into the internal network"
    ],
    propagation: [
      "Exploiting CGI scripts or services that invoke vulnerable shells",
      "Malicious HTTP headers or environment variables"
    ],
    mitigation: [
      "Patch shell interpreters on all systems",
      "Avoid using direct shell calls with untrusted input",
      "Use input validation and parameterized commands"
    ],
    keywords: [
      "shellshock",
      "bash vulnerability",
      "shell command injection"
    ]
  },
  {
    id: "sudo-misuse",
    name: "Sudo Misconfiguration Exploit",
    category: "os",
    severity: "high",
    description: "On Unix-like systems, insecure sudo configurations allow users to run privileged commands or escape to a root shell without proper restrictions.",
    detection: [
      "Sudoers entries with ALL privileges for weak accounts",
      "Ability to run editors or shells with sudo without password",
      "Security audits flagging dangerous sudo rules"
    ],
    impact: [
      "Easy privilege escalation from user to root",
      "Ability to disable security tools or alter logs",
      "Full compromise of system and data"
    ],
    propagation: [
      "Abuse of sudoers rules like NOPASSWD on sensitive binaries",
      "Running commands that can spawn a shell under sudo"
    ],
    mitigation: [
      "Harden sudoers file and remove broad ALL privileges",
      "Require MFA for sudo on critical systems",
      "Regularly audit sudo rules and usage logs"
    ],
    keywords: [
      "sudo misconfiguration",
      "sudo privilege escalation",
      "sudoers exploit"
    ]
  },
  {
    id: "cron-abuse",
    name: "Cron Job Abuse",
    category: "os",
    severity: "high",
    description: "On Linux/Unix systems, attackers abuse cron to run malicious scripts on a schedule or at boot, often with elevated privileges if misconfigured.",
    detection: [
      "New cron entries for root or system accounts",
      "Cron jobs executing from unusual directories",
      "Unexpected scripts executed periodically"
    ],
    impact: [
      "Persistent execution of malware or backdoors",
      "Repeated data exfiltration or scanning",
      "Difficult removal if cron jobs are hidden"
    ],
    propagation: [
      "Adding cron entries after gaining shell access",
      "Abusing writable cron directories or include files"
    ],
    mitigation: [
      "Audit cron entries for all users regularly",
      "Restrict who can create or edit cron jobs",
      "Monitor for suspicious scripts executed via cron"
    ],
    keywords: [
      "cron persistence",
      "cronjob attack",
      "linux scheduled malware"
    ]
  },
  {
    id: "wmi-abuse",
    name: "WMI Abuse (Windows Management Instrumentation)",
    category: "os",
    severity: "high",
    description: "Attackers abuse WMI to execute commands remotely, persist on a system, or collect information. WMI can be used stealthily for lateral movement and scheduled execution.",
    detection: [
      "Unusual WMI process creation events",
      "Remote WMI calls from non-admin or unexpected hosts",
      "EDR alerts related to WMI persistence"
    ],
    impact: [
      "Stealthy remote command execution",
      "Long-term persistence without obvious files",
      "Reconnaissance and data collection"
    ],
    propagation: [
      "Using wmic or PowerShell to issue WMI commands",
      "Creating WMI event subscriptions for persistence"
    ],
    mitigation: [
      "Monitor WMI activity and event subscriptions",
      "Restrict WMI remote access to admin-only",
      "Harden PowerShell and script execution policies"
    ],
    keywords: [
      "wmi persistence",
      "wmi remote command",
      "windows wmi attack"
    ]
  },
  {
    id: "powershell-abuse",
    name: "PowerShell Abuse",
    category: "os",
    severity: "high",
    description: "PowerShell is a powerful Windows administration tool often abused by attackers to download payloads, execute scripts in memory and evade traditional antivirus.",
    detection: [
      "PowerShell executing encoded or obfuscated commands",
      "Scripts running from unusual directories or over the network",
      "Security logs showing suspicious PowerShell event IDs"
    ],
    impact: [
      "Fileless malware execution",
      "Lateral movement and credential theft",
      "Remote administration of compromised machines"
    ],
    propagation: [
      "Phishing leading to PowerShell payloads",
      "Remote PowerShell sessions using stolen credentials"
    ],
    mitigation: [
      "Enable PowerShell script block logging and constrained language mode",
      "Restrict who can run PowerShell and remote PowerShell",
      "Use EDR solutions that monitor PowerShell behavior"
    ],
    keywords: [
      "powershell malware",
      "powershell attack",
      "fileless powershell"
    ]
  },
  {
    id: "registry-runonce-exploit",
    name: "Run/RunOnce Registry Key Exploit",
    category: "os",
    severity: "medium",
    description: "Beyond general registry persistence, attackers specifically target Run and RunOnce keys to execute malware at user login or system startup.",
    detection: [
      "New entries under HKCU/HKLM Run or RunOnce pointing to unknown binaries",
      "Scripts adding or modifying autorun registry keys"
    ],
    impact: [
      "Automatic execution of malicious payload after every reboot/login",
      "Re-establishes backdoors after partial cleanup"
    ],
    propagation: [
      "Malware editing registry autostart keys",
      "Manual attacker changes through regedit or scripts"
    ],
    mitigation: [
      "Monitor critical autorun keys and alert on changes",
      "Remove unauthorized entries via GPO or security tools",
      "Restrict write access to these registry paths"
    ],
    keywords: [
      "run key exploit",
      "runonce registry attack",
      "windows autorun registry"
    ]
  },
  {
    id: "shadow-copy-abuse",
    name: "Shadow Copy Abuse",
    category: "os",
    severity: "high",
    description: "Shadow copies in Windows are used for backup/restore. Attackers abuse them to access previous versions of files (like SAM / SYSTEM) or delete them to sabotage recovery.",
    detection: [
      "Unexpected vssadmin or wmic shadowcopy commands",
      "Shadow copies disappearing without maintenance windows",
      "Security alerts on backup deletion commands"
    ],
    impact: [
      "Theft of sensitive data from previous snapshots",
      "Preventing easy recovery after ransomware",
      "Compromising OS security databases from older copies"
    ],
    propagation: [
      "Executing vssadmin delete or create commands",
      "Scripts using shadow copies to access locked files"
    ],
    mitigation: [
      "Restrict vssadmin and backup-related commands to admins only",
      "Monitor for suspicious shadow copy operations",
      "Use off-host/offline backups not dependent on shadow copies"
    ],
    keywords: [
      "shadow copy attack",
      "vssadmin ransomware",
      "windows snapshot abuse"
    ]
  },
  {
    id: "account-creation-backdoor",
    name: "Backdoor Account Creation",
    category: "os",
    severity: "high",
    description: "Attackers create hidden or seemingly normal OS user accounts and add them to privileged groups to maintain easy access to the system.",
    detection: [
      "New local accounts in administrators or sudo groups",
      "User accounts created outside of standard provisioning processes",
      "Login attempts from rarely used or unknown accounts"
    ],
    impact: [
      "Persistent backdoor access even after malware removal",
      "Ability to log in interactively or via remote services",
      "Privilege escalation using hidden admin accounts"
    ],
    propagation: [
      "Using admin/root access to add new local users",
      "Scripts adding accounts during malware installation"
    ],
    mitigation: [
      "Audit local and domain accounts regularly",
      "Alert on new privileged accounts or group changes",
      "Use just-in-time access instead of static admin accounts"
    ],
    keywords: [
      "backdoor account",
      "hidden admin user",
      "os user creation attack"
    ]
  },
  {
    id: "guest-account-abuse",
    name: "Guest / Default Account Abuse",
    category: "os",
    severity: "medium",
    description: "Default or guest accounts with weak or no passwords can be abused by attackers to gain easy entry into the OS.",
    detection: [
      "Logins from guest or built-in default accounts",
      "Unknown activity from low-privileged accounts that should be disabled"
    ],
    impact: [
      "Initial foothold on systems",
      "Platform for further privilege escalation"
    ],
    propagation: [
      "Scanning for systems with default credentials or enabled guest accounts"
    ],
    mitigation: [
      "Disable guest and unnecessary default accounts",
      "Set strong unique passwords for any required built-in accounts",
      "Monitor login attempts from special accounts"
    ],
    keywords: [
      "guest account abuse",
      "default credentials",
      "built in admin misuse"
    ]
  },
  {
    id: "clipboard-data-theft",
    name: "Clipboard Data Theft",
    category: "os",
    severity: "medium",
    description: "Malware running on the OS can monitor or capture clipboard contents, stealing copied passwords, crypto wallet addresses, or other sensitive data.",
    detection: [
      "Processes repeatedly querying clipboard APIs",
      "Security tools flagging clipboard monitoring behavior"
    ],
    impact: [
      "Theft of passwords and confidential text",
      "Redirecting crypto transactions to attacker’s wallet",
      "Leakage of copy-pasted secrets from secure tools"
    ],
    propagation: [
      "Malware with OS-level access using clipboard APIs",
      "Trojanized utilities that silently watch clipboard activity"
    ],
    mitigation: [
      "Use password managers with autofill instead of copy-paste",
      "Monitor for unusual clipboard API usage",
      "Restrict installation of untrusted software"
    ],
    keywords: [
      "clipboard hijacking",
      "clipboard logger",
      "crypto address replacer"
    ]
  },
  {
    id: "screen-capture-spy",
    name: "Screen Capture Spyware",
    category: "os",
    severity: "high",
    description: "Screen capture spyware periodically takes screenshots of the OS desktop and sends them to the attacker, revealing everything a user sees, including protected apps.",
    detection: [
      "Unknown processes using screen capture APIs frequently",
      "Large image or video files sent out over the network",
      "EDR alerts for screen-capture behavior"
    ],
    impact: [
      "Leakage of sensitive on-screen information",
      "Exposure of documents, chats and even 2FA QR codes",
      "Industrial espionage and privacy invasion"
    ],
    propagation: [
      "Spyware installed via trojans, RATs or malicious installers",
      "Compromised remote management tools misused by attackers"
    ],
    mitigation: [
      "Use EDR that detects screen capture behavior",
      "Restrict remote screen-sharing to approved tools",
      "Keep OS and security software updated to block known spyware"
    ],
    keywords: [
      "screen capture malware",
      "desktop spy",
      "screenshot spyware"
    ]
  },
  {
    id: "file-system-watcher-abuse",
    name: "File System Watcher Abuse",
    category: "os",
    severity: "medium",
    description: "Malware can use OS file system watchers to monitor certain directories (like downloads or document folders) and automatically act on new files, such as stealing or encrypting them.",
    detection: [
      "Unknown processes subscribing to file system events",
      "Scripts reacting instantly to new or changed files"
    ],
    impact: [
      "Automated data theft as soon as files are created",
      "Automated encryption or tampering of key documents"
    ],
    propagation: [
      "Malware installing file watchers on user or shared directories"
    ],
    mitigation: [
      "Monitor for suspicious file watcher registrations",
      "Limit access to sensitive folders and use encryption",
      "Deploy endpoint protection that detects malicious automation"
    ],
    keywords: [
      "file watcher malware",
      "filesystem monitoring abuse",
      "auto data theft"
    ]
  },
  {
    id: "os-level-keylogger",
    name: "OS-Level Keylogger",
    category: "os",
    severity: "high",
    description: "Keyloggers at the OS level hook keyboard APIs or low-level input to capture all keystrokes across applications, stealing passwords, messages and other sensitive data.",
    detection: [
      "Processes attaching to keyboard hooks or input APIs",
      "Unusual modules loaded into many GUI processes",
      "EDR alerts for keylogging behavior"
    ],
    impact: [
      "Theft of credentials across many services",
      "Exposure of private communications",
      "Potential for large-scale account compromise"
    ],
    propagation: [
      "Spyware installed with admin rights or via RATs",
      "Malicious drivers or OS hooks added by attackers"
    ],
    mitigation: [
      "Use endpoint security that detects keyloggers",
      "Restrict installation of untrusted drivers and software",
      "Use MFA so stolen passwords alone are not enough"
    ],
    keywords: [
      "os keylogger",
      "system keylogging",
      "keyboard hook malware"
    ]
  }
];

module.exports = {osAttacks};
