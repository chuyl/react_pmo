/** 
     * @author xuesong
     * @param AddCardBtn 组件  添加card按钮
     */
import React, { Component } from 'react'
import ComponentsCard from './ComponentsCard'
import { getData, getRouter } from '../../utils/helpers'
    class AddCardBtn extends Component {
        state={
            add_card_state:false
        }
        project_index_add = (list_message,before_api_uri)=>{
            var key_name = [];
            var value = [];
            for (var i = 0; i < list_message.length; i++) {
                if(list_message[i].type_name==="ListTextSearch"||list_message[i].type_name==="SelectList"){
                    value.push("id")
					key_name.push(this.props.dataId)
                    value.push(list_message[i].id_name+"_name")
                    key_name.push(document.getElementById(list_message[i].id_name+"_name").innerHTML=== "-选择-" ? "" : document.getElementById(list_message[i].id_name+"_name").innerHTML)
                    value.push(list_message[i].id_name+"_id")
                    key_name.push(document.getElementById(list_message[i].id_name+"_id").innerHTML=== "-选择-" ? "" : document.getElementById(list_message[i].id_name+"_id").innerHTML || document.getElementById(list_message[i].id_name+"_id").value=== "-选择-" ? "" : document.getElementById(list_message[i].id_name+"_id").value)
                   }
                else{
                    value.push(list_message[i].id_name)
                    key_name.push(document.getElementById(list_message[i].id_name).innerHTML=== "-选择-" ? "" : document.getElementById(list_message[i].id_name).innerHTML || document.getElementById(list_message[i].id_name).value=== "-选择-" ? "" : document.getElementById(list_message[i].id_name).value)
                  }			 
            }     
            var obj = {};
            for(var j=0;j<value.length;j++){
                obj[value[j]] =key_name[j];
            }
            var cb = (route, message, arg) => {
                if (message.code === 0) {
                    this.setState({
                        card_state:false
                    })
                    this.listProject()
                }
    
            }
            console.log(before_api_uri)
            getData(getRouter(before_api_uri), {data:obj,token:"tnkGNc"}, cb, {});
        }
        render(){
            // const {id,disabled,inputValue,onChange,onClick,labelValue} =this.props;
            return (
                <div>
                    <button className="add_card_btn"  
                        onClick={() => {
                            this.setState({
                                add_card_state: true,
                            })
                            //console.log(this.props.selectedInfo.id)
                        }}
                        >
                        {this.props.title}
                    </button>
                    <div className={this.state.add_card_state ? "add_info_list open" : "add_info_list"}>
                        <div className="paper_card_title">
                            <div    onClick={() => {
                                    this.setState({
                                        add_card_state: false
                                            })
                                        }} 
                                    className="return_btn">
                            </div>
                            {this.props.title}
                        </div>
                        <div className="selected_scroll_div">
                        <ComponentsCard  componentslist={this.props.addButton}></ComponentsCard>
                            {/* <AddCard 
                                key={`executeHandle${this.state.addCondition.length}.lenght+1`}
                                remove={this.removeEvent.bind(this)}
                                index={this.state.addCondition.length}
                                cardList={this.props.addButton.add_button}
                                // getAddCondition={ this.getAddConditionEvent.bind(this)}
                                conditionAction={this.state.conditionAction}       
                            >
                            </AddCard> */}
                                    {/* 添加讲师安排按钮 */}
                            <button className="hold_btn"
                                onClick={(e) => {
                                    console.log(this.props.dataId)
                                    this.project_index_add(this.props.addButton,this.props.before_api_uri)
                                }}
                            >保存
                            </button>
                </div>
            </div>  
        </div>
            )
        }
    }
    export default AddCardBtn;
    
