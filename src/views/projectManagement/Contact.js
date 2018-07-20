import React, { Component } from 'react';
// import { getData, getRouter} from '../../utils/helpers'
// import {LOGIN} from '../../enum'
class Contact extends Component {
	state = {
		name:"",
		password:"",
		check_code:""
	}
	// login = (account, password, check_code) => {
	// 	console.log(account)
	// 	var cb = (route, message, arg) => {
		  
	// 	  if (message.code === 0) {
		
		  
	// 	  }
	// 	}
	
		
	// 	  getData(getRouter(LOGIN), { account: account, password: password, type: 0, checkcode: check_code }, cb, { });
		
	//   }
	render(){
		
		return (
            <div>
            联系人页
			{/* <input onChange={event => this.setState({ name: event.target.value })}/>
			<input onChange={event => this.setState({ password: event.target.value })}/>
			<input onChange={event => this.setState({ check_code: event.target.value })}/>
			<button onClick={()=>{
				this.login(this.state.name,this.state.password,this.state.check_code)
			}}>确定</button> */}
        </div>
		)
	}
}

export default Contact;
