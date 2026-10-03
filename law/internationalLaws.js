// laws/internationalLaws.js

const internationalLaws = [
  {
    id: "gdpr-article-5",
    section: "GDPR Article 5",
    name: "Principles of Data Processing",
    category: "international",
    description:
      "Defines lawful, fair, and transparent processing of personal data in the EU.",
    punishment: "Administrative fines up to €20 million or 4% of global turnover",
    fine: "Up to €20 million or 4% of global revenue",
    examples: [
      "Companies collecting data without consent",
      "Storing personal data beyond required time"
    ],
    keywords: ["gdpr", "data protection", "eu law"]
  },

  {
    id: "gdpr-article-6",
    section: "GDPR Article 6",
    name: "Lawful Basis for Processing Data",
    category: "international",
    description: "Specifies the conditions under which data processing is lawful.",
    punishment: "Up to €20 million fine",
    fine: "Up to €20 million",
    examples: ["Processing data without consent"],
    keywords: ["gdpr", "article 6", "data processing"]
  },

  {
    id: "gdpr-article-17",
    section: "GDPR Article 17",
    name: "Right to be Forgotten",
    category: "international",
    description: "Individuals have the right to request deletion of their personal data.",
    punishment: "Up to €20 million fine",
    fine: "Up to €20 million",
    examples: [
      "User requesting deletion of account data",
      "Data retained after service termination"
    ],
    keywords: ["gdpr", "right to be forgotten", "erasure"]
  },

  {
    id: "ccpa-section-1798",
    section: "CCPA Section 1798",
    name: "California Consumer Privacy Rights",
    category: "international",
    description:
      "Gives California residents rights over personal data, including access, deletion, and opting out.",
    punishment: "Penalties up to $7,500 per violation",
    fine: "$2,500–$7,500 per violation",
    examples: ["Selling user data without consent"],
    keywords: ["ccpa", "california privacy"]
  },

  {
    id: "ccpa-data-breach",
    section: "CCPA Data Breach Liability",
    name: "Data Breach Penalties",
    category: "international",
    description:
      "Companies are liable for breaches if they fail to take reasonable security measures.",
    punishment: "Statutory damages $100–$750 per affected user",
    fine: "$100–$750 per user",
    examples: ["Unsecured cloud database leak"],
    keywords: ["ccpa", "data breach"]
  },

  {
    id: "hipaa-privacy-rule",
    section: "HIPAA Privacy Rule",
    name: "Health Data Privacy",
    category: "international",
    description:
      "Protects health information and restricts unauthorized disclosures.",
    punishment: "Up to $1.5 million per year",
    fine: "Up to $1.5 million per violation category",
    examples: ["Sharing patient records without consent"],
    keywords: ["hipaa", "health data", "privacy rule"]
  },

  {
    id: "hipaa-security-rule",
    section: "HIPAA Security Rule",
    name: "Health Information Security Standards",
    category: "international",
    description:
      "Defines administrative, technical, and physical safeguards for electronic health data.",
    punishment: "Fines up to $1.5 million/year",
    fine: "$100–$50,000 per violation",
    examples: ["Weak data security for hospitals"],
    keywords: ["hipaa", "security rule"]
  },

  {
    id: "dmca-section-1201",
    section: "DMCA Section 1201",
    name: "Anti-Circumvention Rule",
    category: "international",
    description:
      "Prohibits bypassing DRM, encryption, and technical protection measures.",
    punishment: "Up to $500,000 and 5 years imprisonment",
    fine: "$200,000–$500,000",
    examples: ["Cracking DRM", "Bypassing encryption"],
    keywords: ["dmca", "drm", "anti circumvention"]
  },

  {
    id: "cffa",
    section: "CFAA §1030",
    name: "Computer Fraud and Abuse Act (USA)",
    category: "international",
    description:
      "Covers unauthorized access, data theft, trafficking passwords, and causing damage to systems.",
    punishment: "Up to 10 years imprisonment",
    fine: "$250,000+",
    examples: ["Hacking US servers"],
    keywords: ["cfaa", "computer fraud"]
  },

  {
    id: "budapest-convention",
    section: "Budapest Convention",
    name: "International Cybercrime Treaty",
    category: "international",
    description:
      "Global treaty to harmonize cybercrime laws and promote international cooperation.",
    punishment: "Country-specific penalties",
    fine: "Varies",
    examples: ["Cross-border cybercrime cases"],
    keywords: ["budapest", "cybercrime convention"]
  },

  {
    id: "nist-cybersecurity-framework",
    section: "NIST CSF",
    name: "Cybersecurity Framework",
    category: "international",
    description:
      "Global security framework defining Identify, Protect, Detect, Respond, Recover.",
    punishment: "No legal punishment (guideline)",
    fine: "None",
    examples: ["Corporate cybersecurity programs"],
    keywords: ["nist", "csf", "cybersecurity framework"]
  },

  {
    id: "iso-27001",
    section: "ISO/IEC 27001",
    name: "International Information Security Standard",
    category: "international",
    description:
      "Defines requirements for an information security management system (ISMS).",
    punishment: "Not legal but mandatory for compliance audits",
    fine: "None by law",
    examples: ["Company becoming ISO certified"],
    keywords: ["iso 27001", "isds", "standards"]
  },

  {
    id: "uk-computer-misuse-act",
    section: "UK CMA 1990",
    name: "Computer Misuse Act",
    category: "international",
    description:
      "UK’s primary cybercrime law covering unauthorized access, modification, or impairment.",
    punishment: "Up to life imprisonment (serious cases)",
    fine: "Varies",
    examples: ["DDOS UK websites"],
    keywords: ["cma", "uk cyber law"]
  },

  {
    id: "australia-cybercrime-act",
    section: "Australia Cybercrime Act",
    name: "Cybercrime Act 2001",
    category: "international",
    description:
      "Covers hacking, malware, unauthorized modification, and telecommunications crime.",
    punishment: "Up to 10 years imprisonment",
    fine: "Varies",
    examples: ["Unauthorized access to systems"],
    keywords: ["australia cyber law"]
  },

  {
    id: "germany-bsi",
    section: "Germany BSI Act",
    name: "Security of Information Systems",
    category: "international",
    description:
      "Defines requirements for IT security for critical infrastructure in Germany.",
    punishment: "Heavy regulatory fines",
    fine: "Case-specific",
    examples: ["Neglecting infra security"],
    keywords: ["germany cyber law", "bsi"]
  },

  {
    id: "china-cybersecurity-law",
    section: "China CSL",
    name: "Chinese Cybersecurity Law",
    category: "international",
    description:
      "Regulates data localization, national security, and critical infrastructure.",
    punishment: "Severe administrative penalties",
    fine: "Up to ¥1 million+",
    examples: ["Unauthorized foreign data transfers"],
    keywords: ["china cybersecurity law", "csl"]
  },

  {
    id: "canada-pipeda",
    section: "PIPEDA",
    name: "Canadian Data Protection Law",
    category: "international",
    description: "Applies to commercial organizations handling personal data.",
    punishment: "Fines up to CAD $100,000",
    fine: "$10,000–$100,000",
    examples: ["Unauthorized data sharing"],
    keywords: ["pipeda", "canada privacy"]
  },

  {
    id: "brazil-lgpd",
    section: "LGPD Brazil",
    name: "Lei Geral de Proteção de Dados",
    category: "international",
    description: "Brazil’s data protection law similar to GDPR.",
    punishment: "Fines up to 2% of revenue",
    fine: "Up to 50 million BRL",
    examples: ["Improper data collection"],
    keywords: ["lgpd", "brazil data"]
  },

  {
    id: "singapore-pdpa",
    section: "Singapore PDPA",
    name: "Personal Data Protection Act",
    category: "international",
    description: "Defines rights and obligations for handling personal data.",
    punishment: "Fines up to SGD $1 million",
    fine: "SGD $10,000–$1,000,000",
    examples: ["Unauthorized commercial use of data"],
    keywords: ["pdpa", "singapore privacy"]
  }
];

module.exports = {
  internationalLaws
};
