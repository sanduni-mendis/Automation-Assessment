
import { expect } from 'chai';
import pg_HomePage from '../pageobjects/pg_HomePage.js';



class Home {

    async bc_SelectLanguage(prm_language) {
        expect(pg_HomePage.btn_Language.isDisplayed()).to.exist;
        await pg_HomePage.btn_Language.click();
        await browser.pause(2000)
        if (pg_HomePage.btn_Alert.isDisplayed()) {
            pg_HomePage.btn_Alert.click();
        }

        await browser.pause(2000)
        await pg_HomePage.ele_Language(prm_language).click();
    }

    async bc_SelectCurrency(prm_currency) {
        expect(pg_HomePage.btn_Currency.isDisplayed()).to.exist;
        await pg_HomePage.btn_Currency.click();
        await browser.pause(2000)

        await pg_HomePage.ele_Currency(prm_currency).click();
    }

    async bc_ClickStayButton() {
        await pg_HomePage.btn_Stays.click();
    }

    async bc_ClickOnLogo() {
        await pg_HomePage.btn_Logo.click();
    }

}

export default new Home();