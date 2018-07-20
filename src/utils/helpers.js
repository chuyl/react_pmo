import config from "../config"
function logout() {
  let e = new Event("session_invalid");
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
  console.log(router.request)
    if (!isJson(json)) {
      console.log("request必须为json");
    }
    for (var key in router.request) {
      if (json[key] === null) {
        console.log("发送的json中" + key + "字段不能为null");
        return;
      } else {
        var request_low = router.request[key].split(":");
        switch (request_low[0]) {
          case "string":
            json[key] = json[key].toString();
            if (request_low.length > 1) {
              console.log(String(json[key]).length);
              if (String(json[key]).length !== Number(request_low[1])) {
                console.log("发送的json中" + key + "字段只能为" + request_low[1] + "位字符");
                return;
              }
            }
            break;
          case "int":
            if (request_low.length > 1) {
              if (json[key] >= Math.pow(2, Number(request_low[1]))) {
                console.log("发送的json中" + key + "字段只能为" + Math.pow(2, Number(request_low[1])) + "位数字");
                return;
              }
            }
            if (isNaN(Number(json[key]))) {
              console.log("发送的json中" + key + "字段需要为数字");
              return
            }
            break;
          case "list":
            if (!json[key].length) {
              console.log("发送的json中" + key + "字段需要为数组");
              return
            }
            if (request_low.length > 1) {
  
            }
            break;
          case "enum":
            if (request_low.length > 1) {
              var enum_list = eval(request_low[1]);
              if (enum_list.indexOf(json[key]) === -1) {
                console.log("发送的json中" + key + "字段需要为" + request_low[1] + "中的一项");
                return
              }
            } else {
              return;
            }
            break;
          case "student":
            break;
          case "clazz":
            break;
          case "area":
            break;
          case "object":
            if (isJson(json[key])) {
              console.log("is object");
            } else {
              console.log("is not object");
            }
            break;
        }
      }
    }
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
  console.log(key)
    var router = JSON.parse(sessionStorage.getItem(key));
    console.log(router)
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
    console.log(event.data);

  };
}