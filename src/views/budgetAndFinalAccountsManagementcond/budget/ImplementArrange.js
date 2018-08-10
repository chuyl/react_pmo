/** 
     * @author xuesong
     * @param ImplementArrange 组件  实施安排
     */
    import React, { Component } from 'react';
    import TextField from '../../components/TextField';
    import LabelButton from '../../components/LabelButton'
    import ComponentsList from '../../components/ComponentsList'
    import {StringifyButton} from '../../../utils/helpers'
    class ImplementArrange extends Component {
        state = {
            add_lists: false,
            //实施成本列
            implementArrange:{
                "data":{
                    "form-list":[
                        {
                            "id_name": "venue_fee",
                            "type_name": "TextMoney", //input
                            "key": "",
                            "title": "会场费",
                            "tip": "",
                            "add_button": {},
                            "descript": "",
                            "before_api_uri": "",
                            "after_api_uri": ""
                        },
                        {
                            "id_name": "material_and_equipment_cost",
                            "type_name": "TextMoney", //input
                            "key": "",
                            "title": "教材与设备费用",
                            "tip": "",
                            "add_button": {},
                            "descript": "",
                            "before_api_uri": "",
                            "after_api_uri": ""
                        },
                        {
                            "id_name": "examination_fee",
                            "type_name": "TextMoney", //input
                            "key": "",
                            "title": "考试费",
                            "tip": "",
                            "add_button": {},
                            "descript": "",
                            "before_api_uri": "",
                            "after_api_uri": ""
                        },
                        {
                            "id_name": "tea_break",
                            "type_name": "TextMoney", //input
                            "key": "",
                            "title": "茶歇",
                            "tip": "",
                            "add_button": {},
                            "descript": "",
                            "before_api_uri": "",
                            "after_api_uri": ""
                        },
                        {
                            "id_name": "stationery",
                            "type_name": "TextMoney", //input
                            "key": "",
                            "title": "文具",
                            "tip": "",
                            "add_button": {},
                            "descript": "",
                            "before_api_uri": "",
                            "after_api_uri": ""
                        },
                         {
                            "id_name": "hospitality",
                            "type_name": "TextMoney", //input
                            "key": "",
                            "title": "招待费",
                            "tip": "",
                            "add_button": {},
                            "descript": "",
                            "before_api_uri": "",
                            "after_api_uri": ""
                        },
                        {
                            "id_name": "postage",
                            "type_name": "TextMoney", //input
                            "key": "",
                            "title": "邮寄快递",
                            "tip": "",
                            "add_button": {},
                            "descript": "",
                            "before_api_uri": "",
                            "after_api_uri": ""
                        },
                    ]
                }
            }
        }
     
  

        render(){
            return (
                <div>
              {/* 实施安排 */}
              <LabelButton title={"实施安排"} label={"实施费用"} button={"修改实施计划"}
               action={[() => {
                    this.setState({
                    add_lists: true
                    })
                }]}/>
                <div className={this.state.add_lists ? "add_info_list open" : "add_info_list"}>
                    <i onClick={() => {
                        this.setState({
                            add_lists: false
                        })
                    }} style={{ fontSize: "20px" }} className="glyphicon glyphicon-arrow-left"></i>
                    修改实施计划
                    <TextField inputValue={""} labelValue={"合同编号"} />
                    <TextField inputValue={""} labelValue={"课程名称"} />
                    <p>实施成本</p>
                    <ComponentsList componentslist={this.state.implementArrange.data["form-list"]}></ComponentsList>
                   
                    <button
                        onClick={() => {
                            StringifyButton(this.state.implementArrange.data["form-list"]) 
                        }}
    
                    >保存</button>
                </div>
            </div>
            )
        }
    }
    
    export default ImplementArrange;
    