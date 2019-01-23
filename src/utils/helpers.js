import configs from "../config"
const config=sessionStorage.config1?JSON.parse(sessionStorage.config1):JSON.parse(sessionStorage.config)
function logout() {
  let e = new Event("token_invalid");
  dispatchEvent(e);
}
/**
 * 向服务器发送消息
 * @param {*} router 
 * @param {*} json 
 * @param {*} callback 
 * @param {*} args 
 */
  export function getData(router, json, callback = null, args = {}) {
      let e = new Event("loading");
      dispatchEvent(e);
      router.url.indexOf(".json")!==-1?fetch(router.url).then(function (response) {
        return response.json();
      }).then(function (data) {
        if (callback !== null) {
          if (data.code === 10099) {
            logout();
          }
          callback(router, data, args);
         
        }
        return data;
      }).catch(function (e) {
        console.log(e);
        console.log("调用" + router.url + "接口出错");
      }):
      fetch(router.url, {
        method: 'POST',
        mode: 'cors',
        cache: 'default',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/x-www.form-urlencoded'
        },
        body: JSON.stringify(json)
      }).then(function status(response) {
        // console.log(response.responseURL)
        let e = new Event("dataOnload");
        dispatchEvent(e);
        if (response.status >= 200 && response.status < 300) {
          return Promise.resolve(response);
        }
        else {
          return Promise.reject(new Error(response.statusText));
        }
      }).then(function (response) {
         return response.json();
      }).then(function (data) {
        if (callback !== null) {
          if (data.code === 10099) {
            logout();
          }
          callback(router, data, args);
        }
        return data;
      }).catch(function (e) {
        //  console.log(url)
        console.log(e);
        console.log("调用" + router.url + "接口出错");
      });
      return
    }
    export function PostCsvData(router, json, callback = null, args = {}) {
      let e = new Event("loading");
      dispatchEvent(e);

      fetch(router.url, {
        method: 'POST',
        mode: 'cors',
        cache: 'default',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/x-www.form-urlencoded'
        },
        body: JSON.stringify(json)
      }).then(res => res.blob().then(blob => { 
        var a = document.createElement('a'); 
        var url = window.URL.createObjectURL(blob);   // 获取 blob 本地文件连接 (blob 为纯二进制对象，不能够直接保存到磁盘上)
        var filename = res.headers.get('Content-Disposition'); 
        a.href = url; 
        var data =new Date()
        a.download = data.toLocaleDateString()+`.csv`
        a.click(); 
        window.URL.revokeObjectURL(url); 
    })); 
    }
  
export function getRouter(key) {
  var router = JSON.parse(sessionStorage.getItem(key));
  //  return router ===  router;
     return router === null ? { url: config.routers } : router;
  }
  /** 
	 * @time 2018-12-07
	 * @author xuesong
	 * @param getList 函数 获取list接口名称 list1菜单1,list菜单2
	 */
  export function getList(list1,list2) {
    var message = JSON.parse(sessionStorage.Language)[list1].data;
   	for(var i = 0;i<message.length;i++){
			if(message[i].component===list2){
        var list = message[i].url;
			}
		}
    //  return router ===  router;
       return list;
    }
  export function isJson(obj) {
    return typeof (obj) === "object" && Object.prototype.toString.call(obj).toLowerCase() === "[object object]" && !obj.length;
  }
  /**
 * 服务器通知
 */
