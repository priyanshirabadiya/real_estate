import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import EnhancedErrorBoundary from "./EnhancedErrorBoundary";
import Home from "./pages/Home";
import ProductDetail from "./pages/Productdetail";
import CategoryDetail from "../src/pages/CategoryDetail";
import Agentsprofile from "../src/pages/Agentsprofile";
import About from "../src/pages/About";
import ForRent from "./pages/ForRent";
import Ouragents from "./pages/Ouragents";
import Cart from "../src/pages/Cart";
import Wish from "./pages/Wish";
import PreviewPage from "./pages/PreviewPage";
import Contact from "../src/pages/Contact";
import Blog from "../src/pages/Blog";
import DuplicateError from "../src/components/blog/BlogDetails/commentpart/DuplicateError";
import BlogDetailsPage from "../src/pages/BlogDetailsPage";
import LoginPage from "../src/components/login_and_signup/LoginPage";
import SignupPage from "../src/components/login_and_signup/SignupPage";
import AdminLayout from "./components/adminpanel/AdminLayout";
import Allagentpage from "./components/adminpanel/agents/Allagentpage";
import Addagent from "./components/adminpanel/agents/Addagent";
import Editagent from "./components/adminpanel/agents/Editagent";
import Adminrent from "./components/adminpanel/for rent admin/Adminrent";
import AdminDashboard from "./components/adminpanel/dashboard/AdminDashboard ";
import Userinfo from "./components/adminpanel/users/Userinfo";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <EnhancedErrorBoundary name="Home Page">
              <Home />
            </EnhancedErrorBoundary>
          }
        />
        <Route
          path="/product"
          element={
            <EnhancedErrorBoundary name="Product Detail Page">
              <ProductDetail />
            </EnhancedErrorBoundary>
          }
        />
        <Route
          path="/category"
          element={
            <EnhancedErrorBoundary name="Category Detail Page">
              <CategoryDetail />
            </EnhancedErrorBoundary>
          }
        />
        <Route
          path="/agents"
          element={
            <EnhancedErrorBoundary name="Agents Profile Page">
              <Agentsprofile />
            </EnhancedErrorBoundary>
          }
        />
        <Route
          path="/about"
          element={
            <EnhancedErrorBoundary name="about Page">
              <About />
            </EnhancedErrorBoundary>
          }
        />
        <Route
          path="/forrent"
          element={
            <EnhancedErrorBoundary name="For Rent Page">
              <ForRent />
            </EnhancedErrorBoundary>
          }
        />
        <Route
          path="/ouragents"
          element={
            <EnhancedErrorBoundary name="our agents page">
              <Ouragents />
            </EnhancedErrorBoundary>
          }
        />
        <Route
          path="/addtocart"
          element={
            <EnhancedErrorBoundary name="cart page">
              <Cart />
            </EnhancedErrorBoundary>
          }
        />
        <Route
          path="/wishlist"
          element={
            <EnhancedErrorBoundary name="wishlist page">
              <Wish />
            </EnhancedErrorBoundary>
          }
        />
        <Route
          path="/previewpage"
          element={
            <EnhancedErrorBoundary name="preview page">
              <PreviewPage />
            </EnhancedErrorBoundary>
          }
        />
        <Route
          path="/contact"
          element={
            <EnhancedErrorBoundary name="contact page">
              <Contact />
            </EnhancedErrorBoundary>
          }
        />
        <Route
          path="/BlogPage"
          element={
            <EnhancedErrorBoundary name="Blog Page">
              <Blog />
            </EnhancedErrorBoundary>
          }
        />
        <Route
          path="/blog/:id"
          element={
            <EnhancedErrorBoundary name="blog Detail Page">
              <BlogDetailsPage />
            </EnhancedErrorBoundary>
          }
        />
        <Route
          path="/commentpart/duplicate-error"
          element={
            <EnhancedErrorBoundary name="Duplicate Error Page">
              <DuplicateError />
            </EnhancedErrorBoundary>
          }
        />
        <Route
          path="/signupPage"
          element={
            <EnhancedErrorBoundary name="signup Page">
              <SignupPage />
            </EnhancedErrorBoundary>
          }
        />

        <Route
          path="/LoginPage"
          element={
            <EnhancedErrorBoundary name="login Page">
              <LoginPage />
            </EnhancedErrorBoundary>
          }
        />

        {/* ================= Admin Routes ================= */}
        <Route
          path="/admin"
          element={
            <EnhancedErrorBoundary name="Admin Page">
              {" "}
              <AdminLayout />{" "}
            </EnhancedErrorBoundary>
          }
        >
          <Route
            path="agent"
            element={
              <EnhancedErrorBoundary name="All Agents Page">
                {" "}
                <Allagentpage />{" "}
              </EnhancedErrorBoundary>
            }
          />
          <Route
            path="addagent"
            element={
              <EnhancedErrorBoundary name="All Agents Page">
                {" "}
                <Addagent />{" "}
              </EnhancedErrorBoundary>
            }
          />
          <Route
            path="editagent/:id"
            element={
              <EnhancedErrorBoundary name="All Agents Page">
                {" "}
                <Editagent />{" "}
              </EnhancedErrorBoundary>
            }
          />
          <Route
            path="adminrent"
            element={
              <EnhancedErrorBoundary name="All Agents Page">
                {" "}
                <Adminrent />{" "}
              </EnhancedErrorBoundary>
            }
          />
          <Route
            path="dashboard"
            element={
              <EnhancedErrorBoundary name="Admin Dashboard Page">
                {" "}
                <AdminDashboard />{" "}
              </EnhancedErrorBoundary>
            }
          />
          <Route
            path="user"
            element={
              <EnhancedErrorBoundary name="All Agents Page">
                {" "}
                <Userinfo />{" "}
              </EnhancedErrorBoundary>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
