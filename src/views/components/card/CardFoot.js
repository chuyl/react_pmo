/** 
     * @author xuesong
     * @param CardFoot 组件  cardfoot
     */
    import React, { Component } from 'react';
    import ComponentsList from  '../../components/composite/ComponentsList'
    // import {getData,getRouter} from '../../../utils/helpers'
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
            var json_view=JSON.parse(sessionStorage.view)
            for(var i=0;i<json_view.length;i++){
                if(json_view[i].name===this.props.addButton){
                    
                    var json_message=json_view[i].data;
                    this.setState({
                        add_button: json_message["form-list"],
                    })

                }
            }
            // var cb = (route, message, arg) => {
            //     if (message.error === 0) {
            //         var json_message=JSON.parse(message.data);
            //         this.setState({
            //             add_button: json_message["form-list"],
            //         })

            //     }
               
            // }
            // getData(getRouter("json_manage_name"), { name:this.props.addButton,token:sessionStorage.token }, cb, {});
        }
        render(){
            console.log(this.state.add_button)
            return (
                <div className={this.state.add_button.length===0?"":"card-foot"}>
                    <ComponentsList footItemState={this.state.thisBtnState} handleTwoCardTitleItem={this.handleTwoCardTitleItem} componentslist =  {this.state.add_button} componentsdata={this.props.message}></ComponentsList > 
              </div>
            )
        }
    }
    export default CardFoot;
    