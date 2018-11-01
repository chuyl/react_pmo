/** 
     * @author xuesong
     * @param LabelTotalMessage 组件  label+message
     */
    import React, { Component } from 'react';

    class LabelTotalMessage extends Component {
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
            return (
                <div className="label_total_message">
                    <label>{labelValue}</label>
                   <span>{message?message:0}</span>
                    {/* <span className="text_field_remind"></span> */}
              </div>
            )
        }
    }
    export default LabelTotalMessage;
    