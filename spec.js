var ss = require ('fs')

describe ('Functional TCs',function () {
  

 it ('TC_LOGIN_001',function() {
  
     browser.get('http://dev.efp.com')
     
     userName = element(by.name('email'));
     userName.sendKeys('rso@ciklum.com');
     password = element(by.name('password'));
     password.sendKeys('Ciklum123');
     btn = element(by.className("btn btn-primary btn-block")).click();
      plusicon = element(by.xpath("/html/body/app-root/section/app-side-bar/aside/nav/ul/li[4]/i")).click();
      prlist = element(by.xpath("/html/body/app-root/app-grievance/div/div/div/div/div/form/fieldset/div/div/div[1]/div/div/select/option[2]")).click();
      descbox = element(by.className('form-control ng-untouched ng-pristine ng-invalid'));
      descbox.sendKeys('This is a test message');
      sendbtn = element(by.className('save-btn')).click();
      toprow = element(by.xpath('/html/body/app-root/app-grievance-list/section/div[2]/div/div/div/div/form/fieldset/div/div/fieldset/div[2]/div/table/tbody/tr[2]/td[1]')).click();
      expect (element(by.xpath('/html/body/app-root/app-grievance-forum/section/div/div/div/div/div/form/fieldset/div/div/ul/li/div[2]/pre')).getText()).toEqual ('This is a test message');
  
 })
//     //var foo = element(by.xpath("$x('//li[@class='profile-name']')"));
//     //expect ((foo.gettext).tobe("Muhammad Ali"));
//    // expect (foo.gettext).toEqual("Muhammad Ali");
//    //LoginUserName = element(by.className("profile-name")).getText();
//    expect(element(by.className("profile-name")).getText()).toEqual("Muhammad Ali");
//   }
//   )
  //   beforeEach(function() {
  // originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
  // jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
  // } );
   //it ('TC_DDM_001',function() {
    //browser.waitForAngularEnabled(false)
   // browser.get('https://www.nyu.edu/');
    
//element (by.linkText("Graduate Admissions"));
       //element(by.className ('in-this-section-menu')).last().click();

      //  var EC = protractor.ExpectedConditions;
      //  browser.wait(EC.visibilityOf(element(by.className('main-navigation-menu-link-title'))), 90000);
      // var first = element(by.className('main-navigation-menu-link-title'));
      // first.click();
     //var first = element(by.className ('inner-header')).element(by.className('main-navigation-menu-link-title'));
     //first.click();
    //element(by.cssContainingText('.main-navigation-menu-link-title','Graduate Admissions')).click();
   //})
}
)
    //browser.sleep(10000)
    
  //  if  (element(by.xpath("/html/body/app-root/app-header/div/div/div/div/div[2]/ul/li[4]/text()"))=="Muhammad Ali");
   // { 
      //  console.log('test passed');
      
   // }
    // else{
    //     browser.takeScreenshot().then(function(fullpage)
    //     {
            
    //         var stream = ss.createWriteStream ('./ss.png');
    //         stream.write(new Buffer (fullpage, 'base64'));
    
    //         stream.end();
            
    //     })
    // }
    
    //btn.click(element(by.xpath("/html/body/app-root/app-login/html/body/div/div[2]/div/div/div[2]/div/form/div[1]/span")));
    


// it ('TC_LOGIN_002',function() {
//     browser.manage().window().maximize();
//     browser.get('http://dev.efp.com');

//     userName = element(by.name('email')).sendKeys('rs@ciklum.com');
//     password = element(by.name('password')).sendKeys('Ciklum123');
//     btn = element(by.className("btn btn-primary btn-block")).click();
//     browser.sleep(5000) 
   
//     if (document.URL==http:dev.efp.com/EFP#/Dashboard)
//     browser.exit();
//     else
   
//     browser.takeScreenshot().then(function(fullpage)
//     {
        
//         var stream = ss.createWriteStream ('./ss1.png');
//         stream.write(new Buffer (fullpage, 'base64'));

//         stream.end();
        
//     } 

// })
