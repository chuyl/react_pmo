/** 
     * @author xuesong
     * @param ApplicationsState 组件  提交状态
     */
    import React, { Component } from 'react';
    // import {dealNumber} from '../../../utils/helpers'
    class ApplicationsState extends Component {
        state={
        }
        
        render(){
            const {message,labelValue,thisKey} =this.props;
            var className = this.props.className.split(","); 
            // console.log(message.examine[thisKey])
            return (
                this.props.message?<div className={className[0]?className[0]:""}>
                   
                    <ul className={className[2]?className[2]+"_ul":""}>
                        {message.examine[thisKey].step.map((step,index)=>{
                            if(step.pass==="0"){
                                console.log(step.pass)
                                return(
                                    <li key={index} className={className[2]?className[2]+"_item_default":""}>
    
                                    </li>
                                )
                            }
                            if(step.pass==="1"){
                                console.log(step.pass)
                                return(
                                    <li key={index} className={className[2]?className[2]+"_item_success":""}>
    
                                    </li>
                                )
                            }
                            if(step.pass==="-1"){
                                console.log(step.pass)
                                return(
                                    <li key={index} className={className[2]?className[2]+"_item_fail":""}>
    
                                    </li>
                                )
                            }
                            
                            console.log(step)
                        })}
                    </ul>
                   {/* <span>{message?dealNumber(message):"0.00"}</span> */}
                    {/* <span className="text_field_remind"></span> */}
              </div>:<div className={className[0]?className[0]:""}>{this.props.defaultValue}</div>
            )
        }
    }
    export default ApplicationsState;
    