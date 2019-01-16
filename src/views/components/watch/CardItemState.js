/** 
     * @author xuesong
     * @param CardItemState 组件  card头里面类型
     */
    import React, { Component } from 'react';

    class CardItemState extends Component {
        state={
        }
        
        render(){
            return (
                <div className="card-item">
                   {this.props.message?this.props.message===0?"未提交"
                   :this.props.message===-1?"作废"
                   :this.props.message===1?"代审核"
                   :this.props.message===2?"已通过":this.props.message
                   :this.props.defaultValue} 
                </div>
            )
        }
    }
    export default CardItemState;
    