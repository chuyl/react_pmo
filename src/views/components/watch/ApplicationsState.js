/** 
     * @author xuesong
     * @param ApplicationsState 组件  提交申请
     */
    import React, { Component } from 'react';
    // import {dealNumber} from '../../../utils/helpers'
    class ApplicationsState extends Component {
        state={
            inputValue:this.props.inputValue
        }
        handleChange(e) {
            this.setState({
                inputValue: e.target.value,
            })
          }
        render(){
            const {message,labelValue} =this.props;
            var className = this.props.className.split(","); 
            return (
                this.props.message?<div className={className[0]?className[0]:""}>
                   <span>{labelValue}</span>
                    <ul>
                        {/* {this.props.message.} */}
                    </ul>
                   {/* <span>{message?dealNumber(message):"0.00"}</span> */}
                    {/* <span className="text_field_remind"></span> */}
              </div>:<div className={className[0]?className[0]:""}>{this.props.defaultValue}</div>
            )
        }
    }
    export default ApplicationsState;
    