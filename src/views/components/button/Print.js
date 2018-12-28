/** 
     * @author xuesong
     * @param Link 组件  label+button
     */
    import React,  {Component }from 'react'; 
    import {printArea} from '../../../utils/PrintArea';
    import {getData, getRouter }from '../../../utils/helpers'
    import LoanBill from '../watch/LoanBill';
    import Pay from '../watch/Pay';
    import Travel from '../watch/Travel'
    import TravelExpense from '../watch/TravelExpense'
    import PropTypes from 'prop-types'; 
    import $ from  'jquery';
    class Print extends Component {
        state={
            loan_bill_list:{
                unicode:"20181217"
            }
    
        } 
    render() {
       
            const {button,printMessage} = this.props
            return (
                <div>
                    <div style={{float:"left",width:"33%",lineHeight:"3em",boxSizing:"border-box",padding:"0.5em 1em 0.5em 0"}}>
                        <button  style={{float:"left",marginTop:"0.5em",marginBottom:"0.5em",width:"100%",backgroundColor:"#3F51B5",color:"#fff",boxShadow:"none",textAlign:"center",outline:"none",lineHeight:"2em",borderRadius:"4px",border:"none"}} onClick = {()=>{
                            console.log(this.props.dataId)
                            this.props.isPrint?
                            $('#'+printMessage).printArea():""
                        }}>{button} </button >  
                    </div>
                    <LoanBill message={this.props.buttonMessage}/>
                    <Pay message={this.state.loan_bill_list}/>
                    <Travel message={this.state.loan_bill_list}/>
                    <TravelExpense message={this.state.loan_bill_list}/>
                </div> 
             )
        }
    }
    
    export default Print; 
    