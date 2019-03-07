/** 
	 * @time 2018-11-05
	 * @author xuesong
	 * @param Popup 组件 弹出框
	 */
import React, { Component } from 'react';
// import TextField from '../components/input/TextField'
class Popup extends Component {
    state={
        alertState:false
    }
	render(){
        const {content}=this.props
        const cancel = (msg) => {
            return () => {
                this.props.cancelCallback(msg)
            }
        }
        const sure = (msg) =>{
            return () => {
                this.props.sureCallback(msg)
            }
        }
        console.log(this.props.sureBtn)
		return (
        
                <div className={this.props.alertState ?"alert_back open":"alert_back"}>
                    <div className={this.props.alertState ?"alert_box open btn_border":"alert_box"}>
                        {content}
                        {this.props.sureBtn===false?"":<button onClick = { sure("false") }>确定</button>}
                        <button className="cancel_button" onClick = { cancel("false") }
                    >取消</button>
                    </div>
                </div>
          

		)
	}
}

export default Popup;