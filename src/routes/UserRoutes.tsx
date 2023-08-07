import React from "react";
import { Route, Routes } from "react-router-dom";
import AllUser from "../components/AllUser";
import UserDetail from "../components/UserDetail";
import UserList from "../components/UserList";
import UserNav from "../components/UserNav";
import PageNotFound from "../PageNotFound";
import UserEdit from "../components/UserEdit";

const UserRoutes = () => {
  return (
    <Routes>
      <Route element={<UserNav />}>
        <Route index element={<UserList />}></Route>
        <Route path=":userid" element={<UserDetail />}></Route>
        <Route path=":userid/edit" element={<UserEdit />}></Route>
        <Route path="all" element={<AllUser />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Route>
    </Routes>
  );
};

export default UserRoutes;
