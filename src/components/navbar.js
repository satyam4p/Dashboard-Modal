import React from 'react';
import '../styles/navbar.scss';
import Burger from './burgerIcon';
import UserInfo from './user';
const Navbar = (props)=>{
  
return(
  <div className='navbar'>
    <Burger click = {props.toggleDrawer}/> 
    <div className='spacer'/>
    <UserInfo show = {props.showInfo}/>
  </div>
)
}

export default Navbar;