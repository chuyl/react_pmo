/** 
     * @author xuesong
     * @param SelectSearchType 组件  下拉筛选/选择
     */
    import React, { Component } from 'react';
    import { getData, getRouter } from '../../../utils/helpers'
    //import TextField from '../components/input/TextField'
    //import Select from './Select'
    class SelectSearchType extends Component {
        state = {
            search_state: false,
            add_customer: false,
            search_name: "",
            add_customer_input: "",
            search_info_list: [],
            selectedInfo:this.props.selectedInfo,
            keywordTitle:this.props.keywordTitle
           
        }
        /** 
         * @author xuesong
         * @param infos 函数名  获取下拉内容
         */
        
    
        searchShow=()=> {
            this.setState({
                search_state: !this.state.search_state
            })
        }
        render() {
            const { selectedInfo,selectedIdInfo, id, labelValue,disabled } = this.props;
            return (
                <div style={this.props.view?{marginBottom:"10px"}:{}} className="select_search_list">
                    <div onClick={() => {
                            this.searchShow()
                          }} 
                        className={this.state.search_state ? "add_list_close" : ""}>
                    </div>
                    <div className="selectedInfo" id={id+"_name"}
                        title={this.state.selectedInfo}
                         onClick={() => {
                            this.searchShow()
                            
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
                                {this.state.keywordTitle?this.state.keywordTitle.map((info_lists,index) => {
                                    return (
                                        <li
                                        title={info_lists}
                                        onClick={(e) => {
                                            document.getElementById(id+"_name").innerHTML = info_lists;
                                            // document.getElementById(id+"_id").innerHTML = info_lists.id;
                                            this.searchShow()
                                            this.setState({
                                                selectedInfo:info_lists
                                            })
                                            this.props.selectTitleIndex(index)
                                        }} key={index}>{info_lists}</li>
                                    )
                                }):""}
                            </ul>
                        </div>
                    </div>
                </div>
            )
        }
    }
    
    export default SelectSearchType;