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
     * @param descriptViewButton 函数  group展示视图按钮
     */
    descriptViewButton=()=>{
        var newState={
            name:"descript",
            title:"descript_title",
            view:this.props.addButton.descript,
            addButtonTitle:this.props.addButton.descript_title,
            index:"",
            arrIndex:""
        }
        this.props.descriptViewClickButton(newState)
    }
     /** 
     * @time 2018-11-16 
     * @author xuesong
     * @param uriViewButton 函数  group中接口数据名称before_api_uri
     */
    uriViewButton=()=>{
        var newState={
            name:"before_api_uri",
            data:this.props.addButton.before_api_uri
        }
        this.props.interfaceData(newState)
    }
     /** 
     * @time 2018-11-16 
     * @author xuesong
     * @param addViewButton 函数  group中接口新增名称
     */
    addViewButton=()=>{
        var newState={
            name:"add_button",
            data:this.props.addButton.add_button
        }
        this.props.interfaceData(newState)
    }
     /** 
     * @time 2018-11-16 
     * @author xuesong
     * @param editViewButton 函数  group中接口修改名称
     */
    editViewButton=()=>{
        var newState={
            name:"edit_button",
            data:this.props.addButton.edit_button
        }
        this.props.interfaceData(newState)
    }
     /** 
     * @time 2018-11-16 
     * @author xuesong
     * @param delViewButton 函数  group中接口删除名称
     */
    delViewButton=()=>{
        var newState={
            name:"del_button",
            data:this.props.addButton.del_button
        }
        this.props.interfaceData(newState)
    }
     /** 
     * @time 2018-11-16 
     * @author xuesong
     * @param listViewButton 函数  group中接口查看名称
     */
    listViewButton=()=>{
        var newState={
            name:"list_button",
            data:this.props.addButton.list_button
        }
        this.props.interfaceData(newState)
    }
        render(){
            console.log(this.props.addButton)
            const {descriptTitle}=this.props;
            return (
                <div className="complex_message">
                     <p onClick={this.descriptViewButton}>
                         {descriptTitle}
                     </p>
                     <p onClick={this.uriViewButton}>{descriptTitle+"-数据名称"}</p>
                     <p onClick={this.addViewButton}>{descriptTitle+"-新增接口"}</p>
                     <p onClick={this.listViewButton}>{descriptTitle+"-查询接口"}</p>
                     <p onClick={this.editViewButton}>{descriptTitle+"-修改接口"}</p>
                     <p onClick={this.delViewButton}>{descriptTitle+"-删除接口"}</p>
                     <p></p>
                </div>
            )
        }
    }
    export default GroupButtonView;
    