import React, { Component }  from "react"
import {
    Route,
  } from 'react-router-dom';
//项目管理
import Customer from '../views/projectManagement/Customer'
import Contact from '../views/projectManagement/Contact'
import TrainingProgram from '../views/projectManagement/TrainingProgram'
import BiddingPlan from '../views/projectManagement/BiddingPlan'
import Contract from '../views/projectManagement/Contract'
import Costing from '../views/projectManagement/Costing'
//预决算管理
import Budget from '../views/budgetAndFinalAccountsManagementcond/Budget'
import FinalAccounts from '../views/budgetAndFinalAccountsManagementcond/FinalAccounts'
import BudgetAccounting from '../views/budgetAndFinalAccountsManagementcond/BudgetAccounting'
import BudgetExaminationAndApproval from '../views/budgetAndFinalAccountsManagementcond/BudgetExaminationAndApproval'
//借款支出管理
import Loan from '../views/loanExpenditureManagement/Loan'
import Expenditure from '../views/loanExpenditureManagement/Expenditure'
import ExpenditureManage from '../views/loanExpenditureManagement/ExpenditureManage'
import LoanAccounting from '../views/loanExpenditureManagement/LoanAccounting'
import LoanExaminationAndApproval from '../views/loanExpenditureManagement/LoanExaminationAndApproval'
import AssociatedProjects from '../views/loanExpenditureManagement/AssociatedProjects'
import LoanProjects from '../views/loanExpenditureManagement/LoanProjects'
import LoanManage from '../views/loanExpenditureManagement/LoanManage'
//课程管理
import TechnologyClassificationManagement from '../views/courseManagement/TechnologyClassificationManagement'
import Course from '../views/courseManagement/Course'
import Classification from '../views/courseManagement/Classification'
//讲师管理
import Lecturer from '../views/lecturerManagement/Lecturer'
import ClassRemuneration from '../views/lecturerManagement/ClassRemuneration'
import TeachingArrangement from '../views/lecturerManagement/TeachingArrangement'
//实施管理
// import RafficTravel from '../views/implementationManagement/RafficTravel'
// import SegmenHotel from '../views/implementationManagement/SegmenHotel'
// import ServiceConsumables from '../views/implementationManagement/ServiceConsumables'
//开班管理
import ClassManagement from '../views/classOpeningManagement/ClassManagement'
import EnrollManagement from '../views/classOpeningManagement/EnrollManagement'
// import ServiceConsumables from '../views/implementationManagement/ServiceConsumables'
//视图管理
import View from '../views/viewManagement/View'
import Menu from '../views/viewManagement/Menu'
import UrlPower from '../views/viewManagement/UrlPower'
// import Langs from '../language'
const Langs = sessionStorage.Language?JSON.parse(sessionStorage.Language):{};
class Routers extends Component{

 message=()=>{
    var components = [];
    for(var i in Langs){
      {Langs[i].data.map((message,index)=>{
        return(
          components.push(
            <Route 
              key={index.toString()+i.toString()} 
              path={message.path} 
              component={message.component==="Customer"?Customer
              :message.component==="Contact"?Contact
              :message.component==="TrainingProgram"?TrainingProgram
              :message.component==="BiddingPlan"?BiddingPlan
              :message.component==="Contract"?Contract
              :message.component==="Costing"?Costing 
              :message.component==="Budget"?Budget
              :message.component==="FinalAccounts"?FinalAccounts
              :message.component==="BudgetAccounting"?BudgetAccounting
              :message.component==="BudgetExaminationAndApproval"?BudgetExaminationAndApproval
              :message.component==="Loan"?Loan
              :message.component==="LoanManage"?LoanManage
              :message.component==="LoanProjects"?LoanProjects
              :message.component==="Expenditure"?Expenditure
              :message.component==="ExpenditureManage"?ExpenditureManage
              :message.component==="LoanAccounting"?LoanAccounting 
              :message.component==="LoanExaminationAndApproval"?LoanExaminationAndApproval
              :message.component==="AssociatedProjects"?AssociatedProjects
              :message.component==="TechnologyClassificationManagement"?TechnologyClassificationManagement
              :message.component==="Course"?Course
              :message.component==="Classification"?Classification
              :message.component==="Lecturer"?Lecturer
              :message.component==="ClassRemuneration"?ClassRemuneration
              :message.component==="TeachingArrangement"?TeachingArrangement
              // :message.component==="RafficTravel"?RafficTravel
              // :message.component==="SegmenHotel"?SegmenHotel
              // :message.component==="ServiceConsumables"?ServiceConsumables
              :message.component==="ClassManagement"?ClassManagement
              :message.component==="EnrollManagement"?EnrollManagement
              :message.component==="View"?View
              :message.component==="Menu"?Menu
              :message.component==="UrlPower"?UrlPower
              :""} />
             

         )
        )
    })}
      
     }
       return components
 }
    render(  ){
        return (
          <div>
            {this.message()}
            {/* 项目管理 */}
            {/* {Lang.projectManagement.map((projectManagement)=>{
              return( <Route key={projectManagement.id} path={projectManagement.path} component={projectManagement.component} />)
            })} */}
            {/* 预决算管理 */}
             {/* {Lang.budgetAndFinalAccountsManagementcond.map((budgetAndFinalAccountsManagementcond)=>{
              return( <Route key={budgetAndFinalAccountsManagementcond.id} path={budgetAndFinalAccountsManagementcond.path} component={budgetAndFinalAccountsManagementcond.component} />)
            })} */}
            {/* 借款支出管理 */}
             {/* {Lang.loanExpenditureManagement.map((loanExpenditureManagement)=>{
              return( <Route key={loanExpenditureManagement.id} path={loanExpenditureManagement.path} component={loanExpenditureManagement.component} />)
            })} */}
            {/* 收款管理 */}
             {/* {Lang.courseManagement.map((courseManagement)=>{
              return( <Route key={courseManagement.id} path={courseManagement.path} component={courseManagement.component} />)
            })} */}

            {/* 讲师管理 */}
            {/* {Lang.lecturerManagement.map((lecturerManagement)=>{
              return( <Route key={lecturerManagement.id} path={lecturerManagement.path} component={lecturerManagement.component} />)
            })} */}
            {/* 实施管理 */}
            {/* {Lang.implementationManagement.map((implementationManagement)=>{
              return( <Route key={implementationManagement.id} path={implementationManagement.path} component={implementationManagement.component} />)
            })} */}
            {/* 视图管理 */}
            {/* {Lang.viewManagement.map((viewManagement)=>{
              return( <Route key={viewManagement.id} path={viewManagement.path} component={viewManagement.component} />)
            })}  */}
          {/* <Route path="/customer" component={AppList} />
          <Route path="/contact" component={About} />
          <Route path="/training_program" component={Inbox} /> 
          <Route path="/bidding_plan" component={AppList} />
          <Route path="/contract" component={About} />
          <Route path="/costing" component={Inbox} />  */}
          </div>
        )}
                }
               
                export default Routers