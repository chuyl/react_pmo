import React, { Component } from 'react';
  import { getData, getRouter} from '../../utils/helpers'
  import {STAFFSMALLLIST,STAFFOFDING} from '../../enum'
class Contact extends Component {
	state = {
		name:"",
		password:"",
		check_code:"",
		list:[]
	}
	login = () => {
		var cb = (route, message, arg) => {
		  
		  if (message.code === 0) {
		    this.setState({
				list:message.data
			})
		  
		  }
		}
	
		
		  getData(getRouter(STAFFSMALLLIST), {session:"tnkGNc" }, cb, { });
		
	  }
	  logins = () => {
		var cb = (route, message, arg) => {
		  
		  if (message.code === 0) {
		    this.setState({
				list:message.data
			})
		  
		  }
		}
	
		
		  getData(getRouter(STAFFOFDING), {session:"tnkGNc" }, cb, { });
		
	  }
	 render(){
		
		return (
            <div>
            联系人页
			<ul>
			<button onClick={()=>{
				this.login()
			}}>确定</button>
			 <button onClick={()=>{
				this.logins()
			}}>确定</button>

{this.state.list.map((info_lists) => {
	return (
		<li onClick={(e) => {
		}} key={info_lists.id}>{info_lists.name}</li>
	)
})}

</ul>
			{/* <input onChange={event => this.setState({ name: event.target.value })}/>
			<input onChange={event => this.setState({ password: event.target.value })}/>
			<input onChange={event => this.setState({ check_code: event.target.value })}/>
			 */}
			
        </div>
		)
	}
}

export default Contact;
