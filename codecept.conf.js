exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'http://localhost',
      browser: 'chrome',
      host: '127.0.0.1',
      port: 8080,
      waitForTimeout: 5000,
      show: true,
      restart: false,
      keepCookies: true,
      // keepBrowserState: true,
      windowSize: "maximize",
      browser: 'chrome',
      chrome: {
        args: ['--no-sandbox', '--window-size=1520,910'],



     //    args: [ "--headless", "--disable-gpu", "--window-size=800,600" ]
    }
  },
  
  },
    plugins: {
    wdio: {
      enabled: true,
     
      services: ['selenium-standalone'],
    }
  
},
multiple: {

  Smoke: {
  
        grep: '@Dash',
  
        browsers: [
  
          'firefox',
  
         
  
        ],
  
      },
      basic: {
  
        grep: '@Sidebar',
  
        browsers: [
  
        
  
          'chrome',
         
        ],
  
      },
	   basic: {
  
        grep: '@Sidebar',
  
        browsers: [
  
        
  
          'microsoft edge',
         
        ],
  
      },
      
      basic1: {
  
        grep: '@Menu',
  
        browsers: [
  
        
  
          'internet explorer',
         
        ],
  
      },
    },
  
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'WebDriverTest'
}