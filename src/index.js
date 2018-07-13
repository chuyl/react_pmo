import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import TabsControl from './components/Tab'
import AppList from './views/AppList'
import {
    HashRouter,
    Route,
    Link,
  } from 'react-router-dom';
import './css/style.css'
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
          <div>列表</div>
          
          <HashRouter>
          <App>
          <Route exact path="/home" component={AppList} />
          <Route path="/about" component={About} />
          <Route path="/inbox" component={Inbox} /> 
          <Route exact path="/home1" component={AppList} />
          <Route path="/about1" component={About} />
          <Route path="/inbox1" component={Inbox} />                         
          </App>
          </HashRouter>
         
          
        </div>
      );
    }
  }
  //手机端footer
  // class Footer extends Component {
  //   render() {
  //     return (
  //       <div className="footer_position">home</div>
  //       // <table>
  //       //   <tr>
  //       //     <td>home</td><td>about</td><td>inbox</td>
  //       //   </tr>
  //       // </table>
  //     );
  //   }
  // }
  const About = () => (
    <div>
      <h3>About</h3>
    </div>
  )
  const Message = ({ match }) => (
    <div>
      <h3>new messages</h3>
      <h3>{match.params.id}</h3>
    </div>
  )
  const Inbox = ({ match }) => (
    <div>
      <h2>Topics</h2>
      <Route path={`${match.url}/messages/:id`} component={Message}/>
   
    </div>
  )
  //选项卡&路由
class TabComponent extends Component{
  constructor(  ){
		super(  )
		this.state = { 
      currentIndex : 0,
      couter:false,
      show: false,
      dialog_show:false,
      router_list_first:[{path:"/home",title:"home"},
      {path:"/about",title:"about"},
      {path:"/inbox",title:"inbox"}],
      router_list_second:[{path:"/home1",title:"home1"},
      {path:"/about1",title:"about1"},
      {path:"/inbox1",title:"inbox1"}]
		}
  }
  // componentWillMount(){
  //   console.log(document.body.clientHeight)
  // }
    //路由激活状态
    check_router_index( index ){
      return index === this.state.currentIndex ? "tab_title active" : "tab_title"
    }
  // router_list_first(){
  //   var components = [];
  //   var router_lists = [{path:"/home",title:"home"},
  //                      {path:"/about",title:"about"},
  //                      {path:"/inbox",title:"inbox"}];
  //      router_lists.map((router_list)=>{
  //       return(
  //         components.push(
  //           <li key={router_list.title} onClick={ () => { this.setState({ currentIndex :router_list.title}) } } className={ this.check_router_index(router_list.title) }><Link to={router_list.path}>{router_list.title}</Link></li>
  //        )
  //       )
  //      }
  //     );
  //      return components
  // }
  router_lists(router_lists){
    var components = [];
    
       router_lists.map((router_list)=>{
        return(
          components.push(
            <li key={router_list.title} onClick={ () => { this.setState({ currentIndex :router_list.title}) } } className={ this.check_router_index(router_list.title) }><Link to={router_list.path}>{router_list.title}</Link></li>
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
					<div name = "first2">
                    <HashRouter>
                        <App>
                        <ul>
                          {this.router_lists(this.state.router_list_first)}
                        </ul>  
                        </App>
                    </HashRouter>
					</div>
					<div name = "second">
          <HashRouter>
                        <App>
                        <ul>
                        {this.router_lists(this.state.router_list_second)}
                        </ul>  
                        </App>
                    </HashRouter>
					</div>
					<div name = "third">
						第三帧
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
					<div name = "first2">
                    <HashRouter>
                        <App>
                        <ul>
                        {this.router_lists(this.state.router_list_first)}
                        </ul>  
                        </App>
                    </HashRouter>
					</div>
					<div name = "second">
					<HashRouter>
                        <App>
                        <ul>
                        {this.router_lists(this.state.router_list_second)}
                        </ul>  
                        </App>
                    </HashRouter>
					</div>
					<div name = "third">
						第三帧
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
                        {this.footer_router_lists(this.state.router_list_second)}
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

