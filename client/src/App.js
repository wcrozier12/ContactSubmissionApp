import React, { Component } from 'react';
import ContactItemList from './Components/ContactItemList';
import Modal from './Components/UI/Modal';
import MessageScreen from './Components/MessageScreen'

import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputs: [
        {
          id: 1,
          name: 'Title:',
          value: '',
          type: 'text',
          placeholder: 'Title..'
        },
        {
          id: 2,
          name: 'First Name:',
          value: '',
          type: 'text',
          placeholder: 'First Name..'
        },
        {
          id: 3,
          name: 'Middle Initial:',
          value: '',
          type: 'text',
          placeholder: 'Middle Initial..'
        },
        {
          id: 4,
          name: 'Last Name:',
          value: '',
          type: 'text',
          placeholder: 'Last Name..'       
        },
        {
          id: 5,
          name: 'Gender:',
          value: '',
          type: 'text',
          placeholder: 'Gender..'       
        }, 
        {
          id: 6,
          name: 'Address:',       
          value: '',
          type: 'text',
          placeholder: 'Address..'       
        },
        {
          id: 7,
          name: 'City:',       
          value: '',
          type: 'text',
          placeholder: 'City..'  
        },
        {
          id: 8,
          name: 'State:',        
          value: '',
          type: 'text',
          placeholder:'State..'       
        },
        {
          id: 9,
          name: 'Zip Code:',       
          value: '',
          type: 'text',
          placeholder: 'Zip Code..'       
        },
        {
          id: 10, 
          name: 'Country Code:',    
          value: '',
          type: 'text',
          placeholder: 'US, CA, CN..'       
        },
        {
          id: 11,  
          name: 'Email Address:',     
          value: '',
          type: 'email',
          placeholder: 'Email..'       
        },
        {
          id: 12,
          name: 'Phone Number:',    
          value: '',
          type: 'tel',
          placeholder: '(123) 123-4567'       
        },
        {
          id: 13,
          name: 'Date Of Birth:',      
          value: '',
          type: 'date',
        },
        {
          id: 14,
          name: 'Age:',      
          value: '',
          type: 'number',
          placeholder: 'Age..'       
        },
        {
          id: 15,
          name: 'Occupation:',      
          value: '',
          type: 'text',
          placeholder: 'Occupation..'       
        },
        {
          id: 16,
          name: 'Company Name:',      
          value: '',
          type: 'text',
          placeholder: 'Company name..'       
        },
        {
          id: 17,
          name: 'Domain URL:',
          value: '',
          type: 'url',
          placeholder: 'Yourcompany@example.com'
        }   
      ],
      messageScreen: false,
      message: '',
    }
  }

  inputHandler = (event, id) => {
    const inputIndex = this.state.inputs.findIndex(input => {
      return input.id === id;
    });
    const input = {
      ...this.state.inputs[inputIndex]
    };
    input.value = event.target.value;
    const inputs = [...this.state.inputs];
    inputs[inputIndex] = input;

    this.setState({    
      inputs
    })    
  }

  formSubmitHandler = () => {
    const data = this.state.inputs.map(input => {
      return (
        "'" + input.value + "'"
      )
    })
    axios.post('/api/newContact', data)
    .then((response) => {
      const inputs = this.state.inputs.map((input) => {
        return {...input, value: ''}
      })
      console.log(response);
      this.setState({inputs, messageScreen:true, message: response.data})
    })
  }

  closeMessageHandler = () => {
    this.setState({messageScreen:false})
  }
  render() {
    const inputs = this.state.inputs;
    return (
      <div className='App'>
      <h1> Contact Information </h1>
          <Modal show={this.state.messageScreen} modalClosed={this.closeMessageHandler}>
            <MessageScreen message={this.state.message} />
          </Modal>
        <ContactItemList changed={this.inputHandler} inputs={inputs} />
        <button style={{margin: '10px'}}className="btn btn-primary" onClick={this.formSubmitHandler}> Submit </button>
      </div>
    );
  }
}

export default App;
