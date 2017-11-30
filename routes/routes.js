const express = require('express');
const router = express.Router();
const client = require('../config/connection');
const pg = require('pg');


router.post('/api/newContact', ((req, res) => {
  const values = req.body.join();
  console.log(values);
  const query = 'INSERT INTO contacts(title, firstname, mi, lastName, gender, address, city, state, zipcode, countryabv, email, phone, dob, age, occupation, company, domain) VALUES(' + values + ')';

  client.query(query, (err, response) => {
    if(err)  {
      return res.json('There was an error, please ensure all fields are filled out correctly')
    };
      res.json('Successfully added contact!');
  })

}))
module.exports = router;