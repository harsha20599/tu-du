import React from 'react';
const Footer = ({showPopUp})=>{
  return (
    <div onClick={()=>{showPopUp()}} className="footer">
      <div className="new-task">
        Create a new task
      </div>
    </div>
  )
}

export default  Footer;