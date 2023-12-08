import { Outlet } from "react-router-dom"
import { useState, useEffect } from "react"
import Navbar from './../components/navigation/navbar'
import Footer from './../components/navigation/footer'
import useAuth from "../hooks/AuthProvider"
import axios from "axios"

const Layout = () => {
    const { auth, setAuth } = useAuth()
    const [ isLoading, setIsLoading ] = useState(true)

    useEffect(() => {
        const verifyToken = async () => {
            const username = localStorage.getItem('username');
            const token = localStorage.getItem('token')
            if (!!username && !!token) {
                try {
                    const res = await axios.get(`http://localhost:8000/user/${username}`)
                    setAuth({
                        ...res.data,
                        token,
                        isLoggedIn: true
                    })
                } catch (err) {
                    console.log(err)
                }
                finally {
                    setIsLoading(false)
                }
            } else {
                setIsLoading(false)
            }
        }

        !auth.token ? verifyToken() : setIsLoading(false)
    }, [])

    return (
        <main className="App">
            {
                isLoading
                    ? <>
                        <p className="loadin">Loadin...</p>
                    </>
                    : <>
                        <Navbar />
                        <Outlet />
                        <Footer />
                    </>
            }
        </main>
    )
}

export default Layout