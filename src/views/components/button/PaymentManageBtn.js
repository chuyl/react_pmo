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
                content:this.props.content,
                projectId:this.props.projectId,
                financialNumber:this.props.financialNumber
               }
            this.props.onHoldClick(newState);
        }

        render(){
            const {defineValue}=this.props;
            return (
               <div  style={{"padding":"0 0.4em"}} className={this.props.isClick===true?"card_ide_btn card_related_div":"card_ide_btn card_related_div active"}>
                    <button title={defineValue} style={{"padding":"0 0.8em"}} className="btn_list" disabled={this.props.isClick===true?true:false} onClick={this.onClick} className="hold_btn">{defineValue}</button>
               </div>
            )
        }
    }
    export default PaymentManageBtn;
    