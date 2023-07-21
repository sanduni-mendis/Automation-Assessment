import { expect } from 'chai';
import pg_Search from '../pageobjects/pg_Search.js';


class Search {
    
    
    async bc_EnterLocation(prm_location){
        expect(pg_Search.tf_whereareyouging.isDisplayed()).to.exist;
        await pg_Search.tf_Whereareyougoing(prm_location).addValue(prm_location);
        await browser.pause(2000);

    }



}

export default new Search();