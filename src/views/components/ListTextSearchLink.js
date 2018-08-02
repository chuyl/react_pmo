import React, { Component } from 'react';
import TextField from './TextField';
import {dealNumber} from '../../utils/helpers'
//import TextField from './TextField'
import ListText from '../components/ListText'
import ListTextSearch from '../components/ListTextSearch'
//import Select from './Select'
class ListTextSearchLink extends Component {
   state={
      search_state:false,
      add_customer:false,
      add_lists:false,
      search_name:"",
      add_customer_input:"",
      search_info_list:[],
      changeResult:"",
      add_lists_length:1,
     
      teacher_form_list:{
          "data":{
              "form-list":[{   
                "id_name":"teacher_name",
                "type_name": "ListTextSearch", //下拉搜索
                "key": "",
                "title": "讲师姓名",
                "tip": "",
                "add_button": {
                   "data":{
                    "form-temp-name":"讲师姓名",
                    "form-list":[{
                        "id_name":"teacher_income_tax",
                        "type_name": "MutiText", //input
                        "key": "",
                        "title": "所得税",
                        "tip": "",
                        "add_button": {},
                        "descript": "",
                        "before_api_uri": "",
                        "after_api_uri": ""
                    },]
                }
                },
                "descript": "",
                "before_api_uri": [{
                    id: 1,
                    name: "讲师1",
                }, {
                    id: 2,
                    name: "讲师2",
                }, {
                    id: 3,
                    name: "讲师3",
                }],
                "after_api_uri": ""
            },
            {
                "id_name":"teacher_income_tax",
                "type_name": "MutiText", //input
                "key": "",
                "title": "所得税",
                "tip": "",
                "add_button": {},
                "descript": "",
                "before_api_uri": "",
                "after_api_uri": ""
            },
            {
                "id_name":"teacher_lecture_fee",
                "type_name": "MutiText", //input
                "key": "3000",
                "title": "讲课费",
                "tip": "",
                "add_button": {},
                "descript": "",
                "before_api_uri": "",
                "after_api_uri": ""
            },
            {
                "id_name":"teacher_lecture_days",
                "type_name": "MutiText", //input
                "key": "5",
                "title": "课程天数",
                "tip": "",
                "add_button": {},
                "descript": "",
                "before_api_uri": "",
                "after_api_uri": ""
            },
            {   
                "id_name":"teacher_duty",
                "type_name": "ListTextSearch", //下拉搜索
                "key": "",
                "title": "职责",
                "tip": "",
                "add_button": {
                    "data":{
                        "form-list":[]
                    }
                },
                "descript": "",
                "before_api_uri": [{
                    id: 1,
                    name: "主讲",
                }, {
                    id: 2,
                    name: "专家",
                }, {
                    id: 3,
                    name: "评审",
                }],
                "after_api_uri": ""
            }]
          }
      },
     // teacher_data_group:this.props.add_button.data.teacher_data_group.data,
      add_button:{
        "data": {
            "form-list": [{
                "id_name":"add_project_name",
                "type_name": "MutiText", //input
                "key": "",
                "title": "项目名称",
                "tip": "",
                "add_button": {},
                "descript": "",
                "before_api_uri": "",
                "after_api_uri": ""
            }, {
                "id_name":"add_project_gather",
                "type_name": "ListTextSearch", //下拉搜索
                "key": "",
                "title": "所属项目集",
                "tip": "",
                "add_button": {
                    "data":{
                        "form-temp-name":"新建项目集",
                        "form-list":[{
                            "id_name":"add_project_gather_charge",
                            "type_name": "ListText", //下拉搜索
                            "key": "",
                            "title": "销售负责人",
                            "tip": "",
                            "add_button": {},
                            "descript": "",
                            "before_api_uri": [{
                                id: 1,
                                name: "亢鹏",
                            }, {
                                id: 2,
                                name: "寇艳艳",
                                budget_cost: 10000
                            }, {
                                id: 3,
                                name: "张剑",
                                budget_cost: 10000
                            }],
                            "after_api_uri": ""
                        }]
                    }
                },
                "descript": "",
                "before_api_uri": [{
                    id: 1,
                    name: "项目集1",
                }, {
                    id: 2,
                    name: "项目集2",
                }, {
                    id: 3,
                    name: "项目集3",
                }],
                "after_api_uri": ""
            },
            {   "id_name":"add_project_charge",
                "type_name": "ListText", //下拉搜索
                "key": "",
                "title": "实施负责人",
                "tip": "",
                "add_button": {},
                "descript": "",
                "before_api_uri": [{
                    id: 1,
                    name: "亢鹏",
                }, {
                    id: 2,
                    name: "寇艳艳",
                    budget_cost: 10000
                }, {
                    id: 3,
                    name: "张剑",
                    budget_cost: 10000
                }],
                "after_api_uri": ""},{
                    "id_name":"project_templet",
                    "type_name": "ListTextSearch", //下拉搜索
                    "key": "",
                    "title": "项目模板",
                    "tip": "",
                    "add_button": {
                        "data":{
                            "form-temp-name":"项目模板",
                            "form-list":[{
                                "id_name":"add_project_templet",
                                "type_name": "ListText", //下拉搜索
                                "key": "",
                                "title": "销售负责人1",
                                "tip": "",
                                "add_button": {},
                                "descript": "",
                                "before_api_uri": [{
                                    id: 1,
                                    name: "亢鹏",
                                }, {
                                    id: 2,
                                    name: "寇艳艳",
                                    budget_cost: 10000
                                }, {
                                    id: 3,
                                    name: "张剑",
                                    budget_cost: 10000
                                }],
                                "after_api_uri": ""
                            }]
                        }
                    },
                    "descript": "",
                    "before_api_uri": [{
                        id: 1,
                        name: "公开课实施",
                    }, {
                        id: 2,
                        name: "行业培训实施",
                    }],
                    "after_api_uri": ""
                },
                {
                    "id_name":"add_customer_name",
                    "type_name": "MutiText", //input
                    "key": "",
                    "title": "客户名称",
                    "tip": "",
                    "add_button": {},
                    "descript": "",
                    "before_api_uri": "",
                    "after_api_uri": ""
                },{
                    "id_name":"add_days",
                    "type_name": "MutiText", //input
                    "key": "",
                    "title": "天数",
                    "tip": "",
                    "add_button": {},
                    "descript": "",
                    "before_api_uri": "",
                    "after_api_uri": ""
                },{
                    "id_name":"add_training_numbers",
                    "type_name": "MutiText", //input
                    "key": "",
                    "title": "培训人数",
                    "tip": "",
                    "add_button": {},
                    "descript": "",
                    "before_api_uri": "",
                    "after_api_uri": ""
                },{
                    "id_name":"add_training_ares",
                    "type_name": "MutiText", //input
                    "key": "",
                    "title": "培训地点",
                    "tip": "",
                    "add_button": {},
                    "descript": "",
                    "before_api_uri": "",
                    "after_api_uri": ""
                }
            
        ],
            
        }},
      search_info_lists:this.props.search_info_lists,
      info_lists:this.props.search_info_lists
   }
   searchShow() {
    this.setState({
        search_state: !this.state.search_state
    })
  }
//   add_lists_components =()=> {
//     var components = [];
   
// for(var i=0;i<=this.state.add_lists_length;i++){
//         components.push(
//             <li>{this.state.add_lists_length}</li>
//         )
//     }
//     return components
// }
	render(){
        const {selected_info,id,labelValue}=this.props;

        console.log(this.props.group_lists)
       // console.log(this.state.add_button)
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
                            for(var i=0;i<this.props.search_info_lists.length;i++){
                               if(info_lists.name===this.props.search_info_lists[i].name){
                                this.setState({
                                    changeResult:this.props.search_info_lists[i].cost
                                })
                               }
                           }
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
            <div>预计成本:{dealNumber(this.state.changeResult)}</div>
            <div className={this.state.add_customer?"add_info_list open":"add_info_list"}>
            <i onClick={()=>{
                  this.setState({
                    add_customer:false	
                })  
                }} style={{fontSize:"20px"}} className="glyphicon glyphicon-arrow-left"></i>
                    {/* 添加客户1 */}

                {this.state.add_button.data["form-list"].map(form_list =>{
                  console.log(form_list.add_button)
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
                <div>
                    <span>讲师安排</span>
                    <button 
                onClick={()=>{
                    this.setState({
                        add_lists:true
                       }) 
                   
                }}
                >修改讲师安排</button>
                <div className={this.state.add_lists?"add_info_list open":"add_info_list"}>
                <i onClick={()=>{
                  this.setState({
                    add_lists:false	
                })  
                }} style={{fontSize:"20px"}} className="glyphicon glyphicon-arrow-left"></i>
                修改讲师安排
                <TextField  inputValue={""} labelValue={"合同编号"}/>
                <TextField  inputValue={""} labelValue={"课程名称"}/>
                <p>讲师安排</p>
                {this.state.teacher_form_list.data["form-list"].map(form_list =>{
                   
                   return <div key={form_list.id_name}>
                   {
                       form_list.type_name==="ListTextSearch"?
                       <ListTextSearch id={form_list.id_name}
                                           labelValue={form_list.title}
                                           search_info_lists={form_list.before_api_uri} 
                                           add_button={form_list.add_button}
                                           selected_info={form_list.key} />
                                           
                       :
                       form_list.type_name==="MutiText"?<TextField id={form_list.id_name} inputValue={form_list.key} labelValue={form_list.title}/>
                   :form_list.type_name==="ListText"?<ListText id={form_list.id_name}
                   labelValue={form_list.title}
                   search_info_lists={form_list.before_api_uri} 
                   selected_info={form_list.key} />:""}
                   </div>

                })}
                {/* <ul>
                    {this.add_lists_components()}
                </ul> */}
                <button 
                onClick={()=>{
                    this.setState({
                        add_lists_length:this.state.add_lists_length+1
                       }) 
                   
                }}
                >新增讲师</button>
                </div>
                </div>
                {/* <h6>{this.state.add_button.data.teacher_data_group.teacher_group}</h6>
                {this.state.teacher_data_group.map(teacher_data_group=>{
                   // console.log(teacher_data_group)
                    return <div key={teacher_data_group.id_name}>
                             <ListTextSearch id={teacher_data_group.id_name}
                                labelValue={teacher_data_group.title}
                                search_info_lists={teacher_data_group.before_api_uri} 
                                add_button={teacher_data_group.add_button}
                                selected_info={teacher_data_group.key} /> 
                    </div>
                })} */}
                


                <button onClick={()=>{
                    console.log(this.state.teacher_data_group)
                    for(var i = 0;i<this.state.add_button.data["form-list"].length;i++){
                        console.log(document.getElementById(this.state.add_button.data["form-list"][i].id_name).innerHTML||document.getElementById(this.state.add_button.data["form-list"][i].id_name).value)

                    }
                }}>保存1</button>

                    {/* <TextField
                    //className="add_customer_input"
                    onChange={(e)=>{
                        console.log("hhh")
                        this.setState({
                            add_customer_input:e.target.value
                        })
                    }}
                    inputValue={""}/>
					<button
					onClick={(e)=>{
                       // this.state.info_lists.push({id:4,name:"中国铁通"})
						this.setState({
							add_customer:false	
						})
					}}
					>保存</button> */}
				</div>
                
        </div>
		)
	}
}

export default ListTextSearchLink;