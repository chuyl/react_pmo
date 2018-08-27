import React, { Component } from 'react';
 import { getData, getRouter} from '../../utils/helpers'
 import {STAFFOFDING} from '../../enum'
class Contact extends Component {
	state = {
		name:"",
		password:"",
		check_code:""
	}
	login = () => {
		var cb = (route, message, arg) => {
		  
		  if (message.code === 0) {
		
		  
		  }
		}
	
		
		  getData(getRouter(STAFFOFDING), {session:"tnkGNc" }, cb, { });
		
	  }
	render(){
		
		return (
            <div>
            联系人页
			{/* <input onChange={event => this.setState({ name: event.target.value })}/>
			<input onChange={event => this.setState({ password: event.target.value })}/>
			<input onChange={event => this.setState({ check_code: event.target.value })}/>
			 */}
			 <button onClick={()=>{
				this.login()
			}}>确定</button>
        </div>
		)
	}
}

export default Contact;
