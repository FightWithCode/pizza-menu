import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Pizza(props) {
  return (
    <li>
      <img
        src="https://raw.githubusercontent.com/jonasschmedtmann/ultimate-react-course/main/03-pizza-menu/starter/pizzas/focaccia.jpg"
        alt={props.pizzaObj.name}
      />
      <h3>{props.pizzaObj.name}</h3>
      <p>{props.pizzaObj.ingredients}</p>
    </li>
  );
}

function Header() {
  // const style = {"color": "red"}
  const style = {};
  return (
    <header className="header">
      <h1 style={style}>The New Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = []
    return (
    <main className="menu">
      <h2>Our Menu</h2>
      <ul className="pizzas">
        {pizzas.map((pizza) => (
          // Method 1
          // <Pizza
          //   name={pizza.name}
          //   ingredients={pizza.ingredients}
          //   photoName="https://raw.githubusercontent.com/jonasschmedtmann/ultimate-react-course/main/03-pizza-menu/starter/pizzas/focaccia.jpg"
          //   price={pizza.price}
          // />
          // Method 2
          <Pizza pizzaObj={pizza} />
        ))}
      </ul>
    </main>
  );
}

function Footer() {
  const hours = new Date().getHours();
  const open = 10;
  const close = 22;
  var msg = "";
  if (hours > open && hours < close) msg = "We are open";
  else msg = "We are closed!";
  return (
    <footer className="footer">
      {new Date().toLocaleTimeString()} {msg}
    </footer>
  );
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
