import React from 'react';
import '../styles/burgerIcon.scss';


const Burger = props =>{

  
  return(
      <button className='toggle_button' onClick={props.click}>
        <div className='toggle_button_bar'/>
        <div className='toggle_button_bar'/>
        <div className='toggle_button_bar'/>
      </button>
  )
}

export default Burger;