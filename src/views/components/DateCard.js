/** 
     * @author xuesong
     * @param DateCard 组件  日期修改成25/十月/2018
     */
    import React, { Component } from 'react';

    class DateCard extends Component {
      
        render(){
            var start_month_date,start_month,start_date,end_month_date,end_month,end_date;
            if(this.props.message.start){
                 start_month_date=this.props.message.start.slice(5);
                start_month=start_month_date.split("-")[0];
                start_date=start_month_date.split("-")[1];
            }
            if(this.props.message.end){
                 end_month_date = this.props.message.end.slice(5);
              
                 end_month=end_month_date.split("-")[0];
                end_date=end_month_date.split("-")[1];
            }
               
            return (
                <div className="date_card">
                 {this.props.message.start?<p><span>{start_month}</span>
                 月
                  <span>{start_date}</span>
                 日-</p>:""} 
                  {this.props.message.end?<p><span>{end_month}</span>
                  月
                  <span>{end_date}</span>
                 日</p>:this.props.defaultValue} 
              </div>
            )
        }
    }
    export default DateCard;
    