const siem = {
  id: "defense_siem",
  name: "SIEM",
  category: "Security Monitoring & Detection",

  definition:
    "A SIEM (Security Information and Event Management) system collects, aggregates, correlates, and analyzes logs and security events from multiple sources to detect threats, generate alerts, and support incident response.",

  purpose:
    "To provide centralized visibility, threat detection, correlation, alerting, compliance reporting, and forensic investigation across the entire environment.",

  how_it_works: {
    log_collection:
      "SIEM collects logs from endpoints, servers, firewalls, IDS/IPS, cloud services, applications, and databases.",
    normalization:
      "Logs from different sources are converted into a unified format for consistent analysis.",
    correlation_rules:
      "SIEM correlates multiple related events to spot attacks — e.g., 'failed logins + strange IP + privilege escalation'.",
    threat_intelligence_integration:
      "SIEM matches logs with threat intel feeds (malicious IPs/domains, malware signatures).",
    alerting:
      "Generates alerts for SOC analysts when suspicious activity patterns are detected.",
    dashboards:
      "Provides real-time visualizations of security posture, events, and trends.",
    incident_timeline:
      "Builds a chronological chain of events for investigations and forensic analysis."
  },

  sources_of_logs: [
    "Firewalls",
    "IDS/IPS",
    "Endpoint security tools",
    "Windows Event Logs",
    "Linux syslogs",
    "Authentication servers",
    "Cloud platforms (AWS, Azure, GCP)",
    "Web servers",
    "Databases",
    "Routers and switches",
    "Applications and APIs"
  ],

  examples: [
    "Splunk Enterprise Security",
    "IBM QRadar",
    "Elastic SIEM (ELK)",
    "Azure Sentinel",
    "Google Chronicle",
    "ArcSight",
    "LogRhythm",
    "Rapid7 InsightIDR"
  ],

  detection_capabilities: [
    "Brute force attempts (multiple failed logins)",
    "Suspicious outbound connections (C2 traffic)",
    "Privilege escalation events",
    "Lateral movement patterns",
    "Malware execution signatures",
    "SQL injection attempts",
    "File integrity changes",
    "Baseline deviations"
  ],

  attacker_bypass_methods: [
    "Deleting logs using malware or remote execution.",
    "Log tampering (modifying or corrupting logs).",
    "Generating massive noise to hide malicious events.",
    "Living-off-the-land attacks (using built-in tools like PowerShell).",
    "Encrypting malicious traffic to hide indicators.",
    "Disabling logging services or agents on endpoints."
  ],

  detection: [
    "Missing or unexpected gaps in logs.",
    "Sudden drop in log volume from specific hosts.",
    "Alerts for log tampering or clearing (Windows Event ID 1102).",
    "Correlated anomalies across multiple systems.",
    "Suspicious authentication sequences.",
    "Unexpected admin activity outside business hours."
  ],

  best_practices: [
    "Enable logging on all critical assets.",
    "Forward all logs to SIEM in real time.",
    "Use both signature and behavior-based detection rules.",
    "Update correlation rules regularly to match new threats.",
    "Integrate threat intelligence feeds.",
    "Tag privileged accounts and monitor them more aggressively.",
    "Set up alert severity levels and escalation workflows.",
    "Train analysts to perform effective triage.",
    "Use dashboards for continuous monitoring.",
    "Perform frequent log retention and storage maintenance."
  ],

  common_misconfigurations: [
    "Not collecting enough logs to detect attacks.",
    "Collecting excessive noise without filtering.",
    "Weak or outdated correlation rules.",
    "Logs not time-synchronized (missing NTP).",
    "Critical servers missing from SIEM ingestion.",
    "Alerts configured but not escalated or reviewed.",
    "Lack of retention leading to incomplete investigations."
  ],

  use_cases: [
    "Detecting brute force login attempts.",
    "Tracking insider threats.",
    "Identifying malware outbreak patterns.",
    "Spotting unauthorized access to servers or databases.",
    "Monitoring cloud environment for misconfigurations.",
    "Compliance reporting and audit trails.",
    "Building attack timelines for investigations.",
    "Correlating multiple alerts into a single incident."
  ],

  notes_for_chatbot:
    "When asked about SIEM, emphasize correlation, centralized log management, alerting, and its critical role in SOC operations and incident response."
};

module.exports = {siem};
