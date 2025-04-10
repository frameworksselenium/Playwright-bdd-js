# Playwright-BDD-Cucumber-Automation

## Overview

Welcome to the **Playwright-BDD-Automation** repository! This project leverages the power of Playwright BDD, and the Showcasing BDD framework to create a robust, scalable automation suite. The framework follows the Page Object Model (POM) design pattern and utilizes fixtures to manage test data and state, ensuring clean and maintainable test code.

## Features

- **Playwright Integration**: Harness the capabilities of Playwright for high-performance browser automation.
- **BDD Framework**: Implement Behavior-Driven Development (BDD) with Playwright BDD for clear and human-readable test scenarios.
- **Page Object Model (POM)**: Maintainable and reusable code structure using the Page Object Model.
- **Fixtures Support**: Simplified setup and teardown with fixtures for better test isolation and reusability.
- **Parallel Test Execution**: Run tests in parallel to save time and get faster feedback.
- **Retry Mechanism**: Automatically retry failed tests to increase the reliability of the test suite.
- **Comprehensive Reporting**: Generate detailed HTML reports for test execution results.
- **Cross-Browser Testing**: Test on different browsers and devices to ensure cross-browser compatibility.
- **Environment Configuration**: Load environment-specific settings seamlessly using dotenv.

## Installation

To get started with this project, follow the steps below:

1. **Install dependencies:**:
    ```sh
    npm install


### Scripts
The following scripts are available in the package.json file:

- Run all tests: npm test
- Generate BDD steps: npm run bddgen
- Clean generated files: npm run clean
- Run Playwright tests: npm run playwright-test
- Run tests in QA environment: npm run qa-env
- Run tests in development environment: npm run dev-env
- Run tests in production environment: npm run prod-env








## Steps to Prepare Framework

### Step1--bdd should me small letters
npm i -D @playwright/test playwright-bdd 

###Sep2 Install Playwright browsers:
npx playwright install

### Step3
    Install Cucumber extension in VS Code

### run 
npx playwright test

### run in heded mode
npx playwright test --headed

### step defenitions will be generated and code will be created
npx bddgen

###
npx playwright test --reporter=html,list

###run in particular envionment
npx bddgen && cross-env ENV=qa npx playwright test

### short cut command 
npm run playwright-test

### create short cut : write below code under script in package.json file 
"playwright-test": "npx playwright test --reporter=html,list --workers 1 --headed",

### Run particular tags---this option not working need to see
npx playwright test --tags '@changename'
