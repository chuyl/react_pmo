/** 
    * @author xuesong
    * @param ComponentsViewList 组件名 用于所有组件循环 
    */

   import React, { Component } from 'react';
   import TextField from './TextField';
   import TextArea from './TextArea';
   import DisTextArea from './DisTextArea';
   import DisTextField from './DisTextField'
   import TextMoney from './TextMoney'
   import TextDate from './TextDate'
   import TextDatetime from './TextDatetime'
   import ListTextSearch from './ListTextSearch'
   import LinkCard from './LinkCard'
   import CardGroup from './CardGroup'
   import Link from './Link'
   import CardHead from './CardHead'
   import CardBody from './CardBody'
   import CardOpen from './CardOpen'
   import CardFoot from './CardFoot'
   import LabelTitleMessage from './LabelTitleMessage'
   import LabelSelectMessage from './LabelSelectMessage'
   import HoldBtn from './HoldBtn'
   import AddCardBtn from './AddCardBtn'
   import EditCardBtn from './EditCardBtn'
   import CardItem from './CardItem'
   //import AddTeacher from '../budgetAndFinalAccountsManagementcond/budget/AddTeacher'
   //import ProjectTemplate from '../budgetAndFinalAccountsManagementcond/budget/ProjectTemplate'
   //import ProjectGather from '../budgetAndFinalAccountsManagementcond/budget/ProjectGather'
   import SelectList from './SelectList'
   import Invisible from './Invisible'
   import DepartmentList from './DepartmentList'
   class ComponentsViewList extends Component {
    clickComponents(form_list,index){
        var newState = {
            form_list:form_list,
            index:index
        }
        this.props.handleViewJson(newState);//回调函数传递参数给父组件
    }
       render() {
           return (
               this.props.componentslist.map((form_list,index) => {
                       return (
                           <div key={form_list.id_name} onClick={()=>{
                               this.clickComponents(form_list,index)
                           }}>
                               {form_list.type_name === "ListTextSearch" ?
                                   <ListTextSearch id={form_list.id_name}
                                       addButton={form_list.add_button}
                                       labelValue={form_list.title}
                                       key={form_list.id_name}
                                       searchInfoLists={form_list.before_api_uri}
                                       selectedIdInfo={"-选择-"} 
                                       selectedInfo={"-选择-"} 
                                   />
                               :form_list.type_name === "TextDatetime" ? 
                                   <TextDatetime
                                       id={form_list.id_name} 
                                       inputValue={form_list.key}
                                       key={form_list.id_name}
                                       //inputValue={this.props.componentsdata[form_list.id_name]} 
                                       labelValue={form_list.title} 
                                   />
                               : form_list.type_name === "TextDate" ? 
                                   <TextDate
                                       id={form_list.id_name} 
                                       //inputValue={form_list.key}
                                       inputValue={form_list.key}
                                       labelValue={form_list.title} 
                                       key={form_list.id_name}
                                   />
                               :form_list.type_name === "LinkCard"?
                                   <LinkCard   
                                       button={form_list.add_button.descript} 
                                       isClick={this.props.componentsdata.id} 
                                       messageList={form_list.add_button.before_api_uri} 
                                       label={form_list.add_button.descript} 
                                       linkpage={form_list.before_api_uri}
                                       key={form_list.id_name}
                                       title={form_list.title} 
                                   />
                            //    :form_list.type_name === "Link"?
                            //        <Link 
                            //            button={form_list.add_button.descript} 
                            //            handleClick = {this.props.handleClick}
                            //            id={form_list.id_name}
                            //            isClick={this.props.componentsdata.id}
                            //            label={form_list.add_button.descript} 
                            //            linkpage={form_list.before_api_uri}  
                            //            key={form_list.id_name} 
                            //            messageList={form_list.add_button.before_api_uri}
                            //            title={form_list.title}
                            //        />
                               : form_list.type_name === "MutiText" ? 
                                   <TextField 
                                       id={form_list.id_name} 
                                       inputValue={form_list.key} 
                                       labelValue={form_list.title} 
                                       key={form_list.id_name}
                                   />
                                : form_list.type_name === "TextArea" ? 
                                   <TextArea 
                                       id={form_list.id_name} 
                                        inputValue={form_list.key} 
                                       labelValue={form_list.title} 
                                       key={form_list.id_name}
                                   />
                                : form_list.type_name === "DisTextArea" ? 
                                   <DisTextArea 
                                       id={form_list.id_name} 
                                        inputValue={form_list.key} 
                                       labelValue={form_list.title} 
                                       key={form_list.id_name}
                                   />
                                : form_list.type_name === "Invisible" ? 
                                   <Invisible 
                                       id={form_list.id_name} 
                                       inputValue={form_list.key} 
                                       labelValue={form_list.title} 
                                       key={form_list.id_name}
                                   />
                               :form_list.type_name === "DisTextField"?
                                   <DisTextField
                                       id={form_list.id_name} 
                                       inputValue={form_list.key}
                                       labelValue={form_list.title} 
                                       key={form_list.id_name}
                                   />
                               :form_list.type_name === "LabelTitleMessage"?
                                   <LabelTitleMessage
                                       id={form_list.id_name}
                                       labelValue={form_list.title} 
                                       key={form_list.id_name}
                                       message={this.props.componentsdata[form_list.id_name]?this.props.componentsdata[form_list.id_name]:""} 
                                   />
                                :form_list.type_name === "LabelSelectMessage"?
                                   <LabelSelectMessage
                                       id={form_list.id_name} 
                                       labelValue={form_list.title} 
                                       key={form_list.id_name}
                                       message={this.props.card_list[form_list.id_name+"_name"]?this.props.card_list[form_list.id_name+"_name"]:""} 
                                   />
                               :form_list.type_name==="DepartmentList"?
                                   <DepartmentList 
                                       id={form_list.id_name}
                                       labelValue={form_list.title}
                                       key={form_list.id_name}
                                       searchInfoLists={form_list.before_api_uri} 
                                       selectedInfo={this.props.componentsdata[form_list.id_name]?this.props.componentsdata[form_list.id_name]:""} 
                                   />
                               :form_list.type_name==="SelectList"?
                                   <SelectList 
                                       id={form_list.id_name}
                                       labelValue={form_list.title}
                                       searchInfoLists={form_list.before_api_uri} 
                                       key={form_list.id_name}
                                       selectedIdInfo={"-选择-"} 
                                       selectedInfo={"-选择-"} 
                                   /> 
                               : form_list.type_name === "TextMoney" ? 
                                   <TextMoney
                                       id={form_list.id_name}
                                       inputValue={form_list.key}
                                       labelValue={form_list.title} 
                                       key={form_list.id_name}
                                   /> 
                               :form_list.type_name==="CardGroup"?
                                   <CardGroup 
                                       addButtonTitle={form_list.add_button_title} 
                                       addButton={form_list.add_button} 
                                       uriName={form_list.before_api_uri}
                                       delButton = {form_list.add_button.del_button}
                                       editButton={form_list.add_button.edit_button}
                                       listButton = {form_list.add_button.list_button}
                                       idName={form_list.id_name}
                                       key={form_list.id_name}
                                       title={form_list.title} 
                                        postListGroup={this.editCardSuccess}
                                   />
                               :form_list.type_name==="HoldBtn"?
                                   <HoldBtn 
                                       before_api_uri={form_list.before_api_uri}
                                       key={form_list.id_name}
                                       view={true}
                                       onHoldClick={this.handleChildClick}
                               />
                               :form_list.type_name==="AddCardBtn"?
                                   <AddCardBtn
                                        addButton={form_list.add_button}
                                        title={form_list.title}
                                        dataId={this.props.dataId}
                                        before_api_uri={form_list.before_api_uri}
                                        key={form_list.id_name}
                                   />
                                   :form_list.type_name==="EditCardBtn"?
                                <EditCardBtn
                                    title={form_list.title}
                                    dataId={this.props.dataId}
                                    addButton={form_list.add_button}
                                    before_api_uri={form_list.before_api_uri}
                                    key={form_list.id_name}
                                /> 
                                :form_list.type_name === "Link"?
                                <Link 
                                    button={form_list.title}
                                    buttonMessage={form_list}
                                    dataId={this.props.card_list.id}
                                    // isClick={this.props.card_list.id}
                                    linkpage={form_list.before_api_uri}
                                    key={form_list.id_name}
                                    messageList={form_list.add_button.before_api_uri}
                                    onChange = {this.handleClick}
                                />
                            :form_list.type_name === "CardHead"?
                                <CardHead
                                    id={form_list.id_name} 
                                    addButton={form_list.add_button}
                                    key={form_list.id_name}
                                    message={form_list.default_value} 
                                />
                            // :form_list.type_name === "CardBody"?
                            //     <CardBody
                            //         openState={this.state.openCtrlState}
                            //         cardIndex={this.props.index}
                            //         id={form_list.id_name} 
                            //         addButton={form_list.add_button}
                            //         key={form_list.id_name}
                            //         fiveChange = {this.handleClick}  
                            //         footState={this.state.cardTitleItem}
                            //         message={this.props.card_list?this.props.card_list:""} 
                            //     />
                            :form_list.type_name === "CardOpen"?
                                <CardOpen 
                                    id={form_list.id_name} 
                                    addButton={form_list.add_button}
                                    key={form_list.id_name}
                                    openCtrlState={this.openCtrlState}
                                    message={this.props.card_list?this.props.card_list:""} />
                            :form_list.type_name === "CardFoot"?
                                <CardFoot
                                    id={form_list.id_name} 
                                    addButton={form_list.add_button}
                                    key={form_list.id_name}
                                    // threeChange = {this.handleClick}
                                    message={form_list.title} 
                                />
                            :form_list.type_name === "CardItem"?   
                                <CardItem
                                    id={form_list.id_name} 
                                    key={form_list.id_name}
                                    message={form_list.title}
                                />
                               : ""}
                           </div>
   )
                   }
                   )
           )
       }
   }
   
   export default ComponentsViewList;
   
   