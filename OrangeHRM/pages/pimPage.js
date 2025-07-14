const { expect } = require('@playwright/test');

exports.PimPage = class PimPage {
	/**
	 * @param {import('@playwright/test').Page} page
	 */
	constructor(page) {
		this.page = page;
		this.pimLink = page.getByRole('link', { name: 'PIM' });
		this.addButton = page.getByRole('button', { name: ' Add' });
		this.firstNameInput = page.getByPlaceholder('First Name');
		this.middleNameInput = page.getByPlaceholder('Middle Name');
		this.lastNameInput = page.getByPlaceholder('Last Name');
		this.saveButton = page.getByRole('button', { name: 'Save' });
		this.employeeFullNameHeader = page.getByRole('heading');
		this.searchInput = page.getByPlaceholder('Type for hints...').first();
		this.searchButton = page.getByRole('button', { name: 'Search' });
		this.employeeListTable = page.locator('.oxd-table-body');
	}

	async navigateToPim() {
		await this.pimLink.click();
	}

	async clickAddEmployee() {
		await this.addButton.click();
	}

	async fillEmployeeDetails(firstName, middleName, lastName) {
		await this.firstNameInput.fill(firstName);
		await this.middleNameInput.fill(middleName);
		await this.lastNameInput.fill(lastName);
	}

	async saveEmployee() {
		await this.saveButton.click();
	}

	async searchEmployee(searchText) {
		await this.searchInput.fill(searchText);
		await this.page.waitForTimeout(1000);
		await this.searchButton.click();
	}

	async clickOnEmployeeRow() {
		await this.employeeListTable.locator('tr').first().click();
	}

	async verifyEmployeeName(expectedName) {
		await expect(this.employeeFullNameHeader).toHaveText(expectedName);
	}

	async waitForEmployeeList() {
		await this.employeeListTable.waitFor({ state: 'visible' });
	}
}; 