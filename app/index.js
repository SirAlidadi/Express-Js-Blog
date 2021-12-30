const express = require('express');
const app = express();

require('@start')(app, express);
require('@middlewares')(app);
require('@routes')(app);

module.exports = (port) => {
    app.listen(port, () => {
        console.log(`application listening on port ${port}`);
    });
}
