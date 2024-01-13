const { test } = require('@playwright/test');
const { LoginPage } = require('../pages/loginPage');
const { DashboardPage } = require('../pages/dashboardPage');
const { UpdatePasswordPage } = require('../pages/updatePasswordPage');

test.describe('User Profile', () => {
	test.beforeEach(async ({ page }) => {
		const login = new LoginPage(page);
		await page.goto('/');
		await login.login();
	});

	test('TC0027 - Verify Display of Active Employees Count', async ({
		page
	}) => {
		const dashboard = new DashboardPage(page);
		await dashboard.checkDashBoardPage();
		await dashboard.clickOnUserProfile();
		await dashboard.checkActiveEmployees();
	});

	test('TC0031 - Verify Change Password Functionality', async ({ page }) => {
		const dashboard = new DashboardPage(page);
		const updatePassword = new UpdatePasswordPage(page);
		await dashboard.checkDashBoardPage();
		await dashboard.clickOnUserProfile();
		await dashboard.clickOnChangePasswordSection();
		await updatePassword.checkUpdatePasswordPage();
		await updatePassword.updatePassword();
	});
});
