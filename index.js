var isInitialized = false;


/*
 * Initialization method.
 * Adds script, queue and configuration or restarts Chatra if it is loaded
 */
var init = function (data) {
    var script = document.createElement('script');

    window.ChatraSetup = data.setup;
    window.ChatraID = data.chatraID;
    window.Chatra = window.Chatra || function () {
        // eslint-disable-next-line id-length
        (window.Chatra.q = window.Chatra.q || []).push(arguments);
    };

    if (!isInitialized) {
        isInitialized = true;
        script.async = true;
        script.src = 'https://call.chatra.io/chatra.js';

        if (document.head) document.head.appendChild(script);
    }
    else if (window.Chatra.restart) {
        window.Chatra('restart');
    }
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
        console.error("Please call Chatra('init') before calling " + method);
    }
};

module.exports = Chatra;
