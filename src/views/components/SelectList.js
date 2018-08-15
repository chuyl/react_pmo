/** 
     * @author xuesong
     * @param SelectList 组件  下拉筛选/选择
     */
    import React, { Component } from 'react';
    //import TextField from './TextField'
    //import Select from './Select'
    class SelectList extends Component {
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
                    <label className="search_info_list_label">{labelValue}</label>
                    <div
                        onClick={() => {
                            this.searchShow()
                        }}
                        className="selected_info"
                        id={id}>{selected_info === "" ? "-选择-" : selected_info}</div>
                     <div className="search_info_position">
                    <div
                        id="search_info_list_div"
                        className={this.state.search_state ? "search_info_list open" : "search_info_list"}
                    >
                        <ul className="search_info_list_ul">
                            {this.state.search_info_lists.map((info_lists) => {
                                return (
                                    <li onClick={(e) => {
                                        document.getElementById(id).innerHTML = info_lists.name;
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