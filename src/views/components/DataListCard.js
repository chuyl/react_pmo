/** 
     * @author xuesong
     * @param DateCard 组件  日期修改成25/十月/2018
     */
    import React, { Component } from 'react';
    import DateCard from './DateCard'
    class DateListCard extends Component {
       
        render(){
          
            return (
                <div className="date_card">
                  <span>{month}</span>
                  月
                  <span>{date}</span>
                  日
                  {/* {this.props.labelValue.indexOf("开始")>=0?<span>-</span>:""} */}
                    {/* <span className="text_field_remind"></span> */}
              </div>
            )
        }
    }
    export default DateListCard;
    