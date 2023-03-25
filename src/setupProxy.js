const proxy = require('http-proxy-middleware');
const package = require('../package.json');
const filter = (pathname, req) => {
    console.log(pathname, new RegExp(`^/${package.name ?? ''}$`).test(pathname));
    return new RegExp(`^/${package.name ?? ''}$`).test(pathname);
};

module.exports = function (app) {
    app.use(proxy.createProxyMiddleware(filter, {
        target: 'https://www.ppspace.top/app1',
        secure: false,
    }));
    app.use(proxy.createProxyMiddleware('/main_app', {
        target: 'https://www.ppspace.top/main_app',
        secure: false,
    }));
};