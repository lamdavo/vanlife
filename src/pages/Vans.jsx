import { useFetchVans } from "../fetchVans";

const Vans = () => {
  const { loading, vans } = useFetchVans();

  if (loading) return <div>Loading...</div>;

  const vanElements = vans.map((van) => {
    const { id, title, description, price, tier, img } = van;
    return (
      <div key={id} className="van-tile">
        <img src={img} alt="van image" />
        <div className="van-info">
          <h3>{title}</h3>
          <p>
            ${price}
            <span>/day</span>
          </p>
        </div>
        <i className={`van-type ${tier} selected`}>{tier}</i>
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
