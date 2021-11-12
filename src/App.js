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
import ExploreProduct from "./Pages/ExploreProducts/ExploreProduct/ExploreProduct";
import ExploreProducts from "./Pages/ExploreProducts/ExploreProducts/ExploreProducts";
import ExploreProductDetails from "./Pages/ExploreProductDetails/ExploreProductDetails";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";


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
            <Route path="exploreProducts">
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
