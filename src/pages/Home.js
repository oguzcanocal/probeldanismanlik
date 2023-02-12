import CardGroup from "../components/CardGroup";
import Header from "../components/Header";
import useTitle from "../hooks/useTitle";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
export default function Home() {
    useTitle("Probel Mühendislik")
    return (
        <>
            <Navbar/>
            <Header/>
            <CardGroup/>
            <Footer/>
        </>
    )
}