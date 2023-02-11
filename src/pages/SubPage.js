import useTitle from "../hooks/useTitle"
import parse from 'html-react-parser' 
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
            <section className="hero is-medium imaged-section header">
                <div className="hero-body">
                    <div className="container">
                        <p className="title has-text-centered has-text-white mb-5">{heading}</p>
                    </div>
                </div>
            </section>
            <img className="header-wave" src="wave.svg" alt=""/>
            <section className="section">
                <div className="container">
                    <div className="columns is-vcentered">
                        <div className="column">
                            <img className="p-6" src={subImage} alt={subImage}/>
                        </div>
                        <div className="column" style={{ height: "100%" }}>
                            {texts.map(text => {
                                return <p className="p-4">{parse(text)}</p>
                            })}
                        </div>
                    </div>
                </div>
            </section>
            
        </>
    )
}