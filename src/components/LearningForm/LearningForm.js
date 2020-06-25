import React, { Component } from 'react';
import { Label, Input } from '../Form/Form';
import Button from '../Button/Button';
import Word from '../Word/Word';
import UserService from '../../services/user-service';

class LearningForm extends Component {
  state = {
    guess: '',
    correct: '',
    incorrect: '',
    check: 0
  };

  guessCheck = () => {
    guess.toLowercase()
if(guess === word.translation){
check++
correct++
}
else{
  incorrect++
  check-1
}
  }
  handleSubmit = (e) => {
    e.preventDefault();
this.guessCheck;
UserService.
  };

  firstInput = React.createRef();
  render() {
    console.log(this.state);
    return (
      <div>
      <form>
        <Label htmlFor="learn-guess-input">
          What's the translation for this word?
        </Label>
        <Input
          ref={this.firstInput}
          id="learn-guess-input"
          required
          onChange={(e) => this.setState({ guess: e.target.value })}
        ></Input>
        <Button
          type="submit"
          onClick={(e) => this.handleSubmit(e)}
          disabled={this.state.guess === ''}
        >
          Submit your answer
        </Button>
      </form>
      {this.state.check > 0 ? (<Correct />):(<Incorrect />)}
      </div>
    );
  }
}

export default LearningForm;
