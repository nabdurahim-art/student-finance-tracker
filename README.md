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
