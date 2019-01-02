import React, { Component } from 'react';
import { getData, getRouter,getList } from '../../utils/helpers'
import DataSearchMessage from '../components/search/DataSearchMessage'
class BudgetExaminationAndApproval extends Component {
	state={
		pno:1,
        psize:5,
        count:0,
        table_data_body:[],
        table_data_bodys:[],
         query_condition:{}
        
	}
	componentWillMount(){
		this.table_data_body(1,5)
	}
	table_data_body = (page_num,page_size) => {
        
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
        var obj ={page_num:page_num,page_size:page_size}
        this.setState({
            query_condition:obj
        })
        getData(getRouter("examine_record_list"), { token: sessionStorage.token,query_condition:obj }, cb, {});
        // getData(getRouter("examine_record_list"),{ session: sessionStorage.session}, cb, {});

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
                    //   style={{maxHeight:"25px",display:this.state.table_data_body.indexOf(table_data_body)+1>=startRow &&this.state.table_data_body.indexOf(table_data_body)+1<=endRow?"":"none"}}
                    key = {index}> 
                    <td>
                       <div className="statistical_table_box">
                       {this.state.table_data_body.indexOf(table_data_body)+1}
                       </div>
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
         >首页</a>
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
        </div>

     return components
     }
     screening_information=(message)=>{
		this.setState({
			table_data_body:message
		})
	}
	render(){
		return (
            <div>
                {/* <DataSearchMessage 
					   message={this.state.table_data_bodys}
					   keywordSearch={["project_name","unicode"]}
					   keywordTitle={[
						"课程名称+项目编号",
                        "项目负责人",
                        "实施负责人"]}
					//    selectListMessage={["project_type_list"]}
                    //    selectNameMessage={["project_project_template_name"]}
                       selectListCheckMessage={["staff_manage_list","project_type_list"]}
                       selectNameCheckMessage={["project_leader_name","project_person_in_charge_name"]}
					   screeningMessage={this.screening_information}
					/> */}
                <div className="statistical_div">
                
                    <table className="statistical_table">
                        <thead>
                            <tr>
                                <th><div className="statistical_table_box">序号</div></th>
                                    {this.state.table_data_head?this.state.table_data_head.map((table_data_head,index)=>{
                                    return(
                                        <th key={index}>
                                            <div className="statistical_table_box">
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
        </div>
		)
	}
}

export default BudgetExaminationAndApproval;
