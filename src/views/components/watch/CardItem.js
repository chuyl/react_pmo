/** 
     * @author xuesong
     * @param CardItem 组件  card头里面类型
     */
    import React, { Component } from 'react';

    class CardItem extends Component {
        state={
        }
        
        render(){
            var message;
                if(this.props.message==null){
                    message=this.props.defaultValue;
                }else{
                    message=this.props.message;
                }
            
            return (
                
                <div className="card-item">
                  {message}
                   {/* {this.props.message?this.props.message===null?this.props.defaultValue:this.props.message:this.props.defaultValue}  */}
                </div>
            )
        }
    }
    export default CardItem;
    