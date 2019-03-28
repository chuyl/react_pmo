/** 
     * @author xuesong
     * @param LoanBill 组件  借款单
     */
    import React, { Component } from 'react';
    import {dealNumber,dxNumber} from '../../../utils/helpers'
    class Pay extends Component {
        
       
         
        //console.log({});
        render(){
            const {message,dataId} = this.props;
            var myDate = new Date();
			var year=myDate.getFullYear(),
				month=myDate.getMonth()+1>9?myDate.getMonth()+1:"0"+(myDate.getMonth()+1).toString(),
				data=myDate.getDate();
            return (
                <div style={{marginTop:"2em"}} className="pay_box" id={"pay_box"+dataId}>
                    <div className="code_id">
                        <dd>项目编号：</dd>
                        <dd></dd>
                    </div>
                    <div className="pay_id_num">
                        <span>支出单编号：</span>
                        <span>{message.financial_number}</span>
                    </div>
                    <div className="pay_title">
                        <dt className="dt_name">中软总公司计算机培训中心</dt>
                        <dt className="dt_big">支出凭单</dt>
                        <span className="time_write">
                            <span className="time_year">{year}</span>
                            <i>年</i>
                            <span className="time_month">{month}</span>
                            <i>月</i>
                            <span className="time_day">{data}</span>
                            <i className="font_day">日</i>
                        </span>
                    </div>
                    <div className="pay_content">
                        <div className="pay_content_box1">
                            <div className="pay_row1">

                                <span className="now_pay"><b>即</b>付</span>
                                <span className="now_num">{message.item_content}</span>
                                <span className="unit_font">款</span>
                            </div>
                            <div className="pay_row2">
                                <span>计人民币：</span>
                                <span className="count_num_s">{dxNumber(message.amount)}</span>
                                <span>￥</span>
                                <span className="count_rmb">{message.amount?dealNumber(message.amount):"0.00"}</span>
                            </div>
                        </div>
                        <div className="pay_content_box2">
                            <span className="box2_item_1">领款人</span>
                            <span className="box2_item_man1"></span>
                            <span className="box2_item_2">部门经理</span>
                            <span className="box2_item_man2"></span>
                            <span className="box2_item_3">总监/副总经理</span>
                            <span className="box2_item_man3"></span>
                            <span className="box2_item_4">执行总经理</span>
                            <span className="box2_item_man4"></span>
                            <span className="box2_item_5">总经理</span>
                            <span className="box2_item_man5"></span>
                        </div>

                    </div>
                    <div className="pay_content_box3">
                        <dd className="bottom_item_man1"></dd>
                        <dd className="bottom_item1">财务主管</dd>
                        <dd className="bottom_item_man2"></dd>
                        <dd className="bottom_item2">记账</dd>
                        <dd className="bottom_item_man3"></dd>
                        <dd className="bottom_item3">出纳</dd>
                        <dd className="bottom_item_man4"></dd>
                        <dd className="bottom_item4">审核</dd>
                        <dd className="bottom_item_man5"></dd>
                        <dd className="bottom_item5">制单</dd>
                        <dd className="bottom_item_man6"></dd>
                    </div>
                    <div className="right_box">
                        <dd className="right_item1">附单据</dd>
                        <dd className="right_item2"></dd>
                        <dd className="right_count">张</dd>
                    </div>
                    <div style={{margin:"2em 1em"}}>备注:{message.describe}</div>
                </div>
              )
                
                
        }
    }
    export default Pay;
    