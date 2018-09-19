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
    
    import ListTextSearch from './ListTextSearch'
    class AddCard extends Component {
        state = {
            cardList: this.props.cardList
        }
        render() {
            return (
                <li
                    key={this.props.index}  className="card_info_list_card"
                >
                    {/* <ComponentsList componentslist={this.state.card_list}></ComponentsList> */}
                    {this.state.cardList.map((card_list, index) => {
                        return <div key={index} style={{marginBottom:"-6px"}}>
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
                                        // : card_list.type_name === "ListText" ? <ListText id={card_list.id_name + this.props.index}
                                        //     labelValue={card_list.title}
                                        //     searchInfoLists={card_list.before_api_uri}
                                        //     selectedInfo={card_list.key} />
                                             : ""}
                        </div>
                    })}
                    
                    {/* {this.add_teacher_card_components(this.props.index)} */}
                </li>
            )
        }
    }
    
    export default AddCard;
    