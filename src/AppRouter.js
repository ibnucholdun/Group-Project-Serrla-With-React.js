// Node Module
import React from "react";
import { Route, Routes } from "react-router-dom";

// Pages
import {
  LandingPage,
  About,
  ContactUs,
  DetailModul,
  Home,
  Modul,
  SignIn,
  SignUp,
} from "./Pages";

// Layout
import { AppLayout, MainLayout } from "./layout";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<LandingPage />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<ContactUs />} />
      </Route>
      <Route path="/" element={<AppLayout />}>
        <Route path="/home" element={<Home />} />
        <Route path="modul">
          <Route path="" element={<Modul />} />
          <Route path="detail-modul/:id" element={<DetailModul />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRouter;
