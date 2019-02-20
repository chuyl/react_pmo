/** 
     * @author xuesong
     * @param ShowMessage 组件  label+message
     */
    import React, { Component } from 'react';

    class ShowMessage extends Component {
        render(){
            // const {message,defaultValue} =this.props;
            var className = this.props.className.split(","); 
            var message;
            if(this.props.message===null){
                message=this.props.defaultValue;
            }else if(this.props.message===undefined){
                message=this.props.defaultValue;
            }else if(this.props.message===""){
                message=this.props.defaultValue;
            }else{
                message=this.props.message;
            }
            return (
                <div className={className[0]?className[0]:""}>
                  {message}
                </div>
            )
        }
    }
    export default ShowMessage;
    