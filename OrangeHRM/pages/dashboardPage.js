const { expect } = require('@playwright/test');
require('dotenv').config();

exports.DashboardPage = class DashboardPage {
	/**
	 * @param {import('@playwright/test').Page} page
	 */
	constructor(page) {
		this.page = page;
		this.dashboardPageButton = page.locator(
			'.oxd-topbar-header-breadcrumb > .oxd-text'
		);
		this.userDropDown = page.locator('[class=oxd-userdropdown]');
		this.logoutButton = page.locator('[class=oxd-userdropdown-link]').nth(3);
		this.expandButton = page.locator('.bi-chevron-right');
		this.collapseButton = page.locator('.bi-chevron-left');
		this.menuFlag = page.locator('.toggle');
		this.buzzPage = page.getByRole('link', { name: 'Buzz' });
		this.myInfoPage = page.getByRole('link', { name: 'My info' });
		this.directoryPage = page.getByRole('link', { name: 'Directory' });
		this.timeAtWorkTitle = page.locator(
			':nth-child(1) > .oxd-sheet > .orangehrm-dashboard-widget-header > .orangehrm-dashboard-widget-name > .oxd-text'
		);
		this.timeAtWorkCard = page.locator(':nth-child(1) > .oxd-sheet');
		this.myActionsTitle = page.locator(
			':nth-child(2) > .oxd-sheet > .orangehrm-dashboard-widget-header > .orangehrm-dashboard-widget-name > .oxd-text'
		);
		this.myActionsCard = page.locator(':nth-child(2) > .oxd-sheet');
		this.quickLaunchTitle = page.locator(
			':nth-child(3) > .oxd-sheet > .orangehrm-dashboard-widget-header > .orangehrm-dashboard-widget-name > .oxd-text'
		);
		this.quickLaunchCard = page.locator(':nth-child(3) > .oxd-sheet');
		this.BuzzLatestPostTitle = page.locator(
			':nth-child(4) > .oxd-sheet > .orangehrm-dashboard-widget-header > .orangehrm-dashboard-widget-name > .oxd-text'
		);
		this.BuzzLatestPostCard = page.locator(':nth-child(4) > .oxd-sheet');
		this.employeeOnLeaveTodayTittle = page.locator(
			':nth-child(5) > .oxd-sheet > .orangehrm-dashboard-widget-header > .orangehrm-dashboard-widget-name > .oxd-text'
		);
		this.employeeOnLeaveTodayCard = page.locator(':nth-child(5) > .oxd-sheet');
		this.employeeDistributionBySubUnitTitle = page.locator(
			':nth-child(6) > .oxd-sheet > .orangehrm-dashboard-widget-header > .orangehrm-dashboard-widget-name > .oxd-text'
		);
		this.employeeDistributionBySubUnitCard = page.locator(
			':nth-child(6) > .oxd-sheet'
		);
		this.employeeDistributionByLocationTitle = page.locator(
			':nth-child(7) > .oxd-sheet > .orangehrm-dashboard-widget-header > .orangehrm-dashboard-widget-name > .oxd-text'
		);
		this.employeeDistributionByLocationTitleCard = page.locator(
			':nth-child(7) > .oxd-sheet'
		);
		this.userProfile = page.locator('.oxd-userdropdown-name');

		this.aboutSection = page.getByRole('menuitem', { name: 'About' });

		this.changePasswordSection = page.getByRole('menuitem', {
			name: 'Change Password'
		});

		this.modalHeader = page.locator('.orangehrm-modal-header');

		this.activeEmployees = page.getByText('Active Employees:');
	}

	async logout() {
		await this.userDropDown.click();
		await this.logoutButton.click();
	}

	async checkDashBoardPage() {
		await this.timeAtWork();
		await this.myActions();
		await this.quickLaunch();
		await this.buzzLatestPost();
		await this.employeeOnLeaveToday();
		await this.employeeDistributionBySubUnit();
		await this.employeeDistributionByLocation();
	}

	async clickOnDashboardPage() {
		await this.dashboardPageButton.click();
	}

	async clickOnUserProfile() {
		await expect(this.userProfile).toBeVisible();
		await this.userProfile.click();
	}

	async clickOnChangePasswordSection() {
		await expect(this.changePasswordSection).toBeVisible();
		await this.changePasswordSection.click();
	}

	async clickOnBuzzPage() {
		await expect(this.buzzPage).toBeVisible();
		await this.buzzPage.click();
	}

	async clickOnMyInfoPage() {
		await expect(this.myInfoPage).toBeVisible();
		await this.myInfoPage.click();
	}

	async clickOnDirectoryPage() {
		await expect(this.directoryPage).toBeVisible();
		await this.directoryPage.click();
	}

	async checkOrangeHRMModalHeader() {
		await expect(this.modalHeader).toBeVisible();
	}

	async checkActiveEmployees() {
		await expect(this.aboutSection).toBeVisible();
		await this.aboutSection.click();
		await expect(this.activeEmployees).toBeVisible();
	}

	async verifyCollapseAndExpandMenu() {
		await expect(this.menuFlag).toBeHidden();
		await this.collapseButton.click();
		await this.expandButton.click();
		await expect(this.menuFlag).toBeHidden();
	}

	async timeAtWork() {
		await expect(this.timeAtWorkTitle).toBeVisible();
		await expect(this.timeAtWorkCard).toBeVisible();
	}

	async myActions() {
		await expect(this.myActionsTitle).toBeVisible();
		await expect(this.myActionsCard).toBeVisible();
	}

	async quickLaunch() {
		await expect(this.quickLaunchTitle).toBeVisible();
		await expect(this.quickLaunchCard).toBeVisible();
	}

	async buzzLatestPost() {
		await expect(this.BuzzLatestPostTitle).toBeVisible();
		await expect(this.BuzzLatestPostCard).toBeVisible();
	}

	async employeeOnLeaveToday() {
		await expect(this.employeeOnLeaveTodayTittle).toBeVisible();
		await expect(this.employeeOnLeaveTodayCard).toBeVisible();
	}

	async employeeDistributionBySubUnit() {
		await expect(this.employeeDistributionBySubUnitTitle).toBeVisible();
		await expect(this.employeeDistributionBySubUnitCard).toBeVisible();
	}

	async employeeDistributionByLocation() {
		await expect(this.employeeDistributionByLocationTitle).toBeVisible();
		await expect(this.employeeDistributionByLocationTitleCard).toBeVisible();
	}
};
