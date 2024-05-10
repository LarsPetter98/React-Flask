import React from "react";
import SubmitBtn from "./submitBtn.jsx";
import InputField from "./inputField.jsx";
import { Link } from "react-router-dom";

export default function Form (props) {
    return (
        <form className="md:w-96 sm:w-8/12 w-8/12 flex flex-col items-center mt-6">
                {Object.keys(props).map((key, index) => {
                    if (typeof props[key] !== "function") return <div key={index}>{props[key]}</div>;
                    return null;
                })}
            <InputField inputId={props.inputIdEmail} inputDescription={props.emailInputDescription} inputType={props.emailInputType} setSignupInfo={props.setLoginInfo} />
            <InputField inputId={props.inputIdPassword} inputDescription={props.passwordInputDescription} inputType={props.passwordInputType} setSignupInfo={props.setLoginInfo}>
                <small className="mt-2 ml-1">
                    <Link className="text-customBlue hover:underline" to="/forgotPassword">Forgot password?</Link>
                </small>
                <div className="flex items-center mt-3">
                    <input className="ml-1 mr-2" style={{marginTop: "1px"}} type="checkbox" />
                    <label>Remember me</label>
                </div>
            </InputField>
            <SubmitBtn url={props.url} btnEvent={props.btnEvent} btnText={props.btnText} />
            <hr className="w-full h-1 mt-12" />
        </form>
    )
};