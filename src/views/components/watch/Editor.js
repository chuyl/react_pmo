/** 
     * @author xuesong
     * @param Editor 组件  label+textarea
     */
    import React, { Component } from 'react';
    import SelectListLangPack from '../select/SelectListLangPack'
    import Popup from '../modal/Popup';

    class Editor extends Component {
        state={
            message_list:this.props.message?this.props.message:[],
            textareaState:true,
            changeState:0,
            showMessageState:true,
            isSelected:false,
            select_index:-1,
            show_p_style:"",
            message_changed_style_list:[],
            topX:0+"px",
            topY:0+"px",
            openNewState:false,
            brush_className:"",
            brush_div:null,
            brush_text:"",
            contenteditableState:-1,
            editor_str:"",
            close_add_btn:true,
            openBetweenState:false,
            addBetweenIndex:-1,
            edit_state:false
            // obj_message_list:{}
        }
    /** 
     * @author xuesong
     * @param textareaChange 组件  点击模块1的next
     */
        textareaChange=(e)=>{
          
                var strContent = document.getElementById("add_textarea").value;
                strContent = strContent.replace(/\r\n/g, '<br/>'); //IE9、FF、chrome
                strContent = strContent.replace(/\n/g, '<br/>'); //IE7-8
                // strContent = strContent.replace(/\s/g, ' '); //空格处理
              
                var message_list=[];
                for(var i = 0;i<strContent.split("<br/>").length;i++){
                    message_list.push({id:i,class:"default_title main_boby",content:[{type:"def",text:strContent.split("<br/>")[i]}]})
                }
                if(message_list.length>0){
                    this.setState({
                        close_add_btn:false,
                        message_list:message_list,
                        alertAddTextState:false
                    })
                }else{
                    this.setState({
                        message_list:message_list,
                        alertAddTextState:false
                    })
                }
                console.log(message_list)
               
           
           
        }
        addBetweenHold=()=>{

            var strContent = document.getElementById("add_between_textarea").value;
            strContent = strContent.replace(/\r\n/g, '<br/>'); //IE9、FF、chrome
            strContent = strContent.replace(/\n/g, '<br/>'); //IE7-8
            // strContent = strContent.replace(/\s/g, ' '); //空格处理
            var message_list=[];
            for(var j = 0;j<this.state.message_list.length;j++){
                if(j===this.state.addBetweenIndex){
                    message_list.push(this.state.message_list[j])
                    for(var i = 0;i<strContent.split("<br/>").length;i++){
                        message_list.push({id:i,class:"default_title main_boby",content:[{type:"def",text:strContent.split("<br/>")[i]}]})
                    }
                }else{
                    message_list.push(this.state.message_list[j])
                }
            }
            console.log(message_list)
                this.setState({
                    message_list:message_list,
                    openBetweenState:false
                })
           
        }
        /** 
         * @author xuesong
         * @param showMessageChange 组件  点击模块2的next
         */
        showMessageChange=()=>{
            document.getElementById(this.props.textarea_id).innerHTML=JSON.stringify(this.state.message_list);
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
                edit_message_list.push({id:i,class:newState.name+" default_title",content:this.state.message_list[i].content})
               }else{
                edit_message_list.push({id:i,class:this.state.message_list[i].class+" default_title",content:this.state.message_list[i].content})
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
           
            console.log()
            console.log(window.getSelection().toString().length)
            if (window.getSelection().toString().length>0) {
                if(window.getSelection().toString()===this.state.brush_text){
                    this.setState({
                        openNewState:false,
                    })
                }else{
                    this.setState({
                        openNewState:true,
                        topY:e.pageX-50+"px",
                        topX:e.pageY-30+"px",
                        brush_div:window.getSelection().extentNode.parentNode,
                        brush_text: window.getSelection().toString()
    
                    })
                }
                
                // 鼠标选择的内容
               // text = window.getSelection().toString();
                //所属标签的内容
               
                // console.log(new_content)
            } else {
                this.setState({
                    openNewState:false,
                })
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
            var new_content=before_after_arr[0]+'**'+this.state.brush_text+'**'+before_after_arr[1];
            this.state.brush_div.innerHTML=new_content;
            this.setState({
                openNewState:false
            })
        }
        //弱化
        weakenMessage=()=>{
            var text_div_content=""
            text_div_content=this.state.brush_div.innerHTML;
            console.log(text_div_content.split(this.state.brush_text))
            //获取选中后的前后内容
            var before_after_arr=text_div_content.split(this.state.brush_text);
            var new_content=before_after_arr[0]+'=='+this.state.brush_text+'=='+before_after_arr[1];
            this.state.brush_div.innerHTML=new_content;
            this.setState({
                openNewState:false
            })
        }
        // div可编辑
        contenteditableChange=(index)=>{
          
            var editor_str="";
            for(var i = 0;i<this.state.message_list.length;i++){
                if(index===i){
                    var str = this.state.message_list[i].content;
                    for(var j = 0;j<str.length;j++){
                    if(str[j].type==="def"){
                        editor_str=editor_str+str[j].text
                    }else if(str[j].type==="emphasize"){
                        editor_str=editor_str+"**"+str[j].text+"**"
                    }else if(str[j].type==="weaken"){
                        editor_str=editor_str+"=="+str[j].text+"=="
                    }
                }
                }
            }
            document.getElementById("show_message"+index).innerHTML=editor_str;
            this.setState({
                contenteditableState:index,
                editor_str:editor_str,
                edit_state:true
            })

        }
        contenteditableHold=(index,text_id)=>{
            var str = document.getElementById(text_id).innerHTML;
            var str_all_emphasize=str.split("**");
            var str_emphasize=[];
            var str_content_arr=[];
            var str_weaken=[];
            var new_str="";
            //  console.log(str_all_emphasize.length)
             if(str_all_emphasize.length%2===0){
                 for(var m = 0; m<str_all_emphasize.length-2;m++){
                    str_emphasize.push(str_all_emphasize[m])
                 }
                 str_emphasize.push(str_all_emphasize[str_all_emphasize.length-2]+"**"+str_all_emphasize[str_all_emphasize.length-1])
             }else{
                str_emphasize=str_all_emphasize;
             }
                for(var i = 0; i<str_emphasize.length;i++){
                    if(i%2===0){
                        // 默认
                        var str_all_weaken=str_emphasize[i].split("==");
                        if(str_all_weaken.length%2===0){
                            for(var n = 0; n<str_all_weaken.length-2;n++){
                                str_weaken.push(str_all_weaken[n])
                            }
                            str_weaken.push(str_all_weaken[str_all_weaken.length-2]+"=="+str_all_weaken[str_all_emphasize.length-1])
                        }else{
                            str_weaken=str_all_weaken;
                        }
                        if(str_weaken.length%2!==0){
                            for(var j = 0; j<str_weaken.length;j++){
                                if(j%2===0){
                                    // 默认 
                                    new_str=new_str+str_weaken[j];
                                    str_content_arr.push({"type":"def","text":str_weaken[j]})
                                }else{
                                    new_str=new_str+'<span class="weaken">'+str_weaken[j]+'</span>';
                                    str_content_arr.push({"type":"weaken","text":str_weaken[j]})
                                }
                            }
                        }else{
                            new_str=new_str+str_emphasize[i];
                            str_content_arr.push({"type":"def","text":str_emphasize[i]})
                        }
                    }else{
                        // 强调
                        new_str=new_str+'<span class="emphasize">'+str_emphasize[i]+'</span>';
                        str_content_arr.push({"type":"emphasize","text":str_emphasize[i]})
                    }
                }
            
                var edit_message_list=[];
            for(var y = 0;y<this.state.message_list.length;y++){
                if(index===y){
                    var obj=this.state.message_list[y];
                    obj.content=[];
                    for(var w = 0;w<str_content_arr.length;w++){
                        
                        obj.content.push(str_content_arr[w])
                       
                    }
                    
                    edit_message_list.push(obj)
                }else{
                  edit_message_list.push(this.state.message_list[y])
                }
             }
            this.setState({
                contenteditableState:-1,
                message_list:edit_message_list,
                edit_state:false
            })
        }
        // 删除
        delEditorContent=(index)=>{
            var message_list=[];
            for(var i=0;i<this.state.message_list.length;i++){
                
                if(i !== index){
                    message_list.push(this.state.message_list[i])
                }
            }
            this.setState({
                message_list:message_list,
                edit_state:false
            })
        }
        cancelCallback=()=>{
            this.setState({
              alertAddTextState:false,
              openBetweenState:false
            })
          }
        open_between_alert=(index)=>{
            this.setState({
                openBetweenState:true,
                addBetweenIndex:index
            })
             
        }
        render(){
            const {textarea_id,inputValue,message} =this.props;
            return (
                this.props.view?inputValue:
                <div>
                    <div className="text_field_div">
                        <label className="search_info_list_label">{inputValue}</label>
                    </div>
                     {/* 模块1 */}
                    {this.props.view?""
                        :message?""
                        :this.state.close_add_btn?
                            <div 
                                className="add_card_btn"
                                onClick={()=>{
                                    this.setState({
                                        alertAddTextState:true
                                    })
                                }}
                            >
                                添加段落
                            </div>
                        :""}
                    {/* 模块2 */}
                    <div className={"editor_list_div"}>
                        {this.state.message_list.map((message_list,index)=>{
                            return(
                                <div className={this.state.edit_state?"editor_show_content active":"editor_show_content"} key={index}>
                                    <div className="editor_select_title">
                                        <SelectListLangPack
                                            id={"select_lecturer_style"+index}
                                            stateFun={this.selectLangPackProps}
                                            langPack={"editor"}
                                            index={index}
                                            // disabled={this.state.edit_state?false:true}
                                            // isSelected={this.state.isSelected}
                                            selectedInfo={"正文"} 
                                            selectedIdInfo={"main_boby"} 
                                        />
                                    </div>
                                    <div className="editor_content_div">
                                        <div 
                                         style={this.state.contenteditableState==index?{display:"block"}:{display:"none"}}
                                            contentEditable={this.state.contenteditableState==index?true:false}
                                            id={"show_message"+index}
                                            onClick={this.getSelection_message.bind(this)}
                                            className={message_list.class}
                                        >
                                            {message_list.content.map((content,index)=>{
                                                return(
                                                    content.type==="def"?<span>{content.text}</span>:
                                                    <span className={content.type}>{content.text}</span>
                                                )
                                            })}
                                        </div>
                                        <div 
                                             style={this.state.contenteditableState==index?{display:"none"}:{display:"block"}}

                                            id={"show_style_message"+index}
                                            className={message_list.class}
                                        >
                                            {message_list.content.map((content,index)=>{
                                                return(
                                                    content.type==="def"?<span>{content.text}</span>:
                                                    <span className={content.type}>{content.text}</span>

                                                )
                                            })}
                                        {/* {message_list.content[0].text+message_list.class} */}
                                        </div>
                                        <button
                                            className={this.state.edit_state?"editor_btn":"editor_btn active"}
                                            // style={this.state.edit_state?{display:"none"}:{display:"block"}}
                                            onClick={()=>{
                                                this.contenteditableChange(index)
                                            }}>
                                            编辑
                                        </button>
                                        <button 
                                            className={this.state.edit_state?"editor_btn active":"editor_btn"}
                                            // style={this.state.edit_state?{display:"block"}:{display:"none"}}
                                            onClick={()=>{
                                            this.contenteditableHold(index,"show_message"+index)
                                        }}>
                                            保存
                                        </button>
                                        <button 
                                            className="editor_btn active"
                                            onClick={()=>{
                                            this.delEditorContent(index,"show_message"+index)
                                        }}>
                                            删除
                                        </button>
                                    </div>
                                    <div className="editor_hover_div" onClick={()=>{
                                        this.open_between_alert(index)
                                        }}>
                                        <div  className="editor_add_content">添加段落+</div>
                                    </div>
                                </div>
                            )
                        })}
                       
                    </div>
                    {/* <button onClick={this.showMessageChange.bind(this)}>{this.state.showMessageState?"next":"back"}</button> */}
                    <div  style={{display:"none"}} name="" id={textarea_id} cols="30" rows="10">
                    {JSON.stringify(this.state.message_list)}
                    </div>
                    <Popup 
                        content={
                            <div>
                            <h2>添加段落</h2>
                            <div className="popup_body">
                                <textarea 
                                    className={"editor_textare"}
                                    rows="10" 
                                    id={"add_textarea"}>
                                </textarea> 
                            </div>
                            </div>
                            }	 
                        sureCallback = {this.textareaChange.bind(this)} 
                        cancelCallback = { this.cancelCallback.bind(this) } 
                        alertState={this.state.alertAddTextState}
                    />
                    <Popup 
                        content={
                            <div>
                            <h2>添加段落</h2>
                            <div className="popup_body">
                            <textarea 
                                rows="10" 
                                className={"editor_textare"}
                                id={"add_between_textarea"}>
                            </textarea> 
                            </div>
                            </div>
                            }	 
                        sureCallback = {this.addBetweenHold.bind(this)} 
                        cancelCallback = { this.cancelCallback.bind(this) } 
                        alertState={this.state.openBetweenState}
                        />
                    
                    <div className="change_position" style={this.state.openNewState?{top:this.state.topX,left:this.state.topY,position:"fixed"}:{display:"none"}}>
                        <button className="emphasize_btn" onClick={this.emphasizeMessage.bind(this)}></button>
                        <button className="weaken_btn" onClick={this.weakenMessage.bind(this)}></button>
                    </div>
                    
                </div>
            )
        }
    }
    export default Editor;
    