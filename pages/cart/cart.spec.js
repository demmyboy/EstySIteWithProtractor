describe('Cart Page', function(){
    
    beforeEach(function(){
        browser.get(browser.params.url);
    });

    afterEach(function(){
        browser.manage().deleteAllCookies();
    });
    it('should navigate to the cart and verify that its empty', function(){

        var chatIcon = element(by.id('gnav-account-cart-description'));
        var errorMessage = element(by.xpath('//div[@id="newempty"]//h2'));

        chatIcon.click();
        expect(errorMessage.getText()).toBe('Your cart is empty.')
    })

});