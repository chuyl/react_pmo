import config from "../config"
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
        console.log(e);
        console.log("调用" + router.url + "接口出错");
      });
      return
    }
  
export function getRouter(key) {
  var router = JSON.parse(sessionStorage.getItem(key));
  //  return router ===  router;
     return router === null ? { url: config.routers } : router;
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
export function getDataList(id) {
  console.log(id)
}