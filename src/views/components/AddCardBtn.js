/** 
     * @author xuesong
     * @param AddCardBtn 组件  添加card按钮
     */
import React, { Component } from 'react'
import ComponentsCard from './ComponentsCard'
import Alert from './Remind'
import { getData, getRouter } from '../../utils/helpers'
    class AddCardBtn extends Component {
        state={
            add_card_state:false,
            add_button:[]
        }
        // componentWillMount(){
           
        // }
      /** 
	 * @time 2018-10-22
	 * @author xuesong
	 * @param success_message 函数 添加groupCard成功的回调函数
	 */
        success_message=()=>{
            console.log("添加成功")
            var newState = {
                success_message:true,
                id:this.props.dataId,
                freshName:this.props.afterApiUri,
            }
            this.props.editCardSuccess(newState);//回调函数传递参数给父组件
        }
        project_index_add = (list_message,before_api_uri)=>{
            console.log(this.props.dataId)
            console.log(before_api_uri)
            var key_name = [];
            var value = [];
            if(this.props.dataId){
                value.push("parent_id")
                key_name.push(this.props.dataId)
            }
            for (var i = 0; i < list_message.length; i++) {
                if(list_message[i].type_name==="ListTextSearch"||list_message[i].type_name==="SelectList"||list_message[i].type_name==="SelectListSearch"){
                    value.push(list_message[i].id_name+"_name")
                    key_name.push(document.getElementById(list_message[i].id_name+"_name").innerHTML=== "-选择-" ? "" : document.getElementById(list_message[i].id_name+"_name").innerHTML)
                    value.push(list_message[i].id_name+"_id")
                    key_name.push(document.getElementById(list_message[i].id_name+"_id").innerHTML=== "-选择-" ? "" : document.getElementById(list_message[i].id_name+"_id").innerHTML)
                   }
                   else if(list_message[i].type_name==="TextArea"){
                    value.push(list_message[i].id_name)
                    key_name.push(document.getElementById(list_message[i].id_name).value)
                }else{
                    value.push(list_message[i].id_name)
                    key_name.push(document.getElementById(list_message[i].id_name).innerHTML=== "-选择-" ? "" : document.getElementById(list_message[i].id_name).innerHTML || document.getElementById(list_message[i].id_name).value=== "-选择-" ? "" : document.getElementById(list_message[i].id_name).value)
                  }			 
            }     
            var obj = {};
            for(var j=0;j<value.length;j++){
                obj[value[j]] =key_name[j];
            }
            var cb = (route, message, arg) => {
                if (message.error === 0) {
                    this.setState({
                        add_card_state:false
                    })
                    this.success_message()
                }else if(message.error === 2){
                    console.log("未登录")
                    sessionStorage.logged = false;
                    sessionStorage.token="";
                    if(window.location.hash.split("#")[1]!=="/"){
                        window.location.href=window.location.href.split("#/")[0]
                    
                      }
                }else{
			
                    Alert.open({
                        alertTip:message.msg
                        
                    });
                    setTimeout(function(){
                        Alert.close();
                     },3000)
                }
    
            }
            getData(getRouter(before_api_uri), {data:obj,token:sessionStorage.token}, cb, {});
        }
        //获取组件中add_button里面的编辑视图
        fetchAddContent() {
            var json_view=JSON.parse(sessionStorage.view)
            for(var i=0;i<json_view.length;i++){
                if(json_view[i].name===this.props.addButton.descript){
                    
                    var json_message=json_view[i].data;
                    this.setState({
                        add_button: json_message["form-list"],
                    })

                }
            }
            // var cb = (route, message, arg) => {
            //     var json_message=JSON.parse(message.data);
            //     if (message.error === 0) {
            //         this.setState({
            //             add_button: json_message["form-list"],
            //         })

            //     }
            // }
            // getData(getRouter("json_manage_name"), {name:this.props.addButton.descript, token:sessionStorage.token }, cb, {});		
        }
        render(){
            //console.log(this.state.add_button)
            return (
                <div>
                    <button className="add_card_btn"  
                        onClick={() => {
                            this.setState({
                                add_card_state: true,
                            })
                            this.fetchAddContent()
                        }}
                    >
                        {this.props.title}
                    </button>
                    <div className={this.state.add_card_state ? "add_info_list open" : "add_info_list"}>
                        <div className="paper_card_title">
                            <div onClick={() => {
                                    this.setState({
                                        add_card_state: false
                                            })
                                        }} 
                                    className="return_btn">
                            </div>
                            {this.props.title}
                        </div>
                        <div className="selected_scroll_div">
                            <ComponentsCard  componentslist={this.state.add_button}></ComponentsCard>
                            <button className="hold_btn"
                                    onClick={(e) => {
                                        this.project_index_add(this.state.add_button,this.props.before_api_uri)
                                    }}
                            >保存
                            </button>  
                        </div>
                    </div>  
                </div>
            )
        }
    }
    export default AddCardBtn;
    
