var helper = require('../../helper');
var faker = require('faker');
var HomePage = require('./home.po.js');

// describe is used to describe what we are testing
describe('Main Page Test', function(){
    
    var homepage = new HomePage(); 

    beforeEach(function(){
        browser.get(browser.params.url);
    });

    afterEach(function(){
        browser.manage().deleteAllCookies();
    });
  
    var randomNameField = faker.name.firstName();
    var randomEmailField = faker.internet.email();
    var randomPassword = faker.internet.password();

    /* it('should have a title', function(){
        browser.get('http://juliemr.github.io/protractor-demo');

        expect(browser.getTitle()).toEqual('Super Calculator');
    }); */
    it('should have a title', function(){
        //browser.get(browser.params.url);
        //var pageTitle = "Etsy.com | Shop for anything from creative people everywhere";
        
        expect(browser.getTitle()).toEqual(homepage.pageTitle);
    });

    it('should sign-in and verify there is an error', function(){
        //browser.get(browser.params.url)
        var signInButton = element(by.id('sign-in'));
        var userNameField = element(by.id('username-existing'));
        var passWorldField = element(by.id('password-existing'));
        var submitButton = element(by.id('signin-button'))
        var wrongLogInWindow = element(by.xpath('//div[@class="msg msg-error"]'));
        var wrongLogInText = 'Please reset your password';
        
        signInButton.click();
        helper.waitUntilReady(userNameField);
        userNameField.sendKeys('test@test.com');
        passWorldField.sendKeys('test');
        submitButton.click();

        //var wrongLoginInError= wrongLogInWindow.getText();
        // to add an assertion 
        expect(wrongLogInWindow.getText()).toContain(wrongLogInText);

    });
    it('should register a new user', function(){
        //browser.get(browser.params.url);

        var registerButton = element(by.id('register'));
        var nameField = element(by.id('first-name'));
        var emailField = element(by.id('email'));
        var passwordEntryField = element(by.id('password'));
        var passwordEntryRepeat = element(by.id('password-repeat'));
        var registerSubmit = element(by.id('register_button'));

        registerButton.click();
        helper.waitUntilReady(nameField);
        nameField.sendKeys(randomNameField);
        emailField.sendKeys(randomEmailField);
        passwordEntryField.sendKeys(randomPassword);
        passwordEntryRepeat.sendKeys(randomPassword);
        registerSubmit.click();
    });
});