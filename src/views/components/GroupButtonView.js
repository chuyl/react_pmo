/** 
     * @time 2018-09-27 
     * @author xuesong
     * @param GroupButtonView 组件  视图管理中group组件
     */
    import React, { Component } from 'react';

    class GroupButtonView extends Component {
        /** 
     * @time 2018-11-09 
     * @author xuesong
     * @param editViewButton 函数  group修改视图按钮
     */
    editViewButton=()=>{
        var newState={
            name:"add_button",
            title:"add_button_title",
            view:this.props.editNameButton,
            addButtonTitle:this.props.addButtonTitle
        }
        this.props.editViewClickButton(newState)
    }
       /** 
     * @time 2018-11-09 
     * @author xuesong
     * @param descriptViewButton 函数  group展示视图按钮
     */
    descriptViewButton=()=>{
        var newState={
            name:"descript",
            title:"descript_title",
            view:this.props.descriptNameButton,
            addButtonTitle:this.props.descriptTitle
        }
        this.props.descriptViewClickButton(newState)
    }
        render(){
            
            const {descriptTitle,addButtonTitle}=this.props;
            return (
                <div>
                     <p onClick={this.descriptViewButton}>
                         {descriptTitle}
                     </p>
                     <p onClick={this.editViewButton}>
                         {addButtonTitle}
                     </p>
                </div>
            )
        }
    }
    export default GroupButtonView;
    