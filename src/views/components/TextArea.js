/** 
     * @author xuesong
     * @param TextArea 组件  label+textarea
     */
    import React, { Component } from 'react';

    class TextArea extends Component {
        state={
            inputValue:this.props.inputValue
        }
        handleChange(e) {
            this.setState({
                inputValue: e.target.value,
            })
          }
        render(){
            const {id,disabled,inputValue,onClick,labelValue} =this.props;
            return (
                <div className="text_field_div">
                    <label className="search_info_list_label">{labelValue}</label>
                    <textarea  className={"text_field_input"} onClick={onClick}  onChange={this.handleChange.bind(this)} disabled={disabled} id={id}>
                        {inputValue}
                    </textarea>
                    {/* <span className="text_field_remind"></span> */}
              </div>
            )
        }
    }
    export default TextArea;
    