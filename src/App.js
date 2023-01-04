import Login from "./pages/Login";
import Header from "./components/header";
import "./styles/global.styles.scss";
import Footer from "./components/footer";
import {
  BrowserRouter,
  Route,
  Router,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactUs from "./pages/contactUs";
import AboutUs from "./pages/aboutUs";
import Signup from "./pages/signup";
import Home from "./pages/home";

// function App() {
//   return (
//     <div className="App">
//       <Header/>
//         <Login/>
//         <ContactUs/>
//         <AboutUs/>
//         <Signup/>

//     </div>
//   );
// }

const router = createBrowserRouter([
  <Header/>,
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/contactus",
    element: <ContactUs />,
  },
  {
    path: "/aboutus",
    element: <AboutUs />,
  },
  {
    path: "/signup",
    element: <Signup/>,
  },
  {
  path: "/",
  element:<Home/>,
  }

]);

// function App() {
//   <Router>
//     <Routes>
//       <Route path="/" element={<Login />} />
//       <Route path="/signup" element={<Signup />} />
//               {/* <Route path="/forgot-password" element={<ForgotPassword />} />
//               <Route path="/reset-password" element={<ResetPassword />} />
//               <Route path="/otp" element={<OTP />} /> */}
//     </Routes>
//   </Router>;
// }

export default router;
