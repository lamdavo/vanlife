import { useFetchVans } from "../fetchVans";
import { Link } from "react-router-dom";

const Vans = () => {
  const { loading, vans } = useFetchVans();

  if (loading) return <div>Loading...</div>;

  const vanElements = vans.map((van) => {
    const { id, title, price, tier, img } = van;
    return (
      <div key={id} className="van-tile">
        <Link to={`/vans/${van.id}`}>
          <img src={img} alt="van image" />
          <div className="van-info">
            <h3>{title}</h3>
            <p>
              ${price}
              <span>/day</span>
            </p>
          </div>
          <i className={`van-type ${tier} selected`}>{tier}</i>
        </Link>
      </div>
    );
  });

  return (
    <div className="van-list-container">
      <h1>Explore our van options</h1>
      <div className="van-list">{vanElements}</div>
    </div>
  );
};
export default Vans;
