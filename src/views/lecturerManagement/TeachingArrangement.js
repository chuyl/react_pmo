import React, { Component } from 'react';
import { getData, getRouter,getList } from '../../utils/helpers'
class TeachingArrangement extends Component {
	getList=()=>{
		var href =  "https://edu.51cto.com/courselist/index-p467.html";
		var a = document.createElement('a');
		a.href = href;
		a.click();  

	}
	render(){
		return (
            <div>
				<button onClick={()=>{
					this.getList()
				}}>dianji</button>
            授课安排
        </div>
		)
	}
}

export default TeachingArrangement;
