import React from 'react';
import '../styles/userInfoCard.scss'


const UserInfoCard = (props) =>{

  let infoCardClasses = 'user_info_card';
  if(props.toggleUserInfo){
    infoCardClasses = 'user_info_card show_card';
  }

  return(
    <div className={infoCardClasses}>  
    </div>

  );
  


}

export default UserInfoCard;
