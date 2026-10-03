// attacks/social.js

const socialAttacks = [
  {
    id: "phishing-email",
    name: "Email Phishing Attack",
    category: "social",
    severity: "high",
    description: "Phishing emails impersonate trusted entities to trick users into revealing credentials, clicking malicious links, or downloading malware.",
    detection: [
      "Emails with mismatched sender domains",
      "Unexpected password reset requests",
      "Links redirecting to lookalike websites"
    ],
    impact: [
      "Credential theft",
      "Account takeover",
      "Fraudulent transactions"
    ],
    propagation: [
      "Mass phishing campaigns",
      "Spear phishing targeted to specific users"
    ],
    mitigation: [
      "Email filtering",
      "User awareness training",
      "MFA on all critical services"
    ],
    keywords: ["phishing", "email scam", "credential theft"]
  },

  {
    id: "spear-phishing",
    name: "Spear Phishing",
    category: "social",
    severity: "critical",
    description: "Highly targeted phishing attacks tailored to a specific individual or organization using personalized information.",
    detection: [
      "Highly personalized unexpected emails",
      "Metadata showing external origin",
      "Unusual attachment file types"
    ],
    impact: [
      "CEO fraud",
      "Business email compromise",
      "Internal network access"
    ],
    propagation: [
      "Researching victim on social media",
      "Using leaked data to increase credibility"
    ],
    mitigation: [
      "Security awareness for executives",
      "Email authentication (DMARC/SPF)",
      "Strong identity verification"
    ],
    keywords: ["spear phishing", "targeted phishing", "whaling"]
  },

  {
    id: "vishing",
    name: "Voice Phishing (Vishing)",
    category: "social",
    severity: "medium",
    description: "Attackers impersonate official representatives via phone calls to extract confidential information or convince victims to perform actions.",
    detection: [
      "Calls demanding urgent action",
      "Unknown caller pretending to be internal staff"
    ],
    impact: [
      "Bank fraud",
      "Unauthorized transactions",
      "Leakage of confidential information"
    ],
    propagation: [
      "Phone calls via VoIP tools",
      "Spoofed caller IDs"
    ],
    mitigation: [
      "Caller verification policies",
      "Employee awareness training"
    ],
    keywords: ["vishing", "phone scam", "voice phishing"]
  },

  {
    id: "smishing",
    name: "SMS Phishing (Smishing)",
    category: "social",
    severity: "medium",
    description: "Attackers send malicious or deceptive SMS messages containing harmful links or fraudulent claims.",
    detection: [
      "Suspicious short URLs",
      "Unexpected OTP or banking messages"
    ],
    impact: [
      "Credential theft",
      "Device malware infection",
      "Financial loss"
    ],
    propagation: [
      "Mass SMS campaigns using cheap bulk services"
    ],
    mitigation: [
      "SMS filtering tools",
      "Phone OS link scanning"
    ],
    keywords: ["smishing", "sms phishing", "mobile scam"]
  },

  {
    id: "pretexting",
    name: "Pretexting Attack",
    category: "social",
    severity: "high",
    description: "Attackers create a fabricated scenario or identity to trick victims into giving away sensitive information.",
    detection: [
      "Requests involving fabricated urgency",
      "Questions about internal information"
    ],
    impact: [
      "Identity theft",
      "Internal system unauthorized access"
    ],
    propagation: [
      "Impersonation of coworkers or officials"
    ],
    mitigation: [
      "Verification of all sensitive requests",
      "Strict identity policies"
    ],
    keywords: ["pretexting", "impersonation", "fake scenario"]
  },

  {
    id: "baiting",
    name: "Baiting Attack",
    category: "social",
    severity: "medium",
    description: "Attackers lure victims with free offers, gifts, or malware-infected media to gain unauthorized access.",
    detection: [
      "Suspicious 'free' downloads",
      "Reports of malicious USB drives"
    ],
    impact: [
      "Malware infection",
      "Credential harvesting"
    ],
    propagation: [
      "Free downloads",
      "USB drops"
    ],
    mitigation: [
      "Educate employees",
      "Block unauthorized removable devices"
    ],
    keywords: ["baiting", "malicious usb", "free download scam"]
  },

  {
    id: "quid-pro-quo",
    name: "Quid Pro Quo Social Attack",
    category: "social",
    severity: "medium",
    description: "Attackers offer something beneficial (support, reward) in exchange for sensitive data or access.",
    detection: [
      "Strangers offering unsolicited help",
      "Support calls from unknown tech reps"
    ],
    impact: [
      "Credential theft",
      "System access compromise"
    ],
    propagation: [
      "Fake tech support calls"
    ],
    mitigation: [
      "Verification process for tech support",
      "Awareness training"
    ],
    keywords: ["quid pro quo", "fake support", "exchange scam"]
  },

  {
    id: "social-media-engineering",
    name: "Social Media Engineering",
    category: "social",
    severity: "high",
    description: "Attackers exploit social media platforms to gather personal details, impersonate profiles, or manipulate victims.",
    detection: [
      "Fake profiles interacting with employees",
      "Phishing attempts on social media"
    ],
    impact: [
      "Identity theft",
      "Corporate infiltration"
    ],
    propagation: [
      "Fake LinkedIn job offers",
      "Impersonating real employees"
    ],
    mitigation: [
      "Lock down social media privacy settings",
      "Verifying unknown contacts"
    ],
    keywords: ["social media attack", "fake profile", "linkedin scam"]
  },

  {
    id: "fake-tech-support",
    name: "Fake Tech Support Scam",
    category: "social",
    severity: "medium",
    description: "Attackers impersonate technical support to trick victims into installing remote access tools.",
    detection: [
      "Unsolicited tech support messages",
      "Requests to install remote tools like AnyDesk"
    ],
    impact: [
      "Unauthorized remote access",
      "Financial theft"
    ],
    propagation: [
      "Cold calls",
      "Fake popup warnings"
    ],
    mitigation: [
      "Don't trust unsolicited support",
      "Use official support portals"
    ],
    keywords: ["tech support scam", "remote access fraud"]
  },

  {
    id: "deepfake-fraud",
    name: "Deepfake Voice/Video Attack",
    category: "social",
    severity: "critical",
    description: "AI-generated voice or video deepfakes impersonate executives or employees to authorize transactions.",
    detection: [
      "Unusual voice patterns",
      "Mismatch between voice and context"
    ],
    impact: [
      "High-value transactions",
      "Wire fraud",
      "Corporate manipulation"
    ],
    propagation: [
      "Deepfake AI tools",
      "Leaked audio or video samples"
    ],
    mitigation: [
      "Verify high-value requests by secondary channels",
      "Train employees to detect deepfake artifacts"
    ],
    keywords: ["deepfake fraud", "ai voice attack", "synthetic impersonation"]
  },

  {
    id: "business-email-compromise",
    name: "Business Email Compromise (BEC)",
    category: "social",
    severity: "critical",
    description: "Attackers compromise or spoof business email accounts to request fraudulent transactions or data.",
    detection: [
      "Login from unusual locations",
      "Rule additions in inbox",
      "Suspicious forwarding filters"
    ],
    impact: [
      "Wire transfer theft",
      "Brand damage",
      "Data loss"
    ],
    propagation: [
      "Phishing",
      "Credential theft"
    ],
    mitigation: [
      "MFA for email accounts",
      "DMARC/SPF/DKIM enforcement"
    ],
    keywords: ["bec", "email fraud", "ceo scam"]
  },

  {
    id: "shoulder-surfing",
    name: "Shoulder Surfing",
    category: "social",
    severity: "low",
    description: "Attackers observe victims entering sensitive information over their shoulder, physically or through cameras.",
    detection: [
      "Unknown individuals standing too close",
      "Strange camera angles in public places"
    ],
    impact: [
      "Password theft",
      "ATM PIN stealing"
    ],
    propagation: ["Physical proximity"],
    mitigation: ["Privacy filters", "Be aware of surroundings"],
    keywords: ["shoulder surfing", "pin theft"]
  },

  {
    id: "dumpster-diving",
    name: "Dumpster Diving",
    category: "social",
    severity: "low",
    description: "Attackers search trash bins for discarded documents, notes, or hardware containing sensitive data.",
    detection: ["Missing documents", "Unauthorized access to waste bins"],
    impact: ["Data leakage"],
    propagation: ["Trash searches"],
    mitigation: ["Shred documents", "Secure disposal"],
    keywords: ["dumpster dive", "trash attack"]
  },

  {
    id: "rogue-employee",
    name: "Rogue Insider Employee",
    category: "social",
    severity: "critical",
    description: "A trusted employee intentionally abuses access rights for theft, sabotage or data leaks.",
    detection: [
      "Large data transfers",
      "Unusual working hours activity",
      "Privilege misuse"
    ],
    impact: [
      "Intellectual property theft",
      "System sabotage",
      "Long-term damage"
    ],
    propagation: ["Disgruntled employees"],
    mitigation: ["Monitor insider actions", "Zero trust"],
    keywords: ["insider threat", "rogue employee"]
  },

  {
    id: "pig-butchering",
    name: "Pig Butchering Scam",
    category: "social",
    severity: "high",
    description: "Attackers build long-term trust with victims online before convincing them to invest in fake crypto or financial schemes.",
    detection: [
      "Long-term unsolicited conversations",
      "Investment pressure"
    ],
    impact: [
      "Financial loss",
      "Identity theft"
    ],
    propagation: ["Social media chatbot networks"],
    mitigation: ["Avoid unknown investment pitches"],
    keywords: ["romance scam", "crypto scam"]
  },

  {
    id: "romance-scam",
    name: "Romance Scam",
    category: "social",
    severity: "medium",
    description: "Attackers pretend to form emotional relationships to manipulate victims financially or emotionally.",
    detection: [
      "Requests for money",
      "Rapid emotional connection"
    ],
    impact: [
      "Financial loss",
      "Emotional trauma"
    ],
    propagation: ["Dating apps"],
    mitigation: ["Do background checks", "Avoid sending money"],
    keywords: ["romance scam", "relationship scam"]
  },

  {
    id: "gift-card-scam",
    name: "Gift Card Scam",
    category: "social",
    severity: "low",
    description: "Victims are tricked into purchasing gift cards and giving codes to scammers via email or calls.",
    detection: [
      "Urgent requests for gift cards",
      "Instructions to buy cards covertly"
    ],
    impact: ["Financial theft"],
    propagation: ["Phone scams"],
    mitigation: ["Warn employees", "Block suspicious emails"],
    keywords: ["gift card fraud", "gift scam"]
  },

  {
    id: "fake-job-offer",
    name: "Fake Job Offer Scam",
    category: "social",
    severity: "medium",
    description: "Attackers lure victims with fake employment offers to steal personal information or money.",
    detection: [
      "Requests for upfront payment",
      "Interviews on unofficial platforms"
    ],
    impact: [
      "Identity theft",
      "Financial fraud"
    ],
    propagation: ["Fake LinkedIn recruiters"],
    mitigation: ["Verify company domain", "Avoid sending personal docs"],
    keywords: ["job scam", "fake recruiter"]
  },

  {
    id: "qr-code-phishing",
    name: "QR Code Phishing (Quishing)",
    category: "social",
    severity: "medium",
    description: "Attackers use QR codes to redirect victims to malicious websites.",
    detection: ["QR codes placed over official posters"],
    impact: ["Credential theft"],
    propagation: ["Fake QR stickers"],
    mitigation: ["Verify source before scanning"],
    keywords: ["quishing", "qr phishing"]
  },

  {
    id: "fake-update-scam",
    name: "Fake Software Update Scam",
    category: "social",
    severity: "high",
    description: "Victims are tricked into downloading 'updates' that are malware.",
    detection: [
      "Unexpected update pop-ups",
      "Fake browser update notices"
    ],
    impact: [
      "Malware installation",
      "Remote access"
    ],
    propagation: ["Malicious pop-ups"],
    mitigation: ["Use official update channels"],
    keywords: ["fake update", "browser malware"]
  },

  {
    id: "fear-based-attack",
    name: "Fear-Based Social Engineering",
    category: "social",
    severity: "medium",
    description: "Attackers use fear tactics such as legal threats or account suspension warnings.",
    detection: ["Emails claiming account closure"],
    impact: ["Credential theft"],
    propagation: ["Emails, SMS"],
    mitigation: ["Verify with official services"],
    keywords: ["fear scam", "scare tactic"]
  },

  {
    id: "fake-invoice-scam",
    name: "Fake Invoice Scam",
    category: "social",
    severity: "medium",
    description: "Attackers send fraudulent invoices requesting payment for services not rendered.",
    detection: ["Invoice numbers not matching system records"],
    impact: ["Financial loss"],
    propagation: ["Spoofed business emails"],
    mitigation: ["Invoice verification procedures"],
    keywords: ["invoice scam", "financial fraud"]
  },

  {
    id: "fake-delivery-alert",
    name: "Fake Delivery Alert",
    category: "social",
    severity: "low",
    description: "Attackers send fake package delivery messages prompting victims to click malicious links.",
    detection: ["Unexpected shipment notifications"],
    impact: ["Credential theft"],
    propagation: ["SMS, email"],
    mitigation: ["Ignore suspicious delivery messages"],
    keywords: ["delivery scam", "package scam"]
  },

  {
    id: "fake-antivirus-alert",
    name: "Fake Antivirus Alert",
    category: "social",
    severity: "medium",
    description: "Users are tricked into believing their device is infected and installing malware disguised as antivirus software.",
    detection: ["Browser popups claiming infection"],
    impact: ["Malware execution"],
    propagation: ["Malicious ad networks"],
    mitigation: ["Block pop-ups", "Educate users"],
    keywords: ["fake antivirus", "scareware"]
  },

  {
    id: "social-botnet-propagation",
    name: "Social Botnet Propagation",
    category: "social",
    severity: "high",
    description: "Botnets spread by compromising social media accounts and sending infected links to contacts.",
    detection: ["Mass messaging from user accounts"],
    impact: ["Botnet growth"],
    propagation: ["Malicious DMs"],
    mitigation: ["Password resets", "Account lockdown"],
    keywords: ["botnet social", "social worm"]
  },

  {
    id: "job-application-malware",
    name: "Malicious Job Application Attachment",
    category: "social",
    severity: "high",
    description: "Attackers send resumes or portfolios containing hidden malware.",
    detection: ["Macro-enabled documents"],
    impact: ["Malware execution"],
    propagation: ["Email attachments"],
    mitigation: ["Disable macros", "Scan attachments"],
    keywords: ["resume malware", "job application attack"]
  },

  {
    id: "parcel-delivery-scam",
    name: "Parcel Delivery Scam",
    category: "social",
    severity: "low",
    description: "Victims receive fake delivery notices demanding payment for customs or shipping.",
    detection: ["Fake courier emails"],
    impact: ["Financial loss"],
    propagation: ["SMS/Email"],
    mitigation: ["Verify tracking numbers"],
    keywords: ["parcel scam", "delivery fraud"]
  },

  {
    id: "travel-reward-scam",
    name: "Travel Reward Scam",
    category: "social",
    severity: "low",
    description: "Attackers promise free vacations or rewards to steal personal information.",
    detection: ["Too-good-to-be-true offers"],
    impact: ["Identity theft"],
    propagation: ["Email spam"],
    mitigation: ["Verify reward sources"],
    keywords: ["travel scam", "reward fraud"]
  },

  {
    id: "charity-fraud",
    name: "Charity Donation Fraud",
    category: "social",
    severity: "medium",
    description: "Fake charities trick victims into donating money.",
    detection: ["New charity sites with no registration"],
    impact: ["Financial fraud"],
    propagation: ["Crisis events"],
    mitigation: ["Verify charity legitimacy"],
    keywords: ["charity fraud", "fake donation"]
  },

  {
    id: "fake-browser-warnings",
    name: "Fake Browser Security Warnings",
    category: "social",
    severity: "medium",
    description: "Attackers use fake security alerts to push malware downloads.",
    detection: ["Browser pop-ups resembling OS warnings"],
    impact: ["Malware installation"],
    propagation: ["Malicious ads"],
    mitigation: ["Use ad blockers", "Educate users"],
    keywords: ["browser warning scam", "fake alert"]
  },

  {
    id: "employment-data-harvesting",
    name: "Employment Data Harvesting Scam",
    category: "social",
    severity: "medium",
    description: "Attackers collect sensitive employment data (ID cards, resumes) using fake job forms.",
    detection: ["Resumes demanded via private WhatsApp numbers"],
    impact: ["Identity theft"],
    propagation: ["Fake job portals"],
    mitigation: ["Submit documents only to verified HR portals"],
    keywords: ["employment scam", "data harvest"]
  }
];

module.exports = {socialAttacks};
