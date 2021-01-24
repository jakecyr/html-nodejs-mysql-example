const dotenv = require('dotenv');

dotenv.config();

const env = process.env;

module.exports = {
    port: env.PORT || 8080,
    database: env.CLEARDB_DATABASE_URL,
};
