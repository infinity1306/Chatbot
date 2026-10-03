const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

const axios = require("axios");


const Fuse = require("fuse.js");

const rateLimit = require("express-rate-limit");

app.use(rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 200
}));


// =============================
//  IMPORT ATTACKS
// =============================
const { malwareAttacksPart1, malwareAttacksPart2 } = require("./attacks/malware.js");
const { networkAttacks } = require("./attacks/network.js");
const { webAttacks } = require("./attacks/web.js");
const { osAttacks } = require("./attacks/os.js");
const { cloudAttacks } = require("./attacks/cloud.js");
const { socialAttacks } = require("./attacks/social.js");
const { mobileAttacks } = require("./attacks/mobile.js");
const { physicalAttacks } = require("./attacks/physical.js");
const { micsAttacks } = require("./attacks/mics.js");

// =============================
//  IMPORT LAW MODULES
// =============================
const { indianLaws } = require("./law/indianLaws.js");
const { internationalLaws } = require("./law/internationalLaws.js");

// =============================
//  IMPORT CYBER TOOLS
// =============================
const { cyberTools } = require("./cybertool/cyberTools.js");

// =============================
//  IMPORT DEFENSE MODULES
// =============================
// DEFENSE
const { firewall } = require("./defense/firewall.js");
const { ids_ips } = require("./defense/ids_ips.js");
const { siem } = require("./defense/siem.js");
const { info } = require("./defense/info.js");

// DETECTION
const { detection } = require("./detection/allDetection.js");

// DOMAINS
const { domains } = require("./domains/domains1.js");
const domainData = Object.values(domains); // object → array

// PRACTICES
const { bestPractices } = require("./practices/bestPractices.js");

// REAL WORLD
const realworld = require("./realworld");

// CHEATSHEET
const { commands } = require("./cheatsheet/cmd.js");

// INCIDENT RESPONSE (IMPORTANT: your spelling)
const { incidentResponces } = require("./responce/incidentResponces.js");

// =============================
//  SIMPLE MEMORY STORE
// =============================
let memory = {
  lastResult: null,
  lastFormatted: null,
  stepPointer: 0
};

// =============================
//  MERGE DATASETS
// =============================
const attacks = [
  ...malwareAttacksPart1,
  ...malwareAttacksPart2,
  ...networkAttacks,
  ...webAttacks,
  ...osAttacks,
  ...cloudAttacks,
  ...socialAttacks,
  ...mobileAttacks,
  ...physicalAttacks,
  ...micsAttacks
];

const law = [
  ...indianLaws,
  ...internationalLaws
];

const cybertool = [
  ...cyberTools
];

const defense = [
  firewall,
  ids_ips,
  siem,
  ...info
];

const detectionData = [
  ...detection.network,
  ...detection.web,
  ...detection.endpoint,
  ...detection.logs,
  ...detection.siem,
  ...detection.anomalies
];

const domain = [
  domains.network_security,
  domains.web_application_security,
  domains.cloud_security,
  domains.operating_system_security,
  domains.mobile_security,
  domains.api_security,
  domains.email_security,
  domains.identity_access_management,
  domains.authentication_security,
  domains.authorization_privilege_management
];

const practices = [
  ...bestPractices.password_security,
  ...bestPractices.mfa_best_practices,
  ...bestPractices.network_hardening,
  ...bestPractices.vpn_remote_access,
  ...bestPractices.endpoint_hardening,
  ...bestPractices.server_hardening,
  ...bestPractices.secure_coding,
  ...bestPractices.api_security_best_practices,
  ...bestPractices.web_app_hardening,
  ...bestPractices.email_phishing,
  ...bestPractices.ransomware_prevention,
  ...bestPractices.backup_recovery,
  ...bestPractices.data_protection,
  ...bestPractices.logging_monitoring,
  ...bestPractices.siem_best_practices,
  ...bestPractices.soc_best_practices,
  ...bestPractices.cloud_best_practices,
  ...bestPractices.devsecops_best_practices,
  ...bestPractices.secrets_management,
  ...bestPractices.social_engineering_resistance,
  ...bestPractices.physical_security,
  ...bestPractices.patch_management,
  ...bestPractices.attack_surface_management
];

const cheatsheet = [...commands];

// REALWORLD DATA EXTRACTION
const realworldExamples = Object.values(realworld.examples.allExamples).flat();
const realworldCaseStudies = realworld.casestudy.caseStudies;
const realworldReferences = realworld.reference.references;
const realworldThreats = realworld.threatreport.threatReports;  // REQUIRED - DO NOT CHANGE THIS

// GLOBAL DATABASE
const cyberDatabase = [
  ...attacks,
  ...law,
  ...cybertool,
  ...defense,
  ...detectionData,
  ...domainData,
  ...practices,
  ...realworldExamples,
  ...realworldCaseStudies,
  ...realworldReferences,
  ...realworldThreats,
  ...cheatsheet,
  ...incidentResponces          
];

