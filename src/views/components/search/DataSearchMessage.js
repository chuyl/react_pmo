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
    class DataSearchMessage extends Component {
        state={
            inputValue:"",
            inputState:false,
            message_list:this.props.message,
            filter_box_state:true,
            search_arr:[],
            keywordTitle:[],
            title_index:0
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
            var key=[];
            if(this.props.keywordSearch){
                for(var o = 0; o<this.props.keywordSearch.length;o++){
                    key.push(this.props.keywordSearch[o])
                }
            }
            if(this.props.selectNameMessage){
                for(var m = 0; m<this.props.selectNameMessage.length;m++){
                    key.push(this.props.selectNameMessage[m])
                }
            }
            if(this.props.selectNameCheckMessage){
                for(var n = 0; n<this.props.selectNameCheckMessage.length;n++){
                    key.push(this.props.selectNameCheckMessage[n])
                }
            }
           
            // this.props.selectNameMessage?this.props.selectNameMessage:[];
           //value 用来存储select的option
            var value=[];
            //keyword_list 用来存储需要模糊关键字筛选的字段名称
            var id_arr=[];
            //keywordSearch为input的value.就是模糊查询的关键字
            if(this.props.keywordSearch){
                for(var z = 0;z<this.props.keywordSearch.length;z++){
                    value.push(document.getElementById("keywordSearch"+this.props.keywordSearch[z]).value)
                    id_arr.push("keywordSearch"+this.props.keywordSearch[z])
                    }
            }
            
            // var keywordSearch = document.getElementById("keywordSearch").value;
           
            if(this.props.selectNameMessage){
            
                for(var i = 0; i<this.props.selectNameMessage.length;i++){
                    console.log("select_message"+this.props.selectNameMessage[i]+"_name")
                    value.push(document.getElementById("select_message"+this.props.selectNameMessage[i]+"_name").innerHTML==="-选择-"?"":document.getElementById("select_message"+this.props.selectNameMessage[i]+"_name").innerHTML)
                    id_arr.push("select_message"+this.props.selectNameMessage[i])
                }
            }
            if(this.props.selectNameCheckMessage){
            
                for(var j = 0; j<this.props.selectNameCheckMessage.length;j++){
                   
                    // var selectValue = this.props.className.split(","); 
                    value.push(document.getElementById("select_check_message"+this.props.selectNameCheckMessage[j]+"_name").innerHTML==="-选择-"?"":document.getElementById("select_check_message"+this.props.selectNameCheckMessage[j]+"_name").innerHTML)
                    id_arr.push("select_check_message"+this.props.selectNameCheckMessage[j]+"_name")
                }
            }
            // key.push(this.props.keywordSearch);
            // value.push(document.getElementById("keywordSearch").value)
            var obj = {};
            console.log(key)
            var search_arr=[];
            for (var h = 0; h < key.length; h++) {
                obj[key[h]] = value[h]
                search_arr.push({name:value[h],id:id_arr[h]})  
            }
            console.log(obj)
            //obj的key为数据表中的字段，value对应字段中筛选的数据
            //所有筛选条件的数组
            var search_obj={};
           
            for(var key in obj){ 
                // console.log(key)
                if(obj[key]!==""){
                    search_obj[key]=obj[key]
                  
                }
                } 

                // if(keywordSearch!==""){
                //     search_obj.push({name:keywordSearch,id:"keywordSearch"})   
                // }
                this.setState({
                    search_arr:search_arr
                })
                console.log(search_arr)
                this.props.screeningMessage(search_obj)
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
        // console.log(this.props.keywordTitle)
        render(){
            const {id,message} =this.props;
            console.log(this.state.search_arr)
            var search_length=0;
            for(var i =0; i<this.state.search_arr.length;i++){
                if(this.state.search_arr[i].name!=""){
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
    