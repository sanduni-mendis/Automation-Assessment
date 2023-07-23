import { expect } from 'chai';
import assert from 'node:assert';
import pg_SearchResults from '../pageobjects/pg_SearchResults.js';
import pg_HotelPage from '../pageobjects/pg_HotelPage.js';
import pg_Search from '../pageobjects/pg_Search.js';
import pg_HomePage from '../pageobjects/pg_HomePage.js';

let location = null;
let expectedLocation = null;

let hotelName = null;

class SearchResults {

    async bc_VerifySearchedLocation() {
        location = await pg_SearchResults.lbl_SearchedLocationName.getText();
        expectedLocation = "Kandy"
        expect(location).to.contains("Kandy");
        console.log("Selected Location:", location);
        assert.notStrictEqual(location, expectedLocation, "Location is correct");

    }

    async bc_SelectStarRating(prm_ratingValue) {
        /* await browser.pause(2000)
        if (pg_HomePage.btn_Alert.isDisplayed()) {
            pg_HomePage.btn_Alert.click();
        } */
        await browser.pause(2000)
        await browser.scroll(100, 1000);
        await pg_SearchResults.lst_PropertyRating.isDisplayed();
        await pg_SearchResults.chk_StarRating(prm_ratingValue).click();
        await browser.pause(5000);
    }

    async bc_SortProperties(prm_sortType) {
        await pg_SearchResults.dd_SortProperties.click();
        await pg_SearchResults.dd_SelectSortType(prm_sortType).click();
        await browser.pause(5000);
    }

    async bc_GetNameAndAmount() {
        const title = await pg_SearchResults.ele_SecondListName;
        console.log(title[1].getText());
        //console.log(await pg_SearchResults.ele_SecondListName.getText());

        const amount = await pg_SearchResults.ele_SecondListAmount;
        console.log(amount[1].getText());

        const tax = await pg_SearchResults.ele_SecondListTax;
        console.log(tax[1].getText());

    }

    async bc_SelectHotelAndVerifyHotelName() {
        const selectHotel = await pg_SearchResults.ele_SecondListName;
        const selectedHotel = selectHotel[1].getText();
        selectHotel[1].click();
        //await browser.pause(3000);

        
        //await browser.switchWindow('Show map');
        await browser.pause(5000);
        expect (await pg_HotelPage.lbl_selectedHotelName.isDisplayed()).to.exist;
        let newBrowser = await pg_HotelPage.lbl_selectedHotelName.getHTML(false);
        console.log(newBrowser);
        //hotelName = await pg_HotelPage.selectedHotelName.getText();
        assert.equal(selectedHotel, newBrowser, "Hotel name is correct");
    }


}
export default new SearchResults();