class PGHotelPage{

ele_hotelPage(){
    //return $('//link[contains(@rel,"canonical") and contains(@href,"www")]');
    return $('//div[@id="hp_hotel_name"]');
}

get lbl_selectedHotelName(){
    return $('//*[@class="d2fee87262 pp-header__title"]');
}


}
export default new PGHotelPage();