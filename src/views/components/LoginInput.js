/** 
     * @author xuesong
     * @param LoginInput 组件  label+input
     */
    import React, { Component } from 'react';

    class LoginInput extends Component {
        state={
            inputValue:this.props.inputValue
        }
        handleChange(e) {
            this.setState({
                inputValue: e.target.value,
            })
          }
        render(){
            const {id,disabled,inputValue,onClick,labelValue,name,type,onChange} =this.props;
            return (
                <div>
                    <label>{labelValue}</label>
                    <input  type={type} onClick={onClick} name={name} defaultValue={inputValue} onChange={onChange} disabled={disabled} id={id}/>
                    {/* <span className="text_field_remind"></span> */}
              </div>
            )
        }
    }
    export default LoginInput;
    