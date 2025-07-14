const { test } = require('@playwright/test');
const { LoginPage } = require('../pages/loginPage');
const { PimPage } = require('../pages/pimPage');

test.describe('PIM Employee Management @PimTests', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
	});

	test('TC0001 - Add and Search Employee in PIM @AddSearchEmployee', async ({ page }) => {
		const login = new LoginPage(page);
		const pim = new PimPage(page);

		await login.login();
		await pim.navigateToPim();
		await pim.clickAddEmployee();
		await pim.fillEmployeeDetails('John', 'Sr', 'Doe');
		await pim.saveEmployee();
		await pim.navigateToPim();
		await pim.waitForEmployeeList();
		await pim.searchEmployee('John Doe');
		await pim.waitForEmployeeList();
		await pim.clickOnEmployeeRow();
		await pim.verifyEmployeeName('John Doe');
	});
});