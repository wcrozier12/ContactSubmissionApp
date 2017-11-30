const { Pool, Client } = require('pg');
const DATABASEURI = process.env.DATABASE_URL;


  const herokuClient = new Client(DATABASEURI);

  const localClient = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'SibiDB',
    password: '',
    port: 5432,
  })

if (process.env.DATABASE_URL) {
  let client = herokuClient
}
else {
  client = localClient
}
client.connect((err) => {
  if (err) {
    console.error('connection error', err.stack)
  } else {
    console.log('connected')
  }
})

module.exports = client;



