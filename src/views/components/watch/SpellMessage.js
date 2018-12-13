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
            // var className = this.props.className.split(",");
            var list = beforeApiUri;
            for (var i = 0; i <list.length; i++) {
                components.push(
                       
                           <span key={i}>
                           {/* {labelValue[i]}: */}
                           {this.props.message[list[i]]}{i===list.length-1?"":"/"}</span>
                      
                 )
            }
            return components
        }
        render(){
            console.log(this.props.className)
            var className = this.props.className.split(",");
            return (
                 <div className={className[0]?className[0]:""}>{this.props.message?this.add_lists_components():this.props.defaultValue}</div>
              )
                
                
        }
    }
    export default SpellMessage;
    