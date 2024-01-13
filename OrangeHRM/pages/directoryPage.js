const { expect } = require('@playwright/test');
require('dotenv').config();

exports.DirectoryPage = class DirectoryPage {
	/**
	 * @param {import('@playwright/test').Page} page
	 */
	constructor(page) {
		this.page = page;
		this.directoryHeader = page.locator('h5');
		this.jobTitleSelect = page.locator('.oxd-select-text').first();
		this.accountAssistantTitle = page.getByRole('option', {
			name: 'Account Assistant'
		});
		this.searchButton = page.getByRole('button', { name: 'Search' });
		this.recordsCount = page.locator('.orangehrm-horizontal-padding');
		this.firstRecord = page.locator('.oxd-grid-4 > div').first();
		this.employeeQRCode = page.locator('.orangehrm-qr-code');
	}

	async checkDirectoryPage() {
		await expect(this.directoryHeader).toBeVisible();
		await expect(this.directoryHeader).toHaveText('Directory');
		await expect(this.page).toHaveURL(/.*viewDirectory/);
	}

	async filterByJobTitle() {
		await expect(this.jobTitleSelect).toBeVisible();
		await expect(this.jobTitleSelect).toBeEnabled();
		await this.jobTitleSelect.click();
		await this.accountAssistantTitle.click();
		await expect(this.jobTitleSelect).toHaveText('Account Assistant');
		await this.searchButton.click();
		await expect(this.recordsCount).not.toContainText('No Records Found');
		await expect(this.recordsCount).not.toHaveText('Records Found');
	}

	async checkEmployeeQRCode() {
		await expect(this.firstRecord).toBeVisible();
		await expect(this.firstRecord).toBeEnabled();
		await this.firstRecord.click();
		await expect(this.employeeQRCode).toBeVisible();
	}
};
