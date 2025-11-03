import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Header from "../components/Header";

export default function MainLayout() {
    return (
        <>
            <Header/>
            <Navbar />
            <main className="container">
                <Outlet/>
            </main>
        </>
    )
}