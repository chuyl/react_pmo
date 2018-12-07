import React, {
	Component
} from 'react'
import { getData, getRouter } from '../../utils/helpers'
import ComponentsViewList from '../components/ComponentsViewList'
import SelectViewListSearch from '../components/SelectViewListSearch'
import ViewTextField from '../components/ViewTextField';
import Popup from '../components/Popup'
import Alert from '../components/Alert'
import SelectList from '../components/SelectList'
import Lang from '../../language'
class View extends Component {
   
	state = {
		view_table_list:[],//所有的视图json表
		this_view_list:[],//当前json内容,
		form_temp_name:[],//视图名称
		this_json_view:[],//获取当前某个组件json
		isViewJson:false,//打开修改paper状态
		is_view_list:false,//打开视图json状态
		index_json_view:"",//组件在视图中的位置
		selectedViewAddTitle:"",//在group里面修改的add_button里面的title
		componentsView:[],
		componentsComplexView:[],
		alertAddViewState:false, //弹出框的状态
		changeInterfaceState:false,//修改接口名称状态
		this_index_view_list:"",
		selectedViewTitle:"-选择-",//复杂视图更改时的默认视图
		selectedViewName:"",//group修改的名称
		selectedViewIndex:"",//card子组件位置
		selectedViewarrIndex:"",
		view_type:"",//视图的类型
		view_id:"",
		view_data:{},
		initializationData:[],//初始化cards的json结构
		change_interface:"",//修改接口名称
		change_key_interface:"",//修改接口key名称
		isShowAddButton:false,
		copy_message:"",
		alertCopyMsg:"是否确认复制",
		alertCopyStat:false,
		view_china_name:"",
		view_english_name:"",
		view_type_name:"formlist",
		id_name:"",
		type_name:"",
		key:"",
		title:"",
		tip: "",
		add_button: "",
		descript: "",
		before_api_uri: "",
		after_api_uri: "",
		pleaseSelect:"-选择-"
	};

	componentWillMount() {
		this.fetchListData()
	}
	/** 
	 * @time 2018-11-05
	 * @author xuesong
	 * @param fetchListData 函数 获取所有视图列表
	 */
	fetchListData() {
		var cb = (route, message, arg) => {
			if (message.error === 0) {
				sessionStorage.view=JSON.stringify(message.data);
				// var array = message.data;
				// var resultArray = array.sort(
				// function compareFunction(param1, param2) {
				// return param1.localeCompare(param2,"zh");
				// }
				// );
				// console.log(resultArray)
				this.setState({
					view_table_list:message.data	
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
		getData(getRouter("json_manage_list"), { token:sessionStorage.token }, cb, {});
	}
	/** 
	 * @time 2018-11-05
	 * @author xuesong
	 * @param viewList 函数 获取某一个视图列表json (简单的formlist)
	 */
	viewList=(list,index)=>{
	
	var json_view=JSON.parse(sessionStorage.view)
	for(var i=0;i<json_view.length;i++){
		if(json_view[i].name===list.name){
			
			var json_message=json_view[i].data;
			this.setState({
				this_view_list:json_message["form-list"],
				form_temp_name:json_message["form-temp-name"],
				is_view_list:true,
				isViewJson:false,
				view_type:list.type,
				this_index_view_list:index,
				view_china_name:list.title,
				view_english_name:list.name,
				view_id:list.id,
				view_data:json_message
				})
		}
	}
		// var cb = (route, message, arg) => {
		// 	console.log(list)
		// 	if (message.error === 0) {
		// 		var json_message=JSON.parse(message.data);
		// 		console.log(json_message)
		// 		this.setState({
		// 			this_view_list:json_message["form-list"],
		// 			form_temp_name:json_message["form-temp-name"],
		// 			is_view_list:true,
		// 			isViewJson:false,
		// 			view_type:list.type,
		// 			this_index_view_list:index,
		// 			view_china_name:list.title,
		// 			view_english_name:list.name,
		// 			view_id:list.id,
		// 			view_data:json_message
		// 		})
		// 	}
		// }
		// getData(getRouter("json_manage_name"), { name:list.name,token:sessionStorage.token }, cb, {});
	}
	/** 
	 * @time 2018-11-05
	 * @author xuesong
	 * @param ViewComplexList 函数 获取视图列表 
	 */
	// ViewComplexList=(list,index)=>{
	// 	var cb = (route, message, arg) => {
			
	// 		if (message.error === 0) {
	// 			this.setState({
	// 				this_view_list:message.data,
	// 				is_view_list:true,
	// 				this_index_view_list:index,
	// 				view_table_list:message.data	
	// 			})
	// 		}
	// 	}
	// 	getData(getRouter("viewManagement"), { token:sessionStorage.token }, cb, {});
	// }
	/** 
	 * @time 2018-11-05
	 * @author xuesong
	 * @param thisJsonView 函数 点击视图中数组获取详细json 
	 */
	thisJsonView=(newState)=>{

		 if(newState.form_list.type_name!=="CardGroup"&&newState.form_list.type_name!=="Cards"){
			var componentsView=[];
			//将组件的json数据变成数组
			for(var i in newState.form_list){
				componentsView.push(
					{key:i,value:newState.form_list[i]}
				)
			}
			if(this.state.isViewJson){
				setTimeout(function(){
					document.getElementById("isViewJson").classList.remove("open")
				},50)
			}
			setTimeout((e) => {
				document.getElementById("isViewJson").classList.add("open")
				this.setState({
					componentsComplexView:[],
					componentsView:componentsView,
					this_json_view:newState.form_list,
					index_json_view:newState.index,
					isViewJson:true,
					id_name:newState.form_list.id_name,
					type_name:newState.form_list.type_name,
					key:newState.form_list.key,
					title:newState.form_list.title,
					tip:newState.form_list.tip,
					add_button:newState.form_list.add_button,
					descript:newState.form_list.descript,
					before_api_uri:newState.form_list.before_api_uri,
					after_api_uri:newState.form_list.after_api_uri,
				})
			},100)	
         
		}else{
			var componentsComplexView=[];
			for(var m=0;m<this.state.view_table_list.length;m++){
				componentsComplexView.push(this.state.view_table_list[m])
			}
			if(this.state.isViewJson){
				setTimeout(function(){
					document.getElementById("isViewJson").classList.remove("open")
				},50)
			}
			setTimeout((e) => {
				document.getElementById("isViewJson").classList.add("open")
				this.setState({
					componentsView:[],
					componentsComplexView:componentsComplexView,
					isViewJson:true,
					index_json_view:newState.index,
				})
			},100)
			console.log(componentsComplexView)
			if(this.state.selectedViewTitle!=="-选择-"){
				this.setState({
					selectedViewTitle:"-选择-"
				})
			}
			
		}

	}
	/** 
	 * @time 2018-11-05
	 * @author xuesong
	 * @param editViewList 函数 编辑视图列表 
	 */
	editViewList=()=>{
		var select_type =  document.getElementById("view_type_name").innerHTML;
		var view_data=this.state.view_data;
		view_data["form-list"]=this.state.this_view_list;
		view_data["form-temp-name"]=this.state.view_china_name;
		console.log(this.state.view_china_name)
		var add_cb = (route, messages, arg) => {
			if (messages.error === 0) {
				this.setState({
					is_view_list:false,
					isViewJson:false,
					view_type:""
				})
				this.fetchListData()
			}else if(messages.error === 2){
				console.log("未登录")
				sessionStorage.logged = false;
				sessionStorage.token="";
				if(window.location.hash.split("#")[1]!=="/"){
					window.location.href=window.location.href.split("#/")[0]
				
				  }
			}
		}
		getData(getRouter("json_manage_edit"), 
		{ token:sessionStorage.token,
			data:{  id:this.state.view_id, 
					name:this.state.view_english_name,
					title:this.state.view_china_name,
					type:select_type,
					data:view_data} 
				}, add_cb, {});
	}
	
	/** 
	 * @time 2018-11-15
	 * @author xuesong
	 * @param changeGroupView 函数 编辑group组件视图名称 
	 */
	changeGroupView=(newState)=>{
		//下拉选择的数据
		var selectComplexView = document.getElementById("selectComplexView").innerHTML;
		var other_complex_list=[];
	   
		for(var m=0;m<this.state.this_view_list.length;m++){
			
		   if(m!==this.state.index_json_view){
			   other_complex_list.push(this.state.this_view_list[m])
		   }
		   else
		   {
			   var view_change_list=this.state.this_view_list[m];
			   //判断修改的组件是否为cards
			   if(this.state.this_view_list[m].type_name==="Cards"){
				   if(this.state.selectedViewIndex===1){ 
					   //selectedViewarrIndex card的body中页面的位置 selectedViewIndex card中子组件位置
					   view_change_list.add_button[this.state.selectedViewIndex].add_button[this.state.selectedViewarrIndex].add_button=newState.name;
					   view_change_list.add_button[this.state.selectedViewIndex].add_button[this.state.selectedViewarrIndex].title=selectComplexView;
				   }else{
					   view_change_list.add_button[this.state.selectedViewIndex].add_button=newState.name;
					   view_change_list.add_button[this.state.selectedViewIndex].title=selectComplexView
				   }
				   
				   other_complex_list.push(view_change_list)
				   this.setState({
					   this_view_list:other_complex_list
				   })
			   }else{
			   //修改视图中add_button里面的修改视图或者展示视图名称
			   view_change_list.add_button.descript=newState.name;
			   view_change_list.add_button.add_title="添加"+selectComplexView;
			   
			   //修改视图中add_button里面的修改视图或者展示视图title名称
			//    view_change_list.add_button[this.state.selectedViewAddTitle]=selectComplexView;
				view_change_list.add_button.descript_title=selectComplexView;  
				other_complex_list.push(view_change_list)
				this.setState({
					this_view_list:other_complex_list
				})
				}
			   
			   
		   }
			}
	}
	/** 
	 * @time 2018-11-16
	 * @author xuesong
	 * @param changeInterfaceMessage 函数 编辑group组件接口名称 
	 */
	changeInterfaceMessage=(event)=>{
		var other_list=[];
		for(var i=0;i<this.state.this_view_list.length;i++){
			if(i!==this.state.index_json_view){
				other_list.push(this.state.this_view_list[i])
			}else{
				var change_list=this.state.this_view_list[i];
				change_list.add_button[this.state.change_key_interface]=event.target.value;
				other_list.push(change_list)
			}
		}
		this.setState({
			this_view_list:other_list,
			change_interface:event.target.value
		})
		
	}
	/** 
	 * @time 2018-11-15
	 * @author xuesong
	 * @param changeformlistMessage 函数 编辑group组件接口名称 
	 */
	changeformlistMessage=(event,componentsView)=>{
		var other_list=[];
		for(var i=0;i<this.state.this_view_list.length;i++){
			if(i!==this.state.index_json_view){
				other_list.push(this.state.this_view_list[i])
			}else{
				var change_list=this.state.this_view_list[i];
				var key=componentsView.key;
				change_list[key]=event.target.value;
				other_list.push(change_list)
			}
		}
		this.setState({
			this_view_list:other_list
		})
	}
	/** 
	 * @time 2018-11-07
	 * @author xuesong
	 * @param cancelAddViewCallback 函数 弹出框取消
	 */
	cancelAddViewCallback(msg){
		this.setState({
			alertAddViewState:false
		})
	}
	/** 
	 * @time 2018-11-07
	 * @author xuesong
	 * @param sureAddViewCallback 函数 弹出框确定
	 */
	sureAddViewCallback(msg){
		console.log(this.state.view_id)
		this.state.view_id===""?this.addViewName():this.editViewName()
		
	}
	/** 
	 * @time 2018-11-07
	 * @author xuesong
	 * @param sureAddViewCallback 函数 弹出框确定发送信息的接口
	 */
	addViewName=()=>{
		var select_type =  document.getElementById("view_type_name").innerHTML;
				var cb = (route, message, arg) => {
					console.log(message.error)
					if (message.error === 0) {
						console.log(message.data)
						var message_temp=message.data;
						message_temp["form-temp-name"]=this.state.view_china_name;
						this.setState({
							alertAddViewState:false,
							initializationData:message_temp,
						})
					
					// if(select_type==="cards"){
					// 	var view_english_name=this.state.view_english_name;
					// 	var name=[view_english_name+"Card",view_english_name+"Head",view_english_name+"Page1",view_english_name+"Page2",view_english_name+"Page3",]
					// }else{
						var add_cb = (route, messages, arg) => {
							if (messages.error === 0) {
								this.fetchListData()
							}else if(messages.error === 2){
								console.log("未登录")
								sessionStorage.logged = false;
								sessionStorage.token="";
								if(window.location.hash.split("#")[1]!=="/"){
									window.location.href=window.location.href.split("#/")[0]
								
								  }
							}
						// }
						console.log(message_temp)
						
					}
					getData(getRouter("json_manage_add"), { token:sessionStorage.token,data:{name:this.state.view_english_name,title:this.state.view_china_name,type:select_type,data:message_temp} }, add_cb, {});
					
					}else if(message.error === 2){
						console.log("未登录")
						sessionStorage.logged = false;
						sessionStorage.token="";
						if(window.location.hash.split("#")[1]!=="/"){
							window.location.href=window.location.href.split("#/")[0]
						
						  }
					}
				}
				getData(getRouter(select_type==="cards"?"newCard":"newFormlistGroup"), { token:sessionStorage.token }, cb, {});
	}
    editViewMessage=(name)=>{
		var json_view=JSON.parse(sessionStorage.view)
		for(var i=0;i<json_view.length;i++){
			if(json_view[i].name===name){
				console.log(json_view[i].data)
				var json_message=json_view[i].data;
				if(json_message!==null){
					json_message["form-temp-name"]=this.state.view_china_name;
					console.log(json_message)
					this.setState({
						initializationData:json_message,
						
					})
					// var message_temp=json_view[i].data;
					// message_temp["form-temp-name"]=this.state.view_china_name;
				}
				
			}
		}
		// var cb = (route, message, arg) => {
		// 	if (message.error === 0) {
		// 		this.setState({
		// 			// alertAddViewState:false,
		// 			initializationData:JSON.parse(message.data),
					
		// 		})
		// 		var message_temp=JSON.parse(message.data);
		// 		message_temp["form-temp-name"]=this.state.view_china_name;
		// 				}
		//  }
		//  getData(getRouter("json_manage_name"), { name:name,token:sessionStorage.token }, cb, {});
	}

		/** 
	 * @time 2018-11-07
	 * @author xuesong
	 * @param editViewName 函数 弹出框确定发送修改信息的接口
	 */
	editViewName=()=>{
		var select_type =  document.getElementById("view_type_name").innerHTML;
	
		var add_cb = (route, messages, arg) => {
			if (messages.error === 0) {
				this.fetchListData()
				this.setState({
					alertAddViewState:false,
				})
					}else if(messages.error === 2){
						console.log("未登录")
						sessionStorage.logged = false;
						sessionStorage.token="";
						if(window.location.hash.split("#")[1]!=="/"){
							window.location.href=window.location.href.split("#/")[0]
						
						  }
					}
				}

				var message_temp=this.state.initializationData;
					message_temp["form-temp-name"]=this.state.view_china_name;
				getData(getRouter("json_manage_edit"), 
				{ token:sessionStorage.token,
					data:{  id:this.state.view_id, 
							name:this.state.view_english_name,
							title:this.state.view_china_name,
							type:select_type,
							data:message_temp} 
						}, add_cb, {});
	
		

	}

	/** 
	 * @time 2018-11-09
	 * @author xuesong
	 * @param descriptViewButton 函数 Group展示按钮
	 */
	descriptViewButton=(newState)=>{
		this.getViewButtomTitle(newState)
	}
	/** 
	 * @time 2018-11-16
	 * @author xuesong
	 * @param interfaceViewData 函数 获取group接口名称修改点击事件
	 */
	interfaceViewData=(newState)=>{
         this.setState({
			changeInterfaceState:true,//修改接口的状态
			change_key_interface:newState.name,
			change_interface:newState.data,
		
		 })
	}
	/** 
	 * @time 2018-11-12
	 * @author xuesong
	 * @param getViewButtomTitle 函数 获取group相应的view名称显示在选择修改视图的位置
	 */
	getViewButtomTitle=(newState)=>{
		
		for(var i=0;i<this.state.view_table_list.length;i++){
			this.setState({
				selectedViewIndex:newState.index,
				selectedViewarrIndex:newState.arrIndex,
				changeInterfaceState:false,//修改接口的状态
			})
			
			if(newState.view===this.state.view_table_list[i].name&&newState.addButtonTitle===this.state.view_table_list[i].title){
				this.setState({
					selectedViewTitle:this.state.view_table_list[i].title,
					selectedViewName:newState.name,
					selectedViewAddTitle:newState.title,
					
				})
			}
			
		}
		if(newState.addButtonTitle.indexOf("未设置")>=0){
			this.setState({
				selectedViewTitle:"选择"
			})
		}
	}
	/** 
	 * @time 2018-11-12
	 * @author xuesong
	 * @param descriptViewButton 函数 Group展示按钮
	 */
	selectViewGetValue=(newState)=>{

		this.changeGroupView(newState)

	}
	/** 
	 * @time 2018-11-16
	 * @author xuesong
	 * @param delViewContent 函数 删除视图内容
	 */
	delViewContent=(index)=>{
		var newList=[];
		for(var i = 0;i<this.state.this_view_list.length;i++){
			if(i!==index){
				newList.push(this.state.this_view_list[i])
			}
		}
		this.setState({
			this_view_list:newList
		})
	}
	/** 
	 * @time 2018-11-16
	 * @author xuesong
	 * @param changeViewMessage 函数 修改视图列表信息
	 */
	changeViewMessage=(message)=>{
		console.log(message)
		this.editViewMessage(message.name)
		this.setState({
			alertAddViewState:true,
			view_china_name:message.title,
			view_english_name:message.name,
			view_type_name:message.type,
			view_id:message.id

		})
	}
		/** 
	 * @time 2018-11-29
	 * @author xuesong
	 * @param copyViewMessage 函数 一键复制视图
	 */
	copyViewMessage=(message)=>{
		console.log(message)
		var name = message.name+"copy",
			title = message.title+"复制",
			type = message.type,
			data = message.data;
			var cb = (route, messages, arg) => {
				if (messages.error === 0) {
					this.setState({
						alertCopyState:false
					})
					this.fetchListData()
				}else if(messages.error === 2){
					console.log("未登录")
					sessionStorage.logged = false;
					sessionStorage.token="";
					if(window.location.hash.split("#")[1]!=="/"){
						window.location.href=window.location.href.split("#/")[0]
					
					  }
				}
			}
			getData(getRouter("json_manage_add"), { token:sessionStorage.token,data:{name:name,title:title,type:type,data:data} }, cb, {});
			

	}
	/** 
	 * @time 2018-11-29
	 * @author xuesong
	 * @param sureCopyCallback 函数 一键复制视图
	 */
	sureCopyCallback=()=>{
		// console.log(this.state.copy_message.name)
		this.copyViewMessage(this.state.copy_message)

	}
			/** 
	 * @time 2018-11-29
	 * @author xuesong
	 * @param cancelCopyCallback 函数 一键复制视图
	 */
	cancelCopyCallback=()=>{
		this.setState({
			alertCopyState:false
		})		
	}
			

	/** 
	 * @time 2018-11-20
	 * @author xuesong
	 * @param add_formlist 函数 添加一个formlist组件
	 */
	add_formlist=()=>{
		var cb = (route, message, arg) => {
			if (message.error === 0) {
				var formlist=this.state.this_view_list;
				console.log(formlist)
				formlist.push(message.data)
				this.setState({
					this_view_list:formlist
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
		
		getData(getRouter("newFormlist"), { token:sessionStorage.token }, cb, {});
	}
	/** 
	 * @time 2018-11-20
	 * @author xuesong
	 * @param add_group 函数 添加一个group组件
	 */
	add_group=()=>{
		var cb = (route, message, arg) => {
			if (message.error === 0) {
				var cb = (route, message, arg) => {
					if (message.error === 0) {
						var formlist=this.state.this_view_list;
						formlist.push(message.data)
						this.setState({
							this_view_list:formlist
						})
					}
				}
				getData(getRouter("newGroup"), { token:sessionStorage.token }, cb, {});
			}else if(message.error === 2){
				console.log("未登录")
				sessionStorage.logged = false;
				sessionStorage.token="";
				if(window.location.hash.split("#")[1]!=="/"){
					window.location.href=window.location.href.split("#/")[0]
				
				  }
			}
		}
		getData(getRouter("newGroup"), { token:sessionStorage.token }, cb, {});
	}
	render() {

		return(
			<div>
				<div style={{overflow:"hidden"}} className="view_table_list ">
				<button style={{marginBottom:"5px"}} className="add_card_btn" onClick={()=>{
						this.setState({
							alertAddViewState:true,
							view_type_name:"formlist",
							view_china_name:"",
							view_english_name:"",
							view_id:""
						})
					}} >添加</button>
					{/* <button onClick={()=>{
						var cb = (route, message, arg) => {
							
						}
						console.log(Lang)
						getData(getRouter("menu_manage_add"), { token:sessionStorage.token,data:Lang }, cb, {});
					}}>添加</button> */}
					{/* <button onClick={()=>{
						var cb = (route, message, arg) => {
							if (message.error === 0) {
							
								}
						}
						getData(getRouter("json_add"), { token:sessionStorage.token,data: this.state.view_table_list}, cb, {});
					}}>发送data</button> */}
					<ul style={{height:"88vh",paddingBottom:"1em"}} className="overflow">
						{this.state.view_table_list.map((view,index)=>{
							return <li className="view_message_div" key={index}><div onClick={()=>{
										this.viewList(view,index)
										
										}} >{view.title}</div>
										<button style={{width:"70px"}} className="label_delete_button" onClick={()=>{
											this.changeViewMessage(view)
											
										}}>修改名称
										</button>
										<button style={{width:"40px"}} className="label_delete_button" onClick={()=>{
											this.setState({
												copy_message:view,
												alertCopyState:true
											})
											// this.copyViewMessage(view)
											
										}}>复制
										</button>
									</li>
								})}
					</ul>
					
				</div>
				<div  className="view_list overflow">
				
				{this.state.view_type==="cards"||this.state.view_type===""?"":
							<div className="add_component_btns">
								<button style={{marginBottom:"5px",width:"100px"}} className="label_delete_button" onClick={()=>{
									this.add_formlist()
									}} >添加formlist
								</button>
								<button style={{marginBottom:"5px",width:"100px"}} className="label_delete_button" onClick={()=>{
									this.add_group()
									}} >添加group
								</button>
							</div>}
					
					<div className={this.state.is_view_list?"view_paper_list overflow open":"view_paper_list overflow"}>
						
						< ComponentsViewList 
						   
							descriptViewonClickButton={this.descriptViewButton}
							handleViewJson={this.thisJsonView} 
							delViewIndexContent={this.delViewContent}
							interfaceViewDataButton={this.interfaceViewData}
							componentslist = {this.state.this_view_list?this.state.this_view_list:[]}  ></ComponentsViewList > 
						<hr className="view_change_hr"></hr>
						<button className="view_change_btn" onClick={()=>{
							this.editViewList()
						}}>保存</button>
					</div>
				</div>
				<div className="view_list overflow">
				
					<div id="isViewJson" style={{marginTop:"2em"}} className={this.state.isViewJson?"view_paper_list overflow open":"view_paper_list overflow"}>
					{this.state.componentsView.map((componentsView,index)=>{
						return(
							<ViewTextField 
								key={this.state.this_index_view_list+""+this.state.index_json_view+""+index}
								inputValue={componentsView.value} 
								 labelValue={componentsView.key=== "id_name"?"数据名称"
											 :componentsView.key==="type_name"?"组件名称"
											 :componentsView.key==="title"?"输入框标题"
											 :componentsView.key==="default_value"?"显示默认值"
											 :componentsView.key==="key"?"输入框默认值"
											 :componentsView.key==="tip"?"提示"
											 :componentsView.key==="add_button"?"关联"
											 :componentsView.key==="descript"?"描述"
											 :componentsView.key==="before_api_uri"?"数据接口"
											 :componentsView.key==="after_api_uri"?"发送接口"
											 :""} 
											 

								//labelValue={componentsView.key} 
								onChange={(event) => {
									this.changeformlistMessage(event,componentsView)
									}} 
						/>
						)
					})}
					{this.state.componentsComplexView.length>1?
							this.state.changeInterfaceState===false?<SelectViewListSearch
								labelValue={"更改视图"}
								id={"selectComplexView"}
								selectedInfo={this.state.selectedViewTitle}
								selectViewValue={this.selectViewGetValue}
								selectLists={this.state.view_table_list}
							/>:<ViewTextField 
									value={this.state.change_interface} 
									labelValue={"名称"} 
									onChange={(event) => {
										this.changeInterfaceMessage(event)
									
										}} 
								/>
					:""}
						{/* <button onClick={()=>{
						
							this.editJsonView()
						}}>确定</button> */}
					</div>
				</div>
				<Popup 
					content={
						<div>
							<h2>视图</h2>
								{/* <p>{this.props.alertMsg}</p> */}
							<ViewTextField 
								onChange={(e)=>{
									this.setState({
										view_china_name:e.target.value
										})
								}}
								value={this.state.view_china_name} 
								labelValue={"中文名称"} 
							/>
							<ViewTextField 
								onChange={(e)=>{
									this.setState({
										view_english_name:e.target.value
									})
								}}
								value={this.state.view_english_name} 
								labelValue={"英文名称"} 
							/>
							<SelectList 
								id={"view_type"} 
								labelValue={"类型"}
								searchInfoLists={"view_type"} 
								selectedIdInfo={this.state.view_type_name} 
								selectedInfo={this.state.view_type_name} 
							/> 
						</div>
					}	 
						// alertMsg = {this.state.alertMsg} 
					sureCallback = {this.sureAddViewCallback.bind(this)} 
					cancelCallback = { this.cancelAddViewCallback.bind(this) } 
					alertState={this.state.alertAddViewState}
				/>
				<Alert alertTitle={"一键复制"} alertMsg = {this.state.alertCopyMsg} sureCallback = {this.sureCopyCallback.bind(this)} cancelCallback = { this.cancelCopyCallback.bind(this) } alertState={this.state.alertCopyState}/>
			</div>
			
		);
	}
}

export default View;