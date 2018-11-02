/** 
     * @author xuesong
     * @param TextArea 组件  label+textarea
     */
    import React, { Component } from 'react';

    class TextArea extends Component {
        state={
            inputValue:" "
        }
        handleChange(e) {
            this.setState({
                inputValue: e.target.value,
            })
          }
        render(){
            const {id,inputValue,onClick,labelValue} =this.props;
            return (
                <div className="text_field_div">
                    <label className="search_info_list_label">{labelValue}</label>
                    <textarea  value={this.state.inputValue===" "?inputValue:this.state.inputValue} rows="3" cols="30" className={"textarea_input"} onClick={onClick}  onChange={this.handleChange.bind(this)}  id={id}>
                        
                    </textarea>
                    {/* <span className="text_field_remind"></span> */}
              </div>
            )
        }
    }
    export default TextArea;
    