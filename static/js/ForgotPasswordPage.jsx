import React from "react";
import { Link } from "react-router-dom";
import Header from "./components/header.jsx"
import InputField from "./components/inputField.jsx";
import SubmitBtn from "./components/submitBtn.jsx";

export default function ForgotPasswordPage() {
  return (
    <>
        <Header />
        <main className="md:w-96 sm:w-8/12 w-8/12 flex flex-col items-center mt-10">
            <div className="flex flex-col items-start ">
                <h2 className="text-2xl">Forgot you password?</h2>
                <p className="mt-3">
                    Enter your email address to reset your password.
                    You may need to check your spam folder or unblock
                    no-reply@hobspot.com.
                </p>
            </div>
            <InputField inputId="email" inputDescription="Email Address" inputType="text" mt="mt-10" />
            <SubmitBtn url="" btnEvent="" btnText={"Submit"} />
            <div className="w-full mt-10">Remember your password?&nbsp;
                <Link className="w-full text-customBlue hover:underline" to="/">Back to login</Link>
            </div>
        </main>
    </>
  )
};