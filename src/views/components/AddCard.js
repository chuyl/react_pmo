/** 
     * @author xuesong
     * @param AddCard 组件  添加card组件
     */
    import React, { Component } from 'react'
    import AddTeacher from '../budgetAndFinalAccountsManagementcond/budget/AddTeacher'
    import ProjectTemplate from '../budgetAndFinalAccountsManagementcond/budget/ProjectTemplate'
    import SelectList from './SelectList'
    import Alert from './Remind'
    import TextField from './TextField'
    import TextArea from './TextArea'
    import DisTextArea from './DisTextArea'
    import Invisible from './Invisible'
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
                if (message.error === 0) {
                    this.setState({
                        card_list:message.data
                    })
                }
            }
            getData(getRouter(this.props.listButton), {id:this.props.conditionAction.parent_id, token:sessionStorage.token }, cb, {});
    
        }
        /** 
	 * @time 2018-10-22
	 * @author xuesong
	 * @param success_message 函数 修改groupCard成功的回调函数
	 */
        success_message=()=>{
            console.log("保存成功")
            var newState = {
                success_message:true
            }
            this.props.AddCardSuccess(newState);//回调函数传递参数给父组件
        }
        	/** 
	 * @time 2018-10-12
	 * @author xuesong
	 * @param project_index_add 函数 发送列表
	 */
        project_index_add = (list_message,before_api_uri)=>{
            var key_name = [];
            var value = [];
            if(this.props.conditionAction.id){
                value.push("id")
                key_name.push(this.props.conditionAction.id)
            }
            if(this.props.conditionAction.parent_id){
                value.push("parent_id")
                key_name.push(this.props.conditionAction.parent_id)
            }
            for (var i = 0; i < list_message.length; i++) {
               
                if(list_message[i].type_name==="ListTextSearch"||list_message[i].type_name==="SelectList"||list_message[i].type_name==="SelectListSearch"){
                    value.push(list_message[i].id_name+"_name")
                    key_name.push(document.getElementById(list_message[i].id_name+this.props.conditionAction.id+"_name").innerHTML=== "-选择-" ? "" : document.getElementById(list_message[i].id_name+this.props.conditionAction.id+"_name").innerHTML)
                    value.push(list_message[i].id_name+"_id")
                    key_name.push(document.getElementById(list_message[i].id_name+this.props.conditionAction.id+"_id").innerHTML=== "-选择-" ? "" : document.getElementById(list_message[i].id_name+this.props.conditionAction.id+"_id").innerHTML)
                   }
                else if(list_message[i].type_name==="TextArea"){
                    value.push(list_message[i].id_name)
                    key_name.push(document.getElementById(list_message[i].id_name+this.props.conditionAction.id).value)
                }else{
                    value.push(list_message[i].id_name)
                    key_name.push(document.getElementById(list_message[i].id_name+this.props.conditionAction.id).innerHTML=== "-选择-" ? "" : document.getElementById(list_message[i].id_name+this.props.conditionAction.id).innerHTML || document.getElementById(list_message[i].id_name+this.props.conditionAction.id).value=== "-选择-" ? "" : document.getElementById(list_message[i].id_name+this.props.conditionAction.id).value)
                  }			 
            }     
            var obj = {};
            for(var j=0;j<value.length;j++){
                obj[value[j]] =key_name[j];
            }
            var cb = (route, message, arg) => {
                if (message.error === 0) {
                   this.success_message()
                    //this.listGroup()
                }else{
			
                    Alert.open({
                        alertTip:message.msg
                        
                    });
                    setTimeout(function(){
                        Alert.close();
                     },3000)
                }
    
            }
           getData(getRouter(before_api_uri), {data:obj,token:sessionStorage.token}, cb, {});
        }
        render() {
            console.log(this.props.cardList)
            return (
                <div>
                    <div key={this.props.index} className="card_info_list_card">
                        {/* <ComponentsList componentslist={this.state.card_list}></ComponentsList> */}
                        {this.props.cardList?this.props.cardList.map((card_list, index) => {
                            if(card_list.type_name==="TextArea"){
                                 console.log(this.props.conditionAction[card_list.id_name])
                            }
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
                                :card_list.type_name === "TextArea" ? 
                                    <TextArea
                                        id={card_list.id_name+this.props.conditionAction.id} inputValue={this.props.conditionAction[card_list.id_name]?this.props.conditionAction[card_list.id_name]:""} labelValue={card_list.title} />
                                :card_list.type_name === "DisTextArea" ? 
                                    <DisTextArea
                                        id={card_list.id_name+this.props.conditionAction.id} inputValue={this.props.conditionAction[card_list.id_name]?this.props.conditionAction[card_list.id_name]:""} labelValue={card_list.title} />
                                :card_list.type_name === "Invisible" ? 
                                    <Invisible
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
                                        searchInfoLists={card_list.before_api_uri}
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
                            this.project_index_add(this.props.cardList,this.props.editButton)
                        }}
                    >保存
                    </button>
                </div>
            )
        }
    }
    
    export default AddCard;
    