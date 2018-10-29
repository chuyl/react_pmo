import React, { Component } from 'react';
import ReactDOM from 'react-dom';
 
 
let defaultState = {
  alertStatus:false,
  alertTip:"提示",
  closeAlert:function(){}
}
 
class Alert extends Component{
 
  state = {
    ...defaultState
  };
  // 关闭弹框
  confirm = () => {
    this.setState({
      alertStatus:false
    })
    this.state.closeAlert();
  }
  open =(options)=>{
    options = options || {};
    options.alertStatus = true;
    this.setState({
      ...defaultState,
      ...options
    })
  }
  close(){
    this.state.closeAlert();
    this.setState({
      ...defaultState
    })
  }
//   shouldComponentUpdate(nextProps, nextState){
//     // return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state), fromJS(nextState))
//   }
   
  render(){
      console.log(this.state.alertStatus)
    return (
        <div className={this.state.alertStatus ?"alert_back open":"alert_back"}>
        <div className={this.state.alertStatus ?"alert_box open":"alert_box"}>
        <h2>{this.state.alertTip}</h2>
        <p>{this.props.alertMsg}</p>
        
        </div>
     </div>
    );
  }
}
 
let div = document.createElement('div');
let props = {
   
};
document.body.appendChild(div);
 
let Box = ReactDOM.render(React.createElement(
  Alert,
  props
),div);
 
 
 
export default Box;