//合同管理
import React, { Component } from 'react';

class Contract extends Component {
   state={
	   change:"1111"
   }
//    componentWillMount(){
// 	   console.log("componentWillMount")
//    }
//    componentDidMount(){
// 	this.setState({
// 		change:"1"
// 	},()=>{
// 		console.log("setState:"+this.state.change)})
// 	console.log("componentDidMount")
// }

//    shouldComponentUpdate(){
// 	console.log("shouldComponentUpdate")
// }
// componentWillUpdate(){
// 	console.log("componentWillUpdate")
// }
// componentDidUpdate(){
// 	console.log("componentDidUpdate")
// }
	render(){
		return (
            <div>
            <input onChange={(e)=>{
				this.setState({
					change:e.target.value
				})
			}} id="change" value={this.state.change}/>
			<button
			// 
			>修改</button>
        </div>
		)
	}
}

export default Contract;