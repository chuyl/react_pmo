import React, { Component } from 'react';
import { getData, getRouter,getList,PostCsvData } from '../../utils/helpers'
import DataSearchMessage from '../components/search/DataSearchMessage'
import Popup from '../components/modal/Popup'
import ViewTextField from '../components/input/ViewTextField'
import Alert from '../components/modal/Remind'
import Alerts from '../components/modal/Alert'
import PaymentManageBtn from '../components/button/PaymentManageBtn'
class LoanManage extends Component {
	state={
		pno:1,
        psize:Math.floor((document.body.clientHeight*0.6-40)/28),
        count:0,
        table_data_body:[],
        table_data_bodys:[],
         query_condition:{},
		 search_message:"",
		 financial_number:"",
		 describe:"",
		 alertAddFinancialState:false,//财务编号
		 alertAddProjectState:false,//相关内容
		 alertChangeAmountState:false,//修改金额
		 alertState:false,
		 loan_id:"",//支出id
		 project_id:"",//项目id
		 relation_id:"",//关联id
		 price:"",
		 loan_id_arr:[],
		 alertTitle:"",
		 linkpage:""
        
	}
	componentWillMount(){
		 console.log(Math.floor((document.body.clientHeight*0.7-40)/32))
		 console.log(document.body.clientHeight*0.7)
		this.table_data_body(1,this.state.psize,this.state.search_message)
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
        getData(getRouter("loan_project_list"), { token: sessionStorage.token,query_condition:objs,data_type:"page_json" }, cb, {});
        // getData(getRouter("examine_record_list"),{ session: sessionStorage.session}, cb, {});

	}
	loan_csv=(search_obj)=>{
		var cb = (route, message, arg) => {
			console.log(message)
            if (message.error === 0) {
           
            }
           
        }
        var obj ={};
     
        this.setState({
            query_condition:obj
		})
		console.log(search_obj)
		PostCsvData(getRouter("loan_project_list"), search_obj===""?{token: sessionStorage.token,data_type:"page_csv"}:{token: sessionStorage.token,query_condition:search_obj,data_type:"page_csv"}
		 , cb, {});
	}
	alertAddState=(newState)=>{
		 console.log(newState)
		this.setState({
			[newState.state]:true,
			loan_id:newState.dataId,
			financial_number:newState.financialNumber?newState.financialNumber:"",
			describe:newState.describe?newState.describe:"",
			relation_id:newState.relationId
		})
	}
	alertHoldState=(newState)=>{
		 console.log(newState)
		this.setState({
			[newState.state]:true,
			loan_id:newState.dataId,
			alertTitle:newState.alertTitle,
			linkpage:newState.linkpage,
			project_id:newState.projectId,
			relation_id:newState.relationId
		})
	}

	goPage= (pno) =>{
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
            
            components.push (
                <tr
                    key = {index}> 
                    {/* <td>
                       <div className="statistical_table_box">
                       {this.state.table_data_body.indexOf(table_data_body)+1}
                       </div>
					</td> */}
					<td  style={{"width":"29em"}}>
						<PaymentManageBtn
							onHoldClick={this.alertAddState}
							defineValue="财务编号"
							classNames="financialBtn"
							state="alertAddFinancialState"	
							dataId={table_data_body.id}
							financialNumber={table_data_body.loan_number}
							describe={table_data_body.loan_describe}
						/>
						{/* <PaymentManageBtn
							onHoldClick={this.alertAddState}
							defineValue="关联项目"
							state="alertAddProjectState"	
							dataId={table_data_body.id}
						/> */}
						<PaymentManageBtn
							onHoldClick={this.alertHoldState}
							defineValue="通过"
							state="alertState"
							classNames="passBtn"
							linkpage="loan_state_pass"	
							dataId={table_data_body.id}
						/>
						<PaymentManageBtn
							onHoldClick={this.alertHoldState}
							defineValue="撤回"
							state="alertState"
							classNames="recallBtn"
							linkpage="loan_state_recall"	
							dataId={table_data_body.id}
						/>
						<PaymentManageBtn
							onHoldClick={this.alertHoldState}
							defineValue="作废"
							state="alertState"
							classNames="cancelBtn"
							linkpage="loan_state_cancel"	
							dataId={table_data_body.id}
						/>
						<PaymentManageBtn
							onHoldClick={this.alertAddState}
							defineValue="修改金额"
							state="alertChangeAmountState"	
							dataId={table_data_body.id}
							classNames="changePriceBtn"
							relationId={table_data_body.relation_id}
						/>
						<PaymentManageBtn
							onHoldClick={this.alertHoldState}
							defineValue="取消关联"
							state="alertState"
							linkpage="loan_project_cancel"	
							dataId={table_data_body.id}
							classNames="cancalRelationBtn"
							projectId={table_data_body.project_id}
							relationId={table_data_body.relation_id}
						/>
					</td>
					{/* <td>
						<input value={table_data_body.id} type="checkbox" name="loan"/>
					</td> */}
                    {this.state.table_data_head?this.state.table_data_head.map((table_data_head,index)=>{
						return(
						<td key={index} title={table_data_body[table_data_head.key]}>
							<div style={{width:table_data_head.size+"em"}} className="statistical_table_box">
								{table_data_body[table_data_head.key]}
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
					 this.loan_csv(this.state.search_message)
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
        this.table_data_body(1,this.state.psize,message)
	}
	// 添加财务编号
	sureAddFinancialCallback=()=>{
		console.log(this.state.loan_id)
		var cb = (route, message, arg) => {
			if (message.error === 0) {
				this.setState({
					alertAddFinancialState:false,
		
				})
				this.table_data_body(1,this.state.psize,this.state.search_message)

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
		getData(getRouter("loan_manage_edit_financial_number"), { token:sessionStorage.token,id:this.state.loan_id,loan_number:this.state.financial_number,loan_describe:this.state.describe }, cb, {});
	}
	sureAddProjectCallback=()=>{
		var cb = (route, message, arg) => {
			if (message.error === 0) {
				this.setState({
					alertAddProjectState:false,
		
				})
				this.table_data_body(1,this.state.psize,this.state.search_message)

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
		getData(getRouter("loan_project_add"), { token:sessionStorage.token,id:this.state.loan_id,project_id:this.state.project_id }, cb, {});
	}
	sureChangeAmountCallback=()=>{
		var cb = (route, message, arg) => {
			if (message.error === 0) {
				this.setState({
					alertChangeAmountState:false,
		
				})
				this.table_data_body(1,this.state.psize,this.state.search_message)

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
		getData(getRouter("loan_project_edit"), { token:sessionStorage.token,relation_id:this.state.relation_id,price:this.state.price }, cb, {});
	}
	cancelCallback=()=>{
		this.setState({
			alertAddFinancialState:false,
			alertAddProjectState:false,
			alertChangeAmountState:false,
			alertState:false
		})
	}
	sureCallback=()=>{
		// this.copyViewMessage(this.state.copy_message)
        var cb = (route, message, arg) =>  {
            if (message.error === 0) {
                this.setState({
                    alertState:false
				})
				this.table_data_body(1,this.state.psize,this.state.search_message)
            }else if(message.error === 2){
                console.log("未登录")
                sessionStorage.logged = false;
                sessionStorage.token="";
                if(window.location.hash.split("#")[1]!=="/"){
                    window.location.href=window.location.href.split("#/")[0]
                
                  }
            }else{
                this.setState({
                    remind_state:true
                })
                Alert.open({
                    alertTip:message.msg
                    
                });
                setTimeout(function(){
                    Alert.close();
                 },3000)
            }
            //  this.props.oneChange(newState);
        }
        //获取数据接口
		if(this.state.linkpage=="loan_project_cancel"){
			getData(getRouter(this.state.linkpage),  {token:sessionStorage.token, relation_id:this.state.relation_id,project_id:this.state.project_id }, cb,  {}); 
			//}
		}else{
			getData(getRouter(this.state.linkpage),  {token:sessionStorage.token, id:this.state.loan_id }, cb,  {}); 

		}
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
				<DataSearchMessage 
				index={0}
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
                <div className="statistical_div">
                
                    <table style={{width:sumLength+29+"em"}} className="statistical_table">
                        <thead>
                            <tr>
								{/* <th><div className="statistical_table_box">序号</div></th> */}
								<th>
									<div style={{"width":"29em"}}></div>
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
			<Popup 
				content={
					<div>
						<h2>财务编号</h2>
						<div className="popup_content">
							<ViewTextField 
								onChange={(e)=>{
									this.setState({
										financial_number:e.target.value
									})
								}}
									// view={true}
								value={this.state.financial_number} 
								labelValue={"财务编号"} 
							/>
							<ViewTextField 
								onChange={(e)=>{
									this.setState({
										describe:e.target.value
									})
								}}
									// view={true}
								value={this.state.describe} 
								labelValue={"备注"} 
							/>
						</div>
					</div>
					}	 
				sureCallback = {this.sureAddFinancialCallback.bind(this)} 
				cancelCallback = { this.cancelCallback.bind(this) } 
				alertState={this.state.alertAddFinancialState}
			/>
			<Popup 
				content={
					<div>
						<h2>关联项目</h2>
						<div className="popup_content">
							<ViewTextField 
								onChange={(e)=>{
									this.setState({
										project_id:e.target.value
										})
									}}
									// view={true}
								value={this.state.project_id} 
								labelValue={"项目id"} 
							/>
						</div>
					</div>
					}	 
				sureCallback = {this.sureAddProjectCallback.bind(this)} 
				cancelCallback = { this.cancelCallback.bind(this) } 
				alertState={this.state.alertAddProjectState}
			/>
			<Popup 
				content={
					<div>
						<h2>修改指定支出到项目的金额</h2>
						<div className="popup_content">
							<ViewTextField 
								onChange={(e)=>{
									this.setState({
										price:e.target.value
										})
									}}
									 defineValue={""}
								// value={this.state.project_id} 
								labelValue={"项目金额"} 
							/>
						</div>
					</div>
					}	 
				sureCallback = {this.sureChangeAmountCallback.bind(this)} 
				cancelCallback = { this.cancelCallback.bind(this) } 
				alertState={this.state.alertChangeAmountState}
			/>
			 <Alerts alertTitle={this.state.alertTitle} alertMsg = {this.state.alertMsg} sureCallback = {this.sureCallback.bind(this)} cancelCallback = { this.cancelCallback.bind(this) } alertState={this.state.alertState}/>
        </div>
		)
	}
}

export default LoanManage;
