import React from "react";
import { Link } from "react-router-dom";

export default function Navlink (props) {
    return (
        <small className="pt-1">Don't have an account?&nbsp;
            <Link className="text-customBlue hover:underline" to="/signup">{props.linkText}</Link>
        </small>
    )
};