/** 
     * @author xuesong
     * @param LoopCardGroup 组件  label+message
     */
    import React, { Component } from 'react';
    import {dealNumber} from '../../utils/helpers'
    class LoopCardGroup extends Component {
        render(){
            const {message} =this.props;
            return (
              
                message?message.map((message,index) => {
							return (<div key={index}>
                                <div className="label_message">
                                        <label> 会议室{index+1}
                                        </label>
                                        <span>{message.total_price?dealNumber(message.total_price):"0.00"}</span>
                            </div>
                           
                            </div>)}):""
            )
        }
    }
    export default LoopCardGroup;
    