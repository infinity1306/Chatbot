// attacks/mobile.js

const mobileAttacks = [
  {
    id: "android-malware",
    name: "Android Malware Infection",
    category: "mobile",
    severity: "high",
    description: "Malware designed for Android devices installs via APKs, phishing links, or malicious apps to steal data, record keystrokes, or control the device.",
    detection: [
      "Unknown apps in Settings",
      "Heavy battery and data usage",
      "Permissions granted automatically"
    ],
    impact: [
      "Data theft",
      "Remote control of device",
      "Financial fraud"
    ],
    propagation: [
      "Third-party app stores",
      "Fake APK installers",
      "SMS phishing"
    ],
    mitigation: [
      "Install apps only from Play Store",
      "Use mobile antivirus",
      "Check permissions"
    ],
    keywords: ["android malware", "apk virus", "mobile trojan"]
  },

  {
    id: "ios-malware",
    name: "iOS Malware Infection",
    category: "mobile",
    severity: "medium",
    description: "Although more restricted, iOS devices can still be infected through enterprise certificates, jailbreaks, or malicious websites.",
    detection: [
      "Unexpected profile installation",
      "Unknown enterprise apps"
    ],
    impact: [
      "Data leakage",
      "Tracking",
      "Spying"
    ],
    propagation: [
      "Malicious provisioning profiles",
      "Jailbroken devices"
    ],
    mitigation: [
      "Avoid jailbreaking",
      "Remove unknown profiles"
    ],
    keywords: ["ios malware", "enterprise certificate abuse"]
  },

  {
    id: "sms-interception",
    name: "SMS Interception",
    category: "mobile",
    severity: "high",
    description: "Attackers intercept SMS messages, including OTPs, via SIM swap or malicious apps.",
    detection: [
      "SIM not working suddenly",
      "No network from usual SIM"
    ],
    impact: [
      "Bank fraud",
      "Account takeover"
    ],
    propagation: [
      "SIM swap scam",
      "Malicious SMS apps"
    ],
    mitigation: [
      "Use bank apps with push-based verification",
      "Contact carrier immediately"
    ],
    keywords: ["sms hijack", "otp theft", "sim swap"]
  },

  {
    id: "sim-swap",
    name: "SIM Swap Attack",
    category: "mobile",
    severity: "critical",
    description: "Attackers trick telecom providers into issuing a duplicate SIM, allowing them to receive calls and OTPs.",
    detection: [
      "Sudden loss of network",
      "SIM failure"
    ],
    impact: [
      "Full account takeover",
      "Financial theft"
    ],
    propagation: [
      "Social engineering telecom operator"
    ],
    mitigation: [
      "Enable SIM lock",
      "Use app-based MFA"
    ],
    keywords: ["sim swap", "sim hijack"]
  },

  {
    id: "mobile-banking-trojan",
    name: "Mobile Banking Trojan",
    category: "mobile",
    severity: "critical",
    description: "Malicious apps mimic banking interfaces or overlay login screens to steal credentials and intercept OTPs.",
    detection: [
      "Overlay warnings from system",
      "Unknown accessibility services enabled"
    ],
    impact: [
      "Bank account compromise",
      "Money theft"
    ],
    propagation: [
      "Fake banking apps",
      "Phishing SMS"
    ],
    mitigation: [
      "Disable accessibility for unknown apps",
      "Install only official banking apps"
    ],
    keywords: ["banking trojan", "overlay attack"]
  },

  {
    id: "spyware",
    name: "Mobile Spyware",
    category: "mobile",
    severity: "high",
    description: "Spyware monitors calls, messages, location, and microphone activity without user consent.",
    detection: [
      "Permissions enabled without reason",
      "Microphone/camera active"
    ],
    impact: [
      "Privacy invasion",
      "Corporate espionage"
    ],
    propagation: [
      "Stalkerware apps",
      "Remote installation"
    ],
    mitigation: [
      "Scan device",
      "Reset phone"
    ],
    keywords: ["spyware", "stalkerware"]
  },

  {
    id: "keylogger-mobile",
    name: "Mobile Keylogger",
    category: "mobile",
    severity: "high",
    description: "Keyloggers capture keystrokes on mobile devices, including passwords and private chats.",
    detection: [
      "Accessibility services misuse",
      "Unknown keyboard apps"
    ],
    impact: [
      "Credential theft",
      "Identity compromise"
    ],
    propagation: [
      "Keyboard app trojans",
      "Phishing APKs"
    ],
    mitigation: [
      "Disable suspicious keyboards",
      "Check app permissions"
    ],
    keywords: ["keylogger", "mobile keylogger"]
  },

  {
    id: "malicious-keyboard-app",
    name: "Malicious Keyboard App",
    category: "mobile",
    severity: "high",
    description: "Fake keyboard apps steal everything typed including passwords and card numbers.",
    detection: [
      "Keyboard app with excessive permissions"
    ],
    impact: [
      "Password theft",
      "Financial fraud"
    ],
    propagation: ["Fake Play Store listings"],
    mitigation: ["Install trusted keyboards only"],
    keywords: ["keyboard trojan"]
  },

  {
    id: "malicious-update",
    name: "Fake Mobile Update",
    category: "mobile",
    severity: "medium",
    description: "Users are tricked into installing fake system updates which are malware.",
    detection: [
      "Update requests outside system settings"
    ],
    impact: ["Full malware infection"],
    propagation: ["Fake popups"],
    mitigation: ["Only update via system settings"],
    keywords: ["fake update", "update trojan"]
  },

  {
    id: "rooting-exploit",
    name: "Rooting Exploit",
    category: "mobile",
    severity: "high",
    description: "Attackers root the device using known exploits, bypassing all restrictions.",
    detection: [
      "Device rooted indicator apps",
      "Security warnings"
    ],
    impact: [
      "Backdoor installation",
      "Complete device takeover"
    ],
    propagation: ["Jailbreak/root tools"],
    mitigation: ["Avoid unknown APKs"],
    keywords: ["android root exploit", "mobile jailbreak"]
  },

  {
    id: "bluetooth-hijacking",
    name: "Bluetooth Hijacking",
    category: "mobile",
    severity: "medium",
    description: "Attackers exploit insecure Bluetooth connections to access files or inject malware.",
    detection: [
      "Unknown Bluetooth pair requests"
    ],
    impact: ["Data theft"],
    propagation: ["Public Bluetooth"],
    mitigation: ["Disable Bluetooth when unused"],
    keywords: ["bluetooth hack", "blueborne"]
  },

  {
    id: "nfc-skimming",
    name: "NFC Payment Skimming",
    category: "mobile",
    severity: "medium",
    description: "Attackers skim payment card data or trigger payments using malicious NFC devices.",
    detection: [
      "Unexpected NFC activity"
    ],
    impact: ["Financial fraud"],
    propagation: ["Close proximity attack"],
    mitigation: ["Disable NFC"],
    keywords: ["nfc scam", "tap payment theft"]
  },

  {
    id: "mobile-ransomware",
    name: "Mobile Ransomware",
    category: "mobile",
    severity: "critical",
    description: "Ransomware encrypts files on mobile devices and locks the screen requesting payment.",
    detection: [
      "Files renamed suddenly",
      "Device locked with ransom note"
    ],
    impact: [
      "Loss of all phone data",
      "Financial extortion"
    ],
    propagation: [
      "Malicious APK",
      "Drive-by downloads"
    ],
    mitigation: [
      "Safe mode cleanup",
      "Restore phone"
    ],
    keywords: ["android ransomware", "mobile locker"]
  },

  {
    id: "app-permission-abuse",
    name: "Mobile App Permission Abuse",
    category: "mobile",
    severity: "high",
    description: "Legitimate apps request unnecessary permissions to steal data or spy on users.",
    detection: [
      "Permissions unrelated to app function"
    ],
    impact: [
      "Privacy invasion",
      "Data theft"
    ],
    propagation: ["Malicious apps"],
    mitigation: ["Review permissions"],
    keywords: ["permission abuse"]
  },

  {
    id: "malicious-sdk",
    name: "Malicious Third-Party SDK",
    category: "mobile",
    severity: "high",
    description: "Malicious SDKs included in legitimate apps collect user data or show scam ads.",
    detection: [
      "Sudden malicious ads",
      "Traffic to known bad servers"
    ],
    impact: ["Data collection"],
    propagation: ["Compromised developers"],
    mitigation: ["Audit SDKs"],
    keywords: ["sdk malware"]
  },

  {
    id: "clipboard-hijack-mobile",
    name: "Clipboard Hijacking",
    category: "mobile",
    severity: "high",
    description: "Malware replaces copied data such as crypto wallet addresses or passwords.",
    detection: [
      "Clipboard changes immediately after copying"
    ],
    impact: [
      "Crypto theft",
      "Data loss"
    ],
    propagation: ["Clipboard access apps"],
    mitigation: ["Disable clipboard sharing"],
    keywords: ["clipboard hijack", "mobile crypto theft"]
  },

  {
    id: "screen-recording-malware",
    name: "Screen Recording Malware",
    category: "mobile",
    severity: "high",
    description: "Malware secretly records screen activity to steal sensitive on-screen data.",
    detection: [
      "Unusual screen recording permission"
    ],
    impact: ["Data exposure"],
    propagation: ["Malicious apps"],
    mitigation: ["Check screen-record permissions"],
    keywords: ["screen recorder malware"]
  },

  {
    id: "camera-microphone-spy",
    name: "Camera & Microphone Spyware",
    category: "mobile",
    severity: "critical",
    description: "Malware activates camera/mic without user knowing.",
    detection: ["Indicators showing mic/camera active"],
    impact: ["Privacy breach"],
    propagation: ["Trojans"],
    mitigation: ["Disable camera permissions"],
    keywords: ["spy cam", "microphone spyware"]
  },

  {
    id: "wifi-spoofing-mobile",
    name: "Fake WiFi Access Point Attack",
    category: "mobile",
    severity: "high",
    description: "Attackers create fake WiFi hotspots to intercept mobile traffic.",
    detection: ["Duplicate SSIDs"],
    impact: ["Credential theft"],
    propagation: ["Evil Twin hotspots"],
    mitigation: ["Use VPN"],
    keywords: ["wifi spoofing", "evil twin mobile"]
  },

  {
    id: "rogue-app-store",
    name: "Rogue App Store Attack",
    category: "mobile",
    severity: "high",
    description: "Users are tricked into installing apps from third-party stores that host malware.",
    detection: ["Unknown app store installed"],
    impact: ["Mass malware infection"],
    propagation: ["APK downloads"],
    mitigation: ["Disable unknown sources"],
    keywords: ["rogue store", "apk malware"]
  },

  {
    id: "mobile-adware",
    name: "Mobile Adware",
    category: "mobile",
    severity: "low",
    description: "Adware shows intrusive ads and collects user data.",
    detection: ["Excess ads", "Slow phone"],
    impact: ["Annoyance", "Data harvesting"],
    propagation: ["Free apps"],
    mitigation: ["Uninstall suspicious apps"],
    keywords: ["adware", "mobile ads"]
  },

  {
    id: "credential-harvesting-app",
    name: "Fake Login App",
    category: "mobile",
    severity: "high",
    description: "Apps that mimic real apps to collect login credentials.",
    detection: ["Suspicious layout differences"],
    impact: ["Account takeover"],
    propagation: ["Phishing APK"],
    mitigation: ["Install from official app store"],
    keywords: ["fake login", "credential harvest mobile"]
  },

  {
    id: "mobile-dos",
    name: "Mobile DoS Attack",
    category: "mobile",
    severity: "medium",
    description: "Overloads a device with notifications, SMS, or calls to freeze or crash it.",
    detection: ["Flood of messages"],
    impact: ["Device unusable"],
    propagation: ["Botnets"],
    mitigation: ["Block senders", "Enable spam filters"],
    keywords: ["mobile dos", "sms flooding"]
  },

  {
    id: "mobile-botnet",
    name: "Mobile Botnet Infection",
    category: "mobile",
    severity: "critical",
    description: "Compromised devices join a botnet for DDoS, spam, or click fraud.",
    detection: ["Unknown background processes"],
    impact: ["Device slowdown", "Remote command execution"],
    propagation: ["Malicious apps"],
    mitigation: ["Factory reset"],
    keywords: ["mobile botnet"]
  },

  {
    id: "malicious-browser-extension",
    name: "Mobile Browser Extension Attack",
    category: "mobile",
    severity: "medium",
    description: "Malicious browser extensions steal data or redirect traffic.",
    detection: ["New suspicious extensions"],
    impact: ["Tracking", "Credential theft"],
    propagation: ["Infected browser stores"],
    mitigation: ["Remove extensions"],
    keywords: ["browser extension malware"]
  },

  {
    id: "rootkit-mobile",
    name: "Mobile Rootkit",
    category: "mobile",
    severity: "critical",
    description: "Rootkits hide malicious processes using root access.",
    detection: ["Hiding apps in settings"],
    impact: ["Permanent compromise"],
    propagation: ["Root exploits"],
    mitigation: ["Reflash device"],
    keywords: ["mobile rootkit"]
  },

  {
    id: "mobile-crypto-malware",
    name: "Crypto Mining Malware (Mobile)",
    category: "mobile",
    severity: "medium",
    description: "Uses device CPU/GPU for illegal mining.",
    detection: ["Overheating", "Battery drain"],
    impact: ["Device damage"],
    propagation: ["Malicious apps"],
    mitigation: ["Remove apps", "Reset device"],
    keywords: ["mobile crypto miner"]
  },

  {
    id: "mobile-rat",
    name: "Mobile Remote Access Trojan (RAT)",
    category: "mobile",
    severity: "critical",
    description: "Gives attacker full remote control of device.",
    detection: ["Unknown remote services"],
    impact: ["Full compromise"],
    propagation: ["Phishing APK"],
    mitigation: ["Factory reset"],
    keywords: ["mobile rat", "remote control virus"]
  },

  {
    id: "browser-hijack-mobile",
    name: "Mobile Browser Hijacking",
    category: "mobile",
    severity: "medium",
    description: "Browser redirects to malicious pages automatically.",
    detection: ["Unwanted redirects"],
    impact: ["Phishing", "Malware"],
    propagation: ["Adware apps"],
    mitigation: ["Clear data"],
    keywords: ["browser hijack", "mobile redirect"]
  },

  {
    id: "malicious-notification",
    name: "Malicious Push Notification Attack",
    category: "mobile",
    severity: "medium",
    description: "Fake notifications mimic real apps to steal info.",
    detection: ["Unknown notification sources"],
    impact: ["Phishing"],
    propagation: ["Compromised apps"],
    mitigation: ["Disable notifications"],
    keywords: ["fake notification"]
  },

  {
    id: "location-spy",
    name: "Location Tracking Spyware",
    category: "mobile",
    severity: "medium",
    description: "Spyware tracks user location in real-time.",
    detection: ["GPS enabled by unknown apps"],
    impact: ["Privacy invasion"],
    propagation: ["Spyware apps"],
    mitigation: ["Revoke GPS permission"],
    keywords: ["location spy"]
  },

  {
    id: "malicious-charging-station",
    name: "Juice Jacking",
    category: "mobile",
    severity: "high",
    description: "Attackers compromise public charging stations to steal data when devices are plugged in.",
    detection: ["Unexpected data prompts"],
    impact: ["Data theft"],
    propagation: ["Infected charging ports"],
    mitigation: ["Use charge-only cables"],
    keywords: ["juice jacking"]
  }
];

module.exports = {mobileAttacks};
