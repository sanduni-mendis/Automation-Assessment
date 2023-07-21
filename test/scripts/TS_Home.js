
import LIB_HomePage from '../components/LIB_HomePage.js';
import LIB_Search from '../components/LIB_Search.js';
import config from "../../configuration.json" assert { type: "json" };
import dataTC01 from '../testdata/dt_home/dt_TC_01.json' assert { type: "json" };
import dataTC02 from '../testdata/dt_stay/dt_TC_02.json' assert { type: "json" };


describe('Booking.com Test Suite', () => {
    /* it('TC01 Verify user can select Language and Currency type', async () => {

        //navigate to website
        browser.url(config.DefaultURL);
        browser.maximizeWindow();

        //Click on Language icon on top panel (Set it to English (UK))
        await LIB_HomePage.bc_SelectLanguage(dataTC01.language);

        //Click on Currency icon on top panel Set it to Australian Dollar (AUD)
        await LIB_HomePage.bc_SelectCurrency(dataTC01.currency);

        //Click on the “Stays” Tab on top panel.
        await LIB_HomePage.bc_ClickStayButton();

    }
    ); */

    it('TC02 Verify user can select City, Duration and Occupancy on Stay', async () => {

        //Typelocation in “Where are you going” text field. (E.g.: - Kandy)
        await LIB_Search.bc_EnterLocation(dataTC02.location);

        //Select the Check-in and Checkout
        

    


    }

    )


}




)