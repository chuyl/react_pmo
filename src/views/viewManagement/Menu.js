import React, { Component } from 'react';
import Popup from '../components/modal/Popup'
import ViewTextField from '../components/input/ViewTextField'
import Alert from '../components/modal/Alert'
import { getData, getRouter } from '../../utils/helpers'
class Menu extends Component {
	state = {
		alertAddRoleState:false,
		role_name:"",
		this_role_message_id:"",
		role_id:"",
		role_table_list:[],
		role_table_lists:[],
		role_data:{},
		role_message_data:{},
		menuLeft:[],
		menuRight:[],
		showMenuListState:false,
		checkedMenuLeftList:[],
		checkedMenuRightList:[],
		alertDelState:false,
		alertDelMsg:"是否确认删除"
	}
	componentWillMount(){
		this.fetchListData()
		this.menu_data_listmenuleft()
	}
		/** 
	 * @time 2018-11-29
	 * @author xuesong
	 * @param sureCopyCallback 函数 一键复制视图
	 */
	sureDelCallback=()=>{
		console.log(this.state.this_role_message_id)
		this.del_role(this.state.this_role_message_id)
		// this.copyViewMessage(this.state.copy_message)

	}
			/** 
	 * @time 2018-11-29
	 * @author xuesong
	 * @param cancelCopyCallback 函数 一键复制视图
	 */
	cancelDelCallback=()=>{
		this.setState({
			alertDelState:false
		})		
	}
	/** 
	 * @time 2018-12-15
	 * @author xuesong
	 * @param fetchListData 函数 获取所有视图列表
	 */
	fetchListData() {
		var cb = (route, message, arg) => {
			if (message.error === 0) {
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
	/** 
	 * @time 2018-12-22
	 * @author xuesong
	 * @param roleList 函数 获取getone的rolelist
	 */
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
				for(var i = 0;i<menuLeftCheck.length;i++){
					menuLeftCheck[i].checked=false;
				}
				var checkedMenuLeftList=[];
				for(var m in data){
					for(var n=0;n<this.state.menuLeft.length;n++ ){
						if(m===this.state.menuLeft[n].type){
							for(var j = 0;j<menuLeftCheck.length;j++){
								if(menuLeftCheck[j].value===m){
									checkedMenuLeftList.push(this.state.menuLeft[n])
									menuLeftCheck[j].checked=true;
								}
							}
						}
					}
				}
				this.setState({
					checkedMenuLeftList:checkedMenuLeftList
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
	/** 
	 * @time 2018-12-22
	 * @author xuesong
	 * @param menu_data_listmenuleft 函数 获取左侧menu列表
	 */
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
	/** 
	 * @time 2018-12-22
	 * @author xuesong
	 * @param menu_data_listmenuright 函数 获取右侧menu列表
	 */
	menu_data_listmenuright=()=>{
		var cb = (route, message, arg) => {
			if (message.error === 0) {
				var menuRight=[];
				// var menuLeftCheck = document.getElementsByName("menuLeftCheck");
				var menuRightCheck = document.getElementsByName("menuRightCheck");
				for(var w = 0;w<menuRightCheck.length;w++){
					menuRightCheck[w].checked=false;
				}
				//循环初始化被选中的menu1的子节点
				for(var m = 0;m<this.state.checkedMenuLeftList.length;m++){
					for(var n = 0;n<message.data.length;n++){
						if(message.data[n].fid===this.state.checkedMenuLeftList[m].id){
							menuRight.push(message.data[n])
						}
					}
				}
				this.setState({
					menuRight:menuRight
				})
				var role_message_data=this.state.role_message_data;
				for(var k in role_message_data){
					for(var j = 0;j<role_message_data[k].data.length;j++){
						for(var s = 0;s<menuRightCheck.length;s++){
							var title_url = role_message_data[k].data[j].url===null?role_message_data[k].data[j].component:role_message_data[k].data[j].component+role_message_data[k].data[j].url;
							if(menuRightCheck[s].value===title_url){
								menuRightCheck[s].checked=true;
							}
						}
					}
				}
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
	/** 
	 * @time 2018-12-22
	 * @author xuesong
	 * @param click_check_left 函数 选中左侧menu的check
	 */
	click_check_left=()=>{
		var data = this.state.role_message_data;
				var menuLeftCheck = document.getElementsByName("menuLeftCheck");
			
				var checkedMenuLeftList=[];
					for(var j = 0;j<menuLeftCheck.length;j++){
						if(menuLeftCheck[j].checked===true){
							for(var i=0;i<this.state.menuLeft.length;i++ ){
								if(this.state.menuLeft[i].type===menuLeftCheck[j].value){
									
									checkedMenuLeftList.push(this.state.menuLeft[i])
								}
							}
						}
					}
					this.setState({
						checkedMenuLeftList:checkedMenuLeftList
					})
					this.menu_data_listmenuright()
				
	}
/** 
	 * @time 2018-12-22
	 * @author xuesong
	 * @param hold_menu_data 函数 保存
	 */
	hold_menu_data=()=>{
		// var menuLeftCheck = document.getElementsByName("menuLeftCheck");
		var menuRightCheck = document.getElementsByName("menuRightCheck");
		var checkedMenuRightList=[];
		var obj = {};
		var checkedMenuLeftList = this.state.checkedMenuLeftList;
		
		
		var menuRight = this.state.menuRight;
		for(var j = 0;j<menuRightCheck.length;j++){
			if(menuRightCheck[j].checked===true){
				for(var n = 0;n<menuRight.length;n++){
					var menuRightMessage = menuRight[n].url!==null?menuRight[n].component+menuRight[n].url:menuRight[n].component;
					if(menuRightMessage===menuRightCheck[j].value){
						checkedMenuRightList.push(menuRight[n])
					}
				}
			}
		}
		for(var i = 0;i<checkedMenuLeftList.length;i++){
			var list_arr=[]
			for(var m = 0;m<checkedMenuRightList.length;m++){
				if(checkedMenuLeftList[i].id===checkedMenuRightList[m].fid){
					list_arr.push(checkedMenuRightList[m])
					console.log(list_arr)
					 obj[checkedMenuLeftList[i].type]={data:list_arr,name:checkedMenuLeftList[i].name}
				}
			}

		}
		var cb = (route, message, arg) => {
			if (message.error === 0) {
				this.setState({
					alertAddRoleState:false,
					showMenuListState:false
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
		var data = {id:this.state.role_id,name:this.state.role_name,role_id:this.state.this_role_message_id,data:obj};
		getData(getRouter("menu_manage_edit"), { token:sessionStorage.token,data:data }, cb, {});
		// this.setState({
		// 	checkedMenuRightList:checkedMenuRightList
		// })
	}
	/** 
	 * @time 2018-12-22
	 * @author xuesong
	 * @param del_role 函数 删除角色数据
	 */
	del_role=(id)=>{
		var cb = (route, message, arg) => {
			if (message.error === 0) {
				this.setState({
					alertDelState:false
				})
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
												this.setState({
													alertDelState:true,
													this_role_message_id:view.id
													
												})
												
												// this.del_role(view.id)
												
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
						<li>
							<input id="menuLeftAllCheck" onClick={()=>{
								 var checklist = document.getElementsByName("menuLeftCheck");
								 if(document.getElementById("menuLeftAllCheck").checked) {
									 for(var i = 0; i < checklist.length; i++) {
										 checklist[i].checked = 1;
									 }
								 } else {
									 for(var j = 0; j < checklist.length; j++) {
										 checklist[j].checked = 0;
									 }
								 }
								 this.click_check_left()
										// console.log(document.getElementsByName("menuLeftCheck").checked)
									}}  name="menuLeftAllCheck" className="menucheckbox" type="checkbox"/>
							<span>
								全选
							</span>
						</li>
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
					<li>
							<input id="menuRigthAllCheck" onClick={()=>{
								 var checklist = document.getElementsByName("menuRightCheck");
								 if(document.getElementById("menuRigthAllCheck").checked) {
									 for(var i = 0; i < checklist.length; i++) {
										 checklist[i].checked = 1;
									 }
								 } else {
									 for(var j = 0; j < checklist.length; j++) {
										 checklist[j].checked = 0;
									 }
								 }
										// console.log(document.getElementsByName("menuLeftCheck").checked)
									}}  name="menuLeftAllCheck" className="menucheckbox" type="checkbox"/>
							<span>
								全选
							</span>
						</li>
						{this.state.menuRight.map((menuRight,index)=>{
							return(
								<li key={index}>
									<input value={menuRight.url===null?menuRight.component:menuRight.component+menuRight.url} name="menuRightCheck" className="menucheckbox" type="checkbox"/>
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
				<Alert alertTitle={"删除"} alertMsg = {this.state.alertDelMsg} sureCallback = {this.sureDelCallback.bind(this)} cancelCallback = { this.cancelDelCallback.bind(this) } alertState={this.state.alertDelState}/>
        </div>
		)
	}
}

export default Menu;
