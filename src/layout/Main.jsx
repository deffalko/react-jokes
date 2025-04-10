import { useState, useEffect } from "react";
import { CartList } from "../Components/CartList";
import { Preloader } from "../Components/Preloader";
import { BasketList } from "../Components/BasketList";

function Main() {
  const [catalog, setCatalog] = useState([]);
  const [isBasketShow, setBasketShow] = useState(false);
  const [basket, setBasket] = useState([]);

  const addToBasket = (joke) => {
    setBasket((prevBasket) => [...prevBasket, joke]);
  };

  const removeFromBasket = (id) => {
    setBasket((prevBasket) => prevBasket.filter((joke) => joke.id !== id));
  };

  const handleBasketShow = () => {
    setBasketShow((prev) => !prev);
  };

  useEffect(() => {
    fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=religious&amount=10")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Сеть ответила с ошибкой " + response.status);
        }
        return response.json();
      })
      .then((data) => {
        setCatalog(data.jokes);
      })
      .catch((error) => {
        console.error("Ошибка:", error);
      });
  }, []);

  return (
    <>
      <main className="container content">
        {!catalog.length ? (
          <Preloader />
        ) : (
          <CartList catalog={catalog} addToBasket={addToBasket} />
        )}
        {isBasketShow && (
          <BasketList
            basket={basket}
            handleBasketShow={handleBasketShow}
            removeFromBasket={removeFromBasket}
          />
        )}
        <i className="material-icons basket-icon" onClick={handleBasketShow}>
          shopping_cart
        </i>
      </main>
    </>
  );
}
export { Main };
