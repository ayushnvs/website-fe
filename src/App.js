import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './components/auth/login'
import RegistrationPage from './components/auth/registration'
import Home from './components/home/home'
import Profile from './components/profile/profile'
import Layout from './layout/layout'
import RequireAuth from './hooks/RequireAuth'

const App = () => {

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
