/** 
     * @author xuesong
     * @param SelectDataListSearch 组件  下拉筛选/选择/新增
     */
    import React, { Component } from 'react';
    import { getData, getRouter } from '../../../utils/helpers'
    // import TextField from '../components/input/TextField';
    // import ListText from './ListText'
    //import Select from './Select'
    class SelectDataListSearch extends Component {
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
            info_lists: [],
            data_name:this.props.selectName
        }
        componentDidMount(){
            console.log("did")
            // var cb = (route, message, arg) => {
            //     if (message.error === 0) {
                   
            //         console.log("hhhh")
            //         for(var i = 0;i<message.data.length;i++){
            //             if(this.props.selectedInfo===message.data[i].key){
            //                 console.log(message.data[i].name)
            //                 this.setState({data_name:message.data[i].name})
            //             }
            //         }
            //     }else if(message.error === 2){
            //         console.log("未登录")
            //         sessionStorage.logged = false;
            //         sessionStorage.token="";
            //         if(window.location.hash.split("#")[1]!=="/"){
            //             window.location.href=window.location.href.split("#/")[0]
                    
            //           }
            //     }
            // }
           
            // getData(getRouter(this.state.before_api_uri), { token:sessionStorage.token}, cb, {});
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
                    console.log(message.data)
                    for(var i = 0;i<message.data.length;i++){
                        console.log(message.data.key)
                        if(this.props.selectedInfo===message.data.key){
                            this.setState({data_name:message.data.name})
                        }
                    }
                }else if(message.error === 2){
                    console.log("未登录")
                    sessionStorage.logged = false;
                    sessionStorage.token="";
                    if(window.location.hash.split("#")[1]!=="/"){
                        window.location.href=window.location.href.split("#/")[0]
                    
                      }
                }
            }
           
            getData(getRouter(this.state.before_api_uri), { token:sessionStorage.token}, cb, {});
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
                                            if (this.state.info_lists[i].name.indexOf(this.state.search_name) >= 0||this.state.info_lists[i].type.indexOf(this.state.search_name) >= 0) {
                                                this.state.search_info_list.push(this.state.info_lists[i])
    
                                                    }
                                                }
                                                this.setState({
                                                    searchInfoLists: this.state.search_info_list
                                                })
    
                                            }}
                                >搜索</button>
                            </div>
                            <ul style={{height:"100px"}} className="search_info_list_ul">
                                {this.state.searchInfoLists.map((info_lists) => {
                                    return (
                                    <li onClick={(e) => {
                                            document.getElementById(id+"_name").innerHTML = info_lists.key;
                                            document.getElementById(id+"_id").innerHTML = info_lists.id;
                                            this.props.sendDataMessage(info_lists)
                                            this.setState({
                                                data_name:info_lists.name
                                            })
                                            this.searchShow()
                                            }} key={info_lists.id} value={info_lists.id}>{info_lists.type+"-"+info_lists.name+"-"+info_lists.key}</li>
                                        )
                                    })}
                            </ul>
                           
                        </div>
                    </div>
                    <p style={{paddingLeft:"80px",fontSize:"14px",color:"#fff",paddingTop:"5px",height:"24px"}}>{this.state.data_name}</p>
                </div>
            )
        }
    }
    
    export default SelectDataListSearch;