import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminRoute from "./auth/helper/AdminRoutes";
import PrivateRoute from "./auth/helper/PrivateRoutes";
import Home from "./core/Home";
import Signin from "./user/Signin";
import Signup from "./user/Signup";
import ParentDashboard from "./parent/ParentDashboard";
import BabysitterDashboard from "./babysitter/BabysitterDashboard";
import AdminDashBoard from "./admin/AdminDashBoard";
import ManageBabysitters from "./admin/ManageBabysitters";
import ManageBookings from "./admin/ManageBookings";
import UpdateProfile from "./user/UpdateProfile";
import AddBaby from "./parent/AddBaby"
import ManageBabies from "./parent/ManageBabies";
import ContactUs from "./core/ContactUs";
import ViewFeedbacks from "./babysitter/ViewFeedbacks";
import AddVaccination from "./baby/AddVaccination";
import AddDoctor from "./baby/AddDoctor";
import BookService from "./parent/BookService";
import AddAdmin from "./admin/AddAdmin";
import ViewBaby from "./user/ViewBaby";
import Profile from "./user/Profile";
import ViewBookingsParent from "./parent/ViewBookingsParent";
import Payment from "./parent/Payment";
import AssignBabysitter from "./admin/AssignBabysitter";
import Messenger from "./chat/Messenger";
import WriteFeedback from "./parent/WriteFeedback";
import Feedback from "./parent/Feedback";
import AssignedBookings from "./babysitter/AssignedBookings";
import CheckPayments from "./admin/CheckPayments";
import AddPost from "./post/AddPost";
import ViewPosts from "./post/ViewPosts";



export default function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/signup" exact element={<Signup />} />
        <Route path="/signin" exact element={<Signin />} />
        <Route path="/chat/:chatUserId" exact element={<Messenger />} />
        <Route path="/chat" exact element={<Messenger />} />
        <Route path="/view-posts" exact element={<ViewPosts />} />
        


        {/* ADMIN ROUTES */}
        
        <Route path="/admin/dashboard" exact element={<AdminDashBoard />} />
        <Route path="/admin/bookings" exact element={<ManageBookings />} />
        <Route path="/admin/add-admin" exact element={<AddAdmin />} />
        <Route path="/admin/babysitters" exact element={<ManageBabysitters />} />
        <Route path="/assign-babysitter/:bookingId" exact element={<AssignBabysitter />} />
        <Route path="/admin/payments" exact element={<CheckPayments />} />





        <Route path="/update-profile" exact element={<UpdateProfile/>} />


        <Route path="/profile/:userId" exact element={<Profile/>} />


        {/* PARENT */}
        <Route path="/add-baby" exact element={<AddBaby />} />
        <Route path="/manage-babies" exact element={<ManageBabies />} />
        <Route path="/contact-us" exact element={<ContactUs />} />
        <Route path="/feedbacks/:babysitterId" exact element={<ViewFeedbacks />} />
        <Route path="/booking" exact element={<BookService />} />
        <Route path="/bookings/view" exact element={<ViewBookingsParent />} />
        <Route path="/payment/:bookingId" exact element={<Payment />} />
        <Route path="/write-feedback" exact element={<WriteFeedback />} />
        <Route path="/feedback/:bookingId" exact element={<Feedback />} />


        {/* BABY */}
        <Route path="/:babyId/vaccine" exact element={<AddVaccination />} />
        <Route path="/:babyId/doctor" exact element={<AddDoctor />} />
        <Route path="/baby/:babyId" exact element={<ViewBaby />} />



        <Route path="/parent/dashboard" exact element={<ParentDashboard />} />

        {/* Babysitter */}
        <Route
          path="/babysitter/dashboard"
          exact
          element={<BabysitterDashboard />}
        />
        <Route
          path="/babysitter/dashboard"
          exact
          element={<BabysitterDashboard />}
        />
        <Route
          path="/add-post/:babysitterId"
          exact
          element={<AddPost/>}
        />
        <Route
          path="/assigned-bookings/:babysitterId"
          exact
          element={<AssignedBookings />}
        />
      
        {/* PRIVATE ROUTES */}
        <Route element={<PrivateRoute />}>
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
