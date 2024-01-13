const { expect } = require('@playwright/test');
require('dotenv').config();

exports.UpdatePasswordPage = class UpdatePasswordPage {
	/**
	 * @param {import('@playwright/test').Page} page
	 */
	constructor(page) {
		this.page = page;
		this.updatePasswordPageHeader = page.getByRole('heading', {
			name: 'Update Password'
		});
		this.actualPasswordInputBox = page.getByRole('textbox').nth(1);
		this.passwordInputBox = page.getByRole('textbox').nth(2);
		this.confirmPasswordInputBox = page.getByRole('textbox').nth(3);
		this.saveButton = page.getByRole('button', { name: 'Save' });
		this.cancelButton = page.getByRole('button', { name: 'Cancel' });
		this.successToast = page.getByText('SuccessSuccessfully Saved×');
	}

	async checkUpdatePasswordPage() {
		await expect(this.updatePasswordPageHeader).toBeVisible();
		await expect(this.page).toHaveURL(/.*updatePassword/);
		await expect(this.actualPasswordInputBox).toBeEmpty();
		await expect(this.passwordInputBox).toBeEmpty();
		await expect(this.confirmPasswordInputBox).toBeEmpty();
		await expect(this.saveButton).toBeEnabled();
		await expect(this.cancelButton).toBeEnabled();
	}

	async updatePassword() {
		await this.actualPasswordInputBox.fill(process.env.PASSWORD);
		await this.passwordInputBox.fill('newP@ssw0rd');
		await this.confirmPasswordInputBox.fill('newP@ssw0rd');
		await this.saveButton.click();
		await expect(this.successToast).toBeVisible();
	}
};
