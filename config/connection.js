const { Pool, Client } = require('pg');
const DATABASEURI = process.env.DATABASE_URL;

let client;

if (process.env.DATABASE_URL) {
 client = new Client(DATABASEURI);
}
else {
  client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'SibiDB',
    password: '',
    port: 5432,
  });
}

client.connect((err) => {
  if (err) {
    console.error('connection error', err.stack);
  } else {
    console.log('connected');
  }
})
module.exports = client;



