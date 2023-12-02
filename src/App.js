import { useEffect, useRef } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './components/login/login'
import RegistrationPage from './components/register/registration'
import Home from './components/home/home'
import Profile from './components/profile/profile'
import Layout from './layout/layout'
import useAuth from './hooks/AuthProvider'
import RequireAuth from './hooks/RequireAuth'
import axios from "axios"

const useOptimizedComponentWillMount = callback => {
    const mounted = useRef(false)
    if (!mounted.current) callback()

    useEffect(() => {
        mounted.current = true
    }, []);
};

const App = () => {
    const { setAuth } = useAuth()


    useOptimizedComponentWillMount(() => {
        const username = localStorage.getItem('username');
        const token = localStorage.getItem('token')

        if (!!username && !!token) {
            try {
                (async () => {
                    const res = await axios.get(`http://localhost:8000/account/${username}`)
                    setAuth({
                        ...res.data,
                        token,
                        isLoggedIn: true
                    })
                })()
            } catch (err) {
                // Handle errors
            }
        }

    }, [])

    return (
        <div className='App'>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Layout />}>
                        {/* Private Routes */}
                        <Route element={<RequireAuth />}>
                            <Route path="/" element={<Home />} />
                            <Route path='profile' element={<Profile />} />
                        </Route>

                        {/* Public Routes */}
                        <Route path='register' element={<RegistrationPage />} />
                        <Route path='login' element={<LoginPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
