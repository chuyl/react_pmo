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
        
        render(){
            return (
                <div className="card-foot">
                    <ComponentsList  componentslist =  {this.props.addButton} componentsdata={this.props.message}></ComponentsList > 
              </div>
            )
        }
    }
    export default CardFoot;
    