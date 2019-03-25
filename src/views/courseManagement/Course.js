import React, { Component } from 'react';
import { getData, getRouter,getList,PostCsvData } from '../../utils/helpers'
import DataSearchMessage from '../components/search/DataSearchMessage'
import Popup from '../components/modal/Popup'
import ViewTextField from '../components/input/ViewTextField'
import Alert from '../components/modal/Remind'
import Alerts from '../components/modal/Alert'
import ClickArrAlert from '../components/button/ClickArrAlert';
import PaymentManageBtn from '../components/button/PaymentManageBtn'
import ComponentsList from '../components/composite/ComponentsList'
import Drawer from '../components/modal/Drawer';
import CardGroup from '../components/logic/CardGroup'
import Link from '../components/button/Link'
// import Editor from '../components/watch/Editor'
class Course extends Component {
	state={
		pno:1,
        psize:Math.floor((document.body.clientHeight*0.6-40)/28),
        count:0,
        table_data_body:[],
        table_data_bodys:[],
         query_condition:{},
		 search_message:"",
		 financial_number:"",
		 alertAddCourseState:false,
		 alertState:false,
		 course_id:"",//支出id
		 project_id:"",//项目id
		 relation_id:"",//关联id
		 price:"",
		 course_id_arr:[],
		 alertTitle:"",
		 linkpage:"",
		 edit_project_data: [],
		 dataId: "",
		 form_temp_name: "",
		 alertRelationState:false,
		 alertRelationTypeState:false,
		 alertCoursePlanState:false,
		 add_drawer_button:{},
		 drawer_index:-1,
		 message_list:[],
		 change_message_type:"",//判断改变的是所属分类还是授课讲师
		 course_plan_list:[],    
		 fileContentArr:"",

	}
	componentWillMount(){
		this.table_data_body(1,this.state.psize,this.state.search_message)
	}

