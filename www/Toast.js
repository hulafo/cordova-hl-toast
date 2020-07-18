var exec = require('cordova/exec');

// exports.coolMethod = function (arg0, success, error) {
//     exec(success, error, 'Toast', 'coolMethod', [arg0]);
// };
var hlToast = function() {
    console.log('AndroidToast instanced');
};

hlToast.prototype.show = function(msg, onSuccess, onError) {
    var errorCallback = function(obj) {
        onError(obj);
    };

    var successCallback = function(obj) {
        onSuccess(obj);
    };

    exec(successCallback, errorCallback, 'hlToast', 'show', [msg]);
};

if (typeof module != 'undefined' && module.exports) {
    module.exports = AndroidToast;
}