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
             console.log(message.examine[thisKey])
            return (
                this.props.message?<div className={className[0]?className[0]:""}>
                   <span className={className[1]?className[1]:""}>
                       {labelValue}
                       
                    </span>
                    <ul className={className[2]?className[2]+"_ul":""}>
                        {message.examine[thisKey]?message.examine[thisKey].step.map((step,index)=>{
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
                        }):""}
                    </ul>
                    <span  className={className[1]?className[1]:""}>
                    {message.examine[thisKey]?message.examine[thisKey].state==="0"?"未提交":message.examine[thisKey].state==="1"?"待审核":message.examine[thisKey].state==="2"?"审核通过":message.examine[thisKey].state==="-1"?"未通过":"":""}
                    </span>
                   {/* <span>{message?dealNumber(message):"0.00"}</span> */}
                    {/* <span className="text_field_remind"></span> */}
              </div>:<div className={className[0]?className[0]:""}>{this.props.defaultValue}</div>
            )
        }
    }
    export default ApplicationsState;
    