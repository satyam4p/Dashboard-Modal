import React from 'react';
import {FaRegUser} from 'react-icons/fa';
import '../styles/userInfo.scss'


const UserInfo = props => {

  return (
    <div>
    <button className='user_info' onClick={props.show}>
      <FaRegUser size={22} color="white"/>
    </button>
    </div>

  )
}

export default UserInfo;