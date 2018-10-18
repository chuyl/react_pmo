/** 
     * @author xuesong
     * @param Invisible 组件  label+input 该组件不可见用于传给后端数据的
     */
    import React, { Component } from 'react';

    class Invisible extends Component {
        state={
            inputValue:this.props.inputValue
        }
        handleChange(e) {
            this.setState({
                inputValue: e.target.value,
            })
          }
        render(){
            const {id,disabled,inputValue,onClick,labelValue,name} =this.props;
            return (
                <div style={{display:"none"}} className="text_field_div">
                    <label className="search_info_list_label">{labelValue}</label>
                    <input type={"text"} className={"text_field_input"} onClick={onClick} name={name} defaultValue={inputValue} onChange={this.handleChange.bind(this)} disabled={disabled} id={id}/>
                    {/* <span className="text_field_remind"></span> */}
              </div>
            )
        }
    }
    export default Invisible;
    