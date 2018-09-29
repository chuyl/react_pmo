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
        info_state: ""              //select是否为“-选择-”
    }
    /** 
     * @author xuesong
     * @param infos 函数名  获取下拉内容
     */
    infos() {
        var cb = (route, message, arg) => {
            if (message.code === 0) {
                this.setState({
                    searchInfoLists: message.data
                })
            }
        }
        getData(getRouter(this.state.before_api_uri), { token: "tnkGNc" }, cb, {});
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
                }} className={this.state.search_state ? "add_list_close" : ""}></div>
                <label className="search_info_list_label">{labelValue}</label>
                <div
                    onClick={() => {
                        this.searchShow()
                        this.infos();
                    }}
                    className="selectedInfo"
                    
                    // className={document.getElementById(id).innerHTML==="-选择-"?"selectedInfo":"selectedInfoFont"}
                    id={id+"_name"}>{selectedInfo === "" ? "-选择-" : selectedInfo}</div>
                <input id={id+"_id"} defaultValue={selectedIdInfo}  style={{display:"none"}}/>
                <div className="search_info_position">
                    <div
                        id="search_info_list_div"
                        className={this.state.search_state ? "search_info_list open" : "search_info_list"}
                    >
                        <ul className="search_info_list_ul select_info_list_ul">
                            {this.state.searchInfoLists.map((info_lists) => {
                                return (
                                    <li onClick={(e) => {
                                        document.getElementById(id+"_name").innerHTML = info_lists.name;
                                        document.getElementById(id+"_id").value = info_lists.id;
                                        this.searchShow()
                                    }} key={info_lists.id}>{info_lists.name}</li>
                                )
                            })}
                        </ul>
                        {/* <div onClick={(e)=>{
                       this.setState({
                        add_customer:true
                       })
                    }}
                 
                 >新增</div> */}
                    </div>
                </div>
            </div>
        )
    }
}

export default SelectList;