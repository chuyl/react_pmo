// var config = {"routers":"http://192.168.60.175:777/user/route/client_route","notification":"test.php","language":"Chin","version":"1.100"};
var config = {"routers":"https://erp.csst.com.cn/user/route/client_route","notification":"test.php","language":"Chin","version":"1.100"};
sessionStorage.config=JSON.stringify(config)
module.exports = config;