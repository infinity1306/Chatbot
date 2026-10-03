// attacks/web.js

const webAttacks = [
  {
    id: "sql-injection",
    name: "SQL Injection",
    category: "web",
    severity: "critical",
    description: "Attacker injects malicious SQL queries into input fields to manipulate or dump the database.",
    detection: [
      "SQL errors appearing in response",
      "WAF alerts for SQL payloads",
      "Abnormal DB query patterns"
    ],
    impact: [
      "Database takeover",
      "Data theft",
      "Credential dumping",
      "Privilege escalation"
    ],
    propagation: [
      "Login forms",
      "Search bars",
      "URL parameters"
    ],
    mitigation: [
      "Parameterized queries",
      "Input sanitization",
      "WAF filtering",
      "ORM usage"
    ],
    keywords: ["sql injection", "sqli", "database injection", "union select"]
  },

  {
    id: "xss",
    name: "Cross-Site Scripting (XSS)",
    category: "web",
    severity: "high",
    description: "Allows attacker-injected JavaScript to run in the victim’s browser, stealing data or performing actions.",
    detection: [
      "Unexpected JS execution",
      "CSP violations",
      "HTML injection alerts"
    ],
    impact: [
      "Session hijacking",
      "Credential theft",
      "Website defacement"
    ],
    propagation: [
      "Comment sections",
      "Input fields",
      "URL parameters"
    ],
    mitigation: [
      "HTML escaping",
      "CSP headers",
      "Sanitization"
    ],
    keywords: ["xss", "cross site scripting", "reflected xss", "stored xss"]
  },

  {
    id: "csrf",
    name: "Cross-Site Request Forgery",
    category: "web",
    severity: "high",
    description: "Makes a logged-in user unknowingly perform dangerous actions such as money transfers.",
    detection: [
      "Missing CSRF tokens",
      "Suspicious state-changing requests"
    ],
    impact: [
      "Wallet drain",
      "Password change",
      "Account takeover"
    ],
    propagation: [
      "Malicious links",
      "Hidden HTML forms"
    ],
    mitigation: [
      "CSRF tokens",
      "SameSite cookies"
    ],
    keywords: ["csrf", "cross site request forgery", "request hijack"]
  },

  {
    id: "clickjacking",
    name: "Clickjacking",
    category: "web",
    severity: "medium",
    description: "Attacker tricks users to click hidden elements through transparent frames.",
    detection: [
      "Unexpected iframes",
      "Overlay elements"
    ],
    impact: [
      "Unauthorized actions",
      "Ad fraud"
    ],
    propagation: [
      "Iframe overlays",
      "Trick buttons"
    ],
    mitigation: [
      "X-Frame-Options",
      "CSP frame-ancestors"
    ],
    keywords: ["clickjacking", "ui redress"]
  },

  {
    id: "directory-traversal",
    name: "Directory Traversal",
    category: "web",
    severity: "high",
    description: "Attacker accesses server files outside allowed paths using ../ patterns.",
    detection: [
      "Logs showing '../' requests",
      "Unauthorized file access"
    ],
    impact: [
      "Config leak",
      "Credential exposure"
    ],
    propagation: ["URL file paths"],
    mitigation: [
      "Path normalization",
      "Input validation"
    ],
    keywords: ["directory traversal", "path traversal", "../attack"]
  },

  {
    id: "lfi",
    name: "Local File Inclusion",
    category: "web",
    severity: "high",
    description: "Attacker forces application to load sensitive local files.",
    detection: ["Access to /etc/passwd", "Suspicious include paths"],
    impact: ["Source code leak", "RCE (if combined)"],
    propagation: ["File include parameters"],
    mitigation: ["Input sanitization"],
    keywords: ["lfi", "local include", "php include"]
  },

  {
    id: "rfi",
    name: "Remote File Inclusion",
    category: "web",
    severity: "critical",
    description: "Loads remote malicious scripts directly into server.",
    detection: ["Full URLs in include parameters"],
    impact: ["Remote code execution"],
    propagation: ["URL parameters"],
    mitigation: ["Disable allow_url_fopen"],
    keywords: ["rfi", "remote file inclusion"]
  },

  {
    id: "ssti",
    name: "Server-Side Template Injection",
    category: "web",
    severity: "critical",
    description: "Attacker injects template syntax to execute backend code.",
    detection: ["Template errors", "Weird server output"],
    impact: ["RCE", "Server takeover"],
    propagation: ["User inputs"],
    mitigation: ["Disable template functions"],
    keywords: ["ssti", "template injection"]
  },

  {
    id: "xxe",
    name: "XML External Entity Attack",
    category: "web",
    severity: "high",
    description: "Abusive XML entities allow reading sensitive server files.",
    detection: ["XML ENTITY in input"],
    impact: ["File disclosure", "SSRF", "DoS"],
    propagation: ["XML parser"],
    mitigation: ["Disable external entities"],
    keywords: ["xxe", "xml entity attack"]
  },

  {
    id: "ssrf",
    name: "Server-Side Request Forgery",
    category: "web",
    severity: "critical",
    description: "Server is tricked to fetch internal URLs.",
    detection: ["Requests to internal IP ranges"],
    impact: ["Internal scanning", "Metadata theft (AWS Keys)"],
    propagation: ["URL fetch APIs"],
    mitigation: ["Block internal IPs"],
    keywords: ["ssrf", "request forgery"]
  },

  {
    id: "open-redirect",
    name: "Open Redirect",
    category: "web",
    severity: "medium",
    description: "Redirects users to attacker-controlled sites.",
    detection: ["Redirect to unknown domains"],
    impact: ["Phishing"],
    propagation: ["URL params"],
    mitigation: ["Whitelist domains"],
    keywords: ["open redirect"]
  },

  {
    id: "session-fixation",
    name: "Session Fixation",
    category: "web",
    severity: "high",
    description: "Attacker sets a victim’s session token before login.",
    detection: ["Session reuse patterns"],
    impact: ["Account takeover"],
    propagation: ["URL session tokens"],
    mitigation: ["Regenerate session after login"],
    keywords: ["session fixation"]
  },

  {
    id: "cookie-poisoning",
    name: "Cookie Poisoning",
    category: "web",
    severity: "medium",
    description: "Attacker modifies cookie values to escalate privileges.",
    detection: ["Tampered cookie values"],
    impact: ["Privilege escalation"],
    propagation: ["User-editable cookies"],
    mitigation: ["Signed cookies"],
    keywords: ["cookie poisoning"]
  },

  {
    id: "host-header-injection",
    name: "Host Header Injection",
    category: "web",
    severity: "high",
    description: "Manipulated Host header causes cache poisoning or password reset hijacks.",
    detection: ["Unexpected Host headers"],
    impact: ["Account takeover"],
    propagation: ["Modified Host headers"],
    mitigation: ["Strict header validation"],
    keywords: ["host header", "header injection"]
  },

  {
    id: "cache-poisoning",
    name: "Web Cache Poisoning",
    category: "web",
    severity: "high",
    description: "Poisoning reverse proxies or CDN cache with malicious responses.",
    detection: ["Unexpected cached responses"],
    impact: ["Mass phishing at scale"],
    propagation: ["Crafted headers"],
    mitigation: ["Correct cache keys"],
    keywords: ["cache poisoning"]
  },

  {
    id: "websocket-hijacking",
    name: "WebSocket Hijacking",
    category: "web",
    severity: "high",
    description: "Attacker joins insecure WebSocket connections.",
    detection: ["Strange WebSocket activity"],
    impact: ["Session hijacking"],
    propagation: ["ws:// insecure"],
    mitigation: ["Use wss://", "Auth layers"],
    keywords: ["websocket hijack"]
  },

  {
    id: "subdomain-takeover",
    name: "Subdomain Takeover",
    category: "web",
    severity: "critical",
    description: "Unclaimed DNS entries allow attackers to control subdomains.",
    detection: ["NXDOMAIN responses"],
    impact: ["Phishing"],
    propagation: ["Dangling DNS"],
    mitigation: ["DNS cleanup"],
    keywords: ["subdomain hijack"]
  },

  {
    id: "graphql-abuse",
    name: "GraphQL Abuse",
    category: "web",
    severity: "medium",
    description: "Abusing introspection and heavy GraphQL queries.",
    detection: ["Large introspection requests"],
    impact: ["Data exposure"],
    propagation: ["GraphQL APIs"],
    mitigation: ["Disable introspection"],
    keywords: ["graphql exploitation"]
  },

  {
    id: "ace",
    name: "Arbitrary Code Execution (Web)",
    category: "web",
    severity: "critical",
    description: "Server executes attacker-supplied code.",
    detection: ["Unexpected server behavior"],
    impact: ["Full takeover"],
    propagation: ["Unsafe eval()", "RCE bugs"],
    mitigation: ["Disable eval", "Sanitize input"],
    keywords: ["rce", "ace"]
  },

  {
    id: "http-request-smuggling",
    name: "HTTP Request Smuggling",
    category: "web",
    severity: "critical",
    description: "Manipulation of Content-Length and Transfer-Encoding to bypass front-end proxies.",
    detection: ["CL/TE mismatches"],
    impact: ["Session hijacking", "Cache poisoning"],
    propagation: ["Malformed requests"],
    mitigation: ["Normalize headers"],
    keywords: ["request smuggling", "cl te attack"]
  }
];

module.exports = {webAttacks};
