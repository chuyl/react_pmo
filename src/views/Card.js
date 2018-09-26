import React, { Component } from 'react';
import Link from './components/Link'
import ComponentsList from './components/ComponentsList'
class Card extends Component {
    state={
        action:[],
        zoom_in:false,
        type:'',
        add_button:[],
        form_temp_name:""
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
        const {id,customer_name,card_list ,course_name, person_in_charge, train_days,  train_date, train_place}=this.props;
        return (
            <div className={this.state.zoom_in?"card open":"card"}>
            < ComponentsList handleClick={this.props.handleClick} componentslist =  {this.props.add_button?this.props.add_button:[]} componentsdata = {this.props.card_list} ></ComponentsList > 
            </div>
        //     <div  id={id} onClick={this.props.action[0]} className={this.state.zoom_in?"card open":"card"}>
        //     <h3>客户名称:{customer_name}</h3>
        //     <div className="detail"><h1>课程名称:{course_name}</h1>
            
        //     <h2>销售负责人:{person_in_charge}</h2>
        //     <h3>培训天数:{train_days}</h3>
        //     <h3>培训日期：{train_date}</h3>
        //     <h3>培训地点:{train_place}</h3>
        //     <Link/>
        //     <button onClick={this.props.action[1]}>编辑</button>
        //     <button onClick={this.props.action[2]}>安排讲师</button>
        //     <button onClick={this.props.action[3]}>实施安排</button>
        //     <button onClick={this.props.action[4]}>差旅安排</button>
        //     <button onClick={this.props.action[5]}>删除</button>

           
            
        //    </div>
           
        // </div>
		)
	}
}

export default Card;
