import { expect } from 'chai';
import  assert  from 'node:assert';
import pg_Search from '../pageobjects/pg_Search.js';
import dateManager from '../../infrastructure/dateManager.js'

let occupancy = null;
let expectedResults = null;

class Search {


    async bc_EnterLocation(prm_location) {
        expect(pg_Search.tf_Whereareyougoing()).to.exist;
        await pg_Search.tf_Whereareyougoing(prm_location).setValue(prm_location);
        //await browser.keys('Enter');
        await browser.pause(2000);

    }

    async bc_EnterCheckInCheckOutDates(prm_CheckOutDate) {
        await pg_Search.btn_ClickCalendar.click();
        await browser.pause(2000);
        const currentDate = dateManager.getCurrentDate();
        const formattedCurrentDate = currentDate.format("YYYY-MM-DD");
        await pg_Search.dtp_Checkin(formattedCurrentDate).click();
        await browser.pause(2000);
        const checkOutDate = currentDate.add(prm_CheckOutDate, "days");
        const formattedDate = checkOutDate.format("YYYY-MM-DD");
        await pg_Search.dtp_CheckOut(formattedDate).click();
        await browser.pause(2000);

    }

    async bc_EnterOccupancyAndVerify() {
        await pg_Search.dd_SelectOccupancy.click();
        await browser.pause(2000);
        await pg_Search.dd_SelectAdults.click();
        await pg_Search.dd_Done.click();
        await browser.pause(2000);

        occupancy = await pg_Search.dd_OccupanyResults.getText();
        expectedResults = "1 adult · 0 children · 1 room";
        if (expect(occupancy).to.equal(expectedResults)) {
            console.log('Selected Occupancy:', occupancy);
            assert.equal(occupancy, expectedResults, "Selected occupancy is correct");
            await browser.pause(2000);
        }

    }

    async bc_ClickOnSearch() {
        await pg_Search.btn_ClickSearch.click();
        await browser.pause(2000);
    }



}

export default new Search();