	/** 
	* @author xuesong
	* @param fetchProjectData 函数 获取视图函数
	*/
	fetchProjectData(url) {
		var json_view = JSON.parse(sessionStorage.view)
		for (var i = 0; i < json_view.length; i++) {
			if (json_view[i].name === url) {

				var json_message = json_view[i].data;
				this.setState({
					add_button: json_message["form-list"],
					form_temp_name: json_message["form-temp-name"],
				})

			}
		}
	}
/** 
	* @author xuesong
	* @param onHoldClicks 函数 点击保存按钮
	*/
	onHoldClicks = (newState) => {
		var key_name = [];
		var value = [];
		var list_message = this.state.add_button;
		if (this.state.dataId) {
			value.push("id")
			key_name.push(this.state.dataId)
		}
		for (var i = 0; i < list_message.length; i++) {
			if (list_message[i].type_name !== "HoldBtn") {
				if (list_message[i].type_name === "ListTextSearch" || list_message[i].type_name === "SelectList" || list_message[i].type_name === "SelectListSearch"||list_message[i].type_name==="SelectListLangPack") {
					value.push(list_message[i].id_name + "_name")
					key_name.push(document.getElementById(list_message[i].id_name + "_name").innerHTML === "-选择-" ? "" : document.getElementById(list_message[i].id_name + "_name").innerHTML)
					value.push(list_message[i].id_name + "_id")
					key_name.push(document.getElementById(list_message[i].id_name + "_id").innerHTML === "-选择-" ? "" : document.getElementById(list_message[i].id_name + "_id").innerHTML)

				}
				else if (list_message[i].type_name === "TextArea") {
					value.push(list_message[i].id_name)
					key_name.push(document.getElementById(list_message[i].id_name).value)
				}else if (list_message[i].type_name === "Editor") {
					value.push(list_message[i].id_name)
					console.log(document.getElementById(list_message[i].id_name))
					key_name.push(JSON.parse(document.getElementById(list_message[i].id_name).innerHTML))
				}  else {
					value.push(list_message[i].id_name)
					key_name.push(document.getElementById(list_message[i].id_name).innerHTML === "-选择-" ? "" : document.getElementById(list_message[i].id_name).innerHTML || document.getElementById(list_message[i].id_name).value === "-选择-" ? "" : document.getElementById(list_message[i].id_name).value)
				}
			}

		}
		var obj = {};
		for (var j = 0; j < value.length; j++) {
			obj[value[j]] = key_name[j];
		}
		// componentslist =  {this.state.add_button?this.state.add_button:[]} componentsdata = {this.state.edit_project_data
		var cb = (route, message, arg) => {
			if (message.error === 0) {
				this.change_edit_state(false)
				this.setState({    //  项目创建成功,打开编辑页面。更新view
					alertAddCourseState:false
			}) 
			this.cancelCallback()
			this.table_data_body(1,this.state.psize,this.state.search_message)  //刷新项目列表
		
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
		console.log(newState.before_api_uri)
		console.log(obj)
		getData(getRouter(newState.before_api_uri), { data: obj, token: sessionStorage.token }, cb, {});
	}
	/** 
	* @author xuesong
	* @param table_data_body 函数 获取课程列表
	*/
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
        getData(getRouter("course_manage_list"), { token: sessionStorage.token,query_condition:objs,data_type:"page_json" }, cb, {});
        // getData(getRouter("examine_record_list"),{ session: sessionStorage.session}, cb, {});

	}
	/** 
	* @author xuesong
	* @param payment_csv 函数 导出csv
	*/
	payment_csv=(search_obj)=>{
		var cb = (route, message, arg) => {
			console.log(message)
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
	/** 
	* @author xuesong
	* @param alertAddState 函数 新建/编辑课程
	*/
	alertAddState=(newState)=>{
		 if(newState.dataId===""){
			this.fetchProjectData("addCourse")
			this.setState({
				[newState.state]:true,
				dataId:newState.dataId,
				financial_number:newState.financialNumber?newState.financialNumber:"",
				relation_id:newState.relationId,
				edit_project_data:[]

			})
		 }else{
			this.fetchProjectData("editCourse")
			this.setState({
				[newState.state]:true,
				dataId:newState.dataId,
				financial_number:newState.financialNumber?newState.financialNumber:"",
				relation_id:newState.relationId,
				edit_project_data:newState.courseData
			})
		 }
		
	}
	/** 
	* @author xuesong
	* @param freshCardGroup 函数 属性group
	*/
	freshCardGroup = (newState) => {
		this.setState({
			edit_project_data: []

		})
	}
	/** 
	* @author xuesong
	* @param alertHoldState 函数 点击弹出框确认按钮
	*/
	alertHoldState=(newState)=>{
		this.setState({
			[newState.state]:true,
			course_id:newState.dataId,
			alertTitle:newState.alertTitle,
			linkpage:newState.linkpage,
			project_id:newState.projectId,
			relation_id:newState.relationId
		})
	}
	/** 
	* @author xuesong
	* @param editCardSuccess 函数 修改group函数成功回调
	*/
	editCardSuccess=(newState)=>{
		if(this.state.change_message_type=="lecturer"){
			this.relation_lecturer(newState.id)
		}else if(this.state.change_message_type=="type"){
			this.relation_type(newState.id)
		}
	}
	/** 
	* @author xuesong
	* @param addCardGroupState 函数 添加group函数成功回调
	*/
	addCardGroupState=(newState)=>{
		if(this.state.change_message_type=="lecturer"){
			this.relation_lecturer(newState.id)
		}else if(this.state.change_message_type=="type"){
			this.relation_type(newState.id)
		}
	}
	/** 
	* @author xuesong
	* @param relation_lecturer 函数 获取关联讲师group
	*/
	relation_lecturer=(id)=>{
		var cb = (route, message, arg) => {

			if (message.error === 0) {
				
		this.setState({
			alertRelationState:true,
			add_drawer_button:{add_button:"lecturer_course_add",
						add_button_title:"关联讲师",
						add_title:"添加关联讲师",
						before_api_uri:"lectuer",
						del_button:"lecturer_course_del",
						descript:"CourseLecturerAddFrom",
						descript_title:"课程关联讲师-组",
						edit_button:"lecturer_course_edit",
						list_button:"lecturer_manage_getByCourseId"
						},
			drawer_index:id,
			message_list:message.data.lecturer,
			change_message_type:"lecturer"
			})
				
			}else if(message.error === 2){
				console.log("未登录")
				sessionStorage.logged = false;
				sessionStorage.token="";
				if(window.location.hash.split("#")[1]!=="/"){
					window.location.href=window.location.href.split("#/")[0]
				
				  }
			}
			else{
				Alert.open({
					alertTip: message.msg
				});
				setTimeout(function () {
					Alert.close();
				}, 3000)
			}
		}
		getData(getRouter("lecturer_manage_getByCourseId"), { token: sessionStorage.token,id:id }, cb, {});

	}
	/** 
	* @author xuesong
	* @param relation_type 函数 获取关联分类group
	*/
	relation_type=(id)=>{
		var cb = (route, message, arg) => {

			if (message.error === 0) {
				
		this.setState({
			alertRelationTypeState:true,
			add_drawer_button:{add_button:"course_type_add",
						add_button_title:"关联所属分类",
						add_title:"添加所属分类",
						before_api_uri:"type",
						del_button:"course_type_del",
						descript:"CourseTypeAddFrom",
						descript_title:"课程关联所属分类-组",
						edit_button:"course_type_edit",
						list_button:"course_type_getByCourseId"
						},
			drawer_index:id,
			message_list:message.data.type,
			change_message_type:"type"
			})
				
			}else if(message.error === 2){
				console.log("未登录")
				sessionStorage.logged = false;
				sessionStorage.token="";
				if(window.location.hash.split("#")[1]!=="/"){
					window.location.href=window.location.href.split("#/")[0]
				
				  }
			}
			else{
				Alert.open({
					alertTip: message.msg
				});
				setTimeout(function () {
					Alert.close();
				}, 3000)
			}
		}
		getData(getRouter("course_type_getByCourseId"), { token: sessionStorage.token,id:id }, cb, {});

	}
	change_edit_state=(state)=>{
		
		if(state){
			this.fetchProjectData("addCoursePlan")
		}else{
			this.fetchProjectData("showCoursePlan")
		}
	}
	/** 
	* @author xuesong
	* @param course_plan 函数 获取课程方案
	*/
	course_plan=(id)=>{
		var cb = (route, message, arg) => {
			if (message.error === 0) {
				
				this.setState({
					dataId:id,
					alertCoursePlanState:true,
					course_plan_list:message.data,
					drawer_index:id,
					
				// drawer_index:id,
				// message_list:message.data.type,
				// change_message_type:"type"
				},this.change_edit_state(false))
				
			}else if(message.error === 2){
				console.log("未登录")
				sessionStorage.logged = false;
				sessionStorage.token="";
				if(window.location.hash.split("#")[1]!=="/"){
					window.location.href=window.location.href.split("#/")[0]
				
				  }
			}
			else{
				Alert.open({
					alertTip: message.msg
				});
				setTimeout(function () {
					Alert.close();
				}, 3000)
			}
		}
		getData(getRouter("course_plan_getByCourseId"), { token: sessionStorage.token,id:id }, cb, {});

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
					<td  style={{"width":"27em"}}>
					<input value={table_data_body.id} name="checkCourseId" style={{float:"left",marginTop:"10px"}} type="checkbox"/>
						<PaymentManageBtn
							onHoldClick={this.alertAddState}
							defineValue="修改"
							classNames="editBtn"
							dataId={table_data_body.id}
							state="alertAddCourseState"	
							courseData={table_data_body}
						/>
						<PaymentManageBtn
							onHoldClick={this.alertHoldState}
							defineValue="删除"
							state="alertState"
							classNames="cancelBtn"
							// classNames="passBtn"
							linkpage="course_manage_del"	
							dataId={table_data_body.id}
						/>
						<div    
							className="pmo_btn_div" 
						>
							<button onClick={(e) => {
									this.relation_lecturer(table_data_body.id)
									}} className="pmo_common_btn">授课讲师
							</button>
							
						</div>
						<div    
							className="pmo_btn_div" 
						>
							<button onClick={(e) => {
									this.relation_type(table_data_body.id)
									
									}} className="pmo_common_btn">所属分类
							</button>
							
						</div>
						<div    
							className="pmo_btn_div" 
						>
							<button onClick={(e) => {
									this.course_plan(table_data_body.id)
									
									}} className="pmo_common_btn">课程方案
							</button>
							{/* <Link 
                                    button={"课程方案"}
                                    dataId={table_data_body.id}
                                    // isClick={this.props.card_list.id}
                                    linkpage={"course_plan_getByCourseId"}
                                    messageList={"addCoursePlan"}
                                    oneChange = {this.handleClick}
                                /> */}
							
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
	 /** 
	* @author xuesong
	* @param change_page 函数 分页栏
	*/
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
			<a 
				onClick={()=>{
					this.setState({
						fileContentArr:""
					})
					// this.downloadDetailData()
					this.funDownload()
				}}
				className="nyx-change-page-href" style={{marginRight:"-18em",float:"right"}}>
				{"导出课程方案"}
			</a>
			<div id='downloadDiv' style={{display:'none'}}></div>
        </div>
     	return components
	 }
	  /** 
	* @author xuesong
	* @param screening_information 函数 筛选
	*/
     screening_information=(message)=>{
		this.setState({
			search_message:message
        })
        this.table_data_body(1,this.state.psize,message)
	}
	cancelCallback=()=>{
		this.setState({
			alertState:false,
			alertAddCourseState:false,
			alertRelationState:false,
			alertRelationTypeState:false,
			alertCoursePlanState:false
		})
	}
	funDownload=()=> {
		var checkCourseId=document.getElementsByName("checkCourseId");
		var ids=[];
		for(var i = 0;i<checkCourseId.length;i++){
			if(checkCourseId[i].checked===true){
				ids.push(checkCourseId[i].value)
			}
		}
		if(ids.length>0){
		// ![avatar](http://baidu.com/pic/doge.png)
		var cb = (route, message, arg) => {
			// console.log(message)
			
            if (message.error === 0) {
				
				for(var m = 0;m<message.data.length;m++){
					for(var n = 0;n<message.data[m].course_plan.length;n++){
						// 标题1
						if(message.data[m].course_plan[n].class==="title_1 default_title"){
							this.title_content("# ",message.data[m].course_plan[n].content)
						}else if(message.data[m].course_plan[n].class==="title_2 default_title"){
							this.title_content("## ",message.data[m].course_plan[n].content)
						}else if(message.data[m].course_plan[n].class==="title_3 default_title"){
							this.title_content("### ",message.data[m].course_plan[n].content)
						}else if(message.data[m].course_plan[n].class==="main_boby default_title"){
							this.title_content("",message.data[m].course_plan[n].content)
						}else if(message.data[m].course_plan[n].class==="symbol_list default_title"){
							this.title_content("    * ",message.data[m].course_plan[n].content)
						}else if(message.data[m].course_plan[n].class==="unsigned_list default_title"){
							this.title_content("      ",message.data[m].course_plan[n].content)
						}else if(message.data[m].course_plan[n].class==="default_title img_right"){
							this.title_content("![avatar]",message.data[m].course_plan[n].content)
						}else if(message.data[m].course_plan[n].class==="default_title img_left"){
							this.title_content("![avatar]",message.data[m].course_plan[n].content)
						}else if(message.data[m].course_plan[n].class==="default_title img_center"){
							this.title_content("![avatar]",message.data[m].course_plan[n].content)
						}else if(message.data[m].course_plan[n].class==="default_title img_repeact"){
							this.title_content("![avatar]",message.data[m].course_plan[n].content)
						}
					}
				}
				var filename = '课程方案'
				var a = document.createElement('a')
				var blob = new Blob([this.state.fileContentArr])
				a.download = filename
				a.href = URL.createObjectURL(blob)
				a.click()
				URL.revokeObjectURL(blob)
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
		getData(getRouter("course_plan_getListCourseId"), { ids: ids, token: sessionStorage.token }, cb, {});
	}else{
		Alert.open({
			alertTip:"请选择导出的课程方案"
		  });
		  setTimeout(function(){
			Alert.close();
		  },3000)
	}
		// var filename = 'hello'
		// var a = document.createElement('a')
		// var blob = new Blob(['Hello World!\r\nhhh'])
		// a.download = filename
		// a.href = URL.createObjectURL(blob)
		// a.click()
		// URL.revokeObjectURL(blob)
	};
	title_content=(markdown,this_content)=>{
		// var fileContentArr="";
		var title_1_content=markdown;
		var content =this_content;
		for(var p = 0;p<content.length;p++){
			if(content[p].type==="def"){
				title_1_content=title_1_content+content[p].text;
			}else if(content[p].type==="emphasize"){
				title_1_content=title_1_content+"**"+content[p].text+"**";
			}else if(content[p].type==="weaken"){
				title_1_content=title_1_content+"=="+content[p].text+"==";	
			}else if(content[p].type==="img"){
				title_1_content=title_1_content+"("+content[p].text+")";	
			}
		}
		this.setState({
			fileContentArr:this.state.fileContentArr+title_1_content+"\r\n"
		})
		// console.log(title_1_content)
		//  fileContentArr=fileContentArr+title_1_content+"\r\n";
		//  console.log(fileContentArr)
		
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
				<PaymentManageBtn
					onHoldClick={this.alertAddState}
					defineValue="添加"
					classNames="btn_list"
					state="alertAddCourseState"
					dataId={""}	
					/>
					<br/>
				<DataSearchMessage 
					index={0}
					message={this.state.table_data_bodys}
				    keywordSearch={["name","type_name"]}
				    keywordTitle={[
                        "课程名称",
						"所属分类",
						"授课讲师",
						"周期",
						"是否认证",
						"级别"
						// "时间",
						// "状态"
					]}
					//    selectListMessage={["project_type_list"]}
					// 	selectNameMessage={["project_project_template_name"]}
				   selectListMessage={[]}
                   selectNameMessage={[]}
                   selectListCheckMessage={["lecturer_manage_list"]}
                   selectNameCheckMessage={["lecturer_name"]}
				   sectionTimeMessage={[]}					   
				   langPackMessage={["is_short","is_cert","level"]}
					//    langPackTitleValue={["is_short","is_cert"]}
				   langPackTitle={["0,1","0,1","1,2,3"]}
				   screeningMessage={this.screening_information}
				/>
                <div className="statistical_div">
                    <table style={{width:sumLength+27+"em"}} className="statistical_table">
                        <thead>
                            <tr>
								{/* <th><div className="statistical_table_box">序号</div></th> */}
								<th>
									<div style={{"width":"27em"}}></div>
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
			{this.state.alertAddCourseState?<Popup 
				content={
					<div>
						<h2>课程</h2>
						<div className="popup_content">
							<div key={this.state.dataId?this.state.dataId:"addComponents"} id="editComponents" className="edit_bar">
								<ComponentsList  editCardGroupState={this.freshCardGroup} editCardGroupStates={this.freshCardGroup} dataId={this.state.dataId} holdClick={this.onHoldClicks} componentslist =  {this.state.add_button?this.state.add_button:[]} componentsdata = {this.state.edit_project_data} ></ComponentsList > 
						    </div>		
						</div>
					</div>
					}	 
				cancelCallback = { this.cancelCallback.bind(this) } 
				sureBtn={false}  
				alertState={this.state.alertAddCourseState}
			/>:""}
			{this.state.alertRelationState?<Drawer 
				content={
					<div>
						{/* <button onClick={()=>{
							this.setState({
								alertAddCourseState:true
							})
						}}></button> */}
						<CardGroup 
                            addButtonTitle={"关联讲师"} 
                            addButton={this.state.add_drawer_button} 
                             beforeApiUri={this.state.message_list} 
                            uriName={this.state.add_drawer_button.before_api_uri}
                            delButton = {this.state.add_drawer_button.del_button}
                            editButton={this.state.add_drawer_button.edit_button}
                            listButton = {this.state.add_drawer_button.list_button}
                            idName={"course_relation_lecturer"}
							dataId={this.state.drawer_index}
							sureBtn={false}  
                            selectedInfo={this.state.message_list?this.state.message_list:""} 
							postListGroup={this.editCardSuccess}
                            editCardGroupState={this.addCardGroupState}
                                    
                                />
					</div>
					}	 
				cancelCallback = { this.cancelCallback.bind(this) } 
				alertState={this.state.alertRelationState}
			/>:""}
			{this.state.alertRelationTypeState?<Drawer 
				content={
					<div>
						<CardGroup 
                            addButtonTitle={"所属分类"} 
                            addButton={this.state.add_drawer_button} 
                            beforeApiUri={this.state.message_list} 
                            uriName={this.state.add_drawer_button.before_api_uri}
                            delButton = {this.state.add_drawer_button.del_button}
                            editButton={this.state.add_drawer_button.edit_button}
                            listButton = {this.state.add_drawer_button.list_button}
                            idName={"course_relation_type"}
							dataId={this.state.drawer_index}
							sureBtn={false}  
                            selectedInfo={this.state.message_list?this.state.message_list:""} 
							postListGroup={this.editCardSuccess}
                            editCardGroupState={this.addCardGroupState}
                                    
                                />
					</div>
					}	 
				cancelCallback = { this.cancelCallback.bind(this) } 
				alertState={this.state.alertRelationTypeState}
			/>:""}
			{this.state.alertCoursePlanState?<Drawer 
				content={
					<div>
						<div className="card_ide_btn"></div>
						<button  className="btn_list" onClick={()=>{
						this.change_edit_state(true)
						}}>编辑</button>
						<ComponentsList  editCardGroupState={this.freshCardGroup} editCardGroupStates={this.freshCardGroup} dataId={this.state.dataId} holdClick={this.onHoldClicks} componentslist =  {this.state.add_button?this.state.add_button:[]} componentsdata = {this.state.course_plan_list} ></ComponentsList > 
					</div>
					}	 
				cancelCallback = { this.cancelCallback.bind(this) } 
				alertState={this.state.alertCoursePlanState}
			/>:""}
        </div>
		)
	}
}

export default Course;
