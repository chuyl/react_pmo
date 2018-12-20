import React, { Component } from 'react';
import Popup from '../components/modal/Popup'
import ViewTextField from '../components/input/ViewTextField'
import { getData, getRouter } from '../../utils/helpers'
class Menu extends Component {
	state = {
		alertAddRoleState:false,
		role_name:"",
		this_role_message_id:"",
		role_id:"",
		role_table_list:[],
		role_table_list:[],
		role_data:{},
		role_message_data:{}
	}
	componentWillMount(){
		this.fetchListData()
	}
	/** 
	 * @time 2018-12-15
	 * @author xuesong
	 * @param fetchListData 函数 获取所有视图列表
	 */
	fetchListData() {
		var cb = (route, message, arg) => {
			if (message.error === 0) {
				sessionStorage.view=JSON.stringify(message.data);
				this.setState({
					role_table_list:message.data,
					role_table_lists:message.data,
				})


			}else if(message.error === 2){
				console.log("未登录")
				sessionStorage.logged = false;
				sessionStorage.token="";
				if(window.location.hash.split("#")[1]!=="/"){
					window.location.href=window.location.href.split("#/")[0]
				
				  }
			}
		}
		getData(getRouter("menu_data_list"), { token:sessionStorage.token }, cb, {});
	}
	/** 
	 * @time 2018-12-20
	 * @author xuesong
	 * @param cancelAddViewCallback 函数 弹出框取消
	 */
	cancelAddRoleCallback(msg){
		this.setState({
			alertAddRoleState:false,

		})
	}
	/** 
	 * @time 2018-12-20
	 * @author xuesong
	 * @param sureAddViewCallback 函数 弹出框确定
	 */
	sureAddRoleCallback(msg){
		console.log(this.state.role_id)
		this.state.role_id===""?this.addRoleName():this.editRoleName()
		
	}
	/** 
	 * @time 2018-12-20
	 * @author xuesong
	 * @param addRoleName 函数 弹出框确定发送信息的接口
	 */
	addRoleName=()=>{
		var cb = (route, message, arg) => {
			if (message.error === 0) {
				this.setState({
					alertAddRoleState:false,
		
				})


			}else if(message.error === 2){
				console.log("未登录")
				sessionStorage.logged = false;
				sessionStorage.token="";
				if(window.location.hash.split("#")[1]!=="/"){
					window.location.href=window.location.href.split("#/")[0]
				
				  }
			}
		}
		var data = {name:this.state.role_name,role_id:this.state.this_role_message_id,data:{}};
		console.log(data)
		getData(getRouter("menu_manage_add"), { token:sessionStorage.token,data:data }, cb, {});
	}
		/** 
	 * @time 2018-12-20
	 * @author xuesong
	 * @param addRoleName 函数 弹出框确定发送信息的接口
	 */
	editRoleName=()=>{
		var cb = (route, message, arg) => {
			if (message.error === 0) {
				this.setState({
					alertAddRoleState:false,
		
				})


			}else if(message.error === 2){
				console.log("未登录")
				sessionStorage.logged = false;
				sessionStorage.token="";
				if(window.location.hash.split("#")[1]!=="/"){
					window.location.href=window.location.href.split("#/")[0]
				
				  }
			}
		}
		var data = {id:this.state.role_id,name:this.state.role_name,role_id:this.state.this_role_message_id,data:this.state.role_data};
		console.log(data)
		getData(getRouter("menu_manage_edit"), { token:sessionStorage.token,data:data }, cb, {});
	}
	/** 
	 * @time 2018-12-20
	 * @author xuesong
	 * @param changeRoleMessage 函数 修改视图列表信息
	 */
	changeRoleMessage=(id)=>{
		// this.editRoleMessage(message.name)
		
		var cb = (route, message, arg) => {
			if (message.error === 0) {
				this.setState({
					alertAddRoleState:true,
					role_name:message.data.name,
					this_role_message_id:message.data.role_id,
					role_id:message.data.id,
					role_data:message.data.data
		
				})
			}else if(message.error === 2){
				sessionStorage.logged = false;
				sessionStorage.token="";
				if(window.location.hash.split("#")[1]!=="/"){
					window.location.href=window.location.href.split("#/")[0]
				
				  }
			}
		}
		getData(getRouter("menu_data_getone"), { token:sessionStorage.token,id:id }, cb, {});
		
	}
	roleList=(id)=>{
		var cb = (route, message, arg) => {
			if (message.error === 0) {
				this.setState({
					role_name:message.data.name,
					this_role_message_id:message.data.role_id,
					role_id:message.data.id,
					role_message_data:message.data.data
		
				})
			}else if(message.error === 2){
				sessionStorage.logged = false;
				sessionStorage.token="";
				if(window.location.hash.split("#")[1]!=="/"){
					window.location.href=window.location.href.split("#/")[0]
				
				  }
			}
		}
		getData(getRouter("menu_data_getone"), { token:sessionStorage.token,id:id }, cb, {});
			
	}
	render(){
		return (
			<div style={{overflow:"hidden"}} className="view_table_list ">
				<button style={{marginBottom:"5px"}} className="add_card_btn" onClick={()=>{
						this.setState({
							 alertAddRoleState:true,
							 role_name:"",
							 this_role_message_id:"",
							 role_id:""
							
						})
					}} >添加
				</button>
				<ul style={{height:"80vh",paddingBottom:"1em"}} className="overflow">
					{this.state.role_table_list.map((view,index)=>{
						return <li className="view_message_div" key={index}>
									<div onClick={()=>{
										this.roleList(view.id)
											
										}} >{view.name}
										</div>
										<button style={{width:"70px"}} className="label_delete_button" onClick={()=>{
											this.changeRoleMessage(view.id)
											
											}}>修改名称
										</button>
										{/* <button style={{width:"40px"}} className="label_delete_button" onClick={()=>{
											this.setState({
												copy_message:view,
												alertCopyState:true
											})
											// this.copyViewMessage(view)
											
										}}>复制
										</button> */}
									</li>
								})}
				</ul>
					<Popup 
					content={
						<div>
							<h2>角色</h2>
							<div className="popup_content">
								<ViewTextField 
									onChange={(e)=>{
										this.setState({
											role_name:e.target.value
											})
									}}
									// view={true}
									value={this.state.role_name} 
									labelValue={"角色名称"} 
								/>
								<ViewTextField 
									onChange={(e)=>{
										this.setState({
											this_role_message_id:e.target.value
										})
									}}
									// view={true}
									value={this.state.this_role_message_id} 
									labelValue={"角色id"} 
								/>
								
							</div>
						</div>
					}	 
					sureCallback = {this.sureAddRoleCallback.bind(this)} 
					cancelCallback = { this.cancelAddRoleCallback.bind(this) } 
					alertState={this.state.alertAddRoleState}
				/>
        </div>
		)
	}
}

export default Menu;
