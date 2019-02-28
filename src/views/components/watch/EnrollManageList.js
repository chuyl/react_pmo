/** 
     * @author xuesong
     * @param EnrollManageList 组件  label+message
     */
    import React, { Component } from 'react';
    import ClickAlert from '../button/ClickAlert';
    class EnrollManageList extends Component {
      examine_bool_message=(state)=>{
    this.props.examine_bool_enroll(state)
    // console.log(state)
}
            add_lists_components = () => {
            var components = [];
            var beforeApiUri = this.props.beforeApiUri.split(",");
            var list = beforeApiUri;
            for(var m = 0;m<this.props.message.length;m++){
                    components.push(
                            <div className="enroll_manage">
                                <div className="enroll_manage_div" key={m}>
                                  <span>{this.props.message[m][list[0]]}</span>
                                  {list.length>1?<span>{this.props.message[m][list[1]]}</span>:""}
                                  {list.length>2?<span>{this.props.message[m][list[2]]}</span>:""}
                                
                                {/* {list.length>2?<span>{this.props.message[m][list[2]]==="1"?"待审核":this.props.message[m][list[2]]==="1"?"已通过":""}</span>:""} */}
                                </div>
                                <ClickAlert
                                    defaultValue={"同意"}
                                    // buttonMessage={form_list}
                                    dataId={this.props.message[m].id}
                                    // isClick={this.props.card_list.id}
                                    linkpage={"clazz_manage_enroll_is_agree"}
                                    examine_bool_first={this.examine_bool_message}/>
                                    <ClickAlert
                                    defaultValue={"删除"}
                                    // buttonMessage={form_list}
                                    dataId={this.props.message[m].id}
                                    // isClick={this.props.card_list.id}
                                    linkpage={"clazz_manage_enroll_is_refuse"}
                                    examine_bool_first={this.examine_bool_message}/>
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
    export default EnrollManageList;
    