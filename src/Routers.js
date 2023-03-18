import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminRoute from "./auth/helper/AdminRoutes";
import PrivateRoute from "./auth/helper/PrivateRoutes";
import Home from "./core/Home";
import Signin from "./user/Signin";
import Signup from "./user/Signup";
import ParentDashboard from "./user/ParentDashboard";
import BabysitterDashboard from "./user/BabysitterDashboard";
import AdminDashboard from "./user/AdminDashBoard";
import AddCategory from "./admin/AddCategory";
import ManageCategories from "./admin/ManageCategories";
import AddProduct from "./admin/AddProduct";
import ManageProducts from "./admin/ManageProducts";
import UpdateProduct from "./admin/UpdateProduct";
import UpdateCategory from "./admin/UpdateCategory";
export default function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/signup' exact element={<Signup />} />
        <Route path='/signin' exact element={<Signin />} />

        {/* ADMIN ROUTES */}
        <Route element={<AdminRoute/>}>
                    <Route path="/admin-dashboard" exact element={<AdminDashboard/>} />
                    {/* <Route path="/user-verification" exact element={<UserVerification/>} /> */}
        </Route>
        <Route path="/parent/dashboard" exact element={<ParentDashboard/>} />
                    <Route path="/babysitter/dashboard" exact element={<BabysitterDashboard/>} />
        {/* PRIVATE ROUTES */}
        <Route element={<PrivateRoute/>}>
                    {/* <Route path="/choose-role" exact element={<ChooseRole/>} />
                    <Route path="/post-ride" exact element={<PostRide/>} />
                    <Route path="/add-vehicle" exact element={<AddVehicle/>} /> */}
                    
                    {/* <Route path="/show-ride-requests" exact element={<ShowRideRequests/>} />
                    <Route path="/view-profile/:viewId" exact element={<ViewUserProfile/>} />
                    <Route path="/check-request-status" exact element={<CheckRideStatus/>} />
                    <Route path="/checkpayments/:rideId" exact element={<CheckPayments/>} />
                    <Route path="/payment/:rideId" exact element={<Payment/>} />
                    <Route path="/feedback/:rideId" exact element={<Feedback/>} />
                    <Route path="/viewRide/:rideId" exact element={<ViewMap/>} />
                    <Route path="/messenger/:userId" exact element={<Messenger/>} />
                    <Route path="/messenger" exact element={<Messenger/>} />
                    <Route path="/update-profile" exact element={<UpdateProfile/>} />
                    <Route path="/get-rides" exact element={<ShowRides/>} /> */}
                </Route>  


        {/* <PrivateRoute path='/user/dashboard' exact element={UserDashboard} /> */}
        {/* <AdminRoute path='/admin/dashboard' exact element={AdminDashboard} />
        <AdminRoute
          path='/admin/create/category'
          exact
          element={AddCategory}
        />
        <AdminRoute
          path='/admin/categories'
          exact
          element={ManageCategories}
        />
        <AdminRoute path='/admin/create/product' exact element={AddProduct} />
        <AdminRoute path='/admin/products' exact element={ManageProducts} />
        <AdminRoute
          path='/admin/product/update/:productId'
          exact
          element={UpdateProduct}
        />
        <AdminRoute
          path='/admin/category/update/:categoryId'
          exact
          element={UpdateCategory}
        /> */}
      </Routes>
    </BrowserRouter>
  );
}
