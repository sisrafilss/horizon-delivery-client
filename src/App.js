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
import MyOrders from "./pages/MyOrders/MyOrders";
import ManageAllOrders from "./pages/ManageAllOrders/ManageAllOrders";
import AddANewService from "./pages/AddANewService/AddANewService";
import LoadingSpinner from "./pages/Shared/LoadingSpinner/LoadingSpinner";
import useData from "./hooks/useData";

function App() {
  const { isLoading } = useData();

  return (
    <AuthProvider>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
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
            <PrivatRoute path="/my-orders">
              <MyOrders />
            </PrivatRoute>
            <PrivatRoute path="/manage-all-orders">
              <ManageAllOrders />
            </PrivatRoute>
            <PrivatRoute path="/add-a-new-service">
              <AddANewService />
            </PrivatRoute>
            <Route path="*">
              <NotFoundPage />
            </Route>
          </Switch>
          <Footer />
        </Router>
      )}
    </AuthProvider>
  );
}

export default App;
