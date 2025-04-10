import { useState, useEffect } from "react";
import { CartList } from "../Components/CartList";
import { Preloader } from "../Components/Preloader";
import { BasketList } from "../Components/BasketList";
import { Alert } from "../Components/Alert";
import { Search } from "../Components/Search";

function Main() {
  const [catalog, setCatalog] = useState([]);
  const [isBasketShow, setBasketShow] = useState(false);
  const [basket, setBasket] = useState([]);
  const [alertName, setAlertName] = useState("");
  const [filterType, setFilterType] = useState("all"); // Для хранения выбранного типа шутки

  const filteredCatalog =
    filterType === "all"
      ? catalog
      : catalog.filter((joke) => joke.category === filterType);

  const handleFilterChange = (type) => {
    setFilterType(type);
  };

  const closeAlert = () => {
    setAlertName("");
  };

  const addToBasket = (joke) => {
    // Проверяем, если шутка уже есть в корзине
    if (basket.some((item) => item.id === joke.id)) {
      // Если шутка уже есть, просто выходим из функции
      return;
    }

    // Если шутки нет в корзине, добавляем ее
    setBasket((prevBasket) => [...prevBasket, joke]);
    setAlertName(joke.category);
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
        <Search onFilterChange={handleFilterChange} />
        {!filteredCatalog.length ? (
          <Preloader />
        ) : (
          <CartList catalog={filteredCatalog} addToBasket={addToBasket} />
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
        {alertName && <Alert name={alertName} closeAlert={closeAlert} />}
      </main>
    </>
  );
}
export { Main };
