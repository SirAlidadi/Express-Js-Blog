require('dotenv').config();
require('module-alias/register');

const app = require('@root');
app(process.env.APP_PORT);
