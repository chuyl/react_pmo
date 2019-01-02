/** 
     * @author xuesong
     * @param LoanBill 组件  借款单
     */
    import React, { Component } from 'react';
    class Pay extends Component {
            
        render(){
            const {message} = this.props;
            return (
                <div className="pay_box" id="pay_box">
        <div className="code_id">
            <dd>项目编号：</dd>
            <dd>20181228001</dd>

        </div>
        <div className="pay_id_num">
            <span>支出单编号：</span>
            <span>20181208001</span>
        </div>
        <div className="pay_title">

            <dt className="dt_name">中软总公司计算机培训中心</dt>
            <dt className="dt_big">支出凭单</dt>

            <span className="time_write">
                <span className="time_year">2018</span>
                <i>年</i>
                <span className="time_month">12</span>
                <i>月</i>
                <span className="time_day">28</span>
                <i className="font_day">日</i>
            </span>
        </div>
        <div className="pay_content">
            <div className="pay_content_box1">
                <div className="pay_row1">

                    <span className="now_pay"><b>即</b>付</span>
                    <span className="now_num">培训支出</span>
                    <span className="unit_font">款</span>
                </div>
                <div className="pay_row2">
                    <span>计人民币：</span>
                    <span className="count_num_s">肆仟叁佰元整</span>
                    <span>￥</span>
                    <span className="count_rmb">4300.00</span>
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

    </div>
              )
                
                
        }
    }
    export default Pay;
    