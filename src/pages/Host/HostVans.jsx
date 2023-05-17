import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HostVans = () => {
  const [vans, setVans] = useState([]);

  useEffect(() => {
    fetch("/api/host/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  const imageStyle = {
    width: "100px",
  };

  const hostVanElements = vans.map((van) => (
    <Link to={`/host/vans/${van.id}`} key={van.id}>
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
