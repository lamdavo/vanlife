import { Link, useSearchParams, useLoaderData } from "react-router-dom";
import { getVans } from "../../api";

export function loader() {
  return getVans();
}

const Vans = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");

  const vans = useLoaderData();
  //const [vans, setVans] = useState(data);

  const displayVans = typeFilter
    ? vans.filter((van) => van.type === typeFilter)
    : vans;

  const vanElements = displayVans.map((van) => (
    <div key={van.id} className="van-tile">
      <Link to={van.id}>
        <img src={van.imageUrl} />
        <div className="van-info">
          <h3>{van.name}</h3>
          <p>
            ${van.price}
            <span>/day</span>
          </p>
        </div>
        <i className={`van-type ${van.type} selected`}>{van.type}</i>
      </Link>
    </div>
  ));

  return (
    <div className="van-list-container">
      <h1>Explore our van options</h1>
      <div className="van-list-filter-buttons">
        <button
          className={`van-type simple ${
            typeFilter === "simple" ? "selected" : ""
          }`}
          onClick={() => setSearchParams({ type: "simple" })}
        >
          Simple
        </button>
        <button
          className={`van-type luxury ${
            typeFilter === "luxury" ? "selected" : ""
          }`}
          onClick={() => setSearchParams({ type: "luxury" })}
        >
          Luxury
        </button>
        <button
          className={`van-type rugged ${
            typeFilter === "rugged" ? "selected" : ""
          }`}
          onClick={() => setSearchParams({ type: "rugged" })}
        >
          Rugged
        </button>

        {typeFilter ? (
          <button
            className="van-type clear-filters"
            onClick={() => setSearchParams({ type: "" })}
          >
            Clear filters
          </button>
        ) : null}
      </div>
      <div className="van-list">{vanElements}</div>
    </div>
  );
};
export default Vans;
