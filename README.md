# Shell Scripting Complete – DevOps Engineer's Guide

## 🚀 1. Shell Fundamentals & Environment Setup

- **What is a Shell?** `bash`, `zsh`, `ksh`, `fish`
- **Difference:** Shell vs Terminal vs Bash
- **Install & Setup:**

  - Linux/macOS/WSL on Windows
  - Key Config Files: `~/.bashrc`, `~/.profile`, `~/.zshrc`

- **Customize Your Shell:**

  - PS1 Prompt, Aliases, Functions
  - Environment Vars: `$PATH`, `$HOME`, `$USER`, `$PS1`

---

## ✍️ 2. Shell Scripting Basics

- **Create & Run Scripts:**

  - `.sh`, `#!/bin/bash`, `chmod +x`, `./script.sh`, `bash script.sh`

- **Variables:** Strings, Integers, Arrays
- **User Input:** `read` command
- **Operators:** Arithmetic, Relational, Logical
- **Control Structures:**

  - `if`, `if-else`, `case`
  - `for`, `while`, `until`

- **Functions & Exit Status:**

  - Define/Call Functions
  - `$?`, `exit`

---

## 🔧 3. Intermediate Techniques

- **File Ops:** `ls`, `cp`, `mv`, `rm`, `mkdir`, `find`
- **Text Processing:** `cut`, `tr`, `sed`, `awk`
- **Permissions:** `chmod`, `chown`, `umask`
- **I/O Redirection:** `>`, `>>`, `<`, `2>`, `&>`, pipes `|`
- **Processes:** `ps`, `kill`, `jobs`, `fg`, `bg`, `nohup`
- **Task Scheduling:**

  - `cron`, `at`, `systemd` timers

- **Log Handling:** `tail -f`, `grep`, `awk` for logs

---

## 🧠 4. Advanced Shell & Debugging

- **Robust Scripts:**

  - `set -e`, `trap`, `||`, `&&`

- **Debug Tools:**

  - `set -x`, `bash -x script.sh`, `set -v`

- **Regex Mastery:** `grep -E`, `sed -r`, `awk` patterns
- **Advanced Parsing:** `xargs`, `paste`, `sort`, `uniq`, `cut`
- **Networking:** `ping`, `curl`, `wget`, `ss`, `netstat`
- **Parallel Jobs:** `&`, `wait`, `xargs -P`
- **APIs via Shell:** `curl` with headers, auth, and JSON
- **Secure Ops:** `ssh`, `scp`, `sftp`, `expect` scripting

---

## 🔗 5. DevOps-Specific Use Cases

- **CI/CD Integration:** Pre/post-deployment scripts
- **Cloud Automation:**

  - `aws-cli`, `gcloud`, `az-cli`

- **Kubernetes Tasks:**

  - `kubectl`, `helm`, `jq`, `yq` automation

- **Monitoring Scripts:** System health checks
- **Backup Solutions:** Files, DBs, VMs with cron
- **Log Analysis:** Real-time error parsing, notifications

---

## 🧰 6. Shell Scripting Best Practices

- Write **modular, DRY, and readable** scripts
- Use consistent **naming conventions** and comments
- Opt for **POSIX-compliant** code where possible
- When not to use shell:

  - Complex logic → Python
  - Infrastructure as Code → Ansible/Terraform

- Explore alternatives: `Zsh`, `Fish`, `Dash`

---

## 🛠️ 7. Practical Projects for DevOps Portfolios

### ✅ **Log Monitor & Alert System**

Parse logs, detect failures, send Slack/email alerts.

### ✅ **Backup Automation Script**

Schedule backups for files, DBs, EC2 snapshots (AWS CLI).

### ✅ **CI/CD Helper Script**

Clone repo → run tests → deploy artifacts.

### ✅ **System Health Reporter**

Check CPU, RAM, disk, network, services; notify on issues.

### ✅ **K8s Resource Monitor**

Watch pods, CPU/mem usage, and send alerts.

### ✅ **AWS EC2 Manager**

Start/stop EC2 instances based on time/events.

---
