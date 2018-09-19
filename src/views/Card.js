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
        const {id,customer_name ,course_name, person_in_charge, train_days,  train_date, train_place}=this.props;
		return (
            <div  id={id} onClick={this.props.action[0]} className={this.state.zoom_in?"card open":"card"}>
            <h3>客户名称:{customer_name}</h3>
            <div className="detail"><h1>课程名称:{course_name}</h1>
            
            <h2>销售负责人:{person_in_charge}</h2>
            <h3>培训天数:{train_days}</h3>
            <h3>培训日期：{train_date}</h3>
            <h3>培训地点:{train_place}</h3>
            <button>生成预算</button>
            <button>生成决算</button>
            <button onClick={this.props.action[1]}>编辑</button>

           
            
           </div>
           
        </div>
		)
	}
}

export default Card;
