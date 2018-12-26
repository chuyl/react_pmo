import React, { Component } from 'react';
import { getData, getRouter,getList } from '../../utils/helpers'
class BudgetExaminationAndApproval extends Component {
	state={
		pno:1,
		psize:10,
		note_list:[]
	}
	componentWillMount(){
		this.note_list()
	}
	note_list = () => {
        
        var cb = (route, message, arg) => {
            if (message.error === 0) {
               this.setState({
				note_list:message.data
			   })
            }
           
        }
        getData(getRouter("project_manage_list"), { session: sessionStorage.session}, cb, {});

    }
	goPage= (pno,psize) =>{
        // {this.historyFileDialog()}
        var components = [];
        var num = this.state.note_list.length;//表格所有行数(所有记录数)
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
        this.state.note_list.map((note_list)=>{
            components.push (
                <tr
                    //   style={{maxHeight:"25px",display:this.state.note_list.indexOf(note_list)+1>=startRow &&this.state.note_list.indexOf(note_list)+1<=endRow?"":"none"}}
                    key = {note_list.id}> 
                    <td 
                        width={60}
                        style={{textAlign:"center"}}>
                        {this.state.note_list.indexOf(note_list)+1}
                    </td>
                  {/* <td title={this.timestamp2Time(note_list.time+"000", "-")} width={100} style={{textAlign:"center"}}>{this.timestamp2Time(note_list.time+"000", "-")}</td> */}
                    <td 
                        title={note_list.project_name} 
                        width={100}  
                        style={{textAlign:"center"}}>
                        {note_list.project_name}
                    </td>
                    <td 
                        title={note_list.project_project_template_name} 
                        style={{textAlign:"center"}} 
                        width={120}>
                        {note_list.project_project_template_name}
                    </td>
                </tr>
       
        )});
         return components
        
	 }
	 change_page = (pno,psize)=>{
        var num = this.state.note_list.length;//表格所有行数(所有记录数)
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
            <div>
                <div>
                    <table className="statistical_table">
                        <thead>
                            <tr style={{textAlign:"center",maxHeight:"25px"}}>
                                <th  height={25} width={60}>序号</th>
                                <th width={100}>项目名称</th>
                                <th width={120}>项目模板</th>
                                <th width={180}>操作信息</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.goPage(this.state.pno,this.state.psize)}
                        </tbody>
                    </table>
                </div>
                <div className="nyx-change-page">
                    {this.change_page(1,10)}
                </div>
        </div>
		)
	}
}

export default BudgetExaminationAndApproval;
