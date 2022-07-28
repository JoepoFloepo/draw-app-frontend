import {BrowserRouter, Redirect, Route} from "react-router-dom";
import MenuBar from "./components/menuBar/MenuBar";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import CompositionsPage from "./pages/CompositionsPage";
import ProfilePage from "./pages/ProfilePage";

const App = () => {
    return (<BrowserRouter>
        <div className="App">
            <MenuBar/>
            {/*TODO check if render, component or children or a child component is best used for rendering te component (https://v5.reactrouter.com/web/api/Route/render-func) */}
            <Route path="/" exact>
                <Redirect to="/main"></Redirect>
            </Route>
            <Route path='/main'><HomePage/></Route>
            <Route path='/login'><LoginPage/></Route>
            <Route path='/register'><RegisterPage/></Route>
            <Route path='/compositions'><CompositionsPage/></Route>
            <Route path='/profile'><ProfilePage/></Route>
        </div>
    </BrowserRouter>);
}

export default App;