/** 
     * @author xuesong
     * @param LoanBill 组件  借款单
     */
    import React, { Component } from 'react';
    class Travel extends Component {
            
        render(){
            const {message} = this.props;
            return (
                <div id="travel_big_box" class="travel_big_box">

        <div class="left_top_title">
            <dt>
                中软计算机培训中心
            </dt>
        </div>
        <div class="travel_code_id">
            <dd>项目编号：</dd>
            <dd>20181228001</dd>
        </div>
        <div class="travel_id_num">
            <span>差旅明细单编号：</span>
            <span>20181228001</span>
        </div>
        <div class="travel_box1">
            <span class="t_box1_span1">
                申请人
            </span>
            <span class="t_box1_span2">
                刘雪松
            </span>
            <span class="t_box1_span3">
                申请部门
            </span>
            <span class="t_box1_span4">
                市场部
            </span>
            <span class="t_box1_span5">
                申请时间
            </span>
            <span class="t_box1_span6">
                20181218
            </span>
        </div>
        <div class="travel_box1">
            <span class="t_box1_span1">
                出差事由
            </span>
            <span class="t_box1_span2">
                项目经理
            </span>
            <span class="t_box1_span3">
                出差天数
            </span>
            <span class="t_box1_span4">
                3天
            </span>
            <span class="t_box1_span5">
                出差人数
            </span>
            <span class="t_box1_span6">
                1
            </span>
        </div>
        <div class="travel_remark">
            <span>长途交通</span>
        </div>
        <div class="travel_box3">
            <div class="travel_box3_row1">
                <dd class="box3_row1_dd1">出差人</dd>
                <dd class="box3_row1_dd2">出发时间</dd>
                <dd class="box3_row1_dd3">出发地点</dd>
                <dd class="box3_row1_dd4">到达时间</dd>
                <dd class="box3_row1_dd5">到达地点</dd>
                <dd class="box3_row1_dd6">交通工具</dd>
                <dd class="box3_row1_dd7">长途路费</dd>

            </div>
            <div class="travel_box3_row2">
                <dd class="box3_row2_dd1">刘雪松</dd>
                <dd class="box3_row2_dd2">20181228</dd>
                <dd class="box3_row2_dd3">北京</dd>
                <dd class="box3_row2_dd4">20181228</dd>
                <dd class="box3_row2_dd5">哈尔滨</dd>
                <dd class="box3_row2_dd6">火车</dd>
                <dd class="box3_row2_dd7">350.00</dd>

            </div>
            <div class="travel_box3_row3">
                <dd class="box3_row3_dd1"></dd>
                <dd class="box3_row3_dd2"></dd>
                <dd class="box3_row3_dd3"></dd>
                <dd class="box3_row3_dd4"></dd>
                <dd class="box3_row3_dd5"></dd>
                <dd class="box3_row3_dd6"></dd>
                <dd class="box3_row3_dd7"></dd>
            </div>
        </div>
        <div class="travel_remark">
            <span>差旅费基本费用(注明现金，支票)</span>
        </div>
        <div class="travel_box4">
            <div class="travel_box4_row1">
                <dd class="box4_row1_dd1">项目</dd>
                <dd class="box4_row1_dd2">说明</dd>
                <dd class="box4_row1_dd3">金额</dd>

            </div>
            <div class="travel_box4_row2">
                <dd class="box4_row3_dd1">路费</dd>
                <dd class="box4_row3_dd2">北京到哈尔滨火车</dd>
                <dd class="box4_row3_dd3">350.00</dd>
            </div>
            <div class="travel_box4_row2">
                <dd class="box4_row3_dd1">住宿费用</dd>
                <dd class="box4_row3_dd2"></dd>
                <dd class="box4_row3_dd3">200.00</dd>
            </div>
            <div class="travel_box4_row2">
                <dd class="box4_row3_dd1">餐费</dd>
                <dd class="box4_row3_dd2"></dd>
                <dd class="box4_row3_dd3">200.00</dd>
            </div>
            <div class="travel_box4_row2">
                <dd class="box4_row3_dd1">其他</dd>
                <dd class="box4_row3_dd2"></dd>
                <dd class="box4_row3_dd3"></dd>
            </div>
            <div class="travel_box4_row2">
                <dd class="box4_row3_dd1">备注</dd>
                <dd class="box4_row3_dd2"></dd>
                <dd class="box4_row3_dd3"></dd>
            </div>
        </div>
        <div class="travel_remark">
            <span>预支现金金额</span>
        </div>
        <div class="travel_box5">
                750.00
            <span></span>
        </div>
        <div class="travel_box6">
            <div class="travel_box6_row1">
                <span>申请人:</span>
                <span></span>
                <span>部门经理:</span>
                <span></span>
                <span>财务:</span>
                <span></span>
            </div>
            <div class="travel_box6_row2">
                <span>部门总监: </span>
                <span></span>
                <span>总经理:</span>
                <span></span>
            </div>
        </div>

    </div>
              )
                
                
        }
    }
    export default Travel;
    