/** 
     * @author xuesong
     * @param SectionTimeSearch 组件  less和more
     */
    import React, { Component } from 'react';
  
    class SectionTimeSearch extends Component {
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
                <div style={this.props.displayNone===0?{display:"none"}:{color:"red"}} className="form_control">
                    <input type={"text"} defaultValue={inputValue} onChange={this.handleChange.bind(this)} id={id}/>
                </div> 
                )
        }
    }
    export default SectionTimeSearch;
    