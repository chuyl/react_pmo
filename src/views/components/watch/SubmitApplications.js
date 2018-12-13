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
                  {/* 根据state显示button里面的文字 */}
                  <button></button>
              </div>:<div className={className[0]?className[0]:""}>{this.props.defaultValue}</div>
            )
        }
    }
    export default ApplicationsState;
    