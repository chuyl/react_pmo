/** 
     * @author xuesong
     * @param Link 组件  label+button
     */
    import React,  {Component }from 'react'; 
    // import ComponentsList from './ComponentsList'
    import {getData, getRouter }from '../../utils/helpers'
    import Alert from './Remind'
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
            linkpage:this.props.linkpage,
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
                if(json_view[i].name===this.state.linkpage){
                    
                    var json_message=JSON.parse(json_view[i].data);
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
            // getData(getRouter("json_manage_name"), {name:this.state.linkpage,token:sessionStorage.token }, cb, {});
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

        //var data = JSON.stringify(obj, value);//将对象转换成json
        arr_list.push(obj); 
      //  console.log(arr_list);

    }
    message_list=()=> {
        var cb = (route, message, arg) =>  {
            // console.log("bianji")
			if (message.error===0) {
				this.setState( {
					linkListCardData:message.data
				})
			}
        }
		getData(getRouter(this.props.messageList),  {token:sessionStorage.token, project_id:this.props.isClick }, cb,  {}); 
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
                    if (messages.error === 0) {
                        var json_view=JSON.parse(sessionStorage.view)
                        for(var i=0;i<json_view.length;i++){

                            if(json_view[i].name===this.props.linkpage){
                                var json_message=JSON.parse(json_view[i].data);
                                var newState = {
                                    add_button:json_message["form-list"]?json_message["form-list"]:[],
                                    form_temp_name:json_message["form-temp-name"],
                                    data:messages.data?messages.data:"",
                                    dataId:this.props.dataId
                            }
                            }
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
                console.log(this.props.messageList)
                //获取数据接口
                getData(getRouter(this.props.messageList),  {token:sessionStorage.token, id:this.props.dataId }, cb,  {}); 
            //}
        }
        //获取视图接口
      //  getData(getRouter("json_manage_name"),  {name:this.props.linkpage,token:sessionStorage.token}, cb,  {}); 
        
    //}
    /** 
	 * @time 2018-10-16
	 * @author xuesong
	 * @param handlegetByProjectId 函数 点击link组件获取数据
	 */
    handlegetByProjectId = ()=>{
       

    }
    render() {
            const {button} = this.props
            // const cb = (msg,id) => {
            //     return () => {
            //         this.context.callback(msg,id);
            //     }
            // }
            return ( 
                    <button className="btn_list" onClick =  {this.handleClick}>{button} </button >  
               
             )
        }
    }
    
    export default Link; 
    