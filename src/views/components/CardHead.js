/** 
     * @author xuesong
     * @param CardHead 组件  card头
     */
    import React, { Component } from 'react';
    import ComponentsList from './ComponentsList'
    import {getData,getRouter} from '../../utils/helpers'
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
            var cb = (route, message, arg) => {
                var json_message=JSON.parse(message.data);
                if (message.error === 0) {
                    this.setState({
                        add_button: json_message["form-list"],
                    })

                }
               
            }
            getData(getRouter("view_json_name"), { name:this.props.addButton,token:sessionStorage.token }, cb, {});
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
    