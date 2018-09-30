/** 
     * @author xuesong
     * @param CardGroup 组件  具有增加/删除功能的card
     */
    import React, { Component } from 'react';
    import AddDelCard from './AddDelCard';
    import ComponentsList from './ComponentsList';
    import AddCard from './AddCard';
    import DisTextField from './DisTextField'
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
        
        render() {
            return (
                <div>
                    <p className="card_title">{this.props.title}</p>
                    <ul id = {this.props.idName}>
                        {this.props.beforeApiUri?this.props.beforeApiUri.map((view_list,index)=>{
                            return  (
                                <li
                                  key={index}  className="card_info_list_card"
                                >
                                
                                    {this.props.addButton.descript.map((card_list, index) => {
                                        return (
                                        <div key={index} style={{marginBottom:"-6px"}}>
                                            <DisTextField
                                                id={card_list.id_name+index} 
                                                inputValue={view_list[card_list.id_name]!==null?view_list[card_list.id_name]:""} 
                                                labelValue={card_list.title} 
                                            />
                                        </div>)
                                    })}          
                                    {/* < ComponentsList componentslist =  {this.props.addButton.descript?this.props.addButton.descript:[]} componentsdata = {view_list} ></ComponentsList >  */}
                                    <button className="label_delete_button"
                                            onClick={()=>{
                                                console.log(this.props.messageList)
                                            }}
                                        // onClick={this.removeFunEvent.bind(this)}
                                    >删除</button>
                                    <button className="label_delete_button"
                                        onClick={() => {
                                            console.log(this.props.messageList)
                                            // this.setState({
                                            //     edit_card_state: true
                                            // })
                                                }}
                                    >编辑</button>
                                </li>
                            )
                        }):""
                         }
                    </ul>    
                    {/* <button className="add_card_btn"  
                        onClick={() => {
                            this.setState({
                                add_card_state: true,
                                project_id:this.props.selectedInfo.id
                            })
                        }}
                    >
                        {this.props.addButtonTitle}
                    </button> */}
                            {/* <button  onClick = { cb(this.state.addCondition) }>点击</button> */}
                    {/* <div className={this.state.add_card_state ? "add_info_list open" : "add_info_list"}>
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
                                      
                                <button className="hold_btn"
                                    onClick={(e) => {
                                        this.project_index_add(this.props.addButton.add_button,this.props.addButton.before_api_uri)
                                    }}
                                >保存</button>
                    </div>
                </div>   */}
                </div>
            )
        }
    }
    
    export default CardGroup;
    