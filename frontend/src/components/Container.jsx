import React from 'react'
import { useLocation } from "react-router-dom";

const Container = ({ children }) => {
    const location = useLocation()
    const path = location.pathname
    const title = path === "/" ? "Listado de Películas" :
        path === "/create" ? "Crear Película" : "Editar Película"

    return (
        <main className="container min-vh-100">
            <div className="text-center mb-4">
                <h1>{title}</h1>
            </div>
            <div className="card row">
                <div className="card-body col-lg-12">
                    {children}
                </div>
            </div>
        </main>
    )
}

export default Container