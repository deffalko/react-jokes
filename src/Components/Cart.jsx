function Cart(props) {
  const { category, setup, delivery, joke } = props;

  return (
    <>
      <div className="card blue-grey darken-1">
        <div className="card-content white-text">
          <span className="card-title">{category}</span>
          <p>{setup}</p>
          <p>{delivery}</p>
          <p>{joke}</p>
        </div>
        <div className="card-action">
          <div className="box">
            <button className="btn">EN</button>
            <button className="btn">RU</button>
          </div>
        </div>
      </div>
    </>
  );
}
export { Cart };
