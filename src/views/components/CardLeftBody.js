/** 
     * @author xuesong
     * @param CardLeftBody 组件  label+message
     */
    import React, { Component } from 'react';

    class CardLeftBody extends Component {
        render(){
            const {message} =this.props;
            return (
                <p className="card_left">
                  {message}
              </p>
            )
        }
    }
    export default CardLeftBody;
    