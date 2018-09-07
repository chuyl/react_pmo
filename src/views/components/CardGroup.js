/** 
     * @author xuesong
     * @param CardGroup 组件  具有增加/删除功能的card
     */
    import React, { Component } from 'react';
    import AddCard from './AddCard';
    import PropTypes from 'prop-types';
    class CardGroup extends Component {
        state = {
            addCondition: [],
            //讲师安排获取数据list
            data_group: [],  //获取到的数据
            view_list:this.props.beforeApiUri,    //获取到的视图
            card_list:[],    //点击新增
        }
        // 子组件声明自己需要使用 context
            static contextTypes = {
                color:PropTypes.string,
                callback:PropTypes.func,
            }
        componentWillMount() {
            this.state.view_list.map((view_list)=>{
                return (this.state.addCondition.push(
                    <AddCard
                        key={`executeHandle${this.state.addCondition.length}.lenght+1`}
                        removeDefault={this.removeEvent.bind(this)}
                        index={this.state.addCondition.length}
                        cardList={this.props.addButton}>
                    </AddCard>
                ))
                 
            })
            this.setState({
                addCondition: this.state.addCondition,
            })
        }
        componentDidUpdate(){
            var addCondition=this.state.addCondition;
            this.callback(addCondition)
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
            // const cb = (msg) => {
            //     return () => {
            //         this.context.callback(msg);
            //     }
            // }
            return (
                <div>
                    <p className="card_title">{this.props.title}</p>
                    <ul id = {this.props.idName}>
                        {
                            this.state.addCondition.map((item, index) => {
                                        return item;
                                    })
                        }        
                    </ul>    
                    <button className="add_card_btn"  
                        onClick={() => {
                            this.state.addCondition.push(
                                        <AddCard 
                                            key={`executeHandle${this.state.addCondition.length}.lenght+1`}
                                            remove={this.removeEvent.bind(this)}
                                            index={this.state.addCondition.length}
                                            cardList={this.props.addButton}
                                            // getAddCondition={ this.getAddConditionEvent.bind(this)}
                                            conditionAction={this.state.conditionAction}
                                        >
                                        </AddCard>
                                    )
                                    this.setState({
                                        addCondition: this.state.addCondition,
                                    })
                                   
                                }}
                            >{this.props.addButtonTitle}</button>       
                            {/* <button  onClick = { cb(this.state.addCondition) }>点击</button> */}
                           
                </div>
            )
        }
    }
    
    export default CardGroup;
    