```markdown
🌐 Linux Networking & Troubleshooting Commands

📶 Basic Network Tools

`ping`

- Definition: Checks network connectivity to a host/IP.
- Example:

  ping google.com
  ping -c 4 192.168.1.1 # Ping 4 times only
```

---

### `sudo apt install net-tools`

- **Definition**: Installs legacy networking utilities like `ifconfig`, `netstat`, etc.
- **Example**:

  ```bash
  sudo apt install net-tools
  ```

---

### `netstat`

- **Definition**: Displays open ports, connections, and network stats.
- **Examples**:

  ```bash
  netstat -tuln     # Show all listening ports
  netstat -antp     # Active TCP connections with PID
  ```

---

### `ifconfig` _(deprecated; use `ip`)_

- **Definition**: Configures or shows network interfaces.
- **Example**:

  ```bash
  ifconfig
  ```

---

## 🧭 Tracing & Lookup Tools

### `traceroute`

- **Definition**: Traces the route packets take to reach a host.
- **Example**:

  ```bash
  traceroute youtube.com
  ```

---

### `tracepath`

- **Definition**: Similar to `traceroute`, shows the path with MTU info.
- **Example**:

  ```bash
  tracepath youtube.com
  ```

---

### `mtr`

- **Definition**: Combines ping and traceroute in real time.
- **Example**:

  ```bash
  mtr google.com
  ```

---

### `nslookup`

- **Definition**: Performs DNS queries for a domain.
- **Example**:

  ```bash
  nslookup youtube.com
  ```

---

### `dig`

- **Definition**: Performs advanced DNS lookups.
- **Example**:

  ```bash
  dig google.com
  ```

---

### `whois`

- **Definition**: Provides ownership and registration info of a domain.
- **Example**:

  ```bash
  whois google.com
  ```

---

### `telnet`

- **Definition**: Tests TCP connectivity to a specific host and port.
- **Example**:

  ```bash
  telnet youtube.com 80
  ```

---

### `nc` (Netcat)

- **Definition**: Swiss army knife for reading/writing network connections.
- **Examples**:

  ```bash
  nc trainwithshubham 80        # Connect to a remote web server
  nc -lvp 1234                  # Listen on port 1234
  ```

---

## 🏠 Host & IP Configuration

### `cat /etc/hosts`

- **Definition**: Shows local hostname-to-IP mappings.
- **Example**:

  ```bash
  cat /etc/hosts
  ```

---

### `hostname`

- **Definition**: Displays or sets the system’s hostname.
- **Examples**:

  ```bash
  hostname
  sudo hostname new-hostname
  ```

---

### `ip address show`

- **Definition**: Shows IP addresses and interfaces.
- **Alias**:

  ```bash
  ip a
  ```

---

### `iwconfig`

- **Definition**: Shows wireless interfaces and signal quality.
- **Example**:

  ```bash
  iwconfig
  ```

---

### `ss`

- **Definition**: Modern replacement for `netstat`; shows socket stats.
- **Examples**:

  ```bash
  ss -tuln       # TCP & UDP listening ports
  ss -s          # Summary
  ```

---

## 🌐 HTTP & File Fetching Tools

### `curl`

- **Definition**: Transfers data from or to a server using protocols like HTTP/S, FTP, etc.
- **Examples**:

  ```bash
  curl https://api.example.com
  curl -X GET https://api.example.com | jq
  ```

### `wget`

- **Definition**: Downloads files from the internet (non-interactive).
- **Example**:

  ```bash
  wget https://example.com/file.zip
  ```

---

### ✅ `curl` vs `wget`

| Feature       | curl                        | wget             |
| ------------- | --------------------------- | ---------------- |
| Use Case      | API testing, single request | File downloading |
| Interactivity | Highly scriptable           | More passive     |
| Resume        | No (by default)             | Yes              |
| Protocols     | HTTP, FTP, IMAP, etc.       | HTTP, FTP        |

---

## 🔥 Monitoring & Security

### `iptables`

- **Definition**: Configures Linux firewall rules.
- **Example**:

  ```bash
  sudo iptables -L
  sudo iptables -A INPUT -p tcp --dport 80 -j ACCEPT
  ```

> ⚠️ Use with care; misconfiguration can block all traffic.

---

### `watch`

- **Definition**: Runs a command repeatedly at intervals.
- **Example**:

  ```bash
  watch -n 5 top       # Refreshes top every 5 seconds
  ```

---

### `nmap`

- **Definition**: Scans networks and identifies open ports/services.
- **Example**:

  ```bash
  nmap 192.168.1.1
  ```

---

## 📍 Routing & Interfaces

### `route`

- **Definition**: Displays or manipulates IP routing table.
- **Example**:

  ```bash
  route -n
  ```

---

### `ip route`

- **Definition**: Modern way to show and modify routes.
- **Example**:

  ```bash
  ip route
  ```

---

### 📌 Sample Kernel IP Routing Table

```
Destination     Gateway         Genmask         Flags Metric Ref    Use Iface
default         _gateway        0.0.0.0         UG    600    0        0 wlp3s0
172.17.0.0      0.0.0.0         255.255.0.0     U     0      0        0 docker0
192.168.151.0   0.0.0.0         255.255.255.0   U     600    0        0 wlp3s0
```

- **default** = internet traffic
- **docker0** = Docker bridge
- **wlp3s0** = Wi-Fi interface

---

## 📚 Final Notes

- For any command’s manual:

  ```bash
  man <command>
  ```

- Search installed path:

  ```bash
  which <command>
  ```

---

**🧠 Curated by:**
**Waseem Malik**
_Full-Stack Developer | DevOps Engineer | Linux Explorer_
