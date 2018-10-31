/** 
     * @author xuesong
     * @param CardLeftBody 组件  label+message
     */
    import React, { Component } from 'react';

    class CardRightBody extends Component {
        render(){
            const {message} =this.props;
            return (
                <p className="card_right">
                  {message}
              </p>
            )
        }
    }
    export default CardRightBody;
    