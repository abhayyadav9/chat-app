import "./App.css";
import SignUp from "./pages/signup/SignUp.jsx";
import { Home } from "./pages/home/Home.jsx";
import { Login } from "./pages/login/Login.jsx";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom"; // Import Redirect along with BrowserRouter, Switch, and Route
import { useAuthContext } from "./context/AuthContext.jsx";

function App() {
  const { authUser } = useAuthContext(); // Call useAuthContext to get the authUser value
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <Router>
        <Switch>
          <Route exact path="/"> {/* Use exact to match the path exactly */}
            {authUser ? <Home /> : <Redirect to="/login" />}
          </Route>

          <Route path="/login">
            {authUser ? <Redirect to="/" /> : <Login />}
          </Route>

          {/* Check if the user is authenticated before rendering the SignUp component */}
          <Route path="/signup">
            {authUser ? <Redirect to="/" /> : <SignUp />}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
