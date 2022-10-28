"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 6546:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "@apollo/client"
const client_namespaceObject = require("@apollo/client");
;// CONCATENATED MODULE: ./src/apollo/client.js

const defaultOptions = {
    watchQuery: {
        fetcPolicy: "no-cache",
        errorPolicy: "ignore"
    },
    query: {
        fetchPolicy: "no-cache",
        errorPolicy: "all"
    }
};
const cache = new client_namespaceObject.InMemoryCache({
    resultCaching: false
});
const client_link = (0,client_namespaceObject.createHttpLink)({
    uri: `${"https://bamistarim.ganzach.org.il"}/graphql`
});
//console.warn('process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL', process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL);
const client = new client_namespaceObject.ApolloClient({
    link: client_link,
    cache,
    defaultOptions
});
/* harmony default export */ const apollo_client = (client);

;// CONCATENATED MODULE: ./pages/_app.js




function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(client_namespaceObject.ApolloProvider, {
        client: apollo_client,
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        })
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(6546));
module.exports = __webpack_exports__;

})();