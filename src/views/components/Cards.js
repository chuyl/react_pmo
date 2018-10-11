import React, { Component } from 'react';
import Link from './Link'
import LabelMessage from './LabelMessage'
import CardGroup from './CardGroup'
class Card extends Component {
    state={
        action:[],
        zoom_in:false,
        type:'',
        add_button:[],
        form_temp_name:"",
        formData:this.props.formData
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
            form_temp_name:formData.form_temp_name
        }
        this.props.onChanges(newState);//回调函数传递参数给父组件
    }
	render(){
        return (
            <div  className={this.state.zoom_in?"card open":"card"}>
           {this.props.add_button.map((form_list) => {
                    return <div key={form_list.id_name}>
                        {form_list.type_name === "Link"?
                            <Link 
                                button={form_list.title}
                                buttonMessage={form_list}
                                dataId={this.props.card_list.id}
                                // isClick={this.props.card_list.id}
                                linkpage={form_list.before_api_uri}
                                messageList={form_list.add_button.before_api_uri}
                                onChange = {this.handleClick}
                            />
                        :form_list.type_name === "LabelMessage"?
                            <LabelMessage
                                id={form_list.id_name} 
                                labelValue={form_list.title} 
                                message={this.props.card_list[form_list.id_name]?this.props.card_list[form_list.id_name]:""} 
                            />
                        :form_list.type_name==="CardGroup"?
                            <CardGroup 
                                addButton={form_list.add_button}
                                addButtonTitle={form_list.add_button_title} 
                                beforeApiUri={this.props.card_list[form_list.before_api_uri]} 
                                idName={form_list.id_name}
                                title={form_list.title} 
                                // eidtButton={form_list.edit_button}
                                // delButton = {form_list.del_button}
                                selectedInfo={this.props.card_list?this.props.card_list:""} 
                            />
                        : ""}
                    </div>

                })}
            </div>
       
		)
	}
}

export default Card;
