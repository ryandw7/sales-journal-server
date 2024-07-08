const { Client } = require('pg');
require('dotenv').config({ path: require('find-config')('.env') })

const {USER, PASSWORD, HOST } = process.env;
const client = new Client({
    user: `${USER}`,
    password: `${PASSWORD}`,
    host: `${HOST}`,
    port: 5432,
    database: 'postgres'
});


client.connect().then(process.stdout.write('Successfully connected to Movies!\n')).catch(err => console.log(err));

process.stdin.on('data', (data) => {
    const formatted = data.toString().trim();
    if (formatted === 'abort') {
        process.stdout.write('Ending client session...\n\n');
        setTimeout(() => {
            process.stdout.write('Goodbye\n')
            client.end();
            process.exit();
        }, 3000)
    }
});


module.exports = client;


