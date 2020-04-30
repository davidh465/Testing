

Feature('@smoke tests');

Before((I) => {
  I.amOnPage('https://demo.dev.myday.cloud');
});

let accounts = new dataTable(['login', 'password']); 
dataTableb.add(['davert', '123456']); 
dataTableb.add(['admin', '123456']);



Scenario('Test some crazy', accounts, (I, scenarioContext) => {
  I.fillField('Username', scenarioContext.login);
  I.fillField('Password', scenarioContext.password);
  I.click('Sign In');
  I.see('Welcome '+ scenarioContext.login);
});