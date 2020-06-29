import React, { Component } from 'react';
import { Label, Input } from '../Form/Form';
import Button from '../Button/Button';
import UserService from '../../services/user-service';
import UserContext from '../../contexts/UserContext';

class LearningForm extends Component {
  static contextType = UserContext;

  handleSubmit = (e) => {
    e.preventDefault();
    let guess = this.props.guess.toLowerCase();
    UserService.sendGuess(guess).then((data) => this.context.setNextWord(data));
    this.props.setPrompt();
  };

  firstInput = React.createRef();
  render() {
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)} className="guess-form">
          <Label htmlFor="learn-guess-input">
            What's the translation for this word?
          </Label>
          <Input
            ref={this.firstInput}
            id="learn-guess-input"
            required
            onChange={(e) => this.props.setGuess(e)}
          ></Input>
          <Button type="submit" disabled={this.props.guess === ''}>
            Submit your answer
          </Button>
        </form>
      </div>
    );
  }
}

export default LearningForm;
