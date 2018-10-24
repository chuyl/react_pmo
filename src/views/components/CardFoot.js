/** 
     * @author xuesong
     * @param CardFoot 组件  cardfoot
     */
    import React, { Component } from 'react';
    import ComponentsList from './ComponentsList'
    // import CardItem from './CardItem'
    class CardFoot extends Component {
        state={
            thisBtnState:0

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
        render(){
            return (
                <div className={"card-foot"}>
                    <ComponentsList footItemState={this.state.thisBtnState} handleTwoCardTitleItem={this.handleTwoCardTitleItem} componentslist =  {this.props.addButton} componentsdata={this.props.message}></ComponentsList > 
              </div>
            )
        }
    }
    export default CardFoot;
    