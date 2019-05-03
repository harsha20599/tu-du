import React from 'react';
import Done from '../resources/done.svg';

const Todos = ({list, doneTodo}) => {

  const todoList = list.length ? (
    list.map(l => {
      return (
        <li className="list-item" key={l.id}>
          <div className="list-text">{l.text}</div>
          <div className="list-icon">
            <img onClick={()=>{doneTodo(l.id)}} src={Done}alt=""/>
          </div>
          <div className="list-date">Added on <span className="date">{l.date}</span></div>
      </li>
      )
    })
   ) : (
    <p className="list-date full-container">Nothing is here</p>
  );
  return (
    <React.Fragment>
      <div className="container light-grey-container">
        <div className="heading-left">
          Todo
        </div>  
        <ul className="todo">
            {todoList}  
        </ul>
      </div>

    </React.Fragment>
  )

}

export default Todos;