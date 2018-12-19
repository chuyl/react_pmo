/** 
     * @author xuesong
     * @param TitleLeftCard 组件  label+message
     */
    import React, { Component } from 'react';

    class TitleLeftCard extends Component {
        render(){
            const {message,defaultValue} =this.props;
            return (
                <div className="card_left card_title_left">
                    {/* <label>{labelValue}</label> */}
                   <p>{message?message:defaultValue}</p>
                    {/* <span className="text_field_remind"></span> */}
              </div>
            )
        }
    }
    export default TitleLeftCard;
    