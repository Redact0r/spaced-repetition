import React, { Component } from 'react';
import UserContext from '../../contexts/UserContext';
import Button from '../Button/Button';

class Prompt extends Component {
  static contextType = UserContext;

  renderCorrect = () => {
    return <h2 className="learn-header">Correct!</h2>;
  };

  renderIncorrect = () => {
    return (
      <h2 className="learn-header">{'Good try, but not quite right :('}</h2>
    );
  };

  render() {
    return (
      <div>
        {this.context.nextWord.isCorrect === true
          ? this.renderCorrect()
          : this.renderIncorrect()}
        <Button>Next Word</Button>
      </div>
    );
  }
}

export default Prompt;
