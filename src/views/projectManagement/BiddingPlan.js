import React, {
	Component
} from 'react'
// import Cards from '../components/Cards'
import Alert from '../components/Remind'
import ComponentsList from '../components/ComponentsList'
import { getData, getRouter } from '../../utils/helpers'
import {PROJECTMANAGELIST} from '../../enum'

class BiddingPlan extends Component {
   
	state = {
		card_list:[],//项目信息列表
		selected_card: [],
		card_state: false,
		edit_project_data:[],
		form_temp_name: "",
		projectCard:[],//card的json
		dataId:"",//点击card按钮获取到的card的id值
		projectList:[],
		addCardGroupState:"",
		remind_state:false

	};

	componentDidMount() {
		this.listProject()
		this.fetchListData()
        this.fetchProjectDataList()
	}
	listProject(){
		var cb = (route, message, arg) => {

			if (message.error === 0) {
				this.setState({
					card_list:message.data
				})
			}else{
				Alert.open({
					alertTip:message.msg
				});
				setTimeout(function(){
					Alert.close();
				 },3000)
			}
		}
		getData(getRouter("program_manage_list"), { token:sessionStorage.token }, cb, {});

	}
	fetchListData() {
		var json_view=JSON.parse(sessionStorage.view)
		for(var i=0;i<json_view.length;i++){
			if(json_view[i].name==="projectGatherCards"){
				
				var json_message=JSON.parse(json_view[i].data);
				this.setState({
					projectCard: json_message["form-list"],
		 			form_temp_name:json_message["form-temp-name"],
				})

			}
		}
		// var cb = (route, message, arg) => {
		// 	if (message.error === 0) {
		// 		var json_message=JSON.parse(message.data);
		// 		this.setState({
		// 			projectCard: json_message["form-list"],
		//  			form_temp_name:json_message["form-temp-name"],
		// 		})

		// 	}
		// }
		
		// getData(getRouter("json_manage_name"), { name:"projectGatherCards",token:sessionStorage.token }, cb, {});
	}
	fetchProjectDataList() {
		var cb = (route, message, arg) => {
		}
		getData(getRouter("Project"), { token:sessionStorage.token }, cb, {});
	}
	/** 
	 * @author xuesong
	 * @param card_box_close 函数  关闭paper
	 */
	fetchProjectData(url) {
		var json_view=JSON.parse(sessionStorage.view)
        for(var i=0;i<json_view.length;i++){
            if(json_view[i].name===url){
                
                var json_message=JSON.parse(json_view[i].data);
				this.setState({
					add_button: json_message["form-list"],
					form_temp_name:json_message["form-temp-name"],
				})
            }
        }
		// var cb = (route, message, arg) => {
		// 	if (message.error === 0) {
		// 		var json_message=JSON.parse(message.data);
		// 		this.setState({
		// 			add_button: json_message["form-list"],
		// 			form_temp_name:json_message["form-temp-name"],
		// 		})

		// 	}
		// }
		// getData(getRouter("json_manage_name"), { name:url,token:sessionStorage.token }, cb, {});		
	}

	/** 
	 * @author xuesong
	 * @param card_box_concent 函数  打开paper
	 */

	card_box_concent(selected_card, e) {

		this.setState({
			selected_card: selected_card,
			card_state: true
		})
		if(document.body.clientWidth <= 768) {
			document.getElementById("card_box").style.height = document.documentElement.clientHeight + "px"
		}
	}
	/** 
	 * @author xuesong
	 * @param card_box_close 函数  关闭paper
	 */
	card_box_close = () => {
		this.setState({
			selected_card: [],
			card_state: false
		})
		if(document.body.clientWidth <= 768) {
			document.getElementById("card_box").setAttribute("style", " ");
		}
	}
	/** 
	 * @time 2018-09-27
	 * @author xuesong
	 * @param handleChildChange 函数 出来Link返回的数据 
	 */
	handleChildChange=(newState)=>{ //处理子函数传回来的state,改变自身的state
		console.log(newState)
		if(newState){
			// this.setState(newState);
			if(this.state.card_state){
				setTimeout(function(){
					document.getElementById("card_box").classList.remove("open")
				},50)
			}
			setTimeout((e) => {
				document.getElementById("card_box").classList.add("open")
				this.setState({
				  add_button:newState.add_button,
				  card_state:true,
				  dataId:newState.dataId,
				  edit_project_data:newState.data,
				  form_temp_name:newState.form_temp_name,
				})
			},100)			
			  
		}
	  }
	/** 
	 * @time 2018-10-23
	 * @author xuesong
	 * @param freshCardGroup 函数 CardGroup添加Card的回调函数
	 */
	  freshCardGroup=(newState)=>{
		this.setState({
			edit_project_data:[]
			
		  })
		var cb = (route, message, arg) =>  {
            if (message.error === 0) {
				this.setState({
								// add_button:message.data["form-list"],
					card_state:true,
					edit_project_data:message.data,
					dataId:this.state.dataId
								
				})
				this.listProject()  //刷新项目列表
			}
		}
					//获取数据接口
		getData(getRouter(newState.freshName),  {token:sessionStorage.token, id:newState.id }, cb,  {}); 
				
			}
		
	 /** 
	 * @time 2018-09-28
	 * @author xuesong
	 * @param onHoldClicks 函数 点击保存按钮发送数据
	 */ 
	onHoldClicks =(newState)=>{
		var key_name = [];
		var value = [];
		var list_message=this.state.add_button;
		if(this.state.dataId){
			value.push("parent_id")
			key_name.push(this.state.dataId)
		}
		for (var i = 0; i < list_message.length; i++) {
			if(list_message[i].type_name!=="HoldBtn"){
				if(list_message[i].type_name==="ListTextSearch"||list_message[i].type_name==="SelectList"||list_message[i].type_name==="SelectListSearch"){
						value.push(list_message[i].id_name+"_name")
						key_name.push(document.getElementById(list_message[i].id_name+"_name").innerHTML=== "-选择-" ? "" : document.getElementById(list_message[i].id_name+"_name").innerHTML)
						value.push(list_message[i].id_name+"_id")
						key_name.push(document.getElementById(list_message[i].id_name+"_id").innerHTML=== "-选择-" ? "" : document.getElementById(list_message[i].id_name+"_id").innerHTML)	
						
					 }
					 else if(list_message[i].type_name==="TextArea"){
						value.push(list_message[i].id_name)
						key_name.push(document.getElementById(list_message[i].id_name).value)
					}else{
					value.push(list_message[i].id_name)
					key_name.push(document.getElementById(list_message[i].id_name).innerHTML=== "-选择-" ? "" : document.getElementById(list_message[i].id_name).innerHTML || document.getElementById(list_message[i].id_name).value=== "-选择-" ? "" : document.getElementById(list_message[i].id_name).value)
					}
			}			 
		  
		}
		var obj = {};
		for(var j=0;j<value.length;j++){
			obj[value[j]] =key_name[j];
		}
		// componentslist =  {this.state.add_button?this.state.add_button:[]} componentsdata = {this.state.edit_project_data
		var cb = (route, message, arg) => {
			if(newState.before_api_uri==="project_manage_add"){
				if (message.error === 0) {
					this.fetchProjectData("editProject")
					this.setState({    //  项目创建成功,打开编辑页面。更新view
						dataId:message.data.id,
					}) 
			}
			
			}else{
					this.setState({    //  项目创建成功,打开编辑页面。更新view
					card_state:false
				}) 
				this.listProject()  //刷新项目列表
			}
	}
		getData(getRouter(newState.before_api_uri), {data:obj,token:sessionStorage.token}, cb, {});
	  }
	render() {
		return(
			<div>
				<div id="" className="container">
					<div>
						<div className="add_button" onClick={(e) => {
							this.fetchProjectData("addProjectGather")
							this.card_box_concent([], e)
							this.setState({
								edit_project_data:[],
								dataId:""
							})
							}}
						>
							添加
						</div>
					</div>
					<div className="overflow crius-card-list">
						{this.state.card_list!==null?this.state.card_list.map((card_list,index) => {
							return (
								<ComponentsList index={index}  sevenChange = {this.handleChildChange} key={index} componentslist =  {this.state.projectCard} componentsdata = {card_list} ></ComponentsList > 

								// <Cards 
								// 		index={index}
								// 		sixChange = {this.handleChildChange}
								// 		id={card_list.id}
								// 		card_list={card_list}
								// 		add_button={this.state.projectCard}
								// 		key={card_list.id} 
								// 		/>
							)
								}):""}
					</div>
				</div>
				<div className={this.state.card_state?"paper_div open":"paper_div"}>
					<div id="card_box" onClick={(event) => {
						}} className={this.state.card_state ? "card_box overflow open" : "card_box"}>
						<div style={this.state.card_state ? { display: "" } : { display: "none" }} className="paper_card_title">
							<div onClick={this.card_box_close} className="return_btn"></div>
							{this.state.form_temp_name}
						</div>
						<div className="selected_scroll_div" style={{ padding: "0 18px" }}>
							{/* paper详细内容 */}
							{this.state.card_state ?//判断paper是否可见
								<div key={this.state.dataId?this.state.dataId:"addComponents"} id="editComponents">
								<ComponentsList editCardGroupState={this.freshCardGroup} editCardGroupStates={this.freshCardGroup} dataId={this.state.dataId} holdClick={this.onHoldClicks} componentslist =  {this.state.add_button?this.state.add_button:[]} componentsdata = {this.state.edit_project_data} ></ComponentsList > 
						   </div>		
								: ""}
						</div>
					</div>


				</div>
			</div>
		);
	}
}

export default BiddingPlan;