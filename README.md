Student Finance Tracker

A responsive, accessible single-page web application designed for students to manage daily expenses and track monthly financial targets. Built purely from scratch using semantic HTML, structured CSS layouts, and modern modular JavaScript without relying on external frameworks or third-party libraries.

Live Demo :[Watch the Loom Video 
https://www.loom.com/share/89cff657d94841eab64bb8e26c427006

URL :  

https://nabdurahim-art.github.io/student-finance-tracker/


 Project Overview

The Student Finance Tracker helps you control personal spending through live transaction logging, dynamic data sorting, and precise multi-field filtering. It features a customizable monthly spending ceiling with automated warning alerts, an inline multi-currency display tool, and full data portability using JSON files. 

Your financial entries persist securely in your browser cache, ensuring your database remains intact even when you refresh or close the page. The user interface complies closely with modern accessibility guidelines, ensuring complete screen-reader compatibility and intuitive, mouse-free keyboard navigation.

*   Developer: Nshimiyimana Abdurahim
*   Course: Frontend Web Development — African Leadership University (ALU)


 
                                         Wireframe Of project


















 Key Features

*   Complete Transaction Lifecycle: Seamlessly add new expenses, modify existing records, or clear outdated transactions via a dynamic input form.

*   Live Search with Match Highlighting: An input filter that evaluates descriptions, categories, dates, or prices on every keystroke, matching search strings and highlighting terms inside the view.

*   Multi-Column Sorting: Sort your history table instantly by transaction date, textual description, or total amount with a reversible ascending/descending toggle.

*   Analytical Dashboard: Monitor real-time statistics including overall transaction volume, total capital spent, your highest spending category, and a responsive bar chart tracking expenses over the past 7 days.

*   Smart Spending Cap: Set custom financial limits. The interface shifts colors dynamically based on target thresholds and triggers screen-reader notifications upon exceeding your ceiling.

*   Exchange Rate Display: Calculate alternative values across three distinct currencies simultaneously using custom manual exchange configurations.

*   Robust JSON Portability: Back up your database by downloading a timestamped JSON snapshot. Restore your records anytime using a file importer that performs deep structural data validation before updating your view.

*   **Universal Accessibility (A11y):** Built using an invisible keyboard skip-to-content link, prominent focus state styling, semantic structural tags, and live assistive text announcements.

---

 Project Directory Structure


                                             student-finance-tracker/

index.html 
Main single-page interface shell containing all UI layouts
 seed.json    
15 pre-configured sample transactions for data import testing
README.md 
Project documentation and setup blueprint manual
app.js              
 Central hub wiring event handling, sorting execution, and imports
search.js 
Filtering logic and safe regex string match highlighting
 ui.js 
DOM renderer managing chart compilation and responsive table 
 validators.js   
Master schema file defining regex input validation expressions




💻 Setup & Local Execution Guide
Prerequisites
Because this application relies on standard ECMAScript Modules (type="module") for cleaner code organization, modern web browsers require the project files to be read from a local web server rather than being clicked open from your desktop. Opening the file directly via file:/// paths will trigger browser security blocks (CORS errors).
Step-by-Step Launch
Clone the repository down to your computer using your terminal:
git clone https://github.com/nabdurahim-art/student-finance-tracker.git

Open the project folder in your preferred text editor (e.g., Visual Studio Code).

Spin up a local server ecosystem. If you are using VS Code, click the Go Live button on your status bar to open the interface inside your browser at http://127.0.0.1:5500.
Populating the App with Pre-Set Seed Data
Launch the app in your browser and select the Settings view tab from the side navigation.

Locate the Import / Export Data management card.

Click on the Choose File target button and select the seed.json file located in the root folder.

The import utility will read the file configuration, verify its data structure, and populate your tracker with 15 mock records dating from February 1 to February 19, 2025. The initial balance calculates out to exactly $279.38, keeping your status ring safely inside the green zone under your initial $500.00 budget threshold.

🔍 Regular Expression (Regex) Catalog
All validation logic is contained as immutable constants within scripts/validators.js under the validators.PATTERNS object wrapper.
Rule Objective
Pattern Architecture
Valid Input Example
Invalid Input Trigger
1. Text Description Validation
/^\S(??!\s{2})[\s\S])*\S$|^\S$/
"Lunch at canteen"
Spacing at ends, consecutive internal whitespace
2. Numeric Price Validation
/^(0|[1-9]\d*)(\.\d{1,2})?$/
"12.50", "100"
Negative values, scientific formats (1e7), long trailing decimals
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
The platform functions smoothly without requiring a mouse, conforming to accessible keyboard design layouts.

♿ Universal Design & Accessibility Notes
Screen Reader Landmarks
All interactive layouts use standard semantic container nodes equipped with explicit ARIA landmark designations to support navigation tools:
Header Hub: Wrapper element <header id="topbar"> uses the banner landmark role.

Sidebar Navigation Menu: Wrapper element <aside id="sidebar"> uses the navigation landmark role.

Primary Document Interface: Element <main id="main-content"> holds the explicit main landmark.

Footer Block: Container element <footer> registers the contentinfo landmark specification.
Live Utility Announcement Regions
The app uses real-time aria-live containers to dynamically announce updates without interrupting screen readers:
#budget-message Area: Automatically alters its status configuration between polite (when within safe spending limits) and assertive (when a new entry pushes you past your monthly limit) to provide instant warnings.

#status-message Area: Broadcasts confirmation cues upon adding records, deleting rows, or executing an application export.

.error-message Tooltips: Utilizes role="alert" behaviors to announce validation failures inline as you type, keeping error tracking clear and immediate.

 Testing Instructions

The application contains an isolated, browser-based automated testing suite built to verify all data schemas and input validation safety laws under stress.
Launch your local web server using your development tool (e.g., VS Code Live Server).

Open your web browser and navigate to the local testing address: http://127.0.0.1:5500/tests.html.
The browser will instantly execute unit tests against the patterns written inside scripts/validators.js.

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


