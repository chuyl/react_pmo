/** 
     * @author xuesong
     * @param KeywordSearch 组件  label+input
     */
    import React, { Component } from 'react';
  
    class KeywordSearch extends Component {
        state={
            inputValue:"",
            inputState:false
        }
        handleChange(e) {
            this.setState({
                inputState:true,
                inputValue: e.target.value,
            })
            // this.props.keywordSearch(e.target.value)
          }
        render(){
            const {id,inputValue} =this.props;
            return (
                <div className="form_control">
                    <input type={"text"} defaultValue={inputValue} onChange={this.handleChange.bind(this)} id={id}/>
                </div> 
                )
        }
    }
    export default KeywordSearch;
    