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
        add_button: this.props.addButton,
        before_api_uri: this.props.searchInfoLists,
        searchInfoLists: [],
        info_lists: []
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
        console.log(this.state.before_api_uri)
        getData(getRouter(this.state.before_api_uri), { session: "tnkGNc" }, cb, {});
    }
    // componentWillMount(){
    //     console.log(this.state.searchInfoLists)
    // }
    searchShow() {
        this.setState({
            search_state: !this.state.search_state
        })
    }
    render() {
        const { selectedInfo, id, labelValue } = this.props;
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
                    //className={this.state.changeResult ===""?"selectedInfo":"selectedInfo_font"}
                    id={id}>{selectedInfo === "" ? "-选择-" : selectedInfo}</div>
                 <div className="search_info_position">
                <div
                    id="search_info_list_div"
                    className={this.state.search_state ? "search_info_list open" : "search_info_list"}
                >
                <div className="select_search_div">
                <input className="select_search_input" onChange={(e) => {
                                this.setState({
                                    search_name: e.target.value
                                })

                            }} /><button
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
                                    document.getElementById(id).innerHTML = info_lists.name;
                                    this.searchShow()
                                }} key={info_lists.id}>{info_lists.name}</li>
                            )
                        })}
                    </ul>
                    <div className="add_project_new" onClick={(e) => {
                        this.setState({
                            add_customer: true
                        })
                        //点击关闭下拉菜单，重新获取数据
                        this.searchShow()
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
                    }} className="return_btn"></div>
                    {this.state.add_button.data["form-temp-name"]}
                    </div>
                    <div className="selected_scroll_div">
                   
                    <ComponentsList componentslist={this.state.add_button.data["form-list"]}></ComponentsList>
                    {/* <button
                        onClick={(e) => {
                            console.log(this.state.add_button.data["form-list"])
                            // this.state.info_lists.push({id:4,name:"中国铁通"})
                            // this.setState({
                            //     add_customer: false
                            // })
                        }}
                    >保存</button> */}
                    </div>
                </div>

            </div>
        )
    }
}

export default ListTextSearch;