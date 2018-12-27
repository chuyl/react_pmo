import React, { Component } from 'react';
import { getData, getRouter,getList } from '../../utils/helpers'
class BudgetExaminationAndApproval extends Component {
	state={
		pno:1,
		psize:10,
		table_data_body:[]
	}
	componentWillMount(){
		this.table_data_body()
	}
	table_data_body = () => {
        
        var cb = (route, message, arg) => {
            if (message.error === 0) {
               this.setState({
                table_data_body:message.data.data_body,
                table_data_head:message.data.data_head,
			   })
            }
           
        }
        getData(getRouter("examine_record_list"), { session: sessionStorage.session}, cb, {});

    }
	goPage= (pno,psize) =>{
        // {this.historyFileDialog()}
        var components = [];
        var num = this.state.table_data_body.length;//表格所有行数(所有记录数)
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
        this.state.table_data_body.map((table_data_body)=>{
            components.push (
                <tr
                    //   style={{maxHeight:"25px",display:this.state.table_data_body.indexOf(table_data_body)+1>=startRow &&this.state.table_data_body.indexOf(table_data_body)+1<=endRow?"":"none"}}
                    key = {table_data_body.id}> 
                    <td>
                        {this.state.table_data_body.indexOf(table_data_body)+1}
                    </td>
                    
                    <td title={table_data_body.unicode}>
                        {table_data_body.unicode}
                    </td>
                  {/* <td title={this.timestamp2Time(table_data_body.time+"000", "-")} width={100} style={{textAlign:"center"}}>{this.timestamp2Time(table_data_body.time+"000", "-")}</td> */}
                    <td title={table_data_body.project_name}>
                        {table_data_body.project_name}
                    </td>
                    <td title={table_data_body.project_customer_name}>
                        {table_data_body.project_customer_name}
                    </td>
                    
                    <td title={table_data_body.project_project_template_name}>
                        {table_data_body.project_project_template_name}
                    </td>
                    <td title={table_data_body.project_gather_name}>
                        {table_data_body.project_gather_name}
                    </td>
                    <td title={table_data_body.project_start_date}>
                        {table_data_body.project_start_date}
                    </td>
                    <td title={table_data_body.project_end_date}>
                        {table_data_body.project_end_date}
                    </td>
                    <td title={table_data_body.project_person_in_charge_name}>
                        {table_data_body.project_person_in_charge_name}
                    </td>
                    <td title={table_data_body.project_leader_name}>
                        {table_data_body.project_leader_name}
                    </td>
                    <td title={table_data_body.project_training_ares_name}>
                        {table_data_body.project_training_ares_name}
                    </td>
                    <td title={table_data_body.project_income}>
                        {table_data_body.project_income}
                    </td>
                    <td title={table_data_body.costing}>
                        {table_data_body.costing}
                    </td>
                    <td title={table_data_body.project_profit}>
                        {table_data_body.project_profit}
                    </td>
                    
                </tr>
       
        )});
         return components
        
	 }
	 change_page = (pno,psize)=>{
        var num = this.state.table_data_body.length;//表格所有行数(所有记录数)
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
         }}
         >首页</a>
        <a 
            className="nyx-change-page-href" onClick={()=>{
            currentPage>1?this.setState({pno:this.state.pno-1}):""
            currentPage>1?this.goPage(this.state.pno,"+psize+"):""
        }}
         >{"<上一页"}</a>
        <a 
            className="nyx-change-page-href" 
            onClick={()=>{
            currentPage<totalPage?this.setState({pno:this.state.pno+1}):""
           { this.goPage("+(currentPage+1)+","+psize+")}
            currentPage<totalPage?this.goPage(this.state.pno,"+psize+"):""
        }}
         >{"下一页>"}</a>
        <a 
             className="nyx-change-page-href"
             onClick={()=>{
             currentPage<totalPage?this.setState({pno:totalPage}):""
            currentPage<totalPage?this.goPage(this.state.pno,"+psize+"):""} }
        >{"尾页"}</a>
        </div>

     return components
     }
	render(){
		return (
            <div className="statistical_div">
                    <table className="statistical_table">
                        <thead>
                            <tr>
                                <th>序号</th>
                                <th>项目编号</th>
                                <th>项目名称</th>
                                <th>课程名称</th>
                                <th>项目模板</th>
                                <th>所属项目集</th>
                                <th>开始时间</th>
                                <th>结束时间</th>
                                <th>实施负责人</th>
                                <th>项目负责人</th>
                                <th>培训地点</th>
                                <th>项目应收款</th>
                                <th>项目总成本</th>
                                <th>培训利润</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.goPage(this.state.pno,this.state.psize)}
                        </tbody>
                    </table>
                <div className="statistical_change_page">
                    {this.change_page(1,10)}
                </div>
        </div>
		)
	}
}

export default BudgetExaminationAndApproval;
