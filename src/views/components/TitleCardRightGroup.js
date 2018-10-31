/** 
     * @author xuesong
     * @param TitleCardRightGroup 组件  label+message
     */
    import React, { Component } from 'react';

    class TitleCardRightGroup extends Component {
        render(){
            const {message,beforeApiUri} =this.props;
            console.log(message)
            return (
                <div className="title_card_right">
                    <p>{message[0][beforeApiUri]}等</p>
                </div>
            )
        }
    }
    export default TitleCardRightGroup;
    