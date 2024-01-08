const { test } = require('@playwright/test');
const { LoginPage } = require('../pages/loginPage');
const { DashboardPage } = require('../pages/dashboardPage');

test.describe('User profile tests', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/');
	});

  test('TC0027 - Verify Display of Active Employees Count	', async ({ page }) => {
		const login = new LoginPage(page);
    const dashboard = new DashboardPage(page);
		await login.checkLoginPage();
    await login.login();
    await dashboard.checkDashBoardPage();
		await dashboard.clickOnUserProfile();
		await dashboard.checkActiveEmployees();
	});
});