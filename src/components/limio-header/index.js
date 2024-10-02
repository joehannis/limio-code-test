import React from "react";
import BasketButton from "./components/BasketButton";
import "./index.css";

export const LimioHeader = () => {
  const [basket, setBasket] = useState({ items: [] });
  const { items = [] } = basket;

  return (
    <nav className={"navbar navbar-expand-lg navbar-light shadow"}>
      <input type="checkbox" id="navbar-toggle-cbox" />
      <a className="navbar-brand" href={"/"}>
        <img
          src={
            "https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_300,w_300,f_auto,q_auto/1156184/637770_576700.png"
          }
          alt="Header logo"
        />
      </a>
      <BasketButton mobile={true} />
      <label
        htmlFor="navbar-toggle-cbox"
        className="navbar-toggler collapsed"
        data-toggle="collapse"
        data-target="#navbar"
        aria-expanded="false"
        aria-controls="navbar"
      >
        <span className="navbar-toggler-icon" />
      </label>
    </nav>
  );
};

export default LimioHeader;
