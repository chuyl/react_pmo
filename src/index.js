import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import TabsControl from './components/Tab'
import Routers from './components/Routers'
import Alert from '../src/views/components/Remind'
import {
    HashRouter,
    Link,
  } from 'react-router-dom';
import './css/style.css'
//  import Lang from './language'
import config from './config';
import local from './local' 
import {getData,getRouter } from './utils/helpers';
 const Lang = sessionStorage.Language?JSON.parse(sessionStorage.Language):"";
// window.onresize = function(){
//   console.log(document.body.clientWidth)
  
// }
//二级路由
console.log(Lang)
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
      logged: Boolean(sessionStorage.getItem("logged")),
      message_state:false,
      login_account:"刘雪松",
      login_password:"123456",
		}
  }
  componentWillMount() {
    
    for(var i in Lang){
      this.langMangement(Lang[i].data)
    }
    // this.langMangement(Lang.projectManagement)
		// this.langMangement(Lang.budgetAndFinalAccountsManagementcond)
		// this.langMangement(Lang.loanExpenditureManagement)
		// this.langMangement(Lang.receivablesManagement)
		// this.langMangement(Lang.lecturerManagement)
    // this.langMangement(Lang.implementationManagement)
    // this.langMangement(Lang.viewManagement)
    sessionStorage.getItem("logged")===false;
    this.getRoutes();
    
}

// getViewJsonList() {
//   var cb = (route, message, arg) => {
//     if (message.error === 0) {
//       sessionStorage.view=JSON.stringify(message.data);
//       // this.setState({
//       //   view_table_list:
//       // })

//     }
//   }
//   console.log("json_manage_list")
//   getData(getRouter("json_manage_list"), { token:sessionStorage.token }, cb, {});
// }
// getMenuJsonList() {
//   var cb = (route, message, arg) => {
//     console.log(message)
//     if (message.error === 0) {
//       console.log(message.data)
//       sessionStorage.Language=JSON.stringify(message.data);
     
//       for(var i in message.data){
//         this.langMangement(message.data[i].data)
//       }
     
