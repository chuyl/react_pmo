/** 
     * @author xuesong
     * @param TextDatetime 组件  label+input+datetime-local
     */
    import React, { Component } from 'react';

    class TextDatetime extends Component {
        
        render(){
            var date = new Date();
            var seperator1 = "-";
            var year = date.getFullYear();
            var month = date.getMonth() + 1;
            var strDate = date.getDate();
            if (month >= 1 && month <= 9) {
                month = "0" + month;
            }
            if (strDate >= 0 && strDate <= 9) {
                strDate = "0" + strDate;
            }
            // var currentdate =this.props.inputValue===""? year + seperator1 + month + seperator1 + strDate+"T00:00":this.props.inputValue;
          
            const {id,disabled,inputValue,onChange,onClick,labelValue} =this.props;
            return (
                <div className="text_field_div">
                    <label className="search_info_list_label">{labelValue}</label>
               <input type={"datetime-local"} className={"text_field_input"} onClick={onClick} onChange={onChange} defaultValue={inputValue} disabled={disabled} id={id}/>
            </div>
            )
        }
    }
    export default TextDatetime;
    