/** 
     * @author xuesong
     * @param SelectList 组件  下拉筛选/选择
     */
import React, { Component } from 'react';
import { getData, getRouter } from '../../utils/helpers'
//import TextField from './TextField'
//import Select from './Select'
class SelectList extends Component {
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
    infos() {
        var cb = (route, message, arg) => {
            if (message.error === 0) {
                this.setState({
                    searchInfoLists: message.data
                })
            }
        }
        console.log(this.state.before_api_uri)
        getData(getRouter(this.state.before_api_uri), { token:sessionStorage.token }, cb, {});
    }

    searchShow() {
        this.setState({
            search_state: !this.state.search_state
        })
    }
    render() {
        const { selectedInfo,selectedIdInfo, id, labelValue } = this.props;
        return (
            <div className="search_info_list_card">
                <div onClick={() => {
                        this.searchShow()
                      }} 
                    className={this.state.search_state ? "add_list_close" : ""}>
                </div>
                <label className="search_info_list_label">{labelValue}</label>
                <div className="selectedInfo" id={id+"_name"}
                     onClick={() => {
                        this.searchShow()
                        this.infos();
                     }}
                >
                    {selectedInfo === null||selectedInfo===undefined ? "-选择-" : selectedInfo}
                </div>
                <div id={id+"_id"}  style={{display:"none"}}>{selectedIdInfo === "" ? "-选择-" : selectedIdInfo}</div>
                <div className="search_info_position">
                    <div
                        id="search_info_list_div"
                        className={this.state.search_state ? "search_info_list open" : "search_info_list"}
                    >
                        <ul className="search_info_list_ul select_info_list_ul">
                            {this.state.searchInfoLists?this.state.searchInfoLists.map((info_lists) => {
                                return (
                                    <li onClick={(e) => {
                                        document.getElementById(id+"_name").innerHTML = info_lists.name;
                                        document.getElementById(id+"_id").innerHTML = info_lists.id;
                                        this.searchShow()
                                    }} key={info_lists.id}>{info_lists.name}</li>
                                )
                            }):""}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default SelectList;