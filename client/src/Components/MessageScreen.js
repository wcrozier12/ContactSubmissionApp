import React from 'react';
import Aux from './Aux'
import './MessageScreen.css'

const MessageScreen = (props) => {
    return (
    <Aux>
      <p className='MessageScreen'>{props.message}</p>
    </Aux>
    )
}
export default MessageScreen;