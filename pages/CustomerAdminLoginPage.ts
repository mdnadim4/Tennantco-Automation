// Author: Nadim

import { Locator, Page, expect } from "@playwright/test";

export default class CustomerAdminLoginPage {
    page: Page;
    logo: Locator;
    loginSubtitle: Locator;
    loginDescription: Locator;
    loginMyAccountBtn: Locator;
    wso2Logo: Locator;
    wso2Title: Locator;
    signinTitle: Locator;
    usernameInput: Locator;
    invalidUsername: Locator;
    passwordInput: Locator;
    singinBtn: Locator;
    errorMsg: Locator;
    rememberCheckbox: Locator;

    constructor(page) { 
        this.page = page;
        this.logo = page.locator('g > polygon:nth-of-type(6)')
        this.loginSubtitle = page.locator('.login-card-subtitle')
        this.loginDescription = page.locator("div[class='login-note-wrapper text-muted text-center'] span")
        this.loginMyAccountBtn = page.locator("//button[text()=' Login with My Account ']")
        this.wso2Logo = page.locator('[title="wso2"]')
        this.wso2Title = page.locator("//em[normalize-space()='Identity Server']")
        this.signinTitle = page.locator("//h2[contains(text(),'Sign')]")
        this.usernameInput = page.getByPlaceholder('Username')
        this.passwordInput = page.getByPlaceholder('Password')
        this.singinBtn = page.locator('[type="submit"]')
        this.errorMsg = page.locator('#error-msg')
        this.rememberCheckbox = page.locator('#chkRemember')
    }
    
    async goto() {
        this.page.goto('/login');
        await this.page.waitForTimeout(3000)
    }

    async verifyPageUrlTitle() {
        await expect(this.page).toHaveURL(new RegExp(`${process.env.BASE_URL}`))
        await expect(this.page).toHaveTitle('Tennant IRIS')
    }

    async verifyTennantLogo() {
        await expect(this.logo).toBeVisible()
    }

    async verifyLoginSubtitle() {
        await expect(this.loginSubtitle).toBeVisible()
        await expect(this.loginSubtitle).toContainText(`Press on Login with My Account to continue`)
    }

    async verifyLoginDescription() {
        await expect(this.loginDescription).toBeVisible()
        await expect(this.loginDescription).toContainText(`You’ll be redirected to an intermediate page to login in. Please use your MyTennant Account login credentials`)
    }

    async verifyLoginAccountButton() {
        await expect(this.loginMyAccountBtn).toBeVisible()
        await expect(this.loginMyAccountBtn).toContainText(/Login with My Account/)
        await this.loginMyAccountBtn.click()
        await this.page.waitForLoadState('networkidle')
        await expect(this.page).toHaveURL(/ebizuat.sso.tennantco.com/)

    }

    async verifywso2Logo() {
        await expect(this.wso2Logo).toBeVisible()
    }

    async verifywso2Title() {
        await expect(this.wso2Title).toBeVisible()
    }

    async verifySignTitle() {
        await expect(this.signinTitle).toBeVisible()
    }

    async verifyUsername() {
        await expect(this.usernameInput).toBeVisible()
        await expect(this.usernameInput).toBeEnabled()
    }

    async verifyPassword() {
        await expect(this.passwordInput).toBeVisible()
        await expect(this.passwordInput).toBeEnabled()
    }

    async verifyRememberCheckbox() {
        await expect(this.rememberCheckbox).toBeVisible()
        await expect(this.rememberCheckbox).toBeEnabled()
        this.rememberCheckbox.check()
        await expect(this.rememberCheckbox).toBeChecked()
    }

    async verifyRememberUnCheckbox() {
        this.rememberCheckbox.uncheck()
        await this.page.waitForLoadState('networkidle')
        await expect(this.rememberCheckbox).not.toBeChecked()
    }

    async enterInvalidUsername(invalidUsername: string) {
        await this.usernameInput.clear()
        await this.usernameInput.type(invalidUsername, {delay: 100})
    }

    async enterInvalidPassword(invalidPassword: string) {
        await this.passwordInput.clear()
        await this.passwordInput.type(invalidPassword, {delay: 100})
    }

    async enterValidUsername(validUsername: string) {
        await this.usernameInput.clear()
        await this.usernameInput.type(validUsername, {delay: 100})
    }

    async enterValidPassword(validPassword: string) {
        await this.passwordInput.clear()
        await this.passwordInput.type(validPassword, {delay: 100})
    }

    async clickOnSignBtn() {
        await this.singinBtn.click();
        await this.page.waitForLoadState("networkidle")
    }

    async verifyErrorMsg() {
        await expect(this.errorMsg).toBeVisible()
        await expect(this.errorMsg).toHaveText('Login failed! Please recheck the username and password and try again.')
    }

    async signinBtnRedirection() {
        await expect(this.page).toHaveURL('https://tennantherculesdev.z6.web.core.windows.net')
    }

}