/** 
     * @author xuesong
     * @param IsAgreeApplications 组件  审批申请
     */
    import React, { Component } from 'react';
    import Popup from '../modal/Popup'
    import {getData,getRouter} from '../../../utils/helpers'
    import TextField from '../input/TextField'
    class IsAgreeApplications extends Component {
        state={
            alertState:false, //弹出框的状态
            isAgreeMessage:"",
            pass:""
        }
        /** 
	 * @time 2018-12-14
	 * @author xuesong
	 * @param cancelCallback 函数 弹出框取消按钮
	 */
    cancelCallback(msg){
        this.setState({
            alertState:false
        })
    }
     /** 
 * @time 2018-12-14
 * @author xuesong
 * @param sureCallback 函数 弹出框取消按钮
 */
sureCallback(msg){
    // this.submit_button()
    var cb = (route, message, arg) => {
        if (message.error === 0) {
            this.setState({
                alertState:false,
            })
            this.props.examine_bool_first(true)
        }else if(message.error === 2){
            console.log("未登录")
            sessionStorage.logged = false;
            sessionStorage.token="";
            if(window.location.hash.split("#")[1]!=="/"){
                window.location.href=window.location.href.split("#/")[0]
            
              }
        }
        

    }
    console.log(this.state.isAgreeMessage)
    console.log(this.state.pass)
  getData(getRouter(this.props.beforeApiUri), {parent_id:this.props.message.id,note:this.state.isAgreeMessage,pass:this.state.pass,token:sessionStorage.token}, cb, {});
}
        render(){
            const {message,labelValue,thisKey} =this.props;
            var className = this.props.className.split(","); 
            return (
                this.props.message?<div className={className[0]?className[0]:""}>
                    <button className={className[1]?className[1]:""}
                        onClick={()=>{
                            this.setState({
                                alertState:true,
                                pass:"1"
                            })
                        }}
                    >同意</button>
                  <button className={className[1]?className[1]:""}
                        onClick={()=>{
                            this.setState({
                                alertState:true,
                                pass:"2"
                            })
                        }}
                    >拒绝</button>
                    <Popup 
					content={
						<div>
							<h2>备注</h2>
							<div className="popup_content">
                                <TextField 
                                    onChange={(e)=>{
                                        this.setState({
                                            isAgreeMessage:e.target.value
                                            })
                                    }}
                                    value={this.state.isAgreeMessage} 
                                    labelValue={"备注"} 
                                />
                            </div>
						
						</div>
					}	 
					sureCallback = {this.sureCallback.bind(this)} 
					cancelCallback = { this.cancelCallback.bind(this) } 
					alertState={this.state.alertState}
				/>
                    {/* <Popup alertTitle={"提交"+labelValue} alertMsg = {this.state.alertMsg} sureCallback = {this.sureCallback.bind(this)} cancelCallback = { this.cancelCallback.bind(this) } alertState={this.state.alertState}/> */}
              </div>:<div className={className[0]?className[0]:""}>{this.props.defaultValue}</div>
            )
        }
    }
    export default IsAgreeApplications;
    