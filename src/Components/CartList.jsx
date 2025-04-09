import { Cart } from "./Cart";

function CartList({ catalog = [] }) {
  return (
    <>
      <div className="list">
        {catalog.map((el) => (
          <Cart key={el.id} {...el} />
        ))}
      </div>
    </>
  );
}
export { CartList };
