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
		role_message_data:{},
		menuLeft:[],
		menuRight:[],
		showMenuListState:false,
		checkedMenuList:[]
	}
	componentWillMount(){
		this.fetchListData()
		this.menu_data_listmenuleft()
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
				this.fetchListData()

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
					showMenuListState:true,
					role_name:message.data.name,
					this_role_message_id:message.data.role_id,
					role_id:message.data.id,
					role_message_data:message.data.data
		
				})
			
				var data = message.data.data;
				var menuLeftCheck = document.getElementsByName("menuLeftCheck");
				var checkedMenuList=[];
				for(var m in data){
					for(var n=0;n<this.state.menuLeft.length;n++ ){
						if(m===this.state.menuLeft[n].type){
							for(var j = 0;j<menuLeftCheck.length;j++){
								if(menuLeftCheck[j].value===m){
									checkedMenuList.push(this.state.menuLeft[n])
									menuLeftCheck[j].checked=true;
								}
							}
						
						}
					}
					
				}
				this.setState({
					checkedMenuList:checkedMenuList
				})
				this.menu_data_listmenuright()
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
	menu_data_listmenuleft=()=>{
		var cb = (route, message, arg) => {
			if (message.error === 0) {
				this.setState({
					menuLeft:message.data
				})
			}else if(message.error === 2){
				sessionStorage.logged = false;
				sessionStorage.token="";
				if(window.location.hash.split("#")[1]!=="/"){
					window.location.href=window.location.href.split("#/")[0]
				
				  }
			}
		}
		getData(getRouter("menu_data_listmenuleft"), { token:sessionStorage.token }, cb, {});
	}
	// menu_right_list=()=>{}
	menu_data_listmenuright=()=>{
		var cb = (route, message, arg) => {
			if (message.error === 0) {
				var menuRight=[];
				// var menuLeftCheck = document.getElementsByName("menuLeftCheck");
				var menuRightCheck = document.getElementsByName("menuRightCheck");
				// for(var i = 0;i<menuLeftCheck.length;i++){
					
				// }
				//循环初始化被选中的menu1的子节点
				for(var m = 0;m<this.state.checkedMenuList.length;m++){
					for(var n = 0;n<message.data.length;n++){
						if(message.data[n].fid===this.state.checkedMenuList[m].id){
							menuRight.push(message.data[n])
						}
					}
				}
				this.setState({
					menuRight:menuRight
				})
				// console.log(menuLeftCheck[1].value)
				//role_message_data为初始化menu的object
				var role_message_data=this.state.role_message_data;
				for(var k in role_message_data){
					for(var j = 0;j<role_message_data[k].data.length;j++){
						for(var s = 0;s<menuRightCheck.length;s++){
							var title_url = role_message_data[k].data[j].url===null?role_message_data[k].data[j].title:role_message_data[k].data[j].title+role_message_data[k].data[j].url;
							if(menuRightCheck[s].value===title_url){
								menuRightCheck[s].checked=true;
							}
						}
					}
				
					// for(var k = 0;message)
					
				}
				// this.setState({
				// 	menuRight:message.data
				// })
			}else if(message.error === 2){
				sessionStorage.logged = false;
				sessionStorage.token="";
				if(window.location.hash.split("#")[1]!=="/"){
					window.location.href=window.location.href.split("#/")[0]
				
				  }
			}
		}
		getData(getRouter("menu_data_listmenuright"), { token:sessionStorage.token }, cb, {});
	}
	click_check_left=()=>{
		var data = this.state.role_message_data;
				var menuLeftCheck = document.getElementsByName("menuLeftCheck");
			
				var checkedMenuList=[];
				console.log(this.state.menuLeft)
				
					for(var j = 0;j<menuLeftCheck.length;j++){
						console.log(menuLeftCheck[j].checked)
						if(menuLeftCheck[j].checked===true){
							for(var i=0;i<this.state.menuLeft.length;i++ ){
								if(this.state.menuLeft[i].type===menuLeftCheck[j].value){
									
									checkedMenuList.push(this.state.menuLeft[i])
								}
							}
						}
					}
					this.setState({
						checkedMenuList:checkedMenuList
					})
					console.log(checkedMenuList)
					this.menu_data_listmenuright()
				
	}
	change_menu_right=()=>{
		console.log(this.state.checkedMenuList)
	}
	hold_menu_data=()=>{
		var menuLeftCheck = document.getElementsByName("menuLeftCheck");
		var menuRightCheck = document.getElementsByName("menuRightCheck");
		var obj = {};
		// var menu_left
		for(var i = 0;i<menuRightCheck.length;i++){
			if(menuRightCheck[i].checked===true){

				console.log(menuRightCheck[i])
			}
			// for(var j = 0;j<this.state.menuRight.length;j++){
				
			// }
			
		}
	}
	del_role=(id)=>{
		var cb = (route, message, arg) => {
			if (message.error === 0) {
				this.fetchListData()
			}else if(message.error === 2){
				sessionStorage.logged = false;
				sessionStorage.token="";
				if(window.location.hash.split("#")[1]!=="/"){
					window.location.href=window.location.href.split("#/")[0]
				
				  }
			}
		}
		getData(getRouter("menu_manage_del"), { token:sessionStorage.token,id:id }, cb, {});
	}
	render(){
		return (
			<div>
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
										<div style={{height:"1em"}} onClick={()=>{
											this.roleList(view.id)
												
											}} >{view.name}
											</div>
											<button style={{width:"70px"}} className="label_delete_button" onClick={()=>{
												this.changeRoleMessage(view.id)
												
												}}>修改名称
											</button>
											<button style={{width:"70px"}} className="label_delete_button" onClick={()=>{
												this.del_role(view.id)
												
												}}>删除
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
				</div>
				{this.state.showMenuListState?<div  className="view_list overflow">
				
					<ul>
						{this.state.menuLeft.map((menuLeft,index)=>{
							return(
								<li key={index}>
									<input onChange={()=>{
										this.click_check_left()
										// console.log(document.getElementsByName("menuLeftCheck").checked)
									}} value={menuLeft.type} name="menuLeftCheck" className="menucheckbox" type="checkbox"/>
									<span>
										{menuLeft.name}
									</span>
							</li>
							)
						})}
					</ul>
					<button onClick={()=>{
						this.hold_menu_data()
					}}>
						保存
					</button>
				</div>:""}
				{this.state.showMenuListState?<div  className="view_list overflow">
					<ul>
						{this.state.menuRight.map((menuRight,index)=>{
							return(
								<li key={index}>
									<input value={menuRight.url===null?menuRight.title:menuRight.title+menuRight.url} name="menuRightCheck" className="menucheckbox" type="checkbox"/>
									<span>
										{menuRight.title}
									</span>
									<span>
										{menuRight.url===null?"":menuRight.url}
									</span>
							</li>
							)
						})}
					</ul>
				</div>:""}
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
