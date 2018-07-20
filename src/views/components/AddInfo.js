import React, { Component } from 'react';
import TextField from './TextField'
class AddInfo extends Component {
   state={
      add_state:false,
      search_state:false,
       add_info:[{id:1,name:"中国移动"},{id:2,name:"中国联通"},{id:3,name:"中国电信"}]
   }
   SearchShow() {
    this.setState({
        search_state: !this.state.search_state
    })
  }
	render(){
		return (
            <div>
            <TextField id="add_customer_info"/><button
            onClick={()=>{
                this.SearchShow()
            }}
            >搜索</button>
            <div className={this.state.search_state?"search_info_list open":"search_info_list"}>
             <ul>
                 {this.state.add_info.map((add_info)=>{
                     return (
                         <li onClick={()=>{
                           console.log(add_info.name)
                           document.getElementById("add_customer_info").value=add_info.name;
                           this.SearchShow()
                         }} key={add_info.id}>{add_info.name}</li>
                     )
                 })}
             </ul>
             <div onClick={()=>{
                   this.setState({
					add_customer:true
				   })
				}}
             
             >新增</div>
            </div>
            <div className={this.state.add_customer?"add_info_list open":"add_info_list"}>
					添加客户
					<input/>
					<button
					onClick={()=>{
						this.setState({
							add_customer:false	
						})
					}}
					>保存</button>
				</div>
        </div>
		)
	}
}

export default AddInfo;