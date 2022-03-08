import React, { Component } from "react";
import { Button, Jumbotron } from "reactstrap";

function NoMatch() {
  return (
    <div>
    <Jumbotron>
      <h1 className="display-4 text-center">404 Page Not Found</h1>
      <h1 className="display-4 text-center">
        <span role="img" aria-label="Face With Rolling Eyes Emoji">
          🙄
        </span>
      </h1>
      <hr></hr>
      <Button href="/" color="primary" size="lg" block>
        Start a new search
      </Button>
    </Jumbotron>
  </div>
  );
}

export default NoMatch;
