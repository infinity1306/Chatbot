// attacks/cloud.js

const cloudAttacks = [
  {
    id: "misconfigured-s3-bucket",
    name: "Misconfigured S3 Bucket Exposure",
    category: "cloud",
    severity: "critical",
    description: "Publicly accessible Amazon S3 buckets expose sensitive data such as source code, credentials, backups, or user data due to incorrect ACL or bucket policies.",
    detection: [
      "Cloud CSPM alerts for public buckets",
      "Anonymous access logs",
      "Unexpected data downloads from unknown IPs"
    ],
    impact: [
      "Massive data leakage",
      "Credential exposure",
      "Brand damage and legal issues"
    ],
    propagation: [
      "Misconfigured bucket policies",
      "Overly permissive ACLs",
      "Improper IAM roles on buckets"
    ],
    mitigation: [
      "Block all public bucket access by default",
      "Use bucket policy guards",
      "Enable AWS Macie or Azure Security Center scanning"
    ],
    keywords: ["s3 exposure", "public bucket", "cloud storage leak"]
  },

  {
    id: "iam-privilege-escalation",
    name: "Cloud IAM Privilege Escalation",
    category: "cloud",
    severity: "critical",
    description: "Attackers exploit weak IAM policies to escalate privileges and gain access to high-value cloud resources or full account takeover.",
    detection: [
      "IAM role changes outside scheduled updates",
      "CloudTrail logs showing privilege upgrade attempts",
      "Unusual role assumption behaviors"
    ],
    impact: [
      "Complete cloud account takeover",
      "Stealing or modifying all cloud assets",
      "Long-term persistence in cloud environment"
    ],
    propagation: [
      "Exploiting wildcard IAM permissions",
      "Using weak or overly broad policies",
      "Abusing misconfigured role trusts"
    ],
    mitigation: [
      "Use least-privilege IAM principle",
      "Implement MFA for all privileged roles",
      "Audit IAM policies regularly"
    ],
    keywords: ["iam escalation", "policy misconfiguration", "cloud privilege escalation"]
  },

  {
    id: "credential-compromise",
    name: "Cloud Credential Compromise",
    category: "cloud",
    severity: "critical",
    description: "Cloud API keys, access tokens, or secrets are stolen from code repos, logs, or memory, allowing full unauthorized cloud access.",
    detection: [
      "Access from unusual locations",
      "Rapid cloud API calls",
      "Use of access keys outside known IP ranges"
    ],
    impact: [
      "Cloud resource deletion",
      "Data theft",
      "Cryptomining deployment"
    ],
    propagation: [
      "Leaked credentials via GitHub or logs",
      "Malware stealing environment variables"
    ],
    mitigation: [
      "Rotate API keys immediately after breach",
      "Use cloud secret managers",
      "Enable MFA and IP restriction"
    ],
    keywords: ["api key theft", "cloud credentials", "cloud login compromise"]
  },

  {
    id: "cloud-ransomware",
    name: "Cloud Ransomware Deployment",
    category: "cloud",
    severity: "critical",
    description: "Attackers deploy ransomware across cloud storage, VMs, or databases after gaining access, encrypting business-critical assets.",
    detection: [
      "Sudden file renaming across cloud storage",
      "High write/delete operations",
      "EDR alerts on cloud-hosted workloads"
    ],
    impact: [
      "Loss of cloud data",
      "Service downtime",
      "Financial loss due to ransom/extortion"
    ],
    propagation: [
      "Compromised IAM accounts",
      "Unauthorized API actions on storage",
      "Malware spreading through cloud file shares"
    ],
    mitigation: [
      "Offline backups",
      "Least-privilege IAM",
      "File access anomaly detection"
    ],
    keywords: ["cloud ransomware", "cloud encryption attack", "storage encryption malware"]
  },

  {
    id: "container-escape",
    name: "Container Escape",
    category: "cloud",
    severity: "critical",
    description: "A compromised container breaks isolation and gains access to host OS or other containers due to misconfiguration or kernel vulnerabilities.",
    detection: [
      "Unexpected host-level syscalls from container",
      "Root processes spawned on host",
      "Container orchestrator alerts (K8s)"
    ],
    impact: [
      "Cluster-wide compromise",
      "Access to host filesystem",
      "Steal secrets from other containers"
    ],
    propagation: [
      "Privileged containers",
      "Mounted host directories",
      "Kernel exploits in container runtimes"
    ],
    mitigation: [
      "Avoid privileged containers",
      "Use container sandboxing",
      "Apply security patches to runtimes (Docker/K8s)"
    ],
    keywords: ["container escape", "docker breakout", "kubernetes escape"]
  },

  {
    id: "kubernetes-rbac-misconfig",
    name: "Kubernetes RBAC Misconfiguration",
    category: "cloud",
    severity: "high",
    description: "Weak Kubernetes role-based access controls allow unauthorized access to Kubernetes API, pods, secrets or cluster-wide resources.",
    detection: [
      "Audit logs showing privilege escalation",
      "Unusual kubectl commands",
      "Service accounts performing unauthorized actions"
    ],
    impact: [
      "Control of entire Kubernetes cluster",
      "Secret theft",
      "Workload modification or cryptomining"
    ],
    propagation: [
      "Wildcard RBAC policies",
      "Unsafe service accounts",
      "Exposed kubelet ports"
    ],
    mitigation: [
      "Apply least-privilege RBAC",
      "Disable anonymous Kubernetes API access",
      "Restrict service account tokens"
    ],
    keywords: ["k8s rbac", "kubernetes misconfig", "cluster takeover"]
  },

  {
    id: "metadata-service-exposure",
    name: "Metadata Service Exploitation",
    category: "cloud",
    severity: "critical",
    description: "Attackers access cloud instance metadata URLs (e.g., AWS 169.254.169.254) to steal access tokens or credentials used by services.",
    detection: [
      "Web servers making requests to metadata URL",
      "Unusual internal traffic",
      "IAM role token access logs"
    ],
    impact: [
      "Access to cloud APIs",
      "Privilege escalation",
      "Control of cloud workloads"
    ],
    propagation: [
      "SSRF attacks",
      "Exposed metadata service",
      "Insecure IAM role bindings"
    ],
    mitigation: [
      "Enable IMDSv2 (AWS)",
      "Block metadata URL from containers",
      "Use firewall rules"
    ],
    keywords: ["metadata service attack", "imds exploit", "169.254 attack"]
  },

  {
    id: "cloud-sql-injection",
    name: "Cloud Database SQL Injection",
    category: "cloud",
    severity: "high",
    description: "SQL injection on cloud-managed database services (AWS RDS, Azure SQL, GCP CloudSQL).",
    detection: [
      "SQL error responses",
      "WAF alerts",
      "Spike in database queries"
    ],
    impact: [
      "Reading or deleting cloud-stored data",
      "RCE via extended stored procedures"
    ],
    propagation: [
      "User input to cloud DB apps",
      "Weak API validation"
    ],
    mitigation: [
      "Parameterized queries",
      "Strong input validation"
    ],
    keywords: ["cloud sql injection", "cloud sqli"]
  },

  {
    id: "unrestricted-cors",
    name: "Unrestricted CORS Policy",
    category: "cloud",
    severity: "high",
    description: "Improper CORS configuration allows websites to make authenticated API calls on behalf of a cloud user without permission.",
    detection: [
      "Access-Control-Allow-Origin: *",
      "Unexpected origins in cloud logs"
    ],
    impact: [
      "Cross-domain data theft",
      "API abuse",
      "Cloud user impersonation"
    ],
    propagation: [
      "Weak CORS headers",
      "Public APIs with session cookies"
    ],
    mitigation: [
      "Use strict allowlists",
      "Remove wildcard CORS policies"
    ],
    keywords: ["cloud cors", "cors misconfig", "api cors exploit"]
  },

  {
    id: "misconfigured-security-groups",
    name: "Misconfigured Security Groups / Firewalls",
    category: "cloud",
    severity: "high",
    description: "Cloud security groups exposing unnecessary ports (22, 3389, 80) to the public internet allow attackers easy entry into cloud workloads.",
    detection: [
      "Open ports visible on Shodan",
      "Unexpected inbound connections",
      "Cloud firewall misconfig alerts"
    ],
    impact: [
      "Unauthorized OS access",
      "Brute-force attacks",
      "Malware deployment"
    ],
    propagation: [
      "Admin exposing ports for convenience",
      "Improper firewall rules"
    ],
    mitigation: [
      "Use least privilege firewall rules",
      "Restrict admin interfaces to specific IPs"
    ],
    keywords: ["cloud firewall misconfig", "open ports cloud"]
  },

  {
    id: "secrets-in-env",
    name: "Secrets Stored in Environment Variables",
    category: "cloud",
    severity: "medium",
    description: "API keys or tokens stored in environment variables can be leaked through logs or container breaks.",
    detection: [
      "Secrets appearing in logs",
      "Access to env variables by compromised apps"
    ],
    impact: [
      "Key theft",
      "Unauthorized API access"
    ],
    propagation: [
      "Developers hardcoding environment variables",
      "CI/CD pipelines exposing secrets"
    ],
    mitigation: [
      "Use secret managers",
      "Rotate secrets"
    ],
    keywords: ["env secret leak", "cloud env variable attack"]
  },

  {
    id: "ci-cd-pipeline-compromise",
    name: "CI/CD Pipeline Compromise",
    category: "cloud",
    severity: "critical",
    description: "Attackers compromise CI/CD pipelines to inject malicious code or deploy backdoors into cloud infrastructure.",
    detection: [
      "Unexpected pipeline executions",
      "Unauthorized changes in build scripts",
      "New deployments outside normal schedule"
    ],
    impact: [
      "Malicious code injected into production",
      "Full cloud environment takeover"
    ],
    propagation: [
      "Stolen CI/CD credentials",
      "Unsafe build agents",
      "Dependency poisoning"
    ],
    mitigation: [
      "Secure CI/CD credentials",
      "Use signed artifacts",
      "Restrict access to pipelines"
    ],
    keywords: ["cicd attack", "pipeline compromise", "cloud devops attack"]
  },

  {
    id: "cloud-dns-takeover",
    name: "Cloud DNS Takeover",
    category: "cloud",
    severity: "critical",
    description: "Attackers hijack DNS zones or records in cloud DNS (Route53, Cloud DNS, Azure DNS).",
    detection: [
      "Unapproved DNS record changes",
      "Traffic suddenly directed to unknown IPs"
    ],
    impact: [
      "Phishing",
      "Service hijacking",
      "Domain impersonation"
    ],
    propagation: [
      "Compromised cloud accounts",
      "Misconfigured DNS access policies"
    ],
    mitigation: [
      "Lock DNS settings",
      "Use DNSSEC",
      "Audit DNS access"
    ],
    keywords: ["cloud dns attack", "dns takeover", "route53 hijack"]
  },

  {
    id: "cloud-malware-propagation",
    name: "Cloud Malware Propagation",
    category: "cloud",
    severity: "high",
    description: "Malware spreads across cloud storage or shared compute by infecting synced files or containers.",
    detection: [
      "Unusual file modifications across storage",
      "Malicious containers appearing in registry"
    ],
    impact: [
      "Cross-tenant infection",
      "Data corruption"
    ],
    propagation: [
      "Auto-synced file shares",
      "Shared container registries"
    ],
    mitigation: [
      "Scan cloud storage",
      "Use trusted container images only"
    ],
    keywords: ["cloud virus", "cloud worm"]
  },

  {
    id: "cloud-ssrf",
    name: "Cloud SSRF Attack",
    category: "cloud",
    severity: "critical",
    description: "Server-Side Request Forgery targets cloud-specific metadata services or internal cloud APIs.",
    detection: [
      "Requests to internal networks",
      "Metadata access logs"
    ],
    impact: [
      "Cloud credential theft",
      "Internal network access"
    ],
    propagation: [
      "Vulnerable cloud APIs",
      "Weak input filters"
    ],
    mitigation: [
      "Block internal addresses",
      "Use IMDSv2"
    ],
    keywords: ["cloud ssrf", "metadata ssrf"]
  },

  {
    id: "cloud-dos",
    name: "Cloud Denial-of-Service",
    category: "cloud",
    severity: "high",
    description: "Attackers overload cloud-hosted applications or databases, causing service outages.",
    detection: [
      "Traffic spikes",
      "Auto-scaling exhaustion"
    ],
    impact: [
      "Service downtime",
      "Financial cost due to auto-scaling abuse"
    ],
    propagation: ["Botnets"],
    mitigation: [
      "Enable rate limits",
      "Use cloud WAF"
    ],
    keywords: ["cloud dos", "autoscaling attack"]
  },

  {
    id: "exposed-docker-daemon",
    name: "Exposed Docker Daemon",
    category: "cloud",
    severity: "critical",
    description: "Docker daemon exposed on TCP port without authentication allows full container and host takeover.",
    detection: [
      "Open Docker port 2375/2376",
      "Unknown containers being created"
    ],
    impact: [
      "Host takeover",
      "Inject malicious containers"
    ],
    propagation: [
      "Misconfigured Docker settings"
    ],
    mitigation: [
      "Disable remote daemon",
      "Enable TLS"
    ],
    keywords: ["docker exploit", "open docker port"]
  },

  {
    id: "publicly-exposed-redis",
    name: "Publicly Exposed Redis",
    category: "cloud",
    severity: "high",
    description: "Redis instances exposed without authentication allow attackers to write to disk and gain remote command execution.",
    detection: ["Unauthorized SET/CONFIG operations"],
    impact: ["Data loss", "Remote command execution"],
    propagation: ["Misconfigured Redis port"],
    mitigation: ["Enable authentication", "Firewall protection"],
    keywords: ["redis hack", "redis exposure"]
  },

  {
    id: "cloud-man-in-the-middle",
    name: "Cloud Man-in-the-Middle (MitM)",
    category: "cloud",
    severity: "high",
    description: "Attackers intercept cloud traffic by abusing compromised certificates or DNS hijacking.",
    detection: ["Certificate mismatches"],
    impact: ["Traffic interception"],
    propagation: ["Compromised TLS certs"],
    mitigation: ["Use HSTS", "Rotate certificates"],
    keywords: ["cloud mitm", "tls hijack"]
  },

  {
    id: "serverless-abuse",
    name: "Serverless Function Abuse",
    category: "cloud",
    severity: "medium",
    description: "Attackers trigger serverless functions excessively or exploit insecure logic within functions.",
    detection: ["Spike in serverless invocations"],
    impact: ["Large billing charges"],
    propagation: ["Public function triggers"],
    mitigation: ["Rate limiting"],
    keywords: ["lambda abuse", "serverless attack"]
  },

  {
    id: "cloud-crypto-mining",
    name: "Cloud Cryptomining Injection",
    category: "cloud",
    severity: "high",
    description: "Attackers deploy cryptominers in cloud workloads, consuming compute resources.",
    detection: ["High CPU usage in VMs/containers"],
    impact: ["Financial loss"],
    propagation: ["Compromised workloads"],
    mitigation: ["Monitor CPU anomalies"],
    keywords: ["cloud mining", "cryptojacking cloud"]
  },

  {
    id: "object-storage-rce",
    name: "Object Storage RCE",
    category: "cloud",
    severity: "critical",
    description: "Payloads uploaded to cloud storage execute automatically due to misconfigured triggers.",
    detection: ["Unusual triggers firing"],
    impact: ["Remote code execution"],
    propagation: ["Malicious uploaded files"],
    mitigation: ["Restrict triggers"],
    keywords: ["storage rce", "cloud trigger exploit"]
  },

  {
    id: "expired-cert-exploit",
    name: "Expired Certificate Exploit",
    category: "cloud",
    severity: "medium",
    description: "Expired TLS certificates lead to MitM risks and DoS on cloud services.",
    detection: ["Certificate expiration warnings"],
    impact: ["Service downtime"],
    propagation: ["Neglected certificate management"],
    mitigation: ["Automate renewal"],
    keywords: ["expired cert", "tls failure"]
  },

  {
    id: "cloud-spam-relay",
    name: "Cloud Spam Relay Abuse",
    category: "cloud",
    severity: "medium",
    description: "Attackers abuse cloud servers with misconfigured mail ports to relay spam.",
    detection: ["Spike in outbound SMTP traffic"],
    impact: ["IP blacklisting"],
    propagation: ["Open mail ports"],
    mitigation: ["Block SMTP outbound"],
    keywords: ["cloud spam", "smtp abuse"]
  },

  {
    id: "tenant-escape",
    name: "Cloud Tenant Escape",
    category: "cloud",
    severity: "critical",
    description: "A vulnerability in cloud hypervisor or isolation allows one tenant to access another tenant’s data.",
    detection: ["Hypervisor alerts"],
    impact: ["Cross-tenant data theft"],
    propagation: ["Hypervisor bugs"],
    mitigation: ["Use updated cloud providers"],
    keywords: ["tenant escape", "hypervisor exploit"]
  },

  {
    id: "malicious-cloud-instance",
    name: "Malicious Cloud Instance Deployment",
    category: "cloud",
    severity: "high",
    description: "Attacker spins up new cloud instances using compromised accounts to run malware or miners.",
    detection: ["Unexpected new VMs"],
    impact: ["Billing fraud"],
    propagation: ["Stolen cloud credentials"],
    mitigation: ["Use IAM limits"],
    keywords: ["vm abuse", "fraud instance"]
  },

  {
    id: "container-registry-poisoning",
    name: "Container Registry Poisoning",
    category: "cloud",
    severity: "high",
    description: "Attackers push malicious container images to internal registries.",
    detection: ["Unexpected image uploads"],
    impact: ["Malicious deployments"],
    propagation: ["Weak registry auth"],
    mitigation: ["Sign images"],
    keywords: ["registry poisoning", "malicious container"]
  },

  {
    id: "dns-amplification-cloud",
    name: "DNS Amplification via Cloud",
    category: "cloud",
    severity: "high",
    description: "Misconfigured DNS resolvers in cloud environments used for large-scale DDoS.",
    detection: ["Huge DNS response traffic"],
    impact: ["DDoS scalability"],
    propagation: ["Open resolvers"],
    mitigation: ["Restrict recursion"],
    keywords: ["cloud ddos amp", "dns amp"]
  },

  {
    id: "cloud-token-exfiltration",
    name: "Cloud Token Exfiltration",
    category: "cloud",
    severity: "high",
    description: "Attackers steal session or access tokens from browsers or server logs.",
    detection: ["Token reuse from foreign IPs"],
    impact: ["Full cloud account takeover"],
    propagation: ["JS injection", "log leaks"],
    mitigation: ["Short-lived tokens"],
    keywords: ["token theft cloud", "session steal"]
  },

  {
    id: "storage-versioning-abuse",
    name: "Storage Versioning Abuse",
    category: "cloud",
    severity: "medium",
    description: "Attackers tamper with file versioning to delete prior safe versions of cloud data.",
    detection: ["Rapid version deletion"],
    impact: ["Permanent data loss"],
    propagation: ["Public storage access"],
    mitigation: ["Lock version controls"],
    keywords: ["storage version attack", "cloud delete versions"]
  },

  {
    id: "cloud-lfi",
    name: "Cloud Local File Inclusion",
    category: "cloud",
    severity: "high",
    description: "Cloud-hosted web apps loading local files insecurely allow attackers to access credentials or environment configs.",
    detection: ["Unexpected file reads"],
    impact: ["Secret theft"],
    propagation: ["File inclusion bugs"],
    mitigation: ["Sanitize paths"],
    keywords: ["cloud lfi", "cloud file inclusion"]
  },

  {
    id: "cloud-logging-bypass",
    name: "Cloud Logging Bypass",
    category: "cloud",
    severity: "high",
    description: "Attackers disable cloud logs to hide malicious activity.",
    detection: ["Audit logs disabled"],
    impact: ["Forensic blindness"],
    propagation: ["Admin misuse"],
    mitigation: ["Restrict log controls"],
    keywords: ["cloud log bypass", "cloudtrail bypass"]
  },

  {
    id: "vm-snapshot-theft",
    name: "VM Snapshot Theft",
    category: "cloud",
    severity: "high",
    description: "Attackers steal VM snapshots to extract entire OS disk images.",
    detection: ["Unexpected snapshot creation"],
    impact: ["Data theft"],
    propagation: ["Weak IAM snapshot permissions"],
    mitigation: ["Restrict snapshot actions"],
    keywords: ["snapshot theft", "vm image steal"]
  },

  {
    id: "misconfigured-load-balancer",
    name: "Misconfigured Load Balancer Exposure",
    category: "cloud",
    severity: "medium",
    description: "Public load balancers expose internal services if incorrectly configured.",
    detection: ["Unexpected public endpoints"],
    impact: ["Unwanted exposure"],
    propagation: ["Bad routing rules"],
    mitigation: ["Restrict routing"],
    keywords: ["cloud lb misconfig", "load balancer attack"]
  },

  {
    id: "api-rate-limit-bypass",
    name: "API Rate Limit Bypass",
    category: "cloud",
    severity: "medium",
    description: "Attackers bypass API throttling to overload cloud services or perform enumeration.",
    detection: ["Excessive API calls"],
    impact: ["Potential DoS"],
    propagation: ["Lack of throttling"],
    mitigation: ["Proper rate limiting"],
    keywords: ["rate limit bypass", "api flood"]
  }
];

module.exports = {cloudAttacks};
