import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useFetchVans } from "../fetchVans";

const VansDetails = () => {
  const { vans } = useFetchVans();
  const params = useParams();

  //TODO: FIX THIS : Pick up here
  const singleVan = vans.map((van) => {
    const { id, title, price, tier, img } = van;
    return (
      <div key={id} className="van-detail">
        <img src={img} alt="van image" />
      </div>
    );
  });

  return <div className="van-details-container">{singleVan}</div>;
};

export default VansDetails;
