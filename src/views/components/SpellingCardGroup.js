/** 
     * @author xuesong
     * @param SpellingCardGroup 组件  label+message
     */
    import React, { Component } from 'react';

    class SpellingCardGroup extends Component {
        render(){
            const {message} =this.props;
            return (
              
                message.map((message,index) => {
							return (<div key={index}>
                                <div className="label_message">
                                        <label> {message.teacher_name_name}-{message.teacher_duty_name}-{message.teacher_lecture_fee?message.teacher_lecture_fee:0}
                                        </label>
                                        <span>{message.teacher_lecture_fee?message.teacher_lecture_fee:0}</span>
                            </div>
                            <div className="label_message">
                                        <label> {message.teacher_name_name}-所得税
                                        </label>
                                        <span>{message.teacher_income_tax?message.teacher_income_tax:0}</span>
                            </div>
                            </div>)})
            )
        }
    }
    export default SpellingCardGroup;
    