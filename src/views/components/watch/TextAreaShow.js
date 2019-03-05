/** 
     * @author xuesong
     * @param TextAreaShow 组件  label+textarea
     */
    import React, { Component } from 'react';

    class TextAreaShow extends Component {
        render(){
            const {id,inputValue} =this.props;
            return (
                <div>
                    <pre>
                        {inputValue}
                    </pre>
              </div>
            )
        }
    }
    export default TextAreaShow;
    