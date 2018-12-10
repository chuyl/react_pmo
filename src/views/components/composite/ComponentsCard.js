/** 
    * @author xuesong
    * @param ComponentsList 组件名 用于所有组件循环 
    */

   import React, { Component } from 'react';
   import TextField from '../../components/input/TextField';
   import TextArea from '../../components/input/TextArea';
   import TextMoney from '../../components/input/TextMoney'
   import TextDate from '../../components/input/TextDate'
   import TextDatetime from '../../components/input/TextDatetime'
   import ListTextSearch from '../../components/select/ListTextSearch'
   import CardGroup from '../../components/logic/CardGroup'
   import LabelTitleMessage from '../../components/watch/LabelTitleMessage'
   import TitleMessage from '../../components/watch/TitleMessage'
   import LabelSelectMessage from '../watch/LabelSelectMessage'
   import HoldBtn from '../../components/button/HoldBtn'
   import AddCardBtn from '../../components/button/AddCardBtn'
   import SelectList from '../../components/select/SelectList'
   import Invisible from '../../components/input/Invisible'
   import DepartmentList from '../select/DepartmentList'
   class ComponentsCard extends Component {
       constructor(props) {
           super(props);
           this.state = {
               inputValue:"inputValue",
               targetValue:"",
               componentslist: this.props.componentslist,
           }
       }
       handleChildClick=(newState)=>{
           var newStates = {
               before_api_uri:newState.before_api_uri
              }
          this.props.holdClick(newStates);//回调函数传递参数给父组件
       }
       render() {
           return (
               this.props.componentslist.map((form_list) => {
                       return (
                           form_list.type_name === "ListTextSearch" ?
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
                                : form_list.type_name === "Invisible" ? 
                                   <Invisible 
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
                                :form_list.type_name === "TitleMessage"?
                                   <TitleMessage
                                       id={form_list.id_name} 
                                       labelValue={form_list.title} 
                                       key={form_list.id_name}
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
                               : ""
   )
                   }
                   )
           )
       }
   }
   
   export default ComponentsCard;
   
   