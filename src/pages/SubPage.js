import useTitle from "../hooks/useTitle"
import parse from 'html-react-parser'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
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
            <Navbar/>
            <section className="hero is-medium header subpage">
                <img className="subpage-header-bg" src={coverImage} alt=""/>
                <div className="hero-body">
                    <div className="container">
                        <p className="title has-text-centered has-text-white mb-5">{heading}</p>
                    </div>
                </div>
            </section>
            
            <section className="section">
                <div className="container">
                    <div className="columns">
                        <div className="column">
                            <img className="p-6 left-slider" src={subImage} alt={subImage}/>
                        </div>
                        <div className="column" style={{ height: "100%" }}>
                            {texts.map( text => {
                                return <p key={text} className="p-3">{parse(text)}</p>
                            })}
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}