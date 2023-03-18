import Card from "./Card";

export default function CardGroup() {
    return (
        <section className="section">
            <div className="container has-text-centered">
                <div className="columns is-multiline">
                    <div className="column">
                        <Card title="Önceliğimiz İnsan" message={"Probel Mühendislik, verilen tüm hizmetlerin odağında insan sağlığı ve insani değerleri önde tutularak hizmet verir."} />
                    </div>
                    <div className="column">
                        <Card title="Çok Yönlü Güven" message={"Probel Mühendislik ilk kurulduğu günden bu yana hizmet verdiği firmalar ile danışmanlıktan çok firma bünyesinde hizmet anlayışı ile çok yönlü güven duygusuyla çalışır."} />
                    </div>
                    <div className="column">
                        <Card title="Sürdürülebilirlik" message={"Probel Mühendislik yapılan her çalışmanın devamlığı, takip edilebilirliği ve uygulanabilirliğini değerlenidirerek çalışır."} />
                    </div>
                </div>
            </div>
        </section>
    )
}