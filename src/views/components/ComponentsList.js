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
import LabelSelectMessage from './LabelSelectMessage'
import CardHead from './CardHead'
import CardPage from './CardPage'
import CardTitleItem from './CardTitleItem'
import CardItem from './CardItem'
import HoldBtn from './HoldBtn'
import AddCardBtn from './AddCardBtn'
import EditCardBtn from './EditCardBtn'
import Invisible from './Invisible'
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
    handleClick=(formData)=>{
      var newState = {
          add_button:formData.add_button,
          data:formData.data,
          dataId:formData.dataId,
          form_temp_name:formData.form_temp_name
      }
      this.props.twoChange(newState);//回调函数传递参数给父组件
  }
  handlethreeClick=(formData)=>{
  var newState = {
      add_button:formData.add_button,
      data:formData.data,
      dataId:formData.dataId,
      form_temp_name:formData.form_temp_name
  }
  this.props.fourChange(newState);//回调函数传递参数给父组件
}
  handleClicks=(formData)=>{
  var newState = {
      add_button:formData.add_button,
      data:formData.data,
      dataId:formData.dataId,
      form_temp_name:formData.form_temp_name
  }
  this.props.fiveChange(newState);//回调函数传递参数给父组件
}
  handleThisCardTitleItem=(thisBtnState)=>{
    var newState = {
        cardTitleItem:thisBtnState.cardTitleItem
    }
    this.props.handleTwoCardTitleItem(newState);
  }
 /** 
	 * @time 2018-10-22
	 * @author xuesong
	 * @param editCardSuccess 函数 CardGroup新建保存回调函数
	 */
  editCardSuccess=(newState)=>{
     var newState={
        success_message:newState.success_message,
        id:newState.id,
        freshName:newState.freshName,
     }
     
     this.props.editCardGroupState(newState)
  }
    render() {
        
        return (
                this.props.componentslist.map((form_list,index) => {
                //   if(form_list.type_name==="CardGroup"){
                //       console.log(this.props.componentslist)
                //       console.log(this.props.componentsdata)
                //       console.log(this.props.componentsdata[form_list.before_api_uri])
                //   }
                    return (
                      
                            form_list.type_name === "ListTextSearch" ?
                                <ListTextSearch id={form_list.id_name}
                                    addButton={form_list.add_button}
                                    labelValue={form_list.title}
                                    key={form_list.id_name}
                                    searchInfoLists={form_list.before_api_uri}
                                    selectedIdInfo={this.props.componentsdata[form_list.id_name+"_id"]?this.props.componentsdata[form_list.id_name+"_id"]:"-选择-"} 
                                    selectedInfo={this.props.componentsdata[form_list.id_name+"_name"]?this.props.componentsdata[form_list.id_name+"_name"]:"-选择-"} 
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
                                    key={form_list.id_name}
                                    //inputValue={form_list.key}
                                    inputValue={this.props.componentsdata[form_list.id_name]?this.props.componentsdata[form_list.id_name]:""} 
                                    labelValue={form_list.title} 
                                />
                            :form_list.type_name === "LinkCard"?
                                <LinkCard   
                                    button={form_list.add_button.descript} 
                                    isClick={this.props.componentsdata.id} 
                                    key={form_list.id_name}
                                    messageList={form_list.add_button.before_api_uri} 
                                    label={form_list.add_button.descript} 
                                    linkpage={form_list.before_api_uri}
                                    title={form_list.title} 
                                />
                            :form_list.type_name === "Link"?
                                <Link 
                                    button={form_list.title}
                                    buttonMessage={form_list}
                                    dataId={this.props.componentsdata.id}
                                    // isClick={this.props.card_list.id}
                                    linkpage={form_list.before_api_uri}
                                    key={form_list.id_name}
                                    messageList={form_list.add_button.before_api_uri}
                                    oneChange = {this.handleClick}
                                />
                            //     <Link 
                            //     button={form_list.add_button.descript} 
                            //     handleClick = {this.props.handleClick}
                            //     id={form_list.id_name}
                            //     isClick={this.props.componentsdata.id}
                            //     label={form_list.add_button.descript} 
                            //     linkpage={form_list.before_api_uri}   
                            //     messageList={form_list.add_button.before_api_uri}
                            //     title={form_list.title}
                            // />
                            : form_list.type_name === "MutiText" ? 
                                <TextField 
                                    id={form_list.id_name} 
                                    inputValue={this.props.componentsdata?this.props.componentsdata[form_list.id_name]:""} 
                                    labelValue={form_list.title} 
                                    key={form_list.id_name}
                                />
                            : form_list.type_name === "Invisible" ? 
                                <Invisible 
                                    id={form_list.id_name} 
                                    inputValue={this.props.componentsdata?this.props.componentsdata[form_list.id_name]:""} 
                                    labelValue={form_list.title} 
                                    key={form_list.id_name}
                                />
                            :form_list.type_name === "DisTextField"?
                                <DisTextField
                                    id={form_list.id_name} 
                                    inputValue={this.props.componentsdata[form_list.id_name]!==null?this.props.componentsdata[form_list.id_name]:""} 
                                    labelValue={form_list.title} 
                                    key={form_list.id_name}
                                />
                            :form_list.type_name === "LabelMessage"?
                                <LabelMessage
                                    id={form_list.id_name}
                                    labelValue={form_list.title} 
                                    key={form_list.id_name}
                                    message={this.props.componentsdata[form_list.id_name]?this.props.componentsdata[form_list.id_name]:""} 
                                />
                            :form_list.type_name === "CardHead"?   
                                <CardHead
                                    id={form_list.id_name} 
                                    addButton={form_list.add_button}
                                    key={form_list.id_name}
                                />
                            :form_list.type_name === "CardPage"?   
                                <CardPage
                                    id={form_list.id_name} 
                                    addButton={form_list.add_button}
                                    key={form_list.id_name}
                                    index={index}
                                    footState={this.props.footState}
                                    threeChange = {this.handlethreeClick}
                                    message={this.props.componentsdata?this.props.componentsdata:""} 
                                />
                            :form_list.type_name === "CardItem"?   
                                <CardItem
                                    id={form_list.id_name} 
                                    key={form_list.id_name}
                                    message={this.props.componentsdata[form_list.id_name]?this.props.componentsdata[form_list.id_name]:""} 
                                />
                            :form_list.type_name === "CardTitleItem"?   
                                <CardTitleItem
                                    id={form_list.id_name} 
                                    key={form_list.id_name}
                                    index={index}
                                    message={form_list.title} 
                                    footItemState={this.props.footItemState}
                                    handleCardTitleItem={this.handleThisCardTitleItem}
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
                                    key={form_list.id_name}
                                    searchInfoLists={form_list.before_api_uri} 
                                    selectedIdInfo={this.props.componentsdata?this.props.componentsdata[form_list.id_name+"_id"]:"-选择-"} 
                                    selectedInfo={this.props.componentsdata?this.props.componentsdata[form_list.id_name+"_name"]:"-选择-"} 
                                /> 
                            : form_list.type_name === "TextMoney" ? 
                                <TextMoney
                                    id={form_list.id_name}
                                    key={form_list.id_name}
                                    inputValue={this.props.componentsdata[form_list.id_name]?this.props.componentsdata[form_list.id_name]:""}  
                                    labelValue={form_list.title} 
                                /> 
                            :form_list.type_name==="CardGroup"?
                                <CardGroup 
                                    addButtonTitle={form_list.add_button_title} 
                                    addButton={form_list.add_button} 
                                    beforeApiUri={this.props.componentsdata[form_list.before_api_uri]} 
                                    uriName={form_list.before_api_uri}
                                    delButton = {form_list.add_button.del_button}
                                    editButton={form_list.add_button.edit_button}
                                    listButton = {form_list.add_button.list_button}
                                    idName={form_list.id_name}
                                    isClick={this.props.componentsdata.id}
                                    key={form_list.id_name}
                                    selectedInfo={this.props.componentsdata?this.props.componentsdata:""} 
                                    title={form_list.title} 
                                    postListGroup={this.editCardSuccess}
                                />
                            :form_list.type_name==="HoldBtn"?
                                <HoldBtn 
                                    before_api_uri={form_list.before_api_uri}
                                    key={form_list.id_name}
                                    onHoldClick={this.handleChildClick}
                            />
                            :form_list.type_name==="AddCardBtn"?
                                <AddCardBtn
                                    title={form_list.title}
                                    dataId={this.props.dataId}
                                    addButton={form_list.add_button}
                                    before_api_uri={form_list.before_api_uri}
                                    afterApiUri={form_list.after_api_uri}
                                    key={form_list.id_name}
                                    editCardSuccess={this.editCardSuccess}
                                />
                            :form_list.type_name==="EditCardBtn"?
                                <EditCardBtn
                                    title={form_list.title}
                                    dataId={this.props.dataId}
                                    addButton={form_list.add_button}
                                    before_api_uri={form_list.before_api_uri}
                                    key={form_list.id_name}
                                    
                                />
                            : ""
                       
)
                }
                
                )
            
        )
    }
}

export default ComponentsList;

