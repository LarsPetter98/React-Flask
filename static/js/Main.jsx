import React from "react";
import ReactDOM from "react-dom/client";
import LoginPage from "./LoginPage.jsx";
import SignupPage from "./SignupPage.jsx";
import ForgotPasswordPage from "./ForgotPasswordPage.jsx";
import NewPasswordPage from "./NewPasswordPage.jsx"
import HomePage from "./HomePage.jsx";

import {BrowserRouter, Routes, Route} from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/forgotPassword" element={<ForgotPasswordPage />} />
                <Route path="/newPassword" element={<NewPasswordPage />} />
                <Route path="/home" element={<HomePage />} />
            </Routes>
        </BrowserRouter>
);