// FUSE INSTANCE
const fuse = new Fuse(cyberDatabase, {
  keys: ["name", "description", "category", "type"],
  threshold: 0.3
});

// =============================
// INTERNET SEARCH (SERPAPI → DUCKDUCKGO → WIKIPEDIA)
// =============================

// 1) SerpAPI (Google Search)
async function searchSerpAPI(query) {
  try {
    const url = `https://serpapi.com/search.json?q=${encodeURIComponent(query)}&api_key=632ce7e7f42170e649438b2eefbc4135e2885c4c2cde1fd9f9b527546652f293`;

    const response = await axios.get(url, { timeout: 7000 });
    const data = response.data;

    if (data.organic_results && data.organic_results.length > 0) {
      const first = data.organic_results[0];
      return `🌐 Internet result (Google)\n\n${first.title}\n\n${first.snippet}`;
    }

    return null;
  } catch (err) {
    console.log("SerpAPI error:", err.response?.status || err.message);
    return null;
  }
}


// 2) DuckDuckGo Search
async function searchDuckDuckGo(query) {
  try {
    const url = `https://api.duckduckgo.com/?q=${encodeURIComponent(query)}&format=json&no_redirect=1&no_html=1`;

    const response = await axios.get(url, { timeout: 5000 });
    const data = response.data;

    if (data.Abstract) {
      return `🌐 Internet result (DuckDuckGo)\n\n${data.Heading}\n\n${data.Abstract}`;
    }

    if (data.RelatedTopics && data.RelatedTopics.length > 0) {
      const first = data.RelatedTopics[0];
      if (first.Text) {
        return `🌐 Internet result (DuckDuckGo)\n\n${first.Text}`;
      }
    }

    return null;
  } catch (err) {
    console.log("DuckDuckGo error:", err.response?.status || err.message);
    return null;
  }
}


