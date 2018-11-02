/** 
     * @author xuesong
     * @param CardOpen 组件  打开Card
     */
    import React, { Component } from 'react';
    class CardOpen extends Component {
        state={
            openCardState:true
        }
        openCtrl=()=>{
          
            var newState = {
                openCardState:this.state.openCardState
               
            }
            this.props.openCtrlState(newState)
          }
        render(){
            return (
               
                <div onClick={()=>{
                    this.setState({
                        openCardState:!this.state.openCardState 
                    })
                    this.openCtrl()
                    // console.log(this.state.openCardState)
                }} className="open-ctrl"></div>
            )
        }
    }
    export default CardOpen;
    