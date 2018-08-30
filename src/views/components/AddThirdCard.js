/** 
     * @author xuesong
     * @param AddCard 组件  添加card组件
     */
    import React, { Component } from 'react'
    import TextField from './TextField'
    import TextMoney from './TextMoney'
    //import ListText from '../components/ListText'
    import TextDatetime from './TextDatetime'
    import AddTeacher from '../budgetAndFinalAccountsManagementcond/budget/AddTeacher'
    import ProjectTemplate from '../budgetAndFinalAccountsManagementcond/budget/ProjectTemplate'
    import SelectList from './SelectList'
    //import ComponentsList from './ComponentsList'
    
    import ListTextSearch from '../components/ListTextSearch'
    class AddThirdCard extends Component {
        state = {
            cardList: this.props.cardList
        }
        /** 
         * @author xuesong
         * @param removeFunEvent 函数名 删除默认和添加组件
         */
        removeFunEvent() {
            //默认的组件
            this.props.removeDefault && this.props.removeDefault(this.props.index);
            //添加的组价
            this.props.remove && this.props.remove(this.props.index);
        }
        render() {
            return (
                <li
                    key={this.props.index} className="card_info_list_card"
                >
                    
                    {/* <ComponentsList componentslist={this.state.card_list}></ComponentsList> */}
    
                    {this.state.cardList.map((card_list, index) => {
                        return <div key={index}>
                            {
                                card_list.type_name === "ListTextSearch" ?
                                    <ListTextSearch id={card_list.id_name + this.props.index}
                                        labelValue={card_list.title}
                                        searchInfoLists={card_list.before_api_uri}
                                        addButton={card_list.add_button}
                                        selectedInfo={card_list.key} />
    
                                    :
                                    card_list.type_name === "MutiText" ? <TextField
                                    id={card_list.id_name + this.props.index} inputValue={card_list.key} labelValue={card_list.title} />
                                       : card_list.type_name === "TextDatetime" ? <TextDatetime
                                        id={card_list.id_name + this.props.index} inputValue={card_list.key} labelValue={card_list.title} />
                                        : card_list.type_name === "TextMoney" ? <TextMoney
                                        id={card_list.id_name + this.props.index} inputValue={card_list.key} labelValue={card_list.title} />
                                        :card_list.type_name==="AddTeacher"?<AddTeacher/> 
                                        :card_list.type_name==="ProjectTemplate"?<ProjectTemplate/> 
                                        :card_list.type_name==="SelectList"?<SelectList id={card_list.id_name + this.props.index}
                                        labelValue={card_list.title}
                                        searchInfoLists={card_list.before_api_uri}
                                        selectedInfo={card_list.key}/>
                                       : ""}
                        </div>
                    })}
                    <button  className="label_delete_button"
                        onClick={this.removeFunEvent.bind(this)}
                    >删除</button>
                    {/* {this.add_teacher_card_components(this.props.index)} */}
                </li>
            )
        }
    }
    
    export default AddThirdCard;
    