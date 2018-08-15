/** 
     * @author xuesong
     * @param AddCard 组件  添加card组件
     */
    import React, { Component } from 'react'
    import TextField from './TextField'
    import TextMoney from './TextMoney'
    import ListText from '../components/ListText'
    import TextDatetime from './TextDatetime'
    import AddTeacher from '../budgetAndFinalAccountsManagementcond/budget/AddTeacher'
    import SelectList from './SelectList'
    //import ComponentsList from './ComponentsList'
    
    import ListTextSearch from '../components/ListTextSearch'
    class AddThirdCard extends Component {
        state = {
            card_list: this.props.card_list
        }
        /** 
         * @author xuesong
         * @param removeFunEvent 函数名 删除默认和添加组件
         */
        removeFunEvent() {
            //默认的组件
            console.log(this.props.index)
            this.props.removeDefault && this.props.removeDefault(this.props.index);
            //添加的组价
            this.props.remove && this.props.remove(this.props.index);
        }
        render() {
            return (
                <li
                    key={this.props.index}
                    style={{ border: "1px solid #000",margin:"-1px" }}
                >
                    <button
                        onClick={this.removeFunEvent.bind(this)}
                    >删除{this.props.index}</button>
                    {/* <ComponentsList componentslist={this.state.card_list}></ComponentsList> */}
    
                    {this.state.card_list.map((card_list, index) => {
                        return <div key={index}>
                            {
                                card_list.type_name === "ListTextSearch" ?
                                    <ListTextSearch id={card_list.id_name + this.props.index}
                                        labelValue={card_list.title}
                                        search_info_lists={card_list.before_api_uri}
                                        add_button={card_list.add_button}
                                        selected_info={card_list.key} />
    
                                    :
                                    card_list.type_name === "MutiText" ? <TextField
                                    id={card_list.id_name + this.props.index} inputValue={card_list.key} labelValue={card_list.title} />
                                       : card_list.type_name === "TextDatetime" ? <TextDatetime
                                        id={card_list.id_name + this.props.index} inputValue={card_list.key} labelValue={card_list.title} />
                                        : card_list.type_name === "TextMoney" ? <TextMoney
                                        id={card_list.id_name + this.props.index} inputValue={card_list.key} labelValue={card_list.title} />
                                        :card_list.type_name==="AddTeacher"?<AddTeacher/> 
                                        :card_list.type_name==="SelectList"?<SelectList id={card_list.id_name + this.props.index}
                                        labelValue={card_list.title}
                                        search_info_lists={card_list.before_api_uri}
                                        selected_info={card_list.key}/>
                                        : card_list.type_name === "ListText" ? <ListText id={card_list.id_name + this.props.index}
                                            labelValue={card_list.title}
                                            search_info_lists={card_list.before_api_uri}
                                            selected_info={card_list.key} /> : ""}
                        </div>
                    })}
                    {/* {this.add_teacher_card_components(this.props.index)} */}
                </li>
            )
        }
    }
    
    export default AddThirdCard;
    