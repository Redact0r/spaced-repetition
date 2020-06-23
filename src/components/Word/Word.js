import React, { Component } from 'react';
import UserContext from '../../contexts/UserContext';

class Word extends Component {
  static contextType = UserContext;
  render() {
    const { word } = this.props;
    //reset this.context.correct/incorrect to this.props.word
    return (
      <div className="word">
        <ul>
          <li>
            <h4>{word.original}</h4>
            <p>correct answer count: {this.context.correct}</p>
            <p> incorrect answer count: {this.context.incorrect}</p>
          </li>
        </ul>
      </div>
    );
  }
}

export default Word;
