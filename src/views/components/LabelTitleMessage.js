/** 
     * @author xuesong
     * @param LabelTitleMessage 组件  label+message
     */
    import React, { Component } from 'react';

    class LabelTitleMessage extends Component {
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
                <div className="label_title_message">
                    <label>{labelValue}</label>
                   <span>{message?message:0}</span>
                    {/* <span className="text_field_remind"></span> */}
              </div>
            )
        }
    }
    export default LabelTitleMessage;
    