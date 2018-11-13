/** 
     * @author xuesong
     * @param SelectViewListSearch 组件  下拉筛选/选择/新增
     */
    import React, { Component } from 'react';
    class SelectViewListSearch extends Component {
        state = {
            search_state: false,
            add_customer: false,
            search_name: "",
            search_info_list: [],
            searchInfoLists: this.props.selectLists,
            info_lists: this.props.selectLists
        }
       
        searchShow() {
            this.setState({
                search_state: !this.state.search_state
            })
        }
        getValue=(info_lists,id)=>{
            document.getElementById(id).innerHTML = info_lists.title;
            this.searchShow()
            this.props.selectViewValue(info_lists)
                                            
        }
        render() {
     
            const { selectedInfo, id, labelValue,disabled } = this.props;
            console.log(selectedInfo)
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
                            if(disabled!==true){
                                this.searchShow()
                            }
                        }}
                        className="selectedInfo"
                        disabled={disabled}
                        id={id}
                    >
                        {selectedInfo === "" ? "-选择-" : selectedInfo}
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
                                            if (this.state.info_lists[i].title.indexOf(this.state.search_name) >= 0) {
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
                                {this.state.searchInfoLists.map((info_lists,index) => {
                                    return (
                                    <li onClick={()=>{
                                        this.getValue(info_lists,id)
                                    }} key={index} value={info_lists.id}>{info_lists.title}</li>
                                        )
                                    })}
                            </ul>
                           
                        </div>
                    </div>
                </div>
            )
        }
    }
    
    export default SelectViewListSearch;