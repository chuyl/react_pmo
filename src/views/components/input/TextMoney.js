/** 
     * @author xuesong
     * @param TextMoney 组件  label+input 合法输入金额
     */
    import React, { Component } from 'react';

    class TextMoney extends Component {
        
        onlyNumber=()=>{
                //得到第一个字符是否为负号  
                var number = this.number.value;
                  
                    if(/^\d+\.?\d{0,2}$/.test(number)){
                        this.number.value = this.number.value;
                    }else{
                        this.number.value = this.number.value.substring(0,number.length-1);
                    } 
                // var t = number.charAt(0);
                // this.number.value = this.number.value.replace(/[^\d\.]/g,''); 
                // this.number.value = this.number.value.replace(/\.{2,}/g,'.');
                // this.number.value = this.number.value.replace('.','$#$').replace(/\./g,'').replace('$#$','.');
                // this.number.value = this.number.value.replace(/^(\-)*(\d+)\.(\d\d).*$/,'$1$2.$3');
                //    if(t === '-'){  
			        
			    //    return;
			    //  }  
			
 
        }
        render(){
            const {id,disabled,inputValue,onClick,labelValue} =this.props;
            return (
                <div className="text_field_div">
                    <label className="search_info_list_label">{labelValue}</label>
                    <input  ref={ref=>this.number=ref} onKeyUp={()=>{this.onlyNumber()}} className={"text_field_input"} onClick={onClick} defaultValue={inputValue} disabled={disabled} id={id}/>
            {/* <input type="number"step="0.01" name="points" min="0.01" max="10.00" /> */}
                 </div>
            )
        }
    }
    export default TextMoney;
    