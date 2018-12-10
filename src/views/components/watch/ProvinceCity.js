/** 
     * @author xuesong
     * @param ProvinceCity 组件  label+message
     */
    import React, { Component } from 'react';

    class ProvinceCity extends Component {
        render(){
            const {message,defaultValue} =this.props;
            return (
                <div className="change_line">
                  <p>{message.province?message.province:defaultValue}</p>
                  <p>{message.city?message.city:defaultValue}</p>
              </div>
            )
        }
    }
    export default ProvinceCity;
    