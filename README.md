Student Finance Tracker

A responsive, highly accessible single-page web application designed for students to manage daily expenses and track monthly financial targets. Built completely from scratch using vanilla structural HTML, mobile-first CSS layouts, and modern modular JavaScript without relying on external frameworks or third-party open-source libraries.

* **Live Web Application URL:** [Launch Live Site](https://nabdurahim-art.github.io/student-finance-tracker/)
* **Video Demonstration Walkthrough:** [Watch the Loom Tour](https://www.loom.com/share/89cff657d94841eab64bb8e26c427006)

---

## 📌 Project Overview

The **Student Finance Tracker** helps you control personal spending through live transaction logging, dynamic data sorting, and precise multi-field filtering. It features a customizable monthly spending ceiling with automated warning alerts, an inline multi-currency display tool, and full data portability using JSON files.

All financial entries persist securely within your native browser local storage, allowing critical tracking metrics to safely survive page reloads or tab closures. Designed strictly around universal design principles, the user interface features comprehensive mouse-free keyboard navigation maps alongside assertive `aria-live` screen-reader configurations.

* **Developer:** Nshimiyimana Abdurahim
* **Course:** Frontend Web Development — African Leadership University (ALU)
* **Version:** 1.1

---

## 🚀 Key Features

* **Complete Transaction Lifecycle:** Seamlessly add new expenses, modify existing records, or clear outdated transactions via a dynamic, single-page input form.
* **Live Search with Match Highlighting:** An input filter that evaluates descriptions, categories, dates, or prices on every keystroke, matching search strings and dynamically highlighting terms inside the view.
* **Multi-Column Sorting:** Sort your history table instantly by transaction date, textual description, or total amount with a reversible ascending/descending toggle.
* **Analytical Dashboard:** Monitor real-time statistics including overall transaction volume, total capital spent, your highest spending category, and a responsive bar chart tracking expenses over the past 7 days.
* **Smart Spending Cap:** Set custom financial limits. The interface shifts colors dynamically based on target thresholds and triggers screen-reader notifications upon exceeding your ceiling.
* **Exchange Rate Display:** Calculate alternative values across three distinct currencies simultaneously using custom manual exchange configurations.
* **Robust JSON Portability:** Back up your database by downloading a timestamped JSON snapshot. Restore your records anytime using a file importer that performs deep structural data validation before updating your view.
* **Universal Accessibility (A11y):** Built using an invisible keyboard skip-to-content link, prominent focus style rings, semantic structural tags, and live assistive text announcements.

---

## 📐 Project Wireframes

The initial user interface layout and application state modules were plotted out by hand before implementing the code architecture. Below are the original blueprint schematics for the single-page shell and settings configuration screens:

### Primary Dashboard & Transaction Management Layout
The core dashboard design features a side navigation pane, horizontal high-level metric summaries, budget remaining bars, real-time search filtering, and the transactional registration module.
![Application Dashboard Wireframe](CamScanner%2013-06-2026%2012.09.jpg)

### Settings, Currency, & Data Management Interface
The settings submodule blueprint maps the monthly budget ceiling inputs, manual currency conversion tables, and JSON utility actions.
![Application Settings Wireframe](CamScanner%2013-06-2026%2012.11.jpg)

---

## 📂 Project Directory Structure

| File Name | File Type / Location | Technical Purpose & Architectural Role |


File Module
Architectural Role
Technical Purpose & Context
Runtime Dependencies
🌐 index.html

[HTML View]
UI Shell & Layout
Houses the single-page application structure, layout views, and semantic ARIA landmarks.
None (DOM Core)
⚙️ app.js

[Core Script]
Central Controller
The main entry point. Initializes the app, hooks up event listeners, and coordinates features.
state, storage, ui, search
📊 ui.js

[Module]
DOM Renderer
Dynamically updates the UI, builds canvas-free charts, manages views, and injects error tags.
state
🔍 search.js

[Module]
Filtering Engine
Runs real-time text matching and regex search queries, adding HTML-safe text highlighting.
Standalone Utility
🛡️ validators.js

[Module]
Security Firewall
Contains the 5 core regular expressions used to clean and validate input field data.
Standalone Rules
🧠 state.js

[Module]
App Memory
Acts as the local runtime database tracking expenses, currency profiles, and active edit state variables.
Primary Reactive Layer
💾 storage.js

[Module]
Data Persistence
Handles direct saves and reads to browser localStorage, running schema checks on boot.
Browser localStorage
📄 seed.json

[JSON Data]
Mock Database
Contains 15 pre-formatted sample transactions used to test the JSON validation importer.
app.js (via file import)
📝 README.md

[Markdown]
Project Manual
Complete documentation suite containing deployment steps, the regex catalog, and layout wireframes.
None (Documentation)



---

## 💻 Setup & Local Execution Guide

# Prerequisites
Because this application relies on standard ECMAScript Modules (`type="module"`) for cleaner code organization, modern web browsers require the project files to be read from a local web server rather than being clicked open from your desktop. Opening the file directly via `file:///` pathways will trigger browser security blocks (CORS errors).

 Step-by-Step Launch
1. Clone the repository down to your computer using your terminal:
```bash
   git clone [https://github.com/nabdurahim-art/student-finance-tracker.git](https://github.com/nabdurahim-art/student-finance-tracker.git)
   cd student-finance-tracker


Open the project folder in your preferred text editor (e.g., Visual Studio Code).

Spin up a local server ecosystem. If you are using VS Code, click the Go Live button on your status bar to open the interface inside your browser at http://127.0.0.1:5500.
Populating the App with Pre-Set Seed Data
Launch the app in your browser and select the Settings view tab from the side navigation.
Locate the Import / Export Data management card.
Click on the Choose File target button and select the seed.json file located in the root folder.
The import utility will read the file configuration, verify its data structure, and populate your tracker with 15 mock records dating from February 1 to February 19, 2025. The initial balance calculates out to exactly $279.38, keeping your status ring safely inside the green zone under your initial $500.00 budget threshold.
🔍 Regular Expression (Regex) Catalog
All validation logic is contained as immutable constants within your root validators.js script under the validators.PATTERNS object wrapper.
Rule Objective
Pattern Architecture
Valid Input Example
Invalid Input Trigger
1. Text Description Validation
`/^\S(?:(?!\s{2})[\s\S])*\S$
^\S$/`
"Lunch at canteen"
2. Numeric Price Validation
`/^(0
[1-9]\d*)(.\d{1,2})?$/`
"12.50", "100"
3. Date Structure Check
/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/
"2025-09-29"
Wrong segment sorting, impossible month or day values, pre-2000 settings
4. Strict Category Labeling
/^[A-Za-z]+(?:[ -][A-Za-z]+)*$/
"Entertainment"
Special punctuation characters (&), numbers, or outer padding spacing
5. Redundant Word Detection
/\b(\w{4,})\b(?=.*\b\1\b)/i
"Lunch at the canteen"
"Coffee Coffee shop" (Triggers a block on repeated terms $\ge$ 4 letters)

⌨️ Accessibility Keyboard Configuration
The platform functions smoothly without requiring a mouse, conforming to accessible keyboard design layouts:
Tab Key: Navigates focus forward sequentially through input form elements, control blocks, buttons, and navigation options.
Shift + Tab Key: Shifts focus backward through the interactive element order.
Enter / Spacebar Key: Triggers a highlighted action block, commits input entries, clears form cards, or executes column sorting toggles.
Initial Page Load Tab Press: Displays a hidden skip-to-content hyperlink, allowing keyboard users to bypass side menu links and drop straight to core dashboards.
Escape Key: Instantly exits and hides the slide-out responsive sidebar view panel when operating the platform on narrower mobile layouts.
♿ Universal Design & Accessibility Notes
Screen Reader Landmarks
All interactive layouts use standard semantic container nodes equipped with explicit ARIA landmark designations to support navigation tools:
Header Hub: Wrapper element <header id="topbar"> uses the banner landmark role.
Sidebar Navigation Menu: Wrapper element <aside id="sidebar"> runs the navigation landmark role.
Primary Document Interface: Element <main id="main-content"> holds the explicit main landmark.
Footer Block: Container element <footer> registers the contentinfo landmark specification.
Live Utility Announcement Regions
The app uses real-time aria-live containers to dynamically announce updates without interrupting screen readers:
#budget-message Area: Automatically alters its status configuration between polite (when within safe spending limits) and assertive (when a new entry pushes you past your monthly limit) to provide instant warnings.
#status-message Area: Broadcasts confirmation cues upon adding records, deleting rows, or executing an application export.
.error-message Tooltips: Utilizes role="alert" behaviors to announce validation failures inline as you type, keeping error tracking clear and immediate.
🧪 Testing Instructions
The application contains an isolated, browser-based automated testing suite built to verify all data schemas and input validation safety laws under stress.
Launch your local web server using your development tool (e.g., VS Code Live Server).
Open your web browser and navigate to the local testing address: http://127.0.0.1:5500/tests.html.
The browser will instantly execute unit tests against the patterns written inside your root validators.js script.
The test page will visually render pass/fail reports detailing whether your regex catches bad data (like negative amounts, trailing spaces, or duplicated words) while safely passing clean financial records.
💾 LocalStorage Layout Schema
All user files and parameters write immediately under the database namespace wrapper key sft:data. Your records are structured inside local database objects conforming to the following model:
JSON
{
  "records": [
    {
      "id": "rec_1718364000000",
      "description": "Monthly Bus Pass",
      "amount": 45.00,
      "date": "2026-06-14",
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
  "lastUpdated": "2026-06-14T11:17:29.000Z"
}


