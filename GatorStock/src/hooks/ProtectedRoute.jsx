import { Navigate, Outlet } from "react-router-dom"

export const ProtectedRoute = ({ user, redirectTo, children }) => {
    //Si user es null significa que no hay datos, redirecciona a otra ruta (redirectTo)
    if (user == null) return <Navigate replace to={redirectTo} />
    //De lo contrario, muestra todos los children
    return children ? children : <Outlet />
}