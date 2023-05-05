const dotenv = require('dotenv');

dotenv.config();

const ENV_CONFIG = {
    DATABASE: process.env.DATABASE || '',
    DB_HOST: process.env.DB_HOST || '',
    DB_PASSWORD: process.env.DB_PASSWORD || '',
    PORT: process.env.PORT || 8080
}

module.exports = ENV_CONFIG;