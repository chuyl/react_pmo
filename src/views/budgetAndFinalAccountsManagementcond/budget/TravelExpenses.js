/** 
     * @author xuesong
     * @param TravelExpenses 组件  差旅费
     */
import React, { Component } from 'react';
import TextField from '../../components/TextField';
import AddCard from '../../components/AddCard';
import AddSecondCard from '../../components/AddSecondCard'
import AddThirdCard from '../../components/AddThirdCard'
import LabelButton from '../../components/LabelButton'
class TravelExpenses extends Component {
    state = {
        add_lists: false,
        //长途交通费
        addLongTrafficCondition: [],
        //市内交通费
        addShortTrafficCondition:[],
        addHotelExpenseCondition:[],
        //长途交通card
        long_traffic_card_list: {
            long_fee_card: [{
                "id_name": "long_fee_card_people",
                "type_name": "MutiText", //input
                "key": "",
                "title": "人员",
                "tip": "",
                "add_button": {
                },
                "descript": "",
                "before_api_uri": "",
                "after_api_uri": ""
            }, {
                "id_name": "long_fee_card_start_time",
                "type_name": "TextDatetime", //input
                "key": "",
                "title": "出发时间",
                "tip": "",
                "add_button": {
                },
                "descript": "",
                "before_api_uri": "",
                "after_api_uri": ""
            },
            {
                "id_name": "long_fee_card_start_place",
                "type_name": "MutiText", //input
                "key": "",
                "title": "出发地点",
                "tip": "",
                "add_button": {
                },
                "descript": "",
                "before_api_uri": "",
                "after_api_uri": ""
            },
            {
                "id_name": "long_fee_card_end_time",
                "type_name": "TextDatetime", //input
                "key": "",
                "title": "结束时间",
                "tip": "",
                "add_button": {
                },
                "descript": "",
                "before_api_uri": "",
                "after_api_uri": ""
            },
            {
                "id_name": "long_fee_card_end_place",
                "type_name": "MutiText", //input
                "key": "",
                "title": "结束地点",
                "tip": "",
                "add_button": {
                },
                "descript": "",
                "before_api_uri": "",
                "after_api_uri": ""
            },
            {
                "id_name": "teacher_duty",
                "type_name": "ListText", //下拉搜索
                "key": "",
                "title": "交通工具",
                "tip": "",
                "add_button": {
                    "data": {
                        "form-list": []
                    }
                },
                "descript": "",
                "before_api_uri": [{
                    id: 1,
                    name: "飞机",
                }, {
                    id: 2,
                    name: "火车",
                }, {
                    id: 3,
                    name: "大巴",
                }],
                "after_api_uri": ""
            }],
        },
        //市内交通
        short_traffic_card_list: {
            short_fee_card: [{
                "id_name": "short_fee_card_people",
                "type_name": "MutiText", //input
                "key": "",
                "title": "人员",
                "tip": "",
                "add_button": {
                },
                "descript": "",
                "before_api_uri": "",
                "after_api_uri": ""
            }, {
                "id_name": "short_fee_type",
                "type_name": "MutiText", //input
                "key": "",
                "title": "费用名称",
                "tip": "",
                "add_button": {
                },
                "descript": "",
                "before_api_uri": "",
                "after_api_uri": ""
            },
            {
                "id_name": "short_fee",
                "type_name": "MutiText", //input
                "key": "",
                "title": "费用",
                "tip": "",
                "add_button": {
                },
                "descript": "",
                "before_api_uri": "",
                "after_api_uri": ""
            },
           ],
        },
        hotel_expense_card_list:{
            hotel_expense_card:[{
                "id_name": "hotel_expense_people",
                "type_name": "MutiText", //input
                "key": "",
                "title": "人员",
                "tip": "",
                "add_button": {
                },
                "descript": "",
                "before_api_uri": "",
                "after_api_uri": ""
            }, {
                "id_name": "hotel_expense_days",
                "type_name": "MutiText", //input
                "key": "",
                "title": "天数",
                "tip": "",
                "add_button": {
                },
                "descript": "",
                "before_api_uri": "",
                "after_api_uri": ""
            },
            {
                "id_name": "hotel_expense_total",
                "type_name": "MutiText", //input
                "key": "",
                "title": "费用总价",
                "tip": "",
                "add_button": {
                },
                "descript": "",
                "before_api_uri": "",
                "after_api_uri": ""
            },
           ],
        }
    }
    componentWillMount() {
        //长途交通
        this.state.addLongTrafficCondition.push(
            <AddCard
                key={`executeHandle${this.state.addLongTrafficCondition.length}.lenght+1`}
                removeDefault={this.removeEvent.bind(this)}
                index={this.state.addLongTrafficCondition.length}
                card_list={this.state.long_traffic_card_list.long_fee_card}
                //getaddLongTrafficCondition={ this.getaddLongTrafficConditionEvent.bind(this)}
                conditionAction={this.state.conditionAction}
            >
            </AddCard>
        )
        //市内交通
        this.state.addShortTrafficCondition.push(
            <AddSecondCard
                key={`executeHandle${this.state.addShortTrafficCondition.length}.lenght+1`}
                removeDefault={this.removeSecondEvent.bind(this)}
                index={this.state.addShortTrafficCondition.length}
                card_list={this.state.short_traffic_card_list.short_fee_card}
                //addShortTrafficCondition={ this.addShortTrafficCondition.bind(this)}
                conditionAction={this.state.conditionAction}
            >
            </AddSecondCard>
        )
        //住宿费
        this.state.addHotelExpenseCondition.push(
            <AddThirdCard
            key={`executeHandle${this.state.addHotelExpenseCondition.length}.lenght+1`}
            removeDefault={this.removeThirdEvent.bind(this)}
            index={this.state.addHotelExpenseCondition.length}
            card_list={this.state.hotel_expense_card_list.hotel_expense_card}
            //addHotelExpenseCondition={ this.addHotelExpenseCondition.bind(this)}
            conditionAction={this.state.conditionAction}
        >
        </AddThirdCard>
        )
        this.setState({
            addLongTrafficCondition: this.state.addLongTrafficCondition,
            addShortTrafficCondition:this.state.addShortTrafficCondition,
            addHotelExpenseCondition:this.state.addHotelExpenseCondition
        })
    }

