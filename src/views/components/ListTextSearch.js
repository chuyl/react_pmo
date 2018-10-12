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
        form_temp_name:"",
        add_uri_button:this.props.addButton,
        add_button:[], 
        before_api_uri: this.props.searchInfoLists,
        searchInfoLists: [],
        info_lists: []
    }
     /** 
     * @author xuesong
     * @param fetchData 函数名  获取本地编辑项目json
     */
    fetchData() {
		fetch('../json/'+this.state.add_uri_button+'.json')
			.then(response => response.json())
			.then(data => {
               
				this.setState({
                    add_button: data.data["form-list"],
                    form_temp_name: data.data["form-temp-name"],
				})
			})
			.catch(e => {
				console.log("error")
			})
    }
     /** 
     * @author xuesong
     * @param infos 函数名  获取下拉内容
     */
    infos() {
        var cb = (route, message, arg) => {
            if (message.code === 0) {
                this.setState({
                    searchInfoLists: message.data,
                    info_lists: message.data
                })
            }
        }
        getData(getRouter(this.state.before_api_uri), { token: "tnkGNc" }, cb, {});
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
                        if(disabled!==true){
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
                                    console.log(this.state.search_name)
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
                                        document.getElementById(id+"_name").innerHTML = info_lists.name;
                                        document.getElementById(id+"_id").innerHTML = info_lists.id;
                                        this.searchShow()
                                        }} key={info_lists.id} value={info_lists.id}>{info_lists.name}</li>
                                    )
                                })}
                        </ul>
                        <div className="add_project_new" onClick={(e) => {
                                this.setState({
                                    add_customer: true
                                })
                                //点击关闭下拉菜单，重新获取数据
                                this.searchShow()
                                this.fetchData()
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
                        }} className="return_btn">
                        </div>
                        {this.state.form_temp_name}
                    </div>
                    <div className="selected_scroll_div">
                        <ComponentsList componentslist={this.state.add_button}></ComponentsList>
                        <button className="hold_btn"
                                onClick={(e) => {
                           
                            }}
                        >保存</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ListTextSearch;