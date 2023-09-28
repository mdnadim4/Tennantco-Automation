// Author: Nadim

import { Locator, Page, expect } from "@playwright/test";
import Utils from "../utils/utility";
const utils = new Utils();

export default class SetupPage {
    page: Page;
    profileIcon: Locator;
    settingPreference: Locator;
    setupTab: Locator;
    alertEmailAddressTitle: Locator;
    generalAlertsSubtitle: Locator;
    generalAlertsTitle: Locator;
    otherAlertsTitle: Locator;
    otherAlertsSubtitle: Locator;
    lowUsageTitle: Locator;
    lowUsageSubtitle: Locator;
    reportsTitle: Locator;
    reportsEmailAddressTitle: Locator;
    alertEmailInputField: Locator;
    alertApplyChangesBtn: Locator;
    deletedAlertsEmail: Locator;
    deleteIcon: Locator;
    machineRelocatedTitle: Locator;
    machineRelocatedSubtitle: Locator;
    machineRelocatedDropList: Locator;
    machine1mileDropListItem: Locator;
    noChargeAlertTitle: Locator;
    noChargeAlertSubtitle: Locator;
    opportunityChargeTitle: Locator;
    opportunityChargeSubtitle: Locator;
    noChargeDropList: Locator;
    opportunityChargeDropList: Locator;
    machineDropdownListPanel: Locator;
    noChargeDropdownListPanel: Locator;
    machine1MileText: Locator;
    opportunityDropdownListPanel: Locator;
    chargerErrorTitle: Locator;
    chargerErrorSubtitle: Locator;
    chargerErrorDropList: Locator;
    onDropListItemCharger: Locator;
    chargerErrorDropdownListPanel: Locator;
    offDropListItem: Locator;
    onDropListItem: Locator;
    dropDownListPanel: Locator;
    noCommunicationTitle: Locator;
    noCommunicationSubtitle: Locator;
    noCommunicationDropList: Locator;
    noCommunication3DaysDropListItem: Locator;
    noCommunication3DaysText: Locator;
    OtherAlertsTitle: Locator;
    OtherAlertsSubtitle: Locator;
    serviceRequestTitle: Locator;
    serviceRequestSubtitle: Locator;
    serviceRequestDropList: Locator;
    abwTankTitle: Locator;
    abwTankSubtitle: Locator;
    abwTankDropList: Locator;
    noServiceTitle: Locator;
    noServiceSubtitle: Locator;
    noServiceDropList: Locator;
    noService6MonthDropListItem: Locator;
    noService6MonthText: Locator;
    noService9MonthText: Locator;
    noService9MonthDropListItem: Locator;
    noService12MonthDropListItem: Locator;
    noService12MonthText: Locator;
    noCommunication1DayDropListItem: Locator;
    noCommunication1DayText: Locator;
    noCommunication5DaysDropListItem: Locator;
    noCommunication5DaysText: Locator;
    noCommunication7DaysDropListItem: Locator;
    noCommunication7DaysText: Locator;
    machine05mileDropListItem: Locator;
    machine05MileText: Locator;
    machine3MilesDropListItem: Locator;
    machine3MilesText: Locator;
    machine10MilesDropListItem: Locator;
    machine10MilesText: Locator;
    lowUsageDailyTitle: Locator;
    lowUsageDailySubtitle: Locator;
    daily0hrDropListItem: Locator;
    daily05hrDropListItem: Locator;
    daily1hrText: Locator;
    daily1hrDropListItem: Locator;
    daily1point5hrDropListItem: Locator;
    daily2hrDropListItem: Locator;
    daily2hrText: Locator;
    daily05hrText: Locator;
    daily0hrText: Locator;
    daily1point5hrText: Locator;
    lowUsageDailyDropList: Locator;
    usageApplyChangesBtn: Locator;
    lowUsageWeeklyTitle: Locator;
    lowUsageWeeklySubtitle: Locator;
    lowUsageWeeklyDropList: Locator;
    weekly0hrDropListItem: Locator;
    weekly0hrText: Locator;
    weekly4hrDropListItem: Locator;
    weekly4hrText: Locator;
    weekly8hrDropListItem: Locator;
    weekly8hrText: Locator;
    weekly16hrDropListItem: Locator;
    weekly16hrText: Locator;
    weekly12hrDropListItem: Locator;
    weekly12hrText: Locator;
    lowUsageMonthlyTitle: Locator;
    lowUsageMonthlySubtitle: Locator;
    lowUsageMonthlyDropList: Locator;
    monthly0hrDropListItem: Locator;
    monthly0hrText: Locator;
    monthly20hrDropListItem: Locator;
    monthly20hrText: Locator;
    monthly25hrDropListItem: Locator;
    monthly25hrText: Locator;
    monthly30hrDropListItem: Locator;
    monthly30hrText: Locator;
    monthly35hrDropListItem: Locator;
    monthly35hrText: Locator;
    reportApplyChangesBtn: Locator;
    reportEmailAddressTitle: Locator;
    reportEmailInputField: Locator;
    reportDeleteIcon: Locator;
    alertDeleteIcon: Locator;
    usageReportTitle: Locator;
    usageReportDropList: Locator;
    dailyUsageReportText: Locator;
    weeklyUsageReportText: Locator;
    dailyUsageDropListItem: Locator;
    weeklyUsageDropListItem: Locator;
    runtimeReportsTitle: Locator;
    runtimeReportsDropList: Locator;
    dailyRuntimeDropListItem: Locator;
    weeklyRuntimeDropListItem: Locator;
    monthlyRuntimeDropListItem: Locator;
    dailyRuntimeText: Locator;
    weeklyRuntimeText: Locator;
    monthlyRuntimeText: Locator;


