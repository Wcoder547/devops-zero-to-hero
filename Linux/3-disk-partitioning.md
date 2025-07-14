````markdown
📁 Chapter 3: Disk Partitioning – Summary Notes (Ubuntu-Focused)

📅 Date 2025-07-14  
🖥️ System Ubuntu/Linux

🔹 What is Disk Partitioning?

Disk partitioning divides a hard disk into isolated logical segments called partitions

✅ Why Partition a Disk?

- Organize files and directories
- Separate operating systems (e.g., dual boot)
- Enhance security and system performance
- Enable backup, recovery, and LVM management

🔹 Basic Partitioning Tools

| Tool        | Description                                         |
| ----------- | --------------------------------------------------- |
| `fdisk`     | CLI tool for MBR disks (Master Boot Record)         |
| `parted`    | Advanced tool supporting GPT (GUID Partition Table) |
| `lsblk`     | Lists block devices and their mount points          |
| `blkid`     | Prints block device UUIDs and types                 |
| `partprobe` | Informs the kernel of partition table changes       |

---

🔹 Viewing Partitions

Using `/proc`:

```bash
cat /proc/partitions | grep sd
```
````

✅ Using `lsblk`:

```bash
lsblk
```

### ✅ Using `fdisk`:

```bash
sudo fdisk -l
```

---

## 🔹 Partitioning with `fdisk` (MBR Disks)

### 📌 Syntax:

```bash
sudo fdisk /dev/sdX
```

Replace `sdX` with your disk (e.g., `sdb`, `sdc`)

### 🛠️ Example: Create New Partition on `/dev/sdb`

1. Launch `fdisk`:

   ```bash
   sudo fdisk /dev/sdb
   ```

2. Show help:

   ```
   Command (m for help): m
   ```

3. Print current table:

   ```
   Command: p
   ```

4. Create a partition:

   ```
   Command: n
   → Type: p (primary)
   → Number: 1
   → First sector: default
   → Last sector: +4294M
   ```

5. Write changes:

   ```
   Command: w
   ```

6. Inform kernel:

   ```bash
   sudo partprobe /dev/sdb
   ```

7. Verify:

   ```bash
   sudo fdisk -l /dev/sdb
   ```

---

## 🔹 Partitioning with `parted` (GPT Support)

### 📌 Syntax:

```bash
sudo parted /dev/sdX
```

### 🛠️ Example: Create a Primary Partition on `/dev/sdc`

```bash
sudo parted /dev/sdc
(parted) mklabel gpt
(parted) mkpart primary ext4 0% 4294M
(parted) print
(parted) quit
```

---

## 🔹 Logical Volume Manager (LVM)

LVM allows flexible disk management by abstracting physical volumes into logical volumes.

### ✅ LVM Setup Steps

1. **Install LVM2** (if not available):

   ```bash
   sudo apt install lvm2
   ```

2. **Create a Physical Volume (PV)**:

   ```bash
   sudo pvcreate /dev/sdb
   ```

3. **Create Volume Group (VG)**:

   ```bash
   sudo vgcreate vg_group01 /dev/sdb
   ```

4. **Create Logical Volume (LV)**:

   ```bash
   sudo lvcreate -L 4G -n lv_partition01 vg_group01
   ```

5. **Format the LV with ext4**:

   ```bash
   sudo mkfs.ext4 /dev/vg_group01/lv_partition01
   ```

6. **Mount the LV**:

   ```bash
   sudo mkdir /mnt/lv_partition01
   sudo mount /dev/vg_group01/lv_partition01 /mnt/lv_partition01
   ```

7. **Verify Mount**:

   ```bash
   df -h
   ```

---

## 🔄 Extending & Reducing Logical Volumes

### 🔼 Extend Logical Volume by 2GB

```bash
sudo lvextend -L +2G /dev/vg_group01/lv_partition01
sudo resize2fs /dev/vg_group01/lv_partition01
```

### 🔽 Reduce Logical Volume (⚠️ Risky – Backup First!)

```bash
sudo umount /mnt/lv_partition01
sudo e2fsck -f /dev/vg_group01/lv_partition01
sudo resize2fs /dev/vg_group01/lv_partition01 3G
sudo lvreduce -L 3G /dev/vg_group01/lv_partition01
sudo mount /dev/vg_group01/lv_partition01 /mnt/lv_partition01
```

---

## 🧹 Remove LVM Components

### ❌ Remove LV

```bash
sudo umount /mnt/lv_partition01
sudo lvremove /dev/vg_group01/lv_partition01
```

### ❌ Remove VG

```bash
sudo vgremove vg_group01
```

### ❌ Remove PV

```bash
sudo pvremove /dev/sdb
```

---

## 📌 Quick Command Summary

### `fdisk` (MBR)

```bash
sudo fdisk /dev/sdb
sudo partprobe /dev/sdb
sudo fdisk -l /dev/sdb
```

### `parted` (GPT)

```bash
sudo parted /dev/sdc
(parted) mkpart primary ext4 0% 4294M
```

### `lsblk` and `blkid`

```bash
lsblk
blkid
```

### LVM

```bash
sudo pvcreate /dev/sdb
sudo vgcreate vg_group01 /dev/sdb
sudo lvcreate -L 4G -n lv_partition01 vg_group01
sudo mkfs.ext4 /dev/vg_group01/lv_partition01
sudo mount /dev/vg_group01/lv_partition01 /mnt/lv_partition01
```

---

## 🧠 Tips for Ubuntu Users

- Use `lsblk` instead of `fdisk -l` for cleaner output.
- Prefer `parted` for GPT disks over 2TB.
- Back up data before using `lvreduce`.
- Add entries to `/etc/fstab` for persistent mounts.
- `gparted` GUI is available for visual disk partitioning:

  ```bash
  sudo apt install gparted
  ```

---

## ✅ Use Cases

| Task                       | Recommended Tool |
| -------------------------- | ---------------- |
| MBR disk partitioning      | `fdisk`          |
| GPT disk partitioning      | `parted`         |
| Visual GUI partitioning    | `gparted`        |
| Dynamic storage management | `LVM`            |

---

**Authored by:**
👨‍💻 Waseem Malik
_Full-Stack Developer & DevOps Engineer_

---

> 🚨 Always double-check disk names and back up your data before modifying partitions.
