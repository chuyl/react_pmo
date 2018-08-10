/** 
     * @author xuesong
     * @param TextDatetime 组件  label+input+datetime-local
     */
    import React, { Component } from 'react';

    class TextDatetime extends Component {
        
        render(){
            const {id,disabled,inputValue,onChange,onClick,labelValue} =this.props;
            return (
                <div>
                    <label>{labelValue}</label>
               <input type={"datetime-local"} className={"className"} onClick={onClick} onChange={onChange} defaultValue={inputValue} disabled={disabled} id={id}/>
            </div>
            )
        }
    }
    export default TextDatetime;
    