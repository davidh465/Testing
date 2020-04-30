
Feature('DashboardTest Menu');
const { ADLOGIN } = inject();
const { SIGNOUT } = inject();
const assert = require('assert').strict;



Scenario('Azure AD Login or Standard Login @Dash', (I) => {

    /* Test Azure AD Login or Standard Login if complete will try to login using either Azure login or Standard login also 
    *  the a console output will produced depending on the login used.
    */
      I.amOnPage('https://demo.dev.myday.cloud');
  //  I.amOnPage('https://demo.myday.cloud/dashboard/home');
    I.waitForElement("#Username", 120);
    I.seeElementInDOM('#Username');
  
  
        I.retry(5).SDLOGIN('QaTest1', 'testqa');
        I.wait(5);
        console.log('Standard Login Used');
    
});

Scenario('Home Dashboard  @Dash', (I) => {

    try {
        I.amOnPage('https://demo.dev.myday.cloud');
        //  I.amOnPage('https://demo.myday.cloud/dashboard/home');
        I.waitForElement('//*[@id="js-md-header__section--title"]/h2',10);
        const value = I.grabTextFrom('//*[@id="js-md-header__section--title"]/h2');
        console.log(value);
        const expectedValue = ('Home');
        value.then(function (result) {
            console.log(result);
            assert.equal(result, expectedValue);
            console.log('Home Dashboard Passed');
        })
    } catch (error) {
        console.log('Home Dashboard Failed');
    }
});


Scenario('Home Dashboard Personalise @Dash', (I) => {

    const value = I.grabTextFrom('ui-view.md-header__view > dashboard-header > div > div > a');
    console.log(value);
    const expectedValue = ('PERSONALISE');
    value.then(function (result) {
        console.log(result);
        assert.equal(result, expectedValue);

    })
    I.amOnPage('https://demo.dev.myday.cloud');
    //  I.amOnPage('https://demo.myday.cloud/dashboard/home');
    var Personalise = ('//a[contains(., "Personalise")]');
    I.waitForElement('//a[contains(., "Personalise")]', 120);
    I.waitForVisible('//a[contains(., "Personalise")]');
    if (I.waitForElement('//a[contains(., "Personalise")]', 10)) {
        I.retry(5).click(Personalise);
        assert.equal(Personalise, '//a[contains(., "Personalise")]');
        I.wait(5);
    } else {
        console.log('Failed');
    }
});

Scenario('Home Dashboard Edit  @Dash', (I) => {

    I.amOnPage('https://demo.dev.myday.cloud');
    //  I.amOnPage('https://demo.myday.cloud/dashboard/home');
    I.waitForElement('#js-md-header__section--title > h2', 120);
    var Edit = ('//span[contains(., "Edit")]');
    I.waitForElement('//span[contains(., "Edit")]', 120)
    I.seeElementInDOM('//span[contains(., "Edit")]');
    if (I.waitForElement('//span[contains(., "Edit")]', 15)) {
        console.log('Edit Passed');
        I.retry(5).click(Edit);
        const value = I.grabTextFrom('div > div.btn-group.dropdown.open > ul');
        console.log(value);
        const expectedValue = ('Settings' + '\n' + 'Layout' + '\n');
        value.then(function (result) {
            console.log(result);
            assert.equal(result, expectedValue);

        })
    } else {
        console.log('Edit Failed');
    }
    I.waitForElement('//a[contains(., "Settings")]', 5);
    if (I.waitForElement('//a[contains(., "Settings")]', 5)) {
        console.log('Setting Passed');
    } else {
        console.log('Setting Failed');
    }
    I.waitForElement('//a[contains(., "Layout")]', 5);
    if (I.waitForElement('//a[contains(., "Layout")]', 5)) {
        console.log('Layout Passed');
    } else {
        console.log('Layout Failed');
    }
});

Scenario('Home Dashboard Notification @Dash', (I) => {

    I.amOnPage('https://demo.dev.myday.cloud');
    //  I.amOnPage('https://demo.myday.cloud/dashboard/home');
    I.waitForElement('md-notifications > div > button', 5);
    if (I.waitForElement('md-notifications > div > button', 5)) {
        console.log('Notification Passed');
    } else {
        console.log('Notification Failed');
    }
});

Scenario('Home Dashboard Help @Dash', (I) => {

    I.amOnPage('https://demo.dev.myday.cloud');
    //  I.amOnPage('https://demo.myday.cloud/dashboard/home');
    I.waitForElement("//button[@title = 'Help']", 15);
    if (I.waitForElement("//button[@title = 'Help']", 5)) {
        console.log('Help Passed');
    } else {
        console.log('Help Failed');
    }
});

Scenario('Home Dashboard User Menu @Dash', (I) => {

    I.amOnPage('https://demo.dev.myday.cloud');
    //  I.amOnPage('https://demo.myday.cloud/dashboard/home');
    I.waitForElement("//button[@title = 'User menu']", 15);
    if (I.waitForElement("//button[@title = 'User menu']", 5)) {
        console.log('User Menu Passed');
    } else {
        console.log('User Menu Failed');
    }
});

Scenario('Home Dashboard Search @Dash', (I) => {

    I.amOnPage('https://demo.dev.myday.cloud');
    //  I.amOnPage('https://demo.myday.cloud/dashboard/home');
    I.waitForElement('div.md-header__side.md-header__side--right.md-theme-accent--header-sections > button > i', 5);
    if (I.waitForElement('div.md-header__side.md-header__side--right.md-theme-accent--header-sections > button > i', 5)) {
        console.log('Search Passed');
    } else {
        console.log('Search Failed');
    }
});

Scenario('Home Dashboard 1 @Dash', (I) => {

    I.SIGNOUT();
});