/** 
     * @author xuesong
     * @param CardHead 组件  card头
     */
    import React, { Component } from 'react';
    import ComponentsList from './ComponentsList'
    // import {getData,getRouter} from '../../utils/helpers'
    // import CardItem from './CardItem'
    class CardHead extends Component {
        state={
            add_button:[]
        }
        componentDidMount(){
        this.fetchHeadContent()
        }
        //获取组件中add_button里面的编辑视图
        fetchHeadContent() {
            var json_view=JSON.parse(sessionStorage.view)
            for(var i=0;i<json_view.length;i++){
                if(json_view[i].name===this.props.addButton){
                    
                    var json_message=json_view[i].data;
                    this.setState({
                        add_button: json_message["form-list"],
                    })

                }
            }
            // var cb = (route, message, arg) => {
            //     var json_message=JSON.parse(message.data);
            //     if (message.error === 0) {
            //         this.setState({
            //             add_button: json_message["form-list"],
            //         })

            //     }
               
            // }
            // getData(getRouter("json_manage_name"), { name:this.props.addButton,token:sessionStorage.token }, cb, {});
        }
        render(){
            // const {id,disabled,inputValue,onClick,labelValue,name} =this.props;
            return (
                <div className="card-head">
                    <ComponentsList  componentslist =  {this.state.add_button} componentsdata={this.props.message}></ComponentsList > 
              </div>
            )
        }
    }
    export default CardHead;
    