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
            // message_spare_list:this.props.message,
        }
     
          screening_information=()=>{
            console.log(document.getElementById("keywordSearch").value)
           
            var keywordSearch = document.getElementById("keywordSearch").value;
            // var selectSearch = document.getElementById("select_message_name").innerHTML==="-选择-"?"":document.getElementById("select_message_name").innerHTML
            // console.log(document.getElementById("selectSearch").innerHTML)
            var screening_list=[];
            for(var y = 0;y<this.props.selectNameMessage.length;y++){

            }
            // console.log(this.props.message)
            for(var i = 0;i<this.props.message.length;i++){
                if(this.props.message[i][this.props.keywordSearch].indexOf(keywordSearch)>=0){
                    screening_list.push(this.props.message[i])
                }
                // for(var m = 0;m<this.props.selectNameMessage.length;m++){
                //     if(this.props.message[i][this.props.selectNameMessage[m]]===document.getElementById("select_message"+m+"_name").innerHTML){
                //         console.log(document.getElementById("select_message"+m+"_name").innerHTML)
                //     }
                // }
            }
            this.props.screening_message(screening_list)
            // this.setState({
            //     view_table_list:screening_list
            // })
    
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
              </div>
            )
        }
    }
    export default ScreeningMessage;
    