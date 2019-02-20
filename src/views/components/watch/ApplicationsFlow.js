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
            const {message,thisKey} =this.props;
            var className = this.props.className.split(","); 
            return (
                this.props.message?
                   
                    <ul className={className[0]?className[0]+"_ul":""}>
                        {message.examine[thisKey]?message.examine[thisKey].step.map((step,index)=>{
                            if(step.pass==="0"){
                                console.log(step.admin_user)
                                return(
                                    <li key={index} className={className[0]?className[0]+"_item_default":""}>
                                      <div className={className[1]?className[1]:""}>
                                          <div>{step.admin_position}</div>
                                          <div>{step.admin_user}</div>
                                          <div>待审批</div>
                                      </div>
                                      <div className={className[2]?className[2]:""}>
                                          {step.time}
                                      </div>
                                    </li>
                                )
                            }
                            if(step.pass==="1"){
                                return(
                                    <li key={index} className={className[0]?className[0]+"_item_success":""}>
                                        <div className={className[1]?className[1]:""}>
                                          <span>{step.admin_position}</span>
                                          <span>{step.admin_user}</span>
                                          <span>已通过</span>
                                      </div>
                                      <div className={className[2]?className[2]:""}>
                                          {step.time}
                                      </div>
                                    </li>
                                )
                            }
                            if(step.pass==="-1"){
                                return(
                                    <li key={index} className={className[0]?className[0]+"_item_fail":""}>
                                        <div className={className[1]?className[1]:""}>
                                          <span>{step.admin_position}</span>
                                          <span>{step.admin_user}</span>
                                          <span>未通过</span>
                                      </div>
                                      <div className={className[2]?className[2]:""}>
                                          {step.time}
                                      </div>
                                    </li>
                                )
                            }
                            
                        }):""}
                    </ul>
              :<div className={className[0]?className[0]:""}>{this.props.defaultValue}</div>
            )
        }
    }
    export default ApplicationsState;
    