// laws/indianLaws.js

const indianLaws = [
  {
    id: "ita-66",
    section: "Section 66",
    name: "Computer-Related Offences",
    category: "indian",
    description:
      "Covers unauthorized access, data theft, identity theft, and computer manipulation causing damage or wrongful gain.",
    punishment: "Up to 3 years imprisonment",
    fine: "Up to ₹5 lakh",
    examples: [
      "Hacking into someone's account",
      "Changing or deleting someone’s data",
      "Unauthorized login attempts"
    ],
    keywords: ["ITA 2000", "section 66", "unauthorized access", "cyber crime"]
  },

  {
    id: "ita-66c",
    section: "Section 66C",
    name: "Identity Theft",
    category: "indian",
    description:
      "Covers fraudulent or dishonest use of electronic signatures, passwords, or any unique identification.",
    punishment: "Up to 3 years imprisonment",
    fine: "Up to ₹1 lakh",
    examples: ["Using someone’s Aadhaar number", "Stealing passwords"],
    keywords: ["identity theft", "aadhar misuse", "password theft"]
  },

  {
    id: "ita-66d",
    section: "Section 66D",
    name: "Cheating by Personation Using Computer Resources",
    category: "indian",
    description:
      "Covers online impersonation, fake profiles, online fraud, and phishing attempts.",
    punishment: "Up to 3 years imprisonment",
    fine: "Up to ₹1 lakh",
    examples: [
      "Fraud calls",
      "Fake Instagram account for scamming",
      "Email phishing"
    ],
    keywords: [
      "online cheating",
      "phishing",
      "scam",
      "fake profile",
      "impersonation"
    ]
  },

  {
    id: "ita-66f",
    section: "Section 66F",
    name: "Cyber Terrorism",
    category: "indian",
    description:
      "Covers acts intended to threaten national security, damage critical infrastructure, or cause widespread panic through computer systems.",
    punishment: "Imprisonment for life",
    fine: "No limit",
    examples: ["Hacking government servers", "DDOS on critical infra"],
    keywords: ["terrorism", "critical infrastructure", "government hacking"]
  },

  {
    id: "ita-67",
    section: "Section 67",
    name: "Publishing or Transmitting Obscene Material",
    category: "indian",
    description:
      "Covers posting or sharing obscene content online including images, videos, or text.",
    punishment: "Up to 3 years imprisonment for first offence",
    fine: "Up to ₹5 lakh",
    examples: ["Sharing pornographic content", "Revenge porn"],
    keywords: ["obscene content", "revenge porn", "illegal content"]
  },

  {
    id: "ita-67a",
    section: "Section 67A",
    name: "Sexually Explicit Content",
    category: "indian",
    description:
      "Covers more serious sexually explicit content involving actual sexual acts.",
    punishment: "Up to 5 years imprisonment",
    fine: "Up to ₹10 lakh",
    examples: ["Publishing hardcore porn", "Selling explicit content"],
    keywords: ["explicit content", "porn law"]
  },

  {
    id: "ita-67b",
    section: "Section 67B",
    name: "Child Sexual Content",
    category: "indian",
    description:
      "Covers creating, browsing, sharing, downloading any child sexual content.",
    punishment: "Up to 7 years imprisonment",
    fine: "Up to ₹10 lakh",
    examples: ["Child porn possession", "Sharing child abuse images"],
    keywords: ["child pornography", "pocso", "illegal content"]
  },

  {
    id: "ita-43",
    section: "Section 43",
    name: "Unauthorized Access / Download / Damage",
    category: "indian",
    description:
      "Anyone accessing, copying, extracting data, introducing viruses, or damaging computer systems without permission.",
    punishment: "Liability to pay damages (civil liability)",
    fine: "Compensation as decided by court",
    examples: [
      "Deleting someone’s computer files",
      "Infecting with malware",
      "Copying data from USB"
    ],
    keywords: ["civil liability", "data theft", "malware damage"]
  },

  {
    id: "ita-43a",
    section: "Section 43A",
    name: "Compensation for Failure to Protect Sensitive Data",
    category: "indian",
    description:
      "Companies must protect sensitive personal data or pay compensation for negligence.",
    punishment: "Financial compensation",
    fine: "Court-decided amount",
    examples: ["Data leak from a company", "Poor security practices"],
    keywords: ["data protection", "company liability"]
  },

  {
    id: "ipc-379",
    section: "IPC 379",
    name: "Theft (Applies to Data Theft)",
    category: "indian",
    description:
      "Covers physical theft of devices and also applies to data theft in cybercrime cases.",
    punishment: "Up to 3 years imprisonment",
    fine: "Court-decided",
    examples: ["Stealing a laptop", "Downloading confidential files"],
    keywords: ["data theft", "theft", "ipc"]
  },

  {
    id: "ipc-420",
    section: "IPC 420",
    name: "Cheating and Fraud",
    category: "indian",
    description: "Covers cyber fraud, online scam, digital extortion.",
    punishment: "Up to 7 years imprisonment",
    fine: "Court-decided",
    examples: ["UPI scam", "Online money fraud"],
    keywords: ["fraud", "scam", "420", "online cheating"]
  },

  {
    id: "ipc-468",
    section: "IPC 468",
    name: "Forgery for Cheating",
    category: "indian",
    description:
      "Covers digital forgery, fake documents, fake certificates, manipulated PDFs.",
    punishment: "Up to 7 years imprisonment",
    fine: "Court-decided",
    examples: ["Fake mark sheets", "Manipulated government docs"],
    keywords: ["forgery", "fake documents", "pdf manipulation"]
  },

  {
    id: "ipc-469",
    section: "IPC 469",
    name: "Forgery for Harming Reputation",
    category: "indian",
    description: "Covers fake posts or altered content meant to defame someone.",
    punishment: "Up to 3 years imprisonment",
    fine: "Court-decided",
    examples: ["Fake WhatsApp chats", "Edited images"],
    keywords: ["defamation", "fake content"]
  },

  {
    id: "ipc-499-500",
    section: "IPC 499 & 500",
    name: "Defamation",
    category: "indian",
    description: "Covers online defamation, slander, false rumors.",
    punishment: "Up to 2 years imprisonment",
    fine: "Court-decided",
    examples: ["Fake allegations online", "Character assassination"],
    keywords: ["defamation", "rumors"]
  },

  {
    id: "pocso-it",
    section: "POCSO + ITA 67B",
    name: "Child Protection Online",
    category: "indian",
    description: "Strict punishment for producing, sharing, or possessing child sexual content.",
    punishment: "Up to 7 years imprisonment",
    fine: "Up to ₹10 lakh",
    examples: ["Whatsapp group sharing such content"],
    keywords: ["child safety", "pocso", "67B"]
  },

  {
    id: "cert-in-incident",
    section: "CERT-In Directions 2022",
    name: "Mandatory Incident Reporting",
    category: "indian",
    description: "Organizations must report cyber incidents within 6 hours.",
    punishment: "Penalty under IT Act",
    fine: "Case-based",
    examples: ["Data breach not reported"],
    keywords: ["cert-in", "incident report"]
  },

  {
    id: "dpdp-act",
    section: "DPDP Act 2023",
    name: "Digital Personal Data Protection Act",
    category: "indian",
    description:
      "India’s new data protection law governing consent, processing, and security of personal data.",
    punishment: "Penalties up to ₹250 crore",
    fine: "Max ₹250 crore",
    examples: ["Company misusing personal data"],
    keywords: ["dpdp", "data protection"]
  },

  {
    id: "ita-72",
    section: "Section 72",
    name: "Breach of Confidentiality and Privacy",
    category: "indian",
    description:
      "Covers unauthorized disclosure of private information accessed lawfully.",
    punishment: "Up to 2 years imprisonment",
    fine: "Up to ₹1 lakh",
    examples: ["Leaking customer data"],
    keywords: ["privacy breach", "confidentiality"]
  }
];

module.exports = {
  indianLaws
};