    constructor(page: Page) {
        this.page = page;
        this.profileIcon = page.locator("//span[text()='IRIS@TEST.COM']")
        this.settingPreference = page.locator("button[class='btn btn--primary has-left-icon']")
        this.setupTab = page.locator("//li[text()=' Set up ']")
        this.alertEmailAddressTitle = page.locator("(//div[text()='Email Addresses to Copy'])[1]")
        this.reportEmailAddressTitle = page.locator("(//div[text()='Email Addresses to Copy'])[2]")
        this.generalAlertsTitle = page.locator("//div[text()='General Alerts']")
        this.generalAlertsSubtitle = page.locator("//div[text()='Receive an email if these alerts are triggered']")
        this.otherAlertsTitle = page.locator("//div[text()='Other Alerts']")
        this.otherAlertsSubtitle = page.locator("//div[text()='Only available for certain customers. Please contact your sales rep for details.']")
        this.lowUsageTitle = page.locator("//div[text()='Low Usage']")
        this.lowUsageSubtitle = page.locator("//div[text()='Receive an email if a machine is used less than a chosen threshold']")
        this.reportsEmailAddressTitle = page.locator("(//div[text()='Email Addresses to Copy'])[2]")
        this.reportsTitle = page.locator("//div[text()='Reports']")
        this.alertEmailInputField = page.locator("#mat-chip-list-input-1")
        this.reportEmailInputField = page.locator("#mat-chip-list-input-0")
        this.alertApplyChangesBtn = page.locator("(//button[@type='submit'])[1]")
        this.usageApplyChangesBtn = page.locator("(//button[@type='submit'])[2]")
        this.reportApplyChangesBtn = page.locator("(//button[@type='submit'])[3]")
        this.deletedAlertsEmail = page.locator("//mat-chip[text()=' test@tennantco.com ']")
        this.alertDeleteIcon = page.locator("mat-chip:nth-of-type(5) > her-svg-icon[name='filter-close'] > svg")
        this.reportDeleteIcon = page.locator("mat-chip-list#mat-chip-list-0>div>mat-chip:nth-of-type(4)>her-svg-icon")
        
        this.machineRelocatedTitle = page.locator("//div[text()='Machine Relocated']")
        this.machineRelocatedSubtitle = page.locator("//div[text()='Triggered if the machine reported a location that is outside the set radius of its home location. № Alert Radius(1 mile = 1.6 km)']")
        this.machineRelocatedDropList = page.locator("(//mat-form-field[@appearance='none'])[2]")
        this.machine05mileDropListItem = page.locator("(//span[@class='mat-option-text'])[2]")
        this.machine05MileText = page.locator("//span[text()='0.5 mile']")
        this.machine1mileDropListItem = page.locator("(//span[@class='mat-option-text'])[3]")
        this.machine1MileText = page.locator("//span[text()='1 mile']")
        this.machine3MilesDropListItem = page.locator("(//span[@class='mat-option-text'])[4]")
        this.machine3MilesText = page.locator("//span[text()='3 miles']")
        this.machine10MilesDropListItem = page.locator("(//span[@class='mat-option-text'])[5]")
        this.machine10MilesText = page.locator("//span[text()='10 miles']")

        this.dropDownListPanel = page.locator("(//div[@class='cdk-overlay-pane']//div)[1]")
        this.offDropListItem = page.locator("(//span[@class='mat-option-text'])[1]")
        this.onDropListItem = page.locator("(//span[@class='mat-option-text'])[2]")
        
        this.noChargeAlertTitle = page.locator("//div[text()='No Charge Alert']")
        this.noChargeAlertSubtitle = page.locator("//div[text()='Triggered if the machine reported usage but the battery was not charged on that calendar day.']")
        this.noChargeDropList = page.locator("(//mat-form-field[@appearance='none'])[3]")
        
        this.opportunityChargeTitle = page.locator("//div[text()='Opportunity Charge Alert']")
        this.opportunityChargeSubtitle = page.locator("//div[text()='Triggered if the machine reported its battery being plugged in for charging but not to completion.']")
        this.opportunityChargeDropList = page.locator("(//div[@class='dropdown-wrapper ng-star-inserted']//mat-form-field)[3]")
        
        this.chargerErrorTitle = page.locator("//div[text()='Charger Error']")
        this.chargerErrorSubtitle = page.locator("//div[text()='Triggered if a charger error is reported by the machine.']")
        this.chargerErrorDropList = page.locator("(//div[@class='dropdown-wrapper ng-star-inserted']//mat-form-field)[4]")

        this.noCommunicationTitle = page.locator("//div[text()='No Communication']")
        this.noCommunicationSubtitle = page.locator("//div[text()='Triggered if a machine has not communicated with the portal for the selected period.']")
        this.noCommunicationDropList = page.locator("(//div[@class='dropdown-wrapper ng-star-inserted']//mat-form-field)[5]")

        this.noCommunication1DayDropListItem = page.locator("(//span[@class='mat-option-text'])[2]")
        this.noCommunication1DayText = page.locator("//span[text()='1 day']")
        this.noCommunication3DaysDropListItem = page.locator("(//span[@class='mat-option-text'])[3]")
        this.noCommunication3DaysText = page.locator("//span[text()='3 days']")
        this.noCommunication5DaysDropListItem = page.locator("(//span[@class='mat-option-text'])[4]")
        this.noCommunication5DaysText = page.locator("//span[text()='5 days']")
        this.noCommunication7DaysDropListItem = page.locator("(//span[@class='mat-option-text'])[5]")
        this.noCommunication7DaysText = page.locator("//span[text()='7 days']")
        
        this.OtherAlertsTitle = page.locator("//div[text()='Other Alerts']")
        this.OtherAlertsSubtitle = page.locator("//div[text()='Only available for certain customers. Please contact your sales rep for details.']")

        this.serviceRequestTitle = page.locator("//div[text()='Service Request']")
        this.serviceRequestSubtitle = page.locator("//div[text()=' Triggered if a Service Request has been created or completed. ']")
        this.serviceRequestDropList = page.locator("(//div[@class='dropdown-wrapper ng-star-inserted']//mat-form-field)[7]")

        this.abwTankTitle = page.locator("//div[text()='ABW Tank Empty']")
        this.abwTankSubtitle = page.locator("//div[text()=' Triggered when Automatic Battery Watering (ABW) Tank needs to be filled with distilled water. ']")
        this.abwTankDropList = page.locator("(//div[@class='dropdown-wrapper ng-star-inserted']//mat-form-field)[8]")

        this.noServiceTitle = page.locator("//div[text()='No Service Performed']")
        this.noServiceSubtitle = page.locator("//div[text()=' Triggered if a machine has not been serviced in the selected period. ']")
        this.noServiceDropList = page.locator("(//div[@class='dropdown-wrapper ng-star-inserted']//mat-form-field)[6]")
        this.noService6MonthDropListItem = page.locator("(//span[@class='mat-option-text'])[2]")
        this.noService6MonthText = page.locator("//span[text()='6 months']")
        this.noService9MonthDropListItem = page.locator("(//span[@class='mat-option-text'])[3]")
        this.noService9MonthText = page.locator("//span[text()='9 months']")
        this.noService12MonthDropListItem = page.locator("(//span[@class='mat-option-text'])[4]")
        this.noService12MonthText = page.locator("//span[text()='12 months']")

        this.lowUsageTitle = page.locator("//div[text()='Low Usage']")
        this.lowUsageSubtitle = page.locator("//div[text()='Receive an email if a machine is used less than a chosen threshold']")

        this.lowUsageDailyTitle = page.locator("//div[text()='Daily']")
        this.lowUsageDailySubtitle = page.locator("(//div[text()='Set Value lower than what you consider low'])[1]")
        this.lowUsageDailyDropList = page.locator("(//div[@class='dropdown-wrapper ng-star-inserted']//mat-form-field)[9]")
        this.daily0hrDropListItem = page.locator("(//span[@class='mat-option-text'])[2]")
        this.daily0hrText = page.locator("//span[text()='0 hr']")
        this.daily05hrDropListItem = page.locator("(//span[@class='mat-option-text'])[3]")
        this.daily05hrText = page.locator("//span[text()='0.5 hr']")
        this.daily1hrDropListItem = page.locator("(//span[@class='mat-option-text'])[4]")
        this.daily1hrText = page.locator("//span[text()='1 hr']")
        this.daily1point5hrDropListItem = page.locator("(//span[@class='mat-option-text'])[5]")
        this.daily1point5hrText = page.locator("//span[text()='1.5 hr']")
        this.daily2hrDropListItem = page.locator("(//span[@class='mat-option-text'])[6]")
        this.daily2hrText = page.locator("//span[text()='2 hr']")

        this.lowUsageWeeklyTitle = page.locator("//div[text()='Weekly']")
        this.lowUsageWeeklySubtitle = page.locator("(//div[text()='Set Value lower than what you consider low'])[2]")
        this.lowUsageWeeklyDropList = page.locator("(//div[@class='dropdown-wrapper ng-star-inserted']//mat-form-field)[10]")
        this.weekly0hrDropListItem = page.locator("(//span[@class='mat-option-text'])[2]")
        this.weekly0hrText = page.locator("//span[text()='0 hr']")
        this.weekly4hrDropListItem = page.locator("(//span[@class='mat-option-text'])[3]")
        this.weekly4hrText = page.locator("//span[text()='4 hr']")
        this.weekly8hrDropListItem = page.locator("(//span[@class='mat-option-text'])[4]")
        this.weekly8hrText = page.locator("//span[text()='8 hr']")
        this.weekly12hrDropListItem = page.locator("(//span[@class='mat-option-text'])[5]")
        this.weekly12hrText = page.locator("//span[text()='12 hr']")
        this.weekly16hrDropListItem = page.locator("(//span[@class='mat-option-text'])[6]")
        this.weekly16hrText = page.locator("//span[text()='16 hr']")

        this.lowUsageMonthlyTitle = page.locator("//div[text()='Monthly']")
        this.lowUsageMonthlySubtitle = page.locator("(//div[text()='Set Value lower than what you consider low'])[3]")
        this.lowUsageMonthlyDropList = page.locator("(//div[@class='dropdown-wrapper ng-star-inserted']//mat-form-field)[11]")
        this.monthly0hrDropListItem = page.locator("(//span[@class='mat-option-text'])[2]")
        this.monthly0hrText = page.locator("//span[text()='0 hr']")
        this.monthly20hrDropListItem = page.locator("(//span[@class='mat-option-text'])[3]")
        this.monthly20hrText = page.locator("//span[text()='20 hr']")
        this.monthly25hrDropListItem = page.locator("(//span[@class='mat-option-text'])[4]")
        this.monthly25hrText = page.locator("//span[text()='25 hr']")
        this.monthly30hrDropListItem = page.locator("(//span[@class='mat-option-text'])[5]")
        this.monthly30hrText = page.locator("//span[text()='30 hr']")
        this.monthly35hrDropListItem = page.locator("(//span[@class='mat-option-text'])[6]")
        this.monthly35hrText = page.locator("//span[text()='35 hr']")

        this.usageReportTitle = page.locator("//div[text()='Usage Report']")
        this.usageReportDropList = page.locator("(//div[@class='dropdown-wrapper ng-star-inserted']//mat-form-field)[12]")
        this.dailyUsageDropListItem = page.locator("(//span[@class='mat-option-text'])[2]")
        this.dailyUsageReportText = page.locator("(//span[text()='Daily'])[1]")
        this.weeklyUsageDropListItem = page.locator("(//span[@class='mat-option-text'])[3]")
        this.weeklyUsageReportText = page.locator("//span[text()='Weekly']")

        this.runtimeReportsTitle = page.locator("//div[text()='Runtime Reports']")
        this.runtimeReportsDropList = page.locator("(//div[@class='dropdown-wrapper ng-star-inserted']//mat-form-field)[13]")
        this.dailyRuntimeDropListItem = page.locator("(//span[@class='mat-option-text'])[2]")
        this.dailyRuntimeText = page.locator("(//span[text()='Daily'])[2]")
        this.weeklyRuntimeDropListItem = page.locator("(//span[@class='mat-option-text'])[3]")
        this.weeklyRuntimeText = page.locator("//span[text()='Weekly']")
        this.monthlyRuntimeDropListItem = page.locator("(//span[@class='mat-option-text'])[4]")
        this.monthlyRuntimeText = page.locator("//span[text()='Monthly']")

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
        await this.page.waitForTimeout(2000)
    }

