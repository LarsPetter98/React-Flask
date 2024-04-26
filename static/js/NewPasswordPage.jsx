import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png"

export default function NewPasswordPage() {
  return (
    <>
        <header className="flex flex-col items-center mt-16">
            <a href=""><img className="w-52" src={Logo} alt="Logo" /></a>
        </header>
        <main className="md:w-96 sm:w-8/12 w-8/12 flex flex-col items-center mt-10">
            <div className="flex flex-col items-start ">
                <h2 className="text-2xl">Create new password</h2>
                <p className="mt-3">
                    Enter a new password for you account
                </p>
            </div>
            <div className="w-full flex flex-col items-start mt-10">
                <label htmlFor="newPassword" className="ml-1">New password</label>
                <div className="w-full">
                    <input id="newPassword" className="w-full h-12 border-2 rounded-md mt-1 outline-blue-300 pl-2" type="password" aria-label="New password" />
                </div>
            </div>
            <div className="w-full flex flex-col items-start mt-3">
                <label htmlFor="repeatPassword" className="ml-1">Repeat password</label>
                <div className="w-full">
                    <input id="repeatPassword" className="w-full h-12 border-2 rounded-md mt-1 outline-blue-300 pl-2" type="password" aria-label="Repeat password" />
                </div>
            </div>
            <button className="w-full bg-green-400 text-white rounded-md py-2 px-16 mt-6 text-lg">Submit</button>
            <div className="mt-10">Remember your password?&nbsp;
                <Link className="text-customBlue hover:underline" to="/">Back to login</Link>
            </div>
        </main>
    </>
  )
};