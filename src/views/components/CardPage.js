/** 
     * @author xuesong
     * @param CardPage 组件  card的body 划分的结构
     */
    import React, { Component } from 'react';
    import ComponentsList from './ComponentsList'
    // import CardItem from './CardItem'
    class CardPage extends Component {
        state={

        }
        
        render(){
            // const {id,disabled,inputValue,onClick,labelValue,name} =this.props;
            return (
                <div className="card-page">
                    <ComponentsList  componentslist =  {this.props.addButton} componentsdata={this.props.message}></ComponentsList > 
              </div>
            )
        }
    }
    export default CardPage;
    