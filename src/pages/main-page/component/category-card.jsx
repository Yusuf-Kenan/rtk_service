/* eslint-disable react/prop-types */
import styles from "./category-card.module.css";
import { Link } from "react-router-dom";

export default function CategoryCard(props) {
  console.log(props.category.slug);
  return (
    <div className="card mb-4 rounded-3 shadow-sm border-primary">
      <div className="card-header py-3 text-bg-primary border-primary">
        <h4 className="my-0 fw-normal">{props.category.name}</h4>
      </div>
      <div className="card-body">
        <img
          className={styles.card_image}
          src={props.category.image}
          alt="cat-img"
        />
        <Link
          to={`category/${props.category.slug}`}
          className="w-100 btn btn-lg btn-primary"
        >
          Details
        </Link>
      </div>
    </div>
  );
}
