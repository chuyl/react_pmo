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
	  logins = () => {
		var cb = (route, message, arg) => {
		  
		  if (message.error === 0) {
		    this.setState({
				list:message.data
			})
		  
		  }
		}
	
		
		  getData(getRouter(STAFFOFDING), {token:sessionStorage.token }, cb, { });
		
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
