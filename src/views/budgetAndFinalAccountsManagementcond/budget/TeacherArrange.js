/** 
     * @author xuesong
     * @param TeacherArrange 组件  讲师安排
     */
import React, { Component } from 'react';
import TextField from '../../components/TextField';
import AddCard from '../../components/AddCard';
import LabelButton from '../../components/LabelButton'
class TeacherArrange extends Component {
    state = {
        add_lists: false,
        addCondition: [],
        //讲师安排获取数据list
        teacher_data_group: [
            //{ teacher_name: "", teacher_income_tax: "", teacher_lecture_fee: "", teacher_lecture_days: "", teacher_duty: "" }
        ],
        //讲师安排card
        teacher_card_list: {
            teacher_card: [{
                "id_name": "teacher_name",
                "type_name": "ListTextSearch", //下拉搜索
                "key": "",
                "title": "讲师姓名1",
                "tip": "",
                "add_button": {
                    "data": {
                        "form-temp-name": "讲师姓名",
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
                        "form-list": [
                            {
                                "id_name": "add_teacher_duty",
                                "type_name": "MutiText", //input
                                "key": "",
                                "title": "职责描述",
                                "tip": "",
                                "add_button": {},
                                "descript": "",
                                "before_api_uri": "",
                                "after_api_uri": ""
                            },
                            {
                                "id_name": "project_template",
                                "type_name": "ListText", //下拉搜索
                                "key": "",
                                "title": "项目模板",
                                "tip": "",
                                "add_button": {
                                    "data":{
                                        "from-list":[{}]
                                    }
                                },
                                "descript": "",
                                "before_api_uri": [{
                                    id: 1,
                                    name: "软考",
                                }, {
                                    id: 2,
                                    name: "集成项目经理",
                                }, {
                                    id: 3,
                                    name: "企业内训",
                                }, {
                                    id: 4,
                                    name: "沙龙活动",
                                }],
                                "after_api_uri": ""
                            },
                        ]
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
    }
    componentWillMount() {
        this.state.addCondition.push(
            <AddCard
                key={`executeHandle${this.state.addCondition.length}.lenght+1`}
                removeDefault={this.removeEvent.bind(this)}
                index={this.state.addCondition.length}
                card_list={this.state.teacher_card_list.teacher_card}
                //getAddCondition={ this.getAddConditionEvent.bind(this)}
                conditionAction={this.state.conditionAction}
            >
            </AddCard>
        )
        this.setState({
            addCondition: this.state.addCondition,
        })
    }
    // /** 
    // * @author xuesong
    // * @param removeFunEvent 函数名 删除动态添加组件
    // */
    // removeFunEvent() {
    //     //默认的组件
    //     this.props.removeDefault && this.props.removeDefault(this.props.index);
    //     //添加的组价
    //     this.props.remove && this.props.remove(this.props.index);
    // }

    /** 
     * @author xuesong
     * @param removeEvent 函数名 删除添加组件
     */
    removeEvent(value) {
        var addConditionValue = this.state.addCondition;
        addConditionValue[value] = '';
        this.setState({
            addCondition: this.state.addCondition
        })
    }
    /** 
    * @author xuesong
    * @param StringifyMultipleButton 函数名 循环输出动态数组值
    */
    StringifyMultipleButton(list_message, index, arr_list) {
        var key_name = [];
        var value = [];
        for (var i = 0; i < list_message.length; i++) {
            value.push(list_message[i].id_name)
            key_name.push(document.getElementById(list_message[i].id_name + index).innerHTML === "-选择-" ? "" : document.getElementById(list_message[i].id_name + index).innerHTML || document.getElementById(list_message[i].id_name + index).value)
        }
        var obj = {};
        for (var j = 0; j < value.length; j++) {
            obj[value[j]] = key_name[j];
        }

        //var data = JSON.stringify(obj, value);//将对象转换成json
        arr_list.push(obj);
        console.log(arr_list);

    }
    render() {
        return (
            <div>
                {/* 讲师安排 */}
                <LabelButton title={"讲师安排"} label={"讲课费"} button={"修改讲师安排"}
                    action={[() => {
                        this.setState({
                            add_lists: true
                        })
                    }]} />
                <div className={this.state.add_lists ? "add_info_list open" : "add_info_list"}>
                <div className="paper_card_title">
                <div onClick={() => {
                        this.setState({
                            add_lists: false
                        })
                    }}className="return_btn"></div>
                    修改讲师安排
                    </div>
                    <div className="selected_scroll_div">
                   
                    <TextField inputValue={""} labelValue={"合同编号"} />
                    <TextField inputValue={""} labelValue={"课程名称"} />
                    <p className="card_title">讲师安排</p>
                    <ul>
                        {
                            this.state.addCondition.map((item, index) => {
                                return item;
                            })
                        }
                    </ul>
                    <button className="add_card_btn"
                        onClick={() => {
                            this.state.addCondition.push(
                                <AddCard
                                    key={`executeHandle${this.state.addCondition.length}.lenght+1`}
                                    remove={this.removeEvent.bind(this)}
                                    index={this.state.addCondition.length}
                                    card_list={this.state.teacher_card_list.teacher_card}
                                    // getAddCondition={ this.getAddConditionEvent.bind(this)}
                                    conditionAction={this.state.conditionAction}
                                >
                                </AddCard>
                            )
                            this.setState({
                                addCondition: this.state.addCondition,
                            })
                        }}
                    >新增讲师</button>
                    <button className="hold_btn"
                        onClick={() => {
                            this.setState({
                                teacher_data_group: [],
                            })
                            for (var i = 0; i < this.state.addCondition.length; i++) {
                                if (this.state.addCondition[i] !== "") {
                                    this.StringifyMultipleButton(this.state.teacher_card_list.teacher_card, i, this.state.teacher_data_group)
                                }
                            }
                        }}

                    >保存</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default TeacherArrange;
