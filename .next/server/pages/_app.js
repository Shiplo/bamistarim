"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 8219:
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
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
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

;// CONCATENATED MODULE: ./src/components/loader/index.js

function Loader() {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "loader fixed top-0 left-0 w-screen h-screen",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "lds-ripple absolute top-1/2 left-1/2 -ml-10 -mt-10",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {}),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {})
            ]
        })
    });
}
/* harmony default export */ const loader = (Loader);

;// CONCATENATED MODULE: ./pages/_app.js







function MyApp({ Component , pageProps  }) {
    const { 0: loading , 1: setLoading  } = (0,external_react_.useState)(true);
    setTimeout(()=>setLoading(false), 1000);
    const router = (0,router_namespaceObject.useRouter)();
    (0,external_react_.useEffect)(()=>{
        router.events.on("routeChangeStart", ()=>setLoading(true));
        router.events.on("routeChangeComplete", ()=>setTimeout(()=>setLoading(false), 1000));
        router.events.on("routeChangeError", ()=>setTimeout(()=>setLoading(false), 1000));
        return ()=>{
            router.events.off("routeChangeStart", ()=>setLoading(true));
            router.events.off("routeChangeComplete", ()=>setTimeout(()=>setLoading(false), 1000));
            router.events.off("routeChangeError", ()=>setTimeout(()=>setLoading(false), 1000));
        };
    }, [
        router.events
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: loading ? /*#__PURE__*/ jsx_runtime_.jsx(loader, {}) : /*#__PURE__*/ jsx_runtime_.jsx(client_namespaceObject.ApolloProvider, {
            client: apollo_client,
            children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        })
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

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
var __webpack_exports__ = (__webpack_exec__(8219));
module.exports = __webpack_exports__;

})();