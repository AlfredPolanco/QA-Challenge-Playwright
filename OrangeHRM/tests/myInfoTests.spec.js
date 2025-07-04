const { test } = require('@playwright/test');
const { LoginPage } = require('../pages/loginPage');
const { DashboardPage } = require('../pages/dashboardPage');
const { MyInfoPage } = require('../pages/myInfoPage');

test.describe('My Info @S7b0395f6', () => {
	test.beforeEach(async ({ page }) => {
		const login = new LoginPage(page);
		await page.goto('/');
		await login.login();
	});

	test('TC0032 - Verify Nickname Update Functionality @T8629d584', async ({ page }) => {
		const dashboard = new DashboardPage(page);
		const myInfo = new MyInfoPage(page);
		await dashboard.checkDashBoardPage();
		await dashboard.clickOnMyInfoPage();
		await myInfo.checkMyInfoPage();
		await myInfo.updateNickname();
	});
});
