Student Finance Tracker
Technical Reference & Implementation Documentation
Developer: Nshimiyimana Abdurahim | Track: Frontend Web Development (ALU) | Version: 1.1
Deployments: Launch Live Web Application | Review System Demonstration
🔬 Architectural Overview
An accessible, framework-free single-page application (SPA) engineered with semantic HTML5, mobile-first CSS3, and modular ECMAScript (ES6+) architecture.
Persistence: Stateless, synchronous transactions committing directly to browser localStorage under the namespace sft:data.
Universal Design: Built to strict WCAG AA standards featuring visible focus indicators, skip-to-content links, and dynamic aria-live telemetry.
                        Wireframe



📂 System Directory Architecture
Resource Pathway
Architectural Layer
Operational Context & Dependencies
index.html
Presentation Layer
Application shell housing UI views, semantic nodes, and ARIA landmarks.
seed.json
Mock Database
15 pre-formatted transactional entries ($279.38) for system validation.
styles/main.css
Presentation Layer
Mobile-first layout using CSS variables and 3 explicit breakpoints.
scripts/state.js
Core Model Layer
Tracks in-memory records, active configuration profiles, and mutation flags.
scripts/storage.js
Data Access Layer
Serializes parameters into local storage and runs data integrity checks.
scripts/validators.js
Security Perimeter
Registry defining the 5 core immutable regex validation rules.
scripts/search.js
Processing Engine
Compiles safe regular expressions to filter tables and highlight substrings.
scripts/ui.js
Presentation Layer
Mutates DOM components, renders canvas charts, and manages form states.
scripts/main.js
System Controller
Wires operational event loops, sidebar state, and sorting routines.

Setup & Local Execution Guide
 CORS Requirement: Because this platform uses native ECMAScript Modules (type="module"), modern browsers block local file execution (file:///). The application must run within a localized web server context.
Clone the Repository:
Bash
git clone https:https://github.com/nabdurahim-art/student-finance-tracker
cd student-finance-tracker




Launch Local Server: Open the root folder in VS Code and click Go Live to mount the app at http://127.0.0.1:5500.
Inject Experimental Seed Data:
Navigate to Settings via the sidebar menu.
Under Import / Export Data, choose seed.json.
The validation engine populates 15 records (Feb 1–19, 2025) totaling $279.38, safely below the default $500.00 budget cap.
 Regular Expression (Regex) Validation Catalog
All rules are declared as immutable properties within scripts/validators.js under the validators.PATTERNS object.
Verification Objective
Regular Expression Architecture
Compliant Case
Non-Compliant Case
1. Text Description
/^\S(?:(?!\s{2})[\s\S])*\S$|^\S$/
"Lunch at canteen"
" Lunch", "Lunch at" (consecutive spaces)
2. Numeric Costs
/^(0|[1-9]\d*)(\.\d{1,2})?$/
"12.50", "100"
"-5", "1e7" (scientific notation), "12.999"
3. Date ISO Compliance
/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/
"2025-09-29"
"29-09-2025", "2025-13-01", Tomorrow's date
4. Categories
/^[A-Za-z]+(?:[ -][A-Za-z]+)*$/
"Entertainment"
"Food & Drink", "Food123", " Food"
5. Lexical Redundancy
/\b(\w{4,})\b(?=.*\b\1\b)/i
"Lunch at canteen"
"Coffee Coffee shop", "Transport transport pass"





⌨️ Accessibility Keyboard Interface Map
Operational Key Control
Target Interactive Component
Resulting Interface Action
Tab
Universal Document Focus
Steps focus forward sequentially through interactive nodes.
Shift + Tab
Universal Document Focus
Steps focus backward sequentially through interactive nodes.
Tab (First Press)
Hidden Layout Shell
Reveals the off-screen Skip to Content structural anchor link.
Enter (On Skip Link)
Skip-to-Content Anchor
Jumps focus over side menus straight to main data dashboards.
Enter / Spacebar
Focused Buttons & Links
Triggers active buttons, nav options, or form clears.
Enter (On Table )
Column Header Elements
Sorts table data by that column index (reverses direction on repeat).
Enter (On Actions)
Row Edit / Delete Button
Edit: Pulls row properties into form fields. Delete: Removes record.
Arrow Keys
Form Category Dropdown
Cycles selection values through standard system categories cleanly.

♿ Universal Design & Accessibility Specifications
Semantic Layout Landmarks
<header id="topbar"> (Role: banner): Global header title and responsive menu toggle.
<aside id="sidebar"> (Role: navigation): Main navigation routing panel.
<main id="main-content"> (Role: main): Core dashboard, data tables, and input forms.
<footer> (Role: contentinfo): Footprint housing metadata and copyright notices.
Note: Every <section> utilizes aria-labelledby linking to its respective <h2> for screen-reader contextual announcements.
Live Telemetry Announcement Regions
#budget-message (polite/assertive): Tracks consumption rates. Upgrades to assertive to force immediate speech interruption if budget limits break.
#status-message (polite): Announces real-time transaction updates upon creation, modification, or deletion.
#import-feedback (polite): Telemeters real-time parsing outputs when importing configuration files.
.error-message (polite / role="alert"): Captures and reads input validation failures inline as text fields are modified.

Color Contrast Compliance (WCAG AA)
The interface colors are meticulously paired to ensure maximum visibility and conform strictly to the WCAG AA contrast threshold of 4.5:1 for standard body text and 3:1 for user interface controls.




Element Area
Foreground Color
Background Color
Contrast Ratio
Compliance Status
Primary Controls (e.g., Add Transaction, Save Cap)
#FFFFFF (White)
#111E30 (Dark Slate Blue)
14.2:1
✅ Exceeds AA ($> 4.5:1$)
Main Readable Text (Labels, headings, and values)
#1A1A1A (Near Black)
#FFFFFF (White)
16.4:1
✅ Exceeds AA ($> 4.5:1$)
Secondary Buttons (e.g., Clear Form)
#111E30 (Dark Navy Text)
#D2D7DF (Light Grayish Blue)
10.5:1
✅ Exceeds AA ($> 4.5:1$)
Structural Borders / Input Placeholders
#555555 (Slate Gray)
#FFFFFF (White)
6.2:1
✅ Passes AA ($> 4.5:1$)
System Alerts (Error field corrections)
#D32F2F (Standard Red)
#FFFFFF (White)
4.7:1
✅ Passes AA ($> 4.5:1$)



💾 LocalStorage Serialization Format
Data parsed automatically under the sft:data key. Corrupted or invalid JSON data shapes are discarded instantly on boot to protect system integrity.
JSON
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


    

                               Demo Video 

https://www.loom.com/share/9a9a3a1b19ec44c3afba870c8133c88a


The video covers :    

         Keyboard- only navigation through the app. 
          Error validation (choosing the wrong date)
          Exceeding the budget cap and getting the assertive ARIA announcement 
         Responsive layout on mobile, tablet, and desktop.                                 

