import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import { Link, NavLink, Route, Routes, useRoutes } from "react-router-dom";
import UserList from "./components/UserList";
import UserDetail from "./components/UserDetail";
import AllUser from "./components/AllUser";
import PageNotFound from "./PageNotFound";
import UserNav from "./components/UserNav";
import CommonLayout from "./components/CommonLayout";
import MapComponent from "./components/MapComponent";
import UserRoutes from "./routes/UserRoutes";

const App = () => {
  // const routes = useRoutes([
  //   { path: "/", element: <Home /> },
  //   { path: "/about-us", element: <About /> },
  //   { path: "/contact", element: <Contact /> },
  //   {
  //     path: "/users",
  //     children: [
  //       { index: true, element: <UserList /> },
  //       {
  //         path: ":userid",
  //         element: <UserDetail />,
  //       },
  //       {
  //         path: "all",
  //         element: <AllUser />,
  //       },
  //     ],
  //   },
  // ]);

  return (
    <>
      <nav>
        <ul>
          <li>
            {" "}
            <NavLink
              to="/"
              style={({ isActive }) => ({ color: isActive ? "red" : "black" })}
            >
              Home
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink
              to="/about-us"
              style={({ isActive }) => ({ color: isActive ? "red" : "black" })}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              style={({ isActive }) => ({ color: isActive ? "red" : "black" })}
            >
              Contact
            </NavLink>
          </li>
          <li>
            {" "}
            <Link to="/users" reloadDocument={true}>
              User List
            </Link>
          </li>
          <li>
            <Link to="/users/10">User Detail</Link>
          </li>
          <li>
            <Link to="/users/all">All User</Link>
          </li>
          <li>
            <Link to="/something">Not found</Link>
          </li>
        </ul>
      </nav>

      {/* {routes} */}

      <Routes location="/contact">
        <Route path="/contact" element={<MapComponent />}></Route>
      </Routes>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route element={<CommonLayout />}>
          <Route path="/about-us" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Route>
        <Route path="/users/*" element={<UserRoutes />}></Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
      {/* <Home />
      <About />
      <Contact /> */}
    </>
  );
};

export default App;
