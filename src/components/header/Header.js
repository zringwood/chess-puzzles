import {  NavLink } from "react-router-dom"
import "./Header.scss"
export default function Header() {
    return (
        <>
            <nav className = "navbar">
                <ul className = "navbar__list">
                    <li >
                    <NavLink className="navbar__link" to ="/">Puzzles</NavLink>
                    </li>
                    <li >
                    <NavLink className="navbar__link" to ="/rules">Rules</NavLink>
                    </li>
                </ul>
            </nav>
        </>
    )
}
