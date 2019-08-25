//入口文件
import dva from "dva";
import {createBrowserHistory} from "history";
import App from "./App";
import createModel from "./store/index";
import 'antd/dist/antd.css';

let app = dva({history:createBrowserHistory()}); //创建dva实例

app.router(App) //路由
createModel(app) //挂载仓库
app.start('#root') //挂载的标签