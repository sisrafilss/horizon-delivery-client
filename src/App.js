import "./App.css";
import Login from "./pages/Login/Login/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home/Home";
import AuthProvider from "./context/AuthProvider";
import Header from "./pages/Shared/Header/Header";
import Footer from "./pages/Shared/Footer/Footer/Footer";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import PrivatRoute from "./PrivatRoute/PrivatRoute";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

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
          <PrivatRoute path="/placeOrder/:id">
            <PlaceOrder />
          </PrivatRoute>
          <Route path="*">
            <NotFoundPage />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </AuthProvider>
  );
}

export default App;
