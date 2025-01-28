import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Login from '../pages/Login'
import Home from '../pages/Home'
import ForgetPassword from '../pages/ForgetPassword'
import SignupPage from '../pages/SignupPage'


const router = createBrowserRouter([
    {
        path : "/",
        element : <App/>,
        children : [
            {
                path : "",
                element : <Home/>
            },
            {
                path : "login",
                element : <Login/>
            },
            {
                path : "forget-password",
                element : <ForgetPassword/>
            },
            {
                path : "register",
                element : <SignupPage/>
            }
        ]
       
    }
])


export default router