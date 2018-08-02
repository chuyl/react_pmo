import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import TabsControl from './components/Tab'
import Routers from './components/Routers'
import {
    HashRouter,
    Link,
  } from 'react-router-dom';
import './css/style.css'
import Lang from './language'
 import config from './config';
 import {getData,getRouter } from './utils/helpers';

// window.onresize = function(){
//   console.log(document.body.clientWidth)
  
// }
//二级路由
class App extends Component {
    render() {
      return (
        <div style={{height:"100%"}}>
          {this.props.children}
        </div>
      );
    }
  }
  //列表页
  class List extends Component {
    render() {
      return (
        <div style={{height:"100%",width:"100%"}}>
          <HashRouter>
          <App>
            <Routers/>
          {/* <Route exact path="/bidding_plan" component={AppList} />*/}
          </App>
          </HashRouter>
         
          
        </div>
      );
    }
  }


  //选项卡&路由
class TabComponent extends Component{
  constructor(  ){
		super(  )
		this.state = { 
      currentIndex : 0,
      couter:false,
      show: false,
      dialog_show:false,
		}
  }
  componentWillMount() {
    this.getRoutes();
  }
  getRoutes = () => {
    var cb = (route, message, arg) => {
      try {
        if (message.code === 0) {
          for (var key in message.data.routelist) {
            sessionStorage.setItem(key, JSON.stringify(message.data.routelist[key]));
          }
          var img_url = getRouter("creat_checkcode").url;
          console.log(img_url)
         
        }
      } catch (e) {
      }
    }
    getData({ url: config.routers }, { type:1, version: config.version }, cb);
  }

    //路由激活状态
    check_router_index( index ){
      return index === this.state.currentIndex ? "tab_title active" : "tab_title"
    }

  router_lists(router_lists){
    var components = [];
    
       router_lists.map((router_list)=>{
        return(
          components.push(
            <li key={router_list.title} onClick={ () => { this.setState({ currentIndex :router_list.path}) } } className={ this.check_router_index(router_list.path) }><Link to={router_list.path}>{router_list.title}</Link></li>
         )
        )
       }
      );
       return components
  }
  footer_router_lists(router_lists){
    var components = [];
    var footer_width=100/router_lists.length+"%";
       router_lists.map((router_list)=>{
        return(
          components.push(
            <li onClick={()=>{
              this.setState({
                dialog_show:false
              })
            }} style={{float:"left",width:footer_width,textAlign:"center"}} key={router_list.title}><Link to={router_list.path}>{router_list.title}</Link></li>
         )
        )
       }
      );
       return components
  }
  changeShow() {
    this.setState({
      show: !this.state.show
    })
  }
  dialogShow() {
    this.setState({
      dialog_show: !this.state.dialog_show
    })
  }
	render(  ){
		return(
			<div className="sidebar">
      <div  style={this.state.show===true?{display:"none"}:{}} className="router_screen nav_lists">
      <TabsControl>
					<div name = "项目管理">
                    <HashRouter>
                        <App>
                        <ul>
                          {this.router_lists(Lang.projectManagement)}
                        </ul>  
                        </App>
                    </HashRouter>
					</div>
					<div name = "预决算管理">
          <HashRouter>
                        <App>
                        <ul>
                        {this.router_lists(Lang.budgetAndFinalAccountsManagementcond)}
                        </ul>  
                        </App>
                    </HashRouter>
					</div>
					<div name = "借款支出管理">
          <HashRouter>
                        <App>
                        <ul>
                        {this.router_lists(Lang.loanExpenditureManagement)}
                        </ul>  
                        </App>
                    </HashRouter>
					</div>
          <div name = "收款管理">
          <HashRouter>
                        <App>
                        <ul>
                        {this.router_lists(Lang.receivablesManagement)}
                        </ul>  
                        </App>
                    </HashRouter>
					</div>
          <div name = "讲师管理">
          <HashRouter>
                        <App>
                        <ul>
                        {this.router_lists(Lang.lecturerManagement)}
                        </ul>  
                        </App>
                    </HashRouter>
					</div>
          <div name = "实施管理">
          <HashRouter>
                        <App>
                        <ul>
                        {this.router_lists(Lang.implementationManagement)}
                        </ul>  
                        </App>
                    </HashRouter>
					</div>
				</TabsControl>
        </div>
        <div style={this.state.show===true?{display:"none"}:{}}  className="router_button" onClick={this.changeShow.bind(this)}>
        <i className="glyphicon glyphicon-menu-hamburger"></i>
        </div>
        <div><div  style={this.state.show===true?{}:{display:"none"}} onClick={this.changeShow.bind(this)} className="modal_backdrop">
       </div>
       <ReactCSSTransitionGroup
          component="div"
          transitionName="fade"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}>
          {
            this.state.show &&
           
             <div style={this.state.show===false?{display:"none"}:{}}  className="couter_control">
          <TabsControl>
					<div name = "项目管理">
                    <HashRouter>
                        <App>
                        <ul>
                        {this.router_lists(Lang.projectManagement)}
                        </ul>  
                        </App>
                    </HashRouter>
					</div>
					<div name = "预决算管理">
					<HashRouter>
                        <App>
                        <ul>
                        {this.router_lists(Lang.budgetAndFinalAccountsManagementcond)}
                        </ul>  
                        </App>
                    </HashRouter>
					</div>
					<div name = "借款支出管理">
          <HashRouter>
                        <App>
                        <ul>
                        {this.router_lists(Lang.loanExpenditureManagement)}
                        </ul>  
                        </App>
                    </HashRouter>
					</div>
          <div name = "收款管理">
          <HashRouter>
                        <App>
                        <ul>
                        {this.router_lists(Lang.receivablesManagement)}
                        </ul>  
                        </App>
                    </HashRouter>
					</div>
          <div name = "讲师管理">
          <HashRouter>
                        <App>
                        <ul>
                        {this.router_lists(Lang.lecturerManagement)}
                        </ul>  
                        </App>
                    </HashRouter>
					</div>
          <div name = "实施管理">
          <HashRouter>
                        <App>
                        <ul>
                        {this.router_lists(Lang.implementationManagement)}
                        </ul>  
                        </App>
                    </HashRouter>
					</div>
				</TabsControl>
        </div>
          
          }
        </ReactCSSTransitionGroup>
      
      </div>
      
        <List/>
        <div className="footer_position router_button"> <HashRouter >
                        <App>
                        <ul>
                        {this.footer_router_lists(Lang.budgetAndFinalAccountsManagementcond)}
                        </ul>  
                        </App>
                    </HashRouter></div>
                    
        <div onClick={()=>{
         this.setState({
           dialog_show:true
         })
          console.log("goutong")
        }} className="dialog_open">沟通</div>
       <div className={this.state.dialog_show?"dialog_window open":"dialog_window"}> 
       <i onClick={()=>{
         this.setState({
           dialog_show:false
         })
        }} className="glyphicon glyphicon-arrow-left"></i>
       这是打开的对话窗口
       {/* <div style={this.state.dialog_show===true?{}:{display:"none"}} onClick={this.dialogShow.bind(this)} className="modal_backdrop"></div> */}
       {/* <div className="dialog_window"></div> */}
       </div>
			</div>
		)
	}
}
ReactDOM.render(<TabComponent />, document.getElementById('root'));

