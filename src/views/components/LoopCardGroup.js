/** 
     * @author xuesong
     * @param LoopCardGroup 组件  label+message
     */
    import React, { Component } from 'react';
    class LoopCardGroup extends Component {
        render(){
            const {message} =this.props;
            return (
                message?message.map((list,message,index) => {
					return (<div key={index}>
                                <div className="label_message">
                                    <label> 
                                        {/* {message[list[0]]} */}
                                    </label>
                                    <span>{message.total_price}</span>
                                </div>
                             </div>)}):"列表"
            )
        }
    }
    export default LoopCardGroup;
    