    async verifySettingAndPreference() {
        await expect(this.settingPreference).toBeVisible()
        await expect(this.settingPreference).toContainText('Settings and Preferences')
    }

    async clickOnSettingAndPreference() {
        await this.settingPreference.click()
        await this.page.waitForTimeout(3000)
        await expect(this.page).toHaveURL(/settings-preferences\/account/)
    }

    async verifySetupTab() {
        await expect(this.setupTab).toBeVisible()
        await this.setupTab.click()
        await expect(this.page).toHaveURL(/settings-preferences\/set-up/)
        await expect(this.setupTab).toHaveClass(/active/)
    }

    async verifyVisibilityAllSectionTitle() {
        await expect(this.alertEmailAddressTitle).toBeVisible()
        await expect(this.generalAlertsTitle).toBeVisible()
        await expect(this.otherAlertsTitle).toBeVisible()
        await expect(this.lowUsageTitle).toBeVisible()
        await expect(this.reportsEmailAddressTitle).toBeVisible()
        await expect(this.reportsTitle).toBeVisible()
    }

    async verifyTitleContent() {
        await expect(this.alertEmailAddressTitle).toHaveText('Email Addresses to Copy')
        await expect(this.generalAlertsTitle).toHaveText('General Alerts')
        await expect(this.otherAlertsTitle).toHaveText('Other Alerts')
        await expect(this.lowUsageTitle).toHaveText('Low Usage')
        await expect(this.reportsEmailAddressTitle).toHaveText('Email Addresses to Copy')
        await expect(this.reportsTitle).toHaveText('Reports')
    }

