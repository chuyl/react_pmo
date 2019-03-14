/** 
     * @author xuesong
     * @param Editor 组件  label+textarea
     */
    import React, { Component } from 'react';
    import SelectListLangPack from '../select/SelectListLangPack'

    class EditEditor extends Component {
        state={
            message_list:[],
            textareaState:true,
            changeState:0,
            showMessageState:true,
            isSelected:false,
            select_index:-1,
            show_p_style:"",
            message_changed_style_list:[],
            alert_div_state:false,
            brush_className:"",
            brush_div:null,
            brush_text:"",
            contenteditableState:-1,
            editor_str:"",
            // obj_message_list:{}
        }
    /** 
     * @author xuesong
     * @param textareaChange 组件  点击模块1的next
     */
        textareaChange=(e)=>{
            console.log(this.props.message)
            var text_list=document.getElementById("edit_textarea").children;
            for(var i =0;i<text_list.length;i++){
                console.log()
                // if(text_list[i].id)
                // var strContent = text_list[i];
                // console.log(strContent)
                // strContent = strContent.replace(/\r\n/g, '<br/>'); //IE9、FF、chrome
                // strContent = strContent.replace(/\n/g, '<br/>'); //IE7-8
                // var message_list=[];
                // for(var m = 0;m<strContent.split("<br/>").length;m++){
                //     message_list.push({text:strContent.split("<br/>")[i]})
                // }
                // console.log(message_list)
            }
               
                // strContent = strContent.replace(/\s/g, ' '); //空格处理
              
            console.log(document.getElementById("edit_textarea"))
            // this.setState({
            //     textareaState:!this.state.textareaState 
            // })
            // if(this.state.textareaState){
            //     var strContent = document.getElementById("add_textarea").value;
            //     strContent = strContent.replace(/\r\n/g, '<br/>'); //IE9、FF、chrome
            //     strContent = strContent.replace(/\n/g, '<br/>'); //IE7-8
            //     // strContent = strContent.replace(/\s/g, ' '); //空格处理
              
            //     var message_list=[];
            //     for(var i = 0;i<strContent.split("<br/>").length;i++){
            //         message_list.push({id:i,class:"",content:[{type:"def",text:strContent.split("<br/>")[i]}]})
            //     }
            //     console.log(message_list)
            //     this.setState({
            //         message_list:message_list
            //     })
            // }
           
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
                edit_message_list.push({id:i,class:newState.name,content:this.state.message_list[i].content})
               }else{
                edit_message_list.push({id:i,class:this.state.message_list[i].class,content:this.state.message_list[i].content})
               }
            }
            this.setState({
                message_list:edit_message_list,
                isSelected:true
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
                    }else if(str[j].type==="red"){
                        editor_str=editor_str+"**"+str[j].text+"**"
                    }else if(str[j].type==="grey"){
                        editor_str=editor_str+"=="+str[j].text+"=="
                    }
                }
                }
            }
            document.getElementById("show_message"+index).innerHTML=editor_str;
            this.setState({
                contenteditableState:index,
                editor_str:editor_str
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
                                    str_content_arr.push({"type":"grey","text":str_weaken[j]})
                                }
                            }
                        }else{
                            new_str=new_str+str_emphasize[i];
                            str_content_arr.push({"type":"def","text":str_emphasize[i]})
                        }
                    }else{
                        // 强调
                        new_str=new_str+'<span class="emphasize">'+str_emphasize[i]+'</span>';
                        str_content_arr.push({"type":"red","text":str_emphasize[i]})
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
            })
        }
        onKeyUpTextarea=(e)=>{
            if(e.keyCode === 13){
                console.log("点击回车13")
            }
        }
        render(){
            const {textarea_id,inputValue,message} =this.props;
           console.log(message)
           
            return (
                <div>
                    {/* 模块1 */}
                    {/* <textarea className={this.state.changeState===0?"editor_module_one active":"editor_module_one"} rows="10" cols="60" id={"add_textarea"}>
                    </textarea>  */}
                    <div id="edit_textarea" contentEditable={true} 
                    onKeyUp={(e)=>{
                        this.onKeyUpTextarea(e)
                    }}
                    >
                    {message.map((message_list,index)=>{
                        return(
                            <div 
                                key={index}
                                id={"show_style_message"+index}
                                className={message_list.class}
                            >
                                {message_list.content.map((content,index)=>{
                                    return(
                                        content.type==="def"?content.text:
                                        <span className={content.type}>{content.text}</span>
                                        )
                                    })}
                                        {/* {message_list.content[0].text+message_list.class} */}
                            </div>
                                   
                                    
                            )
                        })}
                    </div>
                    <button onClick={this.textareaChange.bind(this)}>{this.state.textareaState?"next":"back"}</button>
                    {/* 模块2 */}
                    <div style={{width:"400px",height:"300px",border:"1px solid"}} className={this.state.showMessageState?"editor_module_two active":"editor_module_two"}>
                        {this.state.message_list.map((message_list,index)=>{
                            return(
                                <div style={{height:"4em"}} key={index}>
                                    <div style={{width:"15em",float:"left"}}>
                                        <SelectListLangPack
                                            id={"select_lecturer_style"+index}
                                            stateFun={this.selectLangPackProps}
                                            langPack={"editor"}
                                            index={index}
                                        />
                                    </div>
                                    <div 
                                       style={this.state.contenteditableState==index?{display:"block"}:{display:"none"}}
                                        // contentEditable={this.state.contenteditableState==index?true:false}
                                        id={"show_message"+index}
                                        className={message_list.class}
                                    >
                                    {message_list.content.map((content,index)=>{
                                       
                                        return(
                                            content.type==="def"?content.text:
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
                                            content.type==="def"?content.text:
                                            <span className={content.type}>{content.text}</span>

                                        )
                                    })}
                                    </div>
                                    <button onClick={()=>{
                                        this.contenteditableChange(index)
                                    }}>编辑</button>
                                    <button onClick={()=>{
                                        this.contenteditableHold(index,"show_message"+index)
                                    }}>保存</button>
                                    
                                </div>
                            )
                        })}
                    </div>
                    <button onClick={this.showMessageChange.bind(this)}>{this.state.showMessageState?"next":"back"}</button>
                    <div style={{display:"none"}} name="" id={textarea_id} cols="30" rows="10">
                    </div>
                </div>
            )
        }
    }
    export default EditEditor;
    