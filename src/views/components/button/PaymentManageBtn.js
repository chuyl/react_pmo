/** 
     * @time 2019-01-17 
     * @author xuesong
     * @param PaymentManageBtn 组件  button
     */
    import React, { Component } from 'react';

    class PaymentManageBtn extends Component {
        onClick=()=>{
            var newState = {
                state:this.props.state,
                dataId:this.props.dataId,
                linkpage:this.props.linkpage,
                // projectId:this.state.projectId,
                // paymentId:this.state.paymentId,
                alertTitle:this.props.defineValue,
                financialNumber:this.props.financialNumber
               }
            this.props.onHoldClick(newState);
        }

        render(){
            const {defineValue}=this.props;
            return (
               <div  style={{"padding":"0 0.4em"}} className="card_ide_btn">
                    <button style={{"padding":"0 0.8em"}} className="btn_list" disabled={this.props.isClick===true?true:false} onClick={this.onClick} className="hold_btn">{defineValue}</button>
               </div>
            )
        }
    }
    export default PaymentManageBtn;
    