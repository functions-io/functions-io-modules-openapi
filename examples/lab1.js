"use strict";

const core = require("functions-io-core");
const invokeFactory = core.buildInvokeFactory();
const context = invokeFactory.buildContext();

const moduleTest = require("../");

var message1 = {};
message1.moduleName = "@functions-io-labs/person.open";
message1.moduleVersion = "1.0.0";

moduleTest(message1, context).then(function(result){
    console.log("sucess! ", result);
}, function(err){
    console.log("err! ", err);
})