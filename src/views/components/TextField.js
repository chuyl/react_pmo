/** 
     * @author xuesong
     * @param TextField 组件  label+input
     */
import React, { Component } from 'react';

class TextField extends Component {
    
	render(){
        const {id,disabled,inputValue,onChange,onClick,labelValue} =this.props;
		return (
			<div className="text_field_div">
				<label className="search_info_list_label">{labelValue}</label>
				<input className={"text_field_input"} onClick={onClick} onChange={onChange} defaultValue={inputValue} disabled={disabled} id={id}/>
				{/* <span className="text_field_remind"></span> */}
		</div>
		)
	}
}
export default TextField;
