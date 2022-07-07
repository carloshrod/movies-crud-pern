const { Pool } = require('pg');
const { DATABASE_URL } = require('./config');

const pool = new Pool({
    connectionString: DATABASE_URL,
    ssl: {
        rejectUnauthorized: false // Base de datos HerokuPostgres
    }
    // ssl: false // Base de datos Postgres local
});

module.exports = pool;