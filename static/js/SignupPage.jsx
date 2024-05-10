import React, { useState } from "react"
import { Link } from "react-router-dom";
import signupPostRequest from "./utils/signupPostRequest";
import Header from "./components/header.jsx";
import SubmitBtn from "./components/submitBtn.jsx";
import InputField from "./components/inputField.jsx";
import Form from "./components/form.jsx";

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
                        <span className="text-black">{response.message}{" "}</span>
                        <Link className="text-customBlue hover:underline" to="/">
                            Click here to log in
                        </Link>
                    </>
                );
                setShowResponseMessage("");
            }
    };

    return (
    <>
        <Header>
            <small className="pt-1">Already have an account?&nbsp;
                <Link className="text-customBlue hover:underline" to="/">Log in</Link>
            </small>
        </Header>
        <Form
            inputIdEmail="email" emailInputDescription="Email Address" emailInputType="text" setSignupInfo={setSignupInfo}
            inputIdPassword="password" passwordInputDescription="Password" passwordInputType="password"
            inputIdRepeatPassword="repeat-password" repeatPasswordInputDescription="Repeat password"
            url="" btnEvent={signup} btnText={"Sign up"}
        />
        <main className="flex flex-col items-center mt-6 md:w-96 sm:w-8/12 w-8/12">
            <InputField inputId="email" inputDescription="Email Address" inputType="text" setSignupInfo={setSignupInfo} />
            <InputField inputId="password" inputDescription="Password" inputType="password" setSignupInfo={setSignupInfo} passwordRequirement={passwordRequirement}>
                <div className={passwordRequirementMessage}>Password must be at least 8 characters including a <br /> lowercase letter, an uppercase letter, and a number</div>
            </InputField>
            <InputField inputId="repeat-password" inputDescription="Repeat password" inputType="password" setSignupInfo={setSignupInfo} />
            <div id="error-message" style={{color: "red"}} className={`mt-1 ${showResponseMessage}`}>{responseMessage}</div>
            <SubmitBtn url="" btnEvent={signup} btnText={"Sign up"} />
        </main>
    </>
  )
};