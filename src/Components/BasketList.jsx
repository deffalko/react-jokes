import { BasketItem } from "./BasketItem";

function BasketList({ basket, handleBasketShow, removeFromBasket }) {
  return (
    <div className="basket-box">
      <div className="basket">
        {basket.length === 0 ? (
          <p className="basket-tytle">Корзина пуста</p>
        ) : (
          basket.map((joke) => (
            <BasketItem
              key={joke.id}
              joke={joke}
              removeFromBasket={removeFromBasket}
            />
          ))
        )}
      </div>
      <i className="material-icons basket-close" onClick={handleBasketShow}>
        close
      </i>
    </div>
  );
}

export { BasketList };
