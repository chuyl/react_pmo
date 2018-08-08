import React, { Component } from 'react';
import TextField from './TextField';
import {dealNumber} from '../../utils/helpers'
//import TextField from './TextField'
import ListText from '../components/ListText'
import ListTextSearch from '../components/ListTextSearch'
//import Select from './Select'
class ListTextSearchLink extends Component {
    constructor(props){
        super(props);
    }
   state={
      search_state:false,
      add_customer:false,
      add_lists:false,
      search_name:"",
      add_customer_input:"",
      search_info_list:[],
      changeResult:"",
      add_lists_length:0,
      //讲师安排获取数据list
     teacher_data_group:[
         {teacher_name:"",teacher_income_tax:"",teacher_lecture_fee:"",teacher_lecture_days:"",teacher_duty:""}
     ],
     //讲师安排card
     teacher_card_list:{
        teacher_card:[{   
            "id_name":"teacher_name",
            "type_name": "ListTextSearch", //下拉搜索
            "key": "",
            "title": "讲师姓名1",
            "tip": "",
            "add_button": {
               "data":{
                "form-temp-name":"讲师姓名",
                "form-list":[{
                    "id_name":"add_a_teacher_name",
                    "type_name": "MutiText", //input
                    "key": "",
                    "title": "讲师姓名",
                    "tip": "",
                    "add_button": {
                    },
                    "descript": "",
                    "before_api_uri": "",
                    "after_api_uri": ""
                },{
                    "id_name":"teacher_always_money",
                    "type_name": "MutiText", //input
                    "key": "",
                    "title": "常用单价",
                    "tip": "",
                    "add_button": {
                    },
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
        }],
      },
      //讲师安排表
      teacher_form_list:{
          "data":[
            {
                teacher_card:[{   
                    "id_name":"teacher_name",
                    "type_name": "ListTextSearch", //下拉搜索
                    "key": "",
                    "title": "讲师姓名",
                    "tip": "",
                    "add_button": {
                       "data":{
                        "form-temp-name":"讲师姓名",
                        "form-list":[{
                            "id_name":"add_a_teacher_name",
                            "type_name": "MutiText", //input
                            "key": "",
                            "title": "讲师姓名",
                            "tip": "",
                            "add_button": {
                            },
                            "descript": "",
                            "before_api_uri": "",
                            "after_api_uri": ""
                        },{
                            "id_name":"teacher_always_money",
                            "type_name": "MutiText", //input
                            "key": "",
                            "title": "常用单价",
                            "tip": "",
                            "add_button": {
                            },
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
                }],
              },
          ]
      },
      add_button:this.props.add_button,
      search_info_lists:this.props.search_info_lists,
      info_lists:this.props.search_info_lists
   }
   searchShow() {
    this.setState({
        search_state: !this.state.search_state
    })
  }
add_teacher_card_components = (index) =>{
    var components = [];
    // var teacher_list = this.state.teacher_form_list.data;
     var teacher_card =this.state.teacher_card_list.teacher_card;
    for(var m = 0;m<teacher_card.length;m++){

    
    components.push(
        
    <div key={m}>
        {
     teacher_card[m].type_name==="ListTextSearch"?
      <ListTextSearch id={teacher_card[m].id_name+index}
                          labelValue={teacher_card[m].title}
                          search_info_lists={teacher_card[m].before_api_uri} 
                          add_button={teacher_card[m].add_button}
                          selected_info={teacher_card[m].key} />
                          
      :
      teacher_card[m].type_name==="MutiText"?<TextField
       onChange={(e)=>{
        
       }} 
       id={teacher_card[m].id_name+index} inputValue={teacher_card[m].key} labelValue={teacher_card[m].title}/>
  :teacher_card[m].type_name==="ListText"?<ListText id={teacher_card[m].id_name+index}
  labelValue={teacher_card[m].title}
  search_info_lists={teacher_card[m].before_api_uri} 
  selected_info={teacher_card[m].key} />:""}
  </div>
  )
  }

   
    return components
}
// delete(e){
//     var index=e.target.getAttribute("data-index");
//     var lists=this.state.lists;
//     console.log(index)
//     lists.splice(index,1);
//     this.setState({lists:lists})
//    }
removeContent(index) {
    if (this.state.teacher_form_list.data.length <= 1) {
        return;
    }
    this.state.teacher_form_list.data.splice(index, 1);
    this.setState({
        teacher_form_list: this.state.teacher_form_list
    })
}
deleteType(){
    let index = this.props.index;
    this.props.callbackParent(index);
}

  add_lists_components =()=> {
    var components = [];
    var teacher_list = this.state.teacher_form_list.data;
    for(var i =0; i<teacher_list.length;i++){
        components.push(
            <li 
            key={i}
            id={"teacher_li"+i}
            index={i}
            callbackParent={this.removeContent.bind(this)}
            style={{border:"1px solid #000"}}
            >
            <button
            onClick={this.deleteType.bind(this)}
            //  onClick={(index,e)=>{
            //     // console.log(index);
            //     // //debugger;
            //     // console.log(this)
            //      let arr = this.state.teacher_form_list.data;
            //     //  console.log(i)
            //     //  console.log(this.state.teacher_form_list.data[i-1])
            //     //  delete(this.state.teacher_form_list.data[i-1])
            //     //  this.state.teacher_form_list.data.remove(this.state.teacher_form_list.data[i])
            //     //  console.log(arr[0]);
            //       arr.splice(index, 1);
            //     //  console.log(arr);
            //       this.setState({
            //         teacher_form_list:this.state.teacher_form_list
            //        }) 
                   
            //        console.log(teacher_list)
            // }}
            
            >删除</button>

        {/* {teacher_list[i].teacher_card.map((form_list,index)=>{
            return (
                <div key={index}>{
                    form_list.type_name==="ListTextSearch"?
                    <ListTextSearch id={form_list.id_name+i}
                                        labelValue={form_list.title}
                                        search_info_lists={form_list.before_api_uri} 
                                        add_button={form_list.add_button}
                                        selected_info={form_list.key} />
                                        
                    :
                    form_list.type_name==="MutiText"?<TextField
                     onChange={(e)=>{
                      
                     }} 
                     id={form_list.id_name+i} inputValue={form_list.key} labelValue={form_list.title}/>
                :form_list.type_name==="ListText"?<ListText id={form_list.id_name+i}
                labelValue={form_list.title}
                search_info_lists={form_list.before_api_uri} 
                selected_info={form_list.key} />:""}</div>
            )
        })} */}
            {this.add_teacher_card_components(i)}

            {/* {this.state.teacher_form_list.data["form-list"].map((form_list,index) =>{
                return <div key={index}>
                      {
                    form_list.type_name==="ListTextSearch"?
                    <ListTextSearch id={form_list.id_name+i}
                                        labelValue={form_list.title}
                                        search_info_lists={form_list.before_api_uri} 
                                        add_button={form_list.add_button}
                                        selected_info={form_list.key} />
                                        
                    :
                    form_list.type_name==="MutiText"?<TextField
                     onChange={(e)=>{
                      
                     }} 
                     id={form_list.id_name+i} inputValue={form_list.key} labelValue={form_list.title}/>
                :form_list.type_name==="ListText"?<ListText id={form_list.id_name+i}
                labelValue={form_list.title}
                search_info_lists={form_list.before_api_uri} 
                selected_info={form_list.key} />:""}
                </div>
            
             })} */}
             
             </li>
        )
    }
    return components
}

	render(){
        const {selected_info,id,labelValue}=this.props;
       
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
              
                    <ul>
                    {this.add_lists_components()}
                    </ul>
                <button 
                onClick={()=>{
                    this.state.teacher_form_list.data.push(this.state.teacher_card_list)
                    this.state.teacher_data_group.push({teacher_name:"",teacher_income_tax:"",teacher_lecture_fee:"",teacher_lecture_days:"",teacher_duty:""})
                    
                    this.setState({
                        add_lists_length:this.state.add_lists_length+1
                       }) 
                   console.log(this.state.teacher_form_list.data)
                }}
                >新增讲师</button>
                <button
                onClick={()=>{
                   var teacher_form_list=this.state.teacher_form_list.data;
                   var teacher_data_group=this.state.teacher_data_group;
                   console.log()
                    for(var i =0;i<teacher_form_list.length;i++){
                        //var teacher_name =  this.state.teacher_data_group[i-1].teacher_name
                        //console.log(document.getElementById("teacher_name"+i).innerHTML)
                        console.log(document.getElementById("teacher_name"+i))
                        teacher_data_group[i].teacher_name=document.getElementById("teacher_name"+i).innerText==null?"":document.getElementById("teacher_name"+i).innerText;
                       
                        
                    }
                    console.log(teacher_data_group)
                }}
                
                >保存</button>
                </div>
                </div>
               
                


                <button onClick={()=>{
                    for(var i = 0;i<this.state.add_button.data["form-list"].length;i++){
                        console.log(document.getElementById(this.state.add_button.data["form-list"][i].id_name).innerHTML||document.getElementById(this.state.add_button.data["form-list"][i].id_name).value)

                    }
                }}>保存1</button>
				</div>
        </div>
		)
	}
}

export default ListTextSearchLink;