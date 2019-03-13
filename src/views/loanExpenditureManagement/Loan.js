import React, { Component } from 'react';
import LoanAccounting from './LoanAccounting'
import LoanExaminationAndApproval from './LoanExaminationAndApproval'
import Editor from '../components/watch/Editor';
class Loan extends Component {
   
	render(){
		return (
			<div>
				<Editor 
					textarea_id={"lecturer"}
				/>
			</div>
            // <div>
            // 	借款
			// </div>
			// <LoanAccounting>
			// 	<LoanExaminationAndApproval/>
			// 	</LoanAccounting>
		)
	}
}

export default Loan;