    async verifyTitleFontCase() {
        await expect(this.alertEmailAddressTitle).toHaveCSS('text-transform', 'uppercase')
        await expect(this.generalAlertsTitle).toHaveCSS('text-transform', 'uppercase')
        await expect(this.otherAlertsTitle).toHaveCSS('text-transform', 'uppercase')
        await expect(this.lowUsageTitle).toHaveCSS('text-transform', 'uppercase')
        await expect(this.reportsEmailAddressTitle).toHaveCSS('text-transform', 'uppercase')
        await expect(this.reportsTitle).toHaveCSS('text-transform', 'uppercase')
    }

    async verifyAlertEmailInputField() {
        await expect(this.alertEmailInputField).toBeVisible()
        await expect(this.alertEmailInputField).toBeEnabled()
    }

    async inputValidEmailAddress() {
        await this.alertEmailInputField.type('testing@gmail.com', { timeout: 2000 })
        await this.alertEmailInputField.press('Enter', { timeout: 2000 })
    }

    async verifyReportEmailInputField() {
        await expect(this.reportEmailInputField).toBeVisible()
        await expect(this.reportEmailInputField).toBeEnabled()
    }

    async inputValidReportEmailAddress() {
        await this.reportEmailInputField.type('testing@gmail.com', { timeout: 2000 })
        await this.reportEmailInputField.press('Enter', { timeout: 2000 })
    }

    async clickOnAlertApplyChangesBtn() {
        await expect(this.alertApplyChangesBtn).toBeEnabled()
        await expect(this.alertApplyChangesBtn).toBeVisible()
        await this.alertApplyChangesBtn.click({ timeout: 2000 })
    }

    async clickOnUsageApplyChangesBtn() {
        await expect(this.usageApplyChangesBtn).toBeEnabled()
        await expect(this.usageApplyChangesBtn).toBeVisible()
        await this.usageApplyChangesBtn.click({ timeout: 2000 })
    }

    async clickOnReportApplyChangesBtn() {
        await expect(this.reportApplyChangesBtn).toBeEnabled()
        await expect(this.reportApplyChangesBtn).toBeVisible()
        await this.reportApplyChangesBtn.click({ timeout: 2000 })
    }   

    async clickOnAlertDeleteIcon() {
        await expect(this.alertDeleteIcon).toBeVisible()
        await this.alertDeleteIcon.click()
        this.page.waitForTimeout(2000)
    }

    async clickOnReportDeleteIcon() {
        await expect(this.reportDeleteIcon).toBeVisible()
        await this.reportDeleteIcon.click()
        this.page.waitForTimeout(2000)
    }

    // Section for "GENERAL ALERTS"
    async verifyGeneralAlertsTitle() {
        await expect(this.generalAlertsTitle).toBeVisible()
        await expect(this.generalAlertsTitle).toHaveText('General Alerts')
        await expect(this.generalAlertsTitle).toHaveCSS('text-transform', 'uppercase')
    }

    async verifyGeneralAlertsSubtitle() {
        await expect(this.generalAlertsSubtitle).toBeVisible()
        await expect(this.generalAlertsSubtitle).toHaveText('Receive an email if these alerts are triggered')
    }

    // Section for "Machine Relocated"
    async verifyMachineRelocatedTitle() {
        await expect(this.machineRelocatedTitle).toBeVisible()
        await expect(this.machineRelocatedTitle).toHaveText('Machine Relocated')
    }

    async verifyMachineRelocatedSubtitle() {
        await expect(this.machineRelocatedSubtitle).toBeVisible()
        await expect(this.machineRelocatedSubtitle).toHaveText('Triggered if the machine reported a location that is outside the set radius of its home location. № Alert Radius(1 mile = 1.6 km)')
    }

    async verifyMachineRelocatedDropList() {
        this.machineRelocatedSubtitle.scrollIntoViewIfNeeded()
        await expect(this.machineRelocatedDropList).toBeVisible()
        await expect(this.machineRelocatedDropList).toBeEnabled()
    }

    async clickOnMachineDropList() {
        this.machineRelocatedDropList.click()
        await expect(this.dropDownListPanel).toBeVisible()
    }

    async selectOffDropListMachine() {
        await expect(this.offDropListItem).toBeVisible()
        await this.offDropListItem.click()
        await expect(this.machineRelocatedDropList).toHaveText("Off")
        this.page.waitForTimeout(2000)
    }

    async select05MileDropListMachine() {
        this.noChargeDropList.scrollIntoViewIfNeeded()
        await expect(this.machine05mileDropListItem).toBeVisible()
        await this.machine05mileDropListItem.click()
        await expect(this.machine05MileText).toHaveText("0.5 mile")
        this.page.waitForTimeout(2000)
    }

    async select1MileDropListMachine() {
        this.noChargeDropList.scrollIntoViewIfNeeded()
        await expect(this.machine1mileDropListItem).toBeVisible()
        await this.machine1mileDropListItem.click()
        await expect(this.machine1MileText).toHaveText("1 mile")
        this.page.waitForTimeout(2000)
    }

    async select3MilesDropListMachine() {
        this.noChargeDropList.scrollIntoViewIfNeeded()
        await expect(this.machine3MilesDropListItem).toBeVisible()
        await this.machine3MilesDropListItem.click()
        await expect(this.machine3MilesText).toHaveText("3 miles")
        this.page.waitForTimeout(2000)
    }

