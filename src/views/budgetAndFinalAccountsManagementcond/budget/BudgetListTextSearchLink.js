/** 
    * @author xuesong
    * @param ListTextSearchLink 组件名 预算中编辑项目主页面
    */

import React, { Component } from 'react';

import { dealNumber } from '../../../utils/helpers'
//import TextField from './TextField'
// import ListText from '../components/ListText'

// import ListTextSearch from '../components/ListTextSearch'
import ComponentsList from '../../components/ComponentsList'
//import AddCard from '../../components/AddCard';
import TeacherArrange from './TeacherArrange';
import ImplementArrange from './ImplementArrange'
import TravelExpenses from './TravelExpenses'
//import Select from './Select'
class BudgetListTextSearchLink extends Component {

    state = {
        search_state: false,
        add_customer: false,
       
        search_name: "",
        add_customer_input: "",
        search_info_list: [],
        changeResult: "",
        //讲师安排表
        teacher_form_list: {
            "data": [
                {
                    teacher_card: [{
                        "id_name": "teacher_name",
                        "type_name": "ListTextSearch", //下拉搜索
                        "key": "",
                        "title": "讲师姓名",
                        "tip": "",
                        "add_button": {
                            "data": {
                                "form-temp-name": "添加讲师",
                                "form-list": [{
                                    "id_name": "add_a_teacher_message",
                                    "type_name": "AddTeacher", //input
                                    "key": "",
                                    "title": "",
                                    "tip": "",
                                    "add_button": {
                                    },
                                    "descript": "",
                                    "before_api_uri": "",
                                    "after_api_uri": ""
                                }]
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
                        "add_button": {
                            "data": {
                                "form-list": []
                            }
                        },
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
                    }],
                },
            ]
        },
        addCondition: [],
        add_button: this.props.add_button,
        search_info_lists: this.props.search_info_lists,
        info_lists: this.props.search_info_lists
    }
  
    /** 
     * @author xuesong
     * @param searchShow 函数名 切换显示隐藏
     */
    searchShow=()=> {
        this.setState({
            search_state: !this.state.search_state
        })
    }
    /** 
     * @author xuesong
     * @param StringifyButton 函数名 循环输出动态值
     */

    StringifyButton = (list_message)=>{
        var key_name = [];
        var value = [];
        for (var i = 0; i < list_message.length; i++) {
           value.push(list_message[i].id_name)
           key_name.push(document.getElementById(list_message[i].id_name).innerHTML==="-选择-"?"":document.getElementById(list_message[i].id_name).innerHTML|| document.getElementById(list_message[i].id_name).value)
        }
        var obj = {};
        for(var j=0;j<value.length;j++){
            obj[value[j]] =key_name[j];
        }
    //  var data = JSON.stringify(obj,value);//将对象转换成json
      　　　 console.log(obj);  
    }


    render() {
        const { selected_info, id, labelValue } = this.props;
        return (
            <div  className="search_info_list_card">
                <div onClick={() => {
                    this.searchShow()
                }} className={this.state.search_state ? "add_list_close" : ""}></div>
                <label className="search_info_list_label">{labelValue}</label>
                <div
                    onClick={() => {
                        this.searchShow()
                    }}
                    className="selected_info"
                    id={id}>{selected_info === "" ? "-选择-" : selected_info}</div>
                <div className="search_info_position">
                <div
                    id="search_info_list_div"
                    className={this.state.search_state ? "search_info_list open" : "search_info_list"}
                >
                <div className="select_search_div">
                <input className="select_search_input" onChange={(e) => {
                                this.setState({
                                    search_name: e.target.value
                                })
                            }} /><button
                              className="select_search_button"
                                onClick={() => {
                                    this.setState({
                                        search_info_list: [],
                                    })
                                    for (var i = 0; i < this.state.info_lists.length; i++) {
                                        if (this.state.info_lists[i].name.indexOf(this.state.search_name) >= 0) {
                                            this.state.search_info_list.push(this.state.info_lists[i])
                                        }
                                    }
                                    this.setState({
                                        search_info_lists: this.state.search_info_list
                                    })
                                }}
                            >搜索</button>
                </div>
                    <ul className="search_info_list_ul">
                       
                        {this.state.search_info_lists.map((info_lists) => {
                            return (
                                <li onClick={(e) => {
                                    for (var i = 0; i < this.props.search_info_lists.length; i++) {
                                        if (info_lists.name === this.props.search_info_lists[i].name) {
                                            this.setState({
                                                changeResult: this.props.search_info_lists[i].cost
                                            })
                                        }
                                    }
                                    document.getElementById(id).innerHTML = info_lists.name;
                                    this.searchShow()
                                }} key={info_lists.id}>{info_lists.name}</li>
                            )
                        })}
                    </ul>
                    <div className="add_project_new" onClick={(e) => {
                        this.setState({
                            add_customer: true
                        })
                    }}
                    >新增</div>
                </div></div>
                <div className="select_result_msg">预计成本:<span className="amount_of_money">{dealNumber(this.state.changeResult)}</span></div>
                <div className={this.state.add_customer ? "add_info_list open" : "add_info_list"}>
                <div className="paper_card_title"> <div onClick={() => {
                        this.setState({
                            add_customer: false
                        })
                    }} className="return_btn"></div>
                    新增项目
                    </div>
               
                    <div className="selected_scroll_div">
                   
                    {/* 添加客户1 */}
                    <ComponentsList componentslist={this.state.add_button.data["form-list"]}></ComponentsList>
                     {/* 讲师安排 */}
                     
                     <TeacherArrange/>
                     {/* 实施安排 */}
                     <ImplementArrange/>
                     {/* 差旅费用 */}
                     <TravelExpenses/>
                    <button className="button_sm button_position" onClick={() => {
                        this.StringifyButton(this.state.add_button.data["form-list"]) 
                       
                    }}>更新预算</button>
                    <button className="button_sm button_position" onClick={() => {
                        this.StringifyButton(this.state.add_button.data["form-list"]) 
                       
                    }}>更新决算</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default BudgetListTextSearchLink;