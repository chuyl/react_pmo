import React, { Component } from 'react';

class Card extends Component {
    state={
        zoom_in:false,
    }
    zoom_in = () => {
        this.setState({
            zoom_in:true,
        })
        console.log(this.props.root)
       document.getElementById(this.props.card).style.height  = document.documentElement.clientHeight+"px";
	}
	zoom_out = () =>{
        this.setState({
            zoom_in:false,
           // zoom_out:true
        })
		//document.getElementById(this.props.card).setAttribute("class",style.card);
        document.getElementById(this.props.card).setAttribute("style"," ");
       // document.getElementById(this.props.user_root).setAttribute("class",style.container);
	}
	render(){
		return (
            <div  id={this.props.card}  className={this.state.zoom_in?"card open":"card"}>
             <div>
                <div  onClick={this.zoom_in} className="btn">zoom in</div>
                <div  onClick={this.zoom_out} className="btn">zoom out</div>
            </div>
            <div className="detail"><div className="img"></div>
            <div className="h1">Hello,word{this.props.root}</div>
            <div className="content">what a wanderful world in the</div>
            <div className="content">In each container close to the door, Don put a piece of paper showing the lot number and the commodity in that container.</div>
            <div className="content">在每个容器靠近门，唐放一块纸显示的批号，在该容器中的商品。</div></div>
            <div className="content">在每个容器靠近门，唐放一块纸显示的批号，在该容器中的商品。</div>
            <div className="paper"></div>
        </div>
	// 		<div class={style.home}>
	// 	<div id={this.props.user_root} class={style.container}>
    //     <div id={this.props.card} class={style.card}>
    //     <div>
    //             <div  onClick={this.zoom_in} class={style.btn}>zoom in</div>
    //             <div  onClick={this.zoom_out} class={style.btn}>zoom out</div>
    //         </div>
    //         <div class={style.detail}><div class={style.img}></div>
    //         <div class={style.h1}>Hello,word!?</div>
    //         <div class={style.content}>what a wanderful world in the</div>
    //         <div class={style.content}>In each container close to the door, Don put a piece of paper showing the lot number and the commodity in that container.</div>
    //         <div class={style.content}>在每个容器靠近门，唐放一块纸显示的批号，在该容器中的商品。</div></div>
    //         <div class={style.content}>在每个容器靠近门，唐放一块纸显示的批号，在该容器中的商品。</div>
    //         <div class={style.paper}></div>
            
    //     </div>
       
    // </div>
   
	// </div>
		)
	}
}

export default Card;
