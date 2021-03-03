
var __configureChartSettings = function () {
    var SETTINGS_KEY = 'resultsChartSetting';
    var DEFAULT_SETTINGS = { 
        sizeToFit: false,
        sizeColumnsToFit: true,
        autoSizeAllColumns: false
    }
    // ? - Check if resultsChartSetting exists in local
    if(!!window.localStorage.getItem(SETTINGS_KEY)){
        // ? - merge existing settings with defaults
        var currSettings = JSON.parse(window.localStorage.getItem(SETTINGS_KEY));
        window.localStorage.setItem(SETTINGS_KEY, { ...currSettings, sizeToFit: false, })
    } else{
        // ? - Force default settings
        window.localStorage.setItem(SETTINGS_KEY, JSON.stringify(DEFAULT_SETTINGS))
    }
};

// ? Run the configure function, every second
setTimeout(__configureChartSettings, 1000);