/** 
     * @author xuesong
     * @param CardItem 组件  card头里面类型
     */
    import React, { Component } from 'react';

    class CardItem extends Component {
        state={
        }
        
        render(){
            return (
                
                <div className="card-item">
                   {this.props.message?this.props.message:this.props.defaultValue} 
                </div>
            )
        }
    }
    export default CardItem;
    