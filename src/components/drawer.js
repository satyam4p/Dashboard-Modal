import React from 'react';
import '../styles/drawer.scss';

const Drawer = props =>{

  let drawer_classes = 'toggle_drawer';
  if(props.show){
    drawer_classes = 'toggle_drawer open_drawer';
  }

  return(
    <div className={drawer_classes}>
      <div>
      </div>
      <ul className="drower_list">
        <li><a href="/">Products</a></li>
        <li><a href="/">Revenue</a></li>
        <li><a href="/">Analysis</a></li>
      </ul>
    </div>
  )


}

export default Drawer