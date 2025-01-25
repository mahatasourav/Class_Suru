import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Layout from "./Layout";
import { Error, Home, Profile } from "../Pages";


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="/dashboard" element={<Profile/>}/>
            <Route path="*" element={<Error/>} />
        </Route>
    )
)

export default router;