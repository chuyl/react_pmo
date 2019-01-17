/** 
     * @author xuesong
     * @param CardItem 组件  card头里面类型
     */
    import React, { Component } from 'react';
    import {timestampToTime} from '../../../utils/helpers'
    class CardItemTime extends Component {
        state={
        }
        
        render(){
            return (
                
                <div className="card-item">
                   {this.props.message?timestampToTime(this.props.message):this.props.defaultValue} 
                </div>
            )
        }
    }
    export default CardItemTime;
    