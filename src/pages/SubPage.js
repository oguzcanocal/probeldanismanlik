import Navbar from "../components/Navbar"
import useTitle from "../hooks/useTitle"
/**
 * @param {object} props
 * @param {string} props.title
 * @param {string} props.coverImage
 * @param {string} props.subImage
 * @param {string} props.heading
 * @param {[string]} props.texts 
 * @returns 
 */
export default function SubPage({title, coverImage, subImage, heading, texts, ...rest}) {
    useTitle(title)
    console.log(texts)
    return (
        <>
            <Navbar />
            <section className="hero is-medium header">
                <div className="hero-body">
                    <div className="container">
                        <p className="title has-text-centered has-text-white">{heading}</p>
                    </div>
                </div>
            </section>
            <section className="section">
                <div className="container">
                    <div className="columns is-vcentered">
                        <div className="column">
                            <img src={subImage} alt={subImage}/>
                        </div>
                        <div className="column" style={{ height: "100%" }}>
                            {texts.map(text => {
                                return <p className="p-4">{text}</p>
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}