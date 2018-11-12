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
            name:"add_button"
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
            name:"descript"
        }
        this.props.descriptViewClickButton(newState)
    }
        render(){
            const {title}=this.props;
            return (
                <div>
                     <p onClick={this.descriptViewButton}>
                         {"展示"+title}
                     </p>
                     <p onClick={this.editViewButton}>
                         {"修改"+title}
                     </p>
                </div>
            )
        }
    }
    export default GroupButtonView;
    