//     }
//   }
//   console.log("menu_manage_list")
//   getData(getRouter("menu_manage_list"), { token:sessionStorage.token }, cb, {});
// }
langMangement(lang){
for(var x=0;x<lang.length;x++){
  if(window.location.hash.split("#")[1]===lang[x].path){
    this.setState({
      currentIndex:lang[x].path
    })
  }
}
}
  getRoutes = () => {
   
    var cb = (route, message, arg) => {
      var local_remote={};
      for(var localkey in local){
        local_remote[localkey]=local[localkey]
      }
      for(var key in message.data.routelist){
        if(message.data.routelist[key].version>=1.0){
          local_remote[key]=message.data.routelist[key]
        }
        
      }
      try {
        
        if (message.error === 0) {
          for(var sessionkey in local_remote){
            sessionStorage.setItem(sessionkey, JSON.stringify(local_remote[sessionkey]));
          }
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
        //  console.log(router_lists)
        return(
          components.push(
            <li key={router_list.title} onClick={ () => { 
              this.setState({ currentIndex :router_list.path})  
              console.log(router_list.data)
            } } className={ this.check_router_index(router_list.path)}><Link to={router_list.path}>{router_list.title}</Link></li>
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
  changeURLArg(url,arg){
    var pattern=arg;
    return url+pattern; 
    // if(url.match(pattern)){
    //     var tmp=arg;
    //     tmp=url.replace(eval(tmp),pattern);
    //     return tmp;
    // }else{ 
    //   return url+pattern; 
    // }
}
handleLogout = () => {
  if(window.location.hash.split("#")[1]!=="/"){
    window.location.href=window.location.href.split("#/")[0]

  }
 

  this.setState({ logged: sessionStorage.getItem("logged"), apptype: 0 });
}
  login = ()=>{
    var cb = (route, message, arg) => {
			if (message.error === 0) {

        sessionStorage.token=message.data.token;
        sessionStorage.logged = true;
        //获取菜单列表存入session
        var cb_menu = (route, message, arg) => {
          if (message.error === 0) {
            sessionStorage.Language=JSON.stringify(message.data);
            //获取视图列表存入session
            var cb_view = (route, message, arg) => {
              if (message.error === 0) {
                sessionStorage.view=JSON.stringify(message.data);
                this.setState({
                  currentIndex:"/trainingProgram"
                })
                this.setState({logged:sessionStorage.getItem("logged")})
                if(window.location.hash.indexOf("#")>=0){
                  if(window.location.hash.split("#")[1]==="/"){
                    　window.location.href = this.changeURLArg(window.location.href,'trainingProgram')
                  }
                }else{
                  //window.location.href = this.changeURLArg(window.location.href,'trainingProgram')
                }
                 window.location.reload()
              }else if(message.error === 2){
                console.log("未登录")
                sessionStorage.logged = false;
                sessionStorage.token="";
                if(window.location.hash.split("#")[1]!=="/"){
                  window.location.href=window.location.href.split("#/")[0]
                
                  }
              }else{

                Alert.open({
                  alertTip:message.msg
                  
                });
                setTimeout(function(){
                  Alert.close();
                },3000)
            }
          }
            getData(getRouter("json_manage_list"), { token:sessionStorage.token }, cb_view, {});
          }else if(message.error === 2){
            console.log("未登录")
            sessionStorage.logged = false;
            sessionStorage.token="";
            if(window.location.hash.split("#")[1]!=="/"){
              window.location.href=window.location.href.split("#/")[0]
            
              }
          }else{
              Alert.open({
                alertTip:message.msg
                
              });
              setTimeout(function(){
                Alert.close();
              },3000)
            }
        }
        getData(getRouter("menu_manage_list"), { token:sessionStorage.token }, cb_menu, {});
			}else if(message.error === 2){
				console.log("未登录")
				sessionStorage.logged = false;
				sessionStorage.token="";
				if(window.location.hash.split("#")[1]!=="/"){
					window.location.href=window.location.href.split("#/")[0]
				
				  }
			}else{

				Alert.open({
					alertTip:message.msg
					
				});
				setTimeout(function(){
					Alert.close();
				 },3000)
      }
    }
    
		getData(getRouter("user_account_login"), { account:this.state.login_account,password:this.state.login_password }, cb, {});		
    
  }
  LoginTable = () => {
    return  (
      <div className="login">
        <div className="login_window">
        <div className="user_name">
          <input
            id="login_account"
            // labelValue="用户名"
            value={this.state.login_account}
            // inputValue={this.state.login_account}
            onChange={(e)=>{
              this.setState({
                login_account:e.target.value
              })
            }}
          />
          </div>
          <div className="pass_word">
          <input
            id="login_password"
            type="password"
            value={this.state.login_password}
            onChange={(e)=>{
              this.setState({
                login_password:e.target.value
              })
            }}
            />
            </div>
            <button
              onClick={()=>{
                this.login()
              }}

            >登录</button>
          </div>
      </div>
    )
  }

	render(  ){
   const menuView = [];
    for(var i in Lang){
     menuView.push({name:Lang[i].name,data:Lang[i].data})
    }
		return(
      sessionStorage.getItem("logged")==="true"?	<div className="sidebar">
     
        <div  style={this.state.show===true?{display:"none"}:{}} className="router_screen nav_lists">
           {/* <div style={{display:"none"}}>{this.state.menu_list}</div> */}
            <TabsControl>
              {menuView.map((menuView,index)=>{
                return(
                  <div key={index} name = {menuView.name}>
                  <HashRouter>
                    <App>
                      <ul>
                        {this.router_lists(menuView.data)}
                      </ul>  
                    </App>
                  </HashRouter>
                </div>
                )
              })}
            </TabsControl>
          </div>
        <div style={this.state.show===true?{display:"none"}:{}}  className="router_button" onClick={this.changeShow.bind(this)}>
          <i className="glyphicon glyphicon-menu-hamburger"></i>
        </div>
        <div>
          <div  style={this.state.show===true?{}:{display:"none"}} onClick={this.changeShow.bind(this)} className="modal_backdrop">
          </div>
          <ReactCSSTransitionGroup
              component="div"
              transitionName="fade"
              transitionEnterTimeout={500}
              transitionLeaveTimeout={500}
          >
            {
              this.state.show &&
              
              <div style={this.state.show===false?{display:"none"}:{}}  className="couter_control">
                <TabsControl>
                  {menuView.map((menuView,index)=>{
                      return(
                        <div key={index} name = {menuView.name}>
                          <HashRouter>
                            <App>
                              <ul>
                                {this.router_lists(menuView.data)}
                              </ul>  
                            </App>
                          </HashRouter>
                      </div>
                      )
                    })}
                  </TabsControl>
              </div>
          
            }
          </ReactCSSTransitionGroup>
      
        </div>
      
        <List/>
        <div className="footer_position router_button"> 
          <HashRouter >
            <App>
              <ul>
                {Lang!==""?this.footer_router_lists(Lang.budgetAndFinalAccountsManagementcond.data):""}
              </ul>  
            </App>
          </HashRouter>
        </div>
        <div onClick={()=>{
          this.setState({
            dialog_show:true
          })
            console.log("goutong")
          }} className="dialog_open">沟通
        </div>
        <div style={{bottom:"100px"}} onClick={()=>{
          sessionStorage.logged = false;
          sessionStorage.token="";
          this.handleLogout()
        //   sessionStorage.logged = false;
        //  this.setState({logged:sessionStorage.getItem("logged")})
         
          }} className="dialog_open">退出
        </div>
        <div className={this.state.dialog_show?"dialog_window open":"dialog_window"}> 
          <div  onClick={()=>{
            this.setState({
              dialog_show:false
            })
            }} className="return_btn">
          </div>
          这是打开的对话窗口
          <input/>
       {/* <div style={this.state.dialog_show===true?{}:{display:"none"}} onClick={this.dialogShow.bind(this)} className="modal_backdrop"></div> */}
       {/* <div className="dialog_window"></div> */}
        </div>
			</div>:this.LoginTable()
		)
	}
}
ReactDOM.render(<TabComponent />, document.getElementById('root'));

