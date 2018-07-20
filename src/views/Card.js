import React, { Component } from 'react';

class Card extends Component {
    state={
        action:[],
        zoom_in:false,
        type:'',
    }
    zoom_in = () => {
        this.setState({
            zoom_in:true,
        })
       document.getElementById(this.props.card).style.height  = document.documentElement.clientHeight+"px";
	}
	zoom_out = () =>{
        this.setState({
            zoom_in:false,
        })
        document.getElementById(this.props.card).setAttribute("style"," ");
    }
	render(){
        const {name,card,root}=this.props;
		return (
            <div  id={card} onClick={this.props.action[0]} className={this.state.zoom_in?"card open":"card"}>
            <div className="detail"><div className="img"></div>
            <div className="h1">{root+name}</div>
            
           </div>
           
        </div>
		)
	}
}

export default Card;
