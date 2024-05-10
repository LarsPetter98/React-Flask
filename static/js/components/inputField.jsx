import React from "react"

export default function InputField (props) {
    return (
        <div className={`w-full flex flex-col items-start mb-2 ${props.mt}`}>
            <label htmlFor={props.inputId} className="ml-1">{props.inputDescription}</label>
            <div className="w-full">
                <input id={props.inputId} onChange={props.setSignupInfo} onFocus={props.passwordRequirement} onBlur={props.passwordRequirement} className="w-full h-12 border-2 rounded-md mt-1 outline-blue-300 pl-2" type={props.inputType} aria-label={props.inputDescription} />
            </div>
            {props.children}
        </div>
    )
};