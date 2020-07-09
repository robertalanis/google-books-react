import React from "react";
import { Jumbotron } from 'reactstrap';

//import style from "./style.css";

const Header = (props) => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-4 text-center">{"(React) Google Books Search"}</h1>
        <hr></hr>
        <h2 className="text-center">Search for and Save Books of Interest</h2>
      </Jumbotron>
    </div>
  );
};



export default Header;