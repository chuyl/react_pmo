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
           var start_month_date=this.props.message.start.slice(5),
               end_month_date = this.props.message.end.slice(5),
               start_month=start_month_date.split("-")[0],
               start_date=start_month_date.split("-")[1],
               end_month=end_month_date.split("-")[0],
               end_date=end_month_date.split("-")[1];
            return (
                <div className="date_card">
                  <span>{start_month}</span>
                  月
                  <span>{start_date}</span>
                  日- <span>{end_month}</span>
                  月
                  <span>{end_date}</span>
                  日
              </div>
            )
        }
    }
    export default DateCard;
    