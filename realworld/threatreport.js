const threatReports = [

/* ============================================================
   FULL REPORTS (5)
   ============================================================ */

{
  id: "threat_lockbit_2024",
  name: "LockBit Ransomware",
  type: "ransomware",
  actor: "LockBit Group",
  description: "LockBit is a major ransomware-as-a-service group using double extortion, data leaks, and automated lateral movement.",
  mitre: ["T1486", "T1059", "T1569", "T1071", "T1087"],
  iocs: { hashes:["f3d1e3cb4fa1e1d2e09a9b5a7d8cd999"], ips:["185.198.57.207"], domains:["lockbit-support.xyz"] },
  ttps: ["LSASS dump", "C2 over HTTPS", "Shadow copy deletion"],
  detection: ["Detect bulk encryption", "PowerShell chain detection"],
  prevention: ["EDR protection", "MFA everywhere"],
  references: ["mitre_t1486","cisa_advisories"]
},

{
  id: "threat_blackcat_alphv",
  name: "BlackCat / ALPHV",
  type: "ransomware",
  actor: "ALPHV",
  description: "Rust-based ransomware targeting large enterprises with high-speed encryption and Rclone exfiltration.",
  mitre: ["T1486", "T1059", "T1027"],
  iocs: { ips:["185.225.73.244"], domains:["alphv-support.me"] },
  ttps: ["Rclone exfiltration", "Obfuscated PowerShell"],
  detection: ["Detect Rclone children"],
  prevention: ["PowerShell restrictions"],
  references: ["mitre_t1486"]
},

{
  id: "threat_apt29",
  name: "APT29 / Cozy Bear",
  type: "nation-state",
  actor: "Russian Intelligence",
  description: "Elite Russian APT responsible for SolarWinds and multiple espionage campaigns.",
  mitre: ["T1071", "T1566", "T1027"],
  iocs: { domains:["cloudsync-secure.com"] },
  ttps: ["DLL injection", "Kerberos abuse"],
  detection: ["Detect abnormal DLL loads"],
  prevention: ["MFA hardening"],
  references: ["cisa_advisories"]
},

{
  id: "threat_moveit_clop",
  name: "MOVEit Zero-Day (Cl0p)",
  type: "vulnerability-exploitation",
  actor: "Cl0p",
  description: "A critical SQLi exploited by Cl0p to steal data from 1000+ orgs.",
  mitre: ["T1190"],
  iocs: { ips:["89.249.49.82"] },
  ttps: ["Zero-day SQLi", "Bulk exfiltration"],
  detection: ["Monitor SQL anomalies"],
  prevention: ["Patch MOVEit"],
  references: ["owasp_sqli"]
},

{
  id: "threat_solarwinds",
  name: "SolarWinds SUNBURST",
  type: "supply-chain",
  actor: "APT29",
  description: "Trojanized Orion update delivered backdoors to 18,000+ organizations.",
  mitre: ["T1071", "T1195"],
  iocs: { domains:["avsvmcloud.com"] },
  ttps: ["Supply chain compromise"],
  detection: ["Orion DLL monitoring"],
  prevention: ["CI/CD security"],
  references: ["cisa_advisories"]
},

/* ============================================================
   MEDIUM REPORTS (45) — Lightweight, optimized
   ============================================================ */

/* 6 */
{
  id: "threat_apt28",
  name: "APT28 (Fancy Bear)",
  type: "nation-state",
  actor: "Russian GRU",
  description: "High-profile espionage group responsible for DNC breach and NATO attacks.",
  mitre: ["T1566", "T1059"], iocs:{}, ttps:["Spear phishing"], detection:["Email anomaly detection"], prevention:["MFA"]
},

/* 7 */
{
  id: "threat_apt41",
  name: "APT41 (Double Dragon)",
  type: "nation-state",
  actor: "Chinese MSS",
  description: "Dual espionage + cybercrime group known for supply-chain compromises.",
  mitre:["T1195"], iocs:{}, ttps:["Software supply chain"], detection:["Monitor build servers"], prevention:["Code signing"]
},

/* 8 */
{
  id: "threat_apt1",
  name: "APT1",
  type: "nation-state",
  actor: "China",
  description: "Unit 61398, responsible for long-term industrial espionage.",
  mitre:["T1078"], detection:["Account misuse detection"], prevention:["Password rotation"]
},

/* 9 */
{
  id: "threat_apt10",
  name: "APT10 (Stone Panda)",
  type: "nation-state",
  actor: "China",
  description: "Targets aerospace, defense, and tech organizations globally.",
  mitre:["T1105"], detection:["Outbound C2 monitoring"], prevention:["Firewall filtering"]
},

/* 10 */
{
  id: "threat_apt32",
  name: "APT32 (OceanLotus)",
  type: "nation-state",
  actor: "Vietnam",
  description: "Spear-phishing and backdoors targeting SE Asia governments.",
  mitre:["T1566"], detection:["Phishing detection"], prevention:["Email security"]
},

/* 11 */
{
  id: "threat_lazarus",
  name: "Lazarus Group",
  type: "nation-state",
  actor: "North Korea",
  description: "Responsible for WannaCry and cryptocurrency attacks.",
  mitre:["T1486"], detection:["Worm detection"], prevention:["Patch SMB"]
},

/* 12 */
{
  id: "threat_fin7",
  name: "FIN7",
  type: "cybercrime-group",
  actor: "FIN7",
  description: "POS malware, financial breaches, and large-scale fraud.",
  mitre:["T1059"], detection:["POS memory scanning"], prevention:["Network segmentation"]
},

/* 13 */
{
  id: "threat_fin4",
  name: "FIN4",
  type: "cybercrime-group",
  actor: "FIN4",
  description: "Targets financial firms for insider information and stock manipulation.",
  mitre:["T1204"], detection:["Document macro alerts"], prevention:["Disable macros"]
},

/* 14 */
{
  id: "threat_darkside",
  name: "DarkSide",
  type: "ransomware",
  actor: "DarkSide Group",
  description: "Responsible for Colonial Pipeline attack.",
  mitre:["T1486"], detection:["Mass encryption"], prevention:["EDR blocking"]
},

/* 15 */
{
  id: "threat_revil",
  name: "REvil / Sodinokibi",
  type: "ransomware",
  actor: "Unknown",
  description: "High-profile ransomware group using exploit kits.",
  mitre:["T1486"], detection:["Encryption patterns"], prevention:["Offline backups"]
},

/* 16 */
{
  id: "threat_conti",
  name: "Conti",
  type: "ransomware",
  actor: "Conti Cartel",
  description: "Huge RaaS operation targeting critical infrastructure.",
  mitre:["T1059"], detection:["PowerShell abuse"], prevention:["Disable PS v2"]
},

/* 17 */
{
  id: "threat_ragnarlocker",
  name: "Ragnar Locker",
  type: "ransomware",
  actor: "Ragnar Group",
  description: "Uses virtual machines to evade detection.",
  mitre:["T1564"], detection:["VM creation"], prevention:["Monitor hypervisors"]
},

/* 18 */
{
  id: "threat_clop",
  name: "Cl0p",
  type: "ransomware",
  actor: "Cl0p Gang",
  description: "Known for exploiting zero-days like MOVEit.",
  mitre:["T1190"], detection:["Zero-day exploitation detection"], prevention:["Patch cycles"]
},

/* 19 */
{
  id: "threat_hive",
  name: "Hive",
  type: "ransomware",
  actor: "Hive",
  description: "Targets healthcare and public services.",
  mitre:["T1486"], detection:["File encryption detection"], prevention:["Access control"]
},

/* 20 */
{
  id: "threat_medusalocker",
  name: "MedusaLocker",
  type: "ransomware",
  actor: "Unknown",
  description: "RDP brute-force + ransomware.",
  mitre:["T1110"], detection:["Login failures"], prevention:["Lockout policies"]
},

/* ... CONTINUE UNTIL WE REACH 50 ... */

{
  id: "threat_zeus",
  name: "ZeuS / Zbot",
  type: "malware",
  actor: "Unknown",
  description: "Banking trojan stealing credentials.",
  mitre:["T1056"], detection:["Keylogging patterns"], prevention:["Anti-keylogger"]
},

{
  id: "threat_emotet",
  name: "Emotet",
  type: "malware",
  actor: "Emotet Group",
  description: "Modular botnet spreading via phishing.",
  mitre:["T1204"], detection:["Macro abuse"], prevention:["Disable macros"]
},

{
  id: "threat_trickbot",
  name: "TrickBot",
  type: "malware",
  actor: "Wizard Spider",
  description: "Banking trojan used for ransomware delivery.",
  mitre:["T1059"], detection:["Suspicious modules"], prevention:["Network segmentation"]
},

{
  id: "threat_qakbot",
  name: "QakBot",
  type: "malware",
  actor: "QBot Group",
  description: "Persistent banking trojan and loader.",
  mitre:["T1059"], detection:["Process injection"], prevention:["EDR"]
},

{
  id: "threat_redline",
  name: "RedLine Stealer",
  type: "malware",
  actor: "Cybercrime",
  description: "Credential stealer sold on underground markets.",
  mitre:["T1056"], detection:["Credential dump"], prevention:["Browser hardening"]
},

{
  id: "threat_mirai",
  name: "Mirai Botnet",
  type: "botnet",
  actor: "Cybercrime",
  description: "IoT botnet using default passwords to infect devices.",
  mitre:["T1110"], detection:["IoT login brute force"], prevention:["Password changes"]
},

{
  id: "threat_icedid",
  name: "IcedID",
  type: "malware",
  actor: "Cybercrime",
  description: "Banking trojan and ransomware loader.",
  mitre:["T1059"], detection:["Process injection"], prevention:["Email filtering"]
},

{
  id: "threat_hancitor",
  name: "Hancitor",
  type: "malware",
  actor: "Cybercrime",
  description: "Dropper used for delivering ransomware.",
  mitre:["T1204"], detection:["Document macro"], prevention:["Disable VBA"]
},

{
  id: "threat_ursnif",
  name: "Ursnif",
  type: "malware",
  actor: "Cybercrime",
  description: "Credential-stealing trojan targeting banking sites.",
  mitre:["T1056"], detection:["Keylogging detection"], prevention:["MFA"]
},

{
  id: "threat_bazarloader",
  name: "BazarLoader",
  type: "malware",
  actor: "Wizard Spider",
  description: "Loader used by Conti ransomware.",
  mitre:["T1059"], detection:["Suspicious scripts"], prevention:["Application control"]
},

{
  id: "threat_formbook",
  name: "FormBook",
  type: "malware",
  actor: "Cybercrime",
  description: "Stealer targeting passwords and browser data.",
  mitre:["T1056"], detection:["Credential harvesting"], prevention:["Antivirus"]
},

{
  id: "threat_smokeloader",
  name: "SmokeLoader",
  type: "loader",
  actor: "Cybercrime",
  description: "Malware loader sold on darknet.",
  mitre:["T1059"], detection:["Suspicious downloads"], prevention:["Firewall rules"]
},

{
  id: "threat_agenttesla",
  name: "Agent Tesla",
  type: "stealer",
  actor: "Cybercrime",
  description: "Keylogger and RAT distributed via phishing.",
  mitre:["T1056"], detection:["Keylogging behavior"], prevention:["Email security"]
},

{
  id: "threat_ratsnake",
  name: "RATSnake",
  type: "rat",
  actor: "Unknown",
  description: "Remote access trojan with screen capture capability.",
  mitre:["T1059"], detection:["Unknown remote tools"], prevention:["Application whitelist"]
},

{
  id: "threat_nanocore",
  name: "NanoCore RAT",
  type: "rat",
  actor: "Cybercrime",
  description: "Popular RAT used by low-skill attackers.",
  mitre:["T1059"], detection:["Process injection"], prevention:["EDR"]
},

{
  id: "threat_darkcomet",
  name: "DarkComet RAT",
  type: "rat",
  actor: "Unknown",
  description: "Old but active RAT used in surveillance.",
  mitre:["T1056"], detection:["Keylogging"], prevention:["Antivirus"]
},

{
  id: "threat_remcos",
  name: "Remcos RAT",
  type: "rat",
  actor: "Cybercrime",
  description: "Commercial RAT used for remote control.",
  mitre:["T1059"], detection:["Suspicious TCP"], prevention:["Firewall"]
},

{
  id: "threat_ghostrat",
  name: "Gh0st RAT",
  type: "rat",
  actor: "Unknown",
  description: "Remote access trojan used by multiple APT groups.",
  mitre:["T1059"], detection:["C2 detection"], prevention:["Network segmentation"]
},

{
  id: "threat_gozi",
  name: "Gozi",
  type: "malware",
  actor: "Cybercrime",
  description: "Banking trojan using advanced persistence.",
  mitre:["T1056"], detection:["Browser injection"], prevention:["Browser security"]
},

{
  id: "threat_apt33",
  name: "APT33",
  type: "nation-state",
  actor: "Iran",
  description: "Focuses on energy, aerospace, and government espionage.",
  mitre:["T1105"], detection:["Suspicious outbound"], prevention:["Firewall rules"]
},

{
  id: "threat_apt34",
  name: "APT34",
  type: "nation-state",
  actor: "Iran",
  description: "Targets energy sector in Middle East.",
  mitre:["T1566"], detection:["Phishing"], prevention:["Email filtering"]
},

{
  id: "threat_apt37",
  name: "APT37",
  type: "nation-state",
  actor: "North Korea",
  description: "Espionage group targeting South Korea.",
  mitre:["T1059"], detection:["LOLBins"], prevention:["Patch Windows"]
},

{
  id: "threat_apt38",
  name: "APT38",
  type: "nation-state",
  actor: "North Korea",
  description: "Financial heists of SWIFT network.",
  mitre:["T1078"], detection:["Account misuse"], prevention:["MFA"]
},

{
  id: "threat_apt40",
  name: "APT40",
  type: "nation-state",
  actor: "China",
  description: "Maritime and naval intelligence operations.",
  mitre:["T1190"], detection:["Exploit detection"], prevention:["Patch systems"]
},

{
  id: "threat_apt41_china",
  name: "APT41 (China Ops)",
  type: "nation-state",
  actor: "China",
  description: "Tech supply chain compromises.",
  mitre:["T1195"], detection:["CI/CD logs"], prevention:["Build hardening"]
},

{
  id: "threat_ta505",
  name: "TA505",
  type: "cybercrime",
  actor: "TA505",
  description: "Mass phishing and malware campaigns including Dridex.",
  mitre:["T1204"], detection:["Email threat detection"], prevention:["Disable macros"]
},

{
  id: "threat_dridex",
  name: "Dridex",
  type: "banking-trojan",
  actor: "Evil Corp",
  description: "Banking trojan spreading with macros.",
  mitre:["T1204"], detection:["Suspicious Office docs"], prevention:["Macro disable"]
},

{
  id: "threat_bluenoroff",
  name: "BlueNoroff",
  type: "nation-state",
  actor: "North Korea",
  description: "Crypto-targeting sub-group of Lazarus.",
  mitre:["T1059"], detection:["Crypto wallet anomalies"], prevention:["Cold storage"]
},

{
  id: "threat_mudwater",
  name: "MuddyWater",
  type: "APT",
  actor: "Iran",
  description: "PowerShell-based espionage attacks.",
  mitre:["T1059"], detection:["PS logging"], prevention:["PS restrictions"]
},

{
  id: "threat_sidewinder",
  name: "Sidewinder APT",
  type: "nation-state",
  actor: "Unknown",
  description: "Targets South Asian military orgs.",
  mitre:["T1566"], detection:["Malicious attachments"], prevention:["Email controls"]
},

{
  id: "threat_dragonok",
  name: "DragonOK",
  type: "APT",
  actor: "China",
  description: "Targets Japanese and Taiwanese industries.",
  mitre:["T1105"], detection:["C2 detection"], prevention:["Firewall policies"]
},

{
  id: "threat_patchwork",
  name: "Patchwork APT",
  type: "nation-state",
  actor: "India (suspected)",
  description: "Targets Pakistani military orgs.",
  mitre:["T1566"], detection:["Phishing monitoring"], prevention:["Security training"]
},

{
  id: "threat_kimsuky",
  name: "Kimsuky APT",
  type: "nation-state",
  actor: "North Korea",
  description: "Espionage targeting diplomats and researchers.",
  mitre:["T1056"], detection:["Credential theft"], prevention:["MFA"]
},

{
  id: "threat_nimblemamba",
  name: "NimbleMamba",
  type: "malware",
  actor: "Unknown",
  description: "Stealth spyware using .NET loaders.",
  mitre:["T1059"], detection:["Unusual DLL loads"], prevention:["EDR"]
},

{
  id: "threat_cerber",
  name: "Cerber Ransomware",
  type: "ransomware",
  actor: "Cerber",
  description: "Ransomware spread via phishing campaigns.",
  mitre:["T1486"], detection:["Mass file rename"], prevention:["Email filtering"]
},

{
  id: "threat_glupteba",
  name: "Glupteba",
  type: "botnet",
  actor: "Cybercrime",
  description: "Botnet using blockchain for C2 fallback.",
  mitre:["T1105"], detection:["C2 anomalies"], prevention:["Network monitoring"]
}

];

module.exports = { threatReports };
 