/** 
     * @author xuesong
     * @param CardPage 组件  card的body 划分的结构
     */
    import React, { Component } from 'react';
    import ComponentsList from './ComponentsList'
    // import CardItem from './CardItem'
    class CardPage extends Component {
        state={
            currentIndex:this.props.footState===""?0:this.props.footState
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
    //   componentWillMount(){
    //       console.log(this.props.index)
    //   }
    //   card_page_index( index ){
    //       console
    //     return index === this.props.index ? "card-page active" : "card-page"
    //   }
        render(){
            // const {id,disabled,inputValue,onClick,labelValue,name} =this.props;
            return (
                <div className={this.props.footState===""?this.props.index===0?"card-page active" : "card-page":this.props.footState===this.props.index?"card-page active move-in" : "card-page"}>
                    <ComponentsList  twoChange = {this.handleClick}  componentslist =  {this.props.addButton} componentsdata={this.props.message}></ComponentsList > 
              </div>
            )
        }
    }
    export default CardPage;
    