import { Link } from "react-router-dom";

function Card({ item }) {
  return (
    <div className="col-12 col-md-6 col-lg-4 mb-5">
      <div className="card h-100 ">
        <img src={item.image} className="card-img" alt="..." />
        <div className="card-body p-4 ">
          <h4 className="card-text">{item.title}</h4>
          <p>{item.content}</p>
          <Link className="read">READ MORE »</Link>
        </div>
        <div className="card-footer d-flex flex-row align-items-center bg-transparent">
          <small className="text-body-secondary">
            {item.date} {item.month}
          </small>
          <span className="dot"></span>
          <small className="text-body-secondary"> No Comments</small>
        </div>
      </div>
    </div>
  );
}

export default Card;
