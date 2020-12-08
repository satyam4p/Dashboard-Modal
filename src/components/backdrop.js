import React from 'react';
import '../styles/backdrop.scss'

const BackDrop = props => {

  return (
    <div className='backDrop_toggle' onClick = {props.click}>
    </div>
  )

}

export default BackDrop;