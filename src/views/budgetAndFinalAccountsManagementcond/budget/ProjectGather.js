/** 
     * @author xuesong
     * @param ProjectGather 组件  项目集
     */
    import React, { Component } from 'react';
    import TextField from '../../components/TextField';
    import AddCard from '../../components/AddCard';
    class ProjectGather extends Component {
        state = {
            add_lists: false,
            addCondition: [],
            //讲师安排获取数据list
            project_gather_data_group:[],
            //讲师安排card
            project_gather_card_list: {
                project_gather_card: [{
                    "id_name": "add_a_project_gather_name",
                    "type_name": "MutiText", //input
                    "key": "",
                    "title": "主讲课程",
                    "tip": "",
                    "add_button": {
                    },
                    "descript": "",
                    "before_api_uri": "",
                    "after_api_uri": ""
                }, {
                    "id_name": "project_gather_always_money",
                    "type_name": "TextMoney", //input
                    "key": "",
                    "title": "指导价格",
                    "tip": "",
                    "add_button": {
                    },
                    "descript": "",
                    "before_api_uri": "",
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
                    card_list={this.state.project_gather_card_list.project_gather_card}
                    //getAddCondition={ this.getAddConditionEvent.bind(this)}
                    conditionAction={this.state.conditionAction}
                >
                </AddCard>
            )
            this.setState({
                addCondition: this.state.addCondition,
            })
        }
        /** 
        * @author xuesong
        * @param removeFunEvent 函数名 删除动态添加组件
        */
        removeFunEvent() {
            //默认的组件
            this.props.removeDefault && this.props.removeDefault(this.props.index);
            //添加的组价
            this.props.remove && this.props.remove(this.props.index);
        }
    
        /** 
         * @author xuesong
         * @param removeFunEvent 函数名 删除添加组件
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
           console.log(obj)
           // var data = JSON.stringify(obj, value);//将对象转换成json
            arr_list.push(obj);
            console.log(arr_list);
    
        }
        render() {
            return (
                <div>
                  
                       
                        所属项目集
                        <TextField inputValue={""} labelValue={"合同编号"} />
                        <TextField inputValue={""} labelValue={"课程名称"} />
                        <p>所属项目集</p>
                        <ul>
                            {
                                this.state.addCondition.map((item, index) => {
                                    return item;
                                })
                            }
                        </ul>
                        <button
                            onClick={() => {
                                console.log("hhhhh")
                                this.state.addCondition.push(
                                    <AddCard
                                        key={`executeHandle${this.state.addCondition.length}.lenght+1`}
                                        remove={this.removeEvent.bind(this)}
                                        index={this.state.addCondition.length}
                                        card_list={this.state.project_gather_card_list.project_gather_card}
                                        // getAddCondition={ this.getAddConditionEvent.bind(this)}
                                        conditionAction={this.state.conditionAction}
                                    >
                                    </AddCard>
                                )
                                this.setState({
                                    addCondition: this.state.addCondition,
                                })
                            }}
                        > 添加主讲课程&gt;</button>
                        <button
                        onClick={() => {
                            this.setState({
                                project_gather_data_group: [],
                            })
                            for (var i = 0; i < this.state.addCondition.length; i++) {
                                if (this.state.addCondition[i] !== "") {
                                    this.StringifyMultipleButton(this.state.project_gather_card_list.project_gather_card, i, this.state.project_gather_data_group)
                                }
                            }
                        }}

                    >保存</button>
                       
                </div>
            )
        }
    }
    
    export default ProjectGather;
    