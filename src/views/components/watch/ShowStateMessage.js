/** 
     * @author xuesong
     * @param ShowStateMessage 组件  card头里面类型
     */
    import React, { Component } from 'react';
    import LangPack from '../../../langPack';
    class ShowStateMessage extends Component {
        state={
        }
        
        render(){
            var message;
            var className = this.props.className.split(","); 
            console.log(this.props.defaultValue)
            if(this.props.message===null){
                message=this.props.defaultValue;
            }else if(this.props.message===undefined){
                message=this.props.defaultValue;
            }else if(this.props.message===""){
                message=this.props.defaultValue;
            }else{
                for(var i in LangPack[this.props.thisKey]){
                    if(this.props.message===i){
                        message=LangPack[this.props.thisKey][i]
                    }
                    }
            }
           
            return (
                <div className={className[0]?className[0]:""}>
                  {message}
                </div>
            )
        }
    }
    export default ShowStateMessage;
    