import "./App.css";
import Login from "./pages/Login/Login/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home/Home";
import AuthProvider from "./context/AuthProvider";
import Header from "./pages/Shared/Header/Header";
import Footer from "./pages/Shared/Footer/Footer/Footer";

function App() {
  return (

      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </Switch>
        </Router>
        <Footer />
      </AuthProvider>

  );
}

export default App;