export function notification() {
  var source = new EventSource(config.notification);
  source.onmessage = function (event) {

  };
}
export function dealNumber(money){
  // console.log(typeof(money))
 if(money && money!=null){
    money = String(money);
    var left=money.split('.')[0],right=money.split('.')[1];
    right = right ? (right.length>=2 ? '.'+right.substr(0,2) : '.'+right+'0') : '.00';
    var temp = left.split('').reverse().join('').match(/(\d{1,3})/g);
    return (Number(money)<0?"-":"") + temp.join(',').split('').reverse().join('')+right;
}else if(money===0){   //注意===在这里的使用，如果传入的money为0,if中会将其判定为boolean类型，故而要另外做===判断
    return '0.00';
}else{
    return "";
}

}
export function dxNumber(n){
  if (!/^(0|[1-9]\d*)(\.\d+)?$/.test(n))
  return "数据非法";
var unit = "千百拾亿千百拾万千百拾元角分", str = "";
  n += "00";
var p = n.indexOf('.');
if (p >= 0)
  n = n.substring(0, p) + n.substr(p+1, 2);
  unit = unit.substr(unit.length - n.length);
for (var i=0; i < n.length; i++)
  str += '零壹贰叁肆伍陆柒捌玖'.charAt(n.charAt(i)) + unit.charAt(i);
return str.replace(/零(千|百|拾|角)/g, "零").replace(/(零)+/g, "零").replace(/零(万|亿|元)/g, "$1").replace(/(亿)万|壹(拾)/g, "$1$2").replace(/^元零?|零分/g, "").replace(/元$/g, "元整");
}
export function timestampToTime(timestamp) {
  var date = new Date(timestamp * 1000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
  var Y = date.getFullYear() + '-';
  var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
  var D = date.getDate() + ' ';
  return Y+M+D;
}
/**
 * 每个页面初始化使用的cache
 * @param {*回调函数} callback 
 */
// export function initCache(callback = () => { }) {
//   if (sessionStorage.logged === "true" || sessionStorage.token !== undefined) {
//     var cb = (route, message, arg) => {
//       if (message.code === Code.LOGIC_SUCCESS) {
//         window.CacheData = message.data;
//         callback()
//       }
//     }
//     if (Number(sessionStorage.apptype) === APP_TYPE_COMPANY) {
//       getData(getRouter(QUERY), { token: sessionStorage.token }, cb, { callback: callback });

//     } else if (Number(sessionStorage.apptype) === APP_TYPE_ORANIZATION) {
//       getData(getRouter(INST_QUERY), { token: sessionStorage.token }, cb, { callback: callback });
//     } else {
//       console.log("error app type query");
//     }
//   } else {
//     logout();
//   }
// }
export function postData(list_message,before_api_uri,dataId) {
  console.log(dataId)
  var key_name = [];
                var value = [];
                if(dataId){
                    value.push("id")
                    key_name.push(dataId)
                }
                for (var i = 0; i < list_message.length; i++) {
                    if(list_message[i].type_name==="ListTextSearch"||list_message[i].type_name==="SelectList"||list_message[i].type_name==="SelectListSearch"){
                        value.push(list_message[i].id_name+"_name")
                        key_name.push(document.getElementById(list_message[i].id_name+"_name").innerHTML=== "-选择-" ? "" : document.getElementById(list_message[i].id_name+"_name").innerHTML)
                        value.push(list_message[i].id_name+"_id")
                        key_name.push(document.getElementById(list_message[i].id_name+"_id").innerHTML=== "-选择-" ? "" : document.getElementById(list_message[i].id_name+"_id").innerHTML || document.getElementById(list_message[i].id_name+"_id").value=== "-选择-" ? "" : document.getElementById(list_message[i].id_name+"_id").value)
                       }else if(list_message[i].type_name==="TextArea"){
                        value.push(list_message[i].id_name)
                        key_name.push(document.getElementById(list_message[i].id_name).value)
                    }else{
                        value.push(list_message[i].id_name)
                        key_name.push(document.getElementById(list_message[i].id_name).innerHTML=== "-选择-" ? "" : document.getElementById(list_message[i].id_name).innerHTML || document.getElementById(list_message[i].id_name).value=== "-选择-" ? "" : document.getElementById(list_message[i].id_name).value)
                      }			 
                }     
                var obj = {};
                for(var j=0;j<value.length;j++){
                    obj[value[j]] =key_name[j];
                }
                var cb = (route, message, arg) => {
                    if (message.error === 0) {
                        this.setState({
                            card_state:false
                        })
                        this.listProject()
                    }else if(message.error === 2){
                      console.log("未登录")
                      sessionStorage.logged = false;
                      sessionStorage.token="";
                      if(window.location.hash.split("#")[1]!=="/"){
                        window.location.href=window.location.href.split("#/")[0]
                      
                        }
                    }
        
                }
                console.log(before_api_uri)
                getData(getRouter(before_api_uri), {data:obj,token:sessionStorage.token}, cb, {});
}
