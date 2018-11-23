/** 
     * @author xuesong
     * @param CardFoot 组件  cardfoot
     */
    import React, { Component } from 'react';
    import ComponentsList from './ComponentsList'
    import {getData,getRouter} from '../../utils/helpers'
    // import CardItem from './CardItem'
    class CardFoot extends Component {
        state={
            thisBtnState:0,
            add_button:[]

        }
        componentWillMount(){
            this.fetchFootContent()
            }
        handleTwoCardTitleItem=(thisBtnState)=>{
            var newState = {
                cardTitleItem:thisBtnState.cardTitleItem
            }
            this.setState({
                thisBtnState:thisBtnState.cardTitleItem
            })
            this.props.handlethreeCardTitleItem(newState);
          }
      
     
        //获取组件中add_button里面的编辑视图
        fetchFootContent() {
            var cb = (route, message, arg) => {
                if (message.error === 0) {
                    var json_message=JSON.parse(message.data);
                    this.setState({
                        add_button: json_message["form-list"],
                    })

                }
               
            }
            getData(getRouter("view_json_name"), { name:this.props.addButton,token:sessionStorage.token }, cb, {});
        }
        render(){
            return (
                <div className={"card-foot"}>
                    <ComponentsList footItemState={this.state.thisBtnState} handleTwoCardTitleItem={this.handleTwoCardTitleItem} componentslist =  {this.state.add_button} componentsdata={this.props.message}></ComponentsList > 
              </div>
            )
        }
    }
    export default CardFoot;
    