import CardGroup from "../components/CardGroup";
import Header from "../components/Header";
import useTitle from "../hooks/useTitle";

export default function Home() {
    useTitle("Probel Mühendislik")
    return (
        <>
            <Header/>
            <CardGroup/>
        </>
    )
}