import React, { Component } from 'react';
import { Label, Input } from '../Form/Form';
import Button from '../Button/Button';
import UserService from '../../services/user-service';
import UserContext from '../../contexts/UserContext';

class LearningForm extends Component {
  static contextType = UserContext;

  state = {
    guess: '',
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let guess = this.state.guess.toLowerCase();
    UserService.sendGuess(guess).then((data) => this.context.setNextWord(data));
    this.props.prompt();
  };

  firstInput = React.createRef();
  render() {
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <Label htmlFor="learn-guess-input">
            What's the translation for this word?
          </Label>
          <Input
            ref={this.firstInput}
            id="learn-guess-input"
            required
            onChange={(e) => this.setState({ guess: e.target.value })}
          ></Input>
          <Button type="submit" disabled={this.state.guess === ''}>
            Submit your answer
          </Button>
        </form>
      </div>
    );
  }
}

export default LearningForm;
