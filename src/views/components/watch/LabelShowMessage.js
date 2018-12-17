/** 
 *   *@time 2018-10-17
     * @author xuesong
     * @param LabelShowMessage 组件  视图传入标题
     */
    import React, { Component } from 'react';

    class LabelShowMessage extends Component {
       
        render(){
            const {message,labelValue,defaultValue} =this.props;
            var className = this.props.className.split(",");
           
            return (
                message?
                <div className={className[0]?className[0]:""}>
               
                  {labelValue}
                    {/* <span className="text_field_remind"></span> */}
              </div>:<div>{defaultValue}</div>
            )
        }
    }
    export default LabelShowMessage;