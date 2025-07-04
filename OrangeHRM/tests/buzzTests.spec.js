const { test } = require('@playwright/test');
const { LoginPage } = require('../pages/loginPage');
const { DashboardPage } = require('../pages/dashboardPage');
const { BuzzPage } = require('../pages/buzzPage');

test.describe('Buzz @Sca157aed', () => {
	test.beforeEach(async ({ page }) => {
		const login = new LoginPage(page);
		await page.goto('/');
		await login.login();
	});

	test('TC0030 - Verify User Can Successfully Create a Post Content on Buzz Newsfeed @T4ae5bb6c', async ({
		page
	}) => {
		const dashboard = new DashboardPage(page);
		const buzz = new BuzzPage(page);
		await dashboard.checkDashBoardPage();
		await dashboard.clickOnBuzzPage();
		await buzz.checkBuzzPage();
		await buzz.createPostOnBUzzPage();
	});
});
