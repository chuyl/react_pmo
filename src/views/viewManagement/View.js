import React, {
	Component
} from 'react'
import { getData, getRouter } from '../../utils/helpers'
import ComponentsViewList from '../components/ComponentsViewList'
import ViewTextField from '../components/ViewTextField';
class View extends Component {
   
	state = {
		view_table_list:[],//所有的视图json表
		this_view_list:[],//当前json内容,
		this_json_view:[],//获取当前某个组件json
		isViewJson:false,//打开修改paper状态
		is_view_list:false,//打开视图json状态
		index_json_view:"",//组件在视图中的位置
        title:"",

	};

	componentWillMount() {
		this.fetchListData()
	}
	/** 
	 * @time 2018-11-05
	 * @author xuesong
	 * @param viewList 函数 获取所有视图列表
	 */
	fetchListData() {
		var cb = (route, message, arg) => {
			console.log(message)
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
	 * @param viewList 函数 获取某一个视图列表json 
	 */
	viewList=(name)=>{
		var cb = (route, message, arg) => {
			
			if (message.error === 0) {
				this.setState({
					this_view_list:message.data["form-list"],
					is_view_list:true
				})
				console.log(message.data["form-list"])
			}
		}
		getData(getRouter(name), { token:sessionStorage.token }, cb, {});
	}
	/** 
	 * @time 2018-11-05
	 * @author xuesong
	 * @param thisJsonView 函数 点击视图中数组获取详细json 
	 */
	thisJsonView=(newState)=>{
         this.setState({
			this_json_view:newState.form_list,
			index_json_view:newState.index,
			isViewJson:true,
			title:newState.form_list.title
		 })
	}
	/** 
	 * @time 2018-11-05
	 * @author xuesong
	 * @param editViewList 函数 编辑视图列表 
	 */
	editViewList=()=>{
		console.log(this.state.this_view_list)
	}/** 
	 * @time 2018-11-05
	 * @author xuesong
	 * @param editJsonView 函数 编辑视图组件 
	 */
	editJsonView=()=>{
		// this.setState({
			
		// })
		// console.log(this.state.this_view_list)
	}
	render() {
		console.log(this.state.index_json_view)
		return(
			<div>
				{/* <div className="view_table_list">
					<ul>
						{this.state.view_table_list.map((view,index)=>{
							return <li onClick={()=>{
								this.viewList(view.name)
							}} key={index}>{view.title}</li>
						})}
					</ul>
				</div>
				<div className="view_list overflow">
					<div className={this.state.is_view_list?"view_paper_list overflow open":"view_paper_list overflow"}>
						< ComponentsViewList handleViewJson={this.thisJsonView} componentslist =  {this.state.this_view_list?this.state.this_view_list:[]}  ></ComponentsViewList > 
						<button onClick={()=>{
							this.editViewList()
						}}>确定</button>
					</div>
				</div>
				<div className="view_list overflow">
					<div className={this.state.isViewJson?"view_paper_list overflow open":"view_paper_list overflow"}>
						<ViewTextField 
							// id={form_list.id_name} 
							inputValue={this.state.this_json_view.title} 
							labelValue={"title"} 
							onChange={(event) => {
								this.setState({
									title:event.target.value 
								});
								}}
						/>
						<ViewTextField 
							// id={form_list.id_name} 
							inputValue={this.state.this_json_view.id_name} 
							labelValue={"id_name"} 
						/>
						<ViewTextField 
							// id={form_list.id_name} 
							inputValue={this.state.this_json_view.type_name} 
							labelValue={"type_name"} 
						/>
						<ViewTextField 
							// id={form_list.id_name} 
							inputValue={this.state.this_json_view.before_api_uri} 
							labelValue={"before_api_uri"} 
						/>
						
						<ViewTextField 
							// id={form_list.id_name} 
							inputValue={this.state.this_json_view.after_api_uri} 
							labelValue={"after_api_uri"} 
						/>
						<ViewTextField 
							// id={form_list.id_name} 
							inputValue={this.state.this_json_view.add_button} 
							labelValue={"add_button"} 
						/>
						<ViewTextField 
							// id={form_list.id_name} 
							inputValue={this.state.this_json_view.key} 
							labelValue={"key"} 
						/>
						<ViewTextField 
							// id={form_list.id_name} 
							inputValue={this.state.this_json_view.descript} 
							labelValue={"descript"} 
						/>
						<ViewTextField 
							// id={form_list.id_name} 
							inputValue={this.state.this_json_view.tip} 
							labelValue={"tip"} 
						/>
						<button onClick={()=>{
							this.editJsonView()
						}}>确定</button>
					</div>
				</div> */}
			</div>
		);
	}
}

export default View;