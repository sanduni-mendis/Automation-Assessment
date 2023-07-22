class PGSearch {

    tf_Whereareyougoing() {
        return $('//*[@id = ":Ra9:"]')

    }

    get btn_ClickCalendar() {
        return $('//*[@data-testid="date-display-field-start"]');
        //return $ ('//div[@class="b91c144835"]');

    }   

    dtp_Checkin(idf_checkindate) {
        return $(`//span[@tabindex="-1" and @data-date='${idf_checkindate}']`)
        //return $ ('//span[@class="b21c1c6c83"]');
        //return $('//button[@data-testid="date-display-field-start"]');
        //*[@data-testid="searchbox-datepicker-calendar"]

    }


    dtp_CheckOut(idf_checkOutDate) {
        return $(`//span[@tabindex="-1" and @data-date='${idf_checkOutDate}']`);   
        //return $ ("//span[@class='b21c1c6c83']");
    }    


    get dd_SelectOccupancy(){
        return $('//button[@data-testid="occupancy-config"]');
        //return $("//div[@class ='e98c626f34']//button[1]")

    }

    get dd_SelectAdults(){
        return $('//button[@class="fc63351294 a822bdf511 e3c025e003 fa565176a8 f7db01295e c334e6f658 e1b7cfea84 cd7aa7c891"]');
    }

    get dd_Done(){
        return $('//button[@class= "fc63351294 a822bdf511 e2b4ffd73d f7db01295e c938084447 a9a04704ee d285d0ebe9"]')
    }

    get dd_OccupanyResults(){
        return $('// button[@data-testid="occupancy-config" and @class="d47738b911 b7d08821c3"]');
    }

    get btn_ClickSearch(){
        return $('//span[text()="Search"]')

    }



}

export default new PGSearch();