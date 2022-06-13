import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routers from "./config/Routers";

export default function App() {
    return (
        <BrowserRouter>
            <Routers />
        </BrowserRouter>
    )
}