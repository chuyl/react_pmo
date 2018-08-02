import React, { Component } from 'react';

class TextField extends Component {
    
	render(){
        const {id,disabled,inputValue,onChange,onClick,labelValue} =this.props;
		return (
			<div>
				<label>{labelValue}</label>
           <input className={"className"} onClick={onClick} onChange={onChange} defaultValue={inputValue} disabled={disabled} id={id}/>
		</div>
		)
	}
}

export default TextField;
