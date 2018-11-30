/** 
     * @author xuesong
     * @param ListTextSearch 组件  下拉筛选/选择/新增
     */
import React, { Component } from 'react';
import { getData, getRouter } from '../../utils/helpers'
import ComponentsList from './ComponentsList'
// import TextField from './TextField';
// import ListText from './ListText'
//import Select from './Select'
class ListTextSearch extends Component {
    state = {
        search_state: false,
        add_customer: false,
        search_name: "",
        add_customer_input: "",
        search_info_list: [],
        form_temp_name:"",
        add_uri_button:this.props.addButton,
        add_button:[], 
        before_api_uri: this.props.searchInfoLists,
        searchInfoLists: [],
        info_lists: []
    }
     /** 
     * @author xuesong
     * @param fetchData 函数名  获取本地编辑项目json
     */
    fetchData() {
        var json_view=JSON.parse(sessionStorage.view)
        for(var i=0;i<json_view.length;i++){
            if(json_view[i].name===this.state.add_uri_button){
                
                var json_message=JSON.parse(json_view[i].data);
                this.setState({
                    add_button: json_message["form-list"],
                    form_temp_name: json_message["form-temp-name"],
                })

            }
        }
        // var cb = (route, message, arg) =>  {
		// 	if (message.error===0) {
        //         var json_message=JSON.parse(message.data);  
		// 		this.setState( {
        //             add_button:json_message["form-list"],
        //             form_temp_name: json_message["form-temp-name"],
		// 		})
		// 	}
        // }
        // getData(getRouter("json_manage_name"),  {name:this.state.add_uri_button,token:sessionStorage.token}, cb,  {});
         
		// fetch('../json/'+this.state.add_uri_button+'.json')
		// 	.then(response => response.json())
		// 	.then(data => {
               
		// 		this.setState({
        //             add_button: data.data["form-list"],
        //             form_temp_name: data.data["form-temp-name"],
		// 		})
		// 	})
		// 	.catch(e => {
		// 		console.log("error")
		// 	})
    }
     /** 
     * @author xuesong
     * @param infos 函数名  获取下拉内容
     */
    infos() {
        var cb = (route, message, arg) => {
            if (message.error === 0) {
                this.setState({
                    searchInfoLists: message.data,
                    info_lists: message.data
                })
            }
        }
        getData(getRouter(this.state.before_api_uri), { token:sessionStorage.token }, cb, {});
    }
    // componentWillMount(){
    //     console.log(this.state.searchInfoLists)
    // }
    searchShow() {
        this.setState({
            search_state: !this.state.search_state
        })
    }
     /** 
	 * @time 2018-09-28
	 * @author xuesong
	 * @param onHoldClicks 函数 点击保存按钮发送数据
	 */ 
	onHoldClicks =(newState)=>{
        console.log(newState)
		var key_name = [];
		var value = [];
		var list_message=this.state.add_button;
		if(this.state.dataId){
			value.push("parent_id")
			key_name.push(this.state.dataId)
		}
		for (var i = 0; i < list_message.length; i++) {
			if(list_message[i].type_name!=="HoldBtn"){
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
		  
		}
		var obj = {};
		for(var j=0;j<value.length;j++){
			obj[value[j]] =key_name[j];
		}
		// componentslist =  {this.state.add_button?this.state.add_button:[]} componentsdata = {this.state.edit_project_data
		var cb = (route, message, arg) => {
			if(message.error===0){
                this.setState({    //  项目创建成功,打开编辑页面。更新view
                    card_state:false,
                    add_customer:false
				}) 
            }
				
			
	}
		getData(getRouter(newState.before_api_uri), {data:obj,token:sessionStorage.token}, cb, {});
	  }
    // componentDidMount(){
    //     this.infos()
    // }
    render() {
        const { selectedInfo,selectedIdInfo, id, labelValue,disabled } = this.props;
        return (
            <div className="search_info_list_card">
                <div 
                    onClick={() => {
                        if(disabled===true){
                            return false
                         }else{
                             this.searchShow()
                         }
                    }} 
                    className={this.state.search_state ? "add_list_close" : ""}>
                </div>
                <label className="search_info_list_label">{labelValue}</label>
                <div
                    onClick={() => {
                        if(disabled!==true){
                            this.searchShow()
                            this.infos();
                        }
                    }}
                    className="selectedInfo"
                    disabled={disabled}
                    id={id+"_name"}
                >
                    {selectedInfo === "" ? "-选择-" : selectedInfo}
                </div>
                <div id={id+"_id"}  style={{display:"none"}}>
                    {selectedIdInfo === "" ? "-选择-" : selectedIdInfo}
                </div>
                <div className="search_info_position">
                    <div
                        id="search_info_list_div"
                        className={this.state.search_state ? "search_info_list open" : "search_info_list"}
                    >
                        <div className="select_search_div">
                            <input className="select_search_input"  onChange={(e) => {
                                        this.setState({
                                            search_name: e.target.value
                                        })

                                    }} />
                            <button
                                className="select_search_button"
                                onClick={() => {
                                    console.log(this.state.search_name)
                                    this.setState({
                                    search_info_list: [],
                                    })
                                    for (var i = 0; i < this.state.info_lists.length; i++) {
                                        if (this.state.info_lists[i].name.indexOf(this.state.search_name) >= 0) {
                                            this.state.search_info_list.push(this.state.info_lists[i])

                                                }
                                            }
                                            this.setState({
                                                searchInfoLists: this.state.search_info_list
                                            })

                                        }}
                            >搜索</button>
                        </div>
                        <ul className="search_info_list_ul">
                            {this.state.searchInfoLists.map((info_lists) => {
                                return (
                                <li onClick={(e) => {
                                        document.getElementById(id+"_name").innerHTML = info_lists.name;
                                        document.getElementById(id+"_id").innerHTML = info_lists.id;
                                        this.searchShow()
                                        }} key={info_lists.id} value={info_lists.id}>{info_lists.name}</li>
                                    )
                                })}
                        </ul>
                        <div className="add_project_new" onClick={(e) => {
                                this.setState({
                                    add_customer: true
                                })
                                //点击关闭下拉菜单，重新获取数据
                                this.searchShow()
                                this.fetchData()
                            }}

                        >新增</div>
                    </div>
                </div>
                <div className={this.state.add_customer ? "add_info_list open" : "add_info_list"}>
                    <div className="paper_card_title">
                        <div onClick={() => {
                                 this.setState({
                                add_customer: false
                             })
                        }} className="return_btn">
                        </div>
                        {this.state.form_temp_name}
                    </div>
                    <div className="selected_scroll_div">
                        <ComponentsList holdClick={this.onHoldClicks} componentslist={this.state.add_button}></ComponentsList>
                        {/* <button className="hold_btn"
                                onClick={(e) => {
                           
                            }}
                        >保存</button> */}
                    </div>
                </div>
            </div>
        )
    }
}

export default ListTextSearch;