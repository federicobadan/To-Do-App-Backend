const { Pool, Client } = require("pg");
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'darron',
    port: 5432
});
pool.connect(err => {
    if (err) {
        console.error('connection error', err.stack)
    } else {
        console.log('connected')
    }
});
module.exports = {pool};