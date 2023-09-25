import React from "react";
import { Route, Routes } from "react-router-dom";
import HomeCls from "../pages/Home/home";
import LoginCls from "../pages/Login/login";
import ProfileCls from "../pages/Profile/profile";
import BigCalendarCls from "../pages/Calendar/calendar";

class RoutersCls extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <Routes>
          <Route path="/" element={<HomeCls />}></Route>
          <Route path="/login" element={<LoginCls />}></Route>
          <Route path="/profile" element={<ProfileCls />}></Route>

          <Route path="/users" element={<ProfileCls />}></Route>
          <Route path="/products" element={<ProfileCls />}></Route>
          <Route path="/orders" element={<ProfileCls />}></Route>
          <Route path="/posts" element={<ProfileCls />}></Route>
          <Route path="/calendar" element={<BigCalendarCls />}></Route>
          <Route path="/permissionChart" element={<ProfileCls />}></Route>
        </Routes>
      </React.Fragment>
    );
  }
}
export default RoutersCls;
