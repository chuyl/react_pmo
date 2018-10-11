/** 
    * @author xuesong
    * @param ComponentsList 组件名 用于所有组件循环 
    */

import React, { Component } from 'react';
import TextField from './TextField';
import DisTextField from './DisTextField'
import TextMoney from './TextMoney'
import TextDate from './TextDate'
import TextDatetime from './TextDatetime'
import ListTextSearch from './ListTextSearch'
import LinkCard from './LinkCard'
import Link from './Link'
import CardGroup from './CardGroup'
import LabelMessage from './LabelMessage'
import HoldBtn from './HoldBtn'
import AddCardBtn from './AddCardBtn'
import EditCardBtn from './EditCardBtn'
//import AddTeacher from '../budgetAndFinalAccountsManagementcond/budget/AddTeacher'
//import ProjectTemplate from '../budgetAndFinalAccountsManagementcond/budget/ProjectTemplate'
//import ProjectGather from '../budgetAndFinalAccountsManagementcond/budget/ProjectGather'
import SelectList from './SelectList'
import DepartmentList from './DepartmentList'
class ComponentsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue:"inputValue",
            targetValue:"",
            componentslist: this.props.componentslist,
            componentsdata:this.props.componentsdata
        }
    }
    handleChildClick=(newState)=>{
      //  console.log(newState)
        var newStates = {
            before_api_uri:newState.before_api_uri
           }
       this.props.holdClick(newStates);//回调函数传递参数给父组件
    }
    render() {
        return (
            <div>
                {this.props.componentslist.map((form_list) => {
                    if(form_list.type_name==="CardGroup"){
                        console.log(form_list.add_button.edit_button)
                        console.log(this.props.componentsdata)
                    }
                    return (
                        <div key={form_list.id_name}>
                            {form_list.type_name === "ListTextSearch" ?
                                <ListTextSearch id={form_list.id_name}
                                    addButton={form_list.add_button}
                                    labelValue={form_list.title}
                                    searchInfoLists={form_list.before_api_uri}
                                    selectedIdInfo={this.props.componentsdata[form_list.id_name+"_id"]?this.props.componentsdata[form_list.id_name+"_id"]:"-选择-"} 
                                    selectedInfo={this.props.componentsdata[form_list.id_name+"_name"]?this.props.componentsdata[form_list.id_name+"_name"]:"-选择-"} 
                                />
                            :form_list.type_name === "TextDatetime" ? 
                                <TextDatetime
                                    id={form_list.id_name} 
                                    inputValue={form_list.key}
                                    //inputValue={this.props.componentsdata[form_list.id_name]} 
                                    labelValue={form_list.title} 
                                />
                            : form_list.type_name === "TextDate" ? 
                                <TextDate
                                    id={form_list.id_name} 
                                    //inputValue={form_list.key}
                                    inputValue={this.props.componentsdata[form_list.id_name]?this.props.componentsdata[form_list.id_name]:""} 
                                    labelValue={form_list.title} 
                                />
                            :form_list.type_name === "LinkCard"?
                                <LinkCard   
                                    button={form_list.add_button.descript} 
                                    isClick={this.props.componentsdata.id} 
                                    messageList={form_list.add_button.before_api_uri} 
                                    label={form_list.add_button.descript} 
                                    linkpage={form_list.before_api_uri}
                                    title={form_list.title} 
                                />
                            :form_list.type_name === "Link"?
                                <Link 
                                    button={form_list.add_button.descript} 
                                    handleClick = {this.props.handleClick}
                                    id={form_list.id_name}
                                    isClick={this.props.componentsdata.id}
                                    label={form_list.add_button.descript} 
                                    linkpage={form_list.before_api_uri}   
                                    messageList={form_list.add_button.before_api_uri}
                                    title={form_list.title}
                                />
                            : form_list.type_name === "MutiText" ? 
                                <TextField 
                                    id={form_list.id_name} 
                                    inputValue={this.props.componentsdata[form_list.id_name]!==null?this.props.componentsdata[form_list.id_name]:""} 
                                    labelValue={form_list.title} 
                                />
                            :form_list.type_name === "DisTextField"?
                                <DisTextField
                                    id={form_list.id_name} 
                                    inputValue={this.props.componentsdata[form_list.id_name]!==null?this.props.componentsdata[form_list.id_name]:""} 
                                    labelValue={form_list.title} 
                                />
                            :form_list.type_name === "LabelMessage"?
                                <LabelMessage
                                    id={form_list.id_name}
                                    labelValue={form_list.title} 
                                    message={this.props.componentsdata[form_list.id_name]?this.props.componentsdata[form_list.id_name]:""} 
                                />
                            :form_list.type_name==="DepartmentList"?
                                <DepartmentList 
                                    id={form_list.id_name}
                                    labelValue={form_list.title}
                                    searchInfoLists={form_list.before_api_uri} 
                                    selectedInfo={this.props.componentsdata[form_list.id_name]?this.props.componentsdata[form_list.id_name]:""} 
                                />
                            :form_list.type_name==="SelectList"?
                                <SelectList 
                                    id={form_list.id_name}
                                    labelValue={form_list.title}
                                    searchInfoLists={form_list.before_api_uri} 
                                    selectedIdInfo={this.props.componentsdata[form_list.id_name+"_id"]?this.props.componentsdata[form_list.id_name+"_id"]:"-选择-"} 
                                    selectedInfo={this.props.componentsdata[form_list.id_name+"_name"]?this.props.componentsdata[form_list.id_name+"_name"]:"-选择-"} 
                                /> 
                            : form_list.type_name === "TextMoney" ? 
                                <TextMoney
                                    id={form_list.id_name}
                                    inputValue={this.props.componentsdata[form_list.id_name]?this.props.componentsdata[form_list.id_name]:""}  
                                    labelValue={form_list.title} 
                                /> 
                            :form_list.type_name==="CardGroup"?
                                <CardGroup 
                                    addButtonTitle={form_list.add_button_title} 
                                    addButton={form_list.add_button} 
                                    beforeApiUri={this.props.componentsdata[form_list.before_api_uri]} 
                                    delButton = {form_list.add_button.del_button}
                                    editButton={form_list.add_button.edit_button}
                                    listButton = {form_list.add_button.list_button}
                                    idName={form_list.id_name}
                                    isClick={this.props.componentsdata.id}
                                    selectedInfo={this.props.componentsdata?this.props.componentsdata:""} 
                                    title={form_list.title} 
                                />
                            :form_list.type_name==="HoldBtn"?
                                <HoldBtn 
                                    before_api_uri={form_list.before_api_uri}
                                    onHoldClick={this.handleChildClick}
                            />
                            :form_list.type_name==="AddCardBtn"?
                                <AddCardBtn
                                    title={form_list.title}
                                    dataId={this.props.dataId}
                                    addButton={form_list.add_button}
                                    before_api_uri={form_list.before_api_uri}
                                />
                            :form_list.type_name==="EditCardBtn"?
                                <EditCardBtn
                                    title={form_list.title}
                                    dataId={this.props.dataId}
                                    addButton={form_list.add_button}
                                    before_api_uri={form_list.before_api_uri}
                                />
                            : ""}
                        </div>
)
                }
                
                )}
            </div>
        )
    }
}

export default ComponentsList;

