/** 
     * @author xuesong
     * @param SelectListLangLocal 组件  下拉筛选/选择
     */
    import React, { Component } from 'react';
    import { getData, getRouter } from '../../../utils/helpers'
    import LangPack from '../../../langPack';
    //import TextField from '../components/input/TextField'
    //import Select from './Select'
    class SelectListLangLocal extends Component {
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
            var keywordTitle = this.props.keywordTitle?this.props.keywordTitle.split(","):[]; 
            var selectList=[];
            console.log(this.props.langPack)
            for(var i in LangPack[this.props.langPack]){
                for(var j = 0;j<keywordTitle.length;j++){
                    if(keywordTitle[j]==i){
                        selectList.push({"name":LangPack[this.props.langPack][i],"id":i})
                    }
                }
               
            }
            const { selectedInfo,selectedIdInfo, id, labelValue,disabled,displayNone } = this.props;
            return (
                <div style={this.props.displayNone===0?{display:"none"}:{}} className="search_terms">
                    <div onClick={() => {
                            this.searchShow()
                          }} 
                        className={this.state.search_state ? "add_list_close" : ""}>
                    </div>
                    {/* <label className="search_info_list_label">{labelValue}</label> */}
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
                                {selectList?selectList.map((info_lists,index) => {
                                    return (
                                        <li
                                        title={info_lists.name}
                                        onClick={(e) => {
                                            document.getElementById(id+"_name").innerHTML = info_lists.name;
                                             document.getElementById(id+"_id").innerHTML = info_lists.id;
                                            this.searchShow()
                                            this.setState({
                                                selectedInfo:info_lists.name
                                            })
                                             this.props.selectTitleIndex(info_lists.id)
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
    
    export default SelectListLangLocal;