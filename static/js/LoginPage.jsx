import React, { useState } from "react";
import loginPostRequest from "./utils/loginPostRequest.js";
import Header from "./components/header.jsx";
import Navlink from "./components/navlink.jsx";
import Form from "./components/form.jsx";

export default function LoginPage() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function login () {
        const response = await loginPostRequest(email, password);
    };

    function setLoginInfo (event) {
        const userInput = event.target.value;
        if(event.target.id == "email") setEmail(userInput);
        else if(event.target.id == "password") setPassword(userInput);
    };

    return (
        <>
        <Header>
            <Navlink linkText="Sign up"></Navlink>
        </Header>
        <Form
            inputIdEmail="email" emailInputDescription="Email Address" emailInputType="text" setLoginInfo={setLoginInfo}
            inputIdPassword="password" passwordInputDescription="Password" passwordInputType="password"
            url="" btnEvent={login} btnText={"Log in"}
        />
        <footer className="flex flex-col justify-center items-center mt-12 md:w-96 sm:w-8/12 w-8/12">
            <button className="bg-customBlue2 text-white w-full rounded-md py-2 text-sm">Sign in with Google</button>
            <button className="bg-customGrey text-white w-full rounded-md py-2 text-sm mt-2">Log in in with SSO</button>
        </footer>
    </>
  )
};