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
		await login.checkLoginPage();
    await login.login();
    await dashboard.checkDashBoardPage();
	});

  test('TC0022 - Verify Display of Error Message on Login Form for Empty Fields', async ({ page }) => {
		const login = new LoginPage(page);
		await login.checkLoginPage();
		await login.invalidLoginMissingPassword();
	});

  test('TC0023 - Verify Display of Error Message on Login Form for Invalid Credentials', async ({ page }) => {
		const login = new LoginPage(page);
		await login.checkLoginPage();
		await login.invalidLogin();
	});

  test('TC0024 - Verify Empty Password Error Message on Login Form', async ({ page }) => {
		const login = new LoginPage(page);
		await login.checkLoginPage();
		await login.invalidLoginMissingPassword();
	});

  test('TC0025 - Verify Empty Username Error Message on Login Form', async ({ page }) => {
		const login = new LoginPage(page);
		await login.checkLoginPage();
		await login.invalidLoginMissingPassword();
	});

  test('TC0026 - Verify User Can Successfully Logout', async ({ page }) => {
		const login = new LoginPage(page);
    const dashboard = new DashboardPage(page);
		await login.checkLoginPage();
    await login.login();
    await dashboard.logout();
    await login.checkLoginPage();
	});
});