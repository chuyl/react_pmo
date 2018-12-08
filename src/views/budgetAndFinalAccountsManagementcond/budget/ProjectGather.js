/** 
     * @author xuesong
     * @param ProjectGather 组件  项目集
     */
    import React, { Component } from 'react';
    import ComponentsList from '../../components/composite/ComponentsList'
    //import TextField from '../../components/input/TextField';

    import AddDelCard from '../../components/AddDelCard';
    class ProjectGather extends Component {
        state = {
            add_lists: false,
            addCondition: [],

            ProjectGather:{
                "data":{
                    "form-list":[
                        {
                            "id_name": "add_a_project_gather_name",
                            "type_name": "MutiText", //input
                            "key": "",
                            "title": "项目集名称",
                            "tip": "",
                            "add_button": "",
                            "descript": "",
                            "before_api_uri": "",
                            "after_api_uri": ""
                        },
                        {
                            "id_name": "add_a_project_gather_person_in_charge",
                            "type_name": "DepartmentList", //下拉搜索
                            "key": "",
                            "title": "项目负责人",
                            "tip": "",
                            "add_button": {
                                "data": {
                                    "form-list": []
                                }
                            },
                            "descript": "",
                            "before_api_uri": "staff_small_list"
                            // [{
                            //     id: 1,
                            //     name: "飞机",
                            // }, {
                            //     id: 2,
                            //     name: "火车",
                            // }, {
                            //     id: 3,
                            //     name: "大巴",
                            // }]
                            ,
                            "after_api_uri": ""
                        },{
                            "id_name": "add_a_project_gather_contract_number",
                            "type_name": "SelectList", //下拉搜索
                            "key": "",
                            "title": "合同编号",
                            "tip": "",
                            "add_button": {
                                "data": {
                                    "form-list": []
                                }
                            },
                            "descript": "",
                            "before_api_uri": "staff_small_list"
                            //  [{
                            //     id: 1,
                            //     name: "20180808",
                            // }, {
                            //     id: 2,
                            //     name: "20180809",
                            // }, {
                            //     id: 3,
                            //     name: "20180810",
                            // }]
                            ,
                            "after_api_uri": ""
                        },
                    
                    
                
                    ]}},
        
            //联系人获取数据list
            project_gather_data_group:[],
            //联系人card
            project_gather_card_list: {
                project_gather_card: [{
                    "id_name": "add_a_project_gather_contacts",
                    "type_name": "MutiText", //input
                    "key": "",
                    "title": "联系人",
                    "tip": "",
                    "add_button": {
                    },
                    "descript": "",
                    "before_api_uri": "",
                    "after_api_uri": ""
                }, {
                    "id_name": "add_a_project_gather_phone",
                    "type_name": "MutiText",
                    "key": "",
                    "title": "联系人电话",
                    "tip": "",
                    "add_button": {
                    },
                    "descript": "",
                    "before_api_uri": "",
                    "after_api_uri": ""
                }, {
                    "id_name": "add_a_project_gather_duty",
                    "type_name": "MutiText",
                    "key": "",
                    "title": "职务",
                    "tip": "",
                    "add_button": {
                    },
                    "descript": "",
                    "before_api_uri": "",
                    "after_api_uri": ""
                }, {
                    "id_name": "add_a_project_gather_department",
                    "type_name": "MutiText",
                    "key": "",
                    "title": "部门",
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
                <AddDelCard
                    key={`executeHandle${this.state.addCondition.length}.lenght+1`}
                    removeDefault={this.removeEvent.bind(this)}
                    index={this.state.addCondition.length}
                    cardList={this.state.project_gather_card_list.project_gather_card}
                    //getAddCondition={ this.getAddConditionEvent.bind(this)}
                    conditionAction={this.state.conditionAction}
                >
                </AddDelCard>
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
                        {/* 所属项目集 */}
                        <ComponentsList componentslist={this.state.ProjectGather.data["form-list"]}></ComponentsList>
                        {/* <SelectList id={"add_a_project_gather_charge"}
                                    labelValue={"项目负责人"}
                                    //searchInfoLists={this.state.company_name.name}
                                     /> */}
                       <p className="card_title">联系人</p>
                        <ul>
                            {
                                this.state.addCondition.map((item, index) => {
                                    return item;
                                })
                            }
                        </ul>
                        <button   className="add_card_btn"
                            onClick={() => {
                                this.state.addCondition.push(
                                    <AddDelCard
                                        key={`executeHandle${this.state.addCondition.length}.lenght+1`}
                                        remove={this.removeEvent.bind(this)}
                                        index={this.state.addCondition.length}
                                        cardList={this.state.project_gather_card_list.project_gather_card}
                                        // getAddCondition={ this.getAddConditionEvent.bind(this)}
                                        conditionAction={this.state.conditionAction}
                                    >
                                    </AddDelCard>
                                )
                                this.setState({
                                    addCondition: this.state.addCondition,
                                })
                            }}
                        > 添加联系人</button>
                        <button className="hold_btn"
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
    