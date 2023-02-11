
function Header() {
    return (
        <>
            <section className="section hero is-halfheight header">
                <div className="hero-body">
                    <div className="container">
                        <div className="columns is-vcentered">
                       
                            <div className="column">
                                <div style={{maxWidth: "400px", margin: "auto auto"}}>
                                    <p className="title has-text-white has-text-centered">Güvenli Yarınlara</p>
                                    <p className="subtitle has-text-white has-text-centered">Hayatı kolaylaştıran ve geliştiren projeler tasarlarken, inovatif bir proje yönetimini sağlamak için, Biz buradayız!</p>

                                    <div className="buttons is-centered mt-6">
                                        
                                        <a className="button is-light is-medium is-rounded is-outlined has-text-weight-bold px-6">Bize Ulaşın</a>
                                    </div>
                                
                                </div>
                            </div>

                            <div className="column">
                      
                                <img className="pt-4" src="security.svg" alt="placeholder" />
                    

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <img className="header-wave" src="wave.svg" alt=""/>
        </>
    )
}
export default Header