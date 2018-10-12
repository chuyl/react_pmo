/** 
    * @author xuesong
    * @param LinkGroupList 组件名 用于group组件循环 
    */

   import React, { Component } from 'react';
   import TextField from './TextField';
   import TextMoney from './TextMoney'
   import TextDate from './TextDate'
   import TextDatetime from './TextDatetime'
   import ListTextSearch from './ListTextSearch'
   import LinkCard from './LinkCard'
   import CardGroup from './CardGroup'
   //import AddTeacher from '../budgetAndFinalAccountsManagementcond/budget/AddTeacher'
   //import ProjectTemplate from '../budgetAndFinalAccountsManagementcond/budget/ProjectTemplate'
   //import ProjectGather from '../budgetAndFinalAccountsManagementcond/budget/ProjectGather'
   import SelectList from './SelectList'
   import DepartmentList from './DepartmentList'
   class LinkGroupList extends Component {
       constructor(props) {
           super(props);
           this.state = {
               inputValue:"inputValue",
               targetValue:"",
               componentslist: this.props.componentslist,
               componentsdata:this.props.componentsdata
           }
       }
       render() {
           console.log(this.props.componentsdata)
           return (
               <div>
                   {this.props.componentslist.map((form_list) => {
                        if(form_list.type_name==="SelectList"){
                            console.log(form_list.before_api_uri)
                        }
                       return <div key={form_list.id_name}>
                      
                           {form_list.type_name === "ListTextSearch" ?
                               <ListTextSearch id={form_list.id_name}
                                   // className = {form_list.id_name+" selectedInfo" }
                                   labelValue={form_list.title}
                                   searchInfoLists={form_list.before_api_uri}
                                   addButton={form_list.add_button}
                                   //selectedInfo={form_list.key}
                                    selectedIdInfo={this.props.componentsdata[form_list.id_name+"_id"]?this.props.componentsdata[form_list.id_name+"_id"]:"-选择-"} 
                                    selectedInfo={this.props.componentsdata[form_list.id_name+"_name"]?this.props.componentsdata[form_list.id_name+"_name"]:"-选择-"} 
                                     />
                                   : form_list.type_name === "TextDatetime" ? <TextDatetime
                                   id={form_list.id_name} 
                                   inputValue={form_list.key}
                                   //inputValue={this.props.componentsdata[form_list.id_name]} 
                                   labelValue={form_list.title} 
                                   />
                                   : form_list.type_name === "TextDate" ? <TextDate
                                   id={form_list.id_name} 
                                   //inputValue={form_list.key}
                                   inputValue={this.props.componentsdata[form_list.id_name]?this.props.componentsdata[form_list.id_name]:""} 
                                   labelValue={form_list.title} 
                                   />
                                   :form_list.type_name === "LinkCard"?<LinkCard  
                                    title={form_list.title} messageList={form_list.add_button.before_api_uri} label={form_list.add_button.descript} isClick={this.props.componentsdata.id} button={form_list.add_button.descript} linkpage={form_list.before_api_uri}
                                   />
                                   // : form_list.type_name === "TextMoney" ? <TextMoney
                                   // id={form_list.id_name} inputValue={this.props.componentsdata[form_list.id_name]} labelValue={form_list.title} />
                                   : form_list.type_name === "MutiText" ? <TextField id={form_list.id_name} 
                                   //inputValue={form_list.key}
                                   inputValue={this.props.componentsdata[form_list.id_name]?this.props.componentsdata[form_list.id_name]:""} 
                                   labelValue={form_list.title} />
                                  // :form_list.type_name==="ProjectGather"?<ProjectGather/>   
                                 //  :form_list.type_name==="AddTeacher"?<AddTeacher/> 
                                 //  :form_list.type_name==="ProjectTemplate"?<ProjectTemplate/> 
                                           //addButton={form_list.add_button}
                                   :form_list.type_name==="DepartmentList"?<DepartmentList 
                                   labelValue={form_list.title}
                                   searchInfoLists={form_list.before_api_uri} 
                                   id={form_list.id_name}
                                   //selectedInfo={form_list.key}
                                   selectedInfo={this.props.componentsdata[form_list.id_name]?this.props.componentsdata[form_list.id_name]:""} 
                                   />
                                   :form_list.type_name==="SelectList"?<SelectList 
                                   labelValue={form_list.title}
                                   searchInfoLists={form_list.before_api_uri} 
                                   id={form_list.id_name}
                                   //selectedInfo={form_list.key}
                                   selectedIdInfo={this.props.componentsdata[form_list.id_name+"_id"]?this.props.componentsdata[form_list.id_name+"_id"]:"-选择-"} 
                                   selectedInfo={this.props.componentsdata[form_list.id_name+"_name"]?this.props.componentsdata[form_list.id_name+"_name"]:"-选择-"} 
                                    /> 
                                    : form_list.type_name === "TextMoney" ? <TextMoney
                                    id={form_list.id_name}
                                    //inputValue={form_list.key}
                                    inputValue={this.props.componentsdata[form_list.id_name]?this.props.componentsdata[form_list.id_name]:""}  
                                    labelValue={form_list.title} /> 
                                    :form_list.type_name==="CardGroup"?<CardGroup 
                                    idName={form_list.id_name}
                                    title={form_list.title} 
                                    // delButton = {form_list.del_button}
                                    // eidtButton={form_list.edit_button}
                                    addButtonTitle={form_list.add_button_title} 
                                    beforeApiUri={this.props.componentsdata[form_list.before_api_uri]} 
                                    addButton={form_list.add_button} />
                                   : ""}
                       </div>
   
                   })}
               </div>
           )
       }
   }
   
   export default LinkGroupList;
   
   