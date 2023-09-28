// Author: Nadim

import { test } from '@playwright/test'
import SetupPage from '../pages/SetupPage';

let setupPage: SetupPage;


test.describe('Verify Setup Page', async () => {

    test.beforeAll(async ({ browser }) => {

        const context = await browser.newContext()
        const page = await context.newPage()

        // Account Page Object Initiate
        setupPage = new SetupPage(page)

        // Verify the Customer Admin Login Page
        await setupPage.verifyCustomerAdminLoginPage()

        // Verify and Click on Profile Email Address
        await setupPage.verifyProfileEmailAddress()
        await setupPage.clickOnProfileIcon()

        // Verify and Click on Setting & Preferences
        await setupPage.verifySettingAndPreference()
        await setupPage.clickOnSettingAndPreference()

        // Verify Setup Tab Option
        await setupPage.verifySetupTab()

    })

    test('Test-01: Verify "Set up" page section title', async () => {

        // Verify visibility to all section title
        await setupPage.verifyVisibilityAllSectionTitle()

        // Verify the section title content
        await setupPage.verifyTitleContent()

        // Verify the title font case
        await setupPage.verifyTitleFontCase()

    })

    test('Test-02: Verify Subscription & Unsubscription email for critical alerts', async () => {

        // Verify Alert Email Address Input Field is Visible & Enable
        await setupPage.verifyAlertEmailInputField()

        // Input Valid Email Adresss to "Alert EMAIL ADDRESSES TO COPY"
        await setupPage.inputValidEmailAddress()

        // Click on Apply Change Button
        await setupPage.clickOnAlertApplyChangesBtn()

        // Click on "X" icon
        await setupPage.clickOnAlertDeleteIcon()

        // Click on Apply Change Button
        await setupPage.clickOnAlertApplyChangesBtn()

    })

    test('Test-03: Verify "GENERAL ALERTS" Section', async () => {

        // Verify "GENERAL ALERTS" Title
        await setupPage.verifyGeneralAlertsTitle()

        // Verify "GENERAL ALERTS" Subtitle
        await setupPage.verifyGeneralAlertsSubtitle()

    })

    test('Test-04: Verify "Machine Relocated" Section', async () => {

        // Verify the "Machine Relocated" title
        await setupPage.verifyMachineRelocatedTitle()

        // Verify the "Machine Relocated" sub-title
        await setupPage.verifyMachineRelocatedSubtitle()

        // Verify "Machine Relocated" dropdown list
        await setupPage.verifyMachineRelocatedDropList()

        // Select OFF List Option
        await setupPage.clickOnMachineDropList()
        await setupPage.selectOffDropListMachine()
        await setupPage.clickOnAlertApplyChangesBtn()

        // Select 0.5 Mile List Option
        await setupPage.clickOnMachineDropList()
        await setupPage.select05MileDropListMachine()
        await setupPage.clickOnAlertApplyChangesBtn()

        // Select 1 Mile List Option
        await setupPage.clickOnMachineDropList()
        await setupPage.select1MileDropListMachine()
        await setupPage.clickOnAlertApplyChangesBtn()

        // Select 3 Miles List Option
        await setupPage.clickOnMachineDropList()
        await setupPage.select3MilesDropListMachine()
        await setupPage.clickOnAlertApplyChangesBtn()

        // Select 10 Miles List Option
        await setupPage.clickOnMachineDropList()
        await setupPage.select10MilesDropListMachine()
        await setupPage.clickOnAlertApplyChangesBtn()

    })

    test('Test-05: Verify "No Charge Alert" Section', async () => {

        // Verify the "No Charge Alert" title
        await setupPage.verifyNoChargeTitle()

        // Verify the "No Charge Alert" sub-title
        await setupPage.verifyNoChargeSubtitle()

        // Verify "No Charge Alert" dropdown list
        await setupPage.verifyNoChargeDropList()

        // Select OFF List Option
        await setupPage.clickOnNoChargeDropList()
        await setupPage.selectOffDropListNoCharge()
        await setupPage.clickOnAlertApplyChangesBtn()

        // Select ON List Option
        await setupPage.clickOnNoChargeDropList()
        await setupPage.selectOnDropListNoCharge()
        await setupPage.clickOnAlertApplyChangesBtn()

    })

    test('Test-06: Verify "Opportunity Charge Alert" Section', async () => {

        // Verify the "Opportunity Charge Alert" title
        await setupPage.verifyOpportunityChargeTitle()

        // Verify the "Opportunity Charge Alert" sub-title
        await setupPage.verifyOpportunityChargeSubtitle()

        // Verify "Opportunity Charge Alert" dropdown list
        await setupPage.verifyOpportunityChargeDropList()

        // Select OFF List Option
        await setupPage.clickOnOpportunityChargeDropList()
        await setupPage.selectOffDropListOpportunity()
        await setupPage.clickOnAlertApplyChangesBtn()

        // Select ON List Option
        await setupPage.clickOnOpportunityChargeDropList()
        await setupPage.selectOnDropListOpportunity()
        await setupPage.clickOnAlertApplyChangesBtn()

    })

    test('Test-07: Verify "Charger Error" Section', async () => {

        // Verify the "Charger Error" title
        await setupPage.verifyChargerErrorTitle()

        // Verify the "Charger Error" sub-title
        await setupPage.verifyChargerErrorSubtitle()

        // Verify "Charger Error" dropdown list
        await setupPage.verifyChargerErrorDropList()

        // Select OFF List Option
        await setupPage.clickOnChargerErrorDropList()
        await setupPage.selectOffDropListCharger()
        await setupPage.clickOnAlertApplyChangesBtn()

        // Select ON List Option
        await setupPage.clickOnChargerErrorDropList()
        await setupPage.selectOnDropListCharger()
        await setupPage.clickOnAlertApplyChangesBtn()

    })

    test('Test-08: Verify "No Communication" Section', async () => {

        // Verify the "No Communication" title
        await setupPage.verifyNoCommunicationTitle()

        // Verify the "No Communication" sub-title
        await setupPage.verifyNoCommunicationSubtitle()

        // Verify "No Communication" dropdown list
        await setupPage.verifyNoCommunicationDropList()

        // Select 3 Days List Option
        await setupPage.clickOnNoCommunicationDropList()
        await setupPage.select3DaysDropListNoCommunication()
        await setupPage.clickOnAlertApplyChangesBtn()

        // Select 5 Days List Option
        await setupPage.clickOnNoCommunicationDropList()
        await setupPage.select5DaysDropListNoCommunication()
        await setupPage.clickOnAlertApplyChangesBtn()

        // Select 7 Days List Option
        await setupPage.clickOnNoCommunicationDropList()
        await setupPage.select7DaysDropListNoCommunication()
        await setupPage.clickOnAlertApplyChangesBtn()

        // Select 1 Day List Option
        await setupPage.clickOnNoCommunicationDropList()
        await setupPage.select1DayDropListNoCommunication()
        await setupPage.clickOnAlertApplyChangesBtn()

        // Select OFF List Option
        await setupPage.clickOnNoCommunicationDropList()
        await setupPage.selectOffDropListNoCommunication()
        await setupPage.clickOnAlertApplyChangesBtn()

    })

    test('Test-09: Verify "OTHER ALERTS" Section', async () => {

        // Verify "OTHER ALERTS" Title
        await setupPage.verifyOtherAlertsTitle()

        // Verify "OTHER ALERTS" Subtitle
        await setupPage.verifyOtherAlertsSubtitle()

    })

    test('Test-10: Verify "No Service Performed" Section', async () => {

        // Verify the "Service Request" title
        await setupPage.verifyNoServiceTitle()

        // Verify the "Service Request" sub-title
        await setupPage.verifyNoServiceSubtitle()

        // Verify "Service Request" dropdown list
        await setupPage.verifyNoServiceDropList()

        // Select OFF List Option
        await setupPage.clickOnNoServiceDropList()
        await setupPage.selectOffDropListNoService()
        await setupPage.clickOnAlertApplyChangesBtn()

        // Select 9 Months List Option
        await setupPage.clickOnNoServiceDropList()
        await setupPage.select9MonthDropListNoService()
        await setupPage.clickOnAlertApplyChangesBtn()

        // Select 12 Months List Option
        await setupPage.clickOnNoServiceDropList()
        await setupPage.select12MonthDropListNoService()
        await setupPage.clickOnAlertApplyChangesBtn()

        // Select 6 Month List Option
        await setupPage.clickOnNoServiceDropList()
        await setupPage.select6MonthDropListNoService()
        await setupPage.clickOnAlertApplyChangesBtn()

    })

    test('Test-11: Verify "Service Request" Section', async () => {

        // Verify the "Service Request" title
        await setupPage.verifyServiceRequestTitle()

        // Verify the "Service Request" sub-title
        await setupPage.verifyServiceRequestSubtitle()

        // Verify "Service Request" dropdown list
        await setupPage.verifyServiceRequestDropList()

        // Select OFF List Option
        await setupPage.clickOnServiceRequestDropList()
        await setupPage.selectOffDropListServiceRequest()
        await setupPage.clickOnAlertApplyChangesBtn()

        // Select ON List Option
        await setupPage.clickOnServiceRequestDropList()
        await setupPage.selectOnDropServiceRequest()
        await setupPage.clickOnAlertApplyChangesBtn()

    })

    test('Test-12: Verify "ABW Tank Empty" Section', async () => {

        // Verify the "Service Request" title
        await setupPage.verifyABWTankTitle()

        // Verify the "Service Request" sub-title
        await setupPage.verifyABWTankSubtitle()

        // Verify "Service Request" dropdown list
        await setupPage.verifyABWTankDropList()

        // Select OFF List Option
        await setupPage.clickOnABWTankDropList()
        await setupPage.selectOffDropListABW()
        await setupPage.clickOnAlertApplyChangesBtn()

        // Select ON List Option
        await setupPage.clickOnABWTankDropList()
        await setupPage.selectOnDropABWTank()
        await setupPage.clickOnAlertApplyChangesBtn()

    })

    test('Test-13: Verify "LOW USAGE" Section', async () => {

        // Verify "LOW USAGE" Title
        await setupPage.verifyLowUsageTitle()

        // Verify "LOW USAGE" Subtitle
        await setupPage.verifyLowUsageSubtitle()

    })

    test('Test-14: Verify Low Usage "Daily" Section', async () => {

        // Verify the "Daily" title
        await setupPage.verifyDailyTitle()

        // Verify the "Daily" sub-title
        await setupPage.verifyDailySubtitle()

        // Verify "Daily" dropdown list
        await setupPage.verifyDailyDropList()

        // Select OFF List Option
        await setupPage.clickOnDailyDropList()
        await setupPage.selectOffDropListDaily()
        await setupPage.clickOnUsageApplyChangesBtn()

        // Select "0 hr" List Option
        await setupPage.clickOnDailyDropList()
        await setupPage.select0hrDropListDaily()
        await setupPage.clickOnUsageApplyChangesBtn()

        // Select "0.5 hr" List Option
        await setupPage.clickOnDailyDropList()
        await setupPage.select05hrDropListDaily()
        await setupPage.clickOnUsageApplyChangesBtn()

        // Select "1 hr" List Option
        await setupPage.clickOnDailyDropList()
        await setupPage.select1hrDropListDaily()
        await setupPage.clickOnUsageApplyChangesBtn()

        // Select "1.5 hr" List Option
        await setupPage.clickOnDailyDropList()
        await setupPage.select1point5hrDropListDaily()
        await setupPage.clickOnUsageApplyChangesBtn()

        // Select "2 hr" List Option
        await setupPage.clickOnDailyDropList()
        await setupPage.select2hrDropListDaily()
        await setupPage.clickOnUsageApplyChangesBtn()

    })

    test('Test-15: Verify Low Usage "Weekly" Section', async () => {

        // Verify the "Weekly" title
        await setupPage.verifyWeeklyTitle()

        // Verify the "Weekly" sub-title
        await setupPage.verifyWeeklySubtitle()

        // Verify "Weekly" dropdown list
        await setupPage.verifyWeeklyDropList()

        // Select OFF List Option
        await setupPage.clickOnWeeklyDropList()
        await setupPage.selectOffDropListWeekly()
        await setupPage.clickOnUsageApplyChangesBtn()

        // Select "0 hr" List Option
        await setupPage.clickOnWeeklyDropList()
        await setupPage.select0hrDropListWeekly()
        await setupPage.clickOnUsageApplyChangesBtn()

        // Select "4 hr" List Option
        await setupPage.clickOnWeeklyDropList()
        await setupPage.select4hrDropListWeekly()
        await setupPage.clickOnUsageApplyChangesBtn()

        // Select "8 hr" List Option
        await setupPage.clickOnWeeklyDropList()
        await setupPage.select8hrDropListWeekly()
        await setupPage.clickOnUsageApplyChangesBtn()

        // Select "12 hr" List Option
        await setupPage.clickOnWeeklyDropList()
        await setupPage.select12hrDropListWeekly()
        await setupPage.clickOnUsageApplyChangesBtn()

        // Select "16 hr" List Option
        await setupPage.clickOnWeeklyDropList()
        await setupPage.select16hrDropListWeekly()
        await setupPage.clickOnUsageApplyChangesBtn()

    })

    test('Test-16: Verify Low Usage "Monthly" Section', async () => {

        // Verify the "Monthly" title
        await setupPage.verifyMonthlyTitle()

        // Verify the "Monthly" sub-title
        await setupPage.verifyMonthlySubtitle()

        // Verify "Monthly" dropdown list
        await setupPage.verifyMonthlyDropList()

        // Select OFF List Option
        await setupPage.clickOnMonthlyDropList()
        await setupPage.selectOffDropListMonthly()
        await setupPage.clickOnUsageApplyChangesBtn()

        // Select "0 hr" List Option
        await setupPage.clickOnMonthlyDropList()
        await setupPage.select0hrDropListMonthly()
        await setupPage.clickOnUsageApplyChangesBtn()

        // Select "20 hr" List Option
        await setupPage.clickOnMonthlyDropList()
        await setupPage.select20hrDropListMonthly()
        await setupPage.clickOnUsageApplyChangesBtn()

        // Select "25 hr" List Option
        await setupPage.clickOnMonthlyDropList()
        await setupPage.select25hrDropListMonthly()
        await setupPage.clickOnUsageApplyChangesBtn()

        // Select "30 hr" List Option
        await setupPage.clickOnMonthlyDropList()
        await setupPage.select30hrDropListMonthly()
        await setupPage.clickOnUsageApplyChangesBtn()

        // Select "30 hr" List Option
        await setupPage.clickOnMonthlyDropList()
        await setupPage.select35hrDropListMonthly()
        await setupPage.clickOnUsageApplyChangesBtn()

    })

    test('Test-17: Verify Subscription & Unsubscription email for Reports', async () => {

        // Verify Report Email Address Input Field is Visible & Enable
        await setupPage.verifyReportEmailInputField()

        // Input Valid Email Adresss to "Report EMAIL ADDRESSES TO COPY"
        await setupPage.inputValidReportEmailAddress()

        // Click on Apply Change Button
        await setupPage.clickOnReportApplyChangesBtn()

        // Click on "X" icon
        await setupPage.clickOnReportDeleteIcon()

        // Click on Apply Change Button
        await setupPage.clickOnReportApplyChangesBtn()

    })

    test('Test-18: Verify "Usage Report" Section', async () => {

        // Verify the "Usage Report" title
        await setupPage.verifyUsageReportTitle()

        // Verify "Usage Report" dropdown list
        await setupPage.verifyUsageReportDropList()

        // Select OFF List Option
        await setupPage.clickOnUsageReportDropList()
        await setupPage.selectOffDropListUsageReport()
        await setupPage.clickOnReportApplyChangesBtn()

        // Select "Weekly" List Option
        await setupPage.clickOnUsageReportDropList()
        await setupPage.selectWeeklyDropListUsageReport()
        await setupPage.clickOnReportApplyChangesBtn()

        // Select "Daily" List Option
        await setupPage.clickOnUsageReportDropList()
        await setupPage.selectDailyDropListUsageReport()
        await setupPage.clickOnReportApplyChangesBtn()

    })

    test('Test-19: Verify "Runtime Reports" Section', async () => {

        // Verify the "Runtime Reports" title
        await setupPage.verifyRuntimeReportsTitle()

        // Verify "Runtime Reports" dropdown list
        await setupPage.verifyRuntimeReportsDropList()

        // Select OFF List Option
        await setupPage.clickOnRuntimeReportsDropList()
        await setupPage.selectOffDropListRuntimeReports()
        await setupPage.clickOnReportApplyChangesBtn()

        // Select "Weekly" List Option
        await setupPage.clickOnRuntimeReportsDropList()
        await setupPage.selectWeeklyDropListRuntimeReports()
        await setupPage.clickOnReportApplyChangesBtn()

        // Select "Monthly" List Option
        await setupPage.clickOnRuntimeReportsDropList()
        await setupPage.selectMonthlyDropListRuntimeReports()
        await setupPage.clickOnReportApplyChangesBtn()

        // Select "Daily" List Option
        await setupPage.clickOnRuntimeReportsDropList()
        await setupPage.selectDailyDropListRuntimeReports()
        await setupPage.clickOnReportApplyChangesBtn()

    })


})