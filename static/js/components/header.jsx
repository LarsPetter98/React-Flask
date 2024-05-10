import React from "react"
import Logo from "../../assets/logo.png"

export default function Header (props) {
    return (
        <header className="flex flex-col items-center mt-16">
            <a href=""><img className="w-52" src={Logo} alt="Logo" /></a>
            {props.children}
        </header>
    )
};