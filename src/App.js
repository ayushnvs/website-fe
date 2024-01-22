import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './components/auth/login'
import RegistrationPage from './components/auth/registration'
import Home from './components/home/home'
import Profile from './components/profile/profile'
import Layout from './layout/layout'
import RequireAuth from './hooks/RequireAuth'
import PersistLogin from './layout/PersistLogin'

const App = () => {

    return (
        <div className='App'>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Layout />}>
                        {/* Public Routes */}
                        <Route path='register' element={<RegistrationPage />} />
                        <Route path='login' element={<LoginPage />} />

                        {/* Private Routes */}
                        <Route element={<PersistLogin />}>
                            <Route element={<RequireAuth />}>
                                <Route path="/" element={<Home />} />
                                <Route path='profile' element={<Profile />} />
                            </Route>
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
