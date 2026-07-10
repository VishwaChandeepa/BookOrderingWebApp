const sql = require("mssql");

const config = {
    server: process.env.DB_SERVER,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: Number(process.env.DB_PORT) || 1433,
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    },
    options: {
        encrypt: true,               // required for Azure SQL Database
        trustServerCertificate: false
    }
};

const poolPromise = new sql.ConnectionPool(config)
    .connect()
    .then(pool => {
        console.log("Connected to Azure SQL Database");
        return pool;
    })
    .catch(err => {
        console.error("Database connection failed:", err);
        // Re-throw so any query awaiting the pool fails loudly
        // instead of receiving `undefined`.
        throw err;
    });

module.exports = {
    sql,
    poolPromise
};
