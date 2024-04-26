import React, { useState } from "react"
import { Link } from "react-router-dom";
import signupPostRequest from "./utils/signupPostRequest";
import Logo from "../assets/logo.png"


export default function SignupPage() {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");

    const [responseMessage, setResponseMessage] = useState("Please provide both email and password");
    const [showResponseMessage, setShowResponseMessage] = useState("hidden");
    const [passwordRequirementMessage, setPasswordRequirement] = useState("hidden");

    function passwordRequirement () {
        if(passwordRequirementMessage === "hidden") setPasswordRequirement("text-gray-500")
        else setPasswordRequirement("hidden")
    };

    function setSignupInfo (event) {
        const userInput = event.target.value;
        if(event.target.id == "email") setEmail(userInput);
        else if(event.target.id == "password") setPassword(userInput);
        else if(event.target.id == "repeat-password") setRepeatPassword(userInput);
    };

    async function signup () {
            const response = await signupPostRequest(email, password, repeatPassword);
            if(typeof response === "string") {
                setResponseMessage(response);
                setShowResponseMessage("");
            }
            else {
                setResponseMessage(
                    <>
                        {response.message}{" "}
                        <Link className="text-customBlue hover:underline" to="/">
                            Click here to log in
                        </Link>
                    </>
                );
                setShowResponseMessage("text-black");
            }
    };

    return (
    <>
        <header className="flex flex-col items-center mt-16">
            <a href=""><img className="w-52" src={Logo} alt="Logo" /></a>
            <small className="pt-1">Already have an account?&nbsp;
                <Link className="text-customBlue hover:underline" to="/">Log in</Link>
            </small>
        </header>
        <main className="flex flex-col items-center mt-6 md:w-96 sm:w-8/12 w-8/12">
            <div className="w-full flex flex-col items-start">
                <label htmlFor="email" className="ml-1">Email address</label>
                <div className="w-full">
                    <input id="email" onChange={setSignupInfo} className="w-full h-12 border-2 rounded-md mt-1 outline-blue-300 pl-2" type="text" aria-label="Email Address" />
                </div>
            </div>
            <div className="w-full flex flex-col items-start mt-4">
                <label htmlFor="password" className="ml-1">Password</label>
                <div className="w-full">
                    <input id="password" onFocus={passwordRequirement} onBlur={passwordRequirement} onChange={setSignupInfo} className="w-full h-12 border-2 rounded-md mt-1 outline-blue-300 pl-2" type="password" aria-label="Password" />
                </div>
                <div className={passwordRequirementMessage}>Password must be at least 8 characters including a <br /> lowercase letter, an uppercase letter, and a number</div>
            </div>
            <div className="w-full flex flex-col items-start mt-4 mb-2">
                <label htmlFor="repeat-password" className="ml-1">Repeat password</label>
                <div className="w-full">
                    <input id="repeat-password" onChange={setSignupInfo} className="w-full h-12 border-2 rounded-md mt-1 outline-blue-300 pl-2" type="password" aria-label="Repeat Password" />
                </div>
            </div>
            <div id="error-message" className={`text-red-400 mt-1 ${showResponseMessage}`}>{responseMessage}</div>
            <Link className="w-full">
                <button onClick={signup} className="w-full bg-green-400 text-white rounded-md py-2 px-16 mt-10 text-lg">Sign up</button>
            </Link>
        </main>
    </>
  )
};