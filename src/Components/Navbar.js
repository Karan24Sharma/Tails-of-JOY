import { NavLink } from 'react-router-dom'

export const Navbar = () => {
    return (
        <>
            <header>
                <nav>
                    <div className="nav-bar">
                        <span className="logo"><NavLink to="/">Tails Of Joy</NavLink></span>

                        <ul className="nav-links">
                            <li><NavLink to="/" >Home</NavLink></li>
                            <li><NavLink to="/adopt">Adopt</NavLink></li>
                            <li><NavLink to="/buy">Buy</NavLink></li>
                            <li><NavLink to="/lost">Lost</NavLink></li>
                            <li><NavLink to="/blogs">Blogs</NavLink></li>
                            <li><NavLink to="/report">Report</NavLink></li>
                            <li><NavLink to="/donate">Donate Now</NavLink></li>
                            <li><NavLink to="/about">About</NavLink></li>
                        </ul>

                        <div className="log-in">
                            <ul className="nav-log-in">
                                <li><NavLink to="/signup">Log in</NavLink></li>
                            </ul>
                        </div>

                    </div>
                </nav>
            </header>
        </>
    )
}
