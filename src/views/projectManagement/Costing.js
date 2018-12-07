//成本管理
import React, { Component } from 'react';
import Alert from '../components/modal/Remind'
class Costing extends Component {
	open=()=>{
        Alert.open({
            alertTip:"这是一个测试弹框",
            closeAlert:function(){
                console.log("关闭了...");
            }
        });
    }
	render(){
		return (
            <div onClick={()=>{
				this.open()
			}}>
            成本管理
        </div>
		)
	}
}

export default Costing;