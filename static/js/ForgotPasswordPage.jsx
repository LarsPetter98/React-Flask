import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png"

export default function ForgotPasswordPage() {
  return (
    <>
        <header className="flex flex-col items-center mt-16">
            <a href=""><img className="w-52" src={Logo} alt="Logo" /></a>
        </header>
        <main className="md:w-96 sm:w-8/12 w-8/12 flex flex-col items-center mt-10">
            <div className="flex flex-col items-start ">
                <h2 className="text-2xl">Forgot you password?</h2>
                <p className="mt-3">
                    Enter your email address to reset your password.
                    You may need to check your spam folder or unblock
                    no-reply@hobspot.com.
                </p>
            </div>
            <div className="w-full flex flex-col items-start mt-10">
                <label htmlFor="email" className="ml-1">Email address</label>
                <div className="w-full">
                    <input id="email" className="w-full h-12 border-2 rounded-md mt-1 outline-blue-300 pl-2" type="text" aria-label="Email Adress" />
                </div>
            </div>
            <button className="w-full bg-green-400 text-white rounded-md py-2 px-16 mt-6 text-lg">Submit</button>
            <div className="w-full mt-10">Remember your password?&nbsp;
                <Link className="w-full text-customBlue hover:underline" to="/">Back to login</Link>
            </div>
        </main>
    </>
  )
};