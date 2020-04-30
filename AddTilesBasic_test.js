

Feature('SecondTest');
const { ADLOGIN } = inject();
const  DName = ('ng-form > button > i');
const Edit = ('//button[contains(., "Edit")]');
const LayOut = ('//li[contains(., "Layout")]');

const Audience = ('//h2[contains(., "Attendance")]');
const AzureAD = ('//h2[contains(., "Azure AD Sync")]');
const Balance = ('//h2[contains(., "Balance")]');
const Banner = ('//h2[contains(., "Banner")]');
const Calendar = ('//h2[contains(., "Calendar")]');
const ContentTile = ('//h2[contains(., "Content Tile")]');
const Courses = ('//h2[contains(., "Courses")]');
const EvaSysSurveys = ('//h2[contains(., "EvaSys Surveys")]');
const Facebook = ('//h2[contains(., "Facebook")]');
const Gmail = ('//h2[contains(., "Gmail")]');
const Helpdesk = ('//h2[contains(., "Helpdesk")]');
const IdentityM = ('//h2[contains(., "Idenetity Management")]');
const Labstats = ('//h2[contains(., "Labstats")]');
const Library = ('//h2[contains(., "Library")]');
const Mail = ('//h2[contains(., "Mail")]');
const Map = ('//h2[contains(., "Maps")]');
const MyAlerts = ('//h2[contains(., "My Alerts")]');
const MyBookmarks = ('//h2[contains(., "My Bookmarks")]');
const Newrooms = ('//h2[contains(., "Newsroom")]');
const OAuth = ('//h2[contains(., "OAuth Management")]');
const PC = ('//h2[contains(., "PC Availability")]');
const People = ('//h2[contains(., "People")]');
const PeopleSearch = ('//h2[contains(., "People Search")]');
const Primo = ('//h2[contains(., "Primo Search")]');
const StaticTile = ('//h2[contains(., "Static Tile")]');
const Tasks = ('//h2[contains(., "Tasks")]');
const Twitter = ('//h2[contains(., "Twitter")]');
const VideoTile = ('//h2[contains(., "Video Tile")]');
Before((I) => {

});

Scenario('Azure AD Login', (I) => {

    I.amOnPage('https://demo.dev.myday.cloud/');

    try {
     //  I.ADLOGIN();
       I.retry(5).SDLOGIN('QaTest1', 'testqa');
    } catch (error) {

        console.log('Login Failed');
    }

});

Scenario('Add Tile', (I) => {

  
    ////////////////////////////////////////////
  
    I.amOnPage('https://demo.dev.myday.cloud/dashboard/qatest');
    I.wait(10);
    I.waitForElement(Edit,120);
    I.retry(15).click(Edit);
    I.waitForElement(LayOut,20);
    I.retry(15).click(LayOut);s
    var AddTile = ('//a[contains(., "Add a tile")]');
    I.retry(10).click(AddTile);
    I.ADDTILE (Audience);

  //  I.waitForElement(Edit);
  //  I.retry(15).click(Edit);
 //   I.retry(15).click(LayOut);
    I.click(Calendar);
    I.retry(4).ADDTILE(Calendar);
    I.wait(1);

 //   I.waitForElement(Edit);
 //   I.retry(15).click(Edit);
  //  I.retry(15).click(LayOut);
    I.click(Tasks);
    I.retry(4).ADDTILE(Tasks);
    I.wait(1);

  //  I.waitForElement(Edit);
 //   I.retry(15).click(Edit);
 //   I.retry(15).click(LayOut);
    I.click(Library);
    I.retry(4).ADDTILE(Library);
    I.wait(1);

//    I.waitForElement(Edit);
//   I.retry(15).click(Edit);
 //   I.retry(15).click(LayOut);
//    I.click(Primo);
//    I.retry(4).ADDTILE(Primo);
 //   I.wait(1);

//    I.waitForElement(Edit);
//    I.retry(15).click(Edit);
 //   I.retry(15).click(LayOut);
    I.click(StaticTile);
    I.retry(4).ADDTILE(StaticTile);

 I.SAVEANDPUBLISH();
    I.wait(5);
});


Scenario('Remove Tile', (I) => {
    
    var Edit = ('//button[contains(., "Edit")]');
    var LayOut = ('//li[contains(., "Layout")]');
    I.retry(15).click(Edit);
    I.retry(15).click(LayOut);
    I.DELETETILE().retry(5);
    I.DELETETILE();
    I.SAVEANDPUBLISH();
});
/*
Scenario('Add Tiles', (I) => {

    var Edit = ('//button[contains(., "Edit")]');
    ////////////////////////////////////////////
    I.amOnPage('https://demo.dev.myday.cloud/dashboard/qatest');
    I.retry(15).click(Edit);

});

Scenario('Edit Tiles', (I) => {

    var Edit = ('//button[contains(., "Edit")]');
    ////////////////////////////////////////////
    I.amOnPage('https://demo.dev.myday.cloud/dashboard/qatest');
    I.retry(15).click(Edit);
    
});


Scenario('Remove Tiles', (I) => {

    var Edit = ('//button[contains(., "Edit")]');
    ////////////////////////////////////////////
    I.amOnPage('https://demo.dev.myday.cloud/dashboard/qatest');
    I.retry(15).click(Edit);

});
*/
Scenario('Delete Dashboard', (I) => {


    var Edit = ('//button[contains(., "Edit")]');
    var Settings = ('//li[contains(., "Settings")]');
    var Delete = ('//button[contains(., "Delete this dashboard")]');
    var DeleteBtn = ('//button[contains(., "Delete")]');
    var DeleteT = ('div.toast-title');
    /////////////////////////////////////////////////////////////////////////////
    I.wait(2);
    I.amOnPage('https://demo.dev.myday.cloud/dashboard/qatest');
    I.retry(15).click(Edit);
    I.retry(15).click(Settings);
    I.waitForText('Delete');
    I.retry(15).click(Delete);
    I.waitForText('Delete');
    I.retry(15).click(DeleteBtn);
    I.wait(6);
    I.waitForElement('md-user-menu > div > button');
    I.SIGNOUT();
});





