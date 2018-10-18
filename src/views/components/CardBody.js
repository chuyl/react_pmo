/** 
     * @author xuesong
     * @param CardBody 组件  card内容
     */
    import React, { Component } from 'react';

    class CardBody extends Component {
        state={
        }
        
        render(){
            return (
                <div className="card-item">
                   {this.props.message} 
                </div>
            )
        }
    }
    export default CardBody;
    