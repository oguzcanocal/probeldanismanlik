import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function Navbar() {

    const navbarDrawer = useRef();

    useEffect(() => {
        document.body.classList.add('has-navbar-fixed-top')
    },[])
    const toggleMenu = (event) => {
        navbarDrawer.current.classList.toggle('is-active')
        event.currentTarget.classList.toggle('is-active')
    }

    return (
        <nav className="navbar is-danger is-fixed-top " role="navigation" aria-label="main navigation">
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
                        <a className="navbar-link">
                            Hizmetlerimiz
                        </a>
                        <hr className="navbar-divider"/>
                        <div className="navbar-dropdown">
                            <Link to="isg-proje-yonetim-danismanligi" className="navbar-item">
                                İSG Proje Yönetim Danışmanlığı
                            </Link>
                            <a className="navbar-item">
                                İş Güvenliği Uzmanı Hizmeti
                            </a>
                            <a className="navbar-item">
                                İş Yeri Hekimi Hizmeti
                            </a>
                            <a className="navbar-item">
                                Diğer Sağlık Personeli Hizmeti
                            </a>
                            <a className="navbar-item">
                                3. Göz Denetim
                            </a>
                            <a className="navbar-item">
                                Periyodik Kontroller ve Ortam Ölçümü
                            </a>
                            <a className="navbar-item">
                                Tahliye Projesi
                            </a>
                            <a className="navbar-item">
                                Yangın Danışmanlığı
                            </a>
                            <a className="navbar-item">
                                Çevre Danışmanlığı
                            </a>
                            <a className="navbar-item">
                                Sivil Savuna Planı Hizmeti
                            </a>
                        </div>
                    </div>

                    <a className="navbar-item">
                        Biz Kimiz?
                    </a>
                    <a className="navbar-item">
                        İletişim
                    </a>

                </div>

            </div>
        </nav>
    );
}

export default Navbar;