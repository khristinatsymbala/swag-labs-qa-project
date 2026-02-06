# Swag Labs – QA Manual & Automation Project
## 📌 Project Overview
This repository contains a **complete QA testing project** for the **Swag Labs (saucedemo.com)** web application.  
The project combines **manual testing documentation** and **automated tests** built with Playwright, following real-world QA practices.

---

## 📌 Project Scope
The goal of this project is to demonstrate:

- Functional testing of core user flows  
- UI / UX validation  
- Accessibility testing  
- Requirement Traceability and test coverage  
- Scalable automation framework  

This repository is designed as a **portfolio QA project**.


## 🛠 Tech Stack & Tools

### Automation
- Playwright  
- TypeScript  
- Node.js  
- Page Object Model (POM)  
- Fixtures  
- Data-driven testing  

### Manual Testing
- Test Scenarios & Test Cases  
- Bug Reports  
- Traceability Matrix (RTM)  
- Test Coverage calculation  
- Accessibility checks (WCAG-based) 

## 🧪 Manual Testing Overview

### Covered Areas
- Login functionality (positive & negative scenarios)  
- Inventory page functionality  
- Shopping cart behavior  
- UI & UX validation  
- Accessibility testing:
  - Keyboard navigation  
  - Focus visibility  
  - ALT text  
  - ARIA labels  
  - Color contrast  
- Cross-platform checks (Desktop / Mobile / Tablet)  
- Lighthouse quality checks  

---
## 🔗 Traceability & Coverage

- All requirements are mapped to test cases in a **Traceability Matrix (RTM)**  
- Test coverage is calculated automatically in Google Sheets  

**📊 Current coverage:** ~80%  
Uncovered areas are documented and planned for future testing (e.g. extended checkout scenarios).

---

## 🐞 Bug Reporting

- Bugs are documented in a structured format:
  - Summary  
  - Environment  
  - Preconditions  
  - Steps to Reproduce  
  - Expected vs Actual Result  
  - Severity & Priority  
- Includes functional, UI, UX, and accessibility defects 

## 🤖 Automation Overview

### Architecture
- Page Object Model for maintainability  
- Fixtures for clean test setup  
- Data-driven approach for users and inventory items  

### Automated Coverage
- Login functionality  
- Inventory page basic functionality  
- Data consistency checks  

### Planned Automation
- Shopping cart flows  
- Checkout flow  
- Accessibility assertions  
- CI integration  

## ♿ Accessibility Testing
Accessibility is treated as a first-class testing area:
- Manual WCAG-based checks
- Keyboard navigation


## 🛠 Tools
- Google Sheets
- Playwright
- GitHub
- Lighthouse
- Wave

## Project Structure
```
saucedemo-qa/
│
├── README.md
│
├── docs/
│   ├── test-plan/
│   │   └── Test_Plan_Swag_Labs.pdf
│   │
│   ├── test-cases/
│   │   ├── Login_Test_Cases.xlsx
│   │   ├── Cart_Test_Cases.xlsx
│   │   └── Accessibility_Test_Cases.xlsx
│   │
│   ├── rtm/
│   │   └── Traceability_Matrix.xlsx
│   │
│   └── bug-reports/
│       └── Bug_Report_Tablet_View.md

├── automation/
│ ├── page-objects/
│ │ ├── loginPage.ts
│ │ ├── InventoryPage.ts
│ │ └── pageManager.ts
│ │
│ ├── test-data/
│ │ ├── inventoryPage/
│ │ │ ├── inventoryItemType.ts
│ │ │ └── inventoryTestData.ts
│ │ └── loginPage/
│ │ ├── loginUsers.ts
│ │ ├── userRoles.ts
│ │ └── userTypes.ts
│ │
│ ├── tests/
│ │ ├── fixture/
│ │ │ ├── inventory.fixture.ts
│ │ │ └── pageManager.fixture.ts
│ │ ├── InventoryPage.spec.ts
│ │ └── login.spec.ts
│ │
│ ├── playwright.config.ts
│ ├── package.json
│ └── README.md
│
├── playwright-report/
├── test-results/
└── README.md
│
└── assets/
    └── screenshots/
  ```