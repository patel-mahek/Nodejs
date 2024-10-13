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