// Author: Nadim

import { Locator, Page, expect } from "@playwright/test";
import Utils from "../utils/utility";
const utils = new Utils();

export default class AccountPage {
    page: Page;
    profileIcon: Locator;
    settingPreference: Locator;
    accountTab: Locator;
    preferenceTitle: Locator;
    languageLevel: Locator;
    languageValue: Locator;
    lanEditIcon: Locator;
    languageList: Locator;
    cancelBtn: Locator;
    french: Locator;
    english: Locator;
    timezoneLevel: Locator;
    timezoneValue: Locator;
    timeEditIcon: Locator;
    timezonList: Locator;
    calablanca: Locator;
    unitsLevel: Locator;
    unitsValue: Locator;
    unitEditIcon: Locator;
    unitsList: Locator;
    kilometres: Locator;
    applyBtn: Locator;
    popupModel: Locator;
    miles: Locator;
    defaultTimezone: Locator;
    selectedListItem: Locator;
    hoverListItem: Locator;
    german: Locator;
    italian: Locator;
    spanish: Locator;
    langLavelValueContent: Promise<string | null>;
    timeLavelValueContent: Promise<string | null>;
    unitContent: Promise<string | null>;

    constructor(page: Page) {
        this.page = page;
        this.profileIcon = page.locator("//span[text()='IRIS@TEST.COM']")
        this.settingPreference = page.locator("button[class='btn btn--primary has-left-icon']")
        this.accountTab = page.locator('.ng-star-inserted.active')
        this.preferenceTitle = page.locator("div[class='heading'] h3")
        this.languageLevel = page.locator("//span[normalize-space()='Language']")
        this.languageValue = page.locator("(//span[@class='span-style darker'])[1]")
        this.lanEditIcon = page.locator("(//her-svg-icon[@name='edit'])[1]")
        this.popupModel = page.locator("//div[@class='modal modal-open']")
        this.languageList = page.locator("//div[@class='body-wrapper']//ul[1]//li")
        this.applyBtn = page.locator("//button[@class='btn success']")
        this.cancelBtn = page.locator("//button[contains(@class,'btn btn-cancel')]")
        this.french = page.locator("//li[text()='French']")
        this.german = page.locator("//li[text()='German']")
        this.italian = page.locator("//li[text()='Italian']")
        this.spanish = page.locator("//li[text()='Spanish']")
        this.english = page.locator("//li[text()='English']")
        this.timezoneLevel = page.locator("//span[text()='Time zone']")
        this.timezoneValue = page.locator("(//span[@class='span-style darker'])[2]")
        this.timeEditIcon = page.locator("(//her-svg-icon[@name='edit'])[2]")
        this.timezonList = page.locator("//div[@class='body-wrapper']//ul[1]//li")
        this.calablanca = page.locator("//li[text()='(UTC+01:00) Casablanca']")
        this.defaultTimezone = page.locator("//li[text()='(UTC) Coordinated Universal Time']")
        this.unitsLevel = page.locator("//span[text()='Units']")
        this.unitsValue = page.locator("(//span[@class='span-style darker'])[3]")
        this.unitEditIcon = page.locator("(//her-svg-icon[@name='edit'])[3]")
        this.unitsList = page.locator("//div[@class='body-wrapper']//ul[1]//li")
        this.kilometres = page.locator("//li[text()='Kilometres']")
        this.miles = page.locator("//li[text()='Miles']")
        this.selectedListItem = page.locator("//li[@class='ng-star-inserted selected']")
        this.langLavelValueContent = this.languageValue.textContent();
        this.timeLavelValueContent = this.timezoneValue.textContent();
        this.unitContent = this.unitsValue.textContent();
        
    }

    async verifyCustomerAdminLoginPage() {
        utils.customerAdminLogin(this.page)
    }

    async verifyProfileEmailAddress() {
        await this.page.waitForTimeout(2000)
        await expect(this.profileIcon).toBeVisible()
        await expect(this.profileIcon).toHaveText('IRIS@TEST.COM')
    }

    async clickOnProfileIcon() {
        await this.profileIcon.click()
        await this.page.waitForLoadState("domcontentloaded")
    }

    async verifySettingAndPreference() {
        await expect(this.settingPreference).toBeVisible()
        await expect(this.settingPreference).toContainText('Settings and Preferences')
    }

    async clickOnSettingAndPreference() {
        await this.settingPreference.click()
        await this.page.waitForTimeout(5000)
        await expect(this.page).toHaveURL(/settings-preferences\/account/)
        this.page.waitForTimeout(2000)
    }

    async verifyAccountPage() {
        await expect(this.accountTab).toBeVisible()
        await expect(this.accountTab).toHaveClass(/active/)
        this.page.waitForTimeout(2000)
    }

    async verifyPreferenceTitle() {
        await expect(this.preferenceTitle).toBeVisible()
        await expect(this.preferenceTitle).toHaveCSS('text-transform', 'uppercase')
        await expect(this.preferenceTitle).toHaveText('Preferences')
        this.page.waitForTimeout(2000)
    }

    async verifyLanguageLevel() {
        await expect(this.languageLevel).toBeVisible()
        await expect(this.languageLevel).toHaveCSS('text-transform', 'uppercase')
        await expect(this.languageLevel).toHaveText('Language')
    }

    async verifyLanLevelValue() {
        await expect(this.languageValue).toBeVisible()
        await expect(this.languageValue).toHaveText('English')
    }

    async clickOnLanEditIcon() {
        await expect(this.lanEditIcon).toBeVisible()
        this.lanEditIcon.click()
    }

