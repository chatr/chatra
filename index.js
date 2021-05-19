/*
 * Initialization method. Adds script, queue and configuration
 */
var init = function (data) {
    var script = document.createElement('script');

    window.ChatraSetup = data.setup;
    window.ChatraID = data.chatraID;
    window.Chatra = window.Chatra || function () {
        // eslint-disable-next-line id-length
        (window.Chatra.q = window.Chatra.q || []).push(arguments);
    };

    script.async = true;
    script.src = 'https://call.chatra.io/chatra.js';

    if (document.head) document.head.appendChild(script);
};


/*
 * Main function which calls methods depending on its type
 */
var Chatra = function (method, data) {
    if (method === 'init') {
        if (!data.chatraID) {
            console.error('You must pass chatraID as argument to initialize Chatra');

            return;
        }

        init({
            chatraID: data.chatraID,
            config: data.setup
        });
    }
    else if (window.Chatra) {
        window.Chatra(method, data);
    }
    else {
        console.error("Please call Chatra('call') before calling " + method);
    }
};

module.exports = Chatra;