    /** 
 * @author xuesong
 * @param removeEvent 函数名 删除添加组件
 */
    removeEvent(value) {
        //长途
        var addLongTrafficConditionValue = this.state.addLongTrafficCondition;
        addLongTrafficConditionValue[value] = '';
     
        this.setState({
            addLongTrafficCondition: this.state.addLongTrafficCondition,
        })
    }
    removeSecondEvent(value) {
       //市内
        var addShortTrafficConditionValue = this.state.addShortTrafficCondition;
        addShortTrafficConditionValue[value] = '';
     
        this.setState({
            addShortTrafficCondition: this.state.addShortTrafficCondition,
        })
    }
    removeThirdEvent(value) {
        //住宿
         var addHotelExpenseConditionValue = this.state.addHotelExpenseCondition;
         addHotelExpenseConditionValue[value] = '';
      
         this.setState({
            addHotelExpenseCondition: this.state.addHotelExpenseCondition,
         })
     }
    
    render() {
        return (
            <div>
                <LabelButton title={"差旅费用"} label={"差旅费用"} button={"修改差旅计划"}
                    action={[() => {
                        this.setState({
                            add_lists: true
                        })
                    }]} />
                <div className={this.state.add_lists ? "add_info_list open" : "add_info_list"}>
                    <i onClick={() => {
                        this.setState({
                            add_lists: false
                        })
                    }} style={{ fontSize: "20px" }} className="glyphicon glyphicon-arrow-left"></i>
                    修改差旅计划
                    <TextField inputValue={""} labelValue={"合同编号"} />
                    <TextField inputValue={""} labelValue={"课程名称"} />
                    <p>长途交通费</p>
                    <ul>
                        {
                            this.state.addLongTrafficCondition.map((item, index) => {
                                return item;
                            })
                        }

                    </ul>
                    
                    <button
                        onClick={() => {
                            this.state.addLongTrafficCondition.push(
                                <AddCard
                                    key={`executeHandle${this.state.addLongTrafficCondition.length}.lenght+1`}
                                    remove={this.removeEvent.bind(this)}
                                    index={this.state.addLongTrafficCondition.length}
                                    card_list={this.state.long_traffic_card_list.long_fee_card}
                                    // getaddLongTrafficCondition={ this.getaddLongTrafficConditionEvent.bind(this)}
                                    conditionAction={this.state.conditionAction}
                                >
                                </AddCard>
                            )
                            this.setState({
                                addLongTrafficCondition: this.state.addLongTrafficCondition,
                            })
                            console.log(this.state.addLongTrafficCondition)

                        }}
                    >添加长途行程安排</button>
                    <p>市内交通费</p>
                    <ul>
                        {
                            this.state.addShortTrafficCondition.map((item, index) => {
                                return item;
                            })
                        }

                    </ul>
                    <button
                        onClick={() => {
                            this.state.addShortTrafficCondition.push(
                                <AddSecondCard
                                    key={`executeHandle${this.state.addShortTrafficCondition.length}.lenght+1`}
                                    remove={this.removeSecondEvent.bind(this)}
                                    index={this.state.addShortTrafficCondition.length}
                                    card_list={this.state.short_traffic_card_list.short_fee_card}
                                    // getaddShortTrafficCondition={ this.getaddShortTrafficConditionEvent.bind(this)}
                                    conditionAction={this.state.conditionAction}
                                >
                                </AddSecondCard>
                            )
                            this.setState({
                                addShortTrafficCondition: this.state.addShortTrafficCondition,
                            })
                            console.log(this.state.addShortTrafficCondition)

                        }}
                    >添加市内行程安排</button>

                   <p>住宿费</p>
                    <ul>
                        {
                            this.state.addHotelExpenseCondition.map((item, index) => {
                                return item;
                            })
                        }

                    </ul>
                    <button
                        onClick={() => {
                            this.state.addHotelExpenseCondition.push(
                                <AddThirdCard
                                key={`executeHandle${this.state.addHotelExpenseCondition.length}.lenght+1`}
                                removeDefault={this.removeThirdEvent.bind(this)}
                                index={this.state.addHotelExpenseCondition.length}
                                card_list={this.state.hotel_expense_card_list.hotel_expense_card}
                                //addHotelExpenseCondition={ this.addHotelExpenseCondition.bind(this)}
                                conditionAction={this.state.conditionAction}
                            >
                            </AddThirdCard>
                            )
                            this.setState({
                                addHotelExpenseCondition: this.state.addHotelExpenseCondition,
                            })

                        }}
                    >添加住宿安排</button>
    

                    <button
                        onClick={() => {
                             //var addLongTrafficCondition = this.state.addLongTrafficCondition;
                            // var teacher_data_group = [];
                            // this.setState({
                            //     teacher_data_group: [],
                            // })
                            // //lenght是有效的组件列
                            // var lenghts = 0;
                            // for (var i = 0; i < addLongTrafficCondition.length; i++) {
                            //     if (addLongTrafficCondition[i] !== "") {
                            //         teacher_data_group.push({ teacher_name: "", teacher_income_tax: "", teacher_lecture_fee: "", teacher_lecture_days: "", teacher_duty: "" })
                            //         teacher_data_group[lenghts].teacher_name = document.getElementById("teacher_name" + i).innerText === "-选择-" ? "" : document.getElementById("teacher_name" + i).innerText;
                            //         lenghts++;
                            //     }
                            // }
                            // for (var m = 0; m < teacher_data_group.length; m++) {
                            //     this.state.teacher_data_group.push(teacher_data_group[m])
                            // }
                        }}

                    >保存</button>
                </div>
            </div>
        )
    }
}

export default TravelExpenses;
