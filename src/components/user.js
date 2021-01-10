import React from 'react';
import {FaRegUser} from 'react-icons/fa';
import '../styles/userInfo.scss'


const UserInfo = props => {

  return (
    <div className='user_info_div'>
    <button className='user_info' onClick={props.show}>
      <FaRegUser size={22} color="white"/>
    </button>
    <p className= 'user_name'>
      {props.name}
      </p>
    </div>

  )
}

export default UserInfo;