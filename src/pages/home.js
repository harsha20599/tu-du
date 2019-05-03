import React, { Component } from 'react'
import Navbar from './../components/navbar';

import Todos from '../components/todos';
import Dones from '../components/dones';
import Footer from '../components/footer';

import Popup from '../components/popup';

class Home extends Component {

  state = {
    value : '',
    popup : false,
    todos : [
    ],
    done : [
    ]
  }

  componentDidMount=()=>{
    if(localStorage.getItem('todo-list')){
      this.setState(JSON.parse( localStorage.getItem('todo-list')));
    }else{
      localStorage.setItem('todo-list',JSON.stringify(this.state));
    }
  }
  componentDidUpdate=()=>{
    localStorage.setItem('todo-list',JSON.stringify(this.state));
  }
  clearState = () =>{
    const defaultState = {  value : '',  popup : false,  todos : [ ], done : [ ] };
    this.setState(defaultState);

  }
  insertValue = (i) =>{
    this.setState({value : i});
  }

  cancelPopup = () =>{
    this.setState({popup : false});
  }

  getTodayDate = () => {
    var today = new Date();

    var month_names =["Jan","Feb","Mar",
                      "Apr","May","Jun",
                      "Jul","Aug","Sep",
                      "Oct","Nov","Dec"];
    
    var day = today.getDate();
    var month_index = today.getMonth();
    var year = today.getFullYear();
    
    return  " " + day + " " + month_names[month_index] + " " + year;
  
  }

  updateValue = ()=>{

    var todoList = [{id : (this.state.todos.length+this.state.done.length)+1, text : this.state.value, date: this.getTodayDate()}];
    todoList = todoList.concat( this.state.todos );

    this.setState({todos : todoList}); 

    this.cancelPopup();
  }

  removeFromDone = (id) =>{
    var todoList = this.state.done.filter(d => {
      return d.id === id;
    });
    delete todoList[0].doneDate;
    todoList = todoList.concat( this.state.todos );
    const list = this.state.done.filter(d => {
      return d.id !== id;
    });    
    this.setState({done : list});
    this.setState({todos : todoList});   
  }

  doneTodo = (id) =>{
    var doneList = this.state.todos.filter(todo => {
      return todo.id === id;
    });
    doneList[0].doneDate = this.getTodayDate();    
    doneList = doneList.concat( this.state.done );
    const list = this.state.todos.filter(todo => {
      return todo.id !== id;
    });    
    this.setState({todos : list});
    this.setState({done : doneList});
  }

  showPopUp = (id) =>{
    this.setState({popup : true});
  }

  render() {
    return (
      <div>
        {this.state.popup ? 
          <Popup updateValue = {this.updateValue} cancelPopup = {this.cancelPopup} insertValue = {this.insertValue} value = {this.state.value}/>
            :
          <React.Fragment>
            <Navbar clearState = {this.clearState} />
            <Todos list={this.state.todos} doneTodo={this.doneTodo} />  
            <Dones list={this.state.done} removeFromDone = {this.removeFromDone}/>
            <Footer showPopUp = {this.showPopUp}/>
          </React.Fragment>
          }
      </div>
    )
  }
}

export default Home;