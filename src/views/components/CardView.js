/** 
     * @time 2018-09-27 
     * @author xuesong
     * @param CardView 组件  视图管理中Cards组件
     */
    import React, { Component } from 'react';
    import {getData,getRouter} from '../../utils/helpers'
    class CardView extends Component {
        state={
            add_button:[],
        }
        componentWillMount(){
            this.fetchCardsContent()
        }
        /** 
     * @time 2018-11-09 
     * @author xuesong
     * @param editViewButton 函数  group修改视图按钮
     */
    // editViewButton=()=>{
    //     var newState={
    //         name:"add_button",
    //         title:"add_button_title",
    //         view:this.props.editNameButton,
    //         addButtonTitle:this.props.addButtonTitle
    //     }
    //     this.props.editViewClickButton(newState)
    // }
       /** 
     * @time 2018-11-09 
     * @author xuesong
     * @param descriptViewButton 函数  group展示视图按钮
     */
    // descriptViewButton=()=>{
    //     var newState={
    //         name:"descript",
    //         title:"descript_title",
    //         view:this.props.descriptNameButton,
    //         addButtonTitle:this.props.descriptTitle
    //     }
    //     this.props.descriptViewClickButton(newState)
    // }
      //获取cards组件中add_button里面的视图
    fetchCardsContent() {
		var cb = (route, message, arg) => {
			if (message.error === 0) {
				this.setState({
					add_button: message.data["form-list"],
					// form_temp_name:message.data["form-temp-name"],
				})

			}
		}
		getData(getRouter(this.props.addButton), { token:sessionStorage.token }, cb, {});		
	}
        render(){
            console.log(this.state.add_button)
            // const {headTitle,page1Title,page2Title,page3Title,footTitle}=this.props;
            return (
                <div>
                    {this.state.add_button.map((form_list,index) => {
                        return (
                            form_list.type_name === "CardHead"?//card的头
                                <p key={index} onClick={this.headViewButton}>
                                {form_list.title}
                                </p>:
                             form_list.type_name === "CardBody"?
                             form_list.add_button.map((cardBody,index)=>{
                                 console.log(cardBody)
                                 return(
                                    <p key={"body"+index} onClick={this.headViewButton}>
                                    {cardBody.title}
                                    </p>
                                 )
                             })
                               :
                             ""
                            )
                        })
                }
                     {/* <p onClick={this.headViewButton}>
                         {headTitle}
                     </p>
                     <p onClick={this.page1ViewButton}>
                         {page1Title}
                     </p>
                     <p onClick={this.page2ViewButton}>
                         {page2Title}
                     </p>
                     <p onClick={this.page3ViewButton}>
                         {page3Title}
                     </p>
                     <p onClick={this.footViewButton}>
                         {footTitle}
                     </p> */}
                </div>
            )
        }
    }
    export default CardView;
    