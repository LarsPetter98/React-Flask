import React from "react"
import { Link } from "react-router-dom";

export default function SubmitBtn (props) {
    return (
        <Link to={props.url} className="w-full">
            <button onClick={props.btnEvent} className="w-full bg-green-400 text-white rounded-md py-2 px-16 mt-5 text-lg">{props.btnText}</button>
        </Link>
    )
};