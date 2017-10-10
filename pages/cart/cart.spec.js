var CartPage = require('./cart.po.js');
var CommonPageElements = require('../common/common.po.js');

//create instance of the object
var commonPageElements = new CommonPageElements();
var cartPage = new CartPage();
describe('Cart Page', function(){
    
    beforeEach(function(){
        browser.get(browser.params.url);
    });
    afterEach(function(){
        browser.manage().deleteAllCookies();
    });
    it('should navigate to the cart and verify that its empty', function(){
        //var chatIcon = element(by.id('gnav-account-cart-description'));
        //var errorMessage = element(by.xpath('//div[@id="newempty"]//h2'));
        commonPageElements.chatIcon.click();
        expect(cartPage.errorMessage.getText()).toBe(cartPage.emptyCartNotificationMsg);
    });

});