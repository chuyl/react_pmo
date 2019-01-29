/** 
     * @author xuesong
     * @param Link 组件  label+button
     */
    import React,  {Component }from 'react'; 
    import {getData, getRouter }from '../../../utils/helpers'
    import Alert from '../modal/Remind'
    import PropTypes from 'prop-types'; 
    class Link extends Component {
        state =  {
            linkState:false, 
            add_button:[], 
            groupContextList:[], 
            data_group:[], 
            group_data_arr:[], 
            edit_linkCard_data:[], 
            linkListCardData:[], 
            messageList:this.props.messageList,
            remind_state:false
        }
        static contextTypes = {
            color:PropTypes.string,
            callback:PropTypes.func,
        }
         /** 
         * @author xuesong
         * @param fetchData 函数名  获取本地编辑项目json
         */
        fetchData=()=> {
            var json_view=JSON.parse(sessionStorage.view)
            for(var i=0;i<json_view.length;i++){
                if(json_view[i].name===this.state.messageList){
                    
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
            //             add_button:json_message["form-list"], 
            //         })
            //     }
            // }
            // getData(getRouter("json_manage_name"), {name:this.state.messageList,token:sessionStorage.token }, cb, {});
        }
        /** 
        * @author xuesong
        * @param stringifyMultipleButton 函数名 循环输出动态数组值
        */
       stringifyMultipleButton(list_message, index, arr_list) {
            var key_name = []; 
            var value = []; 
            for (var i = 0; i < list_message.length; i ++) {
                value.push(list_message[i].id_name)
                key_name.push(document.getElementById(list_message[i].id_name + index).innerHTML === "-选择-"?"":document.getElementById(list_message[i].id_name + index).innerHTML || document.getElementById(list_message[i].id_name + index).value)
            }
            var obj =  {}; 
            for (var j = 0; j < value.length; j ++) {
                obj[value[j]] = key_name[j]; 
            }
            arr_list.push(obj); 

    }
    holdViewClick=()=>{

    }
    /** 
	 * @time 2018-10-16
	 * @author xuesong
	 * @param handleClick 函数 点击link组件获取视图和对应的数据
	 */
    handleClick=()=>{
       // var cb = (route, message, arg) =>  {
           // if (message.error === 0) {
                var cb = (route, messages, arg) =>  {
                    console.log(messages)
                    if (messages.error === 0) {
                        var json_view=JSON.parse(sessionStorage.view)
                        for(var i=0;i<json_view.length;i++){

                            if(json_view[i].name===this.props.messageList){
                                var json_message=json_view[i].data;
                                var newState = {
                                    add_button:json_message["form-list"]?json_message["form-list"]:[],
                                    form_temp_name:json_message["form-temp-name"],
                                    data:messages.data?messages.data:"",
                                    dataId:this.props.dataId
                            }
                            }
                        }
                        
                    }else if(messages.error === 2){
                        console.log("未登录")
                        sessionStorage.logged = false;
                        sessionStorage.token="";
                        if(window.location.hash.split("#")[1]!=="/"){
                            window.location.href=window.location.href.split("#/")[0]
                        
                          }
                    }else{
                        this.setState({
                            remind_state:true
                        })
                        Alert.open({
                            alertTip:messages.msg
                            
                        });
                        setTimeout(function(){
                            Alert.close();
                         },3000)
                    }
                     this.props.oneChange(newState);
                }
                //获取数据接口
                console.log(this.props.linkpage)
                getData(getRouter(this.props.linkpage),  {token:sessionStorage.token, id:this.props.dataId }, cb,  {}); 
            //}
        }
        //获取视图接口
      //  getData(getRouter("json_manage_name"),  {name:this.props.messageList,token:sessionStorage.token}, cb,  {}); 
        
    //}

    render() {
            const {button} = this.props
            return ( 
                    <div className="card_ide_btn">
                        <button className="btn_list" onClick =  {this.props.view?this.holdViewClick:this.handleClick}>{button} </button >  
                    </div>
             )
        }
    }
    
    export default Link; 
    