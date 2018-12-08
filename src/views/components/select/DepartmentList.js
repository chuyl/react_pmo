/** 
     * @author xuesong
     * @param DepartmentList 组件  公司-部门-人员
     */
import React, { Component } from 'react';
//import TextField from '../components/input/TextField'
//import Select from './Select'
import { getData, getRouter} from '../../../utils/helpers'
//import {STAFFOFDING} from '../../enum'
class DepartmentList extends Component {
    state = {
        search_state: false,
        add_customer: false,
        search_name: "",
        add_customer_input: "",
        search_info_list: [],
        add_button: this.props.addButton,
        before_api_uri:this.props.searchInfoLists,
        searchInfoLists: [],
        departmentLists:[],
        info_lists: this.props.searchInfoLists
    }
    infos(){
        var cb = (route, message, arg) => {
            if (message.error === 0) {
                this.setState({
                    searchInfoLists:message.data
                   })
            }else if(message.error === 2){
				console.log("未登录")
				sessionStorage.logged = false;
				sessionStorage.token="";
				if(window.location.hash.split("#")[1]!=="/"){
					window.location.href=window.location.href.split("#/")[0]
				
				  }
			}
          }
            getData(getRouter(this.state.before_api_uri), {token:sessionStorage.token }, cb, { });  
    }
    departmentinfos(){
        var cb = (route, message, arg) => {
            if (message.error === 0) {
                this.setState({
                    departmentLists:message.data
                   })
            }else if(message.error === 2){
				console.log("未登录")
				sessionStorage.logged = false;
				sessionStorage.token="";
				if(window.location.hash.split("#")[1]!=="/"){
					window.location.href=window.location.href.split("#/")[0]
				
				  }
			}
          }
            getData(getRouter("csst_department_list"), {token:sessionStorage.token }, cb, { });  
    }
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
                        this.infos()
                        this.departmentinfos()
                    }}
                    className="selectedInfo"
                    //className={this.state.changeResult ===""?"selectedInfo":"selectedInfo_font"}
                    id={id}>{selectedInfo === "" ? "-选择-" : selectedInfo}</div>
                 <div className="search_info_position">
                <div
                    id="search_info_list_div"
                    className={this.state.search_state ? "search_info_list open" : "search_info_list"}
                >
               
                    <ul className="search_info_list_ul select_info_list_ul">
                        <li className="nohover">-公司</li>
                        <li onClick={(e) => {
                                    document.getElementById(id).innerHTML = "中软培训";
                                    this.searchShow()
                                }}>中软培训</li>
                        <li>-部门</li>
                        {this.state.departmentLists.map((info_lists) => {
                            return (
                                <li onClick={(e) => {
                                    document.getElementById(id).innerHTML = info_lists.name;
                                    this.searchShow()
                                }} key={info_lists.id}>{info_lists.name}</li>
                            )
                        })}
                         <li>-个人</li>
                        {this.state.searchInfoLists.map((info_lists) => {
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

export default DepartmentList;