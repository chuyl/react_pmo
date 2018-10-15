/** 
     * @author xuesong
     * @param CardGroup 组件  具有增加/删除功能的card
     */
    import React, { Component } from 'react';
    import AddCard from './AddCard';
    import DisTextField from './DisTextField'
    import PropTypes from 'prop-types';
    import Alert from './Alert'
    //import {LECTURERADD} from '../../enum'
    import {getData,getRouter} from '../../utils/helpers'
    class CardGroup extends Component {
        state = {
            addCondition: [],
            //讲师安排获取数据list
            data_group: [],  //获取到的数据
            view_list:this.props.beforeApiUri,    //获取到的视图
            card_list:[],    //点击新增
            add_card_state:false,
            conditionAction:[],
            alertState:false, //弹出框的状态
            alertMsg:"是否确定删除",
            thisViewList:[]   //当前card数据list
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
          	/** 
	 * @time 2018-10-11
	 * @author xuesong
	 * @param listGroup 函数 获取group列表
	 */
    listGroup(){
        var cb = (route, message, arg) => {
            if (message.code === 0) {
                this.setState({
                    view_list:message.data
                })
            }
        }
        console.log(this.props.isClick)
        //getData(getRouter(this.props.listButton), {id:this.props.isClick, token: "tnkGNc" }, cb, {});

    }
        	/** 
	 * @time 2018-10-11
	 * @author xuesong
	 * @param del_group_button 函数 出来Link返回的数据 
	 */
        del_group_button(id){
            var cb = (route, message, arg) => {
                if (message.code === 0) {
                    this.setState({
                        add_card_state:false,
                        alertState:false
                    })
                     this.listGroup()
                }
    
            }
            console.log(this.props.delButton)
           getData(getRouter(this.props.delButton), {id,id,token:"tnkGNc"}, cb, {});
        }
        /** 
	 * @time 2018-10-14
	 * @author xuesong
	 * @param cancelCallback 函数 弹出框取消按钮
	 */
        cancelCallback(msg){
            this.setState({
                alertState:false
            })
        }
         /** 
	 * @time 2018-10-14
	 * @author xuesong
	 * @param sureCallback 函数 弹出框取消按钮
	 */
    sureCallback(msg){
        this.del_group_button(this.state.thisViewList.id)
        
    }
        render() {
            return (
                <div>
                    <p className="card_title">{this.props.title}</p>
                    <ul id = {this.props.idName}>
                        {this.state.view_list?this.state.view_list.map((view_list,index)=>{
                            return  (
                                <li
                                  key={index}  className="card_info_list_card"
                                >
                                    {this.props.addButton.descript.map((card_list, index) => {
                                        return (
                                        <div key={index} style={{marginBottom:"-6px"}}>
                                            <DisTextField
                                                inputValue={view_list[card_list.id_name]!==null?view_list[card_list.id_name]:""} 
                                                labelValue={card_list.title} 
                                            />
                                        </div>)
                                    })}          
                                    {/* < ComponentsList componentslist =  {this.props.addButton.descript?this.props.addButton.descript:[]} componentsdata = {view_list} ></ComponentsList >  */}
                                    <button className="label_delete_button"
                                            onClick={()=>{
                                                this.setState({
                                                    alertState:true,
                                                    thisViewList:view_list
                                                })

                                                //this.del_group_button(view_list.id)
                                                console.log(view_list)
                                            }}
                                        // onClick={this.removeFunEvent.bind(this)}
                                    >删除</button>
                                    <button className="label_delete_button"
                                            onClick={() => {
                                                console.log(this.props.addButton)
                                                this.setState({
                                                    add_card_state: true,
                                                    conditionAction:view_list
                                                    
                                                })
                                                }}
                                    >编辑</button>
                                      
                                </li>
                            )
                        }):""
                         }
                    </ul>    
                    <div className={this.state.add_card_state ? "add_info_list open" : "add_info_list"}>
                        <div className="paper_card_title">
                            <div onClick={() => {
                                    this.setState({
                                        add_card_state: false
                                            })
                                        }} 
                                    className="return_btn">
                            </div>
                                {this.props.title}
                        </div>
                        <div className="selected_scroll_div">
                            <AddCard 
                                key={`executeHandle${this.state.addCondition.length}.lenght+1`}
                                remove={this.removeEvent.bind(this)}
                                index={this.state.addCondition.length}
                                cardList={this.props.addButton.add_button}
                                addButtonTitle ={this.props.addButtonTitle}
                                editButton = {this.props.editButton}
                                delButton = {this.props.delButton}
                                listButton = {this.props.listButton}
                                     // getAddCondition={ this.getAddConditionEvent.bind(this)}
                                conditionAction={this.state.conditionAction}       
                            >
                            </AddCard>    
                        </div>
                    </div>  
                    <Alert alertMsg = {this.state.alertMsg} sureCallback = {this.sureCallback.bind(this)} cancelCallback = { this.cancelCallback.bind(this) } alertState={this.state.alertState}/>
                </div>
            )
        }
    }
    
    export default CardGroup;
    