const { test } = require('@playwright/test');
const { LoginPage } = require('../pages/loginPage');
const { DashboardPage } = require('../pages/dashboardPage');

test.describe('Dashboard tests', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/');
	});

  test('TC0029 - Verify Display of Buzz Latest Posts on Dashboard', async ({ page }) => {
		const login = new LoginPage(page);
    const dashboard = new DashboardPage(page);
		await login.checkLoginPage();
    await login.login();
    await dashboard.checkDashBoardPage();
	});

  test('TC0028 - Verify Side Menu Expands/Collapses Correctly', async ({ page }) => {
		const login = new LoginPage(page);
    const dashboard = new DashboardPage(page);
		await login.checkLoginPage();
    await login.login();
    await dashboard.checkDashBoardPage();
		await dashboard.verifyCollapseAndExpandMenu();

	});
});