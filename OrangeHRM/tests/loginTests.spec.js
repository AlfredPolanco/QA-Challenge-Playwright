const { test } = require('@playwright/test');
const { LoginPage } = require('../pages/loginPage');
const { DashboardPage } = require('../pages/dashboardPage');

test.describe('Login/Logout tests', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/');
	});

  test('TC0021 - Verify Successful Login with Valid Credentials', async ({ page }) => {
		const login = new LoginPage(page);
    const dashboard = new DashboardPage(page);
    await login.login();
    await dashboard.checkDashBoardPage();
	});

  test('TC0026 - Verify User Can Successfully Logout', async ({ page }) => {
		const login = new LoginPage(page);
    const dashboard = new DashboardPage(page);
    await login.login();
    await dashboard.logout();
    await login.checkLoginPage();
	});
});