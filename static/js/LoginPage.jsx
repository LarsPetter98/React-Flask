import React, { useState } from "react";
import { Link } from "react-router-dom";
import loginPostRequest from "./utils/loginPostRequest.js";
import Logo from "../assets/logo.png"

export default function LoginPage() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function login () {
        const response = await loginPostRequest(email, password);
    };

    function setSignupInfo (event) {
        const userInput = event.target.value;
        if(event.target.id == "email") setEmail(userInput);
        else if(event.target.id == "password") setPassword(userInput);
    };

    return (
        <>
        <header className="flex flex-col items-center mt-16">
            <a href=""><img className="w-52" src={Logo} alt="Logo" /></a>
            <small className="pt-1">Don't have an account?&nbsp;
                <Link className="text-customBlue hover:underline" to="/signup">Sign up</Link>
            </small>
        </header>
        <main className="md:w-96 sm:w-8/12 w-8/12 flex flex-col items-center mt-6">
            <div className="w-full flex flex-col items-start">
                <label htmlFor="email" className="ml-1">Email address</label>
                <div className="w-full">
                    <input id="email" onChange={setSignupInfo} className="w-full h-12 border-2 rounded-md mt-1 outline-blue-300 pl-2" type="text" aria-label="Email Adress" />
                </div>
            </div>
            <div className="w-full flex flex-col items-start mt-4">
                <label htmlFor="password" className="ml-1">Password</label>
                <div className="w-full">
                    <input id="password" onChange={setSignupInfo} className="w-full h-12 border-2 rounded-md mt-1 outline-blue-300 pl-2" type="password" aria-label="Password" />
                </div>
                <small className="mt-2 ml-1">
                    <Link className="text-customBlue hover:underline" to="/forgotPassword">Forgot password?</Link>
                </small>
                <div className="flex items-center mt-3">
                    <input className="ml-1 mr-2" style={{marginTop: "1px"}} type="checkbox" />
                    <label>Remember me</label>
                </div>
            </div>
            <Link className="w-full">
                <button onClick={login} className="w-full bg-green-400 text-white rounded-md py-2 px-16 mt-5 text-lg">Log in</button>
            </Link>
            <hr className="w-full h-1 mt-12" />
        </main>
        <footer className="flex flex-col justify-center items-center mt-12 md:w-96 sm:w-8/12 w-8/12">
            <button className="bg-customBlue2 text-white w-full rounded-md py-2 text-sm">Sign in with Google</button>
            <button className="bg-customGrey text-white w-full rounded-md py-2 text-sm mt-2">Log in in with SSO</button>
        </footer>
    </>
  )
};