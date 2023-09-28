// Author: Nadim

import { test } from '@playwright/test'
import CustomerAdminLoginPage from '../pages/CustomerAdminLoginPage';
import loginData from '../utils/loginData.json';
let customerAdminLoginPage: CustomerAdminLoginPage;


test.describe('Customer Admin Login Page', async () => {

    test.beforeEach(async ({ page }) => {

        customerAdminLoginPage = new CustomerAdminLoginPage(page)

        // Go to customer admin login page
        await customerAdminLoginPage.goto()
        await customerAdminLoginPage.verifyPageUrlTitle()

        // Verify Tennant logo
        await customerAdminLoginPage.verifyTennantLogo()
    
        // Verify login subtitle
        await customerAdminLoginPage.verifyLoginSubtitle()
    
        // Verify LOgin description
        await customerAdminLoginPage.verifyLoginDescription()
        
        //Click on "Login with My Account" button
        await customerAdminLoginPage.verifyLoginAccountButton()

    })

    test('Test-01: Verify WSO2 Logo & Title', async () => {

        // Verify WSO2 Logo
        await customerAdminLoginPage.verifywso2Logo()

        // Verify WSO2 Title
        await customerAdminLoginPage.verifywso2Title()

    })

    test('Test-02: Verify Sign in title, username, password', async () => {

        // Verify Sign In Title
        await customerAdminLoginPage.verifySignTitle()

        // Verify Username Input Field
        await customerAdminLoginPage.verifyUsername()

        // Verify Username Input Field
        await customerAdminLoginPage.verifyPassword()

    })

    test('Test-03: Verify login with invalid username & password', async () => {

        // Enter Invalid Username
        await customerAdminLoginPage.enterInvalidUsername(loginData.customerAdminLogin[0].invalid_1.username)

        // Enter Invalid Password
        await customerAdminLoginPage.enterInvalidPassword(loginData.customerAdminLogin[0].invalid_1.password)

        // Click on Sign In Button
        await customerAdminLoginPage.clickOnSignBtn()

        // Verify Error Message
        await customerAdminLoginPage.verifyErrorMsg()
        
    })

    test('Test-04: Verify login with valid username & invalid password', async () => {

        // Enter Valid Username
        await customerAdminLoginPage.enterValidUsername(loginData.customerAdminLogin[0].invalid_2.username)

        // Enter Invalid Password
        await customerAdminLoginPage.enterInvalidPassword(loginData.customerAdminLogin[0].invalid_2.password)

        // Click on Sign In button
        await customerAdminLoginPage.clickOnSignBtn()

        // Verify Error Message
        await customerAdminLoginPage.verifyErrorMsg()

    })

    test('Test-05: Verify login with invalid username & valid password', async () => {

        // Enter Invalid Username
        await customerAdminLoginPage.enterInvalidUsername(loginData.customerAdminLogin[0].invalid_3.username)

        // Enter Valid Password
        await customerAdminLoginPage.enterValidPassword(loginData.customerAdminLogin[0].invalid_3.username)

        // Click on Sign In button
        await customerAdminLoginPage.clickOnSignBtn()

        // Verify Error Message
        await customerAdminLoginPage.verifyErrorMsg()

    })

    test('Test-06: Verify login with empty username & password', async () => {

        //Enter Empty Username
        await customerAdminLoginPage.enterInvalidUsername(loginData.customerAdminLogin[0].invalid_4.username)

        //Enter Empty Password
        await customerAdminLoginPage.enterInvalidPassword(loginData.customerAdminLogin[0].invalid_4.password)

        // Click on Sign In button
        await customerAdminLoginPage.clickOnSignBtn()

        // Verify Error Message
        await customerAdminLoginPage.verifyErrorMsg()

    })

    test('Test-07: Verify login with valid username & password', async () => {

        //Enter Valid Username
        await customerAdminLoginPage.enterValidUsername(loginData.customerAdminLogin[0].valid.username)

        //Enter Valid Password
        await customerAdminLoginPage.enterInvalidPassword(loginData.customerAdminLogin[0].valid.password)

        //Verify Remember me checkbox
        await customerAdminLoginPage.verifyRememberCheckbox()
        await customerAdminLoginPage.verifyRememberUnCheckbox()
        
        //Click on Sign In button
        await customerAdminLoginPage.clickOnSignBtn()
        await customerAdminLoginPage.signinBtnRedirection()

    })

});