/** 
     * @author xuesong
     * @param CardTitleItem 组件  card头里面类型
     */
    import React, { Component } from 'react';

    class CardTitleItem extends Component {
        state={
        }
        handleStateClick=()=>{
            var newState = {
                cardTitleItem:this.props.index
            }
            this.props.handleCardTitleItem(newState);//回调函数传递参数给父组件
        }
        render(){
            return (
                <div onClick =  {this.handleStateClick} className="card-item">
                   {this.props.message} 
                </div>
            )
        }
    }
    export default CardTitleItem;
    