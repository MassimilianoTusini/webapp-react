import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Loader from "../components/Loader";
import { useGlobal } from "../contexts/GlobalContext";

export default function MainLayout() {

    const { isLoading } = useGlobal();

    return (
        <>
            <Header />
            <Navbar />
            <main className="container my-4">
                <Outlet />
            </main>
            {isLoading && <Loader />}
        </>
    )
}