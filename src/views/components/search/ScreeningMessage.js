/** 
     * @author xuesong
     * @param ScreeningMessage 组件  label+input
     */
    import React, { Component } from 'react';
    import KeywordSearch from './KeywordSearch';
    import SelectMessage from './SelectMessage'
    class ScreeningMessage extends Component {
        state={
            inputValue:"",
            inputState:false,
            message_list:this.props.message,
            search_arr:[]
            // message_spare_list:this.props.message,
        }
     
          screening_information=()=>{
            var key=this.props.selectNameMessage?this.props.selectNameMessage:[];
            var value=[];
           if(this.props.selectNameMessage){
            
                for(var i = 0; i<this.props.selectNameMessage.length;i++){
                    value.push(document.getElementById("select_message"+i+"_name").innerHTML==="-选择-"?"":document.getElementById("select_message"+i+"_name").innerHTML)
                }
            }
            // var value=this.props.selectNameMessage;
            console.log(this.props.keywordSearch)
            key.push(this.props.keywordSearch);
            value.push(document.getElementById("keywordSearch").value)
            var obj = {};
            for (var j = 0; j < key.length; j++) {
                obj[key[j]] = value[j]
            }
            console.log(obj)
            var search_arr=[];
            for(var key in obj){ 
                if(obj[key]!==""){
                    search_arr.push({name:obj[key]})   
                }
                }   
                this.setState({
                    search_arr:search_arr
                })
                console.log(search_arr)
            let filter=(condition,data)=>{
                return data.filter( item => {
                    return Object.keys( condition ).every( key => {
                    return String( item[ key ] ).toLowerCase().includes( 
                            String( condition[ key ] ).trim().toLowerCase() )
                        } )
                } )
                }
    //  console.log(filter(obj,this.props.message))
    this.props.screening_message(filter(obj,this.props.message))
            // this.setState({
            //     view_table_list:screening_list
            // })
    
        }
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
            console.log(this.props.message)
            this.props.screening_message(this.props.message)
        }
        render(){
            const {id,message} =this.props;
            return (
                <div>
                    <KeywordSearch
                        id={"keywordSearch"}
                    />
                    {this.props.selectListMessage?this.props.selectListMessage.map((selectListMessage,index)=>{
                        return(
                            <SelectMessage
                            key={index}
                            id={"select_message"+index}
                            searchInfoLists={selectListMessage}     
                        />
                        )
                    }):""}
                   
                    <button
                        onClick={()=>{
                            this.screening_information()
                        }}
                    >搜索</button>
                    <div>
                        <span>
                            {this.state.search_arr.length>0?"关键字:":""}
                        </span>
                        {this.state.search_arr.map((search_arr,index)=>{
                            return(
                                <span key={index} style={search_arr.name!==""?{border:"1px dashed #fff",margin:"3px",padding:"2px 5px"}:{}}>{search_arr.name+"  "}</span>
                            )
                        })}
                        {this.state.search_arr.length>0?<button
                            onClick={()=>{
                               this.clear_search() 
                            }}
                        >
                            清空
                        </button>:""}
                    </div>
              </div>
            )
        }
    }
    export default ScreeningMessage;
    