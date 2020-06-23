import React, { Component } from "react";
import UserContext from "../../contexts/UserContext";

class WordList extends Component {
  static contextType = UserContext;

    renderWords() {return this.context.words.map((word) => <p>{word.original}</p>} );
    render() {
        return (<div className="worldlist-div">{this.words}</div>);
  }
}

export default WordList;