// 3) Wikipedia Search
async function searchWikipedia(query) {
  try {
    const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(query)}`;

    const response = await axios.get(url, { timeout: 5000 });
    const data = response.data;

    if (data.extract) {
      return `🌐 Internet result (Wikipedia)\n\n${data.title}\n\n${data.extract}`;
    }

    return null;
  } catch (err) {
    console.log("Wikipedia error:", err.response?.status || err.message);
    return null;
  }
}


// 4) Combined Internet Search (FINAL FUNCTION)
async function searchInternet(query) {
  // A) Use Google via SerpAPI first
  const serp = await searchSerpAPI(query);
  if (serp) return serp;

  // B) DuckDuckGo second
  const ddg = await searchDuckDuckGo(query);
  if (ddg) return ddg;

  // C) Wikipedia last
  const wiki = await searchWikipedia(query);
  if (wiki) return wiki;

  // D) Nothing found
  return null;
}




// =============================
//  FORMAT RESPONSE FOR USER
// =============================
function formatResult(item) {
  if (!item) return "No data found.";

  let text = "";

  if (item.name) text += `🔹 ${item.name}\n\n`;
  if (item.description) text += `${item.description}\n\n`;
  if (item.category) text += `Category: ${item.category}\n`;
  if (item.type) text += `Type: ${item.type}\n`;

  if (item.triggers) {
    text += `\nTriggers:\n- ${item.triggers.join("\n- ")}\n`;
  }

  if (item.steps) {
    text += `\nSteps:\n${item.steps.join("\n")}\n`;
  }

  if (item.tools) {
    text += `\nTools: ${item.tools.join(", ")}\n`;
  }

  if (item.pitfalls) {
    text += `\nPitfalls:\n- ${item.pitfalls.join("\n- ")}\n`;
  }

  if (item.notes) {
    text += `\nNotes: ${item.notes}\n`;
  }

  return text.trim();
}

// =============================
//  INTENT ROUTER
// =============================
function routeQuery(query) {
  const q = query.toLowerCase();

  // Strong matching for IR keywords
  const incidentKeywords = [
    "ransomware",
    "phishing",
    "breach",
    "data breach",
    "exfiltration",
    "ddos",
    "sql injection",
    "sqli",
    "malware infection",
    "insider",
    "compromised credentials",
    "zero day",
    "cloud compromise",
    "incident response"
  ];

  for (const kw of incidentKeywords) {
    if (q.includes(kw)) return { mode: "incident" };
  }

  if (q.includes("attack") || q.includes("malware")) return { mode: "attack" };
  if (q.includes("law") || q.includes("legal")) return { mode: "law" };
  if (q.includes("tool") || q.includes("scan") || q.includes("detect")) return { mode: "tools" };
  if (q.includes("domain")) return { mode: "domain" };

  return { mode: "default" };
}


// =============================
//  QUERY EXPANSION
// =============================
const synonyms = {
  ransomware: ["encryption malware", "crypto virus", "data lock"],
  phishing: ["email scam", "credential theft", "bec"],
  ddos: ["flood attack", "traffic overload", "service disruption"],
  malware: ["virus", "trojan", "worm", "backdoor"]
};

function expandQuery(q) {
  const words = q.toLowerCase().split(" ");
  let expanded = [...words];

  for (const w of words) {
    if (synonyms[w]) {
      expanded = expanded.concat(synonyms[w]);
    }
  }

  return expanded.join(" ");
}


// =============================
//  FOLLOW-UP QUESTION HANDLER
// =============================
function handleFollowUp(query) {
  if (!memory.lastResult || !memory.lastResult.steps) {
    return null; // no previous result with steps
  }

  const q = query.toLowerCase();

  // step N / point N / explain step N
  if (
    q.startsWith("step") ||
    q.startsWith("point") ||
    q.startsWith("explain step") ||
    q.startsWith("what is step") ||
    q.startsWith("tell me step")
  ) {
    const match = q.match(/(\d+)/);
    if (!match) return "Please specify a step number.";

    const stepNum = parseInt(match[1], 10);
    const index = stepNum - 1;

    if (!memory.lastResult.steps[index]) {
      return `Step ${stepNum} does not exist.`;
    }

    return `🔹 Step ${stepNum}:\n${memory.lastResult.steps[index]}`;
  }

  // "next" / "continue"
  if (q === "next" || q === "continue") {
    if (!memory.lastResult.steps || memory.lastResult.steps.length === 0) {
      return "No steps available to continue.";
    }

    memory.stepPointer += 1;

    if (memory.stepPointer >= memory.lastResult.steps.length) {
      memory.stepPointer = 0;
      return "No more steps. Starting again from Step 1.\n\n" +
             `Step 1:\n${memory.lastResult.steps[0]}`;
    }

    const stepIndex = memory.stepPointer;
    return `🔹 Step ${stepIndex + 1}:\n${memory.lastResult.steps[stepIndex]}`;
  }

  return null;
}

// =============================
//  BEST MATCH SELECTOR
// =============================
function getBestResult(results) {
  if (!results || results.length === 0) return null;
  return results[0]; // Fuse already sorts by best match
}

// =============================
//  /chat ENDPOINT
// =============================
app.post("/chat", async (req, res) => {
  const originalQuery = (req.body.query || "").toString().trim();
  const query = originalQuery.toLowerCase();

  if (!originalQuery) {
    return res.status(400).json({ error: "query field is required" });
  }

  // 1) FOLLOW-UP
  const follow = handleFollowUp(query);
  if (follow) {
    return res.json({
      success: true,
      followup: true,
      fromWeb: false,
      answer: follow
    });
  }

  // 2) ROUTING
  const route = routeQuery(query);
  let best = null;

  // 3) INCIDENT MODE (local DB)
  if (route.mode === "incident") {
    const ir = incidentResponces.find(x =>
      query.includes(x.name.toLowerCase().split(" ")[0]) // e.g. "ransomware"
    );
    best = ir || incidentResponces[0];
  }

  // 4) SEARCH MODE (Fuse on local DB)
  else {
    const results = fuse.search(query).map(r => r.item);
    best = results[0] || null;
  }

  // 5) If local DB has an answer → save to memory + return
  if (best) {
    memory.lastResult = best;
    memory.stepPointer = 0;

    return res.json({
      success: true,
      followup: false,
      fromWeb: false,
      answer: formatResult(best),
      raw: best
    });
  }

  // 6) FALLBACK → INTERNET SEARCH (only if local DB failed)
  const webAnswer = await searchInternet(originalQuery);

  if (webAnswer) {
    // Do NOT save to memory, this is not structured with steps
    return res.json({
      success: true,
      followup: false,
      fromWeb: true,
      answer: webAnswer,
      raw: null
    });
  }

  // 7) FINAL fallback if internet also failed
  return res.json({
    success: true,
    followup: false,
    fromWeb: false,
    answer: "Sorry, I couldn't find anything related to your query in my knowledge base or on the internet.",
    raw: null
  });
});



// =============================
//  START SERVER (STATS)
// =============================
console.log("TOTAL ATTACKS:", attacks.length);
console.log("TOTAL LAWS:", law.length);
console.log("TOTAL TOOLS:", cybertool.length);
console.log("TOTAL DEFENSE:", defense.length);

const TOTAL_DETECTION = Object.values(detection).flat().length;
console.log("TOTAL DETECTION:", TOTAL_DETECTION);

const TOTAL_EXAMPLES = Object.values(realworld.examples.allExamples).flat().length;
console.log("TOTAL REALWORLD (EXAMPLES):", TOTAL_EXAMPLES);

console.log("TOTAL CASE STUDIES:", realworld.casestudy.caseStudies.length);
console.log("TOTAL REFERENCES:", realworld.reference.references.length);
console.log("TOTAL THREAT REPORTS:", realworldThreats.length);

console.log("TOTAL DOMAIN:", domain.length);
console.log("TOTAL PRACTICES:", practices.length);
console.log("TOTAL COMMANDS:", commands.length);
console.log("TOTAL INCIDENT RESPONSE:", incidentResponces.length);
console.log("TOTAL DB:", cyberDatabase.length);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});





