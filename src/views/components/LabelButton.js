/** 
     * @author xuesong
     * @param LabelButton 组件  label+button
     */
    import React, { Component } from 'react';

    class LabelButton extends Component {
        
        render(){
            const {title,label,button} =this.props;
            return (
                <div className="label_button_card">
                    <div className="label_button_title">{title}</div>
                    <span  className="label_button_label">{label}</span>
                    <button  className="label_button_button button_md" onClick={this.props.action[0]}
                        >{button}</button>    
           </div>
            )
        }
    }
    
    export default LabelButton;
    