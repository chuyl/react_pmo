/** 
     * @author xuesong
     * @param ProjectTemplate 组件  项目模板
     */
    import React, { Component } from 'react';
    import TextField from '../../components/TextField';
    class ProjectTemplate extends Component {
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
              
               
              
              
                   <div className="selected_scroll_div">
                   
                   
                    <TextField inputValue={""} labelValue={"合同编号"} />
                    <TextField inputValue={""} labelValue={"课程名称"} />
                    
                    {/* <ComponentsList componentslist={this.state.implementArrange.data["form-list"]}></ComponentsList> */}
                   
                    <button className="hold_btn"
                        onClick={() => {
                           
                        }}
    
                    >保存</button>
                   </div>
              
            )
        }
    }
    
    export default ProjectTemplate;
    