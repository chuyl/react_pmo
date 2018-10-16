/** 
 * @author xuesong
 * @param Budget 组件  预算主页面
 */
import React, {
	Component
} from 'react'
import Card from '../../Card'
import TextField from '../../components/TextField'
import TextMoney from '../../components/TextMoney'
//import AddInfo from '../components/AddInfo'
//import ListText from '../../components/ListText'
import TextDatetime from '../../components/TextDatetime'
import BudgetListTextSearchLink from './BudgetListTextSearchLink'
import { getData, getRouter } from '../../../utils/helpers'
import {BUDGETINDEXADD} from '../../../enum'
class Budget extends Component {

	state = {
		//预算list内容
		card_list: [{
				root: "root1root1root1root1root1root1root1root1root1r<br/>oot1root1",
				card: "card1",
				name: "list1"
			}, {
				root: "root2",
				card: "card2",
				name: "list2"
			},
			{
				root: "root3",
				card: "card3",
				name: "list3"
			},
			{
				root: "root4",
				card: "card4",
				name: "list4"
			}
		],
		selected_card: [],
		search_info_list: false,
		card_state: false,
		add_customer: false,
		customer_name: "",
		budget_paper: [], //添加项目list
		budget_message_paper: [],
		teacher_form_list: [],
		form_temp_name: "",
	};
	componentWillMount() {
		this.fetchMessageData()

	}
	componentDidMount() {
		// var cb = (route, message, arg) => {
		// 	if (message.code === 0) {
		// 		this.setState({
		// 			budget_paper: message.data.budget_paper.data["form-list"],
		// 			teacher_form_list: message.data.budget_paper.data["teacher-form-list"],
		// 			form_temp_name: message.data.budget_paper.data["form-temp-name"],
		// 		})
		// 	}
		// }
		// getData(getRouter("budget_all_list"), { token: "tnkGNc" }, cb, {});

		//	console.log(this.state.budget_paper)

	}
	/** 
	 * @author xuesong
	 * @param fetchData 函数名  获取本地json内容
	 */

	fetchData() {
		fetch('../json/budgetManage.json')
			.then(response => response.json())
			.then(data => {
				this.setState({
					budget_paper: data.budget_paper.data["form-list"],
					teacher_form_list: data.budget_paper.data["teacher-form-list"],
					form_temp_name: data.budget_paper.data["form-temp-name"],
				})

			})
			.catch(e => {
				console.log("error")
			})
	}
	/** 
	 * @author xuesong
	 * @param fetchMessageData 函数名  获取本地json数据内容
	 */
	fetchMessageData() {
		fetch('../data/budgetManageData.json')
			.then(response => response.json())
			.then(data => {
				this.setState({
					budget_message_paper: data
				})
			})
			.catch(e => {
				console.log("error")
			})
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
	 * @author xuesong
	 * @param budget_index_add 函数 添加预算 
	 */
	budget_index_add = (list_message)=>{
		var key_name = [];
		var value = [];
		for (var i = 0; i < list_message.length; i++) {
		   value.push(list_message[i].id_name)
		  // value.push("token")
		   key_name.push(document.getElementById(list_message[i].id_name).innerHTML || document.getElementById(list_message[i].id_name).value)
		 //  key_name.push("tnkGNc")
		}
		var obj = {};
		for(var j=0;j<value.length;j++){
			obj[value[j]] =key_name[j];
		}
		var cb = (route, message, arg) => {
			if (message.error === 0) {
			}
		}
		getData(getRouter(BUDGETINDEXADD), obj, cb, {});
	}
	render() {
		return(
			<div>
				<div id="root1" className="container">
					<div className="add_button" onClick={(e) => {
						this.card_box_concent([], e)
					}}>
						添加
					</div>
					<div className="overflow">
						{this.state.card_list.map(card_list => {
							return <Card
								action={[(e) => {
									//console.log(card_list.name)
									//this.card_box_concent(card_list, e)
								}]}
								key={card_list.root} root={card_list.root} name={card_list.name} card={card_list.card} />
						})}
					</div>
				</div>
				<div>
					<div id="card_box" onClick={(event) => {
						//	this.event_target(event,"add_customer_info","search_info_list_div","search_info_list","search_info_list_open")

					}} className={this.state.card_state ? "card_box open" : "card_box"}>
						<div style={this.state.card_state ? { display: "" } : { display: "none" }} className="paper_card_title">
							<div onClick={this.card_box_close} className="return_btn"></div>
							{this.state.form_temp_name}
						</div>
						<div className="selected_scroll_div" style={{ padding: "0 18px" }}>
							{/* paper详细内容 */}
							{this.state.card_state ?//判断paper是否可见
								<div>
								{this.state.budget_paper.map(form_list => {
									return <div key={form_list.id_name}>

										{form_list.type_name === "BudgetListTextSearchLink" ?
											<BudgetListTextSearchLink id={form_list.id_name}
												groupLists={this.state.teacher_form_list}
												labelValue={form_list.title}
												searchInfoLists={form_list.before_api_uri}
												addButton={form_list.add_button}
												showData={form_list.after_api_uri}
												selectedInfo={this.state.budget_message_paper[form_list.id_name]} />
											: form_list.type_name === "TextDatetime" ? <TextDatetime
												id={form_list.id_name} 
												 inputValue={this.state.budget_message_paper[form_list.id_name]}
												labelValue={form_list.title} />
												: form_list.type_name === "TextMoney" ? <TextMoney
													id={form_list.id_name} inputValue={form_list.key} labelValue={form_list.title} />
													: form_list.type_name === "MutiText" ? <TextField inputValue={this.state.budget_message_paper[form_list.id_name]} labelValue={form_list.title} id={form_list.id_name} />
														: ""}
														
									</div>
								})}
								{/* <label>项目毛利:</label> */}
								<button onClick={()=>{
									this.budget_index_add(this.state.budget_paper)
								}} className="hold_btn">保存</button>
								</div>
								: ""}

							{/* <img alt="fengjing" src={Boximg}/> */}
						</div>
					</div>


				</div>
			</div>
		);
	}
}

export default Budget;