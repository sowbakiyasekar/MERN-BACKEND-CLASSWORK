import { Link } from "react-router-dom";

function MethodCard({ method }) {
  return (
    <Link
      to={`/method/${method.id}`}
      className="card"
    >
      <h2>{method.title}</h2>

      <p>{method.definition}</p>
    </Link>
  );
}

export default MethodCard;