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
        long_traffic_data_group: [],//输出的长途交通
        short_traffic_data_group: [],//输出的市内交通
        hotel_expense_data_group: [],//输出的住宿费
        //长途交通费
        addLongTrafficCondition: [],
        //市内交通费
        addShortTrafficCondition: [],
        //住宿费
        addHotelExpenseCondition: [],
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
                "id_name": "long_fee_card_vehicle",
                "type_name": "SelectList", //下拉搜索
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
        //住宿
        hotel_expense_card_list: {
            hotel_expense_card: [{
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
                cardList={this.state.long_traffic_card_list.long_fee_card}
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
                cardList={this.state.short_traffic_card_list.short_fee_card}
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
                cardList={this.state.hotel_expense_card_list.hotel_expense_card}
                //addHotelExpenseCondition={ this.addHotelExpenseCondition.bind(this)}
                conditionAction={this.state.conditionAction}
            >
            </AddThirdCard>
        )
        this.setState({
            addLongTrafficCondition: this.state.addLongTrafficCondition,
            addShortTrafficCondition: this.state.addShortTrafficCondition,
            addHotelExpenseCondition: this.state.addHotelExpenseCondition
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
    /** 
      * @author xuesong
      * @param removeThirdEvent 函数名 第三个删除添加组件
      */
    removeThirdEvent = (value) => {
        //住宿
        var addHotelExpenseConditionValue = this.state.addHotelExpenseCondition;
        addHotelExpenseConditionValue[value] = '';

        this.setState({
            addHotelExpenseCondition: this.state.addHotelExpenseCondition,
        })
    }
    /** 
      * @author xuesong
      * @param StringifyMultipleButton 函数名 循环输出动态数组值
      */
    StringifyMultipleButton = (list_message, index, arr_list) => {//list_message循环数组,index:card的位置数,arr_list:输出的数组
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
                <LabelButton title={"差旅费用"} label={"差旅费用"} button={"修改差旅计划"}
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
                    }} className="return_btn"></div>
                      修改差旅计划
                    </div>
                    <div className="selected_scroll_div">
                    <TextField inputValue={""} labelValue={"合同编号"} />
                    <TextField inputValue={""} labelValue={"课程名称"} />
                    <p className="card_title">长途交通费</p>
                    <ul>
                        {
                            this.state.addLongTrafficCondition.map((item, index) => {
                                return item;
                            })
                        }

                    </ul>
                    <button  className="add_card_btn"
                        onClick={() => {
                            this.state.addLongTrafficCondition.push(
                                <AddCard
                                    key={`executeHandle${this.state.addLongTrafficCondition.length}.lenght+1`}
                                    remove={this.removeEvent.bind(this)}
                                    index={this.state.addLongTrafficCondition.length}
                                    cardList={this.state.long_traffic_card_list.long_fee_card}
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
                    <p className="card_title">市内交通费</p>
                    <ul>
                        {
                            this.state.addShortTrafficCondition.map((item, index) => {
                                return item;
                            })
                        }

                    </ul>
                    <button  className="add_card_btn"
                        onClick={() => {
                            this.state.addShortTrafficCondition.push(
                                <AddSecondCard
                                    key={`executeHandle${this.state.addShortTrafficCondition.length}.lenght+1`}
                                    remove={this.removeSecondEvent.bind(this)}
                                    index={this.state.addShortTrafficCondition.length}
                                    cardList={this.state.short_traffic_card_list.short_fee_card}
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
                    <p className="card_title">住宿费</p>
                    <ul>
                        {
                            this.state.addHotelExpenseCondition.map((item, index) => {
                                return item;
                            })
                        }

                    </ul>
                    <button  className="add_card_btn"
                        onClick={() => {
                            this.state.addHotelExpenseCondition.push(
                                <AddThirdCard
                                    key={`executeHandle${this.state.addHotelExpenseCondition.length}.lenght+1`}
                                    removeDefault={this.removeThirdEvent.bind(this)}
                                    index={this.state.addHotelExpenseCondition.length}
                                    cardList={this.state.hotel_expense_card_list.hotel_expense_card}
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


                    <button className="hold_btn"
                        onClick={() => {
                            this.setState({
                                long_traffic_data_group: [],
                                short_traffic_data_group: [],
                                hotel_expense_data_group: []
                            })
                            //长途交通输出
                            for (var i = 0; i < this.state.addLongTrafficCondition.length; i++) {
                                if (this.state.addLongTrafficCondition[i] !== "") {
                                    this.StringifyMultipleButton(this.state.long_traffic_card_list.long_fee_card, i, this.state.long_traffic_data_group)
                                }
                            }
                            //市内交通输出
                            for (var m = 0; m < this.state.addShortTrafficCondition.length; m++) {
                                if (this.state.addShortTrafficCondition[m] !== "") {
                                    this.StringifyMultipleButton(this.state.short_traffic_card_list.short_fee_card, m, this.state.short_traffic_data_group)
                                }
                            }
                              //住宿费输出
                            for (var n = 0; n < this.state.addHotelExpenseCondition.length; n++) {
                                if (this.state.addHotelExpenseCondition[n] !== "") {
                                    this.StringifyMultipleButton(this.state.hotel_expense_card_list.hotel_expense_card, n, this.state.hotel_expense_data_group)
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

export default TravelExpenses;
