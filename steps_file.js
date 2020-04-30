
// in this file you can append custom step methods to 'I' object
const { I, registerPage } = inject();
module.exports = function () {
  return actor({

    ADLOGIN:  async function (username, password) {

      const { I } = inject();

      I.waitForElement('a.btn.login-aad', 30);

      var title = await I.grabTitle();
      var assert = require('assert');
      assert.equal(title, 'myday Login');
      I.retry(15).click('Azure AD');
      this.fillField('loginfmt', username);
      this.click('Next');
      this.wait(2);
      this.fillField('Password', password);
      I.retry(15).click('Sign in');
      I.retry(15).click('No');


    },
    API:function(){
         this({ method: 'get', url: 'http://alerts-functions-api.azurewebsites.net/api/get_alerts'})
    .then((serverResponse) => {
      const token = serverResponse.data.token
      if(token) {
        // sets token as an included header for all subsequent api requests
        this.defaults.headers.common.token = this.setToken(token)
        return jwtDecode(token)
      } else {
        return false
      }
    })
    },

    SDLOGIN: function (username, password) {
      const { I } = inject();
      I.waitForText('Username', 20);
      this.fillField({css: 'Username'}, username);
      this.wait(2);
      this.fillField('Password', password);
      this.click('Login');
      this.wait(5);
      
    },
    ADDTILE: function (addtile) {

      var AddBtn = ('//button[contains(., "Add")]');
      var SaveChanges = ('//span[contains(., "Save changes")]');
      var SaveAndPublish = ('//a[contains(., "Save and publish")]');


      const { I } = inject();
      this.wait(1);


      I.seeElement(addtile);
      I.retry(15).click(addtile);
      I.seeElement(AddBtn);
      I.retry(15).click(AddBtn);



    },

    SAVEANDPUBLISH: function () {

      var SaveChanges = ('//span[contains(., "Save changes")]');
      var SaveAndPublish = ('//a[contains(., "Save and publish")]');
      const { I } = inject();
      this.wait(1);
      I.retry(6).click(SaveChanges);
      I.retry(6).click(SaveAndPublish);
    },

    DELETETILE: function () {

      I.retry(5).click('div.tile__inner > header > i');
      I.retry(5).click('nav > a:nth-child(3) > i');
      I.retry(5).click('//button[contains(., "Yes, remove")]');
    },

    SIGNOUT: function () {
      const { I } = inject();
      I.waitForElement('md-user-menu > div > button');
      I.retry(15).click('.md-header__section .fa-user-circle-o');
      I.waitForText('Sign out');
      I.waitForElement('.dropdown-menu > li:nth-child(10) > a');
      I.retry(10).click('.dropdown-menu > li:nth-child(10) > a');
      I.retry(12).click('//button[contains(., "Yes, sign out")]');
    },

    NOTE: function () {
      const { I } = inject();
      I.waitForElement('//button[contains(., "Unread notifications")]', 5);
      this.wait(1);
      I.click('//button[contains(., "Unread notifications")]');
      this.wait(1);
    },
    NSETTINGS: function () {
      const { I } = inject();
      I.waitForElement('//span[contains(., "Settings")]', 10);
      I.click('//span[contains(., "Settings")]');
      I.retry(5).click('label.uiToggle.pull-right');
    },

    NSEND: function () {
      const { I } = inject();
      I.click('Send');
      this.wait(2);
      var Title = ('div:nth-child(2) > div > input');
      I.fillField(Title, 'Qa Test');

    },

    NMESS: function () {
      const { I } = inject();

      var Message = ('div:nth-child(3) > div > input');
      I.waitForElement(Message, 10);
      I.click(Message);
      I.fillField(Message, ' Qa Test');
      I.click('div:nth-child(6) > button');
    },

    HELP: function () {
      const { I } = inject();
      I.waitForElement('//button[contains(., "Help")]', 10);
      I.click('//button[contains(., "Help")]');
      I.wait(1);
      I.retry(10).click(' div._ir0vf._jfgu2');


    },

    USENAME: function () {
      const { I } = inject();
      I.retry(15).click('.md-header__section .fa-user-circle-o');
    },

    SEARCH: function () {
      const { I } = inject();
      I.waitForElement('//span[contains(., "Toggle search")]');
      I.retry(10).click('//span[contains(., "Toggle search")]');
      I.waitForElement('//span[contains(., "Toggle search")]');
      I.retry(10).click('//span[contains(., "Toggle search")]');
    },

    CREATEDASH: function () {
      const { I } = inject();
      I.click('div:nth-child(1) > a');



    },
    LINKS: function () {
      const { I } = inject();
      I.waitForElement('//h2[contains(., "Links")]', 15);
      if (I.waitForElement('//h2[contains(., "Links")]', 15)) {
        console.log('Links Passed');

      } else {
        console.log('Links Failed');
      }
    }


  });
}
