const networkAttacks = [
  {
    id: "arp-spoofing",
    name: "ARP Spoofing / ARP Poisoning",
    category: "network",
    severity: "high",
    description: `ARP spoofing is a local network attack where the attacker sends fake ARP replies to associate their MAC address with another device’s IP (often the gateway). This lets them intercept, modify or block traffic on the LAN (classic Man-in-the-Middle).`,
    detection: [
      "Multiple ARP replies with conflicting MAC addresses",
      "ARP table entries changing frequently",
      "IDS alerts for ARP poisoning patterns"
    ],
    impact: [
      "Traffic interception and credential theft",
      "Session hijacking and data manipulation",
      "Denial of service for targeted hosts"
    ],
    propagation: [
      "Attacker connected to same LAN or Wi-Fi",
      "Use of ARP spoofing tools on the segment"
    ],
    mitigation: [
      "Use static ARP entries for critical systems",
      "Enable Dynamic ARP Inspection on managed switches",
      "Enforce encrypted protocols like HTTPS, SSH, VPN"
    ],
    keywords: ["arp spoof", "arp spoofing", "arp poisoning", "lan mitm"]
  },
  {
    id: "dns-poisoning",
    name: "DNS Poisoning / DNS Cache Poisoning",
    category: "network",
    severity: "critical",
    description: `DNS poisoning manipulates DNS responses so users are redirected to malicious IP addresses instead of legitimate destinations. It can happen on local resolvers, DNS caches, or compromised DNS servers.`,
    detection: [
      "DNS responses pointing to unexpected IP ranges",
      "Users reaching fake login pages for common services",
      "DNS logs showing sudden changes in resolved addresses"
    ],
    impact: [
      "Credential theft via phishing sites",
      "Traffic redirection for malware distribution",
      "Large-scale compromise if many users share the resolver"
    ],
    propagation: [
      "Exploiting DNS server software flaws",
      "Injecting forged DNS responses into the network",
      "Compromising DNS admin credentials"
    ],
    mitigation: [
      "Use DNSSEC and secure resolvers",
      "Restrict who can query and update DNS",
      "Monitor DNS integrity and unexpected IP changes"
    ],
    keywords: ["dns poisoning", "dns cache poisoning", "dns spoofing"]
  },
  {
    id: "mitm-lan",
    name: "LAN Man-in-the-Middle",
    category: "network",
    severity: "high",
    description: `LAN MITM attacks place the attacker logically between two communicating systems on a local network so they can eavesdrop, modify or inject traffic in real time.`,
    detection: [
      "Duplicate IP or MAC addresses on the network",
      "Unexpected SSL/TLS certificate warnings",
      "Strange ARP or DHCP behaviour on the LAN"
    ],
    impact: [
      "Credential and session hijacking",
      "Injection of malicious content into HTTP traffic",
      "Data manipulation on internal systems"
    ],
    propagation: [
      "ARP spoofing or DHCP spoofing on the LAN",
      "Rogue access points or switches"
    ],
    mitigation: [
      "Encrypt traffic (HTTPS, SSH, VPN)",
      "Harden LAN with DHCP snooping and ARP inspection",
      "Use network segmentation and 802.1X authentication"
    ],
    keywords: ["man in the middle", "mitm", "lan mitm", "network eavesdropping"]
  },
  {
    id: "syn-flood",
    name: "TCP SYN Flood",
    category: "network",
    severity: "high",
    description: `A SYN flood is a denial-of-service attack that abuses the TCP handshake by sending many SYN packets without completing the handshake. The server allocates resources for half-open connections until it runs out.`,
    detection: [
      "Unusually high number of half-open TCP connections",
      "SYN packets with no corresponding ACKs",
      "Firewall/IDS alerts for SYN flood patterns"
    ],
    impact: [
      "Legitimate clients cannot establish connections",
      "Degraded performance or complete service outage"
    ],
    propagation: [
      "Botnets sending spoofed SYN packets",
      "Single attacker with strong bandwidth"
    ],
    mitigation: [
      "Enable SYN cookies on servers and firewalls",
      "Use rate limiting and connection limits",
      "Deploy DDoS protection or scrubbing services"
    ],
    keywords: ["syn flood", "tcp syn flood", "syn dos", "syn ddos"]
  },
  {
    id: "udp-flood",
    name: "UDP Flood",
    category: "network",
    severity: "high",
    description: `A UDP flood sends a massive number of UDP packets to random ports on the target, causing it to respond with ICMP unreachable messages or process junk traffic, consuming bandwidth and resources.`,
    detection: [
      "Large volume of UDP packets to many ports",
      "High CPU usage on firewalls and routers",
      "NetFlow showing many small UDP flows"
    ],
    impact: [
      "Network congestion and latency",
      "Service slowdown or unavailability"
    ],
    propagation: [
      "Botnet-based distributed UDP traffic",
      "Misconfigured scripts generating floods"
    ],
    mitigation: [
      "Rate limit UDP where possible",
      "Drop obvious spoofed traffic at edge routers",
      "Use DDoS mitigation services"
    ],
    keywords: ["udp flood", "udp ddos", "udp attack"]
  },
  {
    id: "icmp-flood",
    name: "ICMP Flood / Ping Flood",
    category: "network",
    severity: "medium",
    description: `An ICMP flood sends many ICMP echo requests (pings) to the target, exhausting its bandwidth or processing capacity. Often used as a simple DoS technique.`,
    detection: [
      "Unusual spike in ICMP echo requests",
      "Firewall logs flooded with ping requests",
      "High inbound ICMP traffic in NetFlow"
    ],
    impact: [
      "Increased latency and packet loss",
      "Temporary denial of service for legitimate users"
    ],
    propagation: [
      "Single attacker or distributed via botnets",
      "Abused test or monitoring tools"
    ],
    mitigation: [
      "Rate limit ICMP traffic at routers/firewalls",
      "Block unnecessary ICMP from the internet",
      "Use DDoS scrubbing for large attacks"
    ],
    keywords: ["icmp flood", "ping flood", "icmp ddos"]
  },
  {
    id: "smurf-attack",
    name: "Smurf Attack",
    category: "network",
    severity: "high",
    description: `A Smurf attack is a DDoS technique where the attacker sends ICMP echo requests to a broadcast address with the victim’s IP spoofed. All hosts reply to the victim, amplifying the traffic.`,
    detection: [
      "ICMP traffic from many hosts toward one victim",
      "Broadcast address seeing many ICMP requests",
      "IDS alerts about smurf patterns"
    ],
    impact: [
      "Bandwidth saturation for the victim",
      "Service interruption or crash on overwhelmed devices"
    ],
    propagation: [
      "Misconfigured networks that forward directed broadcasts",
      "Attackers spoofing source IP addresses"
    ],
    mitigation: [
      "Disable IP-directed broadcast on routers",
      "Filter spoofed source addresses at edge",
      "Use anti-DDoS mechanisms at ISP or upstream"
    ],
    keywords: ["smurf attack", "icmp amplification", "broadcast icmp ddos"]
  },
  {
    id: "ping-of-death",
    name: "Ping of Death",
    category: "network",
    severity: "medium",
    description: `Ping of Death involves sending malformed or oversized ICMP packets that can cause buffer overflows on vulnerable systems, leading to crashes or reboots. Modern systems are mostly patched but variants still appear.`,
    detection: [
      "ICMP packets larger than normal size",
      "IDS alerts about malformed ICMP packets"
    ],
    impact: [
      "System crash or freeze on vulnerable targets",
      "Temporary denial of service"
    ],
    propagation: [
      "Direct ICMP traffic crafted by attacker tools"
    ],
    mitigation: [
      "Ensure systems are patched and updated",
      "Filter malformed packets at firewalls",
      "Use IDS/IPS signatures for known PoD variants"
    ],
    keywords: ["ping of death", "pod attack", "oversized icmp"]
  },
  {
    id: "teardrop-attack",
    name: "Teardrop Fragmentation Attack",
    category: "network",
    severity: "medium",
    description: `Teardrop attacks send overlapping or malformed IP fragments that crash vulnerable systems when they reassemble packets. It abuses bugs in the IP fragmentation implementation.`,
    detection: [
      "Unusual overlapping IP fragments",
      "IDS alerts about teardrop-style fragmentation"
    ],
    impact: [
      "System crash or instability on vulnerable OS versions",
      "Short-term denial of service"
    ],
    propagation: [
      "Raw packet crafting tools sending malformed fragments"
    ],
    mitigation: [
      "Patch or upgrade operating systems and stacks",
      "Use IPS to drop suspicious fragmented packets"
    ],
    keywords: ["teardrop attack", "fragmentation attack", "overlapping fragments"]
  },
  {
    id: "land-attack",
    name: "LAND Attack",
    category: "network",
    severity: "medium",
    description: `A LAND attack sends spoofed packets where the source and destination IP and port are the same, confusing the target’s TCP/IP stack and potentially causing a crash or resource lock.`,
    detection: [
      "Packets with identical source and destination IP/port",
      "Anomalous traffic observed in IDS logs"
    ],
    impact: [
      "System freeze or crash on vulnerable implementations",
      "Short-term denial of service"
    ],
    propagation: [
      "Directly crafted packets from an attacker",
      "Exploitation of legacy or unpatched systems"
    ],
    mitigation: [
      "Patch OS and network stacks",
      "Use firewalls to drop packets with identical src/dst",
      "Enable modern network protections on edge devices"
    ],
    keywords: ["land attack", "same source destination", "tcp land"]
  },
  {
    id: "slowloris",
    name: "Slowloris HTTP DoS Attack",
    category: "network",
    severity: "high",
    description: `Slowloris holds many HTTP connections to a web server open by sending partial requests very slowly. This ties up server resources and prevents legitimate connections from being served.`,
    detection: [
      "Many half-open HTTP connections from the same or few IPs",
      "Unusually long-lasting HTTP sessions with no completion"
    ],
    impact: [
      "Web server becomes unresponsive",
      "Denial of service for legitimate users"
    ],
    propagation: [
      "Attacker sending partial HTTP requests repeatedly",
      "Botnets performing slow HTTP attacks"
    ],
    mitigation: [
      "Use reverse proxies or load balancers with timeouts",
      "Limit number of connections per IP",
      "Deploy web application firewalls or DoS protections"
    ],
    keywords: ["slowloris", "slow http attack", "application layer dos"]
  },
  {
    id: "tcp-reset-attack",
    name: "TCP Reset Attack",
    category: "network",
    severity: "medium",
    description: `A TCP reset attack forges TCP RST packets to terminate existing connections between two parties. If the attacker can guess sequence numbers, they can drop connections on demand.`,
    detection: [
      "Unexpected RST packets in established sessions",
      "Multiple session drops without user action"
    ],
    impact: [
      "Disruption of ongoing communications",
      "Denial of service for specific TCP-based services"
    ],
    propagation: [
      "On-path attacker injecting forged TCP RST packets",
      "Spoofing legitimate endpoints"
    ],
    mitigation: [
      "Use encrypted tunnels (VPNs) with integrity protection",
      "Configure systems to validate sequence numbers strictly",
      "Monitor for abnormal RST patterns"
    ],
    keywords: ["tcp reset attack", "forged rst", "session reset"]
  },
  {
    id: "tcp-session-hijack",
    name: "TCP Session Hijacking",
    category: "network",
    severity: "high",
    description: `TCP session hijacking occurs when an attacker takes over an already-established TCP session by predicting or stealing sequence numbers. They then inject their own packets into the stream.`,
    detection: [
      "Unexpected packets in a session from a different source",
      "Sudden change in behaviour within a TCP connection"
    ],
    impact: [
      "Command or data injection into existing sessions",
      "Impersonation of one party to another"
    ],
    propagation: [
      "On-path attackers monitoring and modifying traffic",
      "Use of sniffed session details over insecure networks"
    ],
    mitigation: [
      "Use encryption and strong authentication (TLS, SSH)",
      "Avoid unencrypted important sessions over public Wi-Fi",
      "Monitor for anomalies in session behaviour"
    ],
    keywords: ["tcp hijack", "session hijacking", "tcp takeover"]
  },
  {
    id: "ip-spoofing",
    name: "IP Spoofing",
    category: "network",
    severity: "high",
    description: `IP spoofing is forging the source IP address in packets to impersonate another system or hide the real origin of traffic. It is often used in DDoS, scanning evasion, and MITM setups.`,
    detection: [
      "Packets claiming impossible or internal IPs from external interfaces",
      "Asymmetric routing where replies never reach the real source"
    ],
    impact: [
      "Hiding attacker identity",
      "Enabling reflection and amplification attacks",
      "Bypassing simple IP-based access controls"
    ],
    propagation: [
      "Attackers generating crafted packets",
      "Botnets participating in spoofed attacks"
    ],
    mitigation: [
      "Implement ingress/egress filtering (BCP 38) at ISPs",
      "Avoid trusting source IP for authentication",
      "Use additional authentication and encryption"
    ],
    keywords: ["ip spoofing", "spoofed source ip", "forged ip address"]
  },
  {
    id: "mac-spoofing",
    name: "MAC Spoofing",
    category: "network",
    severity: "medium",
    description: `MAC spoofing changes the attacker’s MAC address to impersonate another device on the local network. It can bypass MAC-based filters or network access controls.`,
    detection: [
      "Same MAC address seen on multiple ports",
      "Frequent changes in MAC-to-port mapping"
    ],
    impact: [
      "Bypassing MAC-based access control",
      "Impersonation of allowed devices"
    ],
    propagation: [
      "Use of OS tools or utilities to change MAC address"
    ],
    mitigation: [
      "Use 802.1X authentication instead of MAC filters",
      "Enable port security limiting MACs per port",
      "Monitor for unusual MAC changes"
    ],
    keywords: ["mac spoofing", "spoofed mac", "change mac address"]
  },
  {
    id: "dhcp-spoofing",
    name: "DHCP Spoofing / Rogue DHCP",
    category: "network",
    severity: "high",
    description: `DHCP spoofing introduces a rogue DHCP server on the network that hands out malicious IP configurations, such as using the attacker as the default gateway or DNS server.`,
    detection: [
      "Multiple DHCP servers replying on the same subnet",
      "Clients receiving unexpected gateway or DNS values"
    ],
    impact: [
      "Traffic redirection through attacker’s machine",
      "Loss of connectivity or wrong routing for clients"
    ],
    propagation: [
      "Attacker connecting own device and running DHCP",
      "Compromised host acting as unauthorized DHCP server"
    ],
    mitigation: [
      "Enable DHCP snooping on switches",
      "Restrict which ports can provide DHCP responses",
      "Monitor for unexpected DHCP servers"
    ],
    keywords: ["dhcp spoofing", "rogue dhcp", "fake dhcp server"]
  },
  {
    id: "rogue-access-point",
    name: "Rogue Access Point",
    category: "network",
    severity: "high",
    description: `A rogue access point is an unauthorized Wi-Fi access point connected to the network, often used by attackers to intercept traffic or provide a backdoor into the LAN.`,
    detection: [
      "Unknown SSIDs within physical vicinity of the network",
      "Wireless controllers reporting unapproved APs"
    ],
    impact: [
      "Unmonitored entry point into internal network",
      "Sensitive traffic captured over insecure Wi-Fi"
    ],
    propagation: [
      "Attacker plugging their own AP into an open port",
      "Misconfigured employees setting up personal APs"
    ],
    mitigation: [
      "Use wireless intrusion detection and monitoring",
      "Disable unused switch ports and secure wall jacks",
      "Maintain an inventory of approved APs"
    ],
    keywords: ["rogue ap", "unauthorized access point", "wifi backdoor"]
  },
  {
    id: "evil-twin",
    name: "Evil Twin Wi-Fi Attack",
    category: "network",
    severity: "high",
    description: `An evil twin attack sets up a fake Wi-Fi access point with the same SSID as a legitimate one. Users connect to it by mistake, letting the attacker intercept or alter their traffic.`,
    detection: [
      "Duplicate SSID with stronger signal than official APs",
      "Wireless clients connecting to unapproved BSSIDs"
    ],
    impact: [
      "Credential theft and session hijacking",
      "MITM attacks on unencrypted or weakly protected sessions"
    ],
    propagation: [
      "Attacker bringing a laptop or portable AP near victims",
      "Broadcasting a cloned SSID"
    ],
    mitigation: [
      "Use WPA2/WPA3-Enterprise with certificate validation",
      "Educate users to verify networks before connecting",
      "Use wireless IDS to detect evil twins"
    ],
    keywords: ["evil twin", "fake wifi", "wifi mitm", "rogue wifi"]
  },
  {
    id: "wifi-deauth-attack",
    name: "Wi-Fi Deauthentication Attack",
    category: "network",
    severity: "medium",
    description: `A Wi-Fi deauthentication attack sends forged deauth frames to disconnect clients from an access point, causing disruption or forcing reconnect via an attacker-controlled AP.`,
    detection: [
      "High volume of deauth frames in wireless captures",
      "Frequent unexpected disconnections for many clients"
    ],
    impact: [
      "Temporary denial of Wi-Fi service",
      "Forcing victims to reconnect through a rogue AP"
    ],
    propagation: [
      "Frame injection tools targeting Wi-Fi networks"
    ],
    mitigation: [
      "Use 802.11w management frame protection where possible",
      "Monitor wireless for suspicious deauth patterns",
      "Use secure enterprise Wi-Fi deployments"
    ],
    keywords: ["wifi deauth", "deauthentication attack", "wifi dos"]
  },
  {
    id: "port-scanning",
    name: "Port Scanning",
    category: "network",
    severity: "medium",
    description: `Port scanning is reconnaissance where an attacker probes a host or network to discover open ports and services. It does not directly cause damage but prepares for targeted attacks.`,
    detection: [
      "Multiple connection attempts to many ports on a host",
      "Short bursts of SYN packets without completing connections",
      "IDS alerts for Nmap or generic scan signatures"
    ],
    impact: [
      "Exposure of attack surface information",
      "Identification of vulnerable or misconfigured services"
    ],
    propagation: [
      "Automated scanning tools such as Nmap or masscan",
      "Botnets used to scan large address ranges"
    ],
    mitigation: [
      "Use firewalls to restrict unnecessary ports",
      "Hide internal services behind VPNs or reverse proxies",
      "Monitor and rate limit suspicious scanning behaviour"
    ],
    keywords: ["port scan", "port scanning", "nmap scan", "service enumeration"]
  },
  {
    id: "banner-grabbing",
    name: "Banner Grabbing",
    category: "network",
    severity: "low",
    description: `Banner grabbing collects information from service responses (like version strings and product names) to identify software and potential vulnerabilities.`,
    detection: [
      "Connections that send simple probes and read banners",
      "Logs showing many connections reading only headers"
    ],
    impact: [
      "Disclosure of software versions and configurations",
      "Easier vulnerability research for attackers"
    ],
    propagation: [
      "Manual or automated tools querying services",
      "Scanning scripts pulling banners from multiple ports"
    ],
    mitigation: [
      "Disable or minimize version banners where possible",
      "Use generic responses and hide detailed info",
      "Restrict access to management interfaces"
    ],
    keywords: ["banner grabbing", "service banner", "version enumeration"]
  },
  {
    id: "snmp-enumeration",
    name: "SNMP Enumeration",
    category: "network",
    severity: "high",
    description: `SNMP enumeration abuses weak or default SNMP community strings to gather detailed information from network devices such as routers, switches and servers.`,
    detection: [
      "SNMP requests from unapproved hosts",
      "Logs showing repeated use of public/community strings"
    ],
    impact: [
      "Exposure of device configs, interfaces and routing",
      "Potential to change configurations if write access is available"
    ],
    propagation: [
      "Attackers scanning for open SNMP ports (UDP 161/162)",
      "Using default or guessed community strings"
    ],
    mitigation: [
      "Disable SNMP if not required",
      "Use SNMPv3 with authentication and encryption",
      "Restrict SNMP access to management networks only"
    ],
    keywords: ["snmp enumeration", "snmp info leak", "snmp public community"]
  },
  {
    id: "bgp-hijacking",
    name: "BGP Hijacking",
    category: "network",
    severity: "critical",
    description: `BGP hijacking manipulates internet routing by announcing unauthorized prefixes, causing traffic to be routed through or to the attacker’s network.`,
    detection: [
      "Routing anomalies and sudden path changes",
      "BGP monitors reporting suspicious prefix announcements"
    ],
    impact: [
      "Large-scale traffic interception or blackholing",
      "Disruption of connectivity for entire regions or services"
    ],
    propagation: [
      "Misconfigured or malicious BGP announcements by AS operators"
    ],
    mitigation: [
      "Use RPKI and route validation",
      "Monitor BGP announcements for your prefixes",
      "Work with upstream providers and internet exchanges"
    ],
    keywords: ["bgp hijack", "route hijacking", "prefix hijack"]
  },
  {
    id: "route-injection",
    name: "Route Injection Attack",
    category: "network",
    severity: "high",
    description: `Route injection introduces false routes into routing protocols (like OSPF or EIGRP) inside organizations, redirecting traffic through attacker-controlled paths.`,
    detection: [
      "Unexpected routes appearing in routing tables",
      "Routing flaps or sudden changes in network paths"
    ],
    impact: [
      "Traffic interception within internal networks",
      "Denial of service to certain segments"
    ],
    propagation: [
      "Compromised routers or insider attackers",
      "Misconfigured dynamic routing deployments"
    ],
    mitigation: [
      "Authenticate routing protocol updates",
      "Limit which devices can participate in routing",
      "Monitor for unexpected route changes"
    ],
    keywords: ["route injection", "ospf attack", "routing manipulation"]
  },
  {
    id: "dns-amplification",
    name: "DNS Amplification DDoS",
    category: "network",
    severity: "critical",
    description: `DNS amplification uses open DNS resolvers to send large responses to a victim by spoofing the victim’s IP as the source. The small query triggers a much larger response, amplifying traffic.`,
    detection: [
      "High volume of unsolicited DNS responses to victim IPs",
      "DNS servers sending large responses to a single target"
    ],
    impact: [
      "Severe bandwidth exhaustion",
      "DDoS against targeted servers or networks"
    ],
    propagation: [
      "Attackers sending spoofed DNS queries to open resolvers",
      "Large botnets coordinating attack traffic"
    ],
    mitigation: [
      "Close open DNS resolvers or restrict them",
      "Implement ingress filtering to block spoofed IPs",
      "Use DDoS mitigation services and provider support"
    ],
    keywords: ["dns amplification", "dns ddos", "dns reflection"]
  },
  {
    id: "ntp-amplification",
    name: "NTP Amplification DDoS",
    category: "network",
    severity: "critical",
    description: `NTP amplification abuses misconfigured NTP servers (e.g., monlist command) to send large responses to a victim’s spoofed IP, amplifying the attacker’s bandwidth.`,
    detection: [
      "Large NTP responses to a specific target",
      "IDS alerts about NTP amplification patterns"
    ],
    impact: [
      "Severe DDoS bandwidth attacks",
      "Service disruption for the victim network"
    ],
    propagation: [
      "Attackers leveraging public NTP servers with open commands"
    ],
    mitigation: [
      "Disable legacy NTP commands like monlist",
      "Restrict NTP server access",
      "Use DDoS mitigation and proper network filtering"
    ],
    keywords: ["ntp amplification", "ntp ddos", "ntp reflection"]
  },
  {
    id: "generic-reflection-ddos",
    name: "Reflection / Amplification DDoS",
    category: "network",
    severity: "critical",
    description: `Reflection/amplification DDoS attacks abuse legitimate UDP-based services (DNS, NTP, SSDP, etc.) to reflect and amplify traffic to a victim using spoofed source IP addresses.`,
    detection: [
      "Unsolicited large UDP responses to victim IPs",
      "Traffic spikes from many legitimate servers toward one target"
    ],
    impact: [
      "Massive bandwidth and resource exhaustion",
      "Network-wide service degradation or outage"
    ],
    propagation: [
      "Attackers sending spoofed requests to many amplifiers",
      "Vulnerable servers exposing UDP services to internet"
    ],
    mitigation: [
      "Ingress filtering to block spoofed IPs",
      "Hardening UDP services to avoid amplification",
      "Use of anti-DDoS and upstream filtering"
    ],
    keywords: ["reflection ddos", "amplification attack", "udp reflection"]
  },
  {
    id: "ssl-stripping",
    name: "SSL Stripping",
    category: "network",
    severity: "high",
    description: `SSL stripping downgrades HTTPS connections to HTTP over a MITM channel so the attacker can read and modify traffic that users think is secure.`,
    detection: [
      "Users see HTTP where HTTPS is expected",
      "HSTS not enforced and mixed-content warnings"
    ],
    impact: [
      "Credential and session cookie theft",
      "Full content manipulation in real time"
    ],
    propagation: [
      "MITM on untrusted networks (public Wi-Fi, rogue APs)"
    ],
    mitigation: [
      "Use HSTS and force HTTPS everywhere",
      "Educate users to watch for HTTPS padlock and warnings",
      "Use VPN on untrusted networks"
    ],
    keywords: ["ssl stripping", "https downgrade", "strip ssl"]
  },
  {
    id: "proxy-mitm",
    name: "Proxy Man-in-the-Middle",
    category: "network",
    severity: "high",
    description: `Proxy MITM forces or tricks users into sending their traffic through an attacker-controlled proxy, which can inspect and modify data, especially if TLS interception is used with a rogue certificate.`,
    detection: [
      "Unexpected proxy settings configured on clients",
      "New root certificates added without admin approval"
    ],
    impact: [
      "Inspection of all user web traffic",
      "Credential theft and data tampering"
    ],
    propagation: [
      "Malware changing system proxy configuration",
      "Rogue PAC files or WPAD attacks"
    ],
    mitigation: [
      "Lock down proxy settings via group policy",
      "Monitor certificate stores for unauthorized roots",
      "Use certificate pinning where possible"
    ],
    keywords: ["proxy mitm", "malicious proxy", "transparent proxy attack"]
  },
  {
    id: "vpn-hijacking",
    name: "VPN Session Hijacking",
    category: "network",
    severity: "high",
    description: `VPN hijacking targets active VPN sessions to impersonate the client or decrypt their traffic, often by stealing session tokens, keys or using weak configurations.`,
    detection: [
      "Multiple connections using same VPN credentials",
      "Unusual VPN logins from different locations in short time"
    ],
    impact: [
      "Unauthorized access to internal networks",
      "Data exfiltration through hijacked tunnel"
    ],
    propagation: [
      "Credential theft via phishing or malware",
      "Weak VPN configurations without MFA"
    ],
    mitigation: [
      "Enforce multi-factor authentication on VPN",
      "Monitor for unusual login patterns and device IDs",
      "Use strong encryption and certificate-based auth"
    ],
    keywords: ["vpn hijack", "vpn session hijacking", "vpn takeover"]
  },
  {
    id: "nat-slipstreaming",
    name: "NAT Slipstreaming",
    category: "network",
    severity: "high",
    description: `NAT slipstreaming abuses browser behaviour and NAT/firewall handling to open arbitrary ports on internal devices, allowing attackers to reach services behind NAT through crafted traffic.`,
    detection: [
      "Unusual outbound traffic triggering inbound pinholes",
      "Strange port openings observed on firewalls"
    ],
    impact: [
      "Exposing internal services to the internet",
      "Bypassing firewall restrictions"
    ],
    propagation: [
      "Users visiting malicious websites with crafted scripts",
      "Abuse of protocol handling by NAT devices"
    ],
    mitigation: [
      "Update NAT/firewall firmware",
      "Disable ALGs that are not needed",
      "Use strict outbound and inbound rules"
    ],
    keywords: ["nat slipstreaming", "firewall bypass", "nat bypass attack"]
  },
  {
    id: "vlan-hopping",
    name: "VLAN Hopping Attack",
    category: "network",
    severity: "high",
    description: `VLAN hopping tricks switches into sending traffic from one VLAN to another, allowing an attacker on one VLAN to access systems in another VLAN that should be isolated.`,
    detection: [
      "Traffic from unexpected VLANs appearing on switch ports",
      "Logs showing double-tagged VLAN frames"
    ],
    impact: [
      "Bypassing network segmentation",
      "Access to otherwise isolated systems"
    ],
    propagation: [
      "Double-tagging 802.1Q VLAN frames",
      "Misconfigured trunk ports accessible to users"
    ],
    mitigation: [
      "Do not use VLAN 1 for user traffic",
      "Disable trunking on access ports",
      "Configure proper VLAN tagging and pruning"
    ],
    keywords: ["vlan hopping", "vlan attack", "double tagging"]
  },
  {
    id: "stp-manipulation",
    name: "STP Manipulation Attack",
    category: "network",
    severity: "medium",
    description: `STP manipulation targets the Spanning Tree Protocol to become the root bridge, influencing path selection and potentially redirecting or disrupting Layer 2 traffic.`,
    detection: [
      "Unexpected switch claiming STP root role",
      "STP topology changes without legit cause"
    ],
    impact: [
      "Traffic redirection through attacker-controlled switch",
      "Loops or outages if STP is destabilized"
    ],
    propagation: [
      "Attacker connecting a rogue switch to the network"
    ],
    mitigation: [
      "Enable STP root guard and BPDU guard",
      "Control which ports accept BPDUs",
      "Monitor STP root changes"
    ],
    keywords: ["stp attack", "spanning tree manipulation", "root bridge attack"]
  },
  {
    id: "arp-flooding",
    name: "ARP Flooding / CAM Table Attack",
    category: "network",
    severity: "high",
    description: `ARP flooding overwhelms a switch’s CAM table with many fake MAC addresses, causing it to fail open and broadcast traffic to all ports, enabling sniffing and MITM.`,
    detection: [
      "Large number of MAC addresses learned on a single port",
      "Switch logs showing CAM table overflow"
    ],
    impact: [
      "Loss of switching efficiency and security",
      "Traffic leaking to all ports, allowing eavesdropping"
    ],
    propagation: [
      "Tools sending many ARP replies with fake MACs"
    ],
    mitigation: [
      "Enable port security to limit MACs per port",
      "Use dynamic ARP inspection and monitoring",
      "Segment untrusted devices on separate VLANs"
    ],
    keywords: ["arp flooding", "cam table overflow", "switch flooding"]
  },
  {
    id: "icmp-redirect-attack",
    name: "ICMP Redirect Attack",
    category: "network",
    severity: "medium",
    description: `ICMP redirect attacks send forged redirect messages to change a host’s routing decisions, making it send traffic through an attacker-controlled node.`,
    detection: [
      "Unexpected ICMP redirect messages seen in captures",
      "Workstations changing routes without admin action"
    ],
    impact: [
      "Traffic routed through attacker for MITM",
      "Potential denial of service if sent to blackhole routes"
    ],
    propagation: [
      "On-path attacker injecting forged ICMP redirects"
    ],
    mitigation: [
      "Disable acceptance of ICMP redirects on hosts",
      "Use static routes for critical paths",
      "Monitor and filter unnecessary ICMP types"
    ],
    keywords: ["icmp redirect", "redirect attack", "route change via icmp"]
  },
  {
    id: "packet-sniffing",
    name: "Packet Sniffing / Network Eavesdropping",
    category: "network",
    severity: "high",
    description: `Packet sniffing captures network traffic to analyze contents. On unencrypted networks or shared segments, attackers can read credentials, sessions and data in transit.`,
    detection: [
      "Promiscuous mode interfaces detected on endpoints",
      "Unusual ARP or MAC behaviour suggesting sniffing setups"
    ],
    impact: [
      "Credential and data theft over time",
      "Intelligence gathering for future attacks"
    ],
    propagation: [
      "Attacker connecting to shared or Wi-Fi networks",
      "Compromised endpoints running sniffing tools"
    ],
    mitigation: [
      "Encrypt all sensitive traffic (HTTPS, SSH, VPN)",
      "Segment networks and avoid shared broadcast domains",
      "Monitor for promiscuous mode usage and ARP anomalies"
    ],
    keywords: ["packet sniffing", "network sniffing", "eavesdropping traffic"]
  },
  {
    id: "replay-attack-network",
    name: "Network Replay Attack",
    category: "network",
    severity: "medium",
    description: `Network replay attacks capture legitimate packets and resend them later to repeat actions, such as reusing authentication tokens or transactions, in protocols without proper freshness checks.`,
    detection: [
      "Identical packets or requests appearing multiple times",
      "Multiple identical authentication attempts in short time"
    ],
    impact: [
      "Unauthorized repetition of valid actions",
      "Bypassing authentication once tokens are captured"
    ],
    propagation: [
      "Attackers sniffing and storing traffic on insecure networks"
    ],
    mitigation: [
      "Use nonces, timestamps and sequence numbers in protocols",
      "Encrypt and authenticate traffic (TLS, IPSec)",
      "Monitor for duplicate requests out of normal pattern"
    ],
    keywords: ["replay attack", "network replay", "reused packets"]
  },
  {
    id: "ipsec-downgrade",
    name: "IPSec / VPN Downgrade Attack",
    category: "network",
    severity: "high",
    description: `IPSec downgrade attacks force VPN endpoints to use weaker algorithms or fall back to less secure modes, making it easier to intercept or tamper with encrypted traffic.`,
    detection: [
      "VPN logs showing unexpected weak cipher usage",
      "Negotiation failures followed by lower security modes"
    ],
    impact: [
      "Reduced confidentiality of VPN communications",
      "Easier decryption or MITM of traffic"
    ],
    propagation: [
      "On-path attackers interfering with negotiation",
      "Misconfigurations allowing insecure fallbacks"
    ],
    mitigation: [
      "Disable weak ciphers and protocols completely",
      "Enforce strong security profiles on VPN endpoints",
      "Monitor VPN negotiations for anomalies"
    ],
    keywords: ["ipsec downgrade", "vpn downgrade", "weak vpn cipher attack"]
  },
  {
    id: "rogue-router",
    name: "Rogue Router / Gateway Attack",
    category: "network",
    severity: "high",
    description: `A rogue router or gateway is introduced into the network to route traffic through an attacker-controlled device, enabling large-scale interception or manipulation.`,
    detection: [
      "Clients using unknown IPs as default gateway",
      "Routing tables on hosts changing unexpectedly"
    ],
    impact: [
      "MITM for large segments of the network",
      "Complete control over routing of victim traffic"
    ],
    propagation: [
      "Attacker connecting unauthorized routing device",
      "Compromised host configured to route traffic"
    ],
    mitigation: [
      "Control which devices can act as gateways",
      "Use network access control and port security",
      "Monitor ARP and routing changes on clients"
    ],
    keywords: ["rogue router", "fake gateway", "unauthorized gateway"]
  },
  {
    id: "wireless-krack",
    name: "KRACK / Wi-Fi Key Reinstallation",
    category: "network",
    severity: "high",
    description: `Key reinstallation attacks (like KRACK) exploit flaws in Wi-Fi WPA2 handshakes to force reuse of encryption keys, allowing decryption and manipulation of traffic in some conditions.`,
    detection: [
      "Unusual Wi-Fi handshake patterns",
      "Use of outdated or vulnerable AP firmware"
    ],
    impact: [
      "Decryption of Wi-Fi traffic",
      "Injection of malicious packets into sessions"
    ],
    propagation: [
      "Attackers near the Wi-Fi network performing handshake manipulation"
    ],
    mitigation: [
      "Update access point and client device firmware",
      "Use WPA3 where available",
      "Enforce VPN usage over Wi-Fi for sensitive access"
    ],
    keywords: ["krack attack", "wifi key reinstall", "wpa2 vulnerability"]
  },
  {
    id: "dns-tunneling",
    name: "DNS Tunneling",
    category: "network",
    severity: "high",
    description: `DNS tunneling encodes data or commands inside DNS queries and responses to bypass firewalls and exfiltrate data or control malware over DNS traffic.`,
    detection: [
      "DNS queries with unusually long or random-looking subdomains",
      "High volume of DNS traffic to specific domains"
    ],
    impact: [
      "Covert data exfiltration out of the network",
      "Command-and-control channel for malware"
    ],
    propagation: [
      "Malware using DNS to communicate with C2 servers",
      "Compromised hosts tunneling data through DNS"
    ],
    mitigation: [
      "Inspect DNS traffic for tunneling patterns",
      "Block known tunneling domains and tools",
      "Use DNS security gateways with behavioural detection"
    ],
    keywords: ["dns tunneling", "dns exfiltration", "dns covert channel"]
  }
];
module.exports = {networkAttacks};