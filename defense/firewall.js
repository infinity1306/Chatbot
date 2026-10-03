const firewall = {
  id: "defense_firewall",
  name: "Firewall",
  category: "Network Defense",

  definition:
    "A firewall is a network security device that monitors and controls traffic based on predefined security rules. It sits between trusted and untrusted networks to prevent unauthorized access and attacks.",

  purpose:
    "To block unauthorized connections, filter malicious traffic, enforce security policies, and segment networks.",

  how_it_works: {
    packet_filtering:
      "Inspects packet headers (IP, port, protocol). Allows or blocks traffic based on matching rule conditions.",
    stateful_inspection:
      "Tracks the state of every active connection. Only allows packets that belong to a valid existing connection.",
    proxy_function:
      "Acts as a middleman between client and server, hiding internal addresses and filtering traffic at application level.",
    deep_packet_inspection:
      "Inspects packet payloads in addition to headers to detect malware, intrusions, protocol anomalies, and exploit attempts.",
    rule_processing:
      "Rules are processed top-to-bottom or by priority. First matching rule usually determines the final action (allow/deny)."
  },

  types: [
    {
      type: "Packet Filtering Firewall",
      description:
        "Basic firewall that checks IP addresses, ports, and protocols. Fast but offers limited protection."
    },
    {
      type: "Stateful Firewall",
      description:
        "Tracks connection states and ensures packets belong to legitimate active sessions."
    },
    {
      type: "Application Layer Firewall",
      description:
        "Understands specific application protocols like HTTP, DNS, SMTP and can block malicious patterns."
    },
    {
      type: "Proxy Firewall",
      description:
        "Routes requests through a proxy server, hiding internal systems and filtering traffic more deeply."
    },
    {
      type: "Next-Gen Firewall (NGFW)",
      description:
        "Combines firewall, IDS/IPS, deep packet inspection, malware scanning, and application control."
    },
    {
      type: "Cloud Firewall",
      description:
        "Firewall-as-a-service built into cloud platforms like AWS, Azure, and GCP."
    }
  ],

  examples: [
    "pfSense",
    "Cisco ASA",
    "Checkpoint",
    "FortiGate",
    "Palo Alto NGFW",
    "SonicWall",
    "AWS Security Groups",
    "Azure Network Security Groups",
    "GCP VPC Firewall"
  ],

  attacker_bypass_methods: [
    "Port hopping to find open services.",
    "Embedding malicious traffic inside allowed ports like HTTPS.",
    "Exploiting overly-permissive firewall rules.",
    "Using compromised internal systems to bypass perimeter defenses.",
    "Encrypting malicious payloads to evade deep inspection."
  ],

  detection: [
    "Firewall logs showing repeated blocked connection attempts.",
    "Frequent port scans detected on inbound traffic.",
    "Unusual outbound connections to unknown IPs.",
    "High connection-rate spikes from specific sources.",
    "SIEM alerts correlating suspicious traffic anomalies."
  ],

  best_practices: [
    "Use 'default deny'—block everything except required connections.",
    "Regularly audit firewall rules and remove unused entries.",
    "Restrict administrative panels behind VPN or private networks.",
    "Enable logging for all denied and suspicious traffic.",
    "Use network segmentation to limit lateral movement.",
    "Update firewall firmware frequently to fix vulnerabilities.",
    "Use IDS/IPS integration to block exploit attempts.",
    "Monitor outbound traffic to detect malware or data exfiltration."
  ],

  common_misconfigurations: [
    "Allowing ANY/ANY rules.",
    "Leaving SSH, RDP open to the internet.",
    "Disabled or missing firewall logs.",
    "Too many temporary rules left active.",
    "Permissive outbound rules letting malware communicate freely."
  ],

  use_cases: [
    "Blocking attackers from discovering internal services.",
    "Providing segmentation between departments.",
    "Protecting public-facing servers and APIs.",
    "Filtering malicious IP ranges.",
    "Enforcing Zero-Trust network design.",
    "Protecting cloud workloads from unauthorized access."
  ],

  notes_for_chatbot:
    "Explain firewalls as the primary network defense. Emphasize rule hygiene, segmentation, default-deny posture, and logging as critical security practices."
};

module.exports = {firewall};
