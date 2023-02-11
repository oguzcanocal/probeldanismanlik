import Card from "./Card";

export default function CardGroup() {
    return (
        <section className="section">
            <div className="container has-text-centered">
                <div className="columns is-multiline">
                    <div className="column">
                        <Card title="Test Title" message={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris."} />
                    </div>
                    <div className="column">
                        <Card title="Test Title" message={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris."} />
                    </div>
                    <div className="column">
                        <Card title="Test Title" message={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris."} />
                    </div>
                </div>
            </div>
        </section>
    )
}