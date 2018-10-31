/** 
     * @author xuesong
     * @param ProvinceCity 组件  label+message
     */
    import React, { Component } from 'react';

    class ProvinceCity extends Component {
        render(){
            const {message,beforeApiUri} =this.props;
            console.log(message,)
            return (
                <div className="change_line">
                  <p>{message.province}</p>
                  <p>{message.city}</p>
              </div>
            )
        }
    }
    export default ProvinceCity;
    