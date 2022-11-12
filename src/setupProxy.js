const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://kapi.kakao.com",
      pathRewrite: {
        "^/v1": "",
      },
    })
  );
};
