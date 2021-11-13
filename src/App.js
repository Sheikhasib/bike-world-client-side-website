import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Header from "./Pages/Shared/Header/Header";
import Footer from "./Pages/Shared/Footer/Footer";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import NotFound from "./Pages/NotFound/NotFound";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import ExploreProducts from "./Pages/ExploreProducts/ExploreProducts/ExploreProducts";
import ExploreProductDetails from "./Pages/ExploreProductDetails/ExploreProductDetails";
import MyOrders from "./Pages/Dashboard/MyOrders/MyOrders";
import ManageAllProducts from "./Pages/Dashboard/ManageAllProducts/ManageAllProducts";
import AddProducts from "./Pages/Dashboard/AddProducts/AddProducts";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import UserPay from "./Pages/Dashboard/UserPay/UserPay";
import Review from "./Pages/Home/Review/Review";


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/exploreProducts">
              <ExploreProducts></ExploreProducts>
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <PrivateRoute path="/myOrders">
              <MyOrders />
            </PrivateRoute>
            <Route path="/manageAllProducts">
              <ManageAllProducts />
            </Route>
            <PrivateRoute path="/addAllProducts">
              <AddProducts></AddProducts>
            </PrivateRoute>
            <PrivateRoute path="/userPay">
              <UserPay></UserPay>
            </PrivateRoute>
            <PrivateRoute path="/review">
              <Review></Review>
            </PrivateRoute>
            <PrivateRoute path="/products/:productId">
              <ProductDetails></ProductDetails>
            </PrivateRoute>
            <PrivateRoute path="/exploreProducts/:productId">
              <ExploreProductDetails></ExploreProductDetails>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
