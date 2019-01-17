/** 
     * @time 2018-09-27 
     * @author xuesong
     * @param ClickAlert 组件  button
     */
    import React, { Component } from 'react';
    import Alert from '../modal/Alert'
    import {getData, getRouter }from '../../../utils/helpers'

    class ClickArrAlert extends Component {
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
    componentDidMount(){
        if(this.props.dataId.length>0){
            this.setState({
            alertState:true,
            alertTitle:this.props.defaultValue,
            alertMsg:""
        })
        }
    }
      holdClick=()=>{
       
        // this.setState({
        //     alertState:true,
        //     alertTitle:this.props.defaultValue,
        //     alertMsg:""
        // })
        // var newState = {
        //     before_api_uri:this.props.before_api_uri
        //    }
         this.props.onClickArrAlert();
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
        var cb = (route, message, arg) =>  {
            if (message.error === 0) {
                this.setState({
                    alertState:false
                })
                var newState={
                    dataId:true
                }
                this.props.examine_bool_first(true)
            }else if(message.error === 2){
                console.log("未登录")
                sessionStorage.logged = false;
                sessionStorage.token="";
                if(window.location.hash.split("#")[1]!=="/"){
                    window.location.href=window.location.href.split("#/")[0]
                
                  }
            }else{
                this.setState({
                    remind_state:true
                })
                Alert.open({
                    alertTip:message.msg
                    
                });
                setTimeout(function(){
                    Alert.close();
                 },3000)
            }
            //  this.props.oneChange(newState);
        }
        //获取数据接口
        // console.log(this.props.linkpage)
        // console.log(this.props.dataId)
        getData(getRouter(this.props.linkpage),  {token:sessionStorage.token, id:this.props.dataId }, cb,  {}); 
    //}
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
            console.log(this.props.dataId)
            const {defaultValue,linkpage} = this.props;
            return (
                <div className="card_ide_btn">
                    <button 
                        onClick={this.props.view?this.holdViewClick:this.holdClick} 
                        className="btn_list">
                        {defaultValue}
                    </button>
                    <Alert alertTitle={this.state.alertTitle} alertMsg = {this.state.alertMsg} sureCallback = {this.sureCallback.bind(this)} cancelCallback = { this.cancelCallback.bind(this) } alertState={this.state.alertState}/>
                </div>
                )
        }
    }
    export default ClickArrAlert;
    