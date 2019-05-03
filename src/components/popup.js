import React, { Component } from 'react'

class Popup extends Component {
  render() {
    return (
      <div className="popup-bg">
        <div className="mini-navbar">
          <div className="new-task popup-title">
            Create a new task
          </div>
        </div>

        <div className="container input-container">
          <div className="input-large">
            <input type="text" placeholder="Enter the task" name="name" onKeyPress={(i)=>{if(i.key==="Enter"){this.props.updateValue()}}} onChange={(i)=>{this.props.insertValue(i.target.value)}} value={this.props.value} />
          </div>
          <div className="btn-small btn-border-black" onClick={()=>{this.props.cancelPopup()}}>
            Cancel
          </div>
          <div className="btn-small btn-yellow" onClick={()=>{this.props.updateValue()}}>
            Done
          </div>
        </div>

      </div>
    )
  }
}
export default Popup;