/** 
     * @author xuesong
     * @param LoanBill 组件  借款单
     */
    import React, { Component } from 'react';
    class LoanBill extends Component {
            
        render(){
            const {message} = this.props;
            return (
                <div  className="loan_box" id="loan_print" style={{"pageBreakAfter":"always"}}>
				<div className="loan_code_id">
					<dd>编码：</dd>
					<dd>{message.unicode}</dd>
				</div>
				<div className="loan_title">
					<dt><span>借款</span>单</dt>
				</div>
				<div className="loan_nav">
					<div className="nav_block1">
						<span>资金性质</span>
						<span></span>
					</div>

					<div className="nav_block2">
						<span className="block2_year"></span>
						<i className="block2_unit_year">年</i>
						<span className="block2_month"></span>
						<i className="block2_unit_month">月</i>
						<span className="block2_day"></span>
						<i className="block2_unit_day">日</i>
					</div>
				</div>
				<div className="loan_content">
					<div className="content_box1">
						<span>借款单位：</span>
						<span>123</span>
					</div>
					<div className="content_box2">
						<span>借款理由：</span>
						<span></span>
					</div>
					<div className="content_box3">
						<span>借款数额：人民币（大写）</span>
						<span></span>
						<span>￥</span>
						<span></span>
					</div>
					<div className="content_box4">
						<span>本单位负责人意见：</span>
						<span></span>
						<span>借款人（签章）</span>
						<span></span>
					</div>
					<div className="content_box5">
						<div className="loan_box5_block1">
							<span>总经理批示：</span>
							<span></span>
						</div>
						<div className="loan_box5_block2">
							<span>会计主管人员核批：</span>
							<span></span>
						</div>
						<div className="loan_box5_block3">
							<span>付款记录：</span>
							<div className="box5_block3_time">
								<span></span>
								<b>年</b>
								<span></span>
								<b>月</b>
								<span></span>
								<b>日</b>
								<b>以第</b>
								<span className="box5_block3_span5"></span>
								<b>号</b>
							</div>
							<span className="box5_block3_span6"></span>
							<span>支票或现金支出凭单付给</span>
							<span className="box5_block3_span7"></span>
						</div>
					</div>
				</div>
			</div>
              )
                
                
        }
    }
    export default LoanBill;
    