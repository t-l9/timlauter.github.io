exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['tests/spec.js'],
    multiCapabilities: [{
        browserName: 'chrome'
    }],
    jasmineNodeOpts: {
        isVerbose: true,
        showColors: true,
    }

}
