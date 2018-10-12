/** 
     * @author xuesong
     * @param AddCard 组件  添加card组件
     */
    import React, { Component } from 'react'
    import AddTeacher from '../budgetAndFinalAccountsManagementcond/budget/AddTeacher'
    import ProjectTemplate from '../budgetAndFinalAccountsManagementcond/budget/ProjectTemplate'
    import SelectList from './SelectList'
    import TextField from './TextField'
    import TextMoney from './TextMoney'
    //import ListText from '../components/ListText'
    import TextDatetime from './TextDatetime'
    import { getData, getRouter } from '../../utils/helpers'
    //import ComponentsList from './ComponentsList'
    import ListTextSearch from './ListTextSearch'
    class AddCard extends Component {
        state = {
            cardList: this.props.cardList
        }
        	/** 
	 * @time 2018-10-11
	 * @author xuesong
	 * @param listGroup 函数 获取group列表
	 */
        listGroup(){
            var cb = (route, message, arg) => {
                if (message.code === 0) {
                    this.setState({
                        card_list:message.data
                    })
                }
            }
            getData(getRouter(this.props.listButton), {id:this.props.conditionAction.header_id, token: "tnkGNc" }, cb, {});
    
        }
        	/** 
	 * @time 2018-10-12
	 * @author xuesong
	 * @param project_index_add 函数 发送列表
	 */
        project_index_add = (list_message,before_api_uri)=>{
            var key_name = [];
            var value = [];
            for (var i = 0; i < list_message.length; i++) {
                if(list_message[i].type_name==="ListTextSearch"||list_message[i].type_name==="SelectList"){
                    value.push("id")
                    key_name.push(this.props.conditionAction.id)
                    value.push("header_id")
                    key_name.push(this.props.conditionAction.header_id)
                    value.push(list_message[i].id_name+"_name")
                    key_name.push(document.getElementById(list_message[i].id_name+this.props.conditionAction.id+"_name").innerHTML=== "-选择-" ? "" : document.getElementById(list_message[i].id_name+this.props.conditionAction.id+"_name").innerHTML)
                    value.push(list_message[i].id_name+"_id")
                    key_name.push(document.getElementById(list_message[i].id_name+this.props.conditionAction.id+"_id").innerHTML=== "-选择-" ? "" : document.getElementById(list_message[i].id_name+this.props.conditionAction.id+"_id").innerHTML)
                   }
                else{
                    value.push(list_message[i].id_name)
                    key_name.push(document.getElementById(list_message[i].id_name+this.props.conditionAction.id).innerHTML=== "-选择-" ? "" : document.getElementById(list_message[i].id_name+this.props.conditionAction.id).innerHTML || document.getElementById(list_message[i].id_name+this.props.conditionAction.id).value=== "-选择-" ? "" : document.getElementById(list_message[i].id_name+this.props.conditionAction.id).value)
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
                    this.listGroup()
                }
    
            }
           getData(getRouter(before_api_uri), {data:obj,token:"tnkGNc"}, cb, {});
        }
        render() {
            return (
                <div>
                    <div key={this.props.index} className="card_info_list_card">
                        {/* <ComponentsList componentslist={this.state.card_list}></ComponentsList> */}
                        {this.state.cardList?this.state.cardList.map((card_list, index) => {
                            return (
                                <div key={index} style={{marginBottom:"-6px"}}>
                                {card_list.type_name === "ListTextSearch" ?
                                    <ListTextSearch id={card_list.id_name+this.props.conditionAction.id}
                                        labelValue={card_list.title}
                                        searchInfoLists={card_list.before_api_uri}
                                        addButton={card_list.add_button}
                                        selectedIdInfo={this.props.conditionAction[card_list.id_name+"_id"]?this.props.conditionAction[card_list.id_name+"_id"]:""} 
                                        selectedInfo={this.props.conditionAction[card_list.id_name+"_name"]?this.props.conditionAction[card_list.id_name+"_name"]:"-选择-"}  />
                                :card_list.type_name === "MutiText" ? 
                                    <TextField
                                        id={card_list.id_name+this.props.conditionAction.id} inputValue={this.props.conditionAction[card_list.id_name]?this.props.conditionAction[card_list.id_name]:""} labelValue={card_list.title} />
                                :card_list.type_name === "TextDatetime" ? 
                                    <TextDatetime
                                        id={card_list.id_name+this.props.conditionAction.id} inputValue={this.props.conditionAction[card_list.id_name]?this.props.conditionAction[card_list.id_name]:""} labelValue={card_list.title} />
                                :card_list.type_name === "TextMoney" ? 
                                    <TextMoney
                                        id={card_list.id_name+this.props.conditionAction.id} inputValue={this.props.conditionAction[card_list.id_name]?this.props.conditionAction[card_list.id_name]:""} labelValue={card_list.title} />
                                :card_list.type_name==="AddTeacher"?
                                    <AddTeacher/> 
                                :card_list.type_name==="ProjectTemplate"?
                                    <ProjectTemplate/> 
                                :card_list.type_name==="SelectList"?
                                    <SelectList id={card_list.id_name+this.props.conditionAction.id}
                                        labelValue={card_list.title}
                                        selectedIdInfo={this.props.conditionAction[card_list.id_name+"_id"]?this.props.conditionAction[card_list.id_name+"_id"]:"-选择-"} 
                                        selectedInfo={this.props.conditionAction[card_list.id_name+"_name"]?this.props.conditionAction[card_list.id_name+"_name"]:"-选择-"}  />
                                : ""}
                                </div>
                            )
                        }):""}
                    {/* {this.add_teacher_card_components(this.props.index)} */}
                    </div>
                    <button className="hold_btn"
                        onClick={(e) => {
                            this.project_index_add(this.state.cardList,this.props.editButton)
                        }}
                    >保存
                    </button>
                </div>
            )
        }
    }
    
    export default AddCard;
    