import React, { Component } from 'react'
import Logo from '../resources/Logo.png';
import MenuIcon from '../resources/menu-icon.png';


class Navbar extends Component {
  ClearButtonVisiblity = false;
  toggleClearButton = ()=>{
    this.ClearButtonVisiblity = !this.ClearButtonVisiblity;
    this.forceUpdate();  
  }
  render() {
    return (
      <div className="mini-navbar">
        <div className="full-container">
          <i className="mini-logo">
            <img src={Logo} alt=""/>          
          </i>
          <span className="mini-heading">Tu-Du</span>
          <i onClick={()=>{this.toggleClearButton()}} className="menu-icon mini-menu">
            <img src={MenuIcon} alt=""/>
          </i>
            {
              (this.ClearButtonVisiblity === true) ? 
              <div onClick={()=>{this.props.clearState()}} className="clear-button">
                Clear All
              </div>
              :
              null
            }
        </div>
      </div>
    )
  }
}

export default Navbar;

