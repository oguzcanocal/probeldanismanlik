import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import egitimler from "../assets/egitimler.json"
import periyodik from "../assets/periyodik.json"
import issagligi from   "../assets/is_sagligi.json"
import sgk from "../assets/sgk.json"

function Navbar() {
    const navbarDrawer = useRef();
    useEffect(() => {
        document.body.classList.add('has-navbar-fixed-top')
    },[])

    const toggleMenu = (event) => {
        navbarDrawer.current.classList.toggle('is-active')
        event.currentTarget.classList.toggle('is-active')
    }

    const handleLinkClick = (event) => {
        let dropdowns = document.getElementsByName("dropdown")
        dropdowns.map( d => d.classList.remove("is-active"))
    }

    return (
        <nav className="navbar is-success is-fixed-top " role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <Link className="navbar-item" to="/">
                    <img className="pl-4" src="logo.svg" width="112" height="28" alt="Probel Web" />
                </Link>

                <p role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbar-drawer" onClick={toggleMenu}>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </p>
            </div>

            <div ref={navbarDrawer} id="navbar-drawer" className="navbar-menu">
                <div className="navbar-end mr-6">
                    <div name="dropdown" className="navbar-item has-dropdown is-hoverable">
                        <p className="navbar-link">Eğitimlerimiz</p>
                        <div className="navbar-dropdown">
                            {egitimler.map( subpage=> {
                                return subpage.path == "" ?
                                 <p className="navbar-item">{subpage.title}</p>
                                 : 
                                 <Link onClick={handleLinkClick} key={subpage.path} to={subpage.path} className="navbar-item">{subpage.title}</Link>
                            })}
                        </div>
                    </div>

                    <div name="dropdown" className="navbar-item has-dropdown is-hoverable">
                        <p className="navbar-link">Periyodik Muayene ve Ortam Ölçümü</p>
                        <div className="navbar-dropdown">
                            {periyodik.map( subpage=> {
                                return <Link onClick={handleLinkClick} key={subpage.path} to={subpage.path} className="navbar-item">{subpage.title}</Link>
                            })}
                        </div>
                    </div>

                    <div name="dropdown" className="navbar-item has-dropdown is-hoverable">
                        <p className="navbar-link">İş Sağlığı ve Güvenliği</p>
                        <div className="navbar-dropdown">
                            {issagligi.map( subpage=> {
                                return <Link onClick={handleLinkClick} key={subpage.path} to={subpage.path} className="navbar-item">{subpage.title}</Link>
                            })}
                        </div>
                    </div>
                    <div name="dropdown" className="navbar-item has-dropdown is-hoverable">
                        <p className="navbar-link">SGK İstihdam Teşviki</p>
                        <div className="navbar-dropdown">
                            {sgk.map( subpage=> {
                                return <Link onClick={handleLinkClick} key={subpage.path} to={subpage.path} className="navbar-item">{subpage.title}</Link>
                            })}
                        </div>
                    </div>

                </div>

            </div>
        </nav>
    );
}

export default Navbar;