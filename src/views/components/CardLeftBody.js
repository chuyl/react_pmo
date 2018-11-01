/** 
     * @author xuesong
     * @param CardLeftBody 组件  label+message
     */
    import React, { Component } from 'react';

    class CardLeftBody extends Component {
        render(){
            const {message,defaultValue} =this.props;
            return (
                <p className="card_left">
                  {message?message:defaultValue}
              </p>
            )
        }
    }
    export default CardLeftBody;
    