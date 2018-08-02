import React, { Component } from 'react';
import TextField from './TextField';
import ListText from './ListText'
//import Select from './Select'
class ListTextSearch extends Component {
   state={
      search_state:false,
      add_customer:false,
      search_name:"",
      add_customer_input:"",
      search_info_list:[],
      add_button:this.props.add_button,
      search_info_lists:this.props.search_info_lists,
      info_lists:this.props.search_info_lists
   }
   searchShow() {
    this.setState({
        search_state: !this.state.search_state
    })
  }
	render(){
        const {selected_info,id,labelValue}=this.props;
        console.log(this.state.add_button.data)
		return (
            <div>
                
                <div onClick={()=>{
                    this.searchShow()
                }} className={this.state.search_state?"add_list_close":""}></div>
             <label>{labelValue}</label>
            <div
                onClick={() => {
                        this.searchShow()
                    }}   
                    className="selected_info"
                    id={id}>{selected_info===""?"-选择-":selected_info}</div>
            <div
            id="search_info_list_div"  
             className={this.state.search_state?"search_info_list open":"search_info_list"}
            >
             <ul>
                
                 <li>
                     <input onChange={(e)=>{
                         this.setState({
                             search_name:e.target.value
                         })
                         
                     }}/><button
                     onClick={()=>{
                        this.setState({
                            search_info_list:[],
                        })
                         for(var i=0;i<this.state.info_lists.length;i++){
                             if(this.state.info_lists[i].name.indexOf(this.state.search_name)>=0){
                                this.state.search_info_list.push(this.state.info_lists[i])
                               
                             }
                         }
                         this.setState({
                            search_info_lists:this.state.search_info_list
                         })
                         
                     }}
                     >搜索1</button>
                 </li>
                 {this.state.search_info_lists.map((info_lists)=>{
                     return (
                         <li onClick={(e)=>{
                           document.getElementById(id).innerHTML=info_lists.name;
                           this.searchShow()
                         }} key={info_lists.id}>{info_lists.name}</li>
                     )
                 })}
             </ul>
             <div onClick={(e)=>{
                   this.setState({
					add_customer:true
				   })
				}}
             
             >新增</div>
            </div>
            <div className={this.state.add_customer?"add_info_list open":"add_info_list"}>
            <i onClick={()=>{
                  this.setState({
                    add_customer:false	
                })  
                }} style={{fontSize:"20px"}} className="glyphicon glyphicon-arrow-left"></i>
                    {this.state.add_button.data["form-list"].map(form_list =>{
                      return <div key={form_list.id_name}>
                                 {form_list.type_name==="ListTextSearch"?
                                 <ListTextSearch id={form_list.id_name}
                                                     labelValue={form_list.title}
                                                     search_info_lists={form_list.before_api_uri} 
                                                     add_button={form_list.add_button}
                                                     selected_info={form_list.key} />
                                                     
                                 :form_list.type_name==="MutiText"?<TextField id={form_list.id_name} inputValue={form_list.key} labelValue={form_list.title}/>
                                 :form_list.type_name==="ListText"?<ListText id={form_list.id_name}
                                 labelValue={form_list.title}
                                 search_info_lists={form_list.before_api_uri} 
                                 selected_info={form_list.key} />:""}
                                 </div>
           
         })}
					<button
					onClick={(e)=>{
                       // this.state.info_lists.push({id:4,name:"中国铁通"})
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

export default ListTextSearch;