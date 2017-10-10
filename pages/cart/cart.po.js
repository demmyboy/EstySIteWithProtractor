var CartPage = function(){
    this.errorMessage = element(by.xpath('//div[@id="newempty"]//h2'));
    this.emptyCartNotificationMsg ='Your cart is empty.';
}
// used to allow reference for this page (the page can be interacted with ) 
module.exports= CartPage;