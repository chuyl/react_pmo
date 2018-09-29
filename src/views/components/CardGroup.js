/** 
     * @author xuesong
     * @param CardGroup 组件  具有增加/删除功能的card
     */
    import React, { Component } from 'react';
    import AddDelCard from './AddDelCard';
    import AddCard from './AddCard';
    import PropTypes from 'prop-types';
    //import {LECTURERADD} from '../../enum'
    //import {getData,getRouter} from '../../utils/helpers'
    class CardGroup extends Component {
        state = {
            addCondition: [],
            //讲师安排获取数据list
            data_group: [],  //获取到的数据
            view_list:this.props.beforeApiUri,    //获取到的视图
            card_list:[],    //点击新增
            add_card_state:false,
        }
        // 子组件声明自己需要使用 context
            static contextTypes = {
                color:PropTypes.string,
                callback:PropTypes.func,
            }
        /** 
         * @author xuesong
         * @param removeEvent 函数名 删除添加组件
         */
        removeEvent(value) {
            var addConditionValue = this.state.addCondition;
            addConditionValue[value] = '';
            this.setState({
                addCondition: this.state.addCondition
            })
        }
         /** 
        * @author xuesong
        * @param cb 函数名 子组件向父组件通信 
        */
       callback(msg){
            this.context.callback(msg);
        }
        project_index_add = (list_message)=>{
            var key_name = [];
            var value = [];
            for (var i = 0; i < list_message.length; i++) {
                if(list_message[i].type_name==="ListTextSearch"||list_message[i].type_name==="SelectList"){
                    // console.log(document.getElementById(list_message[i].id_name+"_name"))
                    value.push(list_message[i].id_name+"_name")
                    // value.push("token")
                    key_name.push(document.getElementById(list_message[i].id_name+"_name").innerHTML=== "-选择-" ? "" : document.getElementById(list_message[i].id_name+"_name").innerHTML)
                    value.push(list_message[i].id_name+"_id")
                          // value.push("token")
                    key_name.push(document.getElementById(list_message[i].id_name+"_id").innerHTML=== "-选择-" ? "" : document.getElementById(list_message[i].id_name+"_id").innerHTML || document.getElementById(list_message[i].id_name+"_id").value=== "-选择-" ? "" : document.getElementById(list_message[i].id_name+"_id").value)
                   }
                else{
                    value.push(list_message[i].id_name)
                  // value.push("token")
                    key_name.push(document.getElementById(list_message[i].id_name).innerHTML=== "-选择-" ? "" : document.getElementById(list_message[i].id_name).innerHTML || document.getElementById(list_message[i].id_name).value=== "-选择-" ? "" : document.getElementById(list_message[i].id_name).value)
                   //  key_name.push("tnkGNc")
                  }			 
            }     
            var obj = {};
            for(var j=0;j<value.length;j++){
                obj[value[j]] =key_name[j];
            }
            var cb = (route, message, arg) => {
                if (message.code === 0) {
                    this.setState({
                        card_state:false
                    })
                    this.listProject()
                }
    
            }
            console.log(obj)
          //  getData(getRouter(LECTURERADD), {data:obj}, cb, {});
        }
        render() {
            console.log(this.props.selectedInfo)
            return (
                <div>
                    <p className="card_title">{this.props.title}</p>
                    <ul id = {this.props.idName}>
                        { this.props.beforeApiUri?this.props.beforeApiUri.map((view_list,index)=>{
                            return  (
                                <AddDelCard
                                    key={index}
                                    removeDefault={this.removeEvent.bind(this)}
                                    index={this.state.addCondition.length}
                                    cardList={this.props.addButton}
                                    messageList={view_list}   
                                >
                                </AddDelCard>
                            )
                        }):""
                         }
                    </ul>    
                    <button className="add_card_btn"  
                        onClick={() => {
                            this.setState({
                                add_card_state: true,
                                project_id:this.props.selectedInfo.id
                            })
                            //console.log(this.props.selectedInfo.id)
                        }}
                    >
                        {this.props.addButtonTitle}
                    </button>
                            {/* <button  onClick = { cb(this.state.addCondition) }>点击</button> */}
                    <div className={this.state.add_card_state ? "add_info_list open" : "add_info_list"}>
                        <div className="paper_card_title">
                            <div    onClick={() => {
                                    this.setState({
                                        add_card_state: false
                                            })
                                        }} 
                                    className="return_btn">
                            </div>
                            {this.props.addButtonTitle}
                                </div>
                                <div className="selected_scroll_div">
                            
                                <AddCard 
                                            key={`executeHandle${this.state.addCondition.length}.lenght+1`}
                                            remove={this.removeEvent.bind(this)}
                                            index={this.state.addCondition.length}
                                            cardList={this.props.addButton.add_button}
                                            // getAddCondition={ this.getAddConditionEvent.bind(this)}
                                            conditionAction={this.state.conditionAction}
                                        >
                                        </AddCard>
                                        {/* 添加讲师安排按钮 */}
                                <button className="hold_btn"
                                    onClick={(e) => {
                                        this.project_index_add(this.props.addButton.add_button)
                                    // console.log(this.props.addButton)
                                    }}
                                >保存</button>
                    </div>
                </div>  
                </div>
            )
        }
    }
    
    export default CardGroup;
    