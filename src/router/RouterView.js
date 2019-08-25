import React, { Component } from 'react';
import { Switch, Route, Redirect } from "dva/router";

class RouterView extends Component {
    render() {
        let { routes } = this.props;
        const redirectArr = routes.filter(item => item.redirect);
        const RedirectArr = redirectArr.map((item, index) => {
            return <Redirect key={index} from={item.path} to={item.redirect} />
        });
        routes = routes.filter(item => item.component);
        return (
            <Switch>
                {
                    routes.map((item, index) => {
                        return <Route key={index} path={item.path} render={(prop) => {
                            return <item.component children={item.children} {...prop} />
                        }} />
                    })
                }
                {
                    RedirectArr.length !== 0 && RedirectArr
                }
            </Switch>
        );
    }
}

export default RouterView;