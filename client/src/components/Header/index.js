import React from "react";
import { Jumbotron } from 'reactstrap';

//import style from "./style.css";

const Header = (props) => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-4 text-center">{"Book Search"}</h1>
        <hr></hr>
        <h2 className="text-center">Search for and Save Books of Interest</h2>
        <h5 className="text-center">Built with React and Powered by Google Books API</h5>
      </Jumbotron>
    </div>
  );
};



export default Header;