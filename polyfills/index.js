'use strict';

const fs = require('fs');
const path = require('path');

export const forceUiSettings = () => {
    const scriptPath = path.join(__dirname, 'force-ui-settings.js');
    const srcCode = fs.readFileSync(scriptPath);
    return srcCode;
};