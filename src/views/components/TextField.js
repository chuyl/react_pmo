/** 
     * @author xuesong
     * @param TextField 组件  label+input
     */
import React, { Component } from 'react';

class TextField extends Component {
    state={
		inputValue:this.props.inputValue
	}
	handleChange(e) {
		this.setState({
			inputValue: e.target.value,
		})
	  }
	render(){
        const {id,disabled,inputValue,onChange,onClick,labelValue,name} =this.props;
		return (
			<div className="text_field_div">
				<label className="search_info_list_label">{labelValue}</label>
				<input type={"text"} className={"text_field_input"} onClick={onClick} name={name} defaultValue={this.props.inputValue} onChange={this.handleChange.bind(this)} disabled={disabled} id={id}/>
				{/* <span className="text_field_remind"></span> */}
		</div>
		)
	}
}
export default TextField;
