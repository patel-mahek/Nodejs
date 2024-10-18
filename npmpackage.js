//npm - globalcommand comes with a node
//npm --version

//local dependency - use only in particular porject
//npm i <package name>

//global dependency - use it in all projects
//npm install -g <packagename>  


// package.json maifest file stores inp info abt porject/package
//mannual approach
// npm init
// nmp init -y 
const _ = require('lodash')

const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)

//package json is used to track all the dependencies(packages) the one is using here 
//So whe one is pushing code to git no mode moudules are pushed but when pulling it if we justw rite the command - npm installit will install all the packages form the dependencies


//difference between the dev dependencies and dependencies 
// dev dependencies - > a type of npm package that are only needed during the development phase of a project, 
// while regular dependencies - > are required to run the application in production


//scripts
//if we just write "start":"node app.js", //so when we write npm start it willl strat runnign our app.js file

//nodemon is a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected

//npx = execute and its a package runner


