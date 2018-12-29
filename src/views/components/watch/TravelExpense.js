/** 
     * @author xuesong
     * @param LoanBill 组件  借款单
     */
    import React, { Component } from 'react';
    class TravelExpense extends Component {
            
        render(){
            const {message} = this.props;
            return (
                <div id="travel_exp_box" className="travel_exp_box">
                <div className="tvl_row1">
                    <span>部门</span>
                    <span>市场部</span>
                    <dt>差旅费报销单</dt>
                </div>
                <div className="tv_idcode">
                    <span>项目编号:</span>
                    <span>454564</span>
                </div>
                <div className="tvl_id_num">
                    <span>差旅费报销单编号：</span>
                    <span></span>
                </div>
                <div className="tvl_row2">
                    <span>2018</span>
                    <i>年</i>
                    <span>12</span>
                    <i>月</i>
                    <span>28</span>
                    <i>日</i>
                </div>
                <div className="tvl_content1">
                    <div className="tvl_row3_top1">
                        <span>出差人</span>
                        <span>刘雪松</span>
                        <span> 出差事由</span>
                        <span>项目经理</span>
                    </div>
                    <table className="tvl_row3">
                        <tbody>
                        <tr className="tvl_row3_tr1">
                            <td colSpan="4"><span>出</span>发</td>
                            <td colSpan="4">到达</td>
                            <td rowSpan="2">交通工具</td>
                            <td rowSpan="2">交通费</td>
                            <td colSpan="2">出差津贴</td>
                            <td colSpan="2"><span>其</span><span>他</span><span>费</span>用</td>
                        </tr>
                        <tr className="tvl_row3_tr2">
                            <td>月</td>
                            <td>日</td>
                            <td>时</td>
                            <td>地点</td>
                            <td>月</td>
                            <td>日</td>
                            <td>时</td>
                            <td>地点</td>
                            <td>天数</td>
                            <td>金额</td>
                            <td><span>项</span>目</td>
                            <td>金额</td>
                        </tr>
                        <tr className="tvl_row3_tr3">
                            <td>12</td>
                            <td>28</td>
                            <td>11</td>
                            <td>北京</td>
                            <td>12</td>
                            <td>28</td>
                            <td>18</td>
                            <td>上海</td>
                            <td>火车</td>
                            <td>1</td>
                            <td>200</td>
                            <td></td>
                            <td><span>住</span><span>宿</span>费</td>
                            <td></td>
                        </tr>
                        <tr className="tvl_row3_tr4">
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>市内车费</td>
                            <td></td>
                        </tr>
                        <tr className="tvl_row3_tr5">
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>办公用品费</td>
                            <td></td>
                        </tr>
                        <tr className="tvl_row3_tr6">
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><span>其</span>他</td>
                            <td></td>
                        </tr>
                        <tr className="tvl_row3_tr7">
                            <td colSpan="8"><span>合计</span><span></span></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        </tbody>
                    </table>
                    <div className="tvl_row4">
                        <div className="tvl_row4_box1">
                            <span>报销总额</span>
                            <span><b>人民币</b><b>（大写）</b>
        
                            </span>
                            <dd>伍佰元整</dd>
                        </div>
                        <div className="tvl_row4_box2">
                            <span>预借旅费</span>
                            <span>
                                <dd>￥</dd>
                                <dd>500.00</dd>
                            </span>
                            <span></span>
                        </div>
                        <div className="tvl_row4_box3">
                            <p>
                                <span>补退金额</span>
                                <span>￥</span>
                                <span></span>
                            </p>
                            <p>
                                <span>退还金额</span>
                                <span>￥</span>
                                <span></span>
                            </p>
                        </div>
                    </div>
                    <div className="tvl_row5">
                        <span>领款人</span>
                        <span></span>
                        <span>部门经理</span>
                        <span></span>
                        <span>总监/副总经理</span>
                        <span></span>
        
                    </div>
                    <div className="tvl_row6">
                        <span>执行总经理</span>
                        <span></span>
                        <span>总经理</span>
                        <span></span>
                    </div>
                </div>
        
                <div className="rvl_right_box">
                    <dd><span>附</span><span>单</span>据</dd><span className="list_count"></span>
                    <span className="list_count_num">张</span>
                </div>
        
            </div>
              )
                
                
        }
    }
    export default TravelExpense;
    