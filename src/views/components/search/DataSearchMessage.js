/** 
     * @author xuesong
     * @param DataSearchMessage 组件  
     * 调用方法
     * <DataSearchMessage 
			message={this.state.view_table_lists} 要筛选的数据列表
			keywordSearch={["title","name"]}   在input中筛选的关键字在数据列表中的名称
			keywordTitle={[                   下拉菜单选择搜索的条件
				"中文名称+英文名称",
				"所属模块",
				"类型"]}
			selectListMessage={["view_mode","view_type"]} 下拉菜单接口名称
			selectNameMessage={["mode","type"]}  在select中筛选数据列表中的名称
			screeningMessage={this.screening_information}   回调函数message为筛选后数据列表state代替原数据列表
					/>
     */
    import React, { Component } from 'react';
    import KeywordSearch from './KeywordSearch';
    import SelectMessage from './SelectMessage'
    import SelectSearchType from './SelectSearchType'
    import SelectCheckSearchType from './SelectCheckSearchType'
    import SectionTimeSearch from './SectionTimeSearch'
    import SelectListLangLocal from './SelectListLangLocal';
    class DataSearchMessage extends Component {
        state={
            inputValue:"",
            inputState:false,
            message_list:this.props.message,
            filter_box_state:true,
            search_arr:[],
            keywordTitle:[],
            title_index:0,
            title_lang_pack:0
            // message_spare_list:this.props.message,
        }
        componentWillMount(){
        }
        /** 
         * @time 2018-12-19
         * @author xuesong
         * @param screening_information 函数 筛选搜索
         */
          screening_information=()=>{
              //selectNameMessage 数据表中需要select筛选的字段名称
            //key 搜索的名称 
            //condition_arr搜索条件 
            //value 搜索的值 
            //clear_value 搜索的显示值 
            //id_arr 搜索框的id
            var key=[];
            var condition_arr=[];
            var value=[];
            var clear_value=[];
            var id_arr=[];
            if(this.props.keywordSearch){
                for(var o = 0; o<this.props.keywordSearch.length;o++){
                    key.push(this.props.keywordSearch[o])
                    condition_arr.push("like")
                    value.push(document.getElementById("keywordSearch"+this.props.keywordSearch[o]).value)
                    clear_value.push(document.getElementById("keywordSearch"+this.props.keywordSearch[o]).value)
                    id_arr.push("keywordSearch"+this.props.keywordSearch[o])
                }
            }
            if(this.props.selectNameMessage){
                for(var m = 0; m<this.props.selectNameMessage.length;m++){
                    key.push(this.props.selectNameMessage[m])
                    condition_arr.push("equal")
                    value.push(document.getElementById("select_message"+this.props.selectNameMessage[m]+"_name").innerHTML==="-选择-"?"":document.getElementById("select_message"+this.props.selectNameMessage[m]+"_name").innerHTML)
                    clear_value.push(document.getElementById("select_message"+this.props.selectNameMessage[m]+"_name").innerHTML==="-选择-"?"":document.getElementById("select_message"+this.props.selectNameMessage[m]+"_name").innerHTML)
                    id_arr.push("select_message"+this.props.selectNameMessage[m])
                }
            }
            if(this.props.selectNameCheckMessage){
                for(var n = 0; n<this.props.selectNameCheckMessage.length;n++){
                    key.push(this.props.selectNameCheckMessage[n])
                    condition_arr.push("equal_many")
                    var message =document.getElementById("select_check_message"+this.props.selectNameCheckMessage[n]+"_name").innerHTML==="-选择-"?"":document.getElementById("select_check_message"+this.props.selectNameCheckMessage[n]+"_name").innerHTML.split(","); 
                     value.push(message)
                     clear_value.push(document.getElementById("select_check_message"+this.props.selectNameCheckMessage[n]+"_name").innerHTML==="-选择-"?"":document.getElementById("select_check_message"+this.props.selectNameCheckMessage[n]+"_name").innerHTML)
                     id_arr.push("select_check_message"+this.props.selectNameCheckMessage[n]+"_name")
                }
            }
            if(this.props.sectionTimeMessage){
                for(var y = 0; y<this.props.sectionTimeMessage.length;y++){
                    key.push(this.props.sectionTimeMessage[y])
                    condition_arr.push("between")
                    var input_value = document.getElementById("section_time_search"+this.props.sectionTimeMessage[y]).value;
                  
                    if(input_value!==""){
                        var message_arr=[];
                        var  start_date = new Date(input_value+'-01-01 00:00:00');
                        var start_time = start_date.getTime(start_date)/1000;
                        var  end_date = new Date(input_value+'-12-31 23:59:59');
                        var end_time = end_date.getTime(end_date)/1000;
                        message_arr.push(start_time)
                        message_arr.push(end_time)
                        value.push(message_arr)
                        clear_value.push(input_value)
                        id_arr.push("section_time_search"+this.props.sectionTimeMessage[y])
                    }else{
                        value.push("")
                        clear_value.push(input_value)
                        id_arr.push("section_time_search"+this.props.sectionTimeMessage[y])
                    }
                   
                }
            }
            if(this.props.langPackMessage){
                for(var i = 0; i<this.props.langPackMessage.length;i++){
                    key.push(this.props.langPackMessage[i])
                    condition_arr.push("equal")
                    console.log(document.getElementById("select_lang_pack"+this.props.langPackMessage[i]+"_id").innerHTML)
                    value.push(document.getElementById("select_lang_pack"+this.props.langPackMessage[i]+"_id").innerHTML)
                    clear_value.push(document.getElementById("select_lang_pack"+this.props.langPackMessage[i]+"_name").innerHTML)
                    id_arr.push("keywordSearch"+this.props.langPackMessage[i])
                }
            }
            
           //value 用来存储select的option
            var obj = {};
            console.log(value)
            console.log(key)
            var search_arr=[];
            for (var h = 0; h < key.length; h++) {
                if(value[h]!==""){
                    obj[key[h]] = {"condition":condition_arr[h],"query_data":value[h]}
                    search_arr.push({name:clear_value[h],id:id_arr[h]})  
                }
               
                
            }
             console.log(obj)
           
            //obj的key为数据表中的字段，value对应字段中筛选的数据
            //所有筛选条件的数组
                this.setState({
                    search_arr:search_arr
                })
                this.props.screeningMessage(obj)
        }
         /** 
         * @time 2018-12-19
         * @author xuesong
         * @param clear_search 函数 清空所有筛选条件
         */
        clear_search=()=>{
            if(this.props.keywordSearch){
                for(var j = 0; j<this.props.keywordSearch.length;j++){
                    document.getElementById("keywordSearch"+this.props.keywordSearch[j]).value="";
                }
            }
            if(this.props.selectNameMessage){
                for(var i = 0; i<this.props.selectNameMessage.length;i++){
                    document.getElementById("select_message"+this.props.selectNameMessage[i]+"_name").innerHTML="-选择-"
                }
            }
           
            if(this.props.selectNameCheckMessage){
                for(var m = 0; m<this.props.selectNameCheckMessage.length;m++){
                    document.getElementById("select_check_message"+this.props.selectNameCheckMessage[m]+"_name").innerHTML="-选择-"
                }
            }
            // document.getElementById("keywordSearch").value="";
            this.setState({
                search_arr:[]
            })
            // console.log(this.props.message)
            this.props.screeningMessage(this.props.message)
        }
        /** 
         * @time 2018-12-19
         * @author xuesong
         * @param clear_this_search 函数 清空某一项筛选条件
         */
        clear_this_search=(id)=>{
            console.log(id)
            document.getElementById(id).innerHTML? document.getElementById(id).innerHTML="-选择-": document.getElementById(id).value=""
             this.screening_information()
        }
        keyword_title=()=>{
            if(this.props.keywordTitle){
                var keywordTitle=[];
                for(var i = 0;this.props.keywordTitle.length;i++){
                    keywordTitle.push({id:i,name:this.props.keywordTitle[i]})
                }
                this.setState({
                    keywordTitle:keywordTitle
                })
            }
        }
         /** 
         * @time 2018-12-27
         * @author xuesong
         * @param select_title_index 函数 index
         */
        select_title_index=(index)=>{
            this.setState({
                title_index:index
            })
        }
         /** 
         * @time 2018-12-27
         * @author xuesong
         * @param select_lang_index 函数 index
         */
        select_lang_index=(index)=>{
            this.setState({
                title_lang_pack:index
            })
        }
        select_lang_index
        // console.log(this.props.keywordTitle)
        render(){
            // const {id,message} =this.props;
            console.log(this.state.search_arr)
            var search_length=0;
            for(var i =0; i<this.state.search_arr.length;i++){
                if(this.state.search_arr[i].name!==""){
                    search_length++;
                }
            }
            return (
                <div className="filter_max_div">
                    <button
                        className="filter_box_state"
                        onClick={()=>{
                            this.setState({
                               filter_box_state:!this.state.filter_box_state 
                            })
                        }}
                    >
                        {this.state.filter_box_state?"关闭筛选框":"打开筛选框"}
                    </button>
                    <div className="select_filter_box" style={this.state.filter_box_state?{display:"block"}:{display:"none"}}>
                        <SelectSearchType
                             id={"select_title"}
                             selectedInfo={this.props.keywordTitle[0]}
                             keywordTitle={this.props.keywordTitle} 
                             selectTitleIndex={this.select_title_index}    
                            />
                        {this.props.keywordSearch?this.props.keywordSearch.map((keywordSearch,index)=>{
                            return(
                                <KeywordSearch 
                                    key={index}
                                    displayNone={this.state.title_index===index?1:0}
                                    // style={this.state.title_index===index?{}:{display:"none"}}
                                    id={"keywordSearch"+keywordSearch}
                                />
                                )
                        }):""}
                         {this.props.selectListMessage?this.props.selectListMessage.map((selectListMessage,index)=>{
                            return(
                                <SelectMessage
                                    key={index}
                                    displayNone={index+this.props.keywordSearch.length===this.state.title_index?1:0}
                                    id={"select_message"+this.props.selectNameMessage[index]}
                                    searchInfoLists={selectListMessage}     
                                />
                            )
                        }):""}
                        {this.props.selectListCheckMessage?this.props.selectListCheckMessage.map((selectListCheckMessage,index)=>{
                            return(
                                <SelectCheckSearchType
                                    key={index}
                                    displayNone={index+this.props.selectListMessage.length+this.props.keywordSearch.length===this.state.title_index?1:0}
                                    id={"select_check_message"+this.props.selectNameCheckMessage[index]}
                                    searchInfoLists={selectListCheckMessage}     
                            />
                            )
                        }):""}
                         {this.props.sectionTimeMessage?this.props.sectionTimeMessage.map((sectionTimeMessage,index)=>{
                            return(
                                <SectionTimeSearch
                                    key={index}
                                    displayNone={index+this.props.selectListMessage.length+this.props.keywordSearch.length+this.props.selectListCheckMessage.length===this.state.title_index?1:0}
                                    id={"section_time_search"+this.props.sectionTimeMessage[index]}
                                    // searchInfoLists={selectListCheckMessage}     
                            />
                            )
                        }):""}
                        {this.props.langPackMessage?this.props.langPackMessage.map((langPackMessage,index)=>{
                           console.log(index+this.props.selectListMessage.length+this.props.keywordSearch.length+this.props.selectListCheckMessage.length+this.props.sectionTimeMessage.length)
                           return(
                                <SelectListLangLocal
                                    key={index}
                                    displayNone={index+this.props.selectListMessage.length+this.props.keywordSearch.length+this.props.selectListCheckMessage.length+this.props.sectionTimeMessage.length===this.state.title_index?1:0}
                                    id={"select_lang_pack"+this.props.langPackMessage[index]}
                                    langPack="paymentState"
                                    keywordTitle={this.props.langPackTitle}
                                    selectTitleIndex={this.select_lang_index}
                                    selectedInfo={"-选择-"}
                                    // searchInfoLists={selectListCheckMessage}     
                            />
                            )
                        }):""}
                        {/* <SelectListLangLocal
                                    id={"select_title_lang_pack"}
                                    selectedInfo={"-选择-"}
                                    langPack="paymentState"
                                    // labelValue={form_list.title}
                                     keywordTitle={"-1,1,2"} 
                                    selectTitleIndex={this.select_lang_index}
                                /> */}
                        <button className="select_right_btn"
                            onClick={()=>{
                                this.screening_information()
                            }}
                        >
                            搜索
                        </button>
                       
                        <div className="select_clean_box">
                            {/* <span>
                                {this.state.search_arr.length>0?"关键字:":""}
                            </span> */}
                            {this.state.search_arr.map((search_arr,index)=>{
                                if(search_arr.name!==""){
                                return(
                                    <div className="select_clean_bar" key={index}>
                                        <span>{search_arr.name}
                                        </span>
                                        <span  className="del_btn"
                                            onClick={()=>{
                                                this.clear_this_search(search_arr.id) 
                                            }}
                                        ></span>
                                    </div>
                                )
                            
                            }})}
                            {search_length>0?<button
                                className="del_btn_all"
                                onClick={()=>{
                                this.clear_search() 
                                }}
                            >
                                清空
                            </button>:""}
                        </div>
                    </div>
              </div>
            )
        }
    }
    export default DataSearchMessage;
    