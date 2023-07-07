import {  Link } from "react-router-dom"
export default function Header() {


    return (
        <>
            <nav>
                <ul>
                    <li>
                       <Link to ="/">Puzzles</Link>
                    </li>
                    <li>
                    <Link to ="/rules">Rules</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}
