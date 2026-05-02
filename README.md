# 🚀 CachyOS & Linux Commands Cheatsheet

> The most beautiful and complete CachyOS & Linux commands cheatsheet — searchable, copy-ready, and organized by category. Built for Arch users, by Arch users.

![Preview](preview.png)

---

## ✨ Features

- 🔍 **Live Search** — Instantly filter commands by name or description
- 📋 **One-Click Copy** — Copy any command to clipboard with a single click
- 🗂️ **Category Tabs** — Browse commands by category (Pacman, AUR, Network, ...)
- ⌨️ **Keyboard Shortcut** — Press `/` to focus the search bar, `Escape` to blur
- 📱 **Responsive Design** — Works on desktop and mobile
- 🎨 **CachyOS Style** — Dark theme with CachyOS blue accent colors

---

## 📦 Categories

| Icon | Category | Description |
|------|----------|-------------|
| 📦 | **Pacman** | Official package manager commands (install, remove, search, clean ...) |
| 🔮 | **AUR (paru / yay)** | AUR helper commands for paru and yay |
| 📁 | **File System** | Navigate, copy, move, delete files and directories |
| 🖥️ | **System & Hardware** | CPU, RAM, disk, kernel and hardware info |
| ⚙️ | **Process Management** | systemd services, process monitoring and control |
| 🌐 | **Network** | IP, WiFi, SSH, DNS, ports and downloads |
| 🔐 | **Users & Permissions** | File permissions, users, groups and sudo |
| 🔍 | **Text & Search** | grep, find, sed, awk, tail and more |
| 🚀 | **CachyOS Specific** | CachyOS kernels, performance tweaks, mirrors, ananicy-cpp ... |
| 🗜️ | **Archives** | tar, zip, 7z — compress and extract |

---

## 🗂️ Project Structure

```
cachy-os-cheatsheet/
├── index.html                  # Main HTML entry point
├── README.md
├── preview.png
└── assets/
    ├── favicon.svg
    ├── css/
    │   └── styles.css          # All styles & dark theme
    ├── data/
    │   └── commands.json       # All commands data
    └── js/
        ├── app.js              # Main app logic
        └── modules/
            ├── data-loader.js  # Fetches commands.json
            ├── render.js       # Renders cards and tabs
            ├── state.js        # App state & filtering logic
            └── interactions.js # Copy, keyboard & scroll bindings
```

---

## 🚀 Getting Started

### Option 1 — Python (quickest)

```bash
git clone https://github.com/1ukas1orenz/cachy-os-cheatsheet.git
cd cachy-os-cheatsheet
python3 -m http.server 8080
```

Then open [http://localhost:8080](http://localhost:8080) in your browser.

### Option 2 — Node.js (`serve`)

```bash
npx serve .
```

### Option 3 — GitHub Pages

1. Push the repo to GitHub
2. Go to **Settings → Pages**
3. Set source to `main` branch, root `/`
4. Your site will be live at `https://<username>.github.io/cachy-os-cheatsheet`

> ⚠️ **Important:** The app uses ES Modules (`type="module"`), so it **cannot** be opened directly as a local file (`file://`). You need a local web server (see options above).

---

## ⌨️ Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `/` | Focus the search bar |
| `Escape` | Blur / close the search bar |

---

## 🛠️ Adding Commands

All commands are stored in [`assets/data/commands.json`](assets/data/commands.json).

Each command entry follows this structure:

```json
{
  "command": "sudo pacman -Syu",
  "searchDescription": "update upgrade all packages full system",
  "codeHtml": "<span class='cmd-keyword'>sudo</span> pacman <span class='cmd-flag'>-Syu</span>",
  "descriptionHtml": "Synchronize repositories and upgrade all packages.",
  "danger": false
}
```

### HTML Highlight Classes

| Class | Color | Use for |
|-------|-------|---------|
| `cmd-keyword` | 🔵 Blue | Commands like `sudo`, `git`, `pacman` |
| `cmd-flag` | 🟡 Yellow | Flags like `-Syu`, `-r`, `--now` |
| `cmd-arg` | 🟠 Orange | Arguments like `<package>`, `/path` |

Set `"danger": true` to highlight the description in **red** for destructive commands.

---

## 🙏 Credits

- Inspired by [abdosorour7/git-commands-cheatsheet](https://github.com/abdosorour7/git-commands-cheatsheet)
- Fonts: [JetBrains Mono](https://www.jetbrains.com/lp/mono/), [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans), [Inter](https://fonts.google.com/specimen/Inter) via Google Fonts
- [CachyOS](https://cachyos.org) — The performance-focused Arch-based Linux distribution
- [Arch Wiki](https://wiki.archlinux.org) — The best Linux documentation in existence

---

## 📄 License

MIT License — feel free to fork, modify, and share.
