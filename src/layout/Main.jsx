import { CartList } from "../Components/CartList";
import { Preloader } from "../Components/Preloader";
import { useEffect } from "react";
import { useState } from "react";

function Main() {
  const [catalog, setCatalog] = useState([]);

  useEffect(() => {
    fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=religious&amount=10")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Сеть ответила с ошибкой " + response.status);
        }
        return response.json(); // Преобразуем ответ в JSON
      })
      .then((data) => {
        setCatalog(data.jokes);
        console.log(data); // Выводим результат
      })
      .catch((error) => {
        console.error("Ошибка:", error);
      });
  }, []);

  return (
    <>
      <main className="container content">
        {!catalog.length ? <Preloader /> : <CartList catalog={catalog} />}
      </main>
    </>
  );
}
export { Main };
