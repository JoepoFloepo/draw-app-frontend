import {BrowserRouter, Redirect, Route} from "react-router-dom";
import NavBar from "./components/navBar/NavBar";
import HomePage from "./pages/HomePage";
import CompositionsPage from "./pages/CompositionsPage";
import ProfilePage from "./pages/ProfilePage";
import classes from "./App.module.css";
import Canvas from "./components/composition/canvas/Canvas";

const App = () => {

    // TODO canvas should probably not be a link
    return (<BrowserRouter>
        <div className={classes.app}>
            <NavBar/>
            {/*TODO check if render, component or children or a child component is best used for rendering te component (https://v5.reactrouter.com/web/api/Route/render-func) */}
            <div >
                <Route path="/" exact>
                    <Redirect to="/main"></Redirect>
                </Route>
                <Route path='/main'><HomePage/></Route>
                <Route path='/compositions'><CompositionsPage/></Route>
                <Route path='/profile'><ProfilePage/></Route>
                <Route path='/canvas'><Canvas /></Route>
            </div>
        </div>
    </BrowserRouter>);
}

export default App;