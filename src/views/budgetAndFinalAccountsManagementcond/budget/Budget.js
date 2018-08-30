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
		}
		],
		selected_card: [],
		search_info_list: false,
		card_state: false,
		add_customer: false,
		customer_name: "",
		budget_paper: [],//添加项目list
		teacher_form_list: [],
		form_temp_name: "",
	};
	componentDidMount() {
		var cb = (route, message, arg) => {
			if (message.code === 0) {
				this.setState({
					budget_paper: message.data.budget_paper.data["form-list"],
					teacher_form_list: message.data.budget_paper.data["teacher-form-list"],
					form_temp_name: message.data.budget_paper.data["form-temp-name"],
				})
			}
		}
		getData(getRouter("budget_all_list"), { session: "tnkGNc" }, cb, {});

		console.log(this.state.budget_paper)

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
		if (document.body.clientWidth <= 768) {
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
		if (document.body.clientWidth <= 768) {
			document.getElementById("card_box").setAttribute("style", " ");
		}
	}
	render() {
		//	console.log(this.state.budget_paper.data["form-list"])
		return (
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
						<div style={{ padding: "0 18px" }}>
							{/* paper详细内容 */}
							{this.state.card_state ?//判断paper是否可见
								this.state.budget_paper.map(form_list => {
									return <div key={form_list.id_name}>

										{form_list.type_name === "BudgetListTextSearchLink" ?
											<BudgetListTextSearchLink id={form_list.id_name}
												groupLists={this.state.teacher_form_list}
												labelValue={form_list.title}
												searchInfoLists={form_list.before_api_uri}
												addButton={form_list.add_button}
												selectedInfo={form_list.key} />
											: form_list.type_name === "TextDatetime" ? <TextDatetime
												id={form_list.id_name} inputValue={form_list.key} labelValue={form_list.title} />
												: form_list.type_name === "TextMoney" ? <TextMoney
													id={form_list.id_name} inputValue={form_list.key} labelValue={form_list.title} />
													: form_list.type_name === "MutiText" ? <TextField inputValue={form_list.key} labelValue={form_list.title} />
														: ""}
									</div>
								})
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