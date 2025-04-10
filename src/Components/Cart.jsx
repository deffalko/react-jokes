function Cart(props) {
  const { category, setup, delivery, joke, addToBasket } = props;

  return (
    <div className="card deep-purple darken-1">
      <div className="card-content white-text">
        <span className="card-title">{category}</span>
        <p>{setup}</p>
        <p>{delivery}</p>
        <p>{joke}</p>
      </div>
      <div className="card-action">
        <div className="box">
          <button className="btn" onClick={() => addToBasket(props)}>
            <i className="material-icons">thumb_up</i>
          </button>
        </div>
      </div>
    </div>
  );
}
export { Cart };
