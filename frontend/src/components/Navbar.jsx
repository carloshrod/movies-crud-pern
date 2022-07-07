import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <header className="navbar fixed-top">
            <Link to="/" className="nav-links">
                <span className="logo fw-bolder">
                    ROYAL FILMS
                    <i className="fa-solid fa-film ps-2" />
                </span>
            </Link>
            <Link to="/create" className="nav-links ms-auto">
                <span className="btn-link">
                    <i className="fa-solid fa-plus me-2" />
                    Crear Película
                </span>
            </Link>
        </header>
    )
}

export default Navbar