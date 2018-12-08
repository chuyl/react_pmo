/** 
    * @author xuesong
    * @param BudgetListTextSearchLink 组件名 预算中编辑项目主页面
    */

import React,  {Component }from 'react'; 

import {dealNumber }from '../../../utils/helpers'
//import TextField from '../../components/input/TextField'
// import ListText from '../components/ListText'

// import ListTextSearch from '../components/ListTextSearch'
import ComponentsList from '../../components/composite/ComponentsList'
//import AddDelCard from '../../components/AddDelCard';
//import TeacherArrange from './TeacherArrange'; 
//import ImplementArrange from './ImplementArrange'
//import TravelExpenses from './TravelExpenses'
import {getData, getRouter}from '../../../utils/helpers'
//import Select from './Select'
class BudgetListTextSearchLink extends Component {

    state =  {
        search_state:false, 
        add_customer:false, 
        search_name:"", 
        add_customer_input:"", 
        search_info_list:[], 
        changeResult:"", 
        //讲师安排表
        addCondition:[], 
        //add_lists:false,
        add_uri_button:this.props.addButton,
        add_button:[], 
        showData:this.props.showData,
        before_api_uri:this.props.searchInfoLists, 
        searchInfoLists:[], 
        edit_project_data:[],//数据库获取数据data
        info_lists:[]
    }
    componentDidMount() {
        this.fetchData();
        this.fetchMessageData();
     this.infos(); 
    }
     /** 
     * @author xuesong
     * @param fetchData 函数名  获取本地编辑项目json
     */
    fetchData() {
        var cb = (route, message, arg) => {
			if (message.error === 0) {
				this.setState({
					add_button: message.adit_project.data["form-list"],
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
			getData(getRouter(this.state.add_uri_button), { token:sessionStorage.token }, cb, {});
    }
    	/** 
	 * @author xuesong
	 * @param fetchMessageData 函数名  获取本地json数据内容
	 */
	fetchMessageData() {
        var cb = (route, message, arg) => {
            if (message.error === 0) {
                this.setState({
                    edit_project_data: message
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
         getData(getRouter(this.state.showData), { token:sessionStorage.token }, cb, {});
	}
   /** 
     * @author xuesong
     * @param infos 函数名  获取下拉内容
     */
  
    infos() {
        var cb = (route, message, arg) =>  {
            if (message.error === 0) {
                this.setState( {
                    searchInfoLists:message.data, 
                    info_lists:message.data
                })
        for (var i = 0; i < message.data.length; i++ ) {
            if (document.getElementById("budget_project_name").innerHTML === message.data[i].name) {
                this.setState( {
                    changeResult:message.data[i].money
                })
                }
             }
            }else if(message.error === 2){
				console.log("未登录")
				sessionStorage.logged = false;
				sessionStorage.token="";
				if(window.location.hash.split("#")[1]!=="/"){
					window.location.href=window.location.href.split("#/")[0]
				
				  }
			}
        }
        getData(getRouter(this.state.before_api_uri),  {token:sessionStorage.token}, cb,  {}); 
    }
    /** 
     * @author xuesong
     * @param searchShow 函数名 切换显示隐藏
     */
    searchShow = () =>  {
        this.setState( {
            search_state: ! this.state.search_state
        })
    }
      /** 
     * @author xuesong
     * @param UpdateBudget 函数名 更新预算
     */
    UpdateBudget = () =>  {
        var cb = (route, message, arg) =>  {
            if (message.error === 0) {
                
            }else if(message.error === 2){
				console.log("未登录")
				sessionStorage.logged = false;
				sessionStorage.token="";
				if(window.location.hash.split("#")[1]!=="/"){
					window.location.href=window.location.href.split("#/")[0]
				
				  }
			}
          }
            getData(getRouter(),  {token:sessionStorage.token}, cb,  {}); 
    }
          /** 
     * @author xuesong
     * @param UpdateFinalAccounts 函数名 更新决算
     */
    UpdateFinalAccounts = () =>  {
        var cb = (route, message, arg) =>  {
            if (message.error === 0) {
                
            }else if(message.error === 2){
				console.log("未登录")
				sessionStorage.logged = false;
				sessionStorage.token="";
				if(window.location.hash.split("#")[1]!=="/"){
					window.location.href=window.location.href.split("#/")[0]
				
				  }
			}
          }
            getData(getRouter(),  {token:sessionStorage.token}, cb,  {}); 
    }
    
    /** 
     * @author xuesong
     * @param StringifyButton 函数名 循环输出动态值
     */
    
    StringifyButton = (list_message) =>  {
        var key_name = []; 
        var value = []; 
        for (var i = 0; i < list_message.length; i++ ) {
           value.push(list_message[i].id_name)
           key_name.push(document.getElementById(list_message[i].id_name).innerHTML === "-选择-"?"":document.getElementById(list_message[i].id_name).innerHTML || document.getElementById(list_message[i].id_name).value)
        }
        var obj =  {}; 
        for (var j = 0; j < value.length; j++ ) {
            obj[value[j]] = key_name[j]; 
        }
    //  var data = JSON.stringify(obj,value);//将对象转换成json
      　　　 console.log(obj); 
    }


    render() {
        const {selectedInfo, id, labelValue } = this.props; 
        return (<div className = "search_info_list_card">  
                    <div className =  {this.state.search_state?"add_list_close":""}
                        onClick =  {() =>  {
                            this.searchShow()
                            }} >
                    </div >  
                    <label className = "search_info_list_label" >  {labelValue} </label >  
                    <div className = "selectedInfo"
                        onClick =  {() =>  {
                            this.searchShow()
                            this.infos()
                            }}
                        // className={this.state.changeResult ===""?"selectedInfo":"selectedInfo_font"}
                        id =  {id}>{selectedInfo === ""?"-选择-":selectedInfo} 
                    </div >  
                    <div className = "search_info_position">  
                    <div id = "search_info_list_div"
                         className =  {this.state.search_state?"search_info_list open":"search_info_list"} >  < div className = "select_search_div" >  < input className = "select_search_input"onChange =  {(e) =>  {
                                this.setState( {
                                    search_name:e.target.value
                                })
                            }}/>
                        <button className = "select_search_button"
                            onClick =  {() =>  {
                                    this.setState( {
                                        search_info_list:[], 
                                    })
                            for (var i = 0; i < this.state.info_lists.length; i++ ) {
                                if (this.state.info_lists[i].name.indexOf(this.state.search_name) >= 0) {
                                    this.state.search_info_list.push(this.state.info_lists[i])
                                    }
                                    }
                                    this.setState( {
                                        searchInfoLists:this.state.search_info_list
                                    })        
                                }}> 搜索 
                        </button >  
                    </div >  
                    <ul className = "search_info_list_ul" >  {this.state.searchInfoLists.map((info_lists) =>  {
                            return ( < li onClick =  {(e) =>  {
                                    for (var i = 0; i < this.state.searchInfoLists.length; i++ ) {
                                        if (info_lists.name === this.state.searchInfoLists[i].name) {
                                            console.log()
                                            this.setState( {
                                                changeResult:this.state.searchInfoLists[i].money
                                            })
                                        }
                                    }
                                    document.getElementById(id).innerHTML = info_lists.name; 
                                    this.searchShow()
                                }}key =  {info_lists.id} >  {info_lists.name} </li > )
                        })} 
                    </ul >  
                    <div className = "add_project_new"onClick =  {(e) =>  {
                        this.setState( {
                            add_customer:true
                        })
                        this.searchShow()
                    }} > 新增
                    </div >  
                </div >
                </div >  
                <div className = "select_result_msg" > 预计成本: 
                    <span className = "amount_of_money" >  {dealNumber(this.state.changeResult)} </span >
                </div >  
                <div className =  {this.state.add_customer?"add_info_list open":"add_info_list"} >  
                    <div className = "paper_card_title" >  
                        <div className = "return_btn"
                            onClick =  {() =>  {
                            this.setState( {
                                add_customer:false
                            })
                            }}  >
                        </div > 
                        新建项目 
                    </div >  
                    < div className = "selected_scroll_div" > 
                     {/* 添加客户1 */} 
                        <ComponentsList componentslist =  {this.state.add_button} componentsdata = {this.state.edit_project_data} ></ComponentsList > 
                        <button className="hold_btn">保存</button>
                        {/* 讲师安排 */} 
                        {/* < LinkCard title =  {"讲师安排"}label =  {"讲课费"}button =  {"修改讲师安排"} */}
                            {/* /> */}
                        {/*   
                        <div className =  {this.state.teacherArrange?"add_info_list open":"add_info_list"} >  < div className = "paper_card_title" >  
                            <div className = "return_btn" 
                                onClick =  {() =>  {
                                this.setState( {
                                    teacherArrange:false
                                })
                                 }}>
                            </div > 
                            修改讲师安排 </div > */}
                        {/* < div className = "selected_scroll_div" >  
                            < TextField inputValue =  {""}labelValue =  {"合同编号"}/>  
                            < TextField inputValue =  {""}labelValue =  {"课程名称"}/>  
                            < p className = "card_title" > 讲师安排 </p >  
                        </div >
                        </div >  */}
                            {/* < TeacherArrange/>  */}
                            {/* 实施安排 */} 
                            {/* < ImplementArrange/> */}
                            {/* 差旅费用 */} 
                            {/* < TravelExpenses/>   */}
                            {/* < button className = "button_sm button_position" onClick =  {() =>  {
                                  // this.UpdateBudget()  //更新预算接口
                               // this.StringifyButton(this.state.add_button.data["form-list"])
                       
                               }} > 更新预算 
                            </button >  
                            < button className = "button_sm button_position"onClick =  {() =>  {
                         // this.UpdateFinalAccounts()  //更新决算接口
                        this.StringifyButton(this.state.add_button.data["form-list"])
                       
                    }} > 更新决算 </button > */}
                      </div >  </div >  </div > )
    }
}

export default BudgetListTextSearchLink; 