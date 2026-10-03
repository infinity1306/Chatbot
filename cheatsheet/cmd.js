const commands = [

/* ============================
   CORE LINUX COMMANDS (1–140)
   ============================ */
{cmd:"ls",desc:"List files",platforms:["linux","mac","bash"]},
{cmd:"ls -la",desc:"List detailed including hidden",platforms:["linux","mac"]},
{cmd:"cd <path>",desc:"Change directory",platforms:["linux","mac","bash","windows_cmd","powershell"]},
{cmd:"pwd",desc:"Print working directory",platforms:["linux","mac","bash"]},
{cmd:"mkdir <name>",desc:"Create directory",platforms:["linux","mac","bash","windows_cmd","powershell"]},
{cmd:"rm <file>",desc:"Remove file",platforms:["linux","mac","bash"]},
{cmd:"rm -rf <dir>",desc:"Force delete directory",platforms:["linux","mac"]},
{cmd:"cp <src> <dst>",desc:"Copy file",platforms:["linux","mac"]},
{cmd:"mv <src> <dst>",desc:"Move/rename file",platforms:["linux","mac"]},
{cmd:"touch <file>",desc:"Create empty file",platforms:["linux","mac"]},
{cmd:"cat <file>",desc:"Show file content",platforms:["linux","mac"]},
{cmd:"tac <file>",desc:"Reverse cat command",platforms:["linux"]},
{cmd:"nl <file>",desc:"Show file with line numbers",platforms:["linux"]},
{cmd:"more <file>",desc:"Paginated viewer",platforms:["linux"]},
{cmd:"less <file>",desc:"Advanced file viewer",platforms:["linux"]},
{cmd:"head <file>",desc:"Show first lines",platforms:["linux"]},
{cmd:"tail <file>",desc:"Show last lines",platforms:["linux"]},
{cmd:"tail -f <file>",desc:"Realtime file output",platforms:["linux"]},

/* Search / Text processing */
{cmd:"grep 'text' file",desc:"Search text",platforms:["linux"]},
{cmd:"grep -R 'text' /path",desc:"Recursive search",platforms:["linux"]},
{cmd:"sed -i 's/a/b/g' file",desc:"Edit text in file",platforms:["linux"]},
{cmd:"awk '{print $1}' file",desc:"Column extraction",platforms:["linux"]},
{cmd:"sort file",desc:"Sort lines",platforms:["linux"]},
{cmd:"uniq file",desc:"Remove duplicates",platforms:["linux"]},
{cmd:"cut -d':' -f1 file",desc:"Cut columns",platforms:["linux"]},
{cmd:"wc -l file",desc:"Count lines",platforms:["linux"]},

/* Permissions */
{cmd:"chmod 755 file",desc:"Set permissions",platforms:["linux"]},
{cmd:"chmod +x file",desc:"Make executable",platforms:["linux"]},
{cmd:"chown user file",desc:"Change owner",platforms:["linux"]},

/* File systems */
{cmd:"df -h",desc:"Disk usage",platforms:["linux"]},
{cmd:"du -sh *",desc:"Directory sizes",platforms:["linux"]},
{cmd:"mount",desc:"Mounted drives",platforms:["linux"]},
{cmd:"umount",desc:"Unmount",platforms:["linux"]},

/* Processes */
{cmd:"top",desc:"System monitor",platforms:["linux"]},
{cmd:"htop",desc:"Advanced monitor",platforms:["linux"]},
{cmd:"ps aux",desc:"List all processes",platforms:["linux"]},
{cmd:"kill <pid>",desc:"Kill process",platforms:["linux"]},
{cmd:"kill -9 <pid>",desc:"Force kill",platforms:["linux"]},
{cmd:"pgrep <name>",desc:"Find process",platforms:["linux"]},

/* System info */
{cmd:"uname -a",desc:"Kernel info",platforms:["linux"]},
{cmd:"hostnamectl",desc:"Host info",platforms:["linux"]},
{cmd:"uptime",desc:"System uptime",platforms:["linux"]},
{cmd:"whoami",desc:"Current user",platforms:["linux","windows_cmd","powershell"]},
{cmd:"last",desc:"Last logins",platforms:["linux"]},
{cmd:"history",desc:"Command history",platforms:["linux"]},

/* Network */
{cmd:"ip a",desc:"Network interfaces",platforms:["linux"]},
{cmd:"ifconfig",desc:"Legacy interface list",platforms:["linux"]},
{cmd:"ss -tulpn",desc:"Open ports",platforms:["linux"]},
{cmd:"netstat -tulpn",desc:"Legacy open ports",platforms:["linux"]},
{cmd:"ping host",desc:"Ping host",platforms:["linux","windows_cmd","powershell"]},
{cmd:"dig domain",desc:"DNS lookup",platforms:["linux"]},
{cmd:"host domain",desc:"DNS lookup",platforms:["linux"]},
{cmd:"curl URL",desc:"HTTP request",platforms:["linux","mac"]},
{cmd:"wget URL",desc:"Download file",platforms:["linux"]},

/* Logs */
{cmd:"journalctl -xe",desc:"Critical system logs",platforms:["linux"]},
{cmd:"tail -f /var/log/syslog",desc:"Follow syslog",platforms:["linux"]},
{cmd:"tail -f /var/log/auth.log",desc:"Auth logs",platforms:["linux"]},

/* Package management */
{cmd:"apt update",desc:"Update packages",platforms:["linux"]},
{cmd:"apt install pkg",desc:"Install package",platforms:["linux"]},
{cmd:"apt remove pkg",desc:"Remove package",platforms:["linux"]},
{cmd:"yum install pkg",desc:"Install RPM pkg",platforms:["linux"]},

/* Compression */
{cmd:"tar -czvf file.tar.gz dir",desc:"Create tar.gz",platforms:["linux"]},
{cmd:"tar -xzvf file.tar.gz",desc:"Extract tar.gz",platforms:["linux"]},
{cmd:"zip -r out.zip dir",desc:"Zip directory",platforms:["linux"]},
{cmd:"unzip file.zip",desc:"Extract zip",platforms:["linux"]},

/* Security */
{cmd:"sudo faillog -a",desc:"Failed login attempts",platforms:["linux"]},
{cmd:"sudo tcpdump -i eth0",desc:"Packet capture",platforms:["linux"]},
{cmd:"lsof -i",desc:"Open sockets",platforms:["linux"]},
{cmd:"chkconfig --list",desc:"Startup services",platforms:["linux"]},

/* ================================
   WINDOWS CMD COMMANDS (141–260)
   ================================ */
{cmd:"dir",desc:"List files",platforms:["windows_cmd"]},
{cmd:"cd path",desc:"Change directory",platforms:["windows_cmd"]},
{cmd:"mkdir name",desc:"Create folder",platforms:["windows_cmd"]},
{cmd:"del file",desc:"Delete file",platforms:["windows_cmd"]},
{cmd:"copy src dest",desc:"Copy file",platforms:["windows_cmd"]},
{cmd:"move src dest",desc:"Move file",platforms:["windows_cmd"]},
{cmd:"cls",desc:"Clear screen",platforms:["windows_cmd"]},
{cmd:"ipconfig",desc:"IP info",platforms:["windows_cmd"]},
{cmd:"ipconfig /all",desc:"Detailed IP info",platforms:["windows_cmd"]},
{cmd:"ipconfig /flushdns",desc:"Clear DNS cache",platforms:["windows_cmd"]},
{cmd:"ping host",desc:"Ping",platforms:["windows_cmd"]},
{cmd:"tracert host",desc:"Traceroute",platforms:["windows_cmd"]},
{cmd:"arp -a",desc:"ARP table",platforms:["windows_cmd"]},
{cmd:"nbtstat -n",desc:"NetBIOS names",platforms:["windows_cmd"]},
{cmd:"systeminfo",desc:"System detail",platforms:["windows_cmd"]},
{cmd:"tasklist",desc:"List processes",platforms:["windows_cmd"]},
{cmd:"taskkill /PID id /F",desc:"Kill process",platforms:["windows_cmd"]},
{cmd:"net user",desc:"List users",platforms:["windows_cmd"]},
{cmd:"net localgroup",desc:"List groups",platforms:["windows_cmd"]},
{cmd:"netstat -ano",desc:"Ports + PIDs",platforms:["windows_cmd"]},
{cmd:"sfc /scannow",desc:"Repair files",platforms:["windows_cmd"]},
{cmd:"chkdsk",desc:"Disk check",platforms:["windows_cmd"]},
{cmd:"schtasks /query",desc:"Scheduled tasks",platforms:["windows_cmd"]},

/* ================================
   POWERSHELL COMMANDS (261–380)
   ================================ */
{cmd:"Get-ChildItem",desc:"List files",platforms:["powershell"]},
{cmd:"Set-Location path",desc:"Change dir",platforms:["powershell"]},
{cmd:"Copy-Item src dest",desc:"Copy file",platforms:["powershell"]},
{cmd:"Move-Item src dest",desc:"Move file",platforms:["powershell"]},
{cmd:"Remove-Item path",desc:"Delete",platforms:["powershell"]},
{cmd:"Get-Process",desc:"List processes",platforms:["powershell"]},
{cmd:"Stop-Process -Id id",desc:"Kill process",platforms:["powershell"]},
{cmd:"Get-Service",desc:"List services",platforms:["powershell"]},
{cmd:"Restart-Service name",desc:"Restart service",platforms:["powershell"]},
{cmd:"Get-EventLog Security",desc:"Security logs",platforms:["powershell"]},
{cmd:"Get-NetIPConfiguration",desc:"IP info",platforms:["powershell"]},
{cmd:"Get-NetTCPConnection",desc:"Active connections",platforms:["powershell"]},
{cmd:"Resolve-DnsName domain",desc:"DNS lookup",platforms:["powershell"]},
{cmd:"Test-Connection host",desc:"Ping",platforms:["powershell"]},
{cmd:"Get-MpThreat",desc:"Defender threats",platforms:["powershell"]},
{cmd:"Get-ScheduledTask",desc:"List scheduled tasks",platforms:["powershell"]},

/* ================================
   NETWORKING & SECURITY (381–520)
   ================================ */
{cmd:"nmap -sV host",desc:"Version scan",platforms:["linux","mac"]},
{cmd:"nmap -A host",desc:"Aggressive scan",platforms:["linux"]},
{cmd:"nmap -p- host",desc:"Scan all ports",platforms:["linux"]},
{cmd:"tcpdump -i eth0",desc:"Packet capture",platforms:["linux"]},
{cmd:"wireshark",desc:"GUI packet analyzer",platforms:["linux","mac","windows_cmd"]},
{cmd:"netcat -lvp port",desc:"Open listener",platforms:["linux"]},
{cmd:"nc host port",desc:"Network connect",platforms:["linux"]},
{cmd:"whois domain",desc:"WHOIS lookup",platforms:["linux"]},
{cmd:"dig ANY domain",desc:"DNS query",platforms:["linux"]},
{cmd:"ss -lntp",desc:"Listening TCP ports",platforms:["linux"]},
{cmd:"firewall-cmd --state",desc:"Firewall status",platforms:["linux"]},

/* ================================
   GIT COMMANDS (521–560)
   ================================ */
{cmd:"git clone url",desc:"Clone repo",platforms:["linux","windows_cmd","powershell"]},
{cmd:"git init",desc:"Init repo",platforms:["linux"]},
{cmd:"git add .",desc:"Stage all",platforms:["linux"]},
{cmd:"git commit -m msg",desc:"Commit",platforms:["linux"]},
{cmd:"git push",desc:"Push changes",platforms:["linux"]},
{cmd:"git pull",desc:"Pull changes",platforms:["linux"]},
{cmd:"git branch",desc:"List branches",platforms:["linux"]},
{cmd:"git checkout branch",desc:"Switch branch",platforms:["linux"]},
{cmd:"git merge branch",desc:"Merge branch",platforms:["linux"]},

/* ================================
   DOCKER COMMANDS (561–610)
   ================================ */
{cmd:"docker ps",desc:"Running containers",platforms:["linux"]},
{cmd:"docker images",desc:"List images",platforms:["linux"]},
{cmd:"docker pull img",desc:"Pull image",platforms:["linux"]},
{cmd:"docker run img",desc:"Run container",platforms:["linux"]},
{cmd:"docker stop id",desc:"Stop container",platforms:["linux"]},
{cmd:"docker rm id",desc:"Remove container",platforms:["linux"]},
{cmd:"docker logs id",desc:"Container logs",platforms:["linux"]},
{cmd:"docker exec -it id bash",desc:"Enter container",platforms:["linux"]},

/* ================================
   SQL COMMANDS (611–660)
   ================================ */
{cmd:"SELECT * FROM table;",desc:"Select all rows",platforms:["sql"]},
{cmd:"UPDATE table SET col=val;",desc:"Update rows",platforms:["sql"]},
{cmd:"DELETE FROM table;",desc:"Delete rows",platforms:["sql"]},
{cmd:"INSERT INTO table VALUES (...);",desc:"Insert data",platforms:["sql"]},
{cmd:"ALTER TABLE t ADD col INT;",desc:"Add column",platforms:["sql"]},
{cmd:"CREATE TABLE t (...);",desc:"Create table",platforms:["sql"]},
{cmd:"DROP TABLE t;",desc:"Delete table",platforms:["sql"]},

/* ================================
   AWS CLI COMMANDS (661–700)
   ================================ */
{cmd:"aws s3 ls",desc:"List S3 buckets",platforms:["aws"]},
{cmd:"aws ec2 describe-instances",desc:"List EC2 instances",platforms:["aws"]},
{cmd:"aws iam list-users",desc:"List IAM users",platforms:["aws"]},
{cmd:"aws lambda list-functions",desc:"List Lambda functions",platforms:["aws"]},
{cmd:"aws cloudwatch get-metric-data",desc:"Get metrics",platforms:["aws"]}

];

module.exports = { commands };
