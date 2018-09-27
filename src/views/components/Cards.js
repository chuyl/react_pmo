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
   
    handleChildChange=(newState)=>{ //处理子函数传回来的state,改变自身的state
		console.log(newState.formData)
		if(newState){
			  this.setState(newState);
			  this.setState({
				formData:newState.formData
			  })
		}
      }
   
	render(){
        // console.log(newState.formData)
        const {id,customer_name,card_list ,course_name, person_in_charge, train_days,  train_date, train_place}=this.props;
        
        return (
            <div  className={this.state.zoom_in?"card open":"card"}>
           {this.props.add_button.map((form_list) => {
                    return <div key={form_list.id_name}>
                        {form_list.type_name === "Link"?<Link 
                                     button={form_list.title}
                                     formData={form_list.add_button.before_api_uri}
                                     onChange = {this.handleChildChange}
                                //    id={form_list.id_name}
                                //    title={form_list.title}
                                //     messageList={form_list.add_button.before_api_uri}
                                //     label={form_list.add_button.descript} 
                                //     isClick={this.props.card_list.id}
                                //     button={form_list.add_button.descript} 
                                //     linkpage={form_list.before_api_uri}
                                  />
                                   :form_list.type_name === "LabelMessage"?<LabelMessage
                                    id={form_list.id_name} 
                                   message={this.props.card_list[form_list.id_name]?this.props.card_list[form_list.id_name]:""} 
                                   labelValue={form_list.title} />
                                    :form_list.type_name==="CardGroup"?<CardGroup idName={form_list.id_name}
                                    title={form_list.title} 
                                    selectedInfo={this.props.card_list?this.props.card_list:""} 
                                    addButtonTitle={form_list.add_button_title} 
                                    beforeApiUri={this.props.card_list[form_list.before_api_uri]} 
                                    addButton={form_list.add_button} />
                                   : ""}
                    </div>

                })}
            </div>
       
		)
	}
}

export default Card;
