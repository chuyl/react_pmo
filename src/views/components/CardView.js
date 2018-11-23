/** 
     * @time 2018-09-27 
     * @author xuesong
     * @param CardView 组件  视图管理中Cards组件
     */
    import React, { Component } from 'react';
    // import {getData,getRouter} from '../../utils/helpers'
    class CardView extends Component {
        state={
            add_button:[],
        }
  
    /** 
     * @time 2018-11-09 
     * @author xuesong
     * @param headViewButton 函数  group展示视图按钮
     */
    headViewButton=()=>{
        var newState={
            name:"add_button",
            view:this.props.addButton[0].add_button,
            title:"title",
            addButtonTitle:this.props.addButton[0].title,
            index:0,
            arrIndex:""
           
        }
        this.props.cardViewClickButton(newState)
    }
    page1ViewButton=()=>{
        var newState={
            name:"add_button",
            view:this.props.addButton[1].add_button[0].add_button,
            title:"title",
            addButtonTitle:this.props.addButton[1].add_button[0].title,
            index:1,
            arrIndex:0
           
        }
        this.props.cardViewClickButton(newState)
    }
    page2ViewButton=()=>{
        var newState={
            name:"add_button",
            view:this.props.addButton[1].add_button[1].add_button,
            title:"title",
            addButtonTitle:this.props.addButton[1].add_button[1].title,
            index:1,
            arrIndex:1
           
        }
        this.props.cardViewClickButton(newState)
    }
    page3ViewButton=()=>{
        var newState={
            name:"add_button",
            view:this.props.addButton[1].add_button[2].add_button,
            title:"title",
            addButtonTitle:this.props.addButton[1].add_button[2].title,
            index:1,
            arrIndex:2
           
        }
        this.props.cardViewClickButton(newState)
    }
    footViewButton=()=>{
        var newState={
            name:"add_button",
            view:this.props.addButton[3].add_button,
            title:"title",
            addButtonTitle:this.props.addButton[3].title,
            index:3,
            arrIndex:""
           
        }
        this.props.cardViewClickButton(newState)
    }
        render(){
            return (
                <div>
                     <p onClick={this.headViewButton}>
                         {this.props.addButton[0].title===""?"":this.props.addButton[0].title}
                     </p>
                     <p onClick={this.page1ViewButton}>
                     {this.props.addButton[1].add_button[0].title===""?"":this.props.addButton[1].add_button[0].title}
                     </p>
                     <p onClick={this.page2ViewButton}>
                     {this.props.addButton[1].add_button[1].title===""?"":this.props.addButton[1].add_button[1].title}
                     </p>
                     <p onClick={this.page3ViewButton}>
                     {this.props.addButton[1].add_button[2].title===""?"":this.props.addButton[1].add_button[2].title}
                     </p>
                     <p onClick={this.footViewButton}>
                     {this.props.addButton[3].title===""?"":this.props.addButton[3].title}
                     </p>
                </div>
            )
        }
    }
    export default CardView;
    