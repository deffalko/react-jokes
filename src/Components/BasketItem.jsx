function BasketItem({ joke, removeFromBasket }) {
  return (
    <ul className="collection with-header">
      <li className="collection-item">
        <div>
          {joke.setup || joke.joke} <br />
          <span>Тип: {joke.type}</span>
          <a
            href="#!"
            className="secondary-content"
            onClick={() => removeFromBasket(joke.id)}
          >
            <i className="material-icons">delete</i>
          </a>
        </div>
      </li>
    </ul>
  );
}

export { BasketItem };
