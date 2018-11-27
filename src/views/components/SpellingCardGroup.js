/** 
     * @author xuesong
     * @param SpellingCardGroup 组件  label+message
     */
    import React, { Component } from 'react';
    import {dealNumber} from '../../utils/helpers'
    class SpellingCardGroup extends Component {
        render(){
            const {message} =this.props;
            return (
             
                message?message.map((message,index) => {
							return (<div key={index}>
                                <div className="label_message">
                                        <label> {message.teacher_name_name}-{message.teacher_duty_name}-{message.teacher_lecture_fee?message.teacher_lecture_fee:0}
                                        </label>
                                        <span>{message.teacher_lecture_fee?dealNumber(message.teacher_lecture_fee):"0.00"}</span>
                            </div>
                            <div className="label_message">
                                        <label> {message.teacher_name_name}-所得税
                                        </label>
                                        <span>{message.teacher_income_tax?dealNumber(message.teacher_income_tax):"0.00"}</span>
                            </div>
                            </div>)}):
                            <div>
                            讲师成本
                            </div>
            )
        }
    }
    export default SpellingCardGroup;
    