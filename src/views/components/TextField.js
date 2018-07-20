import React, { Component } from 'react';

class TextField extends Component {
  
	render(){
        const {id} =this.props;
		return (
           <input id={id}/>
		)
	}
}

export default TextField;
