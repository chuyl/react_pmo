import React, {
	Component
} from 'react'
import Card from '../Card'
//import TextField from '../components/TextField'
//import TextMoney from '../components/TextMoney'
//import AddInfo from '../components/AddInfo'
//import ListText from '../../components/ListText'
import ComponentsList from '../components/ComponentsList'
//import TextDatetime from '../components/TextDatetime'
//import BudgetListTextSearchLink from './BudgetListTextSearchLink'
import { getData, getRouter } from '../../utils/helpers'
import { ADDPROJECT, LISTPROJECT} from '../../enum'

class TrainingProgram extends Component {
   
	state = {
		//预算list内容
		// card_list: [{
		// 	    id:"1",
		// 		project_customer_name:"客户1",
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
		search_info_list: false,
		card_state: false,
		add_customer: false,
		customer_name: "",
		budget_message_paper: [],
		teacher_form_list: [],
		edit_project_data:[],
		form_temp_name: "",
	};
	// componentWillMount() {
	// 	this.fetchMessageData()

	// }
	componentDidMount() {

		this.fetchData()
		this.listProject()

		//	console.log(this.state.budget_paper)

	}
	listProject(){
		var cb = (route, message, arg) => {
			if (message.code === 0) {
				this.setState({
					card_list:message.data
				})
			}
		}
		getData(getRouter(LISTPROJECT), { session: "tnkGNc" }, cb, {});

	}
	/** 
	 * @author xuesong
	 * @param fetchData 函数名  获取本地json内容
	 */

	fetchData() {
		fetch('../json/editProject.json')
			.then(response => response.json())
			.then(data => {
               
				this.setState({
					add_button: data.adit_project.data["form-list"],
					form_temp_name:data.adit_project.data["form-temp-name"],

				})
			})
			.catch(e => {
				console.log("error")
			})
	}
	// /** 
	//  * @author xuesong
	//  * @param fetchMessageData 函数名  获取本地json数据内容
	//  */
	// fetchMessageData() {
	// 	fetch('../data/budgetManageData.json')
	// 		.then(response => response.json())
	// 		.then(data => {
	// 			this.setState({
	// 				budget_message_paper: data
	// 			})
	// 		})
	// 		.catch(e => {
	// 			console.log("error")
	// 		})
	// }
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
	 * @author xuesong
	 * @param project_index_add 函数 添加项目 
	 */
	project_index_add = (list_message)=>{
		var key_name = [];
		var value = [];
		console.log(document.getElementById("project_gather_name").innerHTML)
		for (var i = 0; i < list_message.length; i++) {
			 if(list_message[i].type_name!=="LinkCard"){
				 if(list_message[i].type_name==="ListTextSearch"||list_message[i].type_name==="SelectList"){
					if(this.state.edit_project_data.id!==undefined){
						value.push("id")
						key_name.push(this.state.edit_project_data.id)
						value.push(list_message[i].id_name+"_name")
						// value.push("session")
						 key_name.push(document.getElementById(list_message[i].id_name+"_name").innerHTML=== "-选择-" ? "" : document.getElementById(list_message[i].id_name+"_name").innerHTML)
						 value.push(list_message[i].id_name+"_id")
						// value.push("session")
						 key_name.push(document.getElementById(list_message[i].id_name+"_id").innerHTML=== "-选择-" ? "" : document.getElementById(list_message[i].id_name+"_id").innerHTML || document.getElementById(list_message[i].id_name+"_id").value=== "-选择-" ? "" : document.getElementById(list_message[i].id_name+"_id").value)
					}else{
						value.push(list_message[i].id_name+"_name")
						// value.push("session")
						 key_name.push(document.getElementById(list_message[i].id_name+"_name").innerHTML=== "-选择-" ? "" : document.getElementById(list_message[i].id_name+"_name").innerHTML)
						 value.push(list_message[i].id_name+"_id")
						// value.push("session")
						 key_name.push(document.getElementById(list_message[i].id_name+"_id").innerHTML=== "-选择-" ? "" : document.getElementById(list_message[i].id_name+"_id").innerHTML || document.getElementById(list_message[i].id_name+"_id").value=== "-选择-" ? "" : document.getElementById(list_message[i].id_name+"_id").value)
					}
					
				 }else{
				value.push(list_message[i].id_name)
				// value.push("session")
				 key_name.push(document.getElementById(list_message[i].id_name).innerHTML=== "-选择-" ? "" : document.getElementById(list_message[i].id_name).innerHTML || document.getElementById(list_message[i].id_name).value=== "-选择-" ? "" : document.getElementById(list_message[i].id_name).value)
			  
				 //  key_name.push("tnkGNc")
				}			 
				}
		  
		}
		var obj = {};
		for(var j=0;j<value.length;j++){
			obj[value[j]] =key_name[j];
		}
		var cb = (route, message, arg) => {
			if (message.code === 0) {
				this.setState({
					card_state:false
				})
				this.listProject()
			}

		}
		console.log(obj)
		getData(getRouter(ADDPROJECT), {data:obj}, cb, {});
	}
	editComponents = () => {
		console.log(this.state.edit_project_data.id)
        var components = []
            components.push(
				<div key={this.state.edit_project_data.id===undefined?"addComponents":this.state.edit_project_data.id} id="editComponents">
					 < ComponentsList componentslist =  {this.state.add_button} componentsdata = {this.state.edit_project_data} ></ComponentsList > 
						<button  onClick={()=>{
							this.project_index_add(this.state.add_button)
						}} className="hold_btn">保存</button>
				</div>				
                )
        
        return components
	}
	render() {
		return(
			<div>
				<div id="" className="container">
					<div className="add_button" onClick={(e) => {
						this.card_box_concent([], e)
						this.setState({
							edit_project_data:[]
						})
					}}>
						添加
					</div>
					<div className="overflow">
						{this.state.card_list.map(card_list => {
							return <Card
								action={[(e) => {
								},() =>{
									this.setState({
										card_state:true,
										edit_project_data:card_list
									})
								}]}
								id={card_list.id}
								key={card_list.id} customer_name ={card_list.project_customer_name}
								course_name ={card_list.project_name}
								person_in_charge ={card_list.project_person_in_charge}
								train_days  ={card_list.project_training_numbers} 
								train_place  ={card_list.project_training_ares} 
								train_date ={card_list.project_days } />
						})}
					</div>
				</div>
				<div>
					<div id="card_box" onClick={(event) => {
					}} className={this.state.card_state ? "card_box overflow open" : "card_box"}>
						<div style={this.state.card_state ? { display: "" } : { display: "none" }} className="paper_card_title">
							<div onClick={this.card_box_close} className="return_btn"></div>
							{this.state.form_temp_name}
						</div>
						<div className="selected_scroll_div" style={{ padding: "0 18px" }}>
							{/* paper详细内容 */}
							{this.state.card_state ?//判断paper是否可见
								<div key={this.state.edit_project_data.id===undefined?"addComponents":this.state.edit_project_data.id} id="editComponents">
								< ComponentsList componentslist =  {this.state.add_button} componentsdata = {this.state.edit_project_data} ></ComponentsList > 
								   <button  onClick={()=>{
									   this.project_index_add(this.state.add_button)
								   }} className="hold_btn">保存</button>
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