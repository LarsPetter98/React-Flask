import React from "react";
import { Link } from "react-router-dom";
import Header from "./components/header.jsx";
import InputField from "./components/inputField.jsx"
import SubmitBtn from "./components/submitBtn.jsx";

export default function NewPasswordPage() {
  return (
    <>
        <Header />
        <main className="md:w-96 sm:w-8/12 w-8/12 flex flex-col items-center mt-10">
            <div className="flex flex-col items-start ">
                <h2 className="text-2xl">Create new password</h2>
                <p className="mt-3">
                    Enter a new password for you account
                </p>
            </div>
            <InputField inputId="newPassword" inputDescription="New password" inputType="password" mt="mt-10" />
            <InputField inputId="repeatPassword" inputDescription="Repeat password" inputType="password" />
            <SubmitBtn url="" btnEvent="" btnText={"Submit"} />
            <div className="mt-10">Remember your password?&nbsp;
                <Link className="text-customBlue hover:underline" to="/">Back to login</Link>
            </div>
        </main>
    </>
  )
};