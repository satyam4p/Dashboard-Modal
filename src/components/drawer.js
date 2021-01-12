import React from 'react';
import '../styles/drawer.scss';
import {AiFillHome} from 'react-icons/ai';

const Drawer = props =>{

  let drawer_classes = 'toggle_drawer';
  if(props.show){
    drawer_classes = 'toggle_drawer open_drawer';
  }

  return(
    <div className={drawer_classes}>
      <div className="drawer_header">
      <div className="Home_icon">
      <AiFillHome size={30}/>
      </div>
        <div>
          <h2>Home</h2>
        </div>
      </div>
      <div className="drawer_body">
      <ul className="drower_list">
        <li><a href="/">Feeds</a></li>
        <li><a href="/">Articles</a></li>
        <li><a href="/">Gallery</a></li>
      </ul>
      </div>
    </div>
  )
}

export default Drawer

