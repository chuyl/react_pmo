import React, { Component } from 'react';
import { getData, getRouter,getList,PostCsvData } from '../../utils/helpers'
import DataSearchMessage from '../components/search/DataSearchMessage'
import Popup from '../components/modal/Popup'
import ViewTextField from '../components/input/ViewTextField'
import Alert from '../components/modal/Remind'
import Alerts from '../components/modal/Alert'
import ClickArrAlert from '../components/button/ClickArrAlert';
import PaymentManageBtn from '../components/button/PaymentManageBtn'
class TechnologyClassificationManagement extends Component {
	state={
		pno:1,
        psize:Math.floor((document.body.clientHeight*0.7-40)/28),
        count:0,
        project_pno:1,
        project_psize:Math.floor((document.body.clientHeight*0.7-40)/28),
        project_count:0,
        table_data_body:[],
        table_data_bodys:[],
        table_type_data_body:[],
        table_type_data_bodys:[],
        table_type_data_head:[],
        table_data_head:[],
         query_condition:{},
         search_message:"",
         search_project_message:"",
		 financial_number:"",
		 add_courses_by_type:false,//一个项目关联多个支出
		 alertAddProjectState:false,//相关内容
		 alertState:false,
		 course_object_list:[],//支出id
		 type_object_list:[],//项目id
         alertTitle:"",
         type_course_title:"",
         linkpage:"",
         type_course_id_arr:[],
         content:""
         
        
	}
	componentWillMount(){
        this.table_data_body(1,this.state.psize,this.state.search_message)
        this.table_type_data_body(1,this.state.psize,this.state.search_project_message)
	}
	table_data_body = (page_num,page_size,search_obj) => {
        
        var cb = (route, message, arg) => {
            if (message.error === 0) {
               this.setState({
                table_data_body:message.data.data_body,
                table_data_bodys:message.data.data_body,
                table_data_head:message.data.data_head,
                count:message.data.count
			   })
            }
           
        }
        var obj ={page_num:{"condition":"equal","query_data":page_num},page_size:{"condition":"equal","query_data":page_size}};
        var objs = search_obj?Object.assign(obj, search_obj):obj
        // var places = JSON.parse((JSON.stringify(obj)+JSON.stringify(this.state.search_message)).replace(/}{/,','));
        this.setState({
            query_condition:obj
		})
        getData(getRouter("course_manage_list"), { token: sessionStorage.token,query_condition:objs,data_type:"page_json" }, cb, {});
        // getData(getRouter("examine_record_list"),{ session: sessionStorage.session}, cb, {});

    }
    table_type_data_body = (page_num,page_size,search_obj) => {
        
        var cb = (route, message, arg) => {
            if (message.error === 0) {
               this.setState({
                table_type_data_body:message.data.data_body,
                table_type_data_bodys:message.data.data_body,
                table_type_data_head:message.data.data_head,
                project_count:message.data.count
			   })
            }
           
        }
        var obj ={page_num:{"condition":"equal","query_data":page_num},page_size:{"condition":"equal","query_data":page_size}};
        var objs = search_obj?Object.assign(obj, search_obj):obj
        // var places = JSON.parse((JSON.stringify(obj)+JSON.stringify(this.state.search_message)).replace(/}{/,','));
        this.setState({
            query_condition:obj
		})
        getData(getRouter("classification_manage_list"), { token: sessionStorage.token,query_condition:objs,data_type:"page_json" }, cb, {});
        // getData(getRouter("examine_record_list"),{ session: sessionStorage.session}, cb, {});

	}
	payment_csv=(search_obj)=>{
		var cb = (route, message, arg) => {
            if (message.error === 0) {
           
            }
           
        }
        var obj ={};
     
        this.setState({
            query_condition:obj
		})
		PostCsvData(getRouter("course_manage_list"), search_obj===""?{token: sessionStorage.token,data_type:"page_csv"}:{token: sessionStorage.token,query_condition:search_obj,data_type:"page_csv"}
		 , cb, {});
	}
	
	project_csv=(search_obj)=>{
		var cb = (route, message, arg) => {
            if (message.error === 0) {
           
            }
           
        }
        var obj ={};
     
        this.setState({
            query_condition:obj
		})
		PostCsvData(getRouter("classification_manage_list"), search_obj===""?{token: sessionStorage.token,data_type:"page_csv"}:{token: sessionStorage.token,query_condition:search_obj,data_type:"page_csv"}
		 , cb, {});
	}
	
    checked_arr=(name,arr,radio)=>{
        var name=document.getElementsByName(name);
        var radio =document.getElementsByName(radio)
        var check_arr=[];
        // var length=0;
        for(var i = 0;i<name.length;i++ ){
            if(name[i].checked){
                // length++
                check_arr.push(name[i].value)
            }
        }
        if(check_arr.length>1){
            for(var j = 0;j<radio.length;j++){
                radio[j].type="radio"
            }
            
        }else{
            for(var m = 0;m<radio.length;m++){
                radio[m].type="checkbox"
            }
             
        }
        this.setState({
            [arr]:check_arr
        })
    }
	goPage= (pno,psize) =>{
        // this.table_data_body()
        // {this.historyFileDialog()}
        var components = [];
        var num = this.state.count;//表格所有行数(所有记录数)
        var totalPage = 0;//总页数
        var pageSize = this.state.psize;//每页显示行数
       // //总共分几页 
       if(num/pageSize > parseInt(num/pageSize)){   
               totalPage=parseInt(num/pageSize)+1;   
          }else{   
              totalPage=parseInt(num/pageSize);   
          }   
       var currentPage = pno;//当前页数
        var startRow = (currentPage - 1) * pageSize+1;//开始显示的行  31 
        var endRow = currentPage * pageSize;//结束显示的行   40
        endRow = (endRow > num)? num : endRow;    40
        this.state.table_data_body.map((table_data_body,index)=>{
            var id="";
            for(var i = 0;i<4-table_data_body.id.length;i++){
                id+="0"
            }
            components.push (
                <tr
                    key = {index}> 
					<td  style={{"width":"2em"}}>
                        <input 
                            onClick={()=>{
                               this.checked_arr("paymentCheck","course_object_list","projectCheck")
                            }}
                            value={table_data_body.id}
                            name="paymentCheck" type="checkbox"/>
                            <span style={{display:"none"}}>{id+table_data_body.id+" "+table_data_body.item_content===""?"未设置支出内容":table_data_body.item_content+" "+table_data_body.amount===""?"未设置金额":table_data_body.amount}</span>
					</td>
					
                    {this.state.table_data_head?this.state.table_data_head.map((table_data_head,index)=>{
						return(
						<td key={index} title={table_data_body[table_data_head.key]}>
							<div className="statistical_table_box">
								{table_data_body[table_data_head.key]}
							</div>
						</td>)
						
					}):""}
					
                </tr>
       
        );
       
        })
        return components
     }
     goProjectPage= (pno,psize) =>{
        // this.table_type_data_body()
        // {this.historyFileDialog()}
        var components = [];
        var num = this.state.count;//表格所有行数(所有记录数)
        var totalPage = 0;//总页数
        var pageSize = this.state.psize;//每页显示行数
       // //总共分几页 
       if(num/pageSize > parseInt(num/pageSize)){   
               totalPage=parseInt(num/pageSize)+1;   
          }else{   
              totalPage=parseInt(num/pageSize);   
          }   
       var currentPage = pno;//当前页数
        var startRow = (currentPage - 1) * pageSize+1;//开始显示的行  31 
        var endRow = currentPage * pageSize;//结束显示的行   40
        endRow = (endRow > num)? num : endRow;    40
        this.state.table_type_data_body.map((table_type_data_body,index)=>{
            components.push (
                <tr
                    key = {index}> 
					<td  style={{"width":"2em"}}>
						<input onClick={()=>{
                                this.checked_arr("projectCheck","type_object_list","paymentCheck")
                      
                          
                        }}  value={table_type_data_body.id} name="projectCheck" type="checkbox"/>
                         <span style={{display:"none"}}>{table_type_data_body.unicode+" "+table_type_data_body.project_name===""?"未设置课程名称":table_type_data_body.project_name+" "+table_type_data_body.time}</span>
                    </td>
					{/* <td>
						<input value={table_type_data_body.id} type="checkbox" name="payment"/>
					</td> */}
                    {this.state.table_type_data_head?this.state.table_type_data_head.map((table_type_data_head,index)=>{
                        return(
						<td key={index} title={table_type_data_body[table_type_data_head.key]}>
							<div className="statistical_table_box">
								{table_type_data_body[table_type_data_head.key]}
							</div>
						</td>)
						
					}):""}
					
                </tr>
       
        );
       
        })
        return components
     }
	 change_page = (pno,psize)=>{
        var num = this.state.count;//表格所有行数(所有记录数)
        var totalPage = 0;//总页数
        var pageSize = this.state.psize;//每页显示行数
       // //总共分几页 
       if(num/pageSize > parseInt(num/pageSize)){   
               totalPage=parseInt(num/pageSize)+1;   
          }else{   
              totalPage=parseInt(num/pageSize);   
          }   
       	var currentPage = this.state.pno;//当前页数
        var startRow = (currentPage - 1) * pageSize+1;//开始显示的行  31 
        var endRow = currentPage * pageSize;//结束显示的行   40
        endRow = (endRow > num)? num : endRow;    40
        var components =<div>
            <span>{"共"+num+"条记录 分"+totalPage+"页 当前第"+currentPage+"页"}</span>
        	<a 
				className="nyx-change-page-href"
				onClick={()=>{
					this.setState({
						pno:1
					})
					currentPage>1?this.goPage(this.state.pno,"+psize+"):""
					currentPage>1?this.table_data_body(1,this.state.psize,this.state.search_message):""
				}}
				>首页
			</a>
			<a 
				className="nyx-change-page-href" onClick={()=>{
				currentPage>1?this.setState({pno:this.state.pno-1}):""
				currentPage>1?this.goPage(this.state.pno,"+psize+"):""
				currentPage>1?this.table_data_body(this.state.pno-1,this.state.psize,this.state.search_message):""
			}}
			>{"<上一页"}</a>
			<a 
				className="nyx-change-page-href" 
				onClick={()=>{
				currentPage<totalPage?this.setState({pno:this.state.pno+1}):""
			{ this.goPage("+(currentPage+1)+","+psize+")}
				currentPage<totalPage?this.goPage(this.state.pno,"+psize+"):""
				currentPage<totalPage?this.table_data_body(this.state.pno+1,this.state.psize,this.state.search_message):""
			}}
			>{"下一页>"}</a>
			<a 
				className="nyx-change-page-href"
				onClick={()=>{
				currentPage<totalPage?this.setState({pno:totalPage}):""
				
				currentPage<totalPage?this.goPage(this.state.pno,"+psize+"):""
				currentPage<totalPage?this.table_data_body(totalPage,this.state.psize,this.state.search_message):""
			} }
			>{"尾页"}</a>
			<a 
				onClick={()=>{
					// this.downloadDetailData()
					 this.payment_csv(this.state.search_message)
				}}
				className="nyx-change-page-href" style={{marginRight:"-10em",float:"right"}}>
				{"导出"}
			</a>
			<div id='downloadDiv' style={{display:'none'}}></div>
        </div>
     return components
     }
     project_change_page = (pno,psize)=>{
        var num = this.state.project_count;//表格所有行数(所有记录数)
        var totalPage = 0;//总页数
        var pageSize = this.state.psize;//每页显示行数
       // //总共分几页 
       if(num/pageSize > parseInt(num/pageSize)){   
               totalPage=parseInt(num/pageSize)+1;   
          }else{   
              totalPage=parseInt(num/pageSize);   
          }   
       	var currentPage = this.state.project_pno;//当前页数
        var startRow = (currentPage - 1) * pageSize+1;//开始显示的行  31 
        var endRow = currentPage * pageSize;//结束显示的行   40
        endRow = (endRow > num)? num : endRow;    40
        var components =<div>
            <span>{"共"+num+"条记录 分"+totalPage+"页 当前第"+currentPage+"页"}</span>
        	<a 
				className="nyx-change-page-href"
				onClick={()=>{
					this.setState({
						project_pno:1
					})
					currentPage>1?this.goProjectPage(this.state.project_pno,"+psize+"):""
					currentPage>1?this.table_type_data_body(1,this.state.psize,this.state.search_project_message):""
				}}
				>首页
			</a>
			<a 
				className="nyx-change-page-href" onClick={()=>{
				currentPage>1?this.setState({project_pno:this.state.project_pno-1}):""
				currentPage>1?this.goProjectPage(this.state.project_pno,"+psize+"):""
				currentPage>1?this.table_type_data_body(this.state.project_pno-1,this.state.psize,this.state.search_project_message):""
			}}
			>{"<上一页"}</a>
			<a 
				className="nyx-change-page-href" 
				onClick={()=>{
				currentPage<totalPage?this.setState({project_pno:this.state.project_pno+1}):""
			{ this.goProjectPage("+(currentPage+1)+","+psize+")}
				currentPage<totalPage?this.goProjectPage(this.state.project_pno,"+psize+"):""
				currentPage<totalPage?this.table_type_data_body(this.state.project_pno+1,this.state.psize,this.state.search_project_message):""
			}}
			>{"下一页>"}</a>
			<a 
				className="nyx-change-page-href"
				onClick={()=>{
				currentPage<totalPage?this.setState({project_pno:totalPage}):""
				
				currentPage<totalPage?this.goProjectPage(this.state.project_pno,"+psize+"):""
				currentPage<totalPage?this.table_type_data_body(totalPage,this.state.psize,this.state.search_project_message):""
			} }
			>{"尾页"}</a>
			<a 
				onClick={()=>{
					// this.downloadDetailData()
					 this.project_csv(this.state.search_project_message)
				}}
				className="nyx-change-page-href" style={{marginRight:"-10em",float:"right"}}>
				{"导出"}
			</a>
			<div id='downloadDiv' style={{display:'none'}}></div>
        </div>
     return components
     }
     screening_information=(message)=>{
        // table_data_body()
		 
         //message为筛选条件
		this.setState({
			search_message:message
        })
        this.table_data_body(1,this.state.psize,message)
    }
    screening_project_information=(message)=>{
        // table_data_body()
		 
         //message为筛选条件
		this.setState({
			search_project_message:message
        })
        this.table_type_data_body(1,this.state.psize,message)
	}
	cancelCallback=()=>{
		this.setState({
			add_courses_by_type:false,
			alertAddProjectState:false,
			alertState:false
		})
	}
	// ClickArrAlert=()=>{
	// 	console.log("点击通过")
	
	// }
	sureCallback=()=>{
        var cb = (route, message, arg) => {
			if (message.error === 0) {
				this.setState({
					add_courses_by_type:false,
		
				})
                this.table_data_body(1,this.state.psize,this.state.search_message)
                this.table_type_data_body(1,this.state.psize,this.state.search_project_message)

			}else if(message.error === 2){
				console.log("未登录")
				sessionStorage.logged = false;
				sessionStorage.token="";
				if(window.location.hash.split("#")[1]!=="/"){
					window.location.href=window.location.href.split("#/")[0]
				
				  }
			}else{
				Alert.open({
				  alertTip:message.msg
				  
				});
				setTimeout(function(){
				  Alert.close();
				},3000)
			  }
        }
        // type_course_id_arr
        if(this.state.content==="add_courses_by_type"){
            var add_courses_by_type=[];
            for(var i = 0;i<this.state.type_course_id_arr.length;i++){
                add_courses_by_type.push(this.state.type_course_id_arr[i].id)
            }
            getData(getRouter("classification_manage_course"), { token:sessionStorage.token,course_object_list:add_courses_by_type,type_object_list:this.state.type_object_list}, cb, {});
        }
       //一个支出到多个项目
        if(this.state.content==="add_type_by_course"){
            var add_type_by_course=[];
            for(var j = 0;j<this.state.type_course_id_arr.length;j++){
                add_type_by_course.push(this.state.type_course_id_arr[j].id)
            }
            getData(getRouter("classification_manage_course"), { token:sessionStorage.token,course_object_list:this.state.course_object_list,type_object_list:add_type_by_course}, cb, {});
        }
	}
    alertHoldState=(newState)=>{
       
		this.setState({
			[newState.state]:true,
			alertTitle:newState.alertTitle,
		})
	}
    alertAddState=(newState)=>{
      
        var paymentCheck=document.getElementsByName("paymentCheck");
        var projectCheck=document.getElementsByName("projectCheck");
        var payment_message=[];
        var project_message=[];
            for(var i = 0;i<paymentCheck.length;i++){
                if(paymentCheck[i].checked){
                    payment_message.push({id:paymentCheck[i].value,title:paymentCheck[i].parentNode.children[1].innerHTML}); 
                }
            }
            
            for(var j = 0;j<projectCheck.length;j++){
                if(projectCheck[j].checked){
                    project_message.push({id:projectCheck[j].value,title:projectCheck[j].parentNode.children[1].innerHTML}); 
                }
            }
            if(newState.content==="add_courses_by_type"){
                this.setState({
                    [newState.state]:true,
                    content:newState.content,
                    alertTitle:"关联多个分类到一个课程",
                    type_course_title:"关联多个支出 到"+project_message[0].name,
                    type_course_id_arr:payment_message,
                })
            }
           
            if(newState.content==="add_type_by_course"){
                this.setState({
                    [newState.state]:true,
                    content:newState.content,
                    alertTitle:"关联一个课程到多个分类",
                    type_course_title:"关联"+payment_message[0].name,
                    type_course_id_arr:project_message,
                    // course_object_list:newState.dataId,
                    // financial_number:newState.financialNumber?newState.financialNumber:""
                })
            }
    }

	render(){
		var sumLength=0;
        if(this.state.table_data_head){
            for(var i = 0;i<this.state.table_data_head.length;i++){
                sumLength=sumLength+parseFloat(this.state.table_data_head[i].size);
            }
        }
		return (
            <div>
                <div style={{width:"100%",float:"left",height:"2em"}}>
                    <PaymentManageBtn
                        isClick={this.state.course_object_list.length===1?false:true}
                        onHoldClick={this.alertAddState}
                         classNames="btn_list"
                        defineValue="关联一个课程到多个分类"
                        content={"add_type_by_course"}
                        state="add_courses_by_type"
						// linkpage="payment_state_recall"	
							// dataId={table_data_body.id}
					/>
                    <PaymentManageBtn
                        isClick={this.state.type_object_list.length===1?false:true}
						onHoldClick={this.alertAddState}
						defineValue="关联多个分类到一个课程"
						classNames="btn_list"
                        state="add_courses_by_type"
                        content={"add_courses_by_type"}
						// linkpage="payment_state_recall"	
							// dataId={table_data_body.id}
					/>    
                </div>
                <div className="loan_part_left" style={{width:"50%",float:"left",position:"relative",height:"93vh"}}>
                    <DataSearchMessage 
                       index={0}
					   message={this.state.table_data_bodys}
					   keywordSearch={["name"]}
					   keywordTitle={[
                        "课程名称",
                        // "项目类型",
						// "领款人",
						// "时间",
						// "状态"
					]}
					//    selectListMessage={["project_type_list"]}
					// 	selectNameMessage={["project_project_template_name"]}
					   selectListMessage={[]}
                       selectNameMessage={[]}
                       selectListCheckMessage={["staff_manage_list"]}
                       selectNameCheckMessage={["payee_name"]}
					   sectionTimeMessage={["submit_time"]}
					   langPackMessage={["state"]}
					   langPackTitle={["-1,1,2"]}
					   screeningMessage={this.screening_information}
					/>
                    <div  className="statistical_div">
                        <table style={{width:sumLength+2+"em"}} className="statistical_table">
                            <thead>
                                <tr>
								{/* <th><div className="statistical_table_box">序号</div></th> */}
                                    <th>
                                        <div style={{"width":"2em"}}></div>
                                    </th>
                                    {this.state.table_data_head?this.state.table_data_head.map((table_data_head,index)=>{
                                        return(
                                            <th key={index}>
                                                <div  style={{width:table_data_head.size+"em"}} className="statistical_table_box">
                                                    {table_data_head.value}
                                                </div>
                                            </th>
                                        )
                                    }):<th> <div className="statistical_table_box"></div></th>}
                                </tr>
                            </thead>
                            <tbody>
                                {this.goPage(this.state.pno,this.state.psize)}
                            </tbody>
                        </table>
                       
                    </div>
                    <div className="statistical_change_page">
                            {this.change_page(1,this.state.psize)}
                        </div>
                </div>
                <div className="loan_part_right" style={{width:"50%",float:"left",position:"relative",height:"93vh"}}>
                    <DataSearchMessage 
                       index={1}
					   message={this.state.table_data_bodys}
					   keywordSearch={["unicode","project_name"]}
					   keywordTitle={[
                        "项目编号",
                        "项目名称",
						// "领款人",
						// "时间",
                        // "状态"
                    ]}
					//    selectListMessage={["project_type_list"]}
					// 	selectNameMessage={["project_project_template_name"]}
					   selectListMessage={[]}
                       selectNameMessage={[]}
                       selectListCheckMessage={[]}
                       selectNameCheckMessage={[]}
					   sectionTimeMessage={[]}
					   langPackMessage={[]}
					   langPackTitle={[]}
                    //    selectListCheckMessage={["staff_manage_list"]}
                    //    selectNameCheckMessage={["payee_name"]}
					//    sectionTimeMessage={["submit_time"]}
					//    langPackMessage={["state"]}
					//    langPackTitle={["-1,1,2"]}
					   screeningMessage={this.screening_project_information}
					/>
                    <div  className="statistical_div">
                        <table style={{width:sumLength+2+"em"}} className="statistical_table">
                            <thead>
                                <tr>
								{/* <th><div className="statistical_table_box">序号</div></th> */}
								    <th>
									    <div style={{"width":"2em"}}></div>
								    </th>
                                    {this.state.table_type_data_head?this.state.table_type_data_head.map((table_type_data_head,index)=>{
                                        return(
                                            <th key={index}>
                                                <div  style={{width:table_type_data_head.size+"em"}} className="statistical_table_box">
                                                    {table_type_data_head.value}
                                                </div>
                                            </th>
                                        )
                                    }):<th> <div className="statistical_table_box"></div></th>}
                                    
                                </tr>
                            </thead>
                            <tbody>
                                {this.goProjectPage(this.state.project_pno,this.state.project_psize)}
                            </tbody>
                        </table>
                      
                    </div>
                    <div className="statistical_change_page">
                            {this.project_change_page(1,this.state.psize)}
                        </div>
                    <Popup 
                        content={
                            <div>
                                <h2>{this.state.alertTitle}</h2>
                                <div className="popup_content">
                               
                                    {/* <ViewTextField 
                                        onChange={(e)=>{
                                            this.setState({
                                                type_object_list:e.target.value
                                                })
                                            }}
                                            // view={true}
                                        value={this.state.type_object_list} 
                                        labelValue={"项目id"} 
                                    /> */}
                                </div>
                            </div>
                            }	 
                        sureCallback = {this.sureCallback.bind(this)} 
                        cancelCallback = { this.cancelCallback.bind(this) } 
                        alertState={this.state.add_courses_by_type}
                    />
			        <Alerts alertTitle={this.state.alertTitle} alertMsg = {this.state.alertMsg} sureCallback = {this.sureCallback.bind(this)} cancelCallback = { this.cancelCallback.bind(this) } alertState={this.state.alertState}/>
                </div>
            </div>
		)
	}
}

export default TechnologyClassificationManagement;
