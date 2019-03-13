/** 
     * @author xuesong
     * @param ViewTextField 组件  label+input
     */
import React, { Component } from 'react';

class ViewTextField extends Component {
    state={
		inputValue:this.props.inputValue
	}
	handleChange(e) {
		this.setState({
			inputValue: e.target.value,
		})
	  }
	render(){
        const {id,disabled,inputValue,onClick,labelValue,name,onChange,value,password} =this.props;
		return (
			<div  style={this.props.view?{marginBottom:"10px"}:{}} className="text_field_div">
				<label className="search_info_list_label">{labelValue}</label>
				<input type={password?"password":"text"} value={value} className={"text_field_input"} onClick={onClick} name={name} defaultValue={inputValue} onChange={onChange} disabled={disabled} id={id}/>
				{/* <span className="text_field_remind"></span> */}
		  </div>
		)
	}
}
export default ViewTextField;
