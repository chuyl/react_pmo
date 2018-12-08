/** 
     * @author xuesong
     * @param TitleMessage 组件  label
     */
    import React, { Component } from 'react';
    import {dealNumber} from '../../../utils/helpers'
    class TitleMessage extends Component {
        state={
            inputValue:this.props.inputValue
        }
        handleChange(e) {
            this.setState({
                inputValue: e.target.value,
            })
          }
        render(){
            const {labelValue} =this.props;
            
            return (
                <div className="label_title_message">
                    <label>{labelValue}</label>
              </div>
            )
        }
    }
    export default TitleMessage;
    