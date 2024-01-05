const { expect } = require('@playwright/test');
require('dotenv').config();

const fakeEmail = "test@gmail.com";
const fakePassword = "123";


exports.LoginPage = class LoginPage {
	/**
	 * @param {import('@playwright/test').Page} page
	 */
	constructor(page) {
		this.page = page;
		this.loginHeader = page.getByRole('heading');
		this.usernameDetails = page.getByText('Username : AdminPassword : admin123');
		this.userNameInput = page.locator('[name=username]');
		this.singleRequiredWarning = page.getByText('Required').first();
		this.passwordInput = page.locator('[type=password]');
		this.doubleRequiredWarning = page.getByText('Required').nth(1);
		this.loginButton = page.getByRole('button');
		this.forgotPasswordButton = page.getByText('Forgot your password?');
		this.invalidCredentialsAlert = page.getByRole('alert');
	}

	async checkLoginPage() {
		await expect(this.loginHeader).toBeVisible();
		await expect(this.usernameDetails).toBeVisible();
		await expect(this.userNameInput).toBeVisible();
		await expect(this.passwordInput).toBeVisible();
		await expect(this.forgotPasswordButton).toBeVisible();
	}

	async emptyFieldsAlert() {
		await this.loginButton.click();
		await expect(this.singleRequiredWarning).toBeVisible();
		await expect(this.doubleRequiredWarning).toBeVisible();
	}

	async invalidLogin() {
		await this.userNameInput.fill(fakeEmail);
		await this.passwordInput.fill(fakePassword);
		await this.loginButton.click();
		await expect(this.invalidCredentialsAlert).toBeVisible();
		await expect(this.invalidCredentialsAlert).toHaveText('Invalid credentials');
	}

	async invalidLoginMissingPassword() {
		await this.userNameInput.fill(fakeEmail);
		await this.loginButton.click();
		await expect(this.singleRequiredWarning).toBeVisible();
	}

	async invalidLoginMissingEmail() {
		await this.passwordInput.fill(fakePassword);
		await this.loginButton.click();
		await expect(this.singleRequiredWarning).toBeVisible();
	}

	async login() {
		await this.checkLoginPage();
		await this.userNameInput.fill(process.env.USERNAME);
		await this.passwordInput.fill(process.env.PASSWORD);
		await this.loginButton.click();
	}

	async pageObjectModel() {
		await this.checkLoginPage();
		await this.emptyFieldsAlert();
		await this.invalidLogin();
		await this.invalidLoginMissingPassword();
		await this.invalidLoginMissingEmail();
		await this.login();
	}
};