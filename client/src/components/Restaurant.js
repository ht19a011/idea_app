import { Link } from "react-router-dom";
import { Review } from "./Review.js";

export function Restaurant({ restaurant }) {
  return (
    <article className="box">
      <div className="columns">
       
        <div className="column">
          <h3 className="title is-5">
            <Link
              className="has-text-dark"
              to={`/restaurants/${restaurant.id}`}
            >
              {restaurant.name}
            </Link>
          </h3>
          
        </div>
      </div>
    </article>
  );
}
