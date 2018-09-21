/** 
     * @author xuesong
     * @param AddDelCard 组件  添加card组件
     */
import React, { Component } from 'react'
import ComponentsList from './ComponentsList'
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
        console.log(this.props.messageList)
        return (
            <li
                key={this.props.index}  className="card_info_list_card"
            >
               
                <ComponentsList componentslist={this.state.cardList} componentsdata={this.props.messageList}></ComponentsList>

                {/*  修改删除、编辑逻辑 用ComponentsList组件代替
                 {this.state.cardList.map((card_list, index) => {
                    return <div key={index} style={{marginBottom:"-6px"}}>
                        {
                            card_list.type_name === "ListTextSearch" ?
                                <ListTextSearch disabled={true} id={card_list.id_name + this.props.index}
                                    labelValue={card_list.title}
                                    searchInfoLists={card_list.before_api_uri}
                                    addButton={card_list.add_button}
                                    selectedInfo={card_list.key} />
                                :
                                card_list.type_name === "MutiText" ? <TextField disabled={true}
                                id={card_list.id_name + this.props.index} inputValue={card_list.key} labelValue={card_list.title} />
                                   : card_list.type_name === "TextDatetime" ? <TextDatetime disabled={true}
                                    id={card_list.id_name + this.props.index} inputValue={card_list.key} labelValue={card_list.title} />
                                    : card_list.type_name === "TextMoney" ? <TextMoney disabled={true}
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
                })} */}
                
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
                <div className={this.state.edit_card_state ? "add_info_list open" : "add_info_list"}>
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
                                        <ComponentsList componentslist={this.state.cardList} componentsdata={this.props.messageList}></ComponentsList>
                                    </div>
                                {/* <AddCard 
                                            key={`executeHandle${this.state.addCondition.length}.lenght+1`}
                                            remove={this.removeEvent.bind(this)}
                                            index={this.state.addCondition.length}
                                            cardList={this.props.addButton}
                                            // getAddCondition={ this.getAddConditionEvent.bind(this)}
                                            conditionAction={this.state.conditionAction}
                                        >
                                        </AddCard> */}
                                <button className="hold_btn"
                                    onClick={(e) => {
                                    
                                    }}
                                >保存</button>
                    </div>
                </div>  
            </li>
        )
    }
}

export default AddDelCard;
