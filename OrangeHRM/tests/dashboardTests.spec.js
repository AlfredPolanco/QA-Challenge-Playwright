const { test } = require('@playwright/test');
const { LoginPage } = require('../pages/loginPage');
const { DashboardPage } = require('../pages/dashboardPage');

test.describe('Dashboard @Sf87330b9', () => {
	test.beforeEach(async ({ page }) => {
		const login = new LoginPage(page);
		await page.goto('/');
		await login.login();
	});

	test('TC0029 - Verify Display of Buzz Latest Posts on Dashboard @Td60fe706', async ({
		page
	}) => {
		const dashboard = new DashboardPage(page);
		await dashboard.checkDashBoardPage();
	});

	test('TC0028 - Verify Side Menu Expands/Collapses Correctly @T2ecb9180', async ({
		page
	}) => {
		const dashboard = new DashboardPage(page);
		await dashboard.checkDashBoardPage();
		await dashboard.verifyCollapseAndExpandMenu();
	});
});
