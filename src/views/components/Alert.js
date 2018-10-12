/** 
     * @author xuesong
     * @param Alert 组件  弹出框
     */
    import React, { Component } from 'react';

    class Alert extends Component {
        state = {
            alert_state:false,
            
        }
        render(){
           
            return (
                <div className="alert_back">
                   <div className="alert_box">
                   <button>确定</button>
                   <button onClick={()=>{

                   }}>取消</button>
                   </div>
                </div>
            )
        }
    }
    export default Alert;
    