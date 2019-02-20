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
            var message;
            if(this.props.message==null){
                message=this.props.defaultValue;
            }else if(this.props.message==undefined){
                message=this.props.defaultValue;
            }else if(this.props.message==""){
                message=this.props.defaultValue;
            }else{
                message=timestampToTime(this.props.message);
            }
            return (
                
                <div className="card-item">
                  {message}
                   {/* {this.props.message?timestampToTime(this.props.message):this.props.defaultValue}  */}
                </div>
            )
        }
    }
    export default CardItemTime;
    