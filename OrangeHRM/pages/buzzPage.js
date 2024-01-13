const { expect } = require('@playwright/test');
require('dotenv').config();

exports.BuzzPage = class BuzzPage {
	/**
	 * @param {import('@playwright/test').Page} page
	 */
	constructor(page) {
		this.page = page;
		this.buzzPageHeader = page.getByText('Buzz Newsfeed');
		this.buzzNewsFeed = page.getByText('Buzz Newsfeed Post Share');
		this.buzzFeedTextArea = page.getByPlaceholder("What's on your mind?");
		this.buzzFeedPostButton = page.getByRole('button', {
			name: 'Post',
			exact: true
		});
		this.postMessage = page.locator('.orangehrm-buzz-post-body-text').first();
	}

	async checkBuzzPage() {
		await expect(this.buzzPageHeader).toBeVisible();
		await expect(this.buzzNewsFeed).toBeVisible();
	}

	async createPostOnBUzzPage() {
		await expect(this.buzzFeedTextArea).toBeVisible();
		await expect(this.buzzFeedPostButton).toBeVisible();
		await this.buzzFeedTextArea.fill('Hello World');
		await this.buzzFeedPostButton.click();
		await expect(this.postMessage).toHaveText('Hello World');
	}
};
