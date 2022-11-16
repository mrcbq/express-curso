const mysql = require('mysql2/promise')

async function connectDB() {
    const connection = await mysql.createConnection({
        host: 'us-east.connect.psdb.cloud',
        user: 'c1xhomt7tuzym2wlzctm',
        password: 'pscale_pw_w4UwbCGScjphfQaqgS5QsM1YsNEgIytm7dFRY6YIXXJ',
        database: 'expressdb',
        ssl: {
            rejectUnauthorized: false
        }

    })

    const result = await connection.query('SELECT "Hello World" AS Result')
    console.log(result);
}

module.exports = connectDB
