import React from 'react';
import Remove from '../resources/remove.svg';

const Dones = ({list, removeFromDone}) => {
  const doneList = list.length ? (
    list.map(l => {
      return (
        <li className="list-item" key={l.id}>
          <div className="list-text list-done">{l.text}</div>
          <div className="list-icon">
            <img onClick={()=>{removeFromDone(l.id)}} src={Remove} alt=""/>
          </div>
          <div className="list-date">Done on <span className="date">{l.doneDate} </span></div>
        </li>        
      );
    })
  ) : (
    <p className="list-date full-container">You have not completed any Tu-Du's</p>
  );

  return (
    <div className="container light-grey-container">
      <div className="heading-left">
        Done
      </div>  
      <ul className="todo">
          {doneList}  
      </ul>
    </div>
  );
}

export default Dones;