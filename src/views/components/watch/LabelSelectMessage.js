/** 
 *   *@time 2018-10-17
     * @author xuesong
     * @param LabelSelectMessage 组件  label+message select——name——id组件的只读模式
     */
    import React, { Component } from 'react';

    class LabelSelectMessage extends Component {
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
                <div>
                    <label>{labelValue}</label>
                   <span>{message}</span>
                    {/* <span className="text_field_remind"></span> */}
              </div>
            )
        }
    }
    export default LabelSelectMessage;