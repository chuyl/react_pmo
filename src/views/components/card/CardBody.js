/** 
     * @author xuesong
     * @param CardBody 组件  card内容
     */
    import React, { Component } from 'react';
    import ComponentsList from '../../components/composite/ComponentsList'
    class CardBody extends Component {
        state={
        }
        /** 
	 * @time 2018-09-27
	 * @author xuesong
	 * @param handleChildChange 函数 出来Link返回的数据 
	 */
    handleClick=(formData)=>{
      var newState = {
          add_button:formData.add_button,
          data:formData.data,
          dataId:formData.dataId,
          form_temp_name:formData.form_temp_name
      }
      this.props.fiveChange(newState);//回调函数传递参数给父组件
  }
  examine_bool_message=(state)=>{
    this.props.examine_bool_fifth(state)
    // console.log(state)
}
        render(){
            return (
                <div className={"card-body"}>
                <ComponentsList key={this.props.cardIndex} cardIndex={this.props.cardIndex} footState={this.props.footState} fourChange = {this.handleClick} examine_bool_fourth={this.examine_bool_message} componentslist =  {this.props.addButton} componentsdata={this.props.message}></ComponentsList > 
          </div>
            )
        }
    }
    export default CardBody;
    