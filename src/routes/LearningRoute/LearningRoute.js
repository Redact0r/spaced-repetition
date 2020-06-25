import React, { Component } from 'react';
import LearningCard from '../../components/LearningCard/LearningCard';
import UserService from '../../services/user-service';
import Prompt from '../../components/Prompt/Prompt';
import './LearningRoute.css';
class LearningRoute extends Component {
  state = {
    //Sample --- Replace with actual api information
    word: {},
    err: '',
    prompt: null,
  };
  componentDidMount() {
    UserService.getWordCard()
      .then((data) => this.setState({ word: data }))
      .catch((data) => this.setState({ err: data }));
  }
  setPrompt = () => {
    this.setState({ prompt: true });
  };
  renderPrompt = () => {
    if (this.state.prompt === true) {
      return <Prompt />;
    }
  };
  render() {
    return (
      <section>
        <LearningCard
          word={this.state.word}
          score={this.state.score}
          prompt={this.setPrompt()}
        />
        {this.renderPrompt()}
      </section>
    );
  }
}

export default LearningRoute;
