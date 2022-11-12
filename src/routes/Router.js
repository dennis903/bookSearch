import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import KakaoLoginPage from "./KakaoLoginPage";
import MainPage from "./MainPage";
import KakaoRedirectHandler from "../components/KakaoRedirectHandler";
import Profile from "../components/Profile";
import BookSearchPage from "./BookSearchPage";
import Header from "../components/Header";

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/login" element={<KakaoLoginPage />}></Route>
        <Route
          path="/oauth/callback/kakao"
          element={<KakaoRedirectHandler />}
        />
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/books" element={<BookSearchPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
