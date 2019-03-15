/** 
	 * @time 2019-3-15
	 * @author xuesong
	 * @param Drawer 组件 抽屉
	 */
    import React, { Component } from 'react';
    // import TextField from '../components/input/TextField'
    class Drawer extends Component {
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
            return (
            
                    <div  className={this.props.alertState ?"alert_back open":"alert_back"}>
                        <div className={this.props.alertState ?"alert_drawer_box_close open":"alert_drawer_box_close"} onClick = {cancel("false")}></div>
                        <div className={this.props.alertState ?"alert_drawer_box open btn_border":"alert_drawer_box"}>
                            {content}
                            {/* {this.props.sureBtn===false?"":<button onClick = { sure("false") }>确定</button>}
                            <button className="cancel_button" onClick = { cancel("false") }
                            >取消</button> */}
                        </div>
                    </div>
              
    
            )
        }
    }
    
    export default Drawer;