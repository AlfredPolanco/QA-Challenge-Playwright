const { expect } = require('@playwright/test');
require('dotenv').config();

exports.MyInfoPage = class MyInfoPage {
	/**
	 * @param {import('@playwright/test').Page} page
	 */
	constructor(page) {
		this.page = page;
		this.personalDetailsHeader = page.getByRole('heading', {
			name: 'Personal Details'
		});
		this.nickNameInputBox = page.getByRole('textbox').nth(4);
		this.saveButton = page
			.locator('form')
			.filter({ hasText: 'Employee Full' })
			.getByRole('button');
		this.successToast = page.getByText('SuccessSuccessfully Updated×');
	}

	async checkMyInfoPage() {
		await expect(this.personalDetailsHeader).toBeVisible();
		await expect(this.page).toHaveURL(/.*viewPersonalDetails/);
	}

	async updateNickname() {
		await expect(this.nickNameInputBox).toBeVisible();
		await expect(this.nickNameInputBox).toBeEnabled();
		await this.nickNameInputBox.clear();
		await this.nickNameInputBox.fill('Goldfish');
		await this.saveButton.click();
		await expect(this.successToast).toBeVisible();
	}
};
