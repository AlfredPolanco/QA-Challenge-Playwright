# QA-Challenge-Playwright

The provided project is an automation framework crafted using Playwright and incorporates best practices in JavaScript. It has been designed to address specific modules outlined in a comprehensive test plan for [OrangeHRM](https://opensource-demo.orangehrmlive.com/)

# Test cases
- Verify Successful Login with Valid Credentials <br>
- Verify Display of Error Messages on Login Form for Invalid Username <br>
- Verify Display of Error Messages on Login Form for Invalid Password <br>
- Verify Display of Error Messages on Login Form for Empty Fields <br>
- Verify Display of Error Messages on Login Form for Invalid Credentials <br>
- Verify Display of OrangeHRM Version in the UI <br>
- Verify Side Menu Expands/Collapses Correctly <br>
- Verify Display of Latest Buzz Posts on Dashboard <br>
- Verify User Can Successfully Create a Post Content on Buzz Newsfeed <br>
- Verify User Can Successfully Logout <br>

## Tech Stack

[![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics)
[![CircleCI](https://img.shields.io/badge/circle%20ci-%23161616.svg?style=for-the-badge&logo=circleci&logoColor=white)](https://circleci.com/docs/getting-started/)
[![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/en/about/)
[![Playwright](https://img.shields.io/badge/-Playwright-orange)](https://playwright.dev/)
[![DotEnv](https://img.shields.io/badge/-dotenv-orange)](https://www.npmjs.com/package/dotenv)

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