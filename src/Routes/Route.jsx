import {
    createBrowserRouter
} from "react-router-dom";
import Root from "../Components/Root/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import NewsDetails from "../Pages/NewsDetails/NewsDetails";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./Private/PrivateRoute";

const Routes =createBrowserRouter([
    {
        path:'/',
        element: <Root/>,
        children:[
            {
                path:'/',
                element: <Home/>,
                loader: ()=>fetch('/news.json')
            },
            {
                path:'/news/:newsId',
                element: <PrivateRoute><NewsDetails/></PrivateRoute>,
                loader: ()=>fetch('/news.json')
            }
            ,{
                path:'/registration',
                element: <Register/>
            },{
                path:'/login',
                element: <Login/>
            }
        ]
    }
])

export default Routes