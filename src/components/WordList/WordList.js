import React, { Component } from 'react';
import Word from '../Word/Word';
import UserContext from '../../contexts/UserContext';

class WordList extends Component {
  static contextType = UserContext;

  renderWords() {
    return this.context.words.map((word, i) => <Word key={i} word={word} />);
  }

  render() {
    return (
      <div className="worldlist-div">
        {this.context.words.length === 0 ? (
          <div className="list">
            <p>No Words found for this language</p>
          </div>
        ) : (
          <div className="list">{this.renderWords()}</div>
        )}
      </div>
    );
  }
}

export default WordList;
