/** 
     * @author xuesong
     * @param AddDelCard 组件  添加card组件
     */
import React, { Component } from 'react'
import DisTextField from './DisTextField'
import TextMoney from './TextMoney'
//import ListText from '../components/ListText'
import TextDatetime from './TextDatetime'
import AddTeacher from '../budgetAndFinalAccountsManagementcond/budget/AddTeacher'
import ProjectTemplate from '../budgetAndFinalAccountsManagementcond/budget/ProjectTemplate'
import SelectList from './SelectList'
import ComponentsList from './ComponentsList'
import ListTextSearch from './ListTextSearch'
//import LinkGroupList from './LinkGroupList';
class AddDelCard extends Component {
    state = {
        cardList: this.props.cardList,
        edit_card_state:false
    }
    /** 
     * @author xuesong
     * @param removeFunEvent 函数名 删除默认和添加组件
     */
    removeFunEvent() {
        
        console.log(this)
        //默认的组件
        //this.props.removeDefault && this.props.removeDefault(this.props.index);
        //添加的组价
        //this.props.remove && this.props.remove(this.props.index);
    }
    render() {
        // console.log(this.props.messageList)
        return (
            <li
                key={this.props.index}  className="card_info_list_card"
            >
            {this.state.cardList.descript.map((card_list, index) => {
                        return <div key={index} style={{marginBottom:"-6px"}}>
                           <DisTextField
                                    id={card_list.id_name+index} 
                                    inputValue={this.props.messageList[card_list.id_name]!==null?this.props.messageList[card_list.id_name]:""} 
                                    labelValue={card_list.title} 
                                />
                        </div>
                    })}
                {/* <ComponentsList componentslist={this.state.cardList.descript} componentsdata={this.props.messageList}></ComponentsList> */}
                 <button className="label_delete_button"
                 onClick={()=>{
                     console.log(this.props.messageList.id)
                 }}
                    // onClick={this.removeFunEvent.bind(this)}
                >删除</button>
                <button style={{marginRight:"14px"}} className="label_delete_button"
                     onClick={() => {
                        this.setState({
                            edit_card_state: true
                        })
                            }}
                >编辑</button>
                {/* <div className={this.state.edit_card_state ? "add_info_list open" : "add_info_list"}>
                                <div className="paper_card_title">
                                    <div onClick={() => {
                                            this.setState({
                                                edit_card_state: false
                                            })
                                        }} className="return_btn"></div>
                                    {this.props.addButtonTitle}
                                </div>
                                <div className="selected_scroll_div">
                                    <div  className="card_info_list_card">
                                        <ComponentsList componentslist={this.state.cardList.add_button} componentsdata={this.props.messageList}></ComponentsList>
                                    </div>
                               
                                <button className="hold_btn"
                                    onClick={(e) => {
                                     
                                    }}
                                >保存1</button>
                    </div>
                </div>   */}
            </li>
        )
    }
}

export default AddDelCard;
