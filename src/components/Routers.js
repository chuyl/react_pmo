import React, { Component }  from "react"
import {
    Route,
  } from 'react-router-dom';
  import Lang from '../language'
class Routers extends Component{
    render(  ){
        return (
          <div>
            {/* 项目管理 */}
            {Lang.projectManagement.map((projectManagement)=>{
              return( <Route key={projectManagement.id} path={projectManagement.path} component={projectManagement.component} />)
            })}
            {/* 预决算管理 */}
             {Lang.budgetAndFinalAccountsManagementcond.map((budgetAndFinalAccountsManagementcond)=>{
              return( <Route key={budgetAndFinalAccountsManagementcond.id} path={budgetAndFinalAccountsManagementcond.path} component={budgetAndFinalAccountsManagementcond.component} />)
            })}
            {/* 借款支出管理 */}
             {Lang.loanExpenditureManagement.map((loanExpenditureManagement)=>{
              return( <Route key={loanExpenditureManagement.id} path={loanExpenditureManagement.path} component={loanExpenditureManagement.component} />)
            })}
            {/* 收款管理 */}
             {Lang.receivablesManagement.map((receivablesManagement)=>{
              return( <Route key={receivablesManagement.id} path={receivablesManagement.path} component={receivablesManagement.component} />)
            })}

            {/* 讲师管理 */}
            {Lang.lecturerManagement.map((lecturerManagement)=>{
              return( <Route key={lecturerManagement.id} path={lecturerManagement.path} component={lecturerManagement.component} />)
            })}
            {/* 实施管理 */}
            {Lang.implementationManagement.map((implementationManagement)=>{
              return( <Route key={implementationManagement.id} path={implementationManagement.path} component={implementationManagement.component} />)
            })}
            {/* 视图管理 */}
            {Lang.viewManagement.map((viewManagement)=>{
              return( <Route key={viewManagement.id} path={viewManagement.path} component={viewManagement.component} />)
            })}
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