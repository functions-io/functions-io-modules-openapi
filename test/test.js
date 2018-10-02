"use strict";

const core = require("functions-io-core");
const invokeFactory = core.buildInvokeFactory();
const context = invokeFactory.buildContext();

const assert = require("assert");
const moduleTest = require("../");

var message1 = {};
message1.moduleName = "@functions-io-labs/person.open";
message1.moduleVersion = "1.0.0";

moduleTest(message1, context).then(function(result){
    assert.strictEqual(result.packageObj.name, "@functions-io-labs/person.open");
}, function(err){
    assert.strictEqual(err, null);
})