# ⚡ Quick CSS Cheatsheet

### 🔤 Fonts

| Font Name | Class Key | Type |
| :--- | :--- | :--- |
| **Urbanist** | `font-primary` | Primary UI Font |
| **Space Grotesk** | `font-mono-script` | Monospace / Code Font |

---

### 🎨 Colors

| Color Name | CSS Variable | Tailwind Utility |
| :--- | :--- | :--- |
| **Background** | `var(--bg-color)` | `bg-[var(--bg-color)]` |
| **Secondary** | `var(--secondary-color)` | `text-secondary` / `bg-secondary` |
| **Box Color** | `var(--box-color)` | `bg-box` |

---

### 📜 Scrollbar

| Feature | Class Key | Description |
| :--- | :--- | :--- |
| **Hide Scrollbar** | `noscrollbar` (or `scrollbar-hide`) | Hides scrollbar, keeps scrolling |

---

### ↔️ Horizontal Alignment (Flex Justify)

| Key | Tailwind Equivalent | Alignment |
| :--- | :--- | :--- |
| `xs` | `flex justify-start` | Left |
| `xc` | `flex justify-center` | Center |
| `xe` | `flex justify-end` | Right |

---

### ↕️ Vertical Alignment (Flex Items)

| Key | Tailwind Equivalent | Alignment |
| :--- | :--- | :--- |
| `ys` | `flex items-start` | Top |
| `yc` | `flex items-center` | Center |
| `ye` | `flex items-end` | Bottom |

---

### 🔲 Both Axes (X & Y Combined)

| Key | Tailwind Equivalent | Alignment |
| :--- | :--- | :--- |
| `xys` | `flex justify-start items-start` | Top-Left |
| `xyc` | `flex justify-center items-center` | Dead Center |
| `xye` | `flex justify-end items-end` | Bottom-Right |

---

### 🎯 Self Alignment (Align Self)

| Key | Tailwind Equivalent | Alignment |
| :--- | :--- | :--- |
| `ss` | `self-start` | Self Start |
| `sc` | `self-center` | Self Center |
| `se` | `self-end` | Self End |

---

### 📱 Responsive Breakpoints

| Screen Size | Prefix | Example |
| :--- | :--- | :--- |
| **SM (≥ 640px)** | `sm:` | `sm:xc`, `sm:xyc` |
| **MD (≥ 768px)** | `md:` | `md:xe`, `md:yc` |
| **LG (≥ 1024px)** | `lg:` | `lg:xyc`, `lg:xye` |
