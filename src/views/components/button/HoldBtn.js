/** 
     * @time 2018-09-27 
     * @author xuesong
     * @param HoldBtn 组件  button
     */
    import React, { Component } from 'react';

    class HoldBtn extends Component {
        /** 
     * @time 2018-09-27 
     * @author xuesong
     * @param holdClick 函数  保存点击事件
     */
      holdClick=()=>{
        var newState = {
            before_api_uri:this.props.before_api_uri
           }
        this.props.onHoldClick(newState);
    }
    holdViewClick=()=>{

    }
        render(){
            return (
                <button onClick={this.props.view?this.holdViewClick:this.holdClick} className="hold_btn">保存</button>
            )
        }
    }
    export default HoldBtn;
    