var helper = require('../../helper');

describe('Search Page', function(){
    
    beforeEach(function(){
        browser.get(browser.params.url);
        browser.manage().window().maximize();
    });

    afterEach(function(){
        browser.manage().deleteAllCookies();
    });
    it('should search for a vinyl item', function(){
        var searchField = element(by.id('search-query'));
        var submitButtonClick = element(by.xpath('//button[@type="submit"]'));
        //var confirmSearch = element(by.xpath('//*[@id="content"]/div/div[1]/div/div/div[2]/div[2]/div[2]/div[1]/a/div[2]/p[1]/text()'));
        searchField.sendKeys('Vinyl');
        submitButtonClick.click();
        //helper.waitUntilReady(confirmSearch);
        //confirmSearch.click();
    });
});