import React, { Component } from 'react';
import Popup from '../components/modal/Popup'
import ViewTextField from '../components/input/ViewTextField'
import { getData, getRouter } from '../../utils/helpers'
class Menu extends Component {
	state = {
		alertAddRoleState:false
	}
	/** 
	 * @time 2018-12-20
	 * @author xuesong
	 * @param cancelAddViewCallback 函数 弹出框取消
	 */
	cancelAddRoleCallback(msg){
		this.setState({
			alertAddRoleState:false,

		})
	}
	/** 
	 * @time 2018-12-20
	 * @author xuesong
	 * @param sureAddViewCallback 函数 弹出框确定
	 */
	sureAddRoleCallback(msg){
		//this.state.view_id===""?this.addViewName():this.editViewName()
		
	}
	render(){
		return (
			<div style={{overflow:"hidden"}} className="view_table_list ">
				{/* <button style={{marginBottom:"5px"}} className="add_card_btn" onClick={()=>{
						this.setState({
							 alertAddRoleState:true,
							// view_type_name:"formlist",
							// view_china_name:"",
							// view_english_name:"",
							// // view_mode:"",
							// view_id:""
						})
					}} >添加</button> */}
					<Popup 
					content={
						<div>
							<h2>角色</h2>
							<div className="popup_content">
								<ViewTextField 
									onChange={(e)=>{
										this.setState({
											view_china_name:e.target.value
											})
									}}
									// view={true}
									value={this.state.view_china_name} 
									labelValue={"角色名称"} 
								/>
								<ViewTextField 
									onChange={(e)=>{
										this.setState({
											view_english_name:e.target.value
										})
									}}
									// view={true}
									value={this.state.view_english_name} 
									labelValue={"角色id"} 
								/>
								
							</div>
						</div>
					}	 
					sureCallback = {this.sureAddRoleCallback.bind(this)} 
					cancelCallback = { this.cancelAddRoleCallback.bind(this) } 
					alertState={this.state.alertAddRoleState}
				/>
        </div>
		)
	}
}

export default Menu;
