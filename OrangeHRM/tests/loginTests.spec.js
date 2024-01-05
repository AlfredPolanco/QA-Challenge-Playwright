const { test } = require('@playwright/test');
const { LoginPage } = require('../pages/loginPage');
const { DashboardPage } = require('../pages/dashboardPage');

test.describe('Login tests', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/');
	});

  test('Verify Successful Login with Valid Credentials', async ({ page }) => {
		const login = new LoginPage(page);
    const dashboard = new DashboardPage(page);
		await login.checkLoginPage();
    await login.login(process.env.USERNAME, process.env.PASSWORD);
    await dashboard.checkDashBoardPage();
	});

  test('Verify Display of Error Message on Login Form with Empty Password', async ({ page }) => {
		const login = new LoginPage(page);
		await login.checkLoginPage();
		await login.invalidLoginMissingPassword();
	});

  test('Verify Display of Error Message on Login Form for Invalid Credentials', async ({ page }) => {
		const login = new LoginPage(page);
		await login.checkLoginPage();
		await login.invalidLogin();
	});

  test('Verify Empty Password Error Message on Login Form', async ({ page }) => {
		const login = new LoginPage(page);
		await login.checkLoginPage();
		await login.invalidLoginMissingPassword();
	});

  test('Verify Empty Username Error Message on Login Form', async ({ page }) => {
		const login = new LoginPage(page);
		await login.checkLoginPage();
		await login.invalidLoginMissingPassword();
	});

  test('Verify User Can Successfully Logout', async ({ page }) => {
		const login = new LoginPage(page);
    const dashboard = new DashboardPage(page);
		await login.checkLoginPage();
    await login.login(process.env.USERNAME, process.env.PASSWORD);
    await dashboard.logout();
    await login.checkLoginPage();
	});
});