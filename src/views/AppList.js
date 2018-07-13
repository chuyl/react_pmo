import React, { Component } from 'react';
import Card from './Card.js';
// import Boximg from '../css/img/boximg.png'
class AppList extends Component {
  state = {
    card_list:[{root: "root1root1root1root1root1root1root1root1root1root1root1root1root1root1root1root1root1root1root1root1root1root1root1root1root1root1root1root1root1root1root1root1root1root1root1root1root1root1root1root1root1root1root1root1root1root1root1root1root1root1root1root1root1root1root1root1root1root1root1root1root1root1<br/>root1root1root1root1root1root1root1root1r<br/>oot1root1",card:"card1",name:"list1"}
    ,{root: "root2",card:"card2",name:"list2"},
    {root: "root3",card:"card3",name:"list3"}],
    selected_card:[],
    card_state:false,
}
// render(){
//   return(
//     <Router history={browserHistory} routes={routes} />
//   )
   
// }
card_box_concent(selected_card){
 // console.log(document.body.clientWidth)
    this.setState({
      selected_card:selected_card,
      card_state:true
    })
    if( document.body.clientWidth<=768){
      document.getElementById("card_box").style.height  = document.documentElement.clientHeight+"px"
    }
}
card_box_close = () =>{
  this.setState({
    selected_card:[],
    card_state:false
  })
  if( document.body.clientWidth<=768){
    document.getElementById("card_box").setAttribute("style"," ");
  }
}

  render() {
    return (
      <div>
        <div id="root1" className="container">
      {this.state.card_list.map(card_list=> {
                return <Card
                action={[() => {
                  this.card_box_concent(card_list)
                  }]}
                 key={card_list.root} root={card_list.root} name={card_list.name} card={card_list.card}/> 
            })}
      </div>
      <div id="card_box" className={this.state.card_state?"card_box open":"card_box"}>
      <i onClick={this.card_box_close} style={{fontSize:"20px"}} className="glyphicon glyphicon-arrow-left"></i>
      {/* <img alt="fengjing" src={Boximg}/> */}
      {this.state.selected_card.root}</div>
      </div>
    );
  }
}

export default AppList;
