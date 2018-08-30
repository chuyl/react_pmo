/** 
    * @author xuesong
    * @param ComponentsList 组件名 用于所有组件循环 
    */

import React, { Component } from 'react';
import TextField from './TextField';
import TextMoney from './TextMoney'
import TextDatetime from './TextDatetime'
import ListTextSearch from './ListTextSearch'
import AddTeacher from '../budgetAndFinalAccountsManagementcond/budget/AddTeacher'
import ProjectTemplate from '../budgetAndFinalAccountsManagementcond/budget/ProjectTemplate'
import ProjectGather from '../budgetAndFinalAccountsManagementcond/budget/ProjectGather'
import SelectList from './SelectList'
import DepartmentList from './DepartmentList'
class ComponentsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            componentslist: this.props.componentslist,
        }
    }
    render() {
        return (
            <div>
                {/* this.state.add_button.data["form-list"] */}
                {this.props.componentslist.map((form_list) => {
                    return <div key={form_list.id_name}>
                        {form_list.type_name === "ListTextSearch" ?
                            <ListTextSearch id={form_list.id_name}
                                // className = {form_list.id_name+" selectedInfo" }
                                labelValue={form_list.title}
                                searchInfoLists={form_list.before_api_uri}
                                addButton={form_list.add_button}
                                selectedInfo={form_list.key} />
                                : form_list.type_name === "TextDatetime" ? <TextDatetime
                                id={form_list.id_name} inputValue={form_list.key} labelValue={form_list.title} />
                                : form_list.type_name === "TextMoney" ? <TextMoney
                                id={form_list.id_name} inputValue={form_list.key} labelValue={form_list.title} />
                                : form_list.type_name === "MutiText" ? <TextField id={form_list.id_name} inputValue={form_list.key} labelValue={form_list.title} />
                                :form_list.type_name==="ProjectGather"?<ProjectGather/>   
                                :form_list.type_name==="AddTeacher"?<AddTeacher/> 
                                :form_list.type_name==="ProjectTemplate"?<ProjectTemplate/> 
                                        //addButton={form_list.add_button}
                                :form_list.type_name==="DepartmentList"?<DepartmentList 
                                labelValue={form_list.title}
                                searchInfoLists={form_list.before_api_uri} 
                                id={form_list.id_name}
                                selectedInfo={form_list.key} />
                                :form_list.type_name==="SelectList"?<SelectList 
                                labelValue={form_list.title}
                                searchInfoLists={form_list.before_api_uri} 
                                id={form_list.id_name}
                                selectedInfo={form_list.key} />  
                                : ""}
                    </div>

                })}
            </div>
        )
    }
}

export default ComponentsList;

