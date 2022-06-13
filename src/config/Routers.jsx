import { Route, Routes } from "react-router-dom";
import Home from '../page/Home'

export default function Routers() {
    return (
        <Routes>
            <Route path='/' element={<Home />}/>
        </Routes>
    )
}