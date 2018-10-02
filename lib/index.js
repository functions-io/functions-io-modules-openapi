"use strict";

module.exports = function(message, context){
    return new Promise(async function (resolve, reject){
        try {
            context.getManifestAsync(message.moduleName, message.moduleVersion).then(function(manifestObj){
                resolve(manifestObj);
            },function(errInvoke){
                reject(errInvoke);
            });
        }
        catch (errTry) {
            reject(errTry);
        }
    });
};