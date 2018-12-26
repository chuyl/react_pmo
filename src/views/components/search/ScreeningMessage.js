/** 
     * @author xuesong
     * @param ScreeningMessage 组件  label+input
     */
    import React, { Component } from 'react';
    import KeywordSearch from './KeywordSearch';
    import SelectMessage from './SelectMessage'
    import SelectSearchType from './SelectSearchType'
    class ScreeningMessage extends Component {
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
            var key=this.props.selectNameMessage?this.props.selectNameMessage:[];
           //value 用来存储select的option
            var value=[];
            //keyword_list 用来存储需要模糊关键字筛选的字段名称
            var keyword_list=[];
            //keywordSearch为input的value.就是模糊查询的关键字
            var keywordSearch = document.getElementById("keywordSearch").value;
           
            if(this.props.selectNameMessage){
            
                for(var i = 0; i<this.props.selectNameMessage.length;i++){
                    value.push(document.getElementById("select_message"+i+"_name").innerHTML==="-选择-"?"":document.getElementById("select_message"+i+"_name").innerHTML)
                }
            }
            
            // key.push(this.props.keywordSearch);
            // value.push(document.getElementById("keywordSearch").value)
            var obj = {};
            for (var j = 0; j < key.length; j++) {
                obj[key[j]] = value[j]
            }
            //obj的key为数据表中的字段，value对应字段中筛选的数据
            //所有筛选条件的数组
            var search_arr=[];
            var num = 0;
            for(var key in obj){ 
                if(obj[key]!==""){
                    search_arr.push({name:obj[key],id:"select_message"+num+"_name"})  
                    num++; 
                }
                }  
                search_arr.push({name:keywordSearch,id:"keywordSearch"})   
                this.setState({
                    search_arr:search_arr
                })
            let filter=(condition,data)=>{
                return data.filter( item => {
                    return Object.keys( condition ).every( key => {
                    return String( item[ key ] ).toLowerCase().includes( 
                            String( condition[ key ] ).trim().toLowerCase() )
                        } )
                } )
                }
              
                if(keywordSearch!==""){
                    if(this.props.keywordSearch){
                        for(var m = 0; m<this.props.keywordSearch.length;m++){
                            for(var k = 0; k<filter(obj,this.props.message).length;k++){
                                
                                     if(filter(obj,this.props.message)[k][this.props.keywordSearch[m]]!==null){
                                        if(filter(obj,this.props.message)[k][this.props.keywordSearch[m]].indexOf(keywordSearch)>=0){
                                            keyword_list.push(filter(obj,this.props.message)[k])
                                        }
                                     }
                                   
                                }
                            
                            }
                    }
                }else{
                    for(var n = 0;n<filter(obj,this.props.message).length;n++){
                        keyword_list.push(filter(obj,this.props.message)[n])
                    }
                }
    //  console.log(filter(obj,this.props.message))
    this.props.screeningMessage(keyword_list)
            // this.setState({
            //     view_table_list:screening_list
            // })
    
        }
         /** 
         * @time 2018-12-19
         * @author xuesong
         * @param clear_search 函数 清空所有筛选条件
         */
        clear_search=()=>{
            if(this.props.selectNameMessage){
            for(var i = 0; i<this.props.selectNameMessage.length;i++){
                document.getElementById("select_message"+i+"_name").innerHTML="-选择-"
            }
        }
            document.getElementById("keywordSearch").value="";
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
        select_title_index=(index)=>{
            this.setState({
                title_index:index
            })
            console.log(index)
        }
        // console.log(this.props.keywordTitle)
        render(){
         console.log(this.state.title_index)
            const {id,message} =this.props;
            return (
                <div>
                    <button
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
                             selectedInfo={this.props.keywordTitle[0].name}
                             keywordTitle={this.props.keywordTitle} 
                             selectTitleIndex={this.select_title_index}    
                            />

                        <KeywordSearch 
                            displayNone={this.state.title_index===0?1:0}
                            style={this.state.title_index===0?{}:{display:"none"}}
                            id={"keywordSearch"}
                        />
                         {this.props.selectListMessage?this.props.selectListMessage.map((selectListMessage,index)=>{
                            return(
                                <SelectMessage
                                key={index}
                                displayNone={index+1===this.state.title_index?1:0}
                                id={"select_message"+index}
                                searchInfoLists={selectListMessage}     
                            />
                            )
                        }):""}
                        <button className="select_right_btn"
                            onClick={()=>{
                                this.screening_information()
                            }}
                        >搜索</button>
                        

                       
                    
                       
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
                            {this.state.search_arr.length>0?<button
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
    export default ScreeningMessage;
    