# QA-Challenge-Playwright

The provided project is an automation framework crafted using Playwright and incorporates best practices in JavaScript. It has been designed to address specific modules outlined in a comprehensive test plan for [OrangeHRM](https://opensource-demo.orangehrmlive.com/)

# Test cases
### Test cases are currently documented on [QATouch](https://www.qatouch.com/)
To access them, please contact me at alfredpolanci@gmail.com

## Tech Stack

[![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics)
[![CircleCI](https://img.shields.io/badge/circle%20ci-%23161616.svg?style=for-the-badge&logo=circleci&logoColor=white)](https://circleci.com/docs/getting-started/)
[![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/en/about/)
[![Playwright](https://img.shields.io/badge/-Playwright-orange)](https://playwright.dev/)
[![DotEnv](https://img.shields.io/badge/-dotenv-orange)](https://www.npmjs.com/package/dotenv)
[![newman](https://img.shields.io/badge/-newman-green)](https://www.npmjs.com/package/newman)
[![newman-reporter-htmlextra](https://img.shields.io/badge/htmlextra-orange)](https://www.npmjs.com/package/newman-reporter-htmlextra)
[![Prettier](https://img.shields.io/badge/Prettier-grey)](https://prettier.io/)

## Important
Once we push a commit to our `dev` branch the pipeline will automatically run and show the status of the same so we are aware of the changes <br>
It will have a ✔️ if passes and a ✖️ if it fails


## Installation

1. Clone the repo
```bash
git clone https://github.com/AlfredPolanco/QA-Challenge-Playwright.git
```

2. Install dependencies and packages required for the project
```bash
npm i
```

3. For local testing you must set up your `.env` file using the following format
```
USERNAME=REPLACE_WITH_USERNAME
PASSWORD=REPLACE_WITH_PASSWORD
```

## Usage

- To run Playwright tests just run the following command, once it is done, an Allure report will be generated and opened automatically.
```
npm run e2e-tests
```

- To run Playwright tests and generate the test run on Testomat
```
TESTOMATIO=${API_KEY} npx playwright test
```

- To run Marvel API Tests the tests just run the following command, once it is done, a report will be generated on `/API-TestReport/MarvelAPITestReport.html`
```
npm run api-tests-newman
```

