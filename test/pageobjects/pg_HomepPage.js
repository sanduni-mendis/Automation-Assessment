class PGHomePage {

    get btn_Alert() {
        return $('//button[@aria-label="Dismiss sign-in info."]');
    }


    get btn_Language() {
        //return $('button[data-testid="header-language-picker-trigger"]');
        return $('//*[@data-testid="header-language-picker-trigger"]')
    }

    ele_Language(idf_language) {
        return $(`//span[text()='${idf_language}']`);
    }


    get btn_Currency() {
        return $('button[data-testid="header-currency-picker-trigger"]');
    }

    ele_Currency(idf_currency) {
        return $(`//span[text()='${idf_currency}']`);
    }

    get btn_Stays() {
        return $('//a[@id="accommodations"]');
    }


}

export default new PGHomePage();


