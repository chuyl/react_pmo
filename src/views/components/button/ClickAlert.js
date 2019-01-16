/** 
     * @time 2018-09-27 
     * @author xuesong
     * @param ClickAlert 组件  button
     */
    import React, { Component } from 'react';
    import Alert from '../modal/Alert'

    class ClickAlert extends Component {
        state={
            alertTitle:"",
            alertMsg:"",
            alertState:false
        }
        /** 
     * @time 2018-09-27 
     * @author xuesong
     * @param holdClick 函数  保存点击事件
     */
      holdClick=()=>{
        this.setState({
            alertState:true
        })
        // var newState = {
        //     before_api_uri:this.props.before_api_uri
        //    }
        // this.props.onHoldClick(newState);
    }
    holdViewClick=()=>{
        
    }
    /** 
	 * @time 2018-01-16
	 * @author xuesong
	 * @param sureCallback 函数 一键复制视图
	 */
	sureCallback=()=>{
		// this.copyViewMessage(this.state.copy_message)

	}
			/** 
	 * @time 2018-11-29
	 * @author xuesong
	 * @param cancelCallback 函数 一键复制视图
	 */
	cancelCallback=()=>{
		this.setState({
			alertState:false
		})		
	}
        render(){
            return (
                <div>
                    <button onClick={this.props.view?this.holdViewClick:this.holdClick} className="hold_btn">保存</button>
                    <Alert alertTitle={this.state.alertTitle} alertMsg = {this.state.alertMsg} sureCallback = {this.sureCallback.bind(this)} cancelCallback = { this.cancelCallback.bind(this) } alertState={this.state.alertState}/>
                </div>
                )
        }
    }
    export default ClickAlert;
    