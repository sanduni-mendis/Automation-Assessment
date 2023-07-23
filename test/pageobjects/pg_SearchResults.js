class PGSearchResults{

get lbl_SearchedLocationName(){
    return $('//h1[@class="fcab3ed991 d5f78961c3"]');
}

get lst_PropertyRating(){
    return $('//*[@id="filter_group_class_:R1cq:" and @data-testid="filters-group"]')
}

chk_StarRating(idf_ratingValue){
    return $(`//input[@type='checkbox' and @name='${idf_ratingValue}']`);
}

get dd_SortProperties(){
    return $('//button[@data-testid="sorters-dropdown-trigger"]');
}

dd_SelectSortType(idf_sortType){
    return $(`//button[@data-id ='${idf_sortType}']`);
    
}

get lst_PropertyCard(){
    return $('//div[@data-testid="property-card"]');
}

get ele_SecondListName(){
    return $$('//div[@data-testid="title" and @class="fcab3ed991 a23c043802"]');
    //return $('#search_results_table > div:nth-child(2) > div > div > div.d4924c9e74 > div:nth-child(6) > div.d20f4628d0 > div.b978843432 > div > div:nth-child(1) > div > div.b1e6dd8416.aacd9d0b0a > div > div:nth-child(1) > div > h3 > a > div.fcab3ed991.a23c043802');
}

get ele_SecondListAmount(){
    return $$('//span[@data-testid="price-and-discounted-price" and @class="fcab3ed991 fbd1d3018c e729ed5ab6"]');

}

get ele_SecondListTax(){
    return $$('//div[@data-testid="taxes-and-charges" and @class="d8eab2cf7f c90c0a70d3"]');
}




}
export default new PGSearchResults();