/** 
     * @author xuesong
     * @param LabelChildMessage 组件  label+message
     */
    import React, { Component } from 'react';
    import {dealNumber} from '../../utils/helpers'
    class LabelChildMessage extends Component {
        state={
            inputValue:this.props.inputValue
        }
        add_lists_components = () => {
            var components = [];
            var list = this.props.beforeApiUri;
            for (var i = 0; i <list.length; i++) {
                components.push(
                        <div key={i} className="label_message">
                          <label>{this.props.labelValue[i]}</label>
                          <span>{this.props.message[this.props.beforeApiUri[i]]?dealNumber(this.props.message[this.props.beforeApiUri[i]]):"0.00"}</span>
                          {/* <span className="text_field_remind"></span> */}
                      </div>
                 )
            }
            return components
        }
        render(){
            return (
                 <div>{this.add_lists_components()}</div>
              )
                
                
        }
    }
    export default LabelChildMessage;
    