    async select10MilesDropListMachine() {
        this.noChargeDropList.scrollIntoViewIfNeeded()
        await expect(this.machine10MilesDropListItem).toBeVisible()
        await this.machine10MilesDropListItem.click()
        await expect(this.machine10MilesText).toHaveText("10 miles")
        this.page.waitForTimeout(2000)
    }

    // Section for "No Charge Alert"
    async verifyNoChargeTitle() {
        await expect(this.noChargeAlertTitle).toBeVisible()
        await expect(this.noChargeAlertTitle).toHaveText('No Charge Alert')
    }

    async verifyNoChargeSubtitle() {
        await expect(this.noChargeAlertSubtitle).toBeVisible()
        await expect(this.noChargeAlertSubtitle).toHaveText('Triggered if the machine reported usage but the battery was not charged on that calendar day.')
    }

    async verifyNoChargeDropList() {
        await expect(this.noChargeDropList).toBeVisible()
        await expect(this.noChargeDropList).toBeEnabled()
    }

    async clickOnNoChargeDropList() {
        this.noChargeDropList.click()
        await expect(this.dropDownListPanel).toBeVisible()
        await this.page.waitForTimeout(2000)
    }

    async selectOnDropListNoCharge() {
        await expect(this.onDropListItem).toBeVisible()
        await this.onDropListItem.click()
        await expect(this.noChargeDropList).toHaveText("On")
        this.page.waitForTimeout(2000)
    }

    async selectOffDropListNoCharge() {
        this.noChargeDropList.scrollIntoViewIfNeeded()
        await expect(this.offDropListItem).toBeVisible()
        await this.offDropListItem.click()
        await expect(this.noChargeDropList).toHaveText("Off")
        this.page.waitForTimeout(2000)
    }

    // Section for "Opportunity Charge Alert"
    async verifyOpportunityChargeTitle() {
        await expect(this.opportunityChargeTitle).toBeVisible()
        await expect(this.opportunityChargeTitle).toHaveText('Opportunity Charge Alert')
    }

    async verifyOpportunityChargeSubtitle() {
        await expect(this.opportunityChargeSubtitle).toBeVisible()
        await expect(this.opportunityChargeSubtitle).toHaveText('Triggered if the machine reported its battery being plugged in for charging but not to completion.')
    }

    async verifyOpportunityChargeDropList() {
        await expect(this.opportunityChargeDropList).toBeVisible()
        await expect(this.opportunityChargeDropList).toBeEnabled()
    }

    async clickOnOpportunityChargeDropList() {
        this.opportunityChargeDropList.click()
        await expect(this.dropDownListPanel).toBeVisible()
        await this.page.waitForTimeout(2000)
    }

    async selectOffDropListOpportunity() {
        await expect(this.offDropListItem).toBeVisible()
        await this.offDropListItem.click()
        await expect(this.opportunityChargeDropList).toHaveText("Off")
        this.page.waitForTimeout(2000)
    }

    async selectOnDropListOpportunity() {
        this.noChargeDropList.scrollIntoViewIfNeeded()
        await expect(this.onDropListItem).toBeVisible()
        await this.onDropListItem.click()
        await expect(this.opportunityChargeDropList).toHaveText("On")
        this.page.waitForTimeout(2000)
    } 

    // Section for "Charger Error"
    async verifyChargerErrorTitle() {
        await expect(this.chargerErrorTitle).toBeVisible()
        await expect(this.chargerErrorTitle).toHaveText('Charger Error')
    }

    async verifyChargerErrorSubtitle() {
        await expect(this.chargerErrorSubtitle).toBeVisible()
        await expect(this.chargerErrorSubtitle).toHaveText('Triggered if a charger error is reported by the machine.')
    }

    async verifyChargerErrorDropList() {
        await expect(this.chargerErrorDropList).toBeVisible()
        await expect(this.chargerErrorDropList).toBeEnabled()
    }

    async clickOnChargerErrorDropList() {
        this.chargerErrorDropList.click()
        await expect(this.dropDownListPanel).toBeVisible()
        this.page.waitForTimeout(2000)
    }

    async selectOffDropListCharger() {
        await expect(this.offDropListItem).toBeVisible()
        await this.offDropListItem.click()
        await expect(this.chargerErrorDropList).toHaveText("Off")
        this.page.waitForTimeout(2000)
    }

    async selectOnDropListCharger() {
        this.noChargeDropList.scrollIntoViewIfNeeded()
        await expect(this.onDropListItem).toBeVisible()
        await this.onDropListItem.click()
        await expect(this.chargerErrorDropList).toHaveText("On")
        this.page.waitForTimeout(2000)
    }

    // Section for "No Communication"
    async verifyNoCommunicationTitle() {
        await expect(this.noCommunicationTitle).toBeVisible()
        await expect(this.noCommunicationTitle).toHaveText('No Communication')
    }

    async verifyNoCommunicationSubtitle() {
        await expect(this.noCommunicationSubtitle).toBeVisible()
        await expect(this.noCommunicationSubtitle).toHaveText('Triggered if a machine has not communicated with the portal for the selected period.')
    }

    async verifyNoCommunicationDropList() {
        await expect(this.noCommunicationDropList).toBeVisible()
        await expect(this.noCommunicationDropList).toBeEnabled()  
    }

    async clickOnNoCommunicationDropList() {
        this.noCommunicationDropList.click()
        await expect(this.dropDownListPanel).toBeVisible()
        await this.page.waitForTimeout(2000)
    }

    async select1DayDropListNoCommunication() {
        await expect(this.noCommunication1DayDropListItem).toBeVisible()
        await this.noCommunication1DayDropListItem.click()
        await expect(this.noCommunication1DayText).toHaveText("1 day")
        await this.page.waitForTimeout(2000)
    }

    async select3DaysDropListNoCommunication() {
        await expect(this.noCommunication3DaysDropListItem).toBeVisible()
        await this.noCommunication3DaysDropListItem.click()
        await expect(this.noCommunication3DaysText).toHaveText("3 days")
        await this.page.waitForTimeout(2000)
    }

    async select5DaysDropListNoCommunication() {
        await expect(this.noCommunication5DaysDropListItem).toBeVisible()
        await this.noCommunication5DaysDropListItem.click()
        await expect(this.noCommunication5DaysText).toHaveText("5 days")
        await this.page.waitForTimeout(2000)
    }

