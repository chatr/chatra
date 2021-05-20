var isInitialized = false;


/*
 * Initialization method.
 * Adds script, queue and configuration or restarts Chatra if it is loaded
 */
var init = function (data) {
    var script = document.createElement('script');

    window.ChatraIntegration = data.integration;
    window.ChatraSetup = data.setup;
    window.ChatraID = data.ID;
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
        if (!data || !data.ID) {
            console.error('You must pass ID as argument to initialize Chatra');

            return;
        }

        init({
            integration: data.integration,
            setup: data.setup,
            ID: data.ID
        });
    }
    else if (window.Chatra) {
        window.Chatra.apply(this, arguments);
    }
    else {
        console.error("Please call Chatra('init', config) before calling " + method);
    }
};

module.exports = Chatra;
