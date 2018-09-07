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
            <div className="detail"><h1>课程名称:漏洞和基线安全及常用工具</h1>
            <h2>客户名称:中国联通网络通信有限公司</h2>
            <h2>销售负责人:寇艳艳</h2>
            <h3>培训天数:3</h3>
            <button>生成预算</button>
            <button>生成决算</button>
            <button>编辑</button>

            <div className="h1">{root+name}</div>
            
           </div>
           
        </div>
		)
	}
}

export default Card;
