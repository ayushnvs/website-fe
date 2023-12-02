import { Outlet } from "react-router-dom"
import Navbar from './../components/navigation/navbar'
import Footer from './../components/navigation/footer'
import useAuth from "../hooks/AuthProvider"

const Layout = () => {
    const { auth, setAuth } = useAuth()

    return (
        <main className="App">
            {  console.log('AUTH', auth)  }
            <Navbar />
            <Outlet />
            <Footer />
        </main>
    )
}

export default Layout