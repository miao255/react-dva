import React from "react";
import {Router} from "dva/router";
import {routes} from "./router/router-config";
import RouterView from "./router/RouterView";

export default function App({history}){
    return <Router history={history}>
    <RouterView routes={routes}/>
    </Router>
}