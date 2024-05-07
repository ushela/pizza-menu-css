import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Meatpie",
    ingredients:
      "Ground beef with olives, fried egg, pulled pork, diced steak.",
    price: 10,
    photoName: "nigerian-dishes/meatpie.png",
    soldOut: false,
  },
  {
    name: "Peppered Snail",
    ingredients: "boiled snails ,sautéed in onions, peppers and spices. ",
    price: 4,
    photoName: "nigerian-dishes/peppered-snail.png",
    soldOut: false,
  },
  {
    name: "Eggplant Sauce",
    ingredients: " eggplant,oil, salt and pepper",
    price: 9,
    photoName: "nigerian-dishes/eggplant-stew.png",
    soldOut: false,
  },
  {
    name: "Chicken Suya",
    ingredients:
      " beef,peanut-based, dried spices, garlic powder, onion powder, cayenne pepper, salt, and black pepper.",
    price: 13,
    photoName: "nigerian-dishes/chicken-suya.png",
    soldOut: false,
  },
  {
    name: "Ofada sauce",
    ingredients:
      "green peppers and red peppers, then assorted meat, hard-boiled eggs, and palm oil.",
    price: 10,
    photoName: "nigerian-dishes/ofada-sauce.png",
    soldOut: false,
  },
  {
    name: "Puff Puff",
    ingredients: "flour,yeast,sugar, flavour and oil",
    price: 18,
    photoName: "nigerian-dishes/puff-puff.png",
    soldOut: true,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  // const style = { color: "red", fontSize: "48px", textTransform: "uppercase" };
  const style = {};

  return (
    <header className="header">
      <h1 style={style}>Nigerian Dishes</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our menu</h2>

      {numPizzas > 0 ? (
        <>
          <p>
            Nigerian cuisine is among the best in the world, and the country has
            a fantastic culinary scene. Even though some of them may be
            unfamiliar to you, isn't it exciting to learn how to cook new foods?
            Your greatest option is to dive right in and take advice from the
            pros!
          </p>

          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later :)</p>
      )}

      {/* <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price={10}
      />
      <Pizza
        name="Pizza Funghi"
        ingredients="Tomato, mushrooms"
        price={12}
        photoName="pizzas/funghi.jpg"
      /> */}
    </main>
  );
}

function Pizza({ pizzaObj }) {
  console.log(pizzaObj);

  // if (pizzaObj.soldOut) return null;

  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>

        {/* {pizzaObj.soldOut ? (
          <span>SOLD OUT</span>
        ) : (
          <span>{pizzaObj.price}</span>
        )} */}

        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  // if (hour >= openHour && hour <= closeHour) alert("We're currently open!");
  // else alert("Sorry we're closed");

  // if (!isOpen) return <p>CLOSED</p>;

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00.
        </p>
      )}
    </footer>
  );

  // return React.createElement("footer", null, "We're currently open!");
}

function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        We're open from {openHour}:00 to {closeHour}:00. Come visit us or order
        online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

// React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// React before 18
// ReactDOM.render(<App />, document.getElementById("root"));
