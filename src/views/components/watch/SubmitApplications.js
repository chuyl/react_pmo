/** 
     * @author xuesong
     * @param ApplicationsState 组件  提交申请
     */
    import React, { Component } from 'react';
    import Alert from '../modal/Alert'
    import {getData,getRouter} from '../../../utils/helpers'
    class ApplicationsState extends Component {
        state={
            alertState:false, //弹出框的状态
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
        }else if(message.error === 2){
            console.log("未登录")
            sessionStorage.logged = false;
            sessionStorage.token="";
            if(window.location.hash.split("#")[1]!=="/"){
                window.location.href=window.location.href.split("#/")[0]
            
              }
        }
        

    }
    console.log(this.props.beforeApiUri)
  getData(getRouter(this.props.beforeApiUri), {id:this.props.message.id,token:sessionStorage.token}, cb, {});
}
        render(){
            const {message,labelValue,thisKey} =this.props;
            var className = this.props.className.split(","); 
            return (
                this.props.message?<div className={className[0]?className[0]:""}>
                  {/* 根据state显示button里面的文字 */}
                  {message.examine[thisKey]?message.examine[thisKey].state==="0"?
                    <button className={className[1]?className[1]:""}
                        onClick={()=>{
                            this.setState({
                                alertState:true
                            })
                        }}
                    >提交</button>
                  :message.examine[thisKey].state==="1"?<span>待审核</span>
                  :message.examine[thisKey].state==="2"?<span>审核通过</span>
                  :message.examine[thisKey].state==="-1"?<button className={className[1]?className[1]:""} 
                        onClick={()=>{
                            this.setState({
                                alertState:true
                            })
                        }}
                  >再次提交</button>
                  :"":""}
                    <Alert alertTitle={"提交"+labelValue} alertMsg = {this.state.alertMsg} sureCallback = {this.sureCallback.bind(this)} cancelCallback = { this.cancelCallback.bind(this) } alertState={this.state.alertState}/>
              </div>:<div className={className[0]?className[0]:""}>{this.props.defaultValue}</div>
            )
        }
    }
    export default ApplicationsState;
    