/** 
     * @author xuesong
     * @param SpellingCardGroup 组件  label+message
     */
    import React, { Component } from 'react';

    class SpellingCardGroup extends Component {
        render(){
            const {message} =this.props;
            console.log(message)
            return (
              
                message.map((message,index) => {
							return (<div key={index}>
                                <div className="label_message">
                                        <label> {message.teacher_name_name}-{message.teacher_duty_name}-{message.teacher_lecture_fee}
                                        </label>
                                        <span>{message.teacher_lecture_fee}</span>
                            </div>
                            <div className="label_message">
                                        <label> {message.teacher_name_name}-所得税
                                        </label>
                                        <span>{message.teacher_income_tax}</span>
                            </div>
                            </div>)})
            )
        }
    }
    export default SpellingCardGroup;
    