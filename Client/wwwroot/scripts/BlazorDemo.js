var blazorDemo = {};

blazorDemo.getSessionStorage = function (key) {
    return sessionStorage.getItem(key);
}

blazorDemo.setSessionStorage = function (key, data) {
    return sessionStorage.setItem(key, data);
}
