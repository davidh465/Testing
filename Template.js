
Feature('Template');
Scenario('Azure AD Login @Template', (I) => {

  I.amOnPage('https://test.mydaycloud.com');
  try {
    I.retry(5).SDLOGIN('QaTest1', 'testqa');
  } catch (error) {

    I.retry(5).ADLOGIN('Put Username Here', 'Put Password Here');
    console.log('Azure Login Failed');
  }

});
Scenario('Attendance Capture Step 1 @Template', (I) => {

});
Scenario('Attendance Capture Step 2 @Template', (I) => {

});
Scenario('Attendance Capture Step 3 @Template', (I) => {

});
Scenario('Attendance Capture Step 4 @Template', (I) => {

});
Scenario('Attendance Capture Step 5 @Template', (I) => {

});
