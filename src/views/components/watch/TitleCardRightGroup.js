/** 
     * @author xuesong
     * @param TitleCardRightGroup 组件  label+message
     */
    import React, { Component } from 'react';

    class TitleCardRightGroup extends Component {
        render(){
            const {message,beforeApiUri,defaultValue} =this.props;
            return (
                <div className="title_card_right">
                   {message.length>0? <p>{message[0][beforeApiUri]}等</p>:defaultValue}
                </div>
            )
        }
    }
    export default TitleCardRightGroup;
    