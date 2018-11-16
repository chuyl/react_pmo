import React, {
	Component
} from 'react'
import { getData, getRouter } from '../../utils/helpers'
import ComponentsViewList from '../components/ComponentsViewList'
import SelectViewListSearch from '../components/SelectViewListSearch'
import ViewTextField from '../components/ViewTextField';
import Popup from '../components/Popup'
import VDraggable from '../components/VDraggable'
class View extends Component {
   
	state = {
		view_table_list:[],//所有的视图json表
		this_view_list:[],//当前json内容,
		form_temp_name:[],//视图名称
		this_json_view:[],//获取当前某个组件json
		isViewJson:false,//打开修改paper状态
		is_view_list:false,//打开视图json状态
		index_json_view:"",//组件在视图中的位置
		selectedViewAddTitle:"",//在group里面修改的add_button里面的title
		componentsView:[],
		componentsComplexView:[],
		alertState:false, //弹出框的状态
		changeInterfaceState:false,//修改接口名称状态
		this_index_view_list:"",
		selectedViewTitle:"",//复杂视图更改时的默认视图
		selectedViewName:"",//group修改的名称
		selectedViewIndex:"",//card子组件位置
		selectedViewarrIndex:"",
		view_type:"",//视图的类型
		change_interface:"",//修改接口名称
		change_key_interface:"",//修改接口key名称
		view_china_name:"",
		view_english_name:"",
		view_type_name:"",
		id_name:"",
		type_name:"",
		key:"",
		title:"",
		tip: "",
		add_button: "",
		descript: "",
		before_api_uri: "",
		after_api_uri: "",
	};

	componentWillMount() {
		this.fetchListData()
	}
	/** 
	 * @time 2018-11-05
	 * @author xuesong
	 * @param fetchListData 函数 获取所有视图列表
	 */
	fetchListData() {
		var cb = (route, message, arg) => {
			if (message.error === 0) {

				this.setState({
					view_table_list:message.data	
				})

			}
		}
		getData(getRouter("viewManagement"), { token:sessionStorage.token }, cb, {});
	}
	/** 
	 * @time 2018-11-05
	 * @author xuesong
	 * @param viewList 函数 获取某一个视图列表json (简单的formlist)
	 */
	viewList=(list,index)=>{

		var cb = (route, message, arg) => {
			
			if (message.error === 0) {
				this.setState({
					this_view_list:message.data["form-list"],
					form_temp_name:message.data["form-temp-name"],
					is_view_list:true,
					isViewJson:false,
					view_type:list.type,
					this_index_view_list:index
				})
			}
		}
		getData(getRouter(list.name), { token:sessionStorage.token }, cb, {});
	}
	ViewComplexList=(list,index)=>{
		var cb = (route, message, arg) => {
			
			if (message.error === 0) {
				this.setState({
					this_view_list:message.data,
					is_view_list:true,
					this_index_view_list:index
				})
			}
		}
		getData(getRouter("viewManagement"), { token:sessionStorage.token }, cb, {});
	}
	/** 
	 * @time 2018-11-05
	 * @author xuesong
	 * @param thisJsonView 函数 点击视图中数组获取详细json 
	 */
	thisJsonView=(newState)=>{

		 if(newState.form_list.type_name!=="CardGroup"&&newState.form_list.type_name!=="Cards"){
		var componentsView=[]
		//将组件的json数据变成数组
		for(var i in newState.form_list){
			componentsView.push(
				{key:i,value:newState.form_list[i]}
			 )
		}
         this.setState({
			componentsComplexView:[],
			componentsView:componentsView,
			this_json_view:newState.form_list,
			index_json_view:newState.index,
			isViewJson:true,
			id_name:newState.form_list.id_name,
			type_name:newState.form_list.type_name,
			key:newState.form_list.key,
			title:newState.form_list.title,
			tip:newState.form_list.tip,
			add_button:newState.form_list.add_button,
			descript:newState.form_list.descript,
			before_api_uri:newState.form_list.before_api_uri,
			after_api_uri:newState.form_list.after_api_uri,
		 })
		}else{
			var componentsComplexView=[];
			for(var m=0;m<this.state.view_table_list.length;m++){
				componentsComplexView.push(this.state.view_table_list[m])
				// if(this.state.view_table_list[m].type==="formlist"){
				// 	componentsComplexView.push(this.state.view_table_list[m])
				// }
				
			}
			this.setState({
				componentsView:[],
				componentsComplexView:componentsComplexView,
				isViewJson:true,
				index_json_view:newState.index,
			})
		}

	}
	/** 
	 * @time 2018-11-05
	 * @author xuesong
	 * @param editViewList 函数 编辑视图列表 
	 */
	editViewList=()=>{
		console.log(this.state.this_view_list)
	}
	
	/** 
	 * @time 2018-11-15
	 * @author xuesong
	 * @param changeGroupView 函数 编辑group组件视图名称 
	 */
	changeGroupView=(newState)=>{
		//下拉选择的数据
		var selectComplexView = document.getElementById("selectComplexView").innerHTML;
		var other_complex_list=[];
	   
		for(var m=0;m<this.state.this_view_list.length;m++){
			
		   if(m!==this.state.index_json_view){
			   other_complex_list.push(this.state.this_view_list[m])
		   }
		   else
		   {
			   var view_change_list=this.state.this_view_list[m];
			   //判断修改的组件是否为cards
			   if(this.state.this_view_list[m].type_name==="Cards"){
				   if(this.state.selectedViewIndex===1){ 
					   //selectedViewarrIndex card的body中页面的位置 selectedViewIndex card中子组件位置
					   view_change_list.add_button[this.state.selectedViewIndex].add_button[this.state.selectedViewarrIndex].add_button=newState.name;
					   view_change_list.add_button[this.state.selectedViewIndex].add_button[this.state.selectedViewarrIndex].title=selectComplexView;
				   }else{
					   view_change_list.add_button[this.state.selectedViewIndex].add_button=newState.name;
					   view_change_list.add_button[this.state.selectedViewIndex].title=selectComplexView
				   }
				   
				   other_complex_list.push(view_change_list)
				   this.setState({
					   this_view_list:other_complex_list
				   })
			   }else{
				   
			   //修改视图中add_button里面的修改视图或者展示视图名称
			   view_change_list.add_button.descript=newState.name;
			   view_change_list.add_button.add_title="添加"+selectComplexView;
			   
			   //修改视图中add_button里面的修改视图或者展示视图title名称
			   view_change_list.add_button[this.state.selectedViewAddTitle]=selectComplexView;
			   other_complex_list.push(view_change_list)
			   this.setState({
				   this_view_list:other_complex_list
			   })
			   }
			   
			   
		   }
			}
	}
	/** 
	 * @time 2018-11-16
	 * @author xuesong
	 * @param changeInterfaceMessage 函数 编辑group组件接口名称 
	 */
	changeInterfaceMessage=(event)=>{
		var other_list=[];
		for(var i=0;i<this.state.this_view_list.length;i++){
			if(i!==this.state.index_json_view){
				other_list.push(this.state.this_view_list[i])
			}else{
				var change_list=this.state.this_view_list[i];
				change_list.add_button[this.state.change_key_interface]=event.target.value;
				other_list.push(change_list)
			}
		}
		this.setState({
			this_view_list:other_list,
			change_interface:event.target.value
		})
		
	}
	/** 
	 * @time 2018-11-15
	 * @author xuesong
	 * @param changeformlistMessage 函数 编辑group组件接口名称 
	 */
	changeformlistMessage=(event,componentsView)=>{
		var other_list=[];
		for(var i=0;i<this.state.this_view_list.length;i++){
			if(i!==this.state.index_json_view){
				other_list.push(this.state.this_view_list[i])
			}else{
				var change_list=this.state.this_view_list[i];
				var key=componentsView.key;
				change_list[key]=event.target.value;
				other_list.push(change_list)
			}
		}
		this.setState({
			this_view_list:other_list
		})
	}
	/** 
	 * @time 2018-11-05
	 * @author xuesong
	 * @param editJsonView 函数 编辑视图组件 
	 */
	// editJsonView=()=>{
	// 	//重新编辑视图组件列表
	// 	if(this.state.componentsComplexView.length>1){//判断是否为复杂视图的修改
	// 	 this.state.changeInterfaceState===false?this.changeGroupView():this.changeInterfaceMessage()
		 
	// 	}else{
	// 		var other_list=[];
	// 		for(var i=0;i<this.state.this_view_list.length;i++){
	// 			if(i!==this.state.index_json_view){
	// 				other_list.push(this.state.this_view_list[i])
	// 			}else{
	// 				other_list.push({id_name:this.state.id_name,type_name:this.state.type_name,
	// 					key:this.state.key,title:this.state.title,
	// 					tip:this.state.tip,add_button:this.state.add_button,
	// 					descript:this.state.descript,before_api_uri:this.state.before_api_uri,
	// 					after_api_uri:this.state.after_api_uri
	// 				})
	// 			}
	// 		}
	// 		this.setState({
	// 			this_view_list:other_list
	// 		})
	// }
	// }
	/** 
	 * @time 2018-11-07
	 * @author xuesong
	 * @param cancelCallback 函数 弹出框取消
	 */
	cancelCallback(msg){
		this.setState({
			alertState:false
		})
	}
	/** 
	 * @time 2018-11-07
	 * @author xuesong
	 * @param sureCallback 函数 弹出框确定
	 */
	sureCallback(msg){
		this.addViewName()
        
        
	}
	/** 
	 * @time 2018-11-07
	 * @author xuesong
	 * @param sureCallback 函数 弹出框确定发送信息的接口
	 */
	addViewName=()=>{
		this.setState({
			alertState:false
		})
	}

	/** 
	 * @time 2018-11-09
	 * @author xuesong
	 * @param descriptViewButton 函数 Group展示按钮
	 */
	descriptViewButton=(newState)=>{
		console.log(newState)
		this.getViewButtomTitle(newState)
	}
	// headViewButton=(newState)=>{
	// 	console.log(newState)
	// 	// this.getViewButtomTitle(newState)
	// }
	interfaceViewData=(newState)=>{
		console.log(newState.data)
         this.setState({
			changeInterfaceState:true,//修改接口的状态
			change_key_interface:newState.name,
			change_interface:newState.data

		 })
		console.log(this.state.index_json_view)
	}
	/** 
	 * @time 2018-11-12
	 * @author xuesong
	 * @param getViewButtomTitle 函数 获取group相应的view名称显示在选择修改视图的位置
	 */
	getViewButtomTitle=(newState)=>{
		
		for(var i=0;i<this.state.view_table_list.length;i++){
		
			
			if(newState.view===this.state.view_table_list[i].name&&newState.addButtonTitle===this.state.view_table_list[i].title){
				
				this.setState({
					selectedViewTitle:this.state.view_table_list[i].title,
					selectedViewName:newState.name,
					selectedViewAddTitle:newState.title,
					selectedViewIndex:newState.index,
					selectedViewarrIndex:newState.arrIndex,
					changeInterfaceState:false,//修改接口的状态
				})
			}
		}
	}
	/** 
	 * @time 2018-11-12
	 * @author xuesong
	 * @param descriptViewButton 函数 Group展示按钮
	 */
	selectViewGetValue=(newState)=>{
		
		this.changeGroupView(newState)
		console.log(newState)
	}
	render() {
		return(
			<div>
				<div style={{overflow:"hidden"}} className="view_table_list ">
				<button style={{marginBottom:"5px"}} className="add_card_btn" onClick={()=>{
						this.setState({
							alertState:true
						})
					}} >添加</button>
					<ul style={{height:"90vh",paddingBottom:"1em"}} className="overflow">
						{this.state.view_table_list.map((view,index)=>{
							return <li onClick={()=>{
								this.viewList(view,index)
								
							}} key={index}>{view.title}</li>
						})}
					</ul>
					
				</div>
				<div  className="view_list overflow">
					<div className={this.state.is_view_list?"view_paper_list overflow open":"view_paper_list overflow"}>
						< ComponentsViewList 
							descriptViewonClickButton={this.descriptViewButton}
							// headViewonClickButton={this.headViewButton}
							handleViewJson={this.thisJsonView} 
							interfaceViewDataButton={this.interfaceViewData}
							componentslist = {this.state.this_view_list?this.state.this_view_list:[]}  ></ComponentsViewList > 
						<button onClick={()=>{
							this.editViewList()
						}}>确定</button>
					</div>
				</div>
				<div className="view_list overflow">
					<div className={this.state.isViewJson?"view_paper_list overflow open":"view_paper_list overflow"}>
					{this.state.componentsView.map((componentsView,index)=>{
						
						
						return(
							<ViewTextField 
								// id={form_list.id_name}
								key={this.state.this_index_view_list+""+this.state.index_json_view+""+index}
								inputValue={componentsView.value} 
								labelValue={componentsView.key} 
								
								onChange={(event) => {
									this.changeformlistMessage(event,componentsView)
									}} 
						/>
						)
					})}
					{this.state.componentsComplexView.length>1?
							this.state.changeInterfaceState===false?<SelectViewListSearch
								labelValue={"更改视图"}
								id={"selectComplexView"}
								selectedInfo={this.state.selectedViewTitle}
								selectViewValue={this.selectViewGetValue}
								selectLists={this.state.componentsComplexView}
							/>:<ViewTextField 
									value={this.state.change_interface} 
									labelValue={"名称"} 
									onChange={(event) => {
										this.changeInterfaceMessage(event)
									
										}} 
								/>
					:""}
						{/* <button onClick={()=>{
						
							this.editJsonView()
						}}>确定</button> */}
					</div>
				</div>
				<Popup content={<div><h2>新增视图</h2>
                        {/* <p>{this.props.alertMsg}</p> */}
						<ViewTextField 
						     onChange={(e)=>{
								 this.setState({
									 view_china_name:e.target.value
								 })
							 }}
                            inputValue={""} 
                            labelValue={"中文名称"} 

                        />
						<ViewTextField 
						  onChange={(e)=>{
							this.setState({
								view_english_name:e.target.value
							})
						}}
                            inputValue={""} 
                            labelValue={"英文名称"} 
                            
                        />
						<ViewTextField 
						  onChange={(e)=>{
							this.setState({
								view_type_name:e.target.value
							})
						}}
                            inputValue={""} 
                            labelValue={"类型"} 
                            
                        />
						</div>} alertMsg = {this.state.alertMsg} sureCallback = {this.sureCallback.bind(this)} cancelCallback = { this.cancelCallback.bind(this) } alertState={this.state.alertState}/>
				
			</div>
			
		);
	}
}

export default View;