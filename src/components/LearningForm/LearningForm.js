import React, { Component } from 'react';
import { Label, Input } from '../Form/Form';
import Button from '../Button/Button';

class LearningForm extends Component {
  state = {
    guess: '',
  };
  handleSubmit = (e) => {};

  firstInput = React.createRef();
  render() {
    console.log(this.state);
    return (
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
        <Button type="submit" onClick={(e) => this.handleSubmit(e)}>
          Submit your answer
        </Button>
      </form>
    );
  }
}

export default LearningForm;
