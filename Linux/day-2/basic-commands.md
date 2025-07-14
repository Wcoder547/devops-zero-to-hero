
---

````markdown
 📘 Linux Commands Cheat Sheet

 📂 Basic Commands

 `date`
- Definition: Displays the current date and time.
- Example
  date
````

---

### `ls`

* **Definition**: Lists files and directories in the current directory.
* **Options**:

  * `-l`: Long format
  * `-a`: Show hidden files
* **Examples**:

  ```bash
  ls
  ls -l
  ls -la
  ```

---

### `mkdir`

* **Definition**: Creates a new directory.
* **Example**:

  ```bash
  mkdir myFolder
  ```

---

### `pwd`

* **Definition**: Prints the current working directory.
* **Example**:

  ```bash
  pwd
  ```

---

### `cd`

* **Definition**: Changes the current directory.
* **Examples**:

  ```bash
  cd /home/user
  cd ..
  ```

---

### `rm`

* **Definition**: Removes files or directories.
* **Examples**:

  ```bash
  rm filename.txt             # delete file
  rm -r myFolder              # delete folder recursively
  rmdir myEmptyFolder         # remove empty directory
  ```

---

### `touch`

* **Definition**: Creates a new empty file or updates the timestamp.
* **Example**:

  ```bash
  touch file.txt
  ```

---

### `cat`

* **Definition**: Concatenates and displays file content.
* **Example**:

  ```bash
  cat file.txt
  ```

---

### `echo`

* **Definition**: Prints text to stdout or writes to a file.
* **Example**:

  ```bash
  echo "Hello world!!" > helloworld.txt
  ```

---

### `zcat`

* **Definition**: Displays the content of compressed `.gz` files.
* **Example**:

  ```bash
  zcat file.gz
  ```

---

### `head`

* **Definition**: Shows the first few lines of a file (default is 10).
* **Example**:

  ```bash
  head file.txt
  ```

---

### `tail`

* **Definition**: Shows the last few lines of a file.
* **Examples**:

  ```bash
  tail file.txt
  tail -f /var/log/syslog     # Follow new logs live
  ```

---

### `less`

* **Definition**: Views file content one screen at a time (paged view).
* **Example**:

  ```bash
  less file.txt
  ```

---

### `cp`

* **Definition**: Copies files and directories.
* **Examples**:

  ```bash
  cp source.txt destination.txt          # Copy file
  cp -r sourceDir/ destinationDir/       # Copy directory recursively
  ```

---

### `mv`

* **Definition**: Moves or renames files or directories.
* **Examples**:

  ```bash
  mv source.txt new_location/
  mv devOps devOps-linux                 # Rename directory
  ```

---

### `wc`

* **Definition**: Counts lines, words, and characters in a file.
* **Example**:

  ```bash
  wc file.txt
  ```

---

### 🧷 File Linking

#### Hard Link

* **Command**:

  ```bash
  ln original.txt hardlink.txt
  ```

#### Soft (Symbolic) Link

* **Command**:

  ```bash
  ln -s /path/to/original softlink.txt
  ```

---

### ✂️ `cut`

* **Definition**: Cuts sections from lines of input.
* **Example**:

  ```bash
  cut -b 1-4 file.txt
  ```

---

### `tee`

* **Definition**: Reads from stdin and writes to a file and stdout.
* **Example**:

  ```bash
  echo "hello" | tee hello.txt
  ```

---

### `sort`

* **Definition**: Sorts lines of text files.
* **Example**:

  ```bash
  sort file.txt
  ```

---

### `clear`

* **Definition**: Clears the terminal screen.
* **Example**:

  ```bash
  clear
  ```

---

### `diff`

* **Definition**: Compares files line by line.
* **Example**:

  ```bash
  diff file1.txt file2.txt
  ```

---

## 📝 vi Editor Basics

### `vi file.txt`

* **Definition**: Opens the `vi` editor to edit files.
* **Modes**:

  * `i`: Insert mode
  * `ESC`: Exit insert mode
  * `:w`: Save
  * `:q`: Quit
  * `:wq`: Save and quit
  * `:q!`: Force quit without saving

---

## 🧠 Advanced Commands

### `ssh user@host`

* **Definition**: Securely logs into a remote system.
* **Example**:

  ```bash
  ssh malik@192.168.1.10
  ```

---

### SSH Keys

* **Private key**: Stored **locally**
* **Public key**: Stored **on the server**

Generate key:

```bash
ssh-keygen -t rsa -b 4096
```

Copy key to server:

```bash
ssh-copy-id user@host
```

---

### PuTTY

* **Definition**: A free SSH and telnet client for Windows to access Linux systems.

---

### `df`

* **Definition**: Displays disk space usage.
* **Example**:

  ```bash
  df -h
  ```

---

### `du`

* **Definition**: Shows file and directory space usage.
* **Example**:

  ```bash
  du -v .
  ```

---

### `top`

* **Definition**: Displays real-time system processes and resource usage.
* **Example**:

  ```bash
  top
  ```

---

### `fuser`

* **Definition**: Identifies which processes are using a file or socket.
* **Example**:

  ```bash
  fuser filename.txt
  ```

---

### `kill`

* **Definition**: Terminates a process by PID.
* **Example**:

  ```bash
  kill -9 162
  ```

---

### `free`

* **Definition**: Displays memory usage.
* **Example**:

  ```bash
  free -h
  ```

---

### `nohup`

* **Definition**: Runs a command immune to hangups (good for background tasks).
* **Example**:

  ```bash
  nohup free -h &
  ```

---

### `vmstat`

* **Definition**: Reports system performance stats (memory, CPU, etc.).
* **Example**:

  ```bash
  vmstat
  ```

---

> ✅ **Pro Tip**: You can always use `man <command>` for detailed documentation in Linux.

---

**© Waseem Malik - DevOps Notes**


