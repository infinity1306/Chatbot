const ids_ips = {
  id: "defense_ids_ips",
  name: "IDS / IPS",
  category: "Network Defense",

  definition:
    "IDS (Intrusion Detection System) monitors network or host activity for malicious behavior, while IPS (Intrusion Prevention System) actively blocks detected attacks in real time.",

  purpose:
    "To detect, alert, and prevent cyber attacks such as exploits, malware, unauthorized access, port scans, and suspicious anomalies across network and host systems.",

  how_it_works: {
    signature_based:
      "Compares traffic or system events against a database of known attack signatures. Effective for known threats.",
    anomaly_based:
      "Learns normal behavior and flags deviations as suspicious. Useful for zero-day or unknown attacks.",
    behavior_based:
      "Detects attacks by analyzing suspicious patterns (e.g., brute force, privilege misuse).",
    packet_inspection:
      "Inspects packet payloads and headers to identify exploits, malware, or protocol violations.",
    inline_prevention:
      "IPS sits inline with traffic flow and blocks malicious packets immediately rather than only alerting."
  },

  types: [
    {
      type: "Network IDS (NIDS)",
      description:
        "Monitors network traffic for malicious activity. Placed at strategic points in the network."
    },
    {
      type: "Network IPS (NIPS)",
      description:
        "Blocks malicious network traffic in real time before it reaches the target."
    },
    {
      type: "Host IDS (HIDS)",
      description:
        "Monitors individual systems (logs, file integrity, kernel sequences). Detects anomalies or malware activity."
    },
    {
      type: "Host IPS (HIPS)",
      description:
        "Runs on endpoint and blocks malicious activities like exploit attempts or unauthorized changes."
    },
    {
      type: "Hybrid IDS/IPS",
      description:
        "Combines NIDS, HIDS, anomaly detection, signatures, and behavior-based rules."
    }
  ],

  examples: [
    "Snort",
    "Suricata",
    "OSSEC",
    "Wazuh",
    "Cisco FirePOWER",
    "Palo Alto Threat Prevention",
    "McAfee HIPS",
    "CrowdStrike Falcon IDS features"
  ],

  attacker_bypass_methods: [
    "Using encrypted traffic (SSL/TLS) to hide payloads.",
    "Splitting malicious payloads into smaller packets (fragmentation).",
    "Polymorphic malware that modifies its signature.",
    "Slow, low-and-slow attacks to avoid threshold alerts.",
    "Flooding IDS with noise to hide real attacks.",
    "Using zero-day exploits that have no signature."
  ],

  detection: [
    "Alerts for known signatures (SQLi, XSS, RCE).",
    "Abnormal spikes in traffic or connections.",
    "SSH/FTP/HTTP brute-force attempts.",
    "Port scanning patterns detected.",
    "Unexpected protocol behavior or malformed packets.",
    "Host indicators: file changes, registry modifications, unexpected processes."
  ],

  best_practices: [
    "Enable both signature and anomaly-based detection.",
    "Regularly update signature databases.",
    "Tune rules to reduce false positives.",
    "Enable inline blocking only after tuning IDS alerts.",
    "Monitor both inbound and outbound traffic.",
    "Forward logs to SIEM for correlation.",
    "Integrate with firewall to auto-block detected attacks.",
    "Use SSL inspection where allowed to scan encrypted traffic."
  ],

  common_misconfigurations: [
    "Outdated signature sets.",
    "IDS running but IPS disabled (alert-only mode).",
    "Too many rules disabled due to false positives.",
    "Monitoring only inbound, not outbound traffic.",
    "Poor rule tuning leading to missed attacks or spammed alerts.",
    "IDS placed incorrectly in network, missing key traffic sources."
  ],

  use_cases: [
    "Detecting SQLi, XSS, RCE attempts in network traffic.",
    "Identifying brute-force login attempts.",
    "Spotting port scans and recon activities.",
    "Detecting malware beaconing and C2 communications.",
    "Protecting critical systems by blocking exploit traffic.",
    "Monitoring file integrity and system logs on servers (HIDS)."
  ],

  notes_for_chatbot:
    "When explaining IDS/IPS, highlight difference: IDS = detects and alerts, IPS = detects and blocks. Emphasize signature updates, rule tuning, anomaly detection, and SIEM integration for best defense."
};

module.exports = {ids_ips};
