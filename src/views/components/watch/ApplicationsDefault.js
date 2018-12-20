/** 
     * @author xuesong
     * @param ApplicationsDefault 组件  label+message
     */
    import React, { Component } from 'react';

    class ApplicationsDefault extends Component {
        render(){
            const {message,defaultValue} =this.props;
            console.log(message)
            var className = this.props.className.split(","); 
            return (
                <div  className={className[0]?className[0]:""}>
                  {message?message:defaultValue}
              </div>
            )
        }
    }
    export default ApplicationsDefault;
    