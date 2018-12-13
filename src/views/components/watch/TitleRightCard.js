/** 
     * @author xuesong
     * @param TitleRightCard 组件  label+message
     */
    import React, { Component } from 'react';

    class TitleRightCard extends Component {
        render(){
            const {message,defaultValue} =this.props;
            return (
                <div className="title_card_right">
                  <p>{message?message:defaultValue}</p>
                    {/* <label>{labelValue}</label> */}
                   {/* <span>{message}</span> */}
                    {/* <span className="text_field_remind"></span> */}
              </div>
            )
        }
    }
    export default TitleRightCard;
    