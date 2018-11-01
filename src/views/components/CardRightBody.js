/** 
     * @author xuesong
     * @param CardLeftBody 组件  label+message
     */
    import React, { Component } from 'react';

    class CardRightBody extends Component {
        render(){
            const {message,beforeApiUri,defaultValue} =this.props;
            return (
                <p className="card_right">
                  {message?message:defaultValue}
              </p>
            )
        }
    }
    export default CardRightBody;
    