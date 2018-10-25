/** 
     * @author xuesong
     * @param DateMessage 组件  日期修改成25/十月/2018
     */
    import React, { Component } from 'react';

    class DateMessage extends Component {
        constructor(props) {
            super(props);
            this. state={
               // inputValue:this.props.inputValue
            }
        }
       componentWillMount(){
           
       }
        render(){
            const {year,month,date} =this.props;
            return (
                <div>
                  <span>{date}</span>
                  <span>{month}</span>
                  <span>{year}</span>
                    {/* <span className="text_field_remind"></span> */}
              </div>
            )
        }
    }
    export default DateMessage;
    