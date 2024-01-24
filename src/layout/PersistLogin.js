import { Outlet } from "react-router-dom"
import { useState, useEffect } from "react"
import Navbar from './../components/navigation/navbar'
import Footer from './../components/navigation/footer'
import useAuth from "../hooks/AuthProvider"
import axios from "./../api/axios"

const PersistLogin = () => {
    const { auth, setAuth } = useAuth()
    const [ isLoading, setIsLoading ] = useState(true)

    useEffect(() => {
        const verifyToken = async () => {
            console.log("check Auth: ", !!auth.userame)
            if (!auth.username && !auth.token) {
                try {
                    const res = await axios.get(`/refresh`, { withCredentials: true })
                    console.log("User res: ", res)
                    setAuth({
                        token: res.token,
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
                        <p className="loadin">Loading...</p>
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
 
export default PersistLogin;