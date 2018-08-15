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
import ListText from '../../components/ListText'
import TextDatetime from '../../components/TextDatetime'
import BudgetListTextSearchLink from './BudgetListTextSearchLink'
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
		add_project_gather: {
			"data": { //新增项目集
				"form-temp-name": "预算管理",
				"form-list": [{
					"type_name": "ListTextSearch", //下拉搜索
					"key": "",
					"title": "销售负责人",
					"tip": "",
					"add_button": {},
					"descript": "",
					"before_api_uri": [{
						id: 1,
						name: "负责人1",
						budget_cost: 10000
					}, {
						id: 2,
						name: "负责人2",
						budget_cost: 10000
					}, {
						id: 3,
						name: "负责人3",
						budget_cost: 10000
					}],
					"after_api_uri": ""
				},]
			}
		},
			budget_paper: {
			"data": {
				"form-temp-name": "预算管理",
				"form-list": [{
					//新建预算
					"id_name": "budget_project_name",
					"type_name": "BudgetListTextSearchLink", //下拉搜索+联动
					"key": "",
					"title": "所属项目",
					"tip": "",
					"add_button": {
						"data": {
							"form-list": [{
								"id_name": "add_project_name",
								"type_name": "MutiText", //input
								"key": "",
								"title": "项目名称",
								"tip": "",
								"add_button": {},
								"descript": "",
								"before_api_uri": "",
								"after_api_uri": ""
							}, {
								"id_name": "add_project_gather",
								"type_name": "ListTextSearch", //下拉搜索
								"key": "",
								"title": "所属项目集",
								"tip": "",
								"add_button": {
									"data": {
										"form-temp-name": "新建项目集",
										"form-list": [{
											"id_name": "add_project_gather_charge",
											"type_name": "ProjectGather",
											"key": "",
											"title": "销售负责人",
											"tip": "",
											"add_button": {},
											"descript": "",
											"before_api_uri": [{
												id: 1,
												name: "亢鹏",
											}, {
												id: 2,
												name: "寇艳艳",
												budget_cost: 10000
											}, {
												id: 3,
												name: "张剑",
												budget_cost: 10000
											}],
											"after_api_uri": ""
										}]
									}
								},
								"descript": "",
								"before_api_uri": [{
									id: 1,
									name: "项目集1",
								}, {
									id: 2,
									name: "项目集2",
								}, {
									id: 3,
									name: "项目集3",
								}],
								"after_api_uri": ""
							},
							{
								"id_name": "add_project_charge",
								"type_name": "ListText", //下拉搜索
								"key": "",
								"title": "实施负责人",
								"tip": "",
								"add_button": {},
								"descript": "",
								"before_api_uri": [{
									id: 1,
									name: "亢鹏",
								}, {
									id: 2,
									name: "寇艳艳",
									budget_cost: 10000
								}, {
									id: 3,
									name: "张剑",
									budget_cost: 10000
								}],
								"after_api_uri": ""
							}, {
								"id_name": "project_templet",
								"type_name": "ListTextSearch", //下拉搜索
								"key": "",
								"title": "项目模板",
								"tip": "",
								"add_button": {
									"data": {
										"form-temp-name": "项目模板",
										"form-list": [{
											"id_name": "add_project_templet",
											"type_name": "ListText", //下拉搜索
											"key": "",
											"title": "销售负责人1",
											"tip": "",
											"add_button": {},
											"descript": "",
											"before_api_uri": [{
												id: 1,
												name: "亢鹏",
											}, {
												id: 2,
												name: "寇艳艳",
												budget_cost: 10000
											}, {
												id: 3,
												name: "张剑",
												budget_cost: 10000
											}],
											"after_api_uri": ""
										}]
									}
								},
								"descript": "",
								"before_api_uri": [{
									id: 1,
									name: "公开课实施",
								}, {
									id: 2,
									name: "行业培训实施",
								}],
								"after_api_uri": ""
							},
							{
								"id_name": "add_customer_name",
								"type_name": "MutiText", //input
								"key": "",
								"title": "客户名称",
								"tip": "",
								"add_button": {},
								"descript": "",
								"before_api_uri": "",
								"after_api_uri": ""
							}, {
								"id_name": "add_days",
								"type_name": "MutiText", //input
								"key": "",
								"title": "天数",
								"tip": "",
								"add_button": {},
								"descript": "",
								"before_api_uri": "",
								"after_api_uri": ""
							}, {
								"id_name": "add_training_numbers",
								"type_name": "MutiText", //input
								"key": "",
								"title": "培训人数",
								"tip": "",
								"add_button": {},
								"descript": "",
								"before_api_uri": "",
								"after_api_uri": ""
							}, {
								"id_name": "add_training_ares",
								"type_name": "MutiText", //input
								"key": "",
								"title": "培训地点",
								"tip": "",
								"add_button": {},
								"descript": "",
								"before_api_uri": "",
								"after_api_uri": ""
							}

							],

						}
					},
					"descript": "",
					"before_api_uri": [{
						id: 1,
						name: "项目1",
						cost: 10000
					}, {
						id: 2,
						name: "项目2",
						cost: 20000
					}, {
						id: 3,
						name: "项目3",
						cost: 30000
					}],
					"after_api_uri": ""
				},
				{
					"id_name": "budget_tax",
					"type_name": "MutiText", //input
					"key": "6%",
					"title": "税率",
					"tip": "",
					"add_button": {},
					"descript": "",
					"before_api_uri": "",
					"after_api_uri": ""
				},
				{
					"id_name": "budget_consulting_fee",
					"type_name": "MutiText", //input
					"key": "",
					"title": "咨询费用",
					"tip": "",
					"add_button": {},
					"descript": "",
					"before_api_uri": "",
					"after_api_uri": ""
				},
				{
					"id_name": "budget_expects_revenue",
					"type_name": "MutiText", //input
					"key": "",
					"title": "预计收入",
					"tip": "",
					"add_button": {},
					"descript": "",
					"before_api_uri": "",
					"after_api_uri": ""
				}

				],

				"teacher-form-list": [
					{
						"id_name": "teacher_name",
						"type_name": "ListTextSearch", //下拉搜索
						"key": "",
						"title": "讲师姓名",
						"tip": "",
						"add_button": {
							"data": {
								"form-temp-name": "讲师姓名",
								"form-list": [{
									"id_name": "teacher_income_tax",
									"type_name": "MutiText", //input
									"key": "",
									"title": "所得税",
									"tip": "",
									"add_button": {},
									"descript": "",
									"before_api_uri": "",
									"after_api_uri": ""
								},]
							}
						},
						"descript": "",
						"before_api_uri": [{
							id: 1,
							name: "讲师1",
						}, {
							id: 2,
							name: "讲师2",
						}, {
							id: 3,
							name: "讲师3",
						}],
						"after_api_uri": ""
					},
					{
						"id_name": "teacher_income_tax",
						"type_name": "MutiText", //input
						"key": "",
						"title": "所得税",
						"tip": "",
						"add_button": {},
						"descript": "",
						"before_api_uri": "",
						"after_api_uri": ""
					},
					{
						"id_name": "teacher_lecture_fee",
						"type_name": "MutiText", //input
						"key": "3000",
						"title": "讲课费",
						"tip": "",
						"add_button": {},
						"descript": "",
						"before_api_uri": "",
						"after_api_uri": ""
					},
					{
						"id_name": "teacher_lecture_days",
						"type_name": "MutiText", //input
						"key": "5",
						"title": "课程天数",
						"tip": "",
						"add_button": {},
						"descript": "",
						"before_api_uri": "",
						"after_api_uri": ""
					},
					{
						"id_name": "teacher_duty",
						"type_name": "ListTextSearch", //下拉搜索
						"key": "",
						"title": "职责",
						"tip": "",
						"add_button": {},
						"descript": "",
						"before_api_uri": [{
							id: 1,
							name: "主讲",
						}, {
							id: 2,
							name: "专家",
						}, {
							id: 3,
							name: "评审",
						}],
						"after_api_uri": ""
					}
				],
			}
		},
		search_project_lists: [{
			id: 1,
			name: "项目1",
			budget_cost: 10000
		}, {
			id: 2,
			name: "项目2",
			budget_cost: 10000
		}, {
			id: 3,
			name: "项目3",
			budget_cost: 10000
		}],
		search_customer_lists: [{
			id: 1,
			name: "中国移动"
		}, {
			id: 2,
			name: "中国联通"
		}, {
			id: 3,
			name: "中国电信"
		}]
	};
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
						添加</div>
					{this.state.card_list.map(card_list => {
						return <Card
							action={[(e) => {
								this.card_box_concent(card_list, e)
							}]}
							key={card_list.root} root={card_list.root} name={card_list.name} card={card_list.card} />
					})}

				</div>
				<div>
					<div id="card_box" onClick={(event) => {
						//	this.event_target(event,"add_customer_info","search_info_list_div","search_info_list","search_info_list_open")

					}} className={this.state.card_state ? "card_box open" : "card_box"}>
						<div style={{padding:"18px"}}>
						<i onClick={this.card_box_close} style={{ fontSize: "20px" }} className="glyphicon glyphicon-arrow-left"></i>
						{/* paper详细内容 */}
						{this.state.card_state ?//判断paper是否可见
							this.state.budget_paper.data["form-list"].map(form_list => {
								console.log(form_list.type_name)
								//console.log(form_list.add_button.data.teacher_data_group)
								return <div key={form_list.id_name}>
									{form_list.type_name === "BudgetListTextSearchLink" ?
										<BudgetListTextSearchLink id={form_list.id_name}
											group_lists={this.state.budget_paper.data["teacher-form-list"]}
											labelValue={form_list.title}
											search_info_lists={form_list.before_api_uri}
											add_button={form_list.add_button}
											selected_info={form_list.key} />
										: form_list.type_name === "TextDatetime" ? <TextDatetime
											id={form_list.id_name} inputValue={form_list.key} labelValue={form_list.title} />
										: form_list.type_name === "TextMoney" ? <TextMoney
											id={form_list.id_name} inputValue={form_list.key} labelValue={form_list.title} />
											: form_list.type_name === "MutiText" ? <TextField inputValue={form_list.key} labelValue={form_list.title} />
										: form_list.type_name === "ListText" ? <ListText id={form_list.id_name}
											labelValue={form_list.title}
											search_info_lists={form_list.before_api_uri}
											//add_button={form_list.add_button}
											selected_info={form_list.key} /> : ""}
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