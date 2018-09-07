/** 
     * @author xuesong
     * @param LinkCard 组件  label+button
     */
    import React, { Component } from 'react';
    import ComponentsList from './ComponentsList'
    import PropTypes from 'prop-types';
    class LinkCard extends Component {
        state =  {
            linkState:false,
            add_button:[],
            groupContextList:[],
            data_group: [],
            linkpage:this.props.linkpage
        }
        // 父组件声明自己支持 context
        static childContextTypes = {
            color:PropTypes.string,
            callback:PropTypes.func,
        }

        // 父组件提供一个函数，用来返回相应的 context 对象
        getChildContext(){
            return{
                color:"red",
                callback:this.callback.bind(this)
            }
        }
        /** 
         * @author xuesong
         * @param callback 函数名  接收子组件传来的值
         */
        callback(msg){
            const childContext = msg;
            // this.setState({
            //     childContext:msg
            // })
          console.log(childContext)
        }
         /** 
         * @author xuesong
         * @param fetchData 函数名  获取本地编辑项目json
         */
        fetchData() {
            fetch('../json/'+this.state.linkpage+'.json')
                .then(response => response.json())
                .then(data => {
                   console.log(data.data["form-list"])
                    this.setState({
                        add_button: data.data["form-list"],
                    })
                    
                })
                .catch(e => {
                    console.log("error")
                })
        }
        /** 
        * @author xuesong
        * @param stringifyMultipleButton 函数名 循环输出动态数组值
        */
       stringifyMultipleButton(list_message, index, arr_list) {
        var key_name = [];
        var value = [];
        for (var i = 0; i < list_message.length; i++) {
            value.push(list_message[i].id_name)
            key_name.push(document.getElementById(list_message[i].id_name + index).innerHTML === "-选择-" ? "" : document.getElementById(list_message[i].id_name + index).innerHTML || document.getElementById(list_message[i].id_name + index).value)
        }
        var obj = {};
        for (var j = 0; j < value.length; j++) {
            obj[value[j]] = key_name[j];
        }

        //var data = JSON.stringify(obj, value);//将对象转换成json
        arr_list.push(obj);
        console.log(arr_list);

    }
        render(){
            const {id, title,label,button} =this.props;
            return (
                <div>
                    <div className="label_button_card">
                        <div className="label_button_title">{title}</div>
                        <span  className="label_button_label">{label}</span>
                        <button id={id}  className="label_button_button button_md" onClick={()=>{
                            this.setState({
                                linkState:true
                            })
                            this.fetchData();
                            } }
                            >{button}
                        </button>    
                    </div>
                    <div className={this.state.linkState ? "add_info_list open" : "add_info_list"}>
                    <div className="paper_card_title">
                        <div onClick={() => {
                            this.setState({
                                linkState: false
                            })
                           
                        }} className="return_btn"></div>
                        {button}
                    </div>
                    <div className="selected_scroll_div">
                        <ComponentsList componentslist =  {this.state.add_button} ></ComponentsList > 
                        <button className="hold_btn"
                                onClick={() => {
                                    for(var m = 0;m<this.state.add_button.length;m++){
                                        if(this.state.add_button[m].type_name==="CardGroup"){
                                            // console.log(this.state.childContext)
                                        }
                                    }
                                    console.log(this.state.add_button)
                                    this.setState({
                                        data_group: [],
                                    })
                                    // for (var i = 0; i < this.state.childContext.length; i++) {
                                    //     if (this.state.childContext[i] !== "") {
                                    //      //   this.stringifyMultipleButton(this.state.teacher_card_list.teacher_card, i, this.state.teacher_data_group)
                                    //     }
                                    // }
                                }}
    
                            >保存</button>

                    </div>
                </div>
                </div>
            )
        }
    }
    
    export default LinkCard;
    