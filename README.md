# tv-ipl

API automation repo
- [API Automation](#api-automation)
    - [Pre Requisites](#pre-reqs)
        - [Configure project](#configure-project)
    - [Test execution](#cypress-test-execution)
    - [Folder structure](#folder-structure
    - [Useful links](#useful-links)
    - [Note](#Note)


## Pre Requisites
### Configure project
1. Install nodejs on your machine if not present
2. Clone this repository
3. Run command `npm install`
4. Run `./node_modules/.bin/cypress open` 
5. Select e2e testing option and browser of your choice to open test-runner

## Test execution
1. Open terminal and run `npx cypress run --spec .\cypress\e2e\rcbTest.cy.js` to execute the tests
2. During developement if you wish to run a particular test , mark that test as 'it.only'

## Folder structure
1. fixtures - Contains Test data to be used in suites/tests. 
2. e2e - All the test files are added under this folder 
3. helpers - All healper functions to be added under this folder
4. screenshots - Screenshots for the failed tests are captured here 
5. support - Helper methods to support test execution 
6. videos - Videos of the passed tests are captured here 
7. package.json - Provides Metadata info and project dependencies. 


## Useful Links 
1. Cypress documentaion link can be found <a href = "https://docs.cypress.io/">here</a> 
2. For assertions , cypress uses Chai library. Details <a href = "https://www.chaijs.com/guide/">here</a> 
3. For reporting refer <a href = "https://docs.cypress.io/guides/tooling/reporters#Custom-reporter">here</a>   


### NOTE
1. Since only JSON response is provided and API is not ,have added response in fixtures as input data
2. First test under 'rcbTest.cy.js' is the format we can follow in case API url and details are provided
