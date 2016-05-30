exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['todo-spec.js'],
    //Capabilities to be passed to the webdriver instance.
    capabilities: {
        'browserName': 'chrome'
    },

    //Specify the name of the specs files.
    //specs: ['grid_spec.js'],

    //Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        onComplete: null,
        isVerbose: false,
        showColors: true,
        includeStackTrace: true
    }
};