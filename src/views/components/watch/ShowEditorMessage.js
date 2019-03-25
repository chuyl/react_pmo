/** 
     * @author xuesong
     * @param ShowEditorMessage 组件  label+message
     */
    import React, { Component } from 'react';

    class ShowEditorMessage extends Component {
        render(){
            // const {message,defaultValue} =this.props;
            var className = this.props.className.split(","); 
            var message;
            if(this.props.message===null){
                message=[];
            }else if(this.props.message===undefined){
                // message=this.props.defaultValue;
                message=[];
            }else if(this.props.message===""){
                message=[];
                // message=this.props.defaultValue;
            }else{
                message=this.props.message;
            }
            return (
                <div className={className[0]?className[0]:""}>
                  {this.props.views?this.props.defaultValue:message.map((message_list,index)=>{
                        return(
                            <div 
                                key={index}
                                id={"show_style_message"+index}
                                className={message_list.class}
                            >
                                {message_list.content.map((content,index)=>{
                                    return(
                                        content.type==="def"?<span className={content.type}>{content.text}</span>
                                        :content.type==="img"?<img  className={content.type} src={content.text}/>
                                        :<span key={index} className={content.type}>{content.text}</span>
                                        )
                                    })}
                                        {/* {message_list.content[0].text+message_list.class} */}
                            </div>
                                   
                                    
                            )
                        })}
                </div>
            )
        }
    }
    export default ShowEditorMessage;
    