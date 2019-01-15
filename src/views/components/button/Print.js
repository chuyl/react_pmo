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
           
            print_id:"",
            print_message:{}
    
        } 
    render() {
       
            const {button,printMessage,allData} = this.props
            return (
                <div>
                    <div style={{float:"left",width:"33%",lineHeight:"3em",boxSizing:"border-box",padding:"0.5em 1em 0.5em 0"}}>
                        <button  style={{float:"left",marginTop:"0.5em",marginBottom:"0.5em",width:"100%",backgroundColor:"#3F51B5",color:"#fff",boxShadow:"none",textAlign:"center",outline:"none",lineHeight:"2em",borderRadius:"4px",border:"none"}} onClick = {()=>{
                            // console.log(this.props.buttonMessage)
                            console.log(printMessage)
                            this.props.isPrint?
                            $('#'+printMessage+this.props.dataId).printArea():""
                        }}>{button} </button >  
                    </div>
                    {/* <Popup 
                        content={
                            <div>
                                <h2>视图</h2>
                                <div className="popup_content">
                                    <ViewTextField 
                                        onChange={(e)=>{
                                            this.setState({
                                                view_china_name:e.target.value
                                                })
                                        }}
                                        view={true}
                                        value={this.state.view_china_name} 
                                        labelValue={"中文名称"} 
                                    />
                                    <ViewTextField 
                                        onChange={(e)=>{
                                            this.setState({
                                                view_english_name:e.target.value
                                            })
                                        }}
                                        view={true}
                                        value={this.state.view_english_name} 
                                        labelValue={"英文名称"} 
                                    />
                                    <SelectList 
                                        view={true}
                                        id={"view_type"} 
                                        labelValue={"类型"}
                                        searchInfoLists={"view_type"} 
                                        selectedIdInfo={this.state.view_type_name} 
                                        selectedInfo={this.state.view_type_name} 
                                    /> 
                                    <SelectList 
                                        key={"view_mode"}
                                        id={"view_mode"} 
                                        labelValue={"所属模块"}
                                        searchInfoLists={"view_mode"} 
                                        selectedIdInfo={this.state.view_mode} 
                                        selectedInfo={this.state.view_mode} 
                                    /> 
                                </div>
                            </div>
                        }	 
                        sureCallback = {this.sureAddViewCallback.bind(this)} 
                        cancelCallback = { this.cancelAddViewCallback.bind(this) } 
                        alertState={this.state.alertAddViewState}
                    /> */}
                    <LoanBill dataId={this.props.dataId} message={this.props.buttonMessage}/>
                    <Pay dataId={this.props.dataId} message={this.props.buttonMessage}/>
                    <Travel dataId={this.props.dataId} message={this.props.buttonMessage}/>
                    <TravelExpense dataId={this.props.dataId} message={this.props.buttonMessage}/>
                </div> 
             )
        }
    }
    
    export default Print; 
    