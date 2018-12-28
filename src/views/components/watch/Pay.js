/** 
     * @author xuesong
     * @param LoanBill 组件  借款单
     */
    import React, { Component } from 'react';
    class Pay extends Component {
            
        render(){
            const {message} = this.props;
            return (
                <div class="pay_box" id="pay_box">
        <div class="code_id">
            <dd>项目编号：</dd>
            <dd>20181228001</dd>

        </div>
        <div class="pay_id_num">
            <span>支出单编号：</span>
            <span>20181208001</span>
        </div>
        <div class="pay_title">

            <dt class="dt_name">中软总公司计算机培训中心</dt>
            <dt class="dt_big">支出凭单</dt>

            <span class="time_write">
                <span class="time_year">2018</span>
                <i>年</i>
                <span class="time_month">12</span>
                <i>月</i>
                <span class="time_day">28</span>
                <i class="font_day">日</i>
            </span>
        </div>
        <div class="pay_content">
            <div class="pay_content_box1">
                <div class="pay_row1">

                    <span class="now_pay"><b>即</b>付</span>
                    <span class="now_num">培训支出</span>
                    <span class="unit_font">款</span>
                </div>
                <div class="pay_row2">
                    <span>计人民币：</span>
                    <span class="count_num_s">肆仟叁佰元整</span>
                    <span>￥</span>
                    <span class="count_rmb">4300.00</span>
                </div>
            </div>
            <div class="pay_content_box2">
                <span class="box2_item_1">领款人</span>
                <span class="box2_item_man1"></span>
                <span class="box2_item_2">部门经理</span>
                <span class="box2_item_man2"></span>
                <span class="box2_item_3">总监/副总经理</span>
                <span class="box2_item_man3"></span>
                <span class="box2_item_4">执行总经理</span>
                <span class="box2_item_man4"></span>
                <span class="box2_item_5">总经理</span>
                <span class="box2_item_man5"></span>
            </div>

        </div>
        <div class="pay_content_box3">
            <dd class="bottom_item_man1"></dd>
            <dd class="bottom_item1">财务主管</dd>
            <dd class="bottom_item_man2"></dd>
            <dd class="bottom_item2">记账</dd>
            <dd class="bottom_item_man3"></dd>
            <dd class="bottom_item3">出纳</dd>
            <dd class="bottom_item_man4"></dd>
            <dd class="bottom_item4">审核</dd>
            <dd class="bottom_item_man5"></dd>
            <dd class="bottom_item5">制单</dd>
            <dd class="bottom_item_man6"></dd>
        </div>
        <div class="right_box">
            <dd class="right_item1">附单据</dd>
            <dd class="right_item2"></dd>
            <dd class="right_count">张</dd>
        </div>

    </div>
              )
                
                
        }
    }
    export default Pay;
    