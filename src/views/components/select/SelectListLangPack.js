/** 
     * @author xuesong
     * @param SelectListLangPack 组件  下拉筛选/选择
     */
    import React, { Component } from 'react';
    import { getData, getRouter } from '../../../utils/helpers'
    import LangPack from '../../../langPack'
    //import TextField from '../components/input/TextField'
    //import Select from './Select'
    class SelectListLangPack extends Component {
        state = {
            search_state: false,
            add_customer: false,
            search_name: "",
            add_customer_input: "",
            search_info_list: [],
            add_button: this.props.addButton,
            before_api_uri: this.props.searchInfoLists,
            searchInfoLists: [],
            info_lists: this.props.searchInfoLists,
        }
        /** 
         * @author xuesong
         * @param infos 函数名  获取下拉内容
         */
        // infos() {
        //     var cb = (route, message, arg) => {
        //         if (message.error === 0) {
        //             this.setState({
        //                 searchInfoLists: message.data
        //             })
        //         }else if(message.error === 2){
        //             console.log("未登录")
        //             sessionStorage.logged = false;
        //             sessionStorage.token="";
        //             if(window.location.hash.split("#")[1]!=="/"){
        //                 window.location.href=window.location.href.split("#/")[0]
                    
        //               }
        //         }
        //     }
        //     console.log(this.state.before_api_uri)
        //     getData(getRouter(this.state.before_api_uri), { token:sessionStorage.token }, cb, {});
        // }
    
        searchShow() {
            this.setState({
                search_state: !this.state.search_state
            })
        }
        render() {
            const { selectedInfo,selectedIdInfo, id, labelValue,disabled,keywordTitle } = this.props;
            var selectList=[];
            for(var i in LangPack[this.props.langPack]){
                selectList.push({"name":LangPack[this.props.langPack][i],"id":i})
            }
            console.log(selectedInfo)
            return (
                <div style={this.props.view?{marginBottom:"10px"}:{}} className="search_info_list_card">
                    <div onClick={() => {
                            this.searchShow()
                          }} 
                        className={this.state.search_state ? "add_list_close" : ""}>
                    </div>
                    {labelValue?<label className="search_info_list_label">{labelValue}</label>:""}
                    <div className={disabled===true?"selectedInfo disabled":"selectedInfo"} id={id+"_name"}
                         onClick={() => {
                             if(disabled===true){
                                 return false;
                             }else{
                                this.searchShow()
                                // this.infos();
                             }
                            
                         }}
                    >
                        {selectedInfo === null||selectedInfo===undefined ? "-选择-" : selectedInfo}
                    </div>
                    <div id={id+"_id"}  style={{display:"none"}}>{selectedIdInfo === "" ? "-选择-" : selectedIdInfo}</div>
                    <div className="search_info_position">
                        <div
                            id="search_info_list_div"
                            style={labelValue?{}:{marginLeft:"0"}}
                            className={this.state.search_state ? "search_info_list open" : "search_info_list"}
                        >
                            <ul className="search_info_list_ul select_info_list_ul">
                                {selectList?selectList.map((info_lists,index) => {
                                    return (
                                        <li onClick={(e) => {
                                            document.getElementById(id+"_name").innerHTML = info_lists.name;
                                            document.getElementById(id+"_id").innerHTML = info_lists.id;
                                            this.searchShow()
                                            console.log(info_lists.id)
                                            var newState = {
                                                index:this.props.index,
                                                name:info_lists.id,//
                                                // select_id:id
                                            }
                                            this.props.stateFun(newState)
                                        }} key={index}>{info_lists.name}</li>
                                    )
                                }):""}
                            </ul>
                        </div>
                    </div>
                </div>
            )
        }
    }
    
    export default SelectListLangPack;