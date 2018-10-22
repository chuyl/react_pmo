/** 
     * @author xuesong
     * @param CardFoot 组件  cardfoot
     */
    import React, { Component } from 'react';
    import ComponentsList from './ComponentsList'
    // import CardItem from './CardItem'
    class CardFoot extends Component {
        state={

        }
        handleTwoCardTitleItem=(thisBtnState)=>{
            var newState = {
                cardTitleItem:thisBtnState.cardTitleItem
            }
            this.props.handlethreeCardTitleItem(newState);
          }
        render(){
            return (
                <div className={this.props.openState===true?"none":"card-foot"}>
                    <ComponentsList handleTwoCardTitleItem={this.handleTwoCardTitleItem} componentslist =  {this.props.addButton} componentsdata={this.props.message}></ComponentsList > 
              </div>
            )
        }
    }
    export default CardFoot;
    