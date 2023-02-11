import CardGroup from "../components/CardGroup";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import useTitle from "../hooks/useTitle";

export default function Home() {
    useTitle("Probel Mühendislik")
    return (
        <>
            <Navbar />
            <Header/>
            <CardGroup/>
        </>
    )
}