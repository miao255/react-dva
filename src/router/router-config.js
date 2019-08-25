import Home from "../container/Home";

export const routes = [
    {
        path:"/home",
        component:Home,
    },
    {
        path:"/",
        redirect:"/home",
    }
]