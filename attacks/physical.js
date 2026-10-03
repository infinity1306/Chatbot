// attacks/physical.js

const physicalAttacks = [
  {
    id: "tailgating",
    name: "Tailgating (Piggybacking)",
    category: "physical",
    severity: "high",
    description: "An unauthorized person follows an authorized employee into a secure building or restricted area without showing ID or authentication.",
    detection: [
      "Security cameras showing multiple entries for one authentication",
      "Unrecognized faces entering behind employees"
    ],
    impact: [
      "Unauthorized access to servers",
      "Internal theft or sabotage"
    ],
    propagation: [
      "Employees holding doors open",
      "Poor entry monitoring"
    ],
    mitigation: [
      "Enforce badge checks",
      "Install anti-tailgating turnstiles"
    ],
    keywords: ["tailgating", "physical intrusion", "piggybacking"]
  },

  {
    id: "dumpster-diving",
    name: "Dumpster Diving",
    category: "physical",
    severity: "medium",
    description: "Attackers search through company trash to find sensitive documents, passwords, hardware, or internal notes.",
    detection: [
      "Trash found rummaged",
      "Missing shredded documents"
    ],
    impact: [
      "Data leakage",
      "Credential theft",
      "Reconnaissance information"
    ],
    propagation: [
      "Throwing sensitive papers in trash",
      "Poor waste management"
    ],
    mitigation: [
      "Use cross-cut shredders",
      "Secure disposal bins"
    ],
    keywords: ["dumpster diving", "trash hacking"]
  },

  {
    id: "hardware-theft",
    name: "Hardware Theft",
    category: "physical",
    severity: "critical",
    description: "Attackers steal laptops, external drives, servers, or mobile devices to extract sensitive data.",
    detection: [
      "Missing inventory",
      "Unauthorized removal alerts"
    ],
    impact: [
      "Full data theft",
      "Credential compromise",
      "Corporate espionage"
    ],
    propagation: [
      "Weak physical security",
      "Unattended devices"
    ],
    mitigation: [
      "CCTV monitoring",
      "Device locks",
      "Full-disk encryption"
    ],
    keywords: ["device theft", "hardware hijack"]
  },

  {
    id: "lockpicking",
    name: "Lockpicking or Door Bypass",
    category: "physical",
    severity: "high",
    description: "Attackers use lockpicking tools, bump keys, or magnetic devices to bypass physical locks.",
    detection: [
      "Scratches around locks",
      "Logs showing unauthorized access times"
    ],
    impact: [
      "Room/server access",
      "Equipment theft"
    ],
    propagation: [
      "Weak locks",
      "No surveillance"
    ],
    mitigation: [
      "Use smart locks",
      "Use anti-bump locks"
    ],
    keywords: ["lock picking", "door bypass"]
  },

  {
    id: "cctv-blinding",
    name: "CCTV Blinding Attack",
    category: "physical",
    severity: "medium",
    description: "Attackers use lasers, bright lights, or tape to block or disable CCTV cameras.",
    detection: [
      "Camera feed distortion",
      "Sudden black-screen moments"
    ],
    impact: [
      "Physical intrusion without evidence"
    ],
    propagation: [
      "Unprotected camera positions"
    ],
    mitigation: [
      "Use tamper-proof cameras",
      "Install multiple angles"
    ],
    keywords: ["cctv attack", "camera blinding"]
  },

  {
    id: "fake-id-access",
    name: "Fake ID Access",
    category: "physical",
    severity: "high",
    description: "Attackers use forged ID cards or duplicated RFID cards to enter restricted locations.",
    detection: [
      "Mismatch between ID photo and person",
      "Badge duplication alerts"
    ],
    impact: ["Unauthorized access"],
    propagation: ["RFID cloning kits"],
    mitigation: ["Multi-factor physical authentication"],
    keywords: ["fake id", "badge cloning"]
  },

  {
    id: "rfid-skimming",
    name: "RFID Skimming",
    category: "physical",
    severity: "high",
    description: "Attackers clone RFID-based access cards using skimmers placed near victims.",
    detection: [
      "Unauthorized RFID writes",
      "Skimming device found near entrance"
    ],
    impact: ["Cloned access cards"],
    propagation: ["RFID reader proximity"],
    mitigation: ["Use encrypted RFID tags"],
    keywords: ["rfid skim", "badge clone"]
  },

  {
    id: "usb-drop-attack",
    name: "Malicious USB Drop Attack",
    category: "physical",
    severity: "critical",
    description: "Attackers drop infected USB drives hoping employees will pick them up and plug them into systems.",
    detection: ["Unknown USB devices plugged in"],
    impact: ["Malware deployment", "Data theft"],
    propagation: ["Human curiosity"],
    mitigation: ["Disable USB ports"],
    keywords: ["usb drop", "infected drive"]
  },

  {
    id: "shoulder-surfing-physical",
    name: "Physical Shoulder Surfing",
    category: "physical",
    severity: "medium",
    description: "Attackers observe PINs or passwords by looking over the victim’s shoulder.",
    detection: ["Suspicious persons near secure areas"],
    impact: ["Credential theft"],
    propagation: ["Crowded environments"],
    mitigation: ["Use privacy screens"],
    keywords: ["shoulder surfing", "visual hacking"]
  },

  {
    id: "keycard-theft",
    name: "Keycard Theft",
    category: "physical",
    severity: "high",
    description: "Attackers steal access cards to enter secure areas.",
    detection: ["Access using stolen credentials"],
    impact: ["Full physical access"],
    propagation: ["Lost or stolen cards"],
    mitigation: ["Immediate card deactivation"],
    keywords: ["keycard theft", "stolen badge"]
  },

  {
    id: "server-room-intrusion",
    name: "Server Room Intrusion",
    category: "physical",
    severity: "critical",
    description: "Unauthorized access to data center or server room to steal, damage, or tamper with systems.",
    detection: ["Door alarms", "Motion sensors"],
    impact: ["Data destruction"],
    propagation: ["Weak authentication"],
    mitigation: ["Biometric access only"],
    keywords: ["server intrusion", "datacenter breach"]
  },

  {
    id: "hardware-keylogger-usb",
    name: "Hardware USB Keylogger",
    category: "physical",
    severity: "high",
    description: "Attackers attach USB keyloggers between keyboard and computer to silently record keystrokes.",
    detection: ["Unknown USB device"],    
    impact: ["Credential theft"],
    propagation: ["Physical access required"],
    mitigation: ["Regular desk audits"],
    keywords: ["hardware keylogger", "usb keylogger"]
  },

  {
    id: "network-port-access",
    name: "Unauthorized Network Port Access",
    category: "physical",
    severity: "high",
    description: "Attackers connect to unused Ethernet ports inside office premises to access internal networks.",
    detection: ["Port activity logs"],
    impact: ["Internal network breach"],
    propagation: ["Open wall ports"],
    mitigation: ["Disable unused ports"],
    keywords: ["network port access", "ethernet hacking"]
  },

  {
    id: "rogue-device-installation",
    name: "Rogue Device Installation",
    category: "physical",
    severity: "critical",
    description: "Attackers install unauthorized devices like Raspberry Pi, wireless repeaters, or keyloggers inside premises.",
    detection: ["Unknown MAC addresses"],
    impact: ["Network monitoring", "Backdoor access"],
    propagation: ["Unmonitored rooms"],
    mitigation: ["Regular physical sweeps"],
    keywords: ["rogue device", "hardware implant"]
  },

  {
    id: "cable-tapping",
    name: "Network Cable Tapping",
    category: "physical",
    severity: "high",
    description: "Attackers physically tap into network cables to eavesdrop on data.",
    detection: ["Signal loss"],
    impact: ["Traffic interception"],
    propagation: ["Exposed cables"],
    mitigation: ["Use armored or hidden cabling"],
    keywords: ["cable tap", "network tap"]
  },

  {
    id: "door-force-entry",
    name: "Forced Door Entry",
    category: "physical",
    severity: "high",
    description: "Attackers physically break into secure rooms using tools.",
    detection: ["Broken locks", "Tamper alarms"],
    impact: ["Asset damage"],
    propagation: ["Weak door structure"],
    mitigation: ["Reinforced doors"],
    keywords: ["forced entry", "door break-in"]
  },

  {
    id: "fire-suppression-abuse",
    name: "Fire Suppression System Abuse",
    category: "physical",
    severity: "critical",
    description: "Attackers activate fire suppression to damage equipment or force evacuation.",
    detection: ["Unexpected system triggers"],
    impact: ["Server damage"],
    propagation: ["Physical access to system panel"],
    mitigation: ["Secure maintenance panels"],
    keywords: ["fire suppression attack"]
  },

  {
    id: "physical-social-engineering",
    name: "Physical Social Engineering",
    category: "physical",
    severity: "high",
    description: "Attackers pretend to be maintenance, delivery, or IT staff to gain physical access.",
    detection: ["Fake uniforms", "No appointment records"],
    impact: ["Internal access"],
    propagation: ["Impersonation"],
    mitigation: ["Verification before entry"],
    keywords: ["physical social engineering"]
  },

  {
    id: "power-outage-attack",
    name: "Intentional Power Outage",
    category: "physical",
    severity: "critical",
    description: "Attackers tamper with power supply to force shutdown of systems.",
    detection: ["Sudden power drops"],
    impact: ["Data corruption"],
    propagation: ["Access to electrical panels"],
    mitigation: ["Secure power infrastructure"],
    keywords: ["power attack", "electrical sabotage"]
  },

  {
    id: "thermal-camera-key-theft",
    name: "Thermal Camera PIN Theft",
    category: "physical",
    severity: "medium",
    description: "Attackers use thermal cameras to detect recent keypad presses.",
    detection: ["Smudges on keypads"],
    impact: ["PIN/Password theft"],
    propagation: ["Keypad lock systems"],
    mitigation: ["Randomize keypad layout"],
    keywords: ["thermal attack", "heat signature theft"]
  },

  {
    id: "badge-cloning",
    name: "Badge Cloning",
    category: "physical",
    severity: "high",
    description: "RFID badges are cloned using handheld readers.",
    detection: ["Duplicate access logs"],
    impact: ["Unauthorized access"],
    propagation: ["Proximity cloning"],
    mitigation: ["Use encrypted RFID"],
    keywords: ["badge clone", "rfid hack"]
  },

  {
    id: "usb-killer",
    name: "USB Killer Attack",
    category: "physical",
    severity: "critical",
    description: "A malicious USB device sends high-voltage surges destroying hardware instantly.",
    detection: ["Unknown USB devices"],
    impact: ["Hardware destruction"],
    propagation: ["Physical access"],
    mitigation: ["Block USB ports"],
    keywords: ["usb killer", "usb burn"]
  },

  {
    id: "hardware-manipulation",
    name: "Hardware Manipulation Attack",
    category: "physical",
    severity: "critical",
    description: "Attackers physically modify hardware, add chips, or tap circuits.",
    detection: ["Tamper seals broken"],
    impact: ["Backdoors", "Data interception"],
    propagation: ["Unsecured hardware"],
    mitigation: ["Tamper-evident packaging"],
    keywords: ["hardware tampering"]
  },

  {
    id: "locker-break-in",
    name: "Locker Break-In",
    category: "physical",
    severity: "medium",
    description: "Attackers physically break into staff lockers or storage to steal access cards or devices.",
    detection: ["Broken locks"],
    impact: ["Data theft", "Identity theft"],
    propagation: ["Weak locks"],
    mitigation: ["Use strong metal lockers"],
    keywords: ["locker breach", "theft"]
  },

  {
    id: "visible-passwords",
    name: "Visible Password Exposure",
    category: "physical",
    severity: "low",
    description: "Employees leave passwords written on sticky notes visible to attackers.",
    detection: ["Notes on monitors"],
    impact: ["Credential theft"],
    propagation: ["Poor hygiene"],
    mitigation: ["Enforce password policies"],
    keywords: ["sticky note password"]
  },

  {
    id: "keypad-bruteforce",
    name: "Keypad Brute Force",
    category: "physical",
    severity: "medium",
    description: "Attackers repeatedly guess keypad codes on doors.",
    detection: ["Multiple failed attempts"],
    impact: ["Unauthorized access"],
    propagation: ["Weak PINs"],
    mitigation: ["Lockout mechanisms"],
    keywords: ["keypad hack", "pin brute force"]
  },

  {
    id: "fake-fire-alarm",
    name: "Fake Fire Alarm Attack",
    category: "physical",
    severity: "low",
    description: "Attackers trigger false fire alarms to force evacuation and enter restricted areas.",
    detection: ["Unusual activation patterns"],
    impact: ["Distraction for intrusion"],
    propagation: ["Manual triggers"],
    mitigation: ["Secure alarm panels"],
    keywords: ["fake alarm", "evacuation attack"]
  },

  {
    id: "server-cable-theft",
    name: "Server Cable Theft",
    category: "physical",
    severity: "medium",
    description: "Attackers steal network or power cables to disrupt services.",
    detection: ["Disconnected equipment"],
    impact: ["Service outage"],
    propagation: ["Open server racks"],
    mitigation: ["Secure cable trays"],
    keywords: ["cable theft", "server sabotage"]
  },

  {
    id: "laptop-snatching",
    name: "Laptop Snatching Attack",
    category: "physical",
    severity: "high",
    description: "Devices are stolen from employees in public places.",
    detection: ["Missing device reports"],
    impact: ["Loss of sensitive data"],
    propagation: ["Unattended devices"],
    mitigation: ["Use Kensington locks"],
    keywords: ["laptop theft", "device snatching"]
  },

  {
    id: "printer-data-leak",
    name: "Printer Data Leakage",
    category: "physical",
    severity: "medium",
    description: "Sensitive documents printed and left unattended.",
    detection: ["Documents left near printers"],
    impact: ["Data exposure"],
    propagation: ["Shared printers"],
    mitigation: ["Secure print release"],
    keywords: ["printer leak"]
  },

  {
    id: "whiteboard-data-leak",
    name: "Whiteboard Exposure",
    category: "physical",
    severity: "low",
    description: "Sensitive diagrams left visible on whiteboards.",
    detection: ["Unwiped boards"],
    impact: ["Internal info leak"],
    propagation: ["Poor hygiene"],
    mitigation: ["Mandatory wipe policy"],
    keywords: ["whiteboard leak"]
  },

  {
    id: "screen-visibility-attack",
    name: "Screen Visibility Attack",
    category: "physical",
    severity: "low",
    description: "Attackers view sensitive screens from a distance or angle.",
    detection: ["Public seating near screens"],
    impact: ["Data leak"],
    propagation: ["Open office layouts"],
    mitigation: ["Privacy filters"],
    keywords: ["screen snooping"]
  },

  {
    id: "ev-charger-implant",
    name: "EV Charger Hardware Implant",
    category: "physical",
    severity: "high",
    description: "Attackers modify EV charging ports to capture car or phone data.",
    detection: ["Tampered ports"],
    impact: ["Device compromise"],
    propagation: ["Public chargers"],
    mitigation: ["Use data-blocking USB"],
    keywords: ["ev charger hack"]
  },

  {
    id: "iot-device-physical-hack",
    name: "IoT Device Physical Hack",
    category: "physical",
    severity: "high",
    description: "Attackers physically modify IoT devices to implant malware or extract keys.",
    detection: ["Tamper alerts"],
    impact: ["IoT takeover"],
    propagation: ["Unprotected devices"],
    mitigation: ["Tamper-resistant design"],
    keywords: ["iot tampering"]
  }
];

module.exports = {physicalAttacks};
