import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
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
      {/* <ProductList /> */}
      {/* <MyList /> */}
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co</h1>
    </header>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= 12 && hour <= 22;
  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} />
      ) : (
        <p>
          We will be happy to serve you between {closeHour}:00 and {closeHour}
          :00
        </p>
      )}
    </footer>
  );
}

function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;
  return (
    <main className="menu" style={{ padding: "80px" }}>
      <h2>Our Menu</h2>
      {numPizzas > 0 ? (
        <ul className="pizzas">
          {pizzas.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      ) : (
        <p>We are working on our menu . Please come back later</p>
      )}
    </main>
  );
}

function Pizza(props) {
  // if (props.pizzaObj.soldOut) return null;
  return (
    <li className={`pizza ${props.pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={props.pizzaObj.photoName}></img>
      <div>
        <h3>{props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>
        <span>
          {props.pizzaObj.soldOut ? "SOLD OUT" : props.pizzaObj.price + 3}
        </span>
      </div>
    </li>
  );
}

function Order(props) {
  return (
    <div className="order">
      <p>
        We are open until {props.closeHour} .Come visit us before{" "}
        {props.closeHour} or Order Online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

function ProductList() {
  const products = [
    {
      name: "Pencil",
      category: "Stationary",
      price: 10,
    },
    {
      name: "Mango",
      category: "Fruits",
      price: 200,
    },
    {
      name: "Rice",
      category: "Cooking",
      price: 235,
    },
    {
      name: "Juice",
      category: "Stationary",
      price: 10,
    },
  ];

  return (
    <div>
      <h2>Products :</h2>
      {products.map((product, index) => (
        <Product
          key={index}
          name={product.name}
          price={product.price}
          category={product.category}
        />
      ))}
    </div>
  );
}

function Product({ name, category, price }) {
  return (
    <div className="menu">
      <div className="pizzas">
        <h2>Name : {name}</h2>
        <h3>Category : {category}</h3>
        <h3>Price : {price}</h3>
      </div>
    </div>
  );
}

const MyList = () => {
  const items = ["Item1", "Item2", "Item3"];
  return (
    <>
      {items.map((item) => (
        <p key={item}> {item} </p>
      ))}
    </>
  );
};
