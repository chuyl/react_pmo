/** 
     * @author xuesong
     * @param LoopCardGroup 组件  label+message
     */
    import React, { Component } from 'react';
    import LangPack from '../../../langPack';
    class LoopCardGroup extends Component {
            add_lists_components = () => {
            var components = [];
            // var labelValue = this.props.labelValue.split(",");
            var beforeApiUri = this.props.beforeApiUri.split(",");
            var list = beforeApiUri;
            console.log(this.props.keywordTitle)
            for(var m = 0;m<this.props.message.length;m++){
              console.log(list[2])
                    components.push(
                             <div key={m} className="label_message">
                            {/* <div key={m}> */}
                              <label>{this.props.message[m][list[0]]}</label>
                              {list.length>1?<span>{this.props.message[m][list[1]]}</span>:""}
                              {list.length>2?<span>{list[2]==="state"?"":this.props.message[m][list[2]]}</span>:""}
                              {/* <span className="text_field_remind"></span> */}
                          </div>
                     )
                
                
            }
            
            return components
        }
        render(){
            return (
                 this.props.message===""?<div>列表</div>:this.add_lists_components()
              )
                
                
        }
    }
    export default LoopCardGroup;
    