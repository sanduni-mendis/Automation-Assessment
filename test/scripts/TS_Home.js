
import LIB_HomePage from '../components/LIB_HomePage.js';
import LIB_Search from '../components/LIB_Search.js';
import config from "../../configuration.json" assert { type: "json" };
import dataTC01 from '../testdata/dt_home/dt_TC_01.json' assert { type: "json" };
import dataTC02 from '../testdata/dt_stay/dt_TC_02.json' assert { type: "json" };
import dataTC03 from '../testdata/dt_results/dt_TC_03.json' assert { type: "json" };
import LIB_SearchResults from '../components/LIB_SearchResults.js';
import { assert } from 'chai';


describe('Booking.com Test Suite', () => {
    it('TC01 Verify user can select Language and Currency type', async () => {

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
    );

    it('TC02 Verify user can select City, Duration and Occupancy on Stay and click on Search', async () => {

        //Typelocation in “Where are you going” text field. (E.g.: - Kandy)
        await LIB_Search.bc_EnterLocation(dataTC02.location);

        //Select the Check-in and Checkout
        await LIB_Search.bc_EnterCheckInCheckOutDates(dataTC02.daysforcheckout);
        //await LIB_Search.bc_EnterCheckInCheckOutDates(dataTC02.checkindate);

        //Select 1 adults and 0 children and 1 room and verify it
        await LIB_Search.bc_EnterOccupancyAndVerify();

        //Click on the Search button
        await LIB_Search.bc_ClickOnSearch();

    }
    );


    it('TC03 Verify searched location, add filter, sort results and select second item', async () => {

        //browser.url("https://www.booking.com/searchresults.html?ss=Kandy&ssne=Kandy&ssne_untouched=Kandy&label=gen173nr-1FCAEoggI46AdIM1gEaIUBiAEBmAExuAEXyAEM2AEB6AEB-AECiAIBqAIDuALgzO2lBsACAdICJGEzMjM2OGI3LTIwYWMtNDc3Mi1iMTU0LTlmMDg5OTFmZjU4NNgCBeACAQ&aid=304142&lang=en-us&sb=1&src_elem=sb&src=searchresults&dest_id=-2222251&dest_type=city&checkin=2023-07-23&checkout=2023-07-25&group_adults=1&no_rooms=1&group_children=0");
        //browser.maximizeWindow();

        //Verify the Search Location is correct
        await LIB_SearchResults.bc_VerifySearchedLocation();

        //Select the Star rating
        await LIB_SearchResults.bc_SelectStarRating(dataTC03.ratingvalue);

        //Select the sort by Price in top panel in search result
        await LIB_SearchResults.bc_SortProperties(dataTC03.sorttype);

        //Get the name and amount with the tax of the second item from the search List page.
        await LIB_SearchResults.bc_GetNameAndAmount();   

        
    }
    );

    it('TC04 Select a hotel, navigate to hotel page, select a room', async() => {

        //Click the second item from the search List page and navigate to the hotel Detail page and verify the hotel name.
        await LIB_SearchResults.bc_SelectHotelAndVerifyHotelName();




    })

}




)