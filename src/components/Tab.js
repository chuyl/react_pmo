import React, { Component }  from "react"
 import Lang from "../language"


class TabsControl extends Component{
	constructor(  ){
		super(  )
		this.state = { 
			currentIndex : 0
		}
	}
	componentWillMount() {
		console.log(sessionStorage.Language)
		//const Lang = JSON.parse(sessionStorage.Language);
		var m=-1;
		for(var i in Lang){
			m++;
			this.langMangement(Lang[i].data,m)
		}
		// this.langMangement(Lang.projectManagement,0)
		// this.langMangement(Lang.budgetAndFinalAccountsManagementcond,1)
		// this.langMangement(Lang.loanExpenditureManagement,2)
		// this.langMangement(Lang.receivablesManagement,3)
		// this.langMangement(Lang.lecturerManagement,4)
		// this.langMangement(Lang.implementationManagement,5)
		// this.langMangement(Lang.viewManagement,6)
	  }
	  langMangement(lang,index){
		for(var x=0;x<lang.length;x++){
			if(window.location.hash.split("#")[1]===lang[x].path){
				this.setState({
					currentIndex:index
				})
			}
		}
	  }
	check_title_index( index ){
		return index === this.state.currentIndex ? "tab_title active": "tab_title"
	}

	check_item_index( index ){
		return index === this.state.currentIndex ? "tab_item show" : "tab_item"
	}

	render(  ){
		//let _this = this
		return(
			<div>
				{ /* 动态生成Tab导航 */ }
				<div className="tab_title_wrap">
					{ 
						React.Children.map( this.props.children , ( element,index ) => {
							return(
								<div onClick={() =>{this.setState({currentIndex : index }) } } className={ this.check_title_index( index )+ " tab_title_"+index }>{ element.props.name }</div>
							)
						}) 
					}
				</div>
				{ /* Tab内容区域 */ }
				<div className="tab_item_wrap">
					{
						React.Children.map(this.props.children,( element,index )=>{
							return(
								<div className={ this.check_item_index( index ) }>{ element }</div>
							)
						})
					}
				</div>
			</div>
		)
	}
}

export default TabsControl