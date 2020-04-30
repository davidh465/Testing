
Feature('Parallel');

Scenario('test something Dash', (I) => {
    I.amOnPage('https://demo.dev.myday.cloud');
    I.wait(5);
    I.waitForElement("#Username", 120);
    I.seeElementInDOM('#Username');
    try {
        I.retry(5).SDLOGIN('QaTest1', 'testqa');
        I.wait(5);
        console.log('Standard Login Used');
     
    } catch (error) {
        I.retry(5).ADLOGIN('admin@mydaydemo.onmicrosoft.com','sE8YJNx4JFVVFwzXgki7NCnQ');
        console.log('Azure Login Used');
        I.wait(5);
    }
    I.waitForElement('h2', 10);
});
Scenario('test something Sidebar', async function (I)  {
    I.amOnPage('https://demo.dev.myday.cloud');
    I.wait(5);
        I.retry(15).ADLOGIN('admin@mydaydemo.onmicrosoft.com','sE8YJNx4JFVVFwzXgki7NCnQ');
        console.log('Azure Login Used');
        I.wait(5);
     
 
  
});
