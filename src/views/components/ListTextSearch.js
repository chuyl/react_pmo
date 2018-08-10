/** 
     * @author xuesong
     * @param ListTextSearch 组件  下拉筛选/选择/新增
     */
import React, { Component } from 'react';
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
        add_button: this.props.add_button,
        search_info_lists: this.props.search_info_lists,
        info_lists: this.props.search_info_lists
    }
    searchShow() {
        this.setState({
            search_state: !this.state.search_state
        })
    }
    render() {
        const { selected_info, id, labelValue } = this.props;
        return (
            <div className="search_info_list_card">

                <div onClick={() => {
                    this.searchShow()
                }} className={this.state.search_state ? "add_list_close" : ""}></div>
                <label>{labelValue}</label>
                <div
                    onClick={() => {
                        this.searchShow()
                    }}
                    className={"selected_info"}
                    id={id}>{selected_info === "" ? "-选择-" : selected_info}</div>
                <div
                    id="search_info_list_div"
                    className={this.state.search_state ? "search_info_list open" : "search_info_list"}
                >
                    <ul className="search_info_list_ul">

                        <li>
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
                                        search_info_lists: this.state.search_info_list
                                    })

                                }}
                            >搜索1</button>
                        </li>
                        {this.state.search_info_lists.map((info_lists) => {
                            return (
                                <li onClick={(e) => {
                                    document.getElementById(id).innerHTML = info_lists.name;
                                    this.searchShow()
                                }} key={info_lists.id}>{info_lists.name}</li>
                            )
                        })}
                    </ul>
                    <div onClick={(e) => {
                        this.setState({
                            add_customer: true
                        })
                    }}

                    >新增</div>
                </div>
                <div className={this.state.add_customer ? "add_info_list open" : "add_info_list"}>
                    <i onClick={() => {
                        this.setState({
                            add_customer: false
                        })
                    }} style={{ fontSize: "20px" }} className="glyphicon glyphicon-arrow-left"></i>
                    <ComponentsList componentslist={this.state.add_button.data["form-list"]}></ComponentsList>
                    <button
                        onClick={(e) => {
                            // this.state.info_lists.push({id:4,name:"中国铁通"})
                            this.setState({
                                add_customer: false
                            })
                        }}
                    >保存</button>
                </div>

            </div>
        )
    }
}

export default ListTextSearch;