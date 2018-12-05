/** 
     * @author xuesong
     * @param TextField 组件  label+input
     */
import React, { Component } from 'react';

class TextField extends Component {
    state={
		inputValue:"",
		inputState:false
	}
	handleChange(e) {
		this.setState({
			inputState:true,
			inputValue: e.target.value,
		})
	  }
	render(){
        const {id,disabled,inputValue,onClick,labelValue,name} =this.props;
		return (
			<div className="text_field_div">
				<label className="search_info_list_label">{labelValue}</label>
				<input type={"text"}  className={"text_field_input"} onClick={onClick} name={name} value={this.state.inputState===false?this.props.inputValue:this.state.inputValue} onChange={this.handleChange.bind(this)} disabled={disabled} id={id}/>
				{/* <span className="text_field_remind"></span> */}
		  </div>
		)
	}
}
export default TextField;
