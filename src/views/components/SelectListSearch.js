/** 
     * @author xuesong
     * @param SelectListSearch 组件  下拉筛选/选择/新增
     */
    import React, { Component } from 'react';
    import { getData, getRouter } from '../../utils/helpers'
    // import ComponentsList from './ComponentsList'
    // import TextField from './TextField';
    // import ListText from './ListText'
    //import Select from './Select'
    class SelectListSearch extends Component {
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
                    var json_message=json_view[i].data;
                    this.setState({
                        add_button: json_message["form-list"],
                        form_temp_name: json_message["form-temp-name"],
                    })
    
                }
            }
            // var cb = (route, message, arg) =>  {
            //     if (message.error===0) {
            //         var json_message=JSON.parse(message.data);
            //         this.setState( {
            //             add_button: json_message["form-list"],
            //             form_temp_name: json_message["form-temp-name"],
            //         })
            //     }
            // }
            // getData(getRouter("json_manage_name"), { name:this.state.add_uri_button,token:sessionStorage.token }, cb, {});
             
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
            var id=document.getElementById("province_id").innerHTML==="-选择-"?"":document.getElementById("province_id").innerHTML
            console.log(document.getElementById("province_id").innerHTML)
            getData(getRouter(this.state.before_api_uri), { token:sessionStorage.token,province_id:id }, cb, {});
        }
        // componentWillMount(){
        //     console.log(this.state.searchInfoLists)
        // }
        searchShow() {
            this.setState({
                search_state: !this.state.search_state
            })
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
                            this.searchShow()
                        }} 
                        className={this.state.search_state ? "add_list_close" : ""}>
                    </div>
                    <label className="search_info_list_label">{labelValue}</label>
                    <div
                        onClick={() => {
                            if(disabled===true){
                               return false
                            }else{
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
                           
                        </div>
                    </div>
                </div>
            )
        }
    }
    
    export default SelectListSearch;