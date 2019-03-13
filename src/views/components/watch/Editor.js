/** 
     * @author xuesong
     * @param Editor 组件  label+textarea
     */
    import React, { Component } from 'react';
    import SelectListLangPack from '../select/SelectListLangPack'

    class Editor extends Component {
        state={
            message_list:[],
            textareaState:true,
            changeState:0,
            showMessageState:true,
            isSelected:false,
            select_index:-1,
            show_p_style:"",
            message_changed_style_list:[],
            topX:0+"px",
            topY:0+"px",
            alert_div_state:false,
            brush_className:"",
            brush_div:null,
            brush_text:"",
            contenteditableState:-1
        }
    /** 
     * @author xuesong
     * @param textareaChange 组件  点击模块1的next
     */
        textareaChange=(e)=>{
            this.setState({
                textareaState:!this.state.textareaState 
            })
            if(this.state.textareaState){
                var strContent = document.getElementById(this.props.textarea_id).value;
                strContent = strContent.replace(/\r\n/g, '<br/>'); //IE9、FF、chrome
                strContent = strContent.replace(/\n/g, '<br/>'); //IE7-8
                // strContent = strContent.replace(/\s/g, ' '); //空格处理
              
                var message_list=[];
                for(var i = 0;i<strContent.split("<br/>").length;i++){
                    message_list.push({class:"",message:strContent.split("<br/>")[i],selectedInfo:null})
                }
                console.log(message_list)
                this.setState({
                    message_list:message_list
                })
            }
           
        }
        /** 
         * @author xuesong
         * @param showMessageChange 组件  点击模块2的next
         */
        showMessageChange=()=>{
            this.setState({
                showMessageState:!this.state.showMessageState 
            })
            if(this.state.showMessageState){
                this.setState({
                    message_changed_style_list:this.state.message_list
                })
            }
        }
        /** 
         * @author xuesong
         * @param selectLangPackProps 组件  下拉选择回调函数
         */
        selectLangPackProps=(newState)=>{
            console.log(newState)
            console.log(this.state.message_list)
           var edit_message_list=[];
           for(var i = 0;i<this.state.message_list.length;i++){
               if(newState.index===i){
                edit_message_list.push({class:newState.name,message:this.state.message_list[i].message,selectedInfo:null})
               }else{
                edit_message_list.push({class:this.state.message_list[i].class,message:this.state.message_list[i].message,selectedInfo:null})
               }
            }
            this.setState({
                message_list:edit_message_list,
                isSelected:true
            })
        }
        /** 
         * @author xuesong
         * @param getSelection_message 组件  下拉选择回调函数
         */
        getSelection_message=(e)=>{
            
            var text = "";
            var text_div_content="";
            if (window.getSelection) {
                this.setState({
                    alert_div_state:true,
                    topY:e.pageX-50+"px",
                    topX:e.pageY-70+"px",
                    brush_div:window.getSelection().extentNode.parentNode,
                    brush_text: window.getSelection().toString()

                })
                // 鼠标选择的内容
               // text = window.getSelection().toString();
                //所属标签的内容
               
                // console.log(new_content)
                console.log(window.getSelection())
                console.log(window.getSelection().extentNode.parentNode)
            } else if (document.selection && document.selection.type != "Control") {
                text = document.selection.createRange().text;
                console.log(text)
            }
            if ("" != text) {
                console.log(text);
            }
        }
        //结束
        finishChangeMessage=()=>{
            
        }
        //强调
        emphasizeMessage=()=>{
            console.log(this.state.brush_div.innerHTML)
            var text_div_content=""
            text_div_content=this.state.brush_div.innerHTML;
                
            // text_div_content.split(text);截取选中内容
            console.log(text_div_content.split(this.state.brush_text))

            //获取选中后的前后内容
            var before_after_arr=text_div_content.split(this.state.brush_text);
            var new_content=before_after_arr[0]+'<span class="emphasize">'+this.state.brush_text+'</span>'+before_after_arr[1];
            this.state.brush_div.innerHTML=new_content;
            this.setState({
                alert_div_state:false
            })
        }
        //弱化
        weakenMessage=()=>{
            var text_div_content=""
            text_div_content=this.state.brush_div.innerHTML;
            console.log(text_div_content.split(this.state.brush_text))
            //获取选中后的前后内容
            var before_after_arr=text_div_content.split(this.state.brush_text);
            var new_content=before_after_arr[0]+'<span class="weaken">'+this.state.brush_text+'</span>'+before_after_arr[1];
            this.state.brush_div.innerHTML=new_content;
            this.setState({
                alert_div_state:false
            })
        }
        // div可编辑
        contenteditableChange=(index)=>{
            this.setState({
                contenteditableState:index
            })
        }
        contenteditableHold=(index)=>{
            // console.log(document.getElementById("show_message"+index).innerHTML);
            var str = document.getElementById("show_message"+index).innerHTML;
            var str_arr=[];
            for(var i=0;i<str.length;i++){
                if((str.charAt(i)!=="*"&&str.charAt(i+1)!=="*")){
                    
                }else{
                    console.log(str.charAt(i));
                }
               
                }

            this.setState({
                contenteditableState:-1
            })
        }
       
        render(){
            const {textarea_id,inputValue} =this.props;
            // console.log(this.state.message_list)
            // if(window.getSelection){
            //     var range=document.createRange();
            //     range.selectNodeContents(this);
            //     var selection = window.getSelection();
            //     selection.removeAllRanges();
            //     selection.addRange(range)            
            //     }
           
            return (
                <div>
                    {/* 模块1 */}
                    <textarea className={this.state.changeState===0?"editor_module_one active":"editor_module_one"} rows="10" cols="60" id={textarea_id}>
                    </textarea> 
                    <button onClick={this.textareaChange.bind(this)}>{this.state.textareaState?"next":"back"}</button>
                    {/* 模块2 */}
                    <div style={{width:"400px",height:"300px",border:"1px solid"}} className={this.state.showMessageState?"editor_module_two active":"editor_module_two"}>
                        {this.state.message_list.map((message_list,index)=>{
                            console.log(message_list)
                            // console.log(document.getElementById("select_lecturer_style"+index+"_name"))
                            return(
                                <div style={{height:"4em"}} key={index}>
                                    <div style={{width:"15em",float:"left"}}>
                                        <SelectListLangPack
                                            id={"select_lecturer_style"+index}
                                            stateFun={this.selectLangPackProps}
                                            langPack={"editor"}
                                            index={index}
                                            selectedInfo={message_list.selectedInfo}
                                            // isSelected={this.state.isSelected}
                                            // selectedIdInfo={"-选择-"} 
                                        />
                                    </div>
                                    <div 
                                        contentEditable={this.state.contenteditableState==index?true:false}
                                        id={"show_message"+index}

                                        onChange={()=>{
                                            this.changeContentEditDiv()
                                        }}
                                        className={message_list.class}
                                    >
                                        {message_list.message+message_list.class}
                                    </div>
                                    <button onClick={()=>{
                                        this.contenteditableChange(index)
                                    }}>编辑</button>
                                    <button onClick={()=>{
                                        this.contenteditableHold(index)
                                    }}>保存</button>
                                    
                                </div>
                            )
                        })}
                        <button onClick={this.showMessageChange.bind(this)}>{this.state.showMessageState?"next":"back"}</button>
                    </div>
                    <div id="ceshi" contentEditable={true}>123456789</div>
                    <button onClick={()=>{
                        var str = document.getElementById("ceshi").innerHTML;
                        var str_arr=[];
                        for(var i=0;i<str.length;i++){
                            if((str.charAt(i)!=="*"&&str.charAt(i+1)!=="*")){
                                console.log(str.charAt(i));
                            }else{
                                console.log(str.charAt(i));
                            }
                            
                            }
                    }}>保存</button>
                    {/* 模块3 */}
                    {/* <div style={{width:"400px",height:"300px",border:"1px solid"}}>
                        {this.state.message_changed_style_list.map((list,index)=>{
                            return(
                                <div 
                                key={index}
                                id={"show_changed_message"+index}
                                className={list.class}
                                onClick={this.getSelection_message.bind(this)}
                            >{list.message}</div>
                            )
                        })}
                        <button onClick={this.finishChangeMessage.bind(this)}>finish</button>
                    </div> */}
                    
                    <div style={this.state.alert_div_state?{top:this.state.topX,left:this.state.topY,position:"absolute"}:{display:"none"}}>
                        <button onClick={this.emphasizeMessage.bind(this)}>强调</button>
                        <button onClick={this.weakenMessage.bind(this)}>弱化</button>
                    </div>
                    
                </div>
            )
        }
    }
    export default Editor;
    