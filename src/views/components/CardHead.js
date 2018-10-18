/** 
     * @author xuesong
     * @param CardHead 组件  card头
     */
    import React, { Component } from 'react';
    import ComponentsList from './ComponentsList'
    // import CardItem from './CardItem'
    class CardHead extends Component {
        state={

        }
        
        render(){
            console.log(this.props.message)
            // const {id,disabled,inputValue,onClick,labelValue,name} =this.props;
            return (
                <div className="card-head">
                    <ComponentsList  componentslist =  {this.props.addButton} componentsdata={this.props.message}></ComponentsList > 
              </div>
            )
        }
    }
    export default CardHead;
    