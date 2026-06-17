Here is the complete, formatted `cat << 'EOF'` block incorporating your updated specifications, including the unified **Semantic Layout Landmarks** and **ARIA Live Regions** tables matching your engineering constraints.

Copy the entire block below, paste it directly into your web terminal, and hit Enter:

```bash
cat << 'EOF' > README.md
# 📊 Student Finance Tracker

### 🌟 Technical Reference & Implementation Documentation
**Developer:** Nshimiyimana Abdurahim  
**Track:** Frontend Web Development (ALU)  
**Version:** 1.1  
**Deployments:** [Live Application](https://nabdurahim-art.github.io/student-finance-tracker)  
**Demo Video:** [Loom Walkthrough](https://www.loom.com/share/9a9a3a1b19ec44c3afba870c8133c88a)

---

## 🔬 Architectural Overview

An accessible, framework-free single-page application (SPA) engineered with semantic HTML5, mobile-first CSS3, and a modular ECMAScript (ES6+) architecture.

* **Persistence:** Stateless, synchronous transactions committing directly to the browser's `localStorage` under the namespace `sft:data`.
* **Universal Design:** Built to strict WCAG AA standards featuring visible high-contrast focus indicators, bypass/skip-to-content routing, and dynamic `aria-live` telemetry updates.

---

## 📂 System Directory Architecture

| Resource Pathway | Architectural Layer | Operational Context & Dependencies |
| :--- | :--- | :--- |
| **index.html** | Presentation Layer | Application shell housing UI views, semantic structural nodes, and ARIA landmarks. |
| **seed.json** | Mock Database | 15 pre-formatted transactional entries ($279.38) for quick system validation and testing. |
| **styles/main.css** | Presentation Layer | Mobile-first layout engine built using design tokens (CSS variables) and 3 explicit breakpoints. |
| **scripts/state.js** | Core Model Layer | Tracks in-memory runtime records, active configuration profiles, and mutation flags. |
| **scripts/storage.js** | Data Access Layer | Serializes application parameters into local storage and runs defensive data integrity checks. |
| **scripts/validators.js** | Security Perimeter | Central registry defining the 5 core immutable regular expression validation rules. |
| **scripts/search.js** | Processing Engine | Compiles safe regular expressions dynamically to filter tables and highlight matching substrings. |
| **scripts/ui.js** | Presentation Layer | Mutates DOM components, renders canvas charts dynamically, and manages form/focus states. |
| **scripts/main.js** | System Controller | Wires operational event loops, coordinates sidebar state, and dispatches sorting routines. |

---

## 🚀 Setup & Local Execution Guide

> ⚠️ **CORS Requirement:** Because this platform utilizes native ECMAScript Modules (`type="module"`), modern web browsers block local file system execution via the `file:///` protocol. The application **must** be served within a localized web server context.

### 1. Clone the Repository
Execute the following commands in your local web terminal:
```bash
git clone [https://github.com/nabdurahim-art/student-finance-tracker](https://github.com/nabdurahim-art/student-finance-tracker)
cd student-finance-tracker

```

### 2. Launch Local Server

* Open the root project folder in **Visual Studio Code**.
* Click the **Go Live** button in the status bar to mount the application via Live Server at `http://127.0.0.1:5500`.

### 3. Inject Experimental Seed Data

1. Navigate to the **Settings** view via the sidebar navigation menu.
2. Under the **Import / Export Data** utility section, click choose file and select `seed.json`.
3. The data verification engine will instantly populate **15 historical records** (ranging from Feb 1 – 19, 2025) totaling **$279.38**, safely keeping the metrics below the default **$500.00 budget cap**.

---

## 🛡️ Regular Expression (Regex) Validation Catalog

All patterns are declared as immutable, deep-frozen objects within `scripts/validators.js` under the `validators.PATTERNS` namespace.

| Verification Objective | Regular Expression Architecture | Compliant Case | Non-Compliant Case |
| --- | --- | --- | --- |
| **1. Text Description** | `/^\S(?:(?!\s{2})[\s\S])*\S$|^\S$/` | `"Lunch at canteen"` | `" Lunch"`, `"Lunch  at"` *(consecutive spaces)* |
| **2. Numeric Costs** | `/^(0|[1-9]\d*)(\.\d{1,2})?$/` | `"12.50"`, `"100"` | `"-5"`, `"1e7"` *(scientific notation)*, `"12.999"` |
| **3. Date ISO Compliance** | `/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/` | `"2025-09-29"` | `"29-09-2025"`, `"2025-13-01"`, Tomorrow's date |
| **4. Categories** | `/^[A-Za-z]+(?:[ -][A-Za-z]+)*$/` | `"Entertainment"` | `"Food & Drink"`, `"Food123"`, `" Food"` |
| **5. Lexical Redundancy** | `/\b(\w{4,})\b(?=.*\b\1\b)/i` | `"Lunch at canteen"` | `"Coffee Coffee shop"`, `"Transport transport pass"` |

---

## ⌨️ Accessibility Keyboard Interface Map

| Operational Key Control | Target Interactive Component | Resulting Interface Action |
| --- | --- | --- |
| Tab | Universal Document Focus | Steps focus forward sequentially through focusable interactive nodes. |
| Shift + Tab | Universal Document Focus | Steps focus backward sequentially through focusable interactive nodes. |
| Tab *(First Press)* | Hidden Layout Shell | Reveals the off-screen skip link structural anchor text instantly. |
| Enter *(On Skip Link)* | Skip-to-Content Anchor | Bypasses sidebar menus entirely, jumping directly to main dashboard data views. |
| Enter / Spacebar | Focused Buttons & Links | Activates selected buttons, changes sidebar navigation, or triggers form clears. |
| Enter *(On Table Header)* | Column Header Elements | Sorts active table rows by that specific column index (reverses layout direction on repeat). |
| Enter *(On Action Trackers)* | Row Edit / Delete Buttons | **Edit:** Pulls row properties back into the input forms. <br>

<br>**Delete:** Removes record safely. |
| Arrow Keys | Form Category Dropdown | Cycles selection selection parameters through the standard category registry seamlessly. |

---

## ♿ Universal Design & Accessibility Specifications

### 🏗️ Semantic Layout Landmarks

| Landmark | Element | Purpose |
| --- | --- | --- |
| `banner` | `<header id="topbar">` | App title and navigation toggle |
| `navigation` | `<aside id="sidebar">` with `<nav>` inside | Section links |
| `main` | `<main id="main-content">` | All content sections |
| `contentinfo` | `<footer>` | Copyright information |

> 💡 Every `<section>` utilizes `aria-labelledby` pointing to its respective `<h2>` so screen readers announce section names when users navigate by landmarks.

### 📢 ARIA Live Regions

| Element | `aria-live` value | When it announces |
| --- | --- | --- |
| `#budget-message` | `polite` (within budget) / `assertive` (over budget) | Every time records or budget cap change |
| `#status-message` | `polite` | After add, edit, delete, import, export, or saving settings |
| `#import-feedback` | `polite` | After data import succeeds or fails |
| `.error-message` divs | `polite` with `role="alert"` | As the user types, on every field validation failure |

> 🛠️ The budget container's `aria-live` value is dynamically switched to `assertive` via JavaScript when the cap is broken, forcing screen readers to interrupt immediately rather than waiting for an idle state.

### 🎨 Color Contrast Compliance Matrix (WCAG AA)

The interface colors conform strictly to the WCAG AA contrast threshold of 4.5:1 for standard body text and 3:1 for user interface interactive controls.

| Element Area | Foreground Color | Background Color | Contrast Ratio | Compliance Status |
| --- | --- | --- | --- | --- |
| **Primary Controls** *(Add Transaction, Save Cap)* | `#FFFFFF` | `#111E30` | **14.2:1** | ✅ Exceeds AA (`> 4.5:1`) |
| **Main Readable Text** *(Labels, headings, text outputs)* | `#1A1A1A` | `#FFFFFF` | **16.4:1** | ✅ Exceeds AA (`> 4.5:1`) |
| **Secondary Buttons** *(Clear Form, Reset)* | `#111E30` | `#D2D7DF` | **10.5:1** | ✅ Exceeds AA (`> 4.5:1`) |
| **Structural Borders** *(Input fields, borders)* | `#555555` | `#FFFFFF` | **6.2:1** | ✅ Passes AA (`> 4.5:1`) |
| **System Alerts** *(Inline error text validation)* | `#D32F2F` | `#FFFFFF` | **4.7:1** | ✅ Passes AA (`> 4.5:1`) |

---

## 💾 LocalStorage Serialization Format

Application state automatically serializes into an object structured under the `sft:data` storage string. Corrupted or structurally compromised signatures are rejected safely on launch to preserve data streams.

```json
{
  "records": [
    {
      "id": "rec_1718364000000",
      "description": "Monthly Bus Pass",
      "amount": 45.00,
      "date": "2025-02-19",
      "category": "Transport"
    }
  ],
  "settings": {
    "budgetCap": 500,
    "baseCurrency": "USD",
    "currency2": { "code": "EUR", "rate": 0.92 },
    "currency3": { "code": "KES", "rate": 130 }
  },
  "version": "1.1",
  "lastUpdated": "2025-02-19T12:00:00.000Z"
}

```

---

## 🎥 Demonstration Video Scope

The provided walkthrough video documents end-to-end interface features across standard interaction environments:

* **Keyboard-Only Runs:** Navigating focus chains exclusively through the keyboard, showing active bypass routes and item selections.
* **Error Prevention Chains:** Visual verification of validation triggers when entering illegal dates or input configurations.
* **Telemetry Testing:** Simulating a budget-cap breach to demonstrate real-time `aria-live="assertive"` audio tracking execution.
* **Responsive Fluid Layouts:** Layout adaptability testing demonstrating seamless structural transitions across mobile, tablet, and desktop viewports.
EOF

```

```
