
Feature('Menu');
const { ADLOGIN } = inject();

Before((I) => {

});

Scenario('Azure AD Login  @Menu', (I) => {
  I.amOnPage('http://google.com')
  I.amOnPage('https://demo.dev.myday.cloud');
  I.wait(5);
  const DName1 = ('#Username');
  I.fillField(DName1, "QaTest");
 
    I.retry(5).SDLOGIN('QaTest1', 'testqa');
    I.wait(5);


});


Scenario('Home Dashboard  @Menu', (I) => {

  try {
    I.amOnPage('https://demo.dev.myday.cloud/dashboard/home');
    console.log('Home Dashboard Passed');
  } catch (error) {
    console.log('Home Dashboard Failed');
  }

});

Scenario('Home Dashboard Menu  @Menu', (I) => {

  I.amOnPage('https://demo.dev.myday.cloud/dashboard/home');
  I.acceptPopup();
  var Home = ('//h2[contains(., "Home")]');

  I.waitForElement(Home, 25);
  console.log('Home');
  I.waitForElement('//a[contains(., "Personalise")]', 5);
  console.log('Personalise');
  I.waitForElement('//span[contains(., "Edit")]', 5);
  console.log('Edit');
  I.waitForElement('md-notifications > div > button', 5);
  console.log('Notification');
  I.waitForElement("//button[@title = 'Help']", 5);
  console.log('Help');
  I.waitForElement("//button[@title = 'User menu']", 5);
  console.log('User Menu');
  I.waitForElement('div.md-header__side.md-header__side--right.md-theme-accent--header-sections > button > i', 5);
  console.log('Search');

});

Scenario('Home Dashboard Personalise @Menu', (I) => {

  I.amOnPage('https://demo.dev.myday.cloud/dashboard/home');

  var Personalise = ('//a[contains(., "Personalise")]');
  if (I.waitForElement('//a[contains(., "Personalise")]', 10)) {
    I.retry(5).click(Personalise);
    I.wait(5);
  } else {
    console.log('Failed');
  }
});
Scenario('Home Dashboard Personalise 1  @Menu', (I) => {
  // I.acceptPopup();
  I.waitForElement('#js-md-header__section--title > h2', 15);
  if (I.waitForElement('#js-md-header__section--title > h2', 15)) {
    console.log('Passed');
  } else {
    console.log('Failed');
  }
  I.waitForElement('//span[contains(., "Small")]', 5);
  console.log('Small Passed');
  I.waitForElement('//span[contains(., "Medium")]', 5);
  console.log('Medium Passed');
  I.waitForElement('//span[contains(., "Large")]', 5);
  console.log('Large Passed');
});

Scenario('Home Dashboard Personalise 2  @Menu', (I) => {

  I.waitForElement('//span[contains(., "Hidden tiles")]', 5);
  console.log('Hidden tiles Passed');
  I.waitForElement('//a[contains(., "Theme")]', 5);
  console.log('Theme Passed');
  I.waitForElement('//a[contains(., "Title position")]', 5);
  console.log('Title Position Passed');
  I.waitForElement('//a[contains(., "Gradient")]', 5);
  console.log('Gradient Passed');
  I.waitForElement('//a[contains(., "Border")]', 5);
  console.log('Border Passed');
  I.waitForElement('//a[contains(., "Scaling")]', 5);
  console.log('Scaling Passed');
  I.waitForElement('//a[contains(., "Animations")]', 5);
  console.log('Animations Passed');
  I.waitForElement('//a[contains(., "Reset settings")]', 5);
  console.log('Reset Settings Passed');
  I.waitForElement('//button[contains(., "Save")]', 5);
  console.log('Save Passed');

});

Scenario('Home Dashboard Edit  @Menu', (I) => {
  I.amOnPage('https://demo.dev.myday.cloud/dashboard/home');
  I.waitForElement('#js-md-header__section--title > h2', 15);

  var Edit = ('//span[contains(., "Edit")]');
  if (I.waitForElement('//span[contains(., "Edit")]', 15)) {
    console.log('Edit Passed');
    I.retry(5).click(Edit);
  } else {
    console.log('Edit Failed');
  }

  I.waitForElement('//a[contains(., "Settings")]', 5);
  console.log('Settings Passed');
  I.waitForElement('//a[contains(., "Layout")]', 5);
  console.log('Layout Passed');

});


Scenario('Home Dashboard  @Menu', (I) => {

  I.SIGNOUT();
});

Scenario('Compare CodeceptIO Home Page @visual-test', async (I) => {
  I.amOnPage('https://demo.dev.myday.cloud', 15);
  I.wait(10);
  I.saveScreenshot("Testimage.png");
  I.wait(1);
  I.seeVisualDiff("Testimage.png", { prepareBaseImage: true, tolerance: 2 });
});



