/** 
     * @author xuesong
     * @param SpellMessage 组件  拼接多个字段
     */
    import React, { Component } from 'react';
    // import {dealNumber} from '../../../utils/helpers'
    class SpellMessage extends Component {
        add_lists_components = () => {
            var components = [];
            var labelValue = this.props.labelValue.split(",");
            var beforeApiUri = this.props.beforeApiUri.split(",");
            var className = this.props.className.split(",");
            var list = beforeApiUri;
            for (var i = 0; i <list.length; i++) {
                components.push(
                       <div className={className[1]?className[1]:""}  key={i}>
                           <div className={className[3]?className[3]:""}>
                                {this.props.message[list[i]]>9999?this.props.message[list[i]]/10000+"万":this.props.message[list[i]]}
                           </div>
                           <div className={className[2]?className[2]:""}>{labelValue[i]}</div>
                           
                        </div>
                 )
            }
            return components
        }
        render(){
            var className = this.props.className.split(",");
            return (
                 <div className={className[0]?className[0]:""}>{this.props.message?this.add_lists_components():this.props.defaultValue}</div>
              )
                
                
        }
    }
    export default SpellMessage;
    