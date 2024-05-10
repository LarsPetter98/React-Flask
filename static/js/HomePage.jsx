import React from "react"
import { Link } from "react-router-dom"
import Header from "./components/header.jsx";

export default function HomePage () {
    return (
        <>
            <Header />
            <h1>Home</h1>
            <br />
            <Link to="/"><button>Log out</button></Link>
        </>
    )
};