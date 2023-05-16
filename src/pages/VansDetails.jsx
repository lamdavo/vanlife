import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useFetchVans } from "../fetchVans";

const VansDetails = () => {
  const { vans } = useFetchVans();
  const params = useParams();

  const singleVan = vans.map((van) => {
    const { id, title, price, tier, img, description } = van;
    return (
      <div key={id} className="van-detail">
        <img src={img} alt="van image" />
        <h2>{title}</h2>
        <p className="van-price">
          <span>${price}</span>/day
        </p>
        <p>{description}</p>
        <button className="link-button">Rent this van</button>
      </div>
    );
  });

  return <div className="van-details-container">{singleVan}</div>;
};

export default VansDetails;
