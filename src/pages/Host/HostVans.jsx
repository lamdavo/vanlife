import { Link } from "react-router-dom";
import { getHostVans } from "../../api";
import { useLoaderData } from "react-router-dom";
import { requireAuth } from "../../utils";

export async function loader() {
  await requireAuth();
  return getHostVans();
}

const HostVans = () => {
  const vans = useLoaderData();

  const imageStyle = {
    width: "100px",
  };

  const hostVanElements = vans.map((van) => (
    <Link to={van.id} key={van.id} className="host-van-link-wrapper">
      <div className="host-van-single">
        <img src={van.imageUrl} style={imageStyle} />
        <div className="host-van-info">
          <h3>{van.name}</h3>
          <p>
            ${van.price}
            <span>/day</span>
          </p>
        </div>
      </div>
    </Link>
  ));

  return (
    <section className="host-vans-title">
      <h1>Your listed vans</h1>
      <div className="host-van-list">
        {vans.length > 0 ? (
          <section>{hostVanElements}</section>
        ) : (
          <h2>loading...</h2>
        )}
      </div>
    </section>
  );
};

export default HostVans;
