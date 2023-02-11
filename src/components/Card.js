
export default function Card({title, message}) {
  return (
    <div className="card is-fullheight">
        <div className="card-content">
            <div className="content">
                <p className="title is-4">{title}</p>
                <p className="subtitle is-6">{message}</p>
            </div>
        </div>
    </div>
  );
}