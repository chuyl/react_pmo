/** 
     * @author xuesong
     * @param AddDelCard 组件  添加card组件
     */
import React, { Component } from 'react'
import DisTextField from './DisTextField'
import Alert from './Alert'
//import TextMoney from './TextMoney'
//import ListText from '../components/ListText'
// import TextDatetime from './TextDatetime'
// import AddTeacher from '../budgetAndFinalAccountsManagementcond/budget/AddTeacher'
// import ProjectTemplate from '../budgetAndFinalAccountsManagementcond/budget/ProjectTemplate'
// import SelectList from './SelectList'
// import ComponentsList from './ComponentsList'
// import ListTextSearch from './ListTextSearch'
//import LinkGroupList from './LinkGroupList';
class AddDelCard extends Component {
    state = {
        cardList: this.props.cardList,
        edit_card_state:false,
        alertState:false //弹出框的状态
    }
    render() {
        return (
            <li
                key={this.props.index}  className="card_info_list_card"
            >
                {this.state.cardList.descript.map((card_list, index) => {
                    return (
                    <div key={index} style={{marginBottom:"-6px"}}>
                        <DisTextField
                            id={card_list.id_name} 
                            inputValue={this.props.messageList[card_list.id_name]!==null?this.props.messageList[card_list.id_name]:""} 
                            labelValue={card_list.title} 
                        />
                    </div>)
                })}          
                <button className="label_delete_button"
                        onClick={()=>{
                            
                            console.log(this.props.messageList)
                                }}
                >删除</button>
                <button className="label_delete_button"
                        onClick={() => {
                            console.log(this.props.messageList)
                                // this.setState({
                                //     edit_card_state: true
                                // })
                                    }}
                >编辑</button>
                <Alert alertState={this.state.alertState}/>
            </li>
        )
    }
}

export default AddDelCard;
