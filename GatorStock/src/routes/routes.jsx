import { Routes, Route } from 'react-router-dom'
import { Home, Login, ProtectedRoute } from '../index'
import { UserAuth } from "../context/AuthContext"

export function MyRoutes() {
    const { user } = UserAuth();

    return (
        <Routes>
            <Route path="/login" element={<Login />} />

            {/* Esto porteje el Home */}
            <Route element={<ProtectedRoute
                user={user}
                redirectTo="/login" />}
            >
                <Route path="/" element={<Home />} />
            </Route>
        </Routes>

    )
}