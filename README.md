# TestDocler
For running DoclerTestJSGherkin project you have the following prerequisites:

1. Visual Studio IDE -https://visualstudio.microsoft.com/de/downloads/
2. Install Node.js - https://nodejs.org/en/download/
3. npm install
4. npm init -y 
5. npm install cypress
6. npm install --save-dev cypress-cucumber-preprocessor
7. npx cypress run 
8. On the Cypress UI,select the Chrome browser and press "Run integration specs" option

**#Project's Structure**
C:.
|   .gitignore
|   cypress.json
|   package-lock.json
|   package.json
|   tree.txt
|   
+---cypress
|   +---fixtures
|   |       example.json
|   |       
|   +---integration
|   |   |   ErrorPage.feature
|   |   |   FormPage.feature
|   |   |   HomePage.feature
|   |   |   
|   |   \---step_definitions
|   |           ErrorPage.js
|   |           FormPage.js
|   |           HomePage.js
|   |           
|   +---plugins
|   |       index.js
|   |       
|   \---support
|       |   commands.js
|       |   index.js
|       |   
|       \---PageObjects
|               ErrorPage.js
|               FormPage.js
|               HomePage.js
|               
\---node_modules
