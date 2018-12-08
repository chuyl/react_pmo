import React, { Component } from 'react';
// import Link from './components/Link'
import ComponentsList from './components/composite/ComponentsList'
class Card extends Component {
    state={
        action:[],
        zoom_in:false,
        type:'',
        add_button:[],
        form_temp_name:""
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
   
    
	render(){
        // const {id,customer_name,card_list ,course_name, person_in_charge, train_days,  train_date, train_place}=this.props;
        return (
            <div className={this.state.zoom_in?"card open":"card"}>
                < ComponentsList handleClick={this.props.handleClick} componentslist =  {this.props.add_button?this.props.add_button:[]} componentsdata = {this.props.card_list} ></ComponentsList > 
            </div>
		)
	}
}

export default Card;
