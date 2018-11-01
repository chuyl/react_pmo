/** 
     * @author xuesong
     * @param DateCard 组件  日期修改成25/十月/2018
     */
    import React, { Component } from 'react';

    class DateCard extends Component {
        constructor(props) {
            super(props);
            this. state={
            }
        }
      
        render(){
            var start_month_date,start_month,start_date,end_month_date,end_month,end_date;
            if(this.props.message.start){
                 start_month_date=this.props.message.start.slice(5),
                start_month=start_month_date.split("-")[0],
                start_date=start_month_date.split("-")[1];
            }
            if(this.props.message.end){
                 end_month_date = this.props.message.end.slice(5),
              
                end_month=end_month_date.split("-")[0],
                end_date=end_month_date.split("-")[1];
            }
               
            return (
                <div className="date_card">
                 {this.props.message.start?<span><span>{start_month}</span>
                  <span>月</span>
                  <span>{start_date}</span>
                  <span>日-</span></span>:""} 
                  {this.props.message.end?<span><span>{end_date}</span>
                  <span>月</span>
                  <span>{end_date}</span>
                  <span>日</span></span>:this.props.defaultValue} 
              </div>
            )
        }
    }
    export default DateCard;
    