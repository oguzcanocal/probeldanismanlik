import CardGroup from "../components/CardGroup";
import Header from "../components/Header";
import useTitle from "../hooks/useTitle";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card"

export default function Home() {
    useTitle("Probel Danışmalık")
    return (
        <>
            <Navbar/>
            <Header/>
            <section className="section my-6">
                <div className="container">
                    
                    <h2 className="title has-text-centered has-text-weight-bold card-title">Değerlerimiz</h2>
                    <CardGroup/>
                </div>
            </section>
            
            <section className="section my-6">
                <div className="container">
                    
                    <h2 className="title has-text-centered has-text-weight-bold card-title">Hedeflerimiz</h2>
                    <p className=" has-text-centered is-size-4">
                    Probel Mühendislik hizmet çercevesi içeriside yer alan tüm faaliyetleri ile birlikte 5 yılı aşkın süredir insan, güven ve sürdürülebilirlik odağı altında müşterilerin tüm entegre hizmetlerini tek bir başlık aktında toplayıp hizmet vermektedir. Bu hizmetleri sürekli geliştirerek ilk günki güven duygusuyla birlikte müşteri menmuniyeyini sağlamak.
                    </p>
                </div>
            </section>
            <Footer/>
        </>
    )
}