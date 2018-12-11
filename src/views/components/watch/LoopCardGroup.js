/** 
     * @author xuesong
     * @param LoopCardGroup 组件  label+message
     */
    import React, { Component } from 'react';
    class LoopCardGroup extends Component {
            add_lists_components = () => {
            var components = [];
            // var labelValue = this.props.labelValue.split(",");
            var beforeApiUri = this.props.beforeApiUri.split(",");
            var list = beforeApiUri;
            for(var m = 0;m<this.props.message.length;m++){
              
                    components.push(
                            <div key={m} className="label_message">
                            
                              <label>{this.props.message[m][list[0]]}</label>
                              {list.length>1?<span>{this.props.message[m][list[1]]}</span>:""}
                              {/* <span className="text_field_remind"></span> */}
                          </div>
                     )
                
                
            }
            
            return components
        }
        render(){
            return (
                 <div>{this.props.message===""?"列表":this.add_lists_components()}</div>
              )
                
                
        }
    }
    export default LoopCardGroup;
    