/** 
     * @author xuesong
     * @param CardGroup 组件  具有增加/删除功能的card
     */
    import React, { Component } from 'react';
    import AddDelCard from './AddDelCard';
    import AddCard from './AddCard';
    import PropTypes from 'prop-types';
    class CardGroup extends Component {
        state = {
            addCondition: [],
            //讲师安排获取数据list
            data_group: [],  //获取到的数据
            view_list:this.props.beforeApiUri,    //获取到的视图
            card_list:[],    //点击新增
            add_card_state:false
        }
        // 子组件声明自己需要使用 context
            static contextTypes = {
                color:PropTypes.string,
                callback:PropTypes.func,
            }
        componentWillMount() {
            console.log(this.props.beforeApiUri)
            // this.props.beforeApiUri.map((view_list)=>{
            //     return (this.state.addCondition.push(
            //         <AddDelCard
            //             key={`executeHandle${this.state.addCondition.length}.lenght+1`}
            //             removeDefault={this.removeEvent.bind(this)}
            //             index={this.state.addCondition.length}
            //             cardList={this.props.addButton}>
            //         </AddDelCard>
            //     ))
                 
            // })
            // this.setState({
            //     addCondition: this.state.addCondition,
            // })
        }
        // componentWillMount(){
        //     console.log(this.props.beforeApiUri)
        // }
        // componentDidMount(){
        //     var addCondition=this.state.addCondition;
        //     this.callback(addCondition)
        //   //  this.props.onSubmit(addCondition)
        // }
        // componentDidUpdate(){
        //     this.props.beforeApiUri.map((view_list)=>{
        //         return (this.state.addCondition.push(
        //             <AddDelCard
        //                 key={`executeHandle${this.state.addCondition.length}.lenght+1`}
        //                 removeDefault={this.removeEvent.bind(this)}
        //                 index={this.state.addCondition.length}
        //                 cardList={this.props.addButton}>
        //             </AddDelCard>
        //         ))
                 
        //     })
        //     this.render()
        //     // this.setState({
        //     //     addCondition: this.state.addCondition,
        //     // })
        // }
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
            console.log(this.state.addButton)
            return (
                <div>
                    <p className="card_title">{this.props.title}</p>
                    <ul id = {this.props.idName}>
                        {/* {
                            this.state.addCondition.map((item, index) => {
                                        return item;
                                    })
                        }         */}
                         {
                            this.props.beforeApiUri?this.props.beforeApiUri.map((view_list)=>{
                            return  <AddDelCard
                                        key={view_list.id}
                                        removeDefault={this.removeEvent.bind(this)}
                                        index={this.state.addCondition.length}
                                        cardList={this.props.addButton}
                                        messageList={view_list}
                                        >
                                         
                                    </AddDelCard>
                    
                            
                            
                        }):""
                         }
                    </ul>    
                    <button className="add_card_btn"  
                        onClick={() => {
                            this.setState({
                                add_card_state: true
                            })
                            // this.state.addCondition.push(
                            //             <AddDelCard 
                            //                 key={`executeHandle${this.state.addCondition.length}.lenght+1`}
                            //                 remove={this.removeEvent.bind(this)}
                            //                 index={this.state.addCondition.length}
                            //                 cardList={this.props.addButton}
                            //                 // getAddCondition={ this.getAddConditionEvent.bind(this)}
                            //                 conditionAction={this.state.conditionAction}
                            //             >
                            //             </AddDelCard>
                            //         )
                            //         this.setState({
                            //             addCondition: this.state.addCondition,
                            //         })
                                   
                                }}
                            >{this.props.addButtonTitle}</button>
                              
                            {/* <button  onClick = { cb(this.state.addCondition) }>点击</button> */}
                            <div className={this.state.add_card_state ? "add_info_list open" : "add_info_list"}>
                                <div className="paper_card_title">
                                    <div onClick={() => {
                                            this.setState({
                                                add_card_state: false
                                            })
                                        }} className="return_btn"></div>
                                    {this.props.addButtonTitle}
                                </div>
                                <div className="selected_scroll_div">
                            
                                <AddCard 
                                            key={`executeHandle${this.state.addCondition.length}.lenght+1`}
                                            remove={this.removeEvent.bind(this)}
                                            index={this.state.addCondition.length}
                                            cardList={this.props.addButton}
                                            // getAddCondition={ this.getAddConditionEvent.bind(this)}
                                            conditionAction={this.state.conditionAction}
                                        >
                                        </AddCard>
                                {/* <button className="hold_btn"
                                    onClick={(e) => {
                                    
                                    }}
                                >保存</button> */}
                    </div>
                </div>  
                </div>
            )
        }
    }
    
    export default CardGroup;
    