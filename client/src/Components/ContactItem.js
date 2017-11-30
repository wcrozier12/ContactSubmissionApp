import React from 'react';
import './ContactItem.css';

const ContactItem = (props) => (
  <div className= 'InputItem'>
      <label>{props.name}</label>
      <input type={props.type} onChange={props.changed} value={props.value} className="form-control" id={props.name} placeholder={props.placeholder} required/>
  </div>
)

export default ContactItem;