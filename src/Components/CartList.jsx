import { Cart } from "./Cart";

function CartList({ catalog = [], addToBasket }) {
  return (
    <div className="list">
      {catalog.map((el) => (
        <Cart key={el.id} {...el} addToBasket={addToBasket} />
      ))}
    </div>
  );
}
export { CartList };
