/** 
     * @author xuesong
     * @param CardTitleItem 组件  card头里面类型
     */
    import React, { Component } from 'react';

    class CardTitleItem extends Component {
        handleStateClick=()=>{
           
            var newState = {
                cardTitleItem:this.props.index
            }
            
            this.props.handleCardTitleItem(newState);//回调函数传递参数给父组件
        }
        render(){
            return (
                <div onClick={()=>{
                    console.log(this.props.view)
                    this.props.view===true? "":this.handleStateClick()
                   
                }} className={this.props.footItemState===this.props.index?"card-item inverse active" : "card-item inverse"}>
                   {this.props.message} 
                </div>
            )
        }
    }
    export default CardTitleItem;
    