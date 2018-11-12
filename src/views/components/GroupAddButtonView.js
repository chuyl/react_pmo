/** 
     * @time 2018-09-27 
     * @author xuesong
     * @param GroupAddButtonView 组件  视图管理中group组件
     */
    import React, { Component } from 'react';

    class GroupAddButtonView extends Component {
    /** 
     * @time 2018-11-09 
     * @author xuesong
     * @param addViewButton 函数  group中新增按钮
     */
      addViewButton=()=>{
          var newState={
              name:"add_button"
          }
          this.props.addViewClickButton(newState)
      }
        render(){
            const {title}=this.props;
            return (
                <div>
                     <p onClick={this.addViewButton}>
                         {title}
                     </p>
                </div>
            )
        }
    }
    export default GroupAddButtonView;
    