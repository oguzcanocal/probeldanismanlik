
export default function Card({title, message}) {
  return (
    <div className="card is-fullheight">
        <div className="card-content">
            <div className="content">
                <p className="title is-4 card-title">{title}</p>
                <p className="subtitle is-6 p-5">{message}</p>
            </div>
        </div>
    </div>
  );
}