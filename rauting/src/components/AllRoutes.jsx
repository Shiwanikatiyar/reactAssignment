import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Users from "../pages/Users";
import Login from "../pages/Login";
import UserDetails from "../pages/UserDetails";
import Course from "../pages/course";
import Learn from "../pages/learn";
import Fees from "../pages/fees";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/users" element={<Users />} />
      <Route path="/login" element={<Login />} />
      <Route path="/users/:user_id" element={<UserDetails />} />
      <Route path="/course" element={<Course />} />
      <Route path="/learn" element={<Learn/>} />
      <Route path="/fees" element={<Fees />} />
    </Routes>
  );
}