    async select7DaysDropListNoCommunication() {
        await expect(this.noCommunication7DaysDropListItem).toBeVisible()
        await this.noCommunication7DaysDropListItem.click()
        await expect(this.noCommunication7DaysText).toHaveText("7 days")
        await this.page.waitForTimeout(2000)
    }

    async selectOffDropListNoCommunication() {
        this.noCommunicationDropList.scrollIntoViewIfNeeded()
        await expect(this.offDropListItem).toBeVisible()
        await this.offDropListItem.click()
        await expect(this.noCommunicationDropList).toHaveText("Off")
        await this.page.waitForTimeout(2000)
    }

    // Section for "GENERAL ALERTS"
    async verifyOtherAlertsTitle() {
        await expect(this.otherAlertsTitle).toBeVisible()
        await expect(this.otherAlertsTitle).toHaveText('Other Alerts')
        await expect(this.otherAlertsTitle).toHaveCSS('text-transform', 'uppercase')
    }

    async verifyOtherAlertsSubtitle() {
        await expect(this.otherAlertsSubtitle).toBeVisible()
        await expect(this.otherAlertsSubtitle).toHaveText('Only available for certain customers. Please contact your sales rep for details.')
    }

    // Section for "No Service Perfomed"
    async verifyNoServiceTitle() {
        await expect(this.noServiceTitle).toBeVisible()
        await expect(this.noServiceTitle).toHaveText('No Service Performed')
    }

    async verifyNoServiceSubtitle() {
        await expect(this.noServiceSubtitle).toBeVisible()
        await expect(this.noServiceSubtitle).toHaveText(' Triggered if a machine has not been serviced in the selected period. ')
    }

    async verifyNoServiceDropList() {
        await expect(this.noServiceDropList).toBeVisible()
        await expect(this.noServiceDropList).toBeEnabled()
    }

    async clickOnNoServiceDropList() {
        this.noServiceDropList.click()
        await expect(this.dropDownListPanel).toBeVisible()
        this.page.waitForTimeout(2000)
    }

    async selectOffDropListNoService() {
        await expect(this.offDropListItem).toBeVisible()
        await this.offDropListItem.click()
        await expect(this.noServiceDropList).toHaveText("Off")
        await this.page.waitForTimeout(2000)
    }

    async select6MonthDropListNoService() {
        this.noServiceDropList.scrollIntoViewIfNeeded()
        await expect(this.noService6MonthDropListItem).toBeVisible()
        await this.noService6MonthDropListItem.click()
        await expect(this.noService6MonthText).toHaveText("6 months")
        await this.page.waitForTimeout(2000)
    }

    async select9MonthDropListNoService() {
        this.noServiceDropList.scrollIntoViewIfNeeded()
        await expect(this.noService9MonthDropListItem).toBeVisible()
        await this.noService9MonthDropListItem.click()
        await expect(this.noService9MonthText).toHaveText("9 months")
        await this.page.waitForTimeout(2000)
    }

    async select12MonthDropListNoService() {
        this.noServiceDropList.scrollIntoViewIfNeeded()
        await expect(this.noService12MonthDropListItem).toBeVisible()
        await this.noService12MonthDropListItem.click()
        await expect(this.noService12MonthText).toHaveText("12 months")
        await this.page.waitForTimeout(2000)
    }

    // Section for "Service Request"
    async verifyServiceRequestTitle() {
        await expect(this.serviceRequestTitle).toBeVisible()
        await expect(this.serviceRequestTitle).toHaveText('Service Request')
    }

    async verifyServiceRequestSubtitle() {
        await expect(this.serviceRequestSubtitle).toBeVisible()
        await expect(this.serviceRequestSubtitle).toHaveText('Triggered if a Service Request has been created or completed.')
    }

    async verifyServiceRequestDropList() {
        await expect(this.serviceRequestDropList).toBeVisible()
        await expect(this.serviceRequestDropList).toBeEnabled()
    }

    async clickOnServiceRequestDropList() {
        this.serviceRequestDropList.click()
        await expect(this.dropDownListPanel).toBeVisible()
        this.page.waitForTimeout(2000)
    }

    async selectOffDropListServiceRequest() {
        await expect(this.offDropListItem).toBeVisible()
        await this.offDropListItem.click()
        await expect(this.serviceRequestDropList).toHaveText("Off")
        await this.page.waitForTimeout(2000)
    }

    async selectOnDropServiceRequest() {
        this.serviceRequestDropList.scrollIntoViewIfNeeded()
        await expect(this.onDropListItem).toBeVisible()
        await this.onDropListItem.click()
        await expect(this.serviceRequestDropList).toHaveText("On")
        await this.page.waitForTimeout(2000)
    }

    // Section for "ABW Tank Empty"
    async verifyABWTankTitle() {
        await expect(this.abwTankTitle).toBeVisible()
        await expect(this.abwTankTitle).toHaveText('ABW Tank Empty')
    }

    async verifyABWTankSubtitle() {
        await expect(this.abwTankSubtitle).toBeVisible()
        await expect(this.abwTankSubtitle).toHaveText('Triggered when Automatic Battery Watering (ABW) Tank needs to be filled with distilled water.')
    }

    async verifyABWTankDropList() {
        await expect(this.abwTankDropList).toBeVisible()
        await expect(this.abwTankDropList).toBeEnabled()
    }

    async clickOnABWTankDropList() {
        this.abwTankDropList.click()
        await expect(this.dropDownListPanel).toBeVisible()
        this.page.waitForTimeout(2000)
    }

    async selectOffDropListABW() {
        await expect(this.offDropListItem).toBeVisible()
        await this.offDropListItem.click()
        await expect(this.abwTankDropList).toHaveText("Off")
        await this.page.waitForTimeout(2000)
    }

    async selectOnDropABWTank() {
        this.noChargeDropList.scrollIntoViewIfNeeded()
        await expect(this.onDropListItem).toBeVisible()
        await this.onDropListItem.click()
        await expect(this.abwTankDropList).toHaveText("On")
        await this.page.waitForTimeout(2000)
    }

    // Section for "LOW USAGE"
    async verifyLowUsageTitle() {
        await expect(this.lowUsageTitle).toBeVisible()
        await expect(this.lowUsageTitle).toHaveText('Low Usage')
        await expect(this.lowUsageTitle).toHaveCSS('text-transform', 'uppercase')
    }

    async verifyLowUsageSubtitle() {
        await expect(this.lowUsageSubtitle).toBeVisible()
        await expect(this.lowUsageSubtitle).toHaveText('Receive an email if a machine is used less than a chosen threshold')
    }

    // Section for Low Usage Daily
    async verifyDailyTitle() {
        await expect(this.lowUsageDailyTitle).toBeVisible()
        await expect(this.lowUsageDailyTitle).toHaveText('Daily')
    }

    async verifyDailySubtitle() {
        await expect(this.lowUsageDailySubtitle).toBeVisible()
        await expect(this.lowUsageDailySubtitle).toHaveText('Set Value lower than what you consider low')
    }

    async verifyDailyDropList() {
        await expect(this.lowUsageDailyDropList).toBeVisible()
        await expect(this.lowUsageDailyDropList).toBeEnabled()
    }

    async clickOnDailyDropList() {
        this.lowUsageDailyDropList.click()
        await expect(this.dropDownListPanel).toBeVisible()
        this.page.waitForTimeout(2000)
    }

    async selectOffDropListDaily() {
        await expect(this.offDropListItem).toBeVisible()
        await this.offDropListItem.click()
        await expect(this.lowUsageDailyDropList).toHaveText("Off")
        await this.page.waitForTimeout(2000)
    }

    async select0hrDropListDaily() {
        this.lowUsageDailyDropList.scrollIntoViewIfNeeded()
        await expect(this.daily0hrDropListItem).toBeVisible()
        await this.daily0hrDropListItem.click()
        await expect(this.daily0hrText).toHaveText("0 hr")
        await this.page.waitForTimeout(2000)
    }

    async select05hrDropListDaily() {
        this.lowUsageDailyDropList.scrollIntoViewIfNeeded()
        await expect(this.daily05hrDropListItem).toBeVisible()
        await this.daily05hrDropListItem.click()
        await expect(this.daily05hrText).toHaveText("0.5 hr")
        await this.page.waitForTimeout(2000)
    }

    async select1hrDropListDaily() {
        this.lowUsageDailyDropList.scrollIntoViewIfNeeded()
        await expect(this.daily1hrDropListItem).toBeVisible()
        await this.daily1hrDropListItem.click()
        await expect(this.daily1hrText).toHaveText("1 hr")
        await this.page.waitForTimeout(2000)
    }

    async select1point5hrDropListDaily() {
        this.lowUsageDailyDropList.scrollIntoViewIfNeeded()
        await expect(this.daily1point5hrDropListItem).toBeVisible()
        await this.daily1point5hrDropListItem.click()
        await expect(this.daily1point5hrText).toHaveText("1.5 hr")
        await this.page.waitForTimeout(2000)
    }

    async select2hrDropListDaily() {
        this.lowUsageDailyDropList.scrollIntoViewIfNeeded()
        await expect(this.daily2hrDropListItem).toBeVisible()
        await this.daily2hrDropListItem.click()
        await expect(this.daily2hrText).toHaveText("2 hr")
        await this.page.waitForTimeout(2000)
    }


    // Section for Low Usage Weekly
    async verifyWeeklyTitle() {
        await expect(this.lowUsageWeeklyTitle).toBeVisible()
        await expect(this.lowUsageWeeklyTitle).toHaveText('Weekly')
    }

    async verifyWeeklySubtitle() {
        await expect(this.lowUsageWeeklySubtitle).toBeVisible()
        await expect(this.lowUsageWeeklySubtitle).toHaveText('Set Value lower than what you consider low')
    }

    async verifyWeeklyDropList() {
        await expect(this.lowUsageWeeklyDropList).toBeVisible()
        await expect(this.lowUsageWeeklyDropList).toBeEnabled()
    }

    async clickOnWeeklyDropList() {
        this.lowUsageWeeklyDropList.click()
        await expect(this.dropDownListPanel).toBeVisible()
        this.page.waitForTimeout(2000)
    }

    async selectOffDropListWeekly() {
        await expect(this.offDropListItem).toBeVisible()
        await this.offDropListItem.click()
        await expect(this.lowUsageWeeklyDropList).toHaveText("Off")
        await this.page.waitForTimeout(2000)
    }

    async select0hrDropListWeekly() {
        this.lowUsageWeeklyDropList.scrollIntoViewIfNeeded()
        await expect(this.weekly0hrDropListItem).toBeVisible()
        await this.weekly0hrDropListItem.click()
        await expect(this.weekly0hrText).toHaveText("0 hr")
        await this.page.waitForTimeout(2000)
    }

    async select4hrDropListWeekly() {
        this.lowUsageWeeklyDropList.scrollIntoViewIfNeeded()
        await expect(this.weekly4hrDropListItem).toBeVisible()
        await this.weekly4hrDropListItem.click()
        await expect(this.weekly4hrText).toHaveText("4 hr")
        await this.page.waitForTimeout(2000)
    }

    async select8hrDropListWeekly() {
        this.lowUsageWeeklyDropList.scrollIntoViewIfNeeded()
        await expect(this.weekly8hrDropListItem).toBeVisible()
        await this.weekly8hrDropListItem.click()
        await expect(this.weekly8hrText).toHaveText("8 hr")
        await this.page.waitForTimeout(2000)
    }

    async select12hrDropListWeekly() {
        this.lowUsageWeeklyDropList.scrollIntoViewIfNeeded()
        await expect(this.weekly12hrDropListItem).toBeVisible()
        await this.weekly12hrDropListItem.click()
        await expect(this.weekly12hrText).toHaveText("12 hr")
        await this.page.waitForTimeout(2000)
    }

    async select16hrDropListWeekly() {
        this.lowUsageWeeklyDropList.scrollIntoViewIfNeeded()
        await expect(this.weekly16hrDropListItem).toBeVisible()
        await this.weekly16hrDropListItem.click()
        await expect(this.weekly16hrText).toHaveText("16 hr")
        await this.page.waitForTimeout(2000)
    }

    // Section for Low Usage Monthly
    async verifyMonthlyTitle() {
        await expect(this.lowUsageMonthlyTitle).toBeVisible()
        await expect(this.lowUsageMonthlyTitle).toHaveText('Monthly')
    }

    async verifyMonthlySubtitle() {
        await expect(this.lowUsageMonthlySubtitle).toBeVisible()
        await expect(this.lowUsageMonthlySubtitle).toHaveText('Set Value lower than what you consider low')
    }

    async verifyMonthlyDropList() {
        await expect(this.lowUsageMonthlyDropList).toBeVisible()
        await expect(this.lowUsageMonthlyDropList).toBeEnabled()
    }

    async clickOnMonthlyDropList() {
        this.lowUsageMonthlyDropList.click()
        await expect(this.dropDownListPanel).toBeVisible()
        this.page.waitForTimeout(2000)
    }

    async selectOffDropListMonthly() {
        await expect(this.offDropListItem).toBeVisible()
        await this.offDropListItem.click()
        await expect(this.lowUsageMonthlyDropList).toHaveText("Off")
        await this.page.waitForTimeout(2000)
    }

    async select0hrDropListMonthly() {
        this.lowUsageMonthlyDropList.scrollIntoViewIfNeeded()
        await expect(this.monthly0hrDropListItem).toBeVisible()
        await this.monthly0hrDropListItem.click()
        await expect(this.monthly0hrText).toHaveText("0 hr")
        await this.page.waitForTimeout(2000)
    }

    async select20hrDropListMonthly() {
        this.lowUsageMonthlyDropList.scrollIntoViewIfNeeded()
        await expect(this.monthly20hrDropListItem).toBeVisible()
        await this.monthly20hrDropListItem.click()
        await expect(this.monthly20hrText).toHaveText("20 hr")
        await this.page.waitForTimeout(2000)
    }

    async select25hrDropListMonthly() {
        this.lowUsageMonthlyDropList.scrollIntoViewIfNeeded()
        await expect(this.monthly25hrDropListItem).toBeVisible()
        await this.monthly25hrDropListItem.click()
        await expect(this.monthly25hrText).toHaveText("25 hr")
        await this.page.waitForTimeout(2000)
    }

    async select30hrDropListMonthly() {
        this.lowUsageMonthlyDropList.scrollIntoViewIfNeeded()
        await expect(this.monthly30hrDropListItem).toBeVisible()
        await this.monthly30hrDropListItem.click()
        await expect(this.monthly30hrText).toHaveText("30 hr")
        await this.page.waitForTimeout(2000)
    }

    async select35hrDropListMonthly() {
        this.lowUsageMonthlyDropList.scrollIntoViewIfNeeded()
        await expect(this.monthly35hrDropListItem).toBeVisible()
        await this.monthly35hrDropListItem.click()
        await expect(this.monthly35hrText).toHaveText("35 hr")
        await this.page.waitForTimeout(2000)
    }

    // Section for Usage Report
    async verifyUsageReportTitle() {
        await expect(this.usageReportTitle).toBeVisible()
        await expect(this.usageReportTitle).toHaveText('Usage Report')
    }

    async verifyUsageReportDropList() {
        await expect(this.usageReportDropList).toBeVisible()
        await expect(this.usageReportDropList).toBeEnabled()
    }

    async clickOnUsageReportDropList() {
        this.usageReportDropList.click()
        await expect(this.dropDownListPanel).toBeVisible()
        this.page.waitForTimeout(2000)
    }

    async selectOffDropListUsageReport() {
        await expect(this.offDropListItem).toBeVisible()
        await this.offDropListItem.click()
        await expect(this.usageReportDropList).toHaveText("Off")
        await this.page.waitForTimeout(2000)
    }

    async selectDailyDropListUsageReport() {
        this.usageReportDropList.scrollIntoViewIfNeeded()
        await expect(this.dailyUsageDropListItem).toBeVisible()
        await this.dailyUsageDropListItem.click()
        await expect(this.dailyUsageReportText).toHaveText("Daily")
        await this.page.waitForTimeout(2000)
    }

    async selectWeeklyDropListUsageReport() {
        this.usageReportDropList.scrollIntoViewIfNeeded()
        await expect(this.weeklyUsageDropListItem).toBeVisible()
        await this.weeklyUsageDropListItem.click()
        await expect(this.weeklyUsageReportText).toHaveText("Weekly")
        await this.page.waitForTimeout(2000)
    }

    // Section for Runtime Reports
    async verifyRuntimeReportsTitle() {
        await expect(this.runtimeReportsTitle).toBeVisible()
        await expect(this.runtimeReportsTitle).toHaveText('Runtime Reports')
    }

    async verifyRuntimeReportsDropList() {
        await expect(this.runtimeReportsDropList).toBeVisible()
        await expect(this.runtimeReportsDropList).toBeEnabled()
    }

    async clickOnRuntimeReportsDropList() {
        this.runtimeReportsDropList.click()
        await expect(this.dropDownListPanel).toBeVisible()
        this.page.waitForTimeout(2000)
    }

    async selectOffDropListRuntimeReports() {
        await expect(this.offDropListItem).toBeVisible()
        await this.offDropListItem.click()
        await expect(this.runtimeReportsDropList).toHaveText("Off")
        await this.page.waitForTimeout(2000)
    }

    async selectDailyDropListRuntimeReports() {
        this.runtimeReportsDropList.scrollIntoViewIfNeeded()
        await expect(this.dailyRuntimeDropListItem).toBeVisible()
        await this.dailyRuntimeDropListItem.click()
        await expect(this.dailyRuntimeText).toHaveText("Daily")
        await this.page.waitForTimeout(2000)
    }

    async selectWeeklyDropListRuntimeReports() {
        this.runtimeReportsDropList.scrollIntoViewIfNeeded()
        await expect(this.weeklyRuntimeDropListItem).toBeVisible()
        await this.weeklyRuntimeDropListItem.click()
        await expect(this.weeklyRuntimeText).toHaveText("Weekly")
        await this.page.waitForTimeout(2000)
    }

    async selectMonthlyDropListRuntimeReports() {
        this.runtimeReportsDropList.scrollIntoViewIfNeeded()
        await expect(this.monthlyRuntimeDropListItem).toBeVisible()
        await this.monthlyRuntimeDropListItem.click()
        await expect(this.monthlyRuntimeText).toHaveText("Monthly")
        await this.page.waitForTimeout(2000)
    }

}
