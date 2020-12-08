import './App.css';
import React,{useState} from 'react';
import UserInfoCard from './components/userInfoCard';
import Navbar from './components/navbar';
import Drawer from './components/drawer';
import BackDrop from './components/backdrop';
function App() {

  const [toggleDrawer,setToggleDrawer] = useState(false);
  const [show,setShow] = useState(false);
  const toggleDrawerHandler= () => {

    setToggleDrawer(!toggleDrawer);

  }

  const backDropToggleHandler = () => {
      setToggleDrawer(false);
  }
  let backDrop;
  if(toggleDrawer){
    backDrop = <BackDrop click = {backDropToggleHandler}/>
  }
  const handleShowUserInfo =()=>{
    setShow(!show);
  }
  let showInfoCard;
  if(show){
    showInfoCard = <UserInfoCard />
  }
  return (
    <div className="App">
      <Navbar toggleDrawer = {toggleDrawerHandler} showInfo = {handleShowUserInfo}/>
      <UserInfoCard toggleUserInfo = {show}/>
      <Drawer show = {toggleDrawer}/>
      {backDrop}
    </div>
  );
}

export default App;
