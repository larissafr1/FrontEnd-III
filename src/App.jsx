import { useState } from "react";
import { Card } from "./Card";

function App() {

  const [errorForm, setErrorForm] = useState(false);
  const [cardName, setCardName] = useState("");
  const [colorName, setColorName] = useState("");
  const [allCards, setAllCards] = useState([
    {
      name: "White",
      color: "#FFFFFF",
    },
  ]);

  function addColor(event) {
    event.preventDefault();

    const newCard = {
      name: cardName,
      color: colorName,
    };

    console.log(newCard);

    if (cardName === "" || colorName === "") {
      setErrorForm(true);
    } else {
      setErrorForm(false);
      setAllCards([...allCards, newCard]);
      setCardName("");
      setColorName("");
    }
  }

  

  return (
    <section className="position-relative py-4 py-xl-5 ">
    <div className="container">
        <div className="col-md-6 col-xl-4">
            <div className="card-body d-flex flex-column align-items-center">
              <div className="App">
                <div className="title">
                  <h1>Adicionar nova cor</h1>
                </div>

                <form
                  className={errorForm ? "form-error" : ""}
                  onSubmit={(event) => addColor(event)}
                >
                  <div>
                    <label htmlFor="cardName">Nome</label>
                    <input
                      id="cardName"
                      type="text"
                      value={cardName}
                      onChange={(event) => setCardName(event.target.value)}
                    />
                  </div>

                  <div>
                    <label htmlFor="colorName">Código</label>
                    <input
                      id="colorName"
                      type="color"
                      value={colorName}
                      onChange={(event) => setColorName(event.target.value)}
                    />
                  </div>

                  <button type="submit">Adicionar</button>
                </form>

                {errorForm ? (
                  <span>Erro! Por favor, verifique os dados inseridos no formulário</span>
                ) : null}

                <div className="cards">
                  {allCards.map((card) => {
                    return <Card cardData={card} />;
                  })}
                </div>
              </div>
            </div>
        </div>
    </div>
  </section>
);
}

export default App