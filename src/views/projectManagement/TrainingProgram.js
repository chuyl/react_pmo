import React, {
	Component
} from 'react'
//import Card from '../Card'
import Cards from '../components/Cards'
//import TextField from '../components/TextField'
//import TextMoney from '../components/TextMoney'
//import AddInfo from '../components/AddInfo'
//import ListText from '../../components/ListText'
import ComponentsList from '../components/ComponentsList'
//import TextDatetime from '../components/TextDatetime'
//import BudgetListTextSearchLink from './BudgetListTextSearchLink'
import { getData, getRouter } from '../../utils/helpers'
import {PROJECTMANAGELIST} from '../../enum'
//import PropTypes from 'prop-types'; 

class TrainingProgram extends Component {
   
	state = {
		//预算list内容
		// card_list: [{
		// 	    id:"94",
		// 		project_customer_name:"客户44444",
		// 		project_days:"2018-05-01",
		// 		project_gather_name:"项目集1",
		// 		project_gather_id:"1",
		// 		project_name:"",
		// 		project_person_in_charge_name:"负责人1",
		// 		project_person_in_charge_id:"1",
		// 		project_project_template_name:"公共培训部",
		// 		project_project_template_id:"1",
		// 		project_training_ares:"中软大厦",
		// 		project_training_numbers:"1",
		// 	}, {
		// 		id:"2",
		// 		project_customer_name:"客户2",
		// 		project_days:"2018-06-01",
		// 		project_gather_name:"项目集2",
		// 		project_gather_id:"2",
		// 		project_name:"课程2",
		// 		project_person_in_charge_name:"负责人2",
		// 		project_person_in_charge_id:"2",
		// 		project_project_template_name:"公共培训部",
		// 		project_project_template_id:"1",
		// 		project_training_ares:"中软大厦",
		// 		project_training_numbers:"3",
		// 	},
		// 	{
		// 		id:"3",
		// 		project_customer_name:"客户3",
		// 		project_days:"2018-07-01",
		// 		project_gather_name:"项目集3",
		// 		project_gather_id:"3",
		// 		project_name:"课程3",
		// 		project_person_in_charge_name:"负责人1",
		// 		project_person_in_charge_id:"1",
		// 		project_project_template_name:"公共培训部",
		// 		project_project_template_id:"1",
		// 		project_training_ares:"中软大厦",
		// 		project_training_numbers:"1",
		// 	},
		// 	{
		// 		id:"4",
		// 		project_customer_name:"客户4",
		// 		project_days:"2018-08-01",
		// 		project_gather_name:"项目集4",
		// 		project_gather_id:"4",
		// 		project_name:"课程1",
		// 		project_person_in_charge_name:"负责人1",
		// 		project_person_in_charge_id:"1",
		// 		project_project_template_name:"公共培训部",
		// 		project_project_template_id:"1",
		// 		project_training_ares:"中软大厦",
		// 		project_training_numbers:"1",
		// 	}
		// ],
		card_list:[],
		selected_card: [],
		card_state: false,
		edit_project_data:[],
		form_temp_name: "",
		projectCard:[],//card的json
		dataId:"",//点击card按钮获取到的card的id值
		projectList:[]
	};

	componentWillMount() {
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

			}
		}
		getData(getRouter(PROJECTMANAGELIST), { token: "tnkGNc" }, cb, {});

	}
	fetchListData() {
		var cb = (route, message, arg) => {
			if (message.error === 0) {
				this.setState({
					projectCard: message.data["card-list"],
		 			form_temp_name:message.data["form-temp-name"],
				})

			}
		}
		getData(getRouter("ProjectCard"), { token: "tnkGNc" }, cb, {});
	}
	fetchProjectDataList() {
		var cb = (route, message, arg) => {
		}
		getData(getRouter("Project"), { token: "tnkGNc" }, cb, {});
	}
	/** 
	 * @author xuesong
	 * @param card_box_close 函数  关闭paper
	 */
	fetchProjectData(url) {
		var cb = (route, message, arg) => {
			if (message.error === 0) {
				this.setState({
					add_button: message.data["form-list"],
					form_temp_name:message.data["form-temp-name"],
				})

			}
		}
		getData(getRouter(url), { token: "tnkGNc" }, cb, {});		
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
			
		if(newState){
			// this.setState(newState);
			if(this.state.card_state){
				setTimeout(function(){
					document.getElementById("card_box").classList.remove("open")
				},100)
			}
			setTimeout((e) => {
				document.getElementById("card_box").classList.add("open")
				console.log(newState)
				this.setState({
				  add_button:newState.add_button,
				  card_state:true,
				  dataId:newState.dataId,
				  edit_project_data:newState.data,
				  form_temp_name:newState.form_temp_name,
				})
			},200)			
			  
		}
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
				if(list_message[i].type_name==="ListTextSearch"||list_message[i].type_name==="SelectList"){
					if(this.state.dataId!==""){
						value.push(list_message[i].id_name+"_name")
						key_name.push(document.getElementById(list_message[i].id_name+"_name").innerHTML=== "-选择-" ? "" : document.getElementById(list_message[i].id_name+"_name").innerHTML)
						value.push(list_message[i].id_name+"_id")
						key_name.push(document.getElementById(list_message[i].id_name+"_id").innerHTML=== "-选择-" ? "" : document.getElementById(list_message[i].id_name+"_id").innerHTML)	
					}
					else{
						value.push(list_message[i].id_name+"_name")
						key_name.push(document.getElementById(list_message[i].id_name+"_name").innerHTML=== "-选择-" ? "" : document.getElementById(list_message[i].id_name+"_name").innerHTML)
						value.push(list_message[i].id_name+"_id")
						key_name.push(document.getElementById(list_message[i].id_name+"_id").innerHTML=== "-选择-" ? "" : document.getElementById(list_message[i].id_name+"_id").innerHTML)	
					}		
					 }
				else{
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
					console.log(message.data.id)//项目创建成功,生成的id
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
		getData(getRouter(newState.before_api_uri), {data:obj,token:"tnkGNc"}, cb, {});
	  }
	
	render() {
		return(
			<div>
				<div id="" className="container">
					<div className="add_button" onClick={(e) => {
						this.fetchProjectData("AddProject")
						this.card_box_concent([], e)
						this.setState({
							edit_project_data:[],
							dataId:""
						})
					    }}
					>
						添加
					</div>
					<div className="overflow crius-card-list">
						{this.state.card_list?this.state.card_list.map(card_list => {
							return <Cards 
							    onChanges = {this.handleChildChange}
								id={card_list.id}
								card_list={card_list}
								add_button={this.state.projectCard}
								key={card_list.id} 
								 />
						}):""}
					</div>
				</div>
				<div className="paper_div">
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
								< ComponentsList dataId={this.state.dataId} holdClick={this.onHoldClicks} componentslist =  {this.state.add_button?this.state.add_button:[]} componentsdata = {this.state.edit_project_data} ></ComponentsList > 
						   </div>		
								: ""}
						</div>
					</div>


				</div>
			</div>
		);
	}
}

export default TrainingProgram;