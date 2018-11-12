import React, {
	Component
} from 'react'
import { getData, getRouter } from '../../utils/helpers'
import ComponentsViewList from '../components/ComponentsViewList'
import ViewTextField from '../components/ViewTextField';
import Popup from '../components/Popup'
import VDraggable from '../components/VDraggable'
class View extends Component {
   
	state = {
		view_table_list:[],//所有的视图json表
		this_view_list:[],//当前json内容,
		this_json_view:[],//获取当前某个组件json
		isViewJson:false,//打开修改paper状态
		is_view_list:false,//打开视图json状态
		index_json_view:"",//组件在视图中的位置
		componentsView:[],
		componentsComplexView:[],
		alertState:false, //弹出框的状态
		this_index_view_list:"",
		view_type:"",//视图的类型
		view_china_name:"",
		view_english_name:"",
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
					is_view_list:true,
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

		console.log(newState)
		 if(newState.form_list.type_name!=="CardGroup"){
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
			for(var i=0;i<this.state.view_table_list.length;i++){
				if(this.state.view_table_list[i].type==="formlist"){
					componentsComplexView.push(this.state.view_table_list[i])
				}
			}
			this.setState({
				componentsView:[],
				componentsComplexView:componentsComplexView,
				isViewJson:true,
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
	 * @time 2018-11-05
	 * @author xuesong
	 * @param editJsonView 函数 编辑视图组件 
	 */
	editJsonView=()=>{
		//重新编辑视图组件列表
		var other_list=[];
		for(var i=0;i<this.state.this_view_list.length;i++){
			if(i!==this.state.index_json_view){
				other_list.push(this.state.this_view_list[i])
			}else{
				other_list.push({id_name:this.state.id_name,type_name:this.state.type_name,
					key:this.state.key,title:this.state.title,
					tip:this.state.tip,add_button:this.state.add_button,
					descript:this.state.descript,before_api_uri:this.state.before_api_uri,
					after_api_uri:this.state.after_api_uri
				})
			}
		}
		this.setState({
			this_view_list:other_list
		})
		 
	}
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
		console.log(this.state.view_china_name+this.state.view_english_name)
	}
	/** 
	 * @time 2018-11-09
	 * @author xuesong
	 * @param addViewButton 函数 Group添加按钮
	 */
	addViewButton=(newState)=>{
		console.log(newState)
	}
	/** 
	 * @time 2018-11-09
	 * @author xuesong
	 * @param editViewButton 函数 Group修改按钮
	 */
	editViewButton=(newState)=>{
		console.log(newState)
	}
	/** 
	 * @time 2018-11-09
	 * @author xuesong
	 * @param descriptViewButton 函数 Group展示按钮
	 */
	descriptViewButton=(newState)=>{
		console.log(newState)
	}
	render() {
		return(
			<div>
				<div className="view_table_list">
					<ul>
						{this.state.view_table_list.map((view,index)=>{
							return <li onClick={()=>{
								// if(view.type==="formlist"){
								// 	this.viewList(view,index)
								// }else{
								// 	this.ViewComplexList(view,index)
								// }
								this.viewList(view,index)
								
							}} key={index}>{view.title}</li>
						})}
					</ul>
					<button className="add_card_btn" onClick={()=>{
						this.setState({
							alertState:true
						})
					}} >添加</button>
					{/* <VDraggable value={this.state.value} isAcceptAdd={true}/> */}
				</div>
				<div  className="view_list overflow">
					<div className={this.state.is_view_list?"view_paper_list overflow open":"view_paper_list overflow"}>
						< ComponentsViewList 
						 
							addViewonClickButton={this.addViewButton}
							editViewonClickButton={this.editViewButton} 
							descriptViewonClickButton={this.descriptViewButton}
							handleViewJson={this.thisJsonView} componentslist =  {this.state.this_view_list?this.state.this_view_list:[]}  ></ComponentsViewList > 
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
									this.setState({
										[componentsView.key]:event.target.value 
									});
									}} 
						/>
						)
					})}
					{this.state.componentsComplexView.length>1?
					// <SelectListSearch 
					// 	id={this.props.index?form_list.id_name+this.props.index:form_list.id_name} 
					// 	labelValue={"更改视图"}
					// 	searchInfoLists={form_list.before_api_uri} 
					// 	selectedIdInfo={this.props.componentsdata?this.props.componentsdata[form_list.id_name+"_id"]:"-选择-"} 
					// 	selectedInfo={this.props.componentsdata?this.props.componentsdata[form_list.id_name+"_name"]:"-选择-"} 
					// /> 
					<select>
						<option>选择</option>
					{this.state.componentsComplexView.map((componentsComplexView,index)=>{
						return(
							<option key={index}>
								{componentsComplexView.title}
							</option>
														)
					})}
					</select>:""}
						<button onClick={()=>{
						
							this.editJsonView()
						}}>确定</button>
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
                            
                        /></div>} alertMsg = {this.state.alertMsg} sureCallback = {this.sureCallback.bind(this)} cancelCallback = { this.cancelCallback.bind(this) } alertState={this.state.alertState}/>
				
			</div>
			
		);
	}
}

export default View;