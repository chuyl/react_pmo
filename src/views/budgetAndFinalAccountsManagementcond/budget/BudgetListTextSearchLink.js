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
                                "form-temp-name": "讲师姓名",
                                "form-list": [{
                                    "id_name": "add_a_teacher_name",
                                    "type_name": "MutiText", //input
                                    "key": "",
                                    "title": "讲师姓名",
                                    "tip": "",
                                    "add_button": {
                                    },
                                    "descript": "",
                                    "before_api_uri": "",
                                    "after_api_uri": ""
                                }, {
                                    "id_name": "teacher_always_money",
                                    "type_name": "MutiText", //input
                                    "key": "",
                                    "title": "常用单价",
                                    "tip": "",
                                    "add_button": {
                                    },
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
           key_name.push(document.getElementById(list_message[i].id_name).innerHTML || document.getElementById(list_message[i].id_name).value)
        }
        var obj = {};
        for(var j=0;j<value.length;j++){
            obj[value[j]] =key_name[j];
        }
      var data = JSON.stringify(obj,value);//将对象转换成json
      　　　 console.log(data);  
    }


    render() {
        const { selected_info, id, labelValue } = this.props;
        return (
            <div>
                <div onClick={() => {
                    this.searchShow()
                }} className={this.state.search_state ? "add_list_close" : ""}></div>
                <label>{labelValue}</label>
                <div
                    onClick={() => {
                        this.searchShow()
                    }}
                    className="selected_info"
                    id={id}>{selected_info === "" ? "-选择-" : selected_info}</div>
                <div
                    id="search_info_list_div"
                    className={this.state.search_state ? "search_info_list open" : "search_info_list"}
                >
                    <ul className="search_info_list_li">
                        <li>
                            <input onChange={(e) => {
                                this.setState({
                                    search_name: e.target.value
                                })
                            }} /><button
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
                            >搜索1</button>
                        </li>
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
                    <div onClick={(e) => {
                        this.setState({
                            add_customer: true
                        })
                    }}
                    >新增</div>
                </div>
                <div>预计成本:{dealNumber(this.state.changeResult)}</div>
                <div className={this.state.add_customer ? "add_info_list open" : "add_info_list"}>
                    <i onClick={() => {
                        this.setState({
                            add_customer: false
                        })
                    }} style={{ fontSize: "20px" }} className="glyphicon glyphicon-arrow-left"></i>
                    {/* 添加客户1 */}
                    <ComponentsList componentslist={this.state.add_button.data["form-list"]}></ComponentsList>
                     {/* 讲师安排 */}
                     
                     <TeacherArrange/>
                     {/* 实施安排 */}
                     <ImplementArrange/>
                     {/* 差旅费用 */}
                     <TravelExpenses/>
                    <button onClick={() => {
                        this.StringifyButton(this.state.add_button.data["form-list"]) 
                    }}>保存</button>
                </div>
            </div>
        )
    }
}

export default BudgetListTextSearchLink;