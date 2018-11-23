/** 
     * @author xuesong
     * @param CardPage 组件  card的body 划分的结构
     */
    import React, { Component } from 'react';
    import ComponentsList from './ComponentsList'
    import {getData,getRouter} from '../../utils/helpers'
    // import CardItem from './CardItem'
    class CardPage extends Component {
        state={
            currentIndex:this.props.footState===""?0:this.props.footState,
            add_button:[]
        }
        componentWillMount(){
            this.fetchPageContent()
            }
        handleClick=(formData)=>{
          var newState = {
              add_button:formData.add_button,
              data:formData.data,
              dataId:formData.dataId,
              form_temp_name:formData.form_temp_name
          }
         
          this.props.threeChange(newState);//回调函数传递参数给父组件
      }
      componentDidUpdate(){
        const {index,footState,cardIndex}=this.props;
        if(cardIndex+","+index===cardIndex+","+footState){
            var id="card_page"+cardIndex+index;
            var dom = document.getElementById(id).classList;
             for(var i=0;i<dom.length;i++){
                 if(dom[i]==="move-in"){
                    setTimeout(function(){
                       dom.remove("move-in")
                    },300)
                 }
             }
           
        }
      }

   
    //获取组件中add_button里面的编辑视图
    fetchPageContent() {
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
            const {index,cardIndex}=this.props;
            return (
                <div id={"card_page"+cardIndex+index} className={this.props.footState===""?this.props.index===0?"card-page move-out active" : "card-page":this.props.footState===this.props.index?"card-page active move-in" : "card-page"}>
                    <ComponentsList  twoChange = {this.handleClick}  componentslist =  {this.state.add_button} componentsdata={this.props.message}></ComponentsList > 
              </div>
            )
        }
    }
    export default CardPage;
    