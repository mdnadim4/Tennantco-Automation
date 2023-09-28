// Author: Nadim

import { Page } from '@playwright/test';
import CustomerAdminLoginPage from '../pages/CustomerAdminLoginPage';
import loginData from './loginData.json';

export default class Utils {
    page: any;

    async customerAdminLogin(page: Page) {

         const customerAdminLoginPage = new CustomerAdminLoginPage(page);

        // Go to customer admin login page
        await customerAdminLoginPage.goto()
    
        //Click on "Login with My Account" button
        await customerAdminLoginPage.verifyLoginAccountButton()
    
        //Enter Valid Username
        await customerAdminLoginPage.enterValidUsername(loginData.customerAdminLogin[0].valid.username)
    
        //Enter Valid Password
        await customerAdminLoginPage.enterInvalidPassword(loginData.customerAdminLogin[0].valid.password)
        
        //Click on Sign In button
        await customerAdminLoginPage.clickOnSignBtn()
    
    }

}

