/** 
     * @author xuesong
     * @param TextField 组件  label+input
     */
    import React, { Component } from 'react';

    class DisTextField extends Component {
        state={
            inputValue:this.props.inputValue
        }
      
        render(){
            const {id,inputValue,labelValue,name,index} =this.props;
            return (
                <div className="text_field_div">
                    <label className="search_info_list_label">{labelValue}</label>
                    <input type={"text"} className={"text_field_input"} name={name} defaultValue={inputValue} disabled={true} id={id}/>
                    {/* <span className="text_field_remind"></span> */}
              </div>
            )
        }
    }
    export default DisTextField;
    