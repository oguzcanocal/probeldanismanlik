import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function Navbar({subpages}) {
    const navbarDrawer = useRef();
    useEffect(() => {
        document.body.classList.add('has-navbar-fixed-top')
    },[])
    const toggleMenu = (event) => {
        navbarDrawer.current.classList.toggle('is-active')
        event.currentTarget.classList.toggle('is-active')
    }

    return (
        <nav className="navbar is-success is-fixed-top " role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="https://probeldanismanlik.com">
                    <img className="pl-4" src="logo.svg" width="112" height="28" alt="Probel Web" />
                </a>

                <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbar-drawer" onClick={toggleMenu}>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div ref={navbarDrawer} id="navbar-drawer" className="navbar-menu">
                <div className="navbar-end mr-6">
                    <div className="navbar-item has-dropdown is-hoverable">
                        <p className="navbar-link">
                            Hizmetlerimiz
                        </p>
                        <hr className="navbar-divider"/>
                        <div className="navbar-dropdown">
                            {subpages.map(subpage=> {
                                return <Link to={subpage.path} className="navbar-item">{subpage.title}</Link>
                            })}
                        </div>
                    </div>

                    <Link className="navbar-item">
                        Biz Kimiz?
                    </Link>
                    <Link className="navbar-item">
                        İletişim
                    </Link>

                </div>

            </div>
        </nav>
    );
}

export default Navbar;