    async verifyPopupModel() {
        await expect(this.popupModel).toBeVisible()
    }

    async verifyLanListCount() {
        await expect(this.languageList).toHaveCount(5)
    }

    async verifyLanListContent() {
        await expect(this.languageList).toHaveText(['English','French','German','Italian','Spanish'])
    }

    async verifyApplyBtn() {
        await expect(this.applyBtn).toBeVisible()
        await expect(this.applyBtn).toContainText('Apply')
    }

    async verifyCancelBtn() {
        await expect(this.cancelBtn).toBeVisible()
        await expect(this.cancelBtn).toContainText('Cancel')
        await this.page.waitForTimeout(3000)
    }

    async clickOnCancelBtn() {
        this.cancelBtn.click()
        await this.page.waitForTimeout(3000)
    }

    async verifyFrenchLanChange() {
        this.french.click()
        await this.page.waitForTimeout(2000)
        this.applyBtn.click()
        await this.page.waitForLoadState('networkidle')
        await expect(this.languageValue).toHaveText("French")
        await this.page.waitForTimeout(2000)
    }

    async verifyGermanLanChange() {
        this.german.click()
        await this.page.waitForTimeout(2000)
        this.applyBtn.click()
        await this.page.waitForLoadState('networkidle')
        await expect(this.languageValue).toHaveText("German")
        await this.page.waitForTimeout(2000)
    }

    async verifyItalianLanChange() {
        this.italian.click()
        await this.page.waitForTimeout(2000)
        this.applyBtn.click()
        await this.page.waitForLoadState('networkidle')
        await expect(this.languageValue).toHaveText("Italian")
        await this.page.waitForTimeout(2000)
    }

    async verifySpanishLanChange() {
        this.spanish.click()
        await this.page.waitForTimeout(2000)
        this.applyBtn.click()
        await this.page.waitForLoadState('networkidle')
        await expect(this.languageValue).toHaveText("Spanish")
        await this.page.waitForTimeout(2000)
    }

    async verifyEnglishLanChange() {
        this.english.click()
        await this.page.waitForTimeout(2000)
        this.applyBtn.click()
        await this.page.waitForLoadState('networkidle')
        await expect(this.languageValue).toHaveText("English")
        await this.page.waitForTimeout(2000)
    }

    async verifyResetLanguage() {
        
        const languageList = ["French", "German", "Italian", "Spanish"]

        for (const language of languageList) {
            if (await this.langLavelValueContent === language) {
                this.verifyEnglishLanChange();
            }
        }
    }

    async verifyTimezoneLevel() {
        await expect(this.timezoneLevel).toBeVisible()
        await expect(this.timezoneLevel).toHaveCSS('text-transform', 'uppercase')
        await expect(this.timezoneLevel).toHaveText('Time zone')
    }

    async verifyTimezoneLevelValue() {
        await expect(this.timezoneValue).toBeVisible()
    }

    async clickOnTimezoneEditIcon() {
        await expect(this.timeEditIcon).toBeVisible()
        this.timeEditIcon.click()
    }

    async verifyTimezoneListCount() {
        await expect(this.timezonList).toHaveCount(137)
    }

    async verifyUTCTimezone() {
        await expect(this.timezoneValue).toHaveText("(UTC) Coordinated Universal Time")
    }

    async selectCasablancaTimezone() {
        this.calablanca.click()
        await this.page.waitForTimeout(2000)
        this.applyBtn.click()
        await this.page.waitForLoadState('networkidle')
        await expect(this.timezoneValue).toHaveText("(UTC+01:00) Casablanca")
        await this.page.waitForTimeout(3000)
    }

    async selectUTCTimezone() {
        this.defaultTimezone.click()
        await this.page.waitForTimeout(2000)
        this.applyBtn.click()
        await this.page.waitForLoadState('networkidle')
        await expect(this.timezoneValue).toHaveText("(UTC) Coordinated Universal Time")
        await this.page.waitForTimeout(3000)
    }

    async verifyUnitsLevel() {
        await expect(this.unitsLevel).toBeVisible()
        await expect(this.unitsLevel).toHaveCSS('text-transform', 'uppercase')
        await expect(this.unitsLevel).toHaveText('Units')
    }

    async verifyUnitsLevelValue() {
        await expect(this.unitsValue).toBeVisible()
    }

    async clickOnUnitsEditIcon() {
        await expect(this.unitEditIcon).toBeVisible()
        this.unitEditIcon.click()
        await this.page.waitForTimeout(2000)
    }

    async verifyUnitsListCount() {
        await expect(this.unitsList).toHaveCount(2)
    }

    async verifyUnitsListContent() {
        await expect(this.unitsList).toHaveText(['Kilometres','Miles'])
    }

    async verifyResetUnits() {
        if(await this.unitContent === "Kilometres") {
            this.verifyMilesUnits()
        }
    }

    async verifyKilometresUnits() {
        this.kilometres.click()
        await this.page.waitForTimeout(2000)
        this.applyBtn.click()
        await this.page.waitForLoadState('networkidle')
        await expect(this.unitsValue).toHaveText("Kilometres")
        await this.page.waitForTimeout(2000)
    }

    async verifyMilesUnits() {
        this.miles.click()
        await this.page.waitForTimeout(2000)
        this.applyBtn.click()
        await this.page.waitForLoadState('networkidle')
        await expect(this.unitsValue).toHaveText("Miles")
        await this.page.waitForTimeout(2000)
    }

}

