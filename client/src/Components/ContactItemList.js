import React from 'react';
import ContactItem from './ContactItem';
import './ContactItemList.css';
const ContactItemList = (props) => (
  <div>
    <form className="form-group InputContainer">
      {(props.inputs.map((input, i ) => 
        <ContactItem
        value={input.value} 
        name={input.name} 
        changed={(event) => props.changed(event, input.id)} 
        type={input.type} 
        id={input.id} 
        key={input.id}
        placeholder={input.placeholder} />
      ))}
    </form>
  </div>
)

export default ContactItemList;