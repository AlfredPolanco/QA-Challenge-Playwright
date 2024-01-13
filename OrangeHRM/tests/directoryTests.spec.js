const { test } = require('@playwright/test');
const { LoginPage } = require('../pages/loginPage');
const { DashboardPage } = require('../pages/dashboardPage');
const { DirectoryPage } = require('../pages/directoryPage');

test.describe('Directory', () => {
	test.beforeEach(async ({ page }) => {
		const login = new LoginPage(page);
		await page.goto('/');
		await login.login();
	});

	test('TC0033 - Verify Job Title Filter Functionality', async ({ page }) => {
		const dashboard = new DashboardPage(page);
		const directory = new DirectoryPage(page);
		await dashboard.clickOnDirectoryPage();
		await directory.checkDirectoryPage();
		await directory.filterByJobTitle();
	});

	test('TC0034 - Verify Employees QR Code Generation', async ({ page }) => {
		const dashboard = new DashboardPage(page);
		const directory = new DirectoryPage(page);
		await dashboard.clickOnDirectoryPage();
		await directory.checkDirectoryPage();
		await directory.filterByJobTitle();
		await directory.checkEmployeeQRCode();
	});
});
