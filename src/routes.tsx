import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import { useContext } from "react";

import { UserContext } from "./contexts/UserContext";

import Home from "./pages/Home/Home";
import Header from "./components/layout/Header/Header";
import NewUser from "./pages/NewUser/NewUser";
import EditUser from "./pages/EditUser/EditUser";

export const AppRoutes = () => {
  const { users, setUsers } = useContext(UserContext);

  return (
    <Router>
      <Link to="/" style={{ textDecoration: "none" }}>
        {" "}
        <Header />{" "}
      </Link>

      <Routes>
        <Route path="/" element={<Home users={users} setUsers={setUsers} />} />

        <Route
          path="/newuser"
          element={<NewUser users={users} setUsers={setUsers} />}
        />

        <Route
          path="/edituser/:id"
          element={<EditUser users={users} setUsers={setUsers} />}
        />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
