/** 
     * @author xuesong
     * @param ImplementArrange 组件  实施安排
     */
    import React, { Component } from 'react';
    import TextField from '../../components/TextField';
    import LinkCard from '../../components/LinkCard'
    import ComponentsList from '../../components/ComponentsList'
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
         // var data = JSON.stringify(obj,value);//将对象转换成json
          　　　 console.log(obj);  
        }
  

        render(){
            return (
                <div>
              {/* 实施安排 */}
              <LinkCard title={"实施安排"} label={"实施费用"} button={"修改实施计划"}
               action={[() => {
                    this.setState({
                    add_lists: true
                    })
                }]}/>
                <div className={this.state.add_lists ? "add_info_list open" : "add_info_list"}>
                <div className="paper_card_title">
                <div onClick={() => {
                        this.setState({
                            add_lists: false
                        })
                    }} className="return_btn"></div>
                     修改实施计划
                    </div>
                   <div className="selected_scroll_div">
                   
                   
                    <TextField inputValue={""} labelValue={"合同编号"} />
                    <TextField inputValue={""} labelValue={"课程名称"} />
                    <p className="card_title">实施成本</p>
                    <ComponentsList componentslist={this.state.implementArrange.data["form-list"]}></ComponentsList>
                   
                    <button className="hold_btn"
                        onClick={() => {
                           this.StringifyButton(this.state.implementArrange.data["form-list"]) 
                        }}
    
                    >保存</button>
                   </div>
                </div>
            </div>
            )
        }
    }
    
    export default ImplementArrange;
    