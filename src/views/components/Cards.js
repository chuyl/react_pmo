import React, { Component } from 'react';
import Link from './Link'
import LabelTitleMessage from './LabelTitleMessage'
import LabelSelectMessage from './LabelSelectMessage'
import CardHead from './CardHead'
import CardBody from './CardBody'
import CardOpen from './CardOpen'
import CardFoot from './CardFoot'
import CardGroup from './CardGroup'
class Card extends Component {
    state={
        action:[],
        zoom_in:false,
        type:'',
        add_button:[],
        form_temp_name:"",
        formData:this.props.formData,
        cardTitleItem:"",
        openCtrlState:""//openCard
    }
  
    zoom_in = () => {
        this.setState({
            zoom_in:true,
        })
       document.getElementById(this.props.card).style.height  = document.documentElement.clientHeight+"px";
	}
	zoom_out = () =>{
        this.setState({
            zoom_in:false,
        })
        document.getElementById(this.props.card).setAttribute("style"," ");
    }
    // handleChildChange=(newState)=>{ //处理子函数传回来的state,改变自身的state
	// 	console.log(newState.formData)
	// 	if(newState){
	// 		  this.setState(newState);
	// 		  this.setState({
	// 			formData:newState.formData
	// 		  })
	// 	}
    //   }

      handleClick=(formData)=>{
        var newState = {
            add_button:formData.add_button,
            data:formData.data,
            dataId:formData.dataId,
            form_temp_name:formData.form_temp_name,
           
        }
        this.props.sixChange(newState);//回调函数传递参数给父组件
    }
    //   获取cardOpen的状态
    handlethreeCardTitleItem=(thisBtnState)=>{
        // var newState = {
        //     cardTitleItem:thisBtnState.cardTitleItem
        // }
        this.setState({
            cardTitleItem:thisBtnState.cardTitleItem
        })
      }
    //   获取cardOpen的状态
      openCtrlState=(state)=>{
          
        this.setState({
            openCtrlState:state.openCardState,
            thisIndex:this.props.index
        })
        
      }
	render(){
        var id="card_id"+this.props.index;
        if(this.state.openCtrlState===false){
            setTimeout(function(){
                document.getElementById(id).classList?document.getElementById(id).classList.remove("move-in"):""
            },300)
        }
        if(this.state.openCtrlState===true){
          
             setTimeout(function(){
                document.getElementById(id).classList?document.getElementById(id).classList.remove("move-out"):""
             },300)
         }
        return (
            
            <div id={"card_id"+this.props.index} name={"card-project"} className={this.state.openCtrlState===""?"card-project active":this.state.openCtrlState===true?"card-project active open move-out":"card-project move-in active"}>
                {this.props.add_button.map((form_list) => {
                    return (
                        form_list.type_name === "Link"?
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
                                    message={this.props.card_list?this.props.card_list:""} 
                                />
                            :form_list.type_name === "CardBody"?
                                <CardBody
                                    openState={this.state.openCtrlState}
                                    cardIndex={this.props.index}
                                    id={form_list.id_name} 
                                    addButton={form_list.add_button}
                                    key={form_list.id_name}
                                    fiveChange = {this.handleClick}  
                                    footState={this.state.cardTitleItem}
                                    message={this.props.card_list?this.props.card_list:""} 
                                />
                            :form_list.type_name === "CardOpen"?
                                <CardOpen 
                                    id={form_list.id_name} 
                                    addButton={form_list.add_button}
                                    key={form_list.id_name}
                                    openCtrlState={this.openCtrlState}
                                    message={this.props.card_list?this.props.card_list:""} />
                            :form_list.type_name === "CardFoot"?
                                <CardFoot
                                    openState={this.state.openCtrlState}
                                    id={form_list.id_name} 
                                    addButton={form_list.add_button}
                                    key={form_list.id_name}
                                    // threeChange = {this.handleClick}
                                    message={form_list.title} 
                                    handlethreeCardTitleItem = {this.handlethreeCardTitleItem}
                                />
                            
                            :form_list.type_name === "LabelTitleMessage"?
                                <LabelTitleMessage
                                    id={form_list.id_name} 
                                    labelValue={form_list.title} 
                                    key={form_list.id_name}
                                    message={this.props.card_list[form_list.id_name]?this.props.card_list[form_list.id_name]:""} 
                                />
                            :form_list.type_name === "LabelSelectMessage"?
                                <LabelSelectMessage
                                    id={form_list.id_name} 
                                    labelValue={form_list.title} 
                                    key={form_list.id_name}
                                    message={this.props.card_list[form_list.id_name+"_name"]?this.props.card_list[form_list.id_name+"_name"]:""} 
                                />
                            :form_list.type_name==="CardGroup"?
                                <CardGroup 
                                    addButton={form_list.add_button}
                                    addButtonTitle={form_list.add_button_title} 
                                    beforeApiUri={this.props.card_list[form_list.before_api_uri]} 
                                    idName={form_list.id_name}
                                    key={form_list.id_name}
                                    title={form_list.title} 
                                    // eidtButton={form_list.edit_button}
                                    // delButton = {form_list.del_button}
                                    selectedInfo={this.props.card_list?this.props.card_list:""} 
                                />
                            : ""
                    )

                })}
            </div>
       
		)
	}
}

export default Card;
