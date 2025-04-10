import { useState } from "react";

function Search({ onFilterChange }) {
  const [type, setType] = useState("all");

  const handleTypeChange = (event) => {
    const selectedType = event.target.dataset.type;
    setType(selectedType);
    onFilterChange(selectedType); // Передаем выбранный тип вверх
  };

  return (
    <>
      <div>
        <p className="radio-buttons">
          <label className="custom-radio">
            <input
              className="with-gap"
              name="type"
              type="radio"
              data-type="all"
              checked={type === "all"}
              onChange={handleTypeChange}
            />
            <span className="with-gap">All</span>
          </label>
          <label className="custom-radio">
            <input
              className="with-gap"
              name="type"
              type="radio"
              data-type="Programming"
              checked={type === "Programming"}
              onChange={handleTypeChange}
            />
            <span className="with-gap">Programming</span>
          </label>
          <label className="custom-radio">
            <input
              className="with-gap"
              name="type"
              type="radio"
              data-type="Pun"
              checked={type === "Pun"}
              onChange={handleTypeChange}
            />
            <span className="with-gap">Pun</span>
          </label>
          <label className="custom-radio">
            <input
              className="with-gap"
              name="type"
              type="radio"
              data-type="Dark"
              checked={type === "Dark"}
              onChange={handleTypeChange}
            />
            <span className="with-gap">Dark</span>
          </label>
          <label className="custom-radio">
            <input
              className="with-gap"
              name="type"
              type="radio"
              data-type="Misc"
              checked={type === "Misc"}
              onChange={handleTypeChange}
            />
            <span className="with-gap">Misc</span>
          </label>
          <label className="custom-radio">
            <input
              className="with-gapp"
              name="type"
              type="radio"
              data-type="Christmas"
              checked={type === "Christmas"}
              onChange={handleTypeChange}
            />
            <span className="with-gap">Christmas</span>
          </label>
          <label className="custom-radio">
            <input
              className="with-gap"
              name="type"
              type="radio"
              data-type="Spooky"
              checked={type === "Spooky"}
              onChange={handleTypeChange}
            />
            <span className="with-gap">Spooky</span>
          </label>
        </p>
      </div>
    </>
  );
}
export { Search };
