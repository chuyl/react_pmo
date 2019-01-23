import React, { Component } from 'react';
import LoanAccounting from './LoanAccounting'
import LoanExaminationAndApproval from './LoanExaminationAndApproval'
class Loan extends Component {
   
	render(){
		return (
            // <div>
            // 	借款
			// </div>
			<LoanAccounting>
				<LoanExaminationAndApproval/>
				</LoanAccounting>
		)
	}
}

export default Loan;
