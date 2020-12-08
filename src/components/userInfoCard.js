import React from 'react';
import '../styles/userInfoCard.scss'


const UserInfoCard = (props) =>{

  let infoCardClasses = 'user_info_card';
  if(props.toggleUserInfo){
    infoCardClasses = 'user_info_card show_card';
  }

  return(
    <div className={infoCardClasses}>
      <p className='infoCard_item'>
        <a href='/'>Settings</a>
      </p>
      <hr className='hr__tag'/>
      <p className='infoCard_item'>
        <a href='/'>Profile</a>
      </p>
      <hr className='hr__tag'/>
      <p className='infoCard_item'>
       <a href='/'>Logout</a>
      </p>
    
    </div>

  );
  


}

export default UserInfoCard;
