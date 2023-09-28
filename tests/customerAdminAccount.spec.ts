// Author: Nadim

import { test } from '@playwright/test'
import AccountPage from '../pages/AccountPage';

let accountsPage: AccountPage;


test.describe('Verify Account Page', async () => {

    test.beforeAll(async ({ browser }) => {
        
        const context = await browser.newContext()
        const page = await context.newPage()

        // Account Page Object Initiate
        accountsPage = new AccountPage(page)

        // Verify the Customer Admin Login Page
        await accountsPage.verifyCustomerAdminLoginPage()

        // Verify and Click on Profile Email Address
        await accountsPage.verifyProfileEmailAddress()
        await accountsPage.clickOnProfileIcon()

        // Verify and Click on Setting & Preferences
        await accountsPage.verifySettingAndPreference()
        await accountsPage.clickOnSettingAndPreference()

    })

    test('Test-01: Verify Account Tab Option', async () => {

        await accountsPage.verifyAccountPage()

    })

    test('Test-02: Verify Preference Title', async () => {

        await accountsPage.verifyPreferenceTitle()

    })

    test('Test-03: Verify Language Section', async () => {

        // Verify Language Level
        await accountsPage.verifyLanguageLevel()

        // Verify Language Level Value
        await accountsPage.verifyLanLevelValue()
        
        // Click on Language Edit Icon
        await accountsPage.clickOnLanEditIcon()

        // Language Popup model
        await accountsPage.verifyPopupModel()

        // Verify Language List Count
        await accountsPage.verifyLanListCount()

        // Verify Language List Content
        await accountsPage.verifyLanListContent()

        // Verify Apply Button
        await accountsPage.verifyApplyBtn()
        
        // Verify Cancel Button
        await accountsPage.verifyCancelBtn()

        // Click on Cancel Button
        await accountsPage.clickOnCancelBtn()

    })

    test('Test-04: Verify the Select French Language', async () => {

        // Verify Reset Language
        await accountsPage.verifyResetLanguage()

        // Click on Language Edit Icon
        await accountsPage.clickOnLanEditIcon()

        // French Language
        await accountsPage.verifyFrenchLanChange()

    })

    test('Test-05: Verify the Select German Language', async() => {

        // Click on Language Edit Icon
        await accountsPage.clickOnLanEditIcon()

        // English Language
        await accountsPage.verifyGermanLanChange()

    })

    test('Test-06: Verify the Select Italian Language', async() => {

        // Click on Language Edit Icon
        await accountsPage.clickOnLanEditIcon()

        // English Language
        await accountsPage.verifyItalianLanChange()

    })

    test('Test-07: Verify the Select Spanish Language', async() => {

        // Click on Language Edit Icon
        await accountsPage.clickOnLanEditIcon()

        // English Language
        await accountsPage.verifySpanishLanChange()

    })

    test('Test-08: Verify the Select English Language', async() => {

        // Click on Language Edit Icon
        await accountsPage.clickOnLanEditIcon()

        // English Language
        await accountsPage.verifyEnglishLanChange()

    })
    
    test('Test-09: Verify Timezone Section', async () => {

        // Verify Timezone Level
        await accountsPage.verifyTimezoneLevel()

        // Verify Timezone Level Value
        await accountsPage.verifyTimezoneLevelValue()

        // Click on Timezone Edit Icon
        await accountsPage.clickOnTimezoneEditIcon()

        // Timezone Popup model
        await accountsPage.verifyPopupModel()

        // Verify Timezone List Count
        await accountsPage.verifyTimezoneListCount()

        // Verify UTC Timezone List Content
        await accountsPage.verifyUTCTimezone()

        // Verify Apply Button
        await accountsPage.verifyApplyBtn()

        // Verify Cancel Button
        await accountsPage.verifyCancelBtn()

        // Click on Cancel Button
        await accountsPage.clickOnCancelBtn()

    })

    test('Test-10: Verify the Select Casablanca Timezone', async () => {

        // Click on Timezone Edit Icon
        await accountsPage.clickOnTimezoneEditIcon()

        // Select Casablanca Timezone
        await accountsPage.selectCasablancaTimezone()

    })

    test('Test-11: Verify the Select UTC Timezone', async () => {

        // Click on Timezone Edit Icon
        await accountsPage.clickOnTimezoneEditIcon()

        // Select Casablanca Timezone
        await accountsPage.selectUTCTimezone()

    })

    test('Test-12: Verify Units Section', async () => {

        // Verify Units Level
        await accountsPage.verifyUnitsLevel()

        // Verify Units Level Value
        await accountsPage.verifyUnitsLevelValue()

        // Click on Units Edit Icon
        await accountsPage.clickOnUnitsEditIcon()

        // Units Popup model
        await accountsPage.verifyPopupModel()

        // Verify Units List Count
        await accountsPage.verifyUnitsListCount()

        // Verify Units List Content
        await accountsPage.verifyUnitsListContent()

        // Verify Apply Button
        await accountsPage.verifyApplyBtn()

        // Verify Cancel Button
        await accountsPage.verifyCancelBtn()

        // Click on Cancel Button
        await accountsPage.clickOnCancelBtn()

    }) 
    
    test('Test-13: Verify the Select Kilometres Units', async () => {

        // Verify Reset Units Section
        await accountsPage.verifyResetUnits()

        // Click on Units Edit Icon
        await accountsPage.clickOnUnitsEditIcon()

        // Verify changes of Units "Kilometres"
        await accountsPage.verifyKilometresUnits()

    })

    test('Test-14: Verify the Select Miles Units', async () => {

        // Click on Units Edit Icon
        await accountsPage.clickOnUnitsEditIcon()

        // Verify Default Units "Miles"
        await accountsPage.verifyMilesUnits()

    })

})