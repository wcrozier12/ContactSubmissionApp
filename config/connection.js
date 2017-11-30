const { Pool, Client } = require('pg');
const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'SibiDB',
  password: 'Horizon12?',
  port: 5432,
})

client.connect((err) => {
  if (err) {
    console.error('connection error', err.stack)
  } else {
    console.log('connected')
  }
})

module.exports = client;



