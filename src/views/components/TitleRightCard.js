/** 
     * @author xuesong
     * @param TitleRightCard 组件  label+message
     */
    import React, { Component } from 'react';

    class TitleRightCard extends Component {
        render(){
            const {message} =this.props;
            console.log(message)
            return (
                <div className="title_card_right">
                    {/* <label>{labelValue}</label> */}
                   {/* <span>{message}</span> */}
                    {/* <span className="text_field_remind"></span> */}
              </div>
            )
        }
    }
    export default TitleRightCard;
    