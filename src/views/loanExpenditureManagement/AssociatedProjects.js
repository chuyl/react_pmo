import React, { Component } from 'react';
import { getData, getRouter,getList,PostCsvData } from '../../utils/helpers'
import DataSearchMessage from '../components/search/DataSearchMessage'
import Popup from '../components/modal/Popup'
import ViewTextField from '../components/input/ViewTextField'
import Alert from '../components/modal/Remind'
import Alerts from '../components/modal/Alert'
import ClickArrAlert from '../components/button/ClickArrAlert';
import PaymentManageBtn from '../components/button/PaymentManageBtn'
class AssociatedProjects extends Component {
	state={
		pno:1,
        psize:5,
        count:0,
        project_pno:1,
        project_psize:5,
        project_count:0,
        table_data_body:[],
        table_data_bodys:[],
        table_project_data_body:[],
        table_project_data_bodys:[],
         query_condition:{},
		 search_message:"",
		 financial_number:"",
		 alertAddFinancialState:false,//财务编号
		 alertAddProjectState:false,//相关内容
		 alertState:false,
		 payment_id:[],//支出id
		 project_id:[],//项目id
		 alertTitle:"",
		 linkpage:""
        
	}
	componentWillMount(){
        this.table_data_body(1,5)
        this.table_project_data_body(1,5)
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
        // console.log(obj)
        var objs = search_obj?Object.assign(obj, search_obj):obj
        // console.log(objs)
        // var places = JSON.parse((JSON.stringify(obj)+JSON.stringify(this.state.search_message)).replace(/}{/,','));
        // console.log(places)
        this.setState({
            query_condition:obj
		})
		// console.log(objs)
        getData(getRouter("payment_project_list"), { token: sessionStorage.token,query_condition:objs,data_type:"page_json" }, cb, {});
        // getData(getRouter("examine_record_list"),{ session: sessionStorage.session}, cb, {});

    }
    table_project_data_body = (page_num,page_size,search_obj) => {
        
        var cb = (route, message, arg) => {
            if (message.error === 0) {
               this.setState({
                table_project_data_body:message.data.data_body,
                table_project_data_bodys:message.data.data_body,
                table_project_data_head:message.data.data_head,
                project_count:message.data.count
			   })
            }
           
        }
        var obj ={page_num:{"condition":"equal","query_data":page_num},page_size:{"condition":"equal","query_data":page_size}};
        // console.log(obj)
        var objs = search_obj?Object.assign(obj, search_obj):obj
        // console.log(objs)
        // var places = JSON.parse((JSON.stringify(obj)+JSON.stringify(this.state.search_message)).replace(/}{/,','));
        // console.log(places)
        this.setState({
            query_condition:obj
		})
		// console.log(objs)
        getData(getRouter("payment_project_list"), { token: sessionStorage.token,query_condition:objs,data_type:"page_json" }, cb, {});
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
		PostCsvData(getRouter("payment_project_list"), search_obj===""?{token: sessionStorage.token,data_type:"page_csv"}:{token: sessionStorage.token,query_condition:search_obj,data_type:"page_csv"}
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
        var pageSize = psize;//每页显示行数
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
            components.push (
                <tr
                    key = {index}> 
					<td  style={{"width":"2em"}}>
                        <input 
                            onClick={()=>{
                               this.checked_arr("paymentCheck","payment_id","projectCheck")
                            }}
                            value={table_data_body.id}
                            name="paymentCheck" type="checkbox"/>
					</td>
					{/* <td>
						<input value={table_data_body.id} type="checkbox" name="payment"/>
					</td> */}
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
        // this.table_project_data_body()
        // {this.historyFileDialog()}
        var components = [];
        var num = this.state.count;//表格所有行数(所有记录数)
        var totalPage = 0;//总页数
        var pageSize = psize;//每页显示行数
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
        this.state.table_project_data_body.map((table_project_data_body,index)=>{
            components.push (
                <tr
                    key = {index}> 
					<td  style={{"width":"2em"}}>
						<input onClick={()=>{
                                this.checked_arr("projectCheck","project_id","paymentCheck")
                        //     var project_name=document.getElementsByName("projectCheck");
                        //    var project_check_arr=[];
                        //    for(var i = 0;i<project_name.length;i++ ){
                        //        if(project_name[i].checked){
                        //         project_check_arr.push(project_name[i].value)
                        //        }
                        //    }
                        //    this.setState({
                        //     project_id:project_check_arr
                        //    })
                        //     if(this.state.payment_id.length>1){
                        //         if(project_check_arr.length==1){

                        //             console.log("hhha")
                        //             return false;
                        //         }
                               
                        //         // 
                        //     }
                        //    var project_name=document.getElementsByName("projectCheck");
                        //    var project_check_arr=[];
                        //    var payment_name=document.getElementsByName("paymentCheck");
                        //    var payment_check_arr=[];
                        //    var project_check_length=0;
                        //    var payment_check_length=0;
                        //    for(var i = 0;i<project_name.length;i++ ){
                        //        if(project_name[i].checked){
                        //         project_check_length++;
                        //         project_check_arr.push(project_name[i].value)
                        //        }
                        //    }
                        //    this.setState({
                        //     project_id:project_check_arr
                        //    })
                          
                        }} name="projectCheck" type="checkbox"/>
					</td>
					{/* <td>
						<input value={table_project_data_body.id} type="checkbox" name="payment"/>
					</td> */}
                    {this.state.table_project_data_head?this.state.table_project_data_head.map((table_project_data_head,index)=>{
						return(
						<td key={index} title={table_project_data_body[table_project_data_head.key]}>
							<div className="statistical_table_box">
								{table_project_data_body[table_project_data_head.key]}
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
        var pageSize = psize;//每页显示行数
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
					currentPage>1?this.table_data_body(1,5):""
				}}
				>首页
			</a>
			<a 
				className="nyx-change-page-href" onClick={()=>{
				currentPage>1?this.setState({pno:this.state.pno-1}):""
				currentPage>1?this.goPage(this.state.pno,"+psize+"):""
				currentPage>1?this.table_data_body(this.state.pno-1,5):""
			}}
			>{"<上一页"}</a>
			<a 
				className="nyx-change-page-href" 
				onClick={()=>{
				currentPage<totalPage?this.setState({pno:this.state.pno+1}):""
			{ this.goPage("+(currentPage+1)+","+psize+")}
				currentPage<totalPage?this.goPage(this.state.pno,"+psize+"):""
				currentPage<totalPage?this.table_data_body(this.state.pno+1,5):""
			}}
			>{"下一页>"}</a>
			<a 
				className="nyx-change-page-href"
				onClick={()=>{
				currentPage<totalPage?this.setState({pno:totalPage}):""
				
				currentPage<totalPage?this.goPage(this.state.pno,"+psize+"):""
				currentPage<totalPage?this.table_data_body(totalPage,5):""
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
        var pageSize = psize;//每页显示行数
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
					currentPage>1?this.table_project_data_body(1,5):""
				}}
				>首页
			</a>
			<a 
				className="nyx-change-page-href" onClick={()=>{
				currentPage>1?this.setState({project_pno:this.state.project_pno-1}):""
				currentPage>1?this.goProjectPage(this.state.project_pno,"+psize+"):""
				currentPage>1?this.table_project_data_body(this.state.project_pno-1,5):""
			}}
			>{"<上一页"}</a>
			<a 
				className="nyx-change-page-href" 
				onClick={()=>{
				currentPage<totalPage?this.setState({project_pno:this.state.project_pno+1}):""
			{ this.goProjectPage("+(currentPage+1)+","+psize+")}
				currentPage<totalPage?this.goProjectPage(this.state.project_pno,"+psize+"):""
				currentPage<totalPage?this.table_project_data_body(this.state.project_pno+1,5):""
			}}
			>{"下一页>"}</a>
			<a 
				className="nyx-change-page-href"
				onClick={()=>{
				currentPage<totalPage?this.setState({project_pno:totalPage}):""
				
				currentPage<totalPage?this.goProjectPage(this.state.project_pno,"+psize+"):""
				currentPage<totalPage?this.table_project_data_body(totalPage,5):""
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
     screening_information=(message)=>{
        // table_data_body()
		 console.log(message)
		 
         //message为筛选条件
		this.setState({
			search_message:message
        })
        this.table_data_body(1,5,message)
	}
	cancelCallback=()=>{
		this.setState({
			alertAddFinancialState:false,
			alertAddProjectState:false,
			alertState:false
		})
	}
	// ClickArrAlert=()=>{
	// 	console.log("点击通过")
	
	// }
	sureCallback=()=>{
	
    //}
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
                <div>
                    
                </div>
                <div style={{width:"50%",float:"left"}}>
                    <DataSearchMessage 
					   message={this.state.table_data_bodys}
					   keywordSearch={["financial_number"]}
					   keywordTitle={[
                        "财务编号",
                        // "项目类型",
						"领款人",
						"时间",
						"状态"]}
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
                        <div className="statistical_change_page">
                            {this.change_page(1,5)}
                        </div>
                    </div>
			
			        <Alerts alertTitle={this.state.alertTitle} alertMsg = {this.state.alertMsg} sureCallback = {this.sureCallback.bind(this)} cancelCallback = { this.cancelCallback.bind(this) } alertState={this.state.alertState}/>
                </div>
                <div style={{width:"50%",float:"left"}}>
                    <DataSearchMessage 
					   message={this.state.table_data_bodys}
					   keywordSearch={["financial_number"]}
					   keywordTitle={[
                        "财务编号",
                        // "项目类型",
						"领款人",
						"时间",
						"状态"]}
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
                                {this.goProjectPage(this.state.project_pno,this.state.project_psize)}
                            </tbody>
                        </table>
                        <div className="statistical_change_page">
                            {this.project_change_page(1,5)}
                        </div>
                    </div>
			        <Alerts alertTitle={this.state.alertTitle} alertMsg = {this.state.alertMsg} sureCallback = {this.sureCallback.bind(this)} cancelCallback = { this.cancelCallback.bind(this) } alertState={this.state.alertState}/>
                </div>
            </div>
		)
	}
}

export default AssociatedProjects;
