import React, { Component } from 'react';
import Alert from '../components/modal/Alert'
import { getData, getRouter } from '../../utils/helpers'
class UrlPower extends Component {
   state={
    role_table_list:[],
    showMenuListState:false,
	routeList:[],//路由列表
	routeLists:[],//路由列表
	myRoute:[],//对应账户的路由
	search_url_message:"",

	// alertMsg:"",
	// alertTitle:""
   }
   componentWillMount(){
       this.fetchListData()
    //    this.client_route()
   }
   /** 
	 * @time 2018-12-24
	 * @author xuesong
	 * @param fetchListData 函数 获取所有视图列表
	 */
	fetchListData() {
		var cb = (route, message, arg) => {
			if (message.error === 0) {
				this.setState({
					role_table_list:message.data,
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
		getData(getRouter("role_route_list"), { token:sessionStorage.token }, cb, {});
    }
    /** 
	 * @time 2018-12-24
	 * @author xuesong
	 * @param my_route_list 函数 获取getone的rolelist
	 */
	my_route_list=(id)=>{
		var cb = (route, message, arg) => {
			if (message.error === 0) {
               this.route_list()
				this.setState({
					showMenuListState:true,
					myRoute:message.data
				})
				
			}else if(message.error === 2){
				sessionStorage.logged = false;
				sessionStorage.token="";
				if(window.location.hash.split("#")[1]!=="/"){
					window.location.href=window.location.href.split("#/")[0]
				  }
			}
		}
		getData(getRouter("get_route_by_role_id"), { token:sessionStorage.token,id:id }, cb, {});
			
    }
     /** 
	 * @time 2018-12-24
	 * @author xuesong
	 * @param route_list 函数 获取getone的rolelist
	 */
	route_list=()=>{
		var cb = (route, message, arg) => {
			if (message.error === 0) {
                console.log
				this.setState({
					// showMenuListState:true,
					routeList:message.data,
					routeLists:message.data
				})
				
			}else if(message.error === 2){
				sessionStorage.logged = false;
				sessionStorage.token="";
				if(window.location.hash.split("#")[1]!=="/"){
					window.location.href=window.location.href.split("#/")[0]
				  }
			}
		}
		getData(getRouter("client_route_list"), { token:sessionStorage.token}, cb, {});
			
	}
//     client_route() {
// 		var cb = (route, message, arg) => {
// 			if (message.error === 0) {
//                 var arr=[];
//                 var index =0;
//                 console.log(message.data.routelist)
//                 for(var i in message.data.routelist){
//                     index++;
//                     arr.push({id:index,name:i})
//                 }
// console.log(arr)
// sessionStorage.arr=JSON.stringify(arr);
// 			}else if(message.error === 2){
// 				console.log("未登录")
// 				sessionStorage.logged = false;
// 				sessionStorage.token="";
// 				if(window.location.hash.split("#")[1]!=="/"){
// 					window.location.href=window.location.href.split("#/")[0]
				
// 				  }
// 			}
// 		}
// 		getData(getRouter("hhh"), { token:sessionStorage.token }, cb, {});
//     }
del_myRoute=()=>{
    var route_ids=[];
    var my_route_check=document.getElementsByName("myRoute");
    for(var i = 0;i<my_route_check.length;i++){
        if(my_route_check[i].checked===true){
            console.log
            route_ids.push(my_route_check[i].value)
        }
    }
	console.log(route_ids)
	var cb = (route, message, arg) => {
		if (message.error === 0) {
			
		}else if(message.error === 2){
			sessionStorage.logged = false;
			sessionStorage.token="";
			if(window.location.hash.split("#")[1]!=="/"){
				window.location.href=window.location.href.split("#/")[0]
			  }
		}
	}
	//getData(getRouter("client_route_list"), { token:sessionStorage.token}, cb, {});
}
add_myRoute = ()=>{
    var route_ids=[];
    var my_route_check=document.getElementsByName("routeList");
    for(var i = 0;i<my_route_check.length;i++){
        if(my_route_check[i].checked===true){
            console.log
            route_ids.push(my_route_check[i].value)
        }
    }
	console.log(route_ids)
	var cb = (route, message, arg) => {
		if (message.error === 0) {
			
		}else if(message.error === 2){
			sessionStorage.logged = false;
			sessionStorage.token="";
			if(window.location.hash.split("#")[1]!=="/"){
				window.location.href=window.location.href.split("#/")[0]
			  }
		}
	}
	//getData(getRouter("client_route_list"), { token:sessionStorage.token}, cb, {});
}
	render(){
		return (
            <div>
                <div style={{overflow:"hidden"}} className="view_table_list ">
                <ul style={{height:"80vh",paddingBottom:"1em"}} className="overflow">
						{this.state.role_table_list.map((view,index)=>{
							return <li className="view_message_div" key={index}>
										<div style={{height:"1em"}} onClick={()=>{
											 this.my_route_list(view.id)
												
											}} >{view.name}
											</div>
										</li>
									})}
					</ul>
                </div>
                {this.state.showMenuListState?<div  className="view_list view_url_list overflow">
                    <span>
                        我的路由
                    </span>
					<ul>
						<li>
							<input id="myRouteAllCheck" onClick={()=>{
								 var checklist = document.getElementsByName("myRoute");
								 if(document.getElementById("myRouteAllCheck").checked) {
									 for(var i = 0; i < checklist.length; i++) {
										 checklist[i].checked = 1;
									 }
								 } else {
									 for(var j = 0; j < checklist.length; j++) {
										 checklist[j].checked = 0;
									 }
								 }
								
										// console.log(document.getElementsByName("menuLeftCheck").checked)
									}}  name="myRouteAllCheck" className="menucheckbox" type="checkbox"/>
							<span>
								全选
							</span>
						</li>
						{this.state.myRoute.map((myRoute,index)=>{
							return(
								<li key={index}>
									<input onChange={()=>{
										// console.log(document.getElementsByName("menuLeftCheck").checked)
									}} value={myRoute.id} name="myRoute" className="menucheckbox" type="checkbox"/>
									<span>
										{myRoute.name}
									</span>
							</li>
							)
						})}
					</ul>
					<button className="view_save_btn" onClick={()=>{
						this.del_myRoute()
					}}>
						删除
					</button>
                </div>:""}
                {this.state.showMenuListState?<div  className="view_list view_url_list overflow">
                    <span>
                        路由列表
                    </span>
					<ul>
						<li>
							<input onChange={(e)=>{
								var routeList=[];
								for(var i = 0;i<this.state.routeLists.length;i++){
									if(this.state.routeLists[i].name.indexOf(e.target.value)>= 0){
										routeList.push(this.state.routeLists[i])
									}
									this.setState({
										routeList:routeList
									})
								}
								this.setState({
									search_url_message:e.target.value
								})
							}} type="text" placeholder="搜索关键字" />
							<br/>
							{/* <button onClick={()=>{
								console.log(this.state.search_url_message)
								var routeList=[];
								for(var i = 0;i<this.state.routeLists.length;i++){
									if(this.state.routeLists[i].name.indexOf(this.state.search_url_message)>= 0){
										routeList.push(this.state.routeLists[i])
									}
									this.setState({
										routeList:routeList
									})
								}
							}}>搜索</button> */}
							<input id="routeListAllCheck" onClick={()=>{
								 var checklist = document.getElementsByName("routeList");
								 if(document.getElementById("routeListAllCheck").checked) {
									 for(var i = 0; i < checklist.length; i++) {
										 checklist[i].checked = 1;
									 }
								 } else {
									 for(var j = 0; j < checklist.length; j++) {
										 checklist[j].checked = 0;
									 }
								 }
								
										// console.log(document.getElementsByName("menuLeftCheck").checked)
									}}  name="routeListAllCheck" className="menucheckbox" type="checkbox"/>
							<span>
								全选
							</span>
						</li>
						{this.state.routeList.map((routeList,index)=>{
							return(
								<li key={index}>
									<input onChange={()=>{
										// console.log(document.getElementsByName("menuLeftCheck").checked)
									}} value={routeList.id} name="routeList" className="menucheckbox" type="checkbox"/>
									<span>
										{routeList.name}
									</span>
							</li>
							)
						})}
					</ul>
					<button className="view_save_btn" style={{marginBottom:"1em"}} onClick={()=>{
						this.add_myRoute()
					}}>
						添加到我的路由
					</button>
				</div>:""}
				{/* <Alert alertTitle={this.state.alertTitle} alertMsg = {this.state.alertMsg} sureCallback = {this.sureDelCallback.bind(this)} cancelCallback = { this.cancelDelCallback.bind(this) } alertState={this.state.alertDelState}/> */}
            </div>
		)
	}
}

export default UrlPower;
