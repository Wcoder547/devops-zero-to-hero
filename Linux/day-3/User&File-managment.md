

````markdown
🖥️ Linux System-Level Commands & User Management


Author Waseem Malik



 🧠 System-Level Commands

 uname
- Definition: Displays system information.
- Examples:
 
  uname               # Kernel name
  uname -a            # All system info
  uname -r            # Kernel release
````

---

### `uptime`

* **Definition**: Shows how long the system has been running.
* **Example**:

  ```bash
  uptime
  ```

---

### `who`

* **Definition**: Shows users currently logged in.
* **Example**:

  ```bash
  who
  ```

---

### `whoami`

* **Definition**: Displays the current user’s name.
* **Example**:

  ```bash
  whoami
  ```

---

### `which`

* **Definition**: Shows the path of a binary (e.g., bash, python).
* **Example**:

  ```bash
  which bash
  which python3
  ```

---

### `id`

* **Definition**: Displays user ID, group ID, and group memberships.
* **Example**:

  ```bash
  id
  ```

---

### `sudo`

* **Definition**: Executes a command as another user, usually root.
* **Example**:

  ```bash
  sudo apt update
  ```

---

### `sudo shutdown`

* **Definition**: Powers off the system.
* **Example**:

  ```bash
  sudo shutdown now
  ```

---

### `reboot`

* **Definition**: Reboots the system.
* **Example**:

  ```bash
  sudo reboot
  ```

---

### Package Managers

#### `apt` (Ubuntu/Debian)

```bash
sudo apt update
sudo apt install package-name
```

#### `yum` (CentOS/RHEL)

```bash
sudo yum install package-name
```

#### `dnf` (Fedora/Modern RHEL)

```bash
sudo dnf install package-name
```

#### `packman` (openSUSE)

```bash
sudo zypper install packman
```

#### `portage` (Gentoo)

```bash
emerge package-name
```

#### `rpm` (RedHat)

```bash
rpm -ivh package.rpm    # Install
rpm -qa                  # List all installed packages
```

---

## 👤 User & Group Management

### Add a user with a home directory

```bash
sudo useradd -m username
```

### Set password

```bash
sudo passwd username
```

### Switch user

```bash
su username
# password: <enter password>
```

### View all users

```bash
cat /etc/passwd
```

### Delete a user

```bash
sudo userdel username
```

### Add multiple users

```bash
sudo useradd fahad
sudo useradd talha
sudo useradd saad
```

### Create a group

```bash
sudo groupadd devOps
```

### View groups

```bash
cat /etc/group
```

### Add users to group

```bash
sudo gpasswd -a talha devOps
sudo gpasswd -a fahad devOps
```

### Create another group and add multiple users

```bash
sudo groupadd tester
sudo gpasswd -M talha,fahad,saad tester
```

### Delete group

```bash
sudo groupdel tester
```

---

## 🛡️ File Permissions

### View permissions

```bash
ls -l file.txt
```

### Change permissions

```bash
chmod 777 file.txt
# 7 = read(4) + write(2) + execute(1)
# Format: User | Group | Others
```

### Octal Representation:

| Symbol | Value |
| ------ | ----- |
| r      | 4     |
| w      | 2     |
| x      | 1     |

> Example: `-rwxr--r--` = 744

### Set default permission mask

```bash
umask
```

### Change file owner

```bash
chown saad hello.txt
```

### Change group

```bash
chgrp devOps hello.txt
```

Example output:

```bash
-rw-r--r-- 1 saad devOps 0 Jul 14 13:25 hello.txt
```

---

## 📦 Archiving & Compression

### Zip a directory

```bash
zip -r hello.zip directory/
```

### Unzip a file

```bash
unzip hello.zip
```

### Tar (Create)

```bash
tar -cvzf cloud.tar.gz cloud/
```

### Tar (Extract)

```bash
tar -xvzf cloud.tar.gz
```

---

## 🔁 File Transfer Commands

### `scp` (Secure Copy)

* **Copy a file using SSH key:**

```bash
scp -i ~/.ssh/key.pem file.txt user@host:/path/to/destination/
```

* **Copy a folder recursively:**

```bash
scp -i ~/.ssh/key.pem -r folder/ user@host:/path/
```

---

### `rsync`

* **Efficient file/folder transfer (syncing):**

```bash
rsync -av source/ destination/
```

> ✅ Ideal for backups and large data sync with fewer resources.

---

## 📌 Bonus Tips

* Use `man command` to get help for any command.
* Use `history | grep command` to find previously run commands.

---

**🧠 Curated by:**
**Waseem Malik**
*Full-Stack Developer | DevOps Engineer | Linux Enthusiast*


