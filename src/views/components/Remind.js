/** 
     * @author xuesong
     * @param Remind 组件  弹出框
     */
    import React, { Component } from 'react';

    class Remind extends Component {
 
        render(){
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
            return (
                <div className={this.props.alertState ?"alert_back open":"alert_back"}>
                   <div className={this.props.alertState ?"alert_box open":"alert_box"}>
                   <p>{this.props.alertMsg}</p>
                   <button onClick = { sure("false") }>确定</button>
                   <button onClick = { cancel("false") }
                   >取消</button>
                   </div>
                </div>
            )
        }
    }
    export default Remind;
    