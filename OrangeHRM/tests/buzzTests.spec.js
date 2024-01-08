const { test } = require('@playwright/test');
const { LoginPage } = require('../pages/loginPage');
const { DashboardPage } = require('../pages/dashboardPage');
const { BuzzPage } = require('../pages/buzzPage')

test.describe('Buzz tests', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/');
	});

  test('TC0030 - Verify User Can Successfully Create a Post Content on Buzz Newsfeed', async ({ page }) => {
		const login = new LoginPage(page);
    const dashboard = new DashboardPage(page);
		const buzz = new BuzzPage(page);
		await login.checkLoginPage();
    await login.login();
    await dashboard.checkDashBoardPage();
		await dashboard.clickOnBuzzPage();
		await buzz.checkBuzzPage();
		await buzz.createPostOnBUzzPage